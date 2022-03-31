import TypeValidator from "./TypeValidator.js";

class PhoneValidator extends TypeValidator{

  validate(data, attrs) {
    this.validateType(data, 'number');

    this.customValidate(data, attrs);
  }
}

export default PhoneValidator;
