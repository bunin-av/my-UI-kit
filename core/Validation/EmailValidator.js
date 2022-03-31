import TypeValidator from "./TypeValidator.js";

class EmailValidator extends TypeValidator{

  validate(data) {
    this.validateType(data, 'string');

    if (!data.includes('@') || data.length < 6) {
      throw new Error('Invalid e-mail');
    }
  }
}

export default EmailValidator;
