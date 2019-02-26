import makeHTMLTemplate from '../src/create-image-list.js';

const test = QUnit.test;

test('create image list as template using interpolation', function(assert) {
    const image = {
        'url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        'title': 'UniWhal',
        'description': 'A unicorn and a narwhal nuzzling their horns',
        'keyword': 'narwhal',
        'horns': 1
    }
    const expected = `<li>
    <h2>${image.title}</h2>
    <img src="${image.url}">
    <p>${image.description}</p>
    <p id="horns">Horn Count: ${image.horns}</p>
    </li>`
    const result = makeHTMLTemplate(image);
    assert.htmlEqual(result, expected);
});


