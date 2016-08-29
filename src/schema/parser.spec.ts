import { parseContentLines, serializeContentLines, parseDictionary, serializeDictionary } from './parser';

const demo = `RRULE:FREQ=MONTHLY;COUNT=5;DTSTART=20120201T0230000Z
EXDATE:20120601T0230000Z`;


describe('RRule Parser', () => {
  describe('parseContentLines', () => {
    it('should unpack content lines into a dictionary', () => {
      expect(parseContentLines(demo)).toEqual({
        RRULE: 'FREQ=MONTHLY;COUNT=5;DTSTART=20120201T0230000Z',
        EXDATE: '20120601T0230000Z'
      });
    });

    it('should correctly unfold lines', () => {
      const lines = [
        'DESCRIPTION:This is a description of',
        '  a thing, yes it is'
      ].join('\n');

      expect(parseContentLines(lines)).toEqual({
        DESCRIPTION: 'This is a description of a thing, yes it is'
      });
    })
  });

  describe('serializeContentLines', () => {
    it('should correctly serialize content lines', () => {
      const contentLines = {
        this: 'is a',
        test: 'yes'
      };
      const serialized = serializeContentLines(contentLines);

      expect(serialized).toBe([
        'this:is a',
        'test:yes'
      ].join('\n'));
    });
  });

  describe('parseDictionary', () => {
    it('should parse a dictionary expression', () => {
      expect(parseDictionary('FREQ=MONTHLY;COUNT=5')).toEqual({
        FREQ: 'MONTHLY',
        COUNT: '5'
      });
    });
  });

  describe('serializeDictionary', () => {
    it('should convert a dictionary into a string', () => {
      expect(serializeDictionary({ FREQ: 'MONTHLY', COUNT: '5' }))
        .toEqual('FREQ=MONTHLY;COUNT=5');
    });
  });
});