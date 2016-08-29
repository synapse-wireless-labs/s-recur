import { Definition, Set } from '../schema/tokens';
import { parseSet, serializeSet } from '../schema/parser';
import { compose } from '../util/compose';
import { parseDateTime, serializeDateTime } from '../util/datetime';
import * as moment from 'moment';

export type Excluding = moment.Moment[];

function parseExdate(input: Set): Excluding {
  return input.map(parseDateTime);
}

function serializeExdate(input: Excluding): Set {
  return input.map(serializeDateTime);
}

export const exdateDefinition: Definition<any> = {
  serializedKey: 'EXDATE',
  serialize: compose(serializeSet, serializeExdate),
  parsedKey: 'excluding',
  parse: compose(parseExdate, parseSet),
};