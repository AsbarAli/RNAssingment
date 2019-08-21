import type {APIEventHandler} from '@todoMobileApp:types/Core';

/**
 * Base URL of the APi
 */
let BASE_URL: string | null = null;

/**
 * Update the Base URL of the API
 * @param {string | null} baseURL The Base URL
 */
export const setBaseURL = (baseURL: string | null): void => {
  BASE_URL = baseURL;
};

/**
 * Event types handled by the Core API
 */
export const EVENT_TYPES = {
  UNAUTHORIZED: 'unauthorized',
  UNKNOWN: 'unknown',
};

/**
 * Event handler
 * @param  {Error}        error
 * @return {null}
 */
let eventHandler: APIEventHandler | null = null;

/**
 * Sets the event handler
 * @param {APIEventHandler} handler Event handler
 */
export const setEventHandler = (handler: APIEventHandler): void => {
  eventHandler = handler;
};

/**
 * Validates the precense of a valid Base URL
 */
const validateBaseURL = (): void => {
  if (!BASE_URL) {
    throw new Error('Please set a Base URL using `setBaseUrl(baseURL: string) => void` method');
  }
};

/**
 * Default request headers
 * @type {Object}
 */
const defaultRequestHeaders: {[string]: string} = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

/**
 * Create URL params from given key value pairs
 * @param  {object} params Key value pairs to be converted to URL params
 * @return {string}        Converted URL params string
 */
const createURLParams = (params: {[string]: any} | null): string => {
  let convertedParams = '';

  // Add params to URL if there are any
  if (params) {
    Object
      .keys(params)
      .forEach((key, index) => {
        convertedParams += `${index === 0 ? '?' : '&'}${key}=${(params || {})[key]}`;
      });
  }

  return convertedParams;
};

/**
 * FETCH API doesn't automatically throw an error in case of failed reponse status.
 * We have to handle it ourselves. We handle it by looking at the response code.
 * @param  {Response} response API response
 * @return {Response}          The response is returned if there is no errors thrown
 * @throws {Error}             Throws error if response status is not OK
 */
const handleResponseStatus = async (response: Response): Promise<any> => {
  if (response && response.status < 200 || response.status >= 300) {
    const error: any = new Error(response.statusText);
    error.response = await response.json();

    // See if we need any special event handlers
    if (response.status === 401) {
      // UNAUTHORIZED means the user is no longer authorized to use the system.
      // We have to tell the client
      // Client will handle signing out or whatever
      eventHandler && eventHandler(EVENT_TYPES.UNAUTHORIZED, error);
    }

    // We throw the error even if we call a special handler
    throw error;
  }

  return response.json();
};

/**
 * Make GET request
 * Base URL is required to make a request. Throws an error if BASE_URL is not valid
 *
 * @param  {string}         endpoint    The endpoint to call
 * @param  {object | null}  headers     Additional headers
 * @param  {object | null}  queryParams URL params
 * @return {Promise}                    Network request promise
 */
export const GET = async (endpoint: string, headers: {[string]: any} | null, queryParams: {[string]: any} | null): Promise<any> => {
  // Validate state before making a network request
  validateBaseURL(); // To proceed we need a Base URL to be present

  // Create the request URL // $FlowFixMe
  const url: string = `${BASE_URL}/${endpoint}${createURLParams(queryParams)}`;
  const options: {[string]: any} = {
    headers: {
      // Spread the default request headers
      ...defaultRequestHeaders,

      // Spread the given additional headers
      ...headers,
    },
  };
  const response = await fetch(url, options);

  // Handle the response before returning
  return handleResponseStatus(response);
};
