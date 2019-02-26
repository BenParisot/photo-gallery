const test = QUnit.test;

function makeHeaderTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `<h1>My Photo Gallery</h1>`;
    const headerDOM = template.content;
    return headerDOM;
}

test('make a html header template', function(assert) {
    const expected = `<h1>My Photo Gallery</h1>`;

    const result = makeHeaderTemplate();
    assert.htmlEqual(result, expected);
});