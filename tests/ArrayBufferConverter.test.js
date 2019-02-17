import ArrayBufferConverter from '../src/js/ArrayBufferConverter';

describe('Загрузка данных и конвертация в строку', () => {
  const testBuffer = new ArrayBufferConverter();

  test('Данные загружаются в формате ArrayBuffer', () => {
    testBuffer.load('Данные для загрузки в формат ArrayBuffer');
    expect(testBuffer.data instanceof ArrayBuffer).toBeTruthy();
  });

  test('Данные выгружаются в формате строки', () => {
    expect(testBuffer.toString()).toBe('Данные для загрузки в формат ArrayBuffer');
  });
});
