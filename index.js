import makeHTMLTemplate from './src/create-image-list.js';
import makeHeaderTemplate from './src/create-header.js';
import images from './data/images.js';
import makeFooter from './src/create-footer.js';

const headerNode = document.getElementById('head');
const imageListNode = document.getElementById('image-list');
const footerNode = document.getElementById('foot');

const headerDOM = makeHeaderTemplate();
headerNode.appendChild(headerDOM);

images.forEach(item => {
    const dom = makeHTMLTemplate(item);
    imageListNode.appendChild(dom);
});

console.log(footerNode);
const footerDOM = makeFooter();
footerNode.appendChild(footerDOM);
