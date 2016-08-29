import { countDefinition } from './count';

describe('count definition', () => {
  describe('serialization', () => {
    it('should use the "COUNT" key', () => {
      expect(countDefinition.serializedKey).toBe('COUNT');
    });

    it('should serialize a number into a string', () => {
      expect(countDefinition.serialize(12)).toBe('12');
    });
  });

  describe('parsing', () => {
    it('should use "count" for the key', () => {
      expect(countDefinition.parsedKey).toBe('count');
    });

    it('should parse a number string', () => {
      expect(countDefinition.parse('32')).toBe(32);
    });
  });
});