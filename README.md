# RNAssignment
<br />

### Simple React Native app for the initial screening
**Note:** For this simple app, it is not necessarily have to use redux, redux saga or realm (Can do easily with asynStoarge). Since this is the part of screening interview, I thought it would be better to add those latest technologies as well.

<br />

![](https://drive.google.com/uc?id=1bkzFPTzCyzqdp51cxKxhcRLPfRVLAfXN)


## Getting Started

* Clone the project
* Run `yarn` or `npm i` from the root of the project

### Prerequisites
 - You need `node` > 6 installed in your system. Try [NVM](https://github.com/creationix/nvm), it's cool.
 - To run/debug/package for Android, you need to [setup your development environment](https://developer.android.com/topic/instant-apps/getting-started/setup.html)
 - To run/debug/package for iOS, you need to [setup your development environment](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/Setup/Setup.html)
 - For deployment prerequisites, see **Deployment** section below

### Installing
Setup your development environment to support [Android](https://developer.android.com/topic/instant-apps/getting-started/setup.html) and [iOS](https://developer.apple.com/library/content/documentation/IDEs/Conceptual/AppStoreDistributionTutorial/Setup/Setup.html)

### Environment Variables
Use [React Native Config](https://github.com/luggit/react-native-config) for environment variables management.

### Coding style
Respect the Lint rules defined in .eslintrc and the general directory structure.

## Running the app
* `react-native run-android` to run on Android.
* For iOS, `react-native run-ios`

## Testing
* Unit Tests - [Jest](https://jestjs.io/docs/en/tutorial-react-native)
* Component Tests - [Enzyme](https://airbnb.io/enzyme/docs/guides/react-native.html) and [Jest](https://jestjs.io/docs/en/tutorial-react-native)
* End-to-End Tests - [Detox](https://github.com/wix/Detox)

## Running the tests

* `yarn test` or `npm run test`
* `detox build` and `detox test` for end to end tests

## Built With
* [React Native](https://facebook.github.io/react-native/) - The framework used
* [React Navigation](https://reactnavigation.org/) - Navigation (V3)
* [react-redux](https://github.com/reactjs/react-redux) - Data store
* [Realm](https://realm.io/) - Mobile database
* [React Native Config](https://github.com/luggit/react-native-config) - Environment variables management

## Author
* **Asbar Ali** - [Asbar](https://github.com/AsbarAli/)

## TODO
- [ ] Write More tests
- [ ] Setup Detox for Android

## Acknowledgments
* Thanks [Facebook](https://github.com/facebook) for [React](https://github.com/facebook/react/), [React Native](https://github.com/facebook/react-native)
* Thanks [React Community](https://github.com/reactjs) for [react-redux](https://github.com/reactjs/react-redux)
* Thanks [Realm](https://realm.io/) for the awesome library.
* Thanks [Airbnb](https://airbnb.io/) for the [Enzyme](https://airbnb.io/enzyme/)
* Thanks to [PurpleBooth's gist](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) for the template of this README
* Thanks for the [Markdown cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
