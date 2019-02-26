function makeHeaderTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `<h1>My Photo Gallery</h1>`;
    const headerDOM = template.content;
    return headerDOM;
}

export default makeHeaderTemplate;