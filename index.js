import makeHTMLTemplate from './src/create-image-list.js';
import images from './data/images.js';

const imageListNode = document.getElementById('image-list');

images.forEach(item => {
    const dom = makeHTMLTemplate(item);
    imageListNode.appendChild(dom);
});