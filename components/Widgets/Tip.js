import Widget from "./index.js";

export default class Tip extends Widget{
  type = 'span';
  content;
  tipElem;


  constructor(props) {
    super();

    this.content = props.content;

    this.render();

    this.tipElem = this.widget.querySelector('.span__span');
    this.tipElem.textContent = this.content;

    // this.mount();

  }
}
