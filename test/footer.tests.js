import './html-equal.js';
import makeFooter from '../src/create-footer.js';

const test = QUnit.test;

test('create footer template', function(assert) {
    const expected = '<p>© Ben Parisot 2019</p>';
    const result = makeFooter();
    assert.htmlEqual(result, expected);
});