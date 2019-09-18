import { isValidJson, toAceEditor, fromAceEditor } from './json';

describe('json utils', () => {
  test('isValidJson should return true', () => {
    expect(isValidJson('{"a":"a"}'))
      .toBeTruthy();
  });
  test('isValidJson should return false, no quotes', () => {
    expect(isValidJson('{a:a"}'))
      .toBeFalsy();
  });
  test('isValidJson should return false, extra comma', () => {
    expect(isValidJson('{"a":"a",}'))
      .toBeFalsy();
  });
  test('isValidJson should return false, no string', () => {
    expect(isValidJson(1))
      .toBeFalsy();
  });
  test('toAceEditor should be fromAceEditor pair', () => {
    expect(toAceEditor({ a: 'a' }))
      .toBe(fromAceEditor('{"a":"a"}'));
  });
});
