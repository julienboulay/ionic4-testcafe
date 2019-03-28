import { Selector } from 'testcafe';

fixture `TestCafe Record`
    .page `http://localhost:8100/tabs/tab1`;

test('Click on tabs', async t => {
    await t
        .click(Selector('[name="apps"].hydrated'))
        .click(Selector('[name="send"].hydrated'));
});