import TypeValidator from "./TypeValidator.js";

class DateValidator extends TypeValidator{

  validate(data, attrs) {
    this.validateType(data, 'string');

    this.customValidate(data, attrs);

    if (isNaN(Date.parse(data))) {
      throw new Error('Invalid date format');
    }
  }
}

export default DateValidator;
