class ComponentEventEmitter {
  /**
   * Хэш-таблица обработчиков событий
   * @type {Map<string, Set<function>>}
   */
  handlers = new Map();

  /**
   * Добавляет обработчик событий
   * @param type{string} - название события
   * @param handler{function} - обработчик
   * @returns {function} - функция для удаления обработчика
   */
  on(type, handler) {
    if (!type) throw Error('UNSPECIFIED_EVENT_TYPE_ERR');

    let handlers = this.handlers.get(type);

    if (handlers == null) {
      handlers = new Set();
      this.handlers.set(type, handlers);
    }

    handlers.add(handler);

    return () => handlers.delete(handler);
  }

  /**
   * Удаляет обработчик событий
   * @param type{string} - название события
   * @param handler{function} - название события
   * @returns true|false|undefined - true: если обработчик удален, false: если обработчик отсутвует, undefined: если событие отсутвует
   */
  off(type, handler) {
    if (!type) throw Error('UNSPECIFIED_EVENT_TYPE_ERR');

    const handlers = this.handlers.get(type);

    return handlers?.delete(handler);
  }

  /**
   * Создает и запускает событие
   * @param type{string} - название события
   * @param payload{any} - название события
   */
  emit(type, payload) {
    if (!type) throw Error('UNSPECIFIED_EVENT_TYPE_ERR');

    const handlers = this.handlers.get(type);

    handlers?.forEach(cb => cb(payload));
  }
}

export default ComponentEventEmitter;
