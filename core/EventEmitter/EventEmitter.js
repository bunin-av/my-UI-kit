class EventEmitter {
  emitter;

  constructor(emitter) {
    this.emitter = emitter;
  }

  on(type, handler) {
    return this.emitter.on(type, handler);
  }

  off(type, handler) {
    return this.emitter.off(type, handler);
  }

  emit(type, payload) {
    this.emitter.emit(type, payload);
  }

  stream(type) {
    return this.emitter.stream(type);
  }
}


export default EventEmitter;
