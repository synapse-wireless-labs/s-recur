import { createDictionaryHandler } from './dictionary-handler';
import { Definition } from '../schema/tokens';

describe('Dictionary Handler Factory', () => {
  const firstDefinition: Definition<number> = {
    parsedKey: 'first',
    parse: () => 123,
    serializedKey: 'FIRST',
    serialize: () => '123'
  };

  const secondDefinition: Definition<number[]> = {
    parsedKey: 'second',
    parse: () => [ 1, 2, 3 ],
    serializedKey: 'SECOND',
    serialize: () => '1,2,3'
  };

  const handler = createDictionaryHandler([
    firstDefinition,
    secondDefinition
  ]);

  it('should parse items in a dictionary', () => {
    const result = handler.parse({
      FIRST: '123',
      SECOND: '1,2,3'
    });

    expect(result).toEqual({
      first: 123,
      second: [1,2,3]
    });
  });

  it('should serialize items in a dictionary', () => {
    const result = handler.serialize({
      first: 123,
      second: [1,2,3]
    });

    expect(result).toEqual({
      FIRST: '123',
      SECOND: '1,2,3'
    });
  });

  it('should throw an error if you attempt to parse an unknown key', () => {
    const parse = () => handler.parse({
      unknown: 'key'
    });

    expect(parse).toThrowError(/Unexpected dictionary key encountered/);
  });

  it('should throw an error if you attempt to serialize an unknown key', () => {
    const serialize = () => handler.serialize({
      unknown: 'key'
    });

    expect(serialize).toThrowError(/Unexpected dictionary key encountered/);
  });
});