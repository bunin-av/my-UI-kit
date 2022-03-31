import TypeValidator from "./TypeValidator.js";

class PhoneValidator extends TypeValidator{

  constructor(params) {
    super();

    if (params != null) {
      this.rules = params;
    }
  }

  validate(data) {
    this.validateType(data, 'number');

    if (this.rules.length && data.length !== this.rules.length) {
      throw new Error('Invalid phone number length');
    }
  }
}

export default PhoneValidator;
