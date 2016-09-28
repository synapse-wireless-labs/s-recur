import * as moment from 'moment';

const RFC_2445_DATETIME_FORMAT = 'YYYYMMDD HHmmss';

export function parseDateTime(input: string): moment.Moment {
  return moment.utc(input);
}

export function serializeDateTime(input: moment.Moment): string {
  return input.format();
}