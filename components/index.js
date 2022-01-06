import Input from "./Widgets/Input.js";
import Form from "./Widgets/Form.js";
// import Button from "./Widgets/Button.js";
// import Tip from "./Widgets/Tip.js";

const input = new Input({
  styles: {
    width: '300px',
  },
  validation: {
    rule: 'date', mask: 'date',
  },
  label: 'Expiration date',
  // render: 'string'
});
// new Button({styles: {width: '100px'}});

const form = new Form(
  [input],
  [
    (value) => value + 10,
    (value) => +value,
  ],
);
