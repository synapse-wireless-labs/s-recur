import { parseDateTime, serializeDateTime } from './datetime';
import * as moment from 'moment';

describe('datetime Utility', () => {
  it('should correctly parse a datetime string', () => {
    const example = '20160302T120000';
    const parsed = parseDateTime(example);

    expect(parsed.month()).toBe(2);
    expect(parsed.date()).toBe(2);
    expect(parsed.year()).toBe(2016);
    expect(parsed.hour()).toBe(12);
    expect(parsed.minute()).toBe(0);
    expect(parsed.second()).toBe(0);
  });

  it('should correctly serialize a moment object', () => {
    const time = moment({
      year: 2015,
      month: 1,
      date: 20,
      hour: 18,
      minute: 30,
      second: 7
    });
    const serialized = serializeDateTime(time);

    expect(serialized).toBe('20150220T183007');
  });
});