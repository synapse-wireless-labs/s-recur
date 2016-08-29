import * as moment from 'moment';

const RFC_2445_DATETIME_FORMAT = 'YYYYMMDD HHmmss';

export function parseDateTime(input: string): moment.Moment {
  return moment(input, RFC_2445_DATETIME_FORMAT);
}

export function serializeDateTime(input: moment.Moment): string {
  return input.format(RFC_2445_DATETIME_FORMAT).replace(' ', 'T');
}