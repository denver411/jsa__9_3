/**
 *  Класс для хранения данных в объекте типа ArrayBuffer
 *
 */

class ArrayBufferConverter {
  constructor() {
    this.data = undefined;
  }

  /**
   *  метод загрузки данных в ArrayBuffer
   *
   * @param {string} data - данные для загрузки
   *
   */

  load(data) {
    this.data = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(this.data);
    for (let i = 0; i < data.length; i++) {
      bufferView[i] = data.charCodeAt(i);
    }

    return this.data;
  }

  /**
   *  метод конвертации данных в строку из ArrayBuffer
   *
   *
   */

  toString() {
    const bufferView = new Uint16Array(this.data);
    let str = '';
    for (let i = 0; i < bufferView.length; i++) {
      str += String.fromCharCode(bufferView[i]);
    }

    return str;
  }
}

export default ArrayBufferConverter;
