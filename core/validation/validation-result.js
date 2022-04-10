export default class ValidationResult {
  /**
   * @type {boolean}
   */
  validity;

  /**
   * @type {string}
   */
  message;

  /**
   * Создает объект с данными о результате валидации
   * @param validity {boolean}
   * @param message {string}
   */
  constructor(validity = true, message = '') {
    this.validity = validity;
    this.message = message;
  }
}
