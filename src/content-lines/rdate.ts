import { Definition, Set } from '../schema/tokens';
import { parseSet, serializeSet } from '../schema/parser';
import { compose } from '../util/compose';
import { parseDateTime, serializeDateTime } from '../util/datetime';
import * as moment from 'moment';

export type Including = moment.Moment[];

function parseRdate(input: Set): Including {
  return input.map(parseDateTime);
}

function serializeRdate(input: Including): Set {
  return input.map(serializeDateTime);
}

export const rdateDefinition: Definition<any> = {
  serializedKey: 'RDATE',
  serialize: compose(serializeSet, serializeRdate),
  parsedKey: 'including',
  parse: compose(parseRdate, parseSet),
};