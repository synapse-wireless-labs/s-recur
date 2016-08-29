import { Value, Definition } from '../../schema/tokens';
import { parseValue, serializeValue } from '../../schema/parser';
import { compose } from '../../util/compose';
import { parseDateTime, serializeDateTime } from '../../util/datetime';
import * as moment from 'moment';

export type DTStartValue = moment.Moment;

export const dtstartDefinition: Definition<moment.Moment> = {
  parsedKey: 'dtstart',
  parse: compose(parseDateTime, parseValue),
  serializedKey: 'DTSTART',
  serialize: compose(serializeValue, serializeDateTime)
};