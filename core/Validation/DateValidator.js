import TypeValidator from "./TypeValidator.js";

class DateValidator extends TypeValidator{

  validate(data) {
    this.validateType(data, 'string');

    if (isNaN(Date.parse(data))) {
      throw new Error('Invalid date format');
    }
  }
}

export default DateValidator;
