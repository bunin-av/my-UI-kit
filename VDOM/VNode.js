import ClassList from "./ClassList.js";

class VNode {
  tag;
  attributes = new Set();
  children = [];
  classList = new ClassList();

  constructor(tag, { attrs } = {}) {
    this.tag = tag;

    for (const attr in attrs) {
      this.attributes.add({name: attr, value: attrs[attr]});
    }
  }

  setAttribute(name, value) {
    this.attributes.add({name, value});
  }

  append(VNode) {
    this.children.push(VNode);
  }

  prepend(VNode) {
    this.children.unshift(VNode);
  }

  render(strategy = 'string') {
    if (strategy === 'DOM') {
      return this.#renderDOM();
    }

    return this.#renderString();
  }

  #renderDOM() {
    const element = document.createElement(this.tag);

    if (this.attributes.size > 0) {
      this.attributes.forEach(({name, value}) => {
        element.setAttribute(name, value);
      });
    }

    if (this.classList.list.size > 0) {
      this.classList.list.forEach(className => {
        element.classList.add(className);
      });
    }

    if (this.children.length > 0) {
      this.children.forEach(node => {
        const child = node.render('DOM');
        element.append(child);
      });
    }

    return element;
  }

  #renderString() {
    let
      attributes = '',
      children = '',
      classNames = '';

    if (this.attributes.size > 0) {
      this.attributes.forEach(({name, value}) => {
        const attr = `${name}="${value}"`;

        if (!attributes) attributes += attr;
        else attributes += ' ' + attr;
      });
    }

    if (this.classList.list.size > 0) {
      this.classList.list.forEach(className => {
        if (!classNames) classNames += className;
        else classNames += ' ' + className;
      });
    }

    if (this.children.length > 0) {
      this.children.forEach(node => {
        const child = node.render();
        children += child;
      });
    }

    if (attributes.includes('class')) {
      if (classNames !== '') {
        attributes = attributes.replace(/class="(.+)"/, (s, $1) => {
          return `class="${$1} ${classNames}"`;
        });
      }
    } else  {
      if (classNames !== '') {
        attributes += `class="${classNames}"`
      }
    }

    return `<${this.tag} ${attributes}>${children}</${this.tag}>`;
  }
}


export default VNode;
