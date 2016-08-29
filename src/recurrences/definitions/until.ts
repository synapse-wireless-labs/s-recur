import { Value, Definition } from '../../schema/tokens';
import { parseValue, serializeValue } from '../../schema/parser';
import { compose } from '../../util/compose';
import { parseDateTime, serializeDateTime } from '../../util/datetime';
import * as moment from 'moment';

export type UntilValue = moment.Moment;

export const untilDefinition: Definition<moment.Moment> = {
  parsedKey: 'until',
  parse: compose(parseDateTime, parseValue),
  serializedKey: 'UNTIL',
  serialize: compose(serializeValue, serializeDateTime)
};