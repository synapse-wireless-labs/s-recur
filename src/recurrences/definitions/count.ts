import { Value, Definition } from '../../schema/tokens';
import { parseValue, serializeValue } from '../../schema/parser';
import { compose } from '../../util/compose';

export type CountValue = number;

function parseCount(input: Value): CountValue {
  return parseInt(input, 10);
}

function serializeCount(input: CountValue): Value {
  return input.toString(10);
}

export const countDefinition: Definition<CountValue> = {
  parsedKey: 'count',
  parse: compose(parseCount, parseValue),
  serializedKey: 'COUNT',
  serialize: compose(serializeValue, serializeCount)
};