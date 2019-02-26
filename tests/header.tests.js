const test = QUnit.test;
import './html-equal.js';
import makeHeaderTemplate from '../src/create-header.js';

test('make a html header template', function(assert) {
    const expected = `<h1>My Photo Gallery</h1>`;

    const result = makeHeaderTemplate();
    assert.htmlEqual(result, expected);
});