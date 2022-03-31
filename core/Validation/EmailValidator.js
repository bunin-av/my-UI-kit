import TypeValidator from "./TypeValidator.js";

class EmailValidator extends TypeValidator{

  validate(data, attrs) {
    this.validateType(data, 'string');

    this.customValidate(data, attrs);

    if (!data.includes('@') || data.length < 6) {
      throw new Error('Invalid e-mail');
    }
  }
}

export default EmailValidator;
