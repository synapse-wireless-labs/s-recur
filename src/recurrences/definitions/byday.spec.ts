import { bydayDefinition, Days } from './byday';

describe('byday Definition', () => {
  it('should recognize "BYDAY" expression name', () => {
    expect(bydayDefinition.serializedKey).toBe('BYDAY');
  });

  it('should parse a "BYDAY" expression', () => {
    const actual = bydayDefinition.parse('MO,TU,WE');
    const expected = [ Days.Monday, Days.Tuesday, Days.Wednesday ];

    expect(actual).toEqual(expected);
  });

  it('should serialize a list of days into a "BYDAY" expression', () => {
    const actual = bydayDefinition.serialize([ Days.Friday, Days.Sunday ]);
    const expected = 'FR,SU';

    expect(actual).toEqual(expected);
  });
});