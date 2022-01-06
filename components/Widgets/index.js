import {EventEmitter} from "../utils/EventEmitter.js"


export default class Widget {
  props;
  widget;
  styles;
  type;
  validation;
  element;
  valueDecorators;

  /**
   * @type {EventEmitter}
   */
  events;

  constructor(props = {}) {
    this.props = props;

    this.styles = this.makeStyles(props.styles);
  }

  createElement(tagName, classNames, content) {
    const elem = document.createElement(tagName);

    if (classNames != null) elem.classList.add(...classNames);

    if (content != null) elem.innerHTML = content;

    return elem;
  }

  // makeStyles(styles) {
  //   return (styles)
  //     ? Object
  //       .entries(styles)
  //       .map(el => el.join(':'))
  //       .join(';')
  //     : null;
  // }
  makeStyles(styles) {
    return (styles)
      ? JSON.stringify(styles).replace(/[{}",]/g, (str) => str === ',' ? ';' : '')
      : null;
  }

  addStyles(element, styles) {
    if (this.styles != null) element.style.cssText = styles;
  }

  render(elements) {
    const wrapper = this.createElement('div', [`${this.type}__wrapper`]);
    const container = this.createElement('div', [`${this.type}__container`]);
    const keyElem = this.createElement(this.type, [`${this.type}__${this.type}`]);

    if (elements != null) {
      for (let item of elements) {
        wrapper.append(this.createElement(item.tag, [item.className], item.content));
      }
    }

    wrapper.append(container);
    container.append(keyElem);

    if (this.styles != null) {
      this.addStyles(wrapper, this.styles);
    }

    this.element = keyElem;
    this.widget = wrapper;
    this.events = new EventEmitter(this.element);

    return this.widget;
  }

  mount(element, method = 'append') {
    this.root = document.getElementById('root');
    (element ?? this.root)[method](this.widget);
  }

  unmount() {
    this.widget.remove();
  }
}

