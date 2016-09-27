import * as moment from 'moment';
import { exdateDefinition } from './exdate';
import { serializeDateTime } from '../util/datetime';

describe('exdate Definition', () => {
  describe('serialization', () => {
    it('should use "EXDATE" for the key', () => {
      expect(exdateDefinition.serializedKey).toBe('EXDATE');
    });

    it('should serialize an array of moment objects', () => {
      const first = moment.utc();
      const second = moment.utc().add(1, 'hour');
      const third = moment.utc().add(1, 'year');

      const serialized = exdateDefinition.serialize([
        first,
        second,
        third
      ]);

      expect(serialized).toBe([
        serializeDateTime(first),
        serializeDateTime(second),
        serializeDateTime(third),
      ].join(','));
    });
  });

  describe('parsing', () => {
    it('should use "excluding" for the key', () => {
      expect(exdateDefinition.parsedKey).toBe('excluding');
    });

    it('should parse an exdate array', () => {
      const set = [
        moment.utc(),
        moment.utc().add(2, 'days'),
        moment.utc().add(3, 'hours')
      ];
      const exdate = set.map(serializeDateTime).join(',');

      const parsed = exdateDefinition.parse(exdate);

      set.forEach((time, index) => {
        const compare = parsed[index];

        expect(time.year()).toEqual(compare.year());
        expect(time.month()).toEqual(compare.month());
        expect(time.date()).toEqual(compare.date());
        expect(time.hour()).toEqual(compare.hour());
        expect(time.minute()).toEqual(compare.minute());
        expect(time.second()).toEqual(compare.second());
      });
    });
  });
});