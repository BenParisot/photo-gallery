function makeFooter() {
    const template = document.createElement('template');
    template.innerHTML = `<p>&copy; Ben Parisot 2019</p>`;
    const footerDOM = template.content;
    return footerDOM;
}

export default makeFooter;