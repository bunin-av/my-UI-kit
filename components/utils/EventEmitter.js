export class EventEmitter {
  /**
   * Ключевой элемент, который будет совершать и слушать события
   * @type {Element}
   */
  element;

  /**
   * Обработчик события
   * @type {Function}
   */
  handler;

  /**
   *  Создает объект для работы с событиями
   * @param element: HTMLElement;
   */
  constructor(element) {
    this.element = element;
  }

  /**
   * Добавляет обработчик событий
   * @param type{string} - название события
   * @param handler{Function} - обработчик
   * @returns {Function} - функция для удаления обработчика
   */
  on(type, handler) {
    this.element.addEventListener(type, handler);
    this.handler = handler;

    return () => this.element.removeEventListener(type, handler);
  }

  /**
   * Удаляет обработчик событий
   * @param type{string} - название события
   */
  off(type) {
    this.element.removeEventListener(type, this.handler);
  }

  /**
   * Создает и запускает событие
   * @param type{string} - название события
   * @param eventInit{EventInit} - параметры события
   */
  emit(type, eventInit = {bubbles: true, cancelable: true}) {
    if (!type) throw Error('UNSPECIFIED_EVENT_TYPE_ERR');

    const event = new Event(type, eventInit);

    this.element.dispatchEvent(event);
  }

  /**
   * Представляет события в виде async iterator
   * @param type{string} - название события
   */
  stream(type) {
    return async function* () {
      while (true) {
        yield new Promise(res => {
          this.element.addEventListener(type, res, {once: true});
        });
      }
    }.call(this);
  }
}
