import options from './options';

describe('options reducer', () => {
  test('should handle UPDATE_OPTIONS', () => {
    expect(options({ layout: { hierarchical: { enabled: true, direction: 'LR' } } }, { type: 'UPDATE_OPTIONS' }))
      .toEqual({ layout: { hierarchical: { enabled: true, direction: 'LR' } } });
  });
  test('should handle default', () => {
    expect(options(undefined, undefined))
      .toEqual({ layout: { hierarchical: { enabled: true, direction: 'LR' } } });
  });
});
