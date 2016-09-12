import { Value, Definition } from '../../schema/tokens';
import { parseValue, serializeValue } from '../../schema/parser';
import { compose } from '../../util/compose';


export type IntervalValue = number;

const parseNumber = (input: string) => parseInt(input, 10);
const serializeNumber = (input: number) => input.toString(10);

export const intervalDefinition: Definition<IntervalValue> = {
  parsedKey: 'interval',
  parse: compose(parseNumber, parseValue),
  serializedKey: 'INTERVAL',
  serialize: compose(serializeValue, serializeNumber)
};