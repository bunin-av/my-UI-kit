import ClassList from "./class-list.js";
import {renderDOM} from "./render-strategies/render-dom.js";
import {renderString} from "./render-strategies/render-string.js";


export default class VNode {
  tag;
  attributes = new Set();
  children = [];
  classList = new ClassList();
  #renderStrategies = {
    dom: renderDOM,
    string: renderString,
  };

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

  render(strategy = 'dom') {
    return this.#renderStrategies[strategy].call(this);
  }
}
