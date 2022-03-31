class TypeValidator {

  validateType(data, type) {
    if (typeof data !== type) {
      throw new Error('Invalid data type');
    }
  }

  /**
   * @param data {any} - данные для валидации
   * @param validator? {function} - кастомная функция для валидации. Должна примать данные и возвращать true|false в зависимости от того, валидны данные или нет
   * @param message? {string} - кастомное сообщение об ошибке
   */
  customValidate(data, {validator, message} = {}) {
    if (typeof validator === 'function') {
      const isValid = validator(data);

      if (!isValid) {
        throw new Error(message ?? 'Invalid data');
      }
    }
  }
}

export default TypeValidator;
