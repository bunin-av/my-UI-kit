import Input from "./Widgets/Input.js";
import Form from "./Widgets/Form.js";
// import Button from "./Widgets/Button.js";

const input = new Input({
  styles: {
    width: '300px',
  },
  validation: {
    rule: 'date', mask: 'date',
  },
  label: 'Expiration date',
  render: 'string',
});

// input.mount(document.body);

document.body.innerHTML = input.render();
// new Button({styles: {width: '100px'}});

const form = new Form(
  [input],
  [
    (value) => value + 10,
    (value) => +value,
  ],
);
