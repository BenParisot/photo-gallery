function makeHTMLTemplate(image) {
    const template = document.createElement('template');
    template.innerHTML =  `<li>
    <h2>${image.title}</h2>
    <img src="${image.url}">
</li>`;
    const dom = template.content;
    return dom;
}

export default makeHTMLTemplate;