import { Value, Definition } from '../../schema/tokens';
import { parseValue, serializeValue } from '../../schema/parser';
import { compose } from '../../util/compose';

export enum Frequencies {
  Yearly,
  Monthly,
  Weekly,
  Daily,
  Hourly,
  Minutely,
  Secondly
};

export type FrequencyValue = Frequencies;

function parseFrequencies(input: Value): FrequencyValue {
  switch(input) {
    case 'YEARLY':    return Frequencies.Yearly;
    case 'MONTHLY':   return Frequencies.Monthly;
    case 'WEEKLY':    return Frequencies.Weekly;
    case 'DAILY':     return Frequencies.Daily;
    case 'HOURLY':    return Frequencies.Hourly;
    case 'MINUTELY':  return Frequencies.Minutely;
    case 'SECONDLY':  return Frequencies.Secondly;
    default:
      throw new Error(`Encountered unexpected frequency value: '${input}'`);
  }
}

function serializeFrequencies(input: FrequencyValue): string {
  return Frequencies[input].toUpperCase();
}


export const freqDefinition: Definition<Frequencies> = {
  parsedKey: 'frequency',
  parse: compose(parseFrequencies, parseValue),
  serializedKey: 'FREQ',
  serialize: compose(serializeValue, serializeFrequencies)
}