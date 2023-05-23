import { classNames } from './index';

describe('classnames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    const expectedValue = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expectedValue);
  });
  test('with first param, with mods and additional classes', () => {
    const expectedValue = 'someClass class1 class2 hovered focused';
    expect(classNames('someClass', { hovered: true, focused: true }, ['class1', 'class2'])).toBe(expectedValue);
  });
  test('with mods false', () => {
    const expectedValue = 'someClass class1 class2 hovered';
    expect(classNames('someClass', { hovered: true, focused: false }, ['class1', 'class2'])).toBe(expectedValue);
  });
  test('with mods undefined', () => {
    const expectedValue = 'someClass class1 class2 hovered';
    expect(classNames('someClass', { hovered: true, focused: false }, ['class1', 'class2'])).toBe(expectedValue);
  });
});
