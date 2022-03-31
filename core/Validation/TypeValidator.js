class TypeValidator {

  validateType(data, type) {
    if (typeof data !== type) {
      throw new Error('Invalid data type');
    }
  }
}

export default TypeValidator;
