// import {EventEmitter} from "./EventEmitter.js";
//
// export class RenderDOM {
//   render(elements) {
//     // const wrapper = this.createElement('div', [this.type, 'wrapper']);
//     const wrapper = this.createElement('div', [`${this.type}__wrapper`]);
//     const container = this.createElement('span', [`${this.type}__container`]);
//     const keyElem = this.createElement(this.type, [`${this.type}__${this.type}`]);
//
//     if (elements != null) {
//       for (let item of elements) {
//         wrapper.append(this.createElement(item.tag, [item.className], item.content));
//       }
//     }
//
//     // container.appendChild(keyElem);
//     wrapper.append(container);
//     container.append(keyElem);
//
//     if (this.styles != null) {
//       this.addStyles(wrapper, this.styles);
//     }
//
//
//     this.element = keyElem;
//     this.widget = wrapper;
//
//     this.events = new EventEmitter(keyElem);
//
//     return this.widget;
//   }
//
//   mount(element, method = 'append') {
//     this.root = document.getElementById('root');
//     (element ?? this.root)[method](this.widget);
//   }
//
//   unmount() {
//     this.widget.remove();
//   }
// }
//
//
// export class RenderString {
//   render(elements) {
//     // const wrapper = this.createElement('div', [this.type, 'wrapper']);
//     const wrapper = this.createElement('div', [`${this.type}__wrapper`]);
//     const container = this.createElement('span', [`${this.type}__container`]);
//     const keyElem = this.createElement(this.type, [`${this.type}__${this.type}`]);
//
//     if (elements != null) {
//       for (let item of elements) {
//         wrapper.append(this.createElement(item.tag, [item.className], item.content));
//       }
//     }
//
//     // container.appendChild(keyElem);
//     wrapper.append(container);
//     container.append(keyElem);
//
//     if (this.styles != null) {
//       this.addStyles(wrapper, this.styles);
//     }
//
//     this.element = keyElem.innerHTML;
//     this.widget = wrapper.innerHTML;
//
//     this.events = new EventEmitter(keyElem);
//
//     return this.widget;
//   }
//
//   mount(element, method = 'beforeend') {
//     this.root = document.getElementById('root');
//     (element ?? this.root).insertAdjacentHTML(method, this.widget);
//   }
//
//   unmount() {
//     this.widget.innerHTML = '';
//   }
// }
