import { Selector } from 'testcafe';

fixture`TestCafe App`
  .page`http://localhost:8100/tabs/tab1`;

test('display 3 tabs', async t => {
  
  const firstTab = Selector('ion-tab-bar ion-tab-button').nth(0);
  const secondTab = Selector('ion-tab-bar ion-tab-button').nth(1);
  const thirdTab = Selector('ion-tab-bar ion-tab-button').nth(2);

  await t
    .expect(Selector('ion-tab-bar').exists).ok()
    .expect(Selector('ion-tab-bar ion-tab-button').count).eql(3)
    .expect(firstTab.hasClass('tab-selected')).ok()
    .expect(firstTab.find('ion-icon').getAttribute('name')).eql('flash')
    .expect(firstTab.find('ion-label').innerText).eql('Tab One')
    .expect(secondTab.find('ion-icon').getAttribute('name')).eql('apps')
    .expect(secondTab.find('ion-label').innerText).eql('Tab Two')
    .expect(thirdTab.find('ion-icon').getAttribute('name')).eql('send')
    .expect(thirdTab.find('ion-label').innerText).eql('Tab Three');
});
