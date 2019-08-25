describe('Fetch Post Lists and navigate to post detail screen', () => {
  it('should have main post title and post flat list', async () => {
    // await device.reloadReactNative();
    await expect(element(by.id('100posts'))).toBeVisible();
    await expect(element(by.id('postFlatList'))).toBeVisible();
  });

  it('Should press the specific post list item and navigate to post detail screen', async () => {
    await element(by.id('qui est esse2')).tap();
  });

  it('Should display the title and body', async () => {
    await expect(element(by.id('title'))).toBeVisible();
    await expect(element(by.id('body'))).toBeVisible();
  });
});

