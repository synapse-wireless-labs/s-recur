import { Set, Definition } from '../../schema/tokens';
import { parseSet, serializeSet } from '../../schema/parser';
import { compose } from '../../util/compose';

export enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
};

export type ByDayValue = Days[]; 

function parseByDay(input: Set): ByDayValue {
  return input.map(day => {
    switch(day) {
      case 'SU': return Days.Sunday;
      case 'MO': return Days.Monday;
      case 'TU': return Days.Tuesday;
      case 'WE': return Days.Wednesday;
      case 'TH': return Days.Thursday;
      case 'FR': return Days.Friday;
      case 'SA': return Days.Saturday;
      default:
        throw new Error(`Encountered unexpected day value: '${day}'`);
    }
  });
}

function serializeByDay(input: ByDayValue): Set {
  const DaysMap = {
    [Days.Sunday]: 'SU',
    [Days.Monday]: 'MO',
    [Days.Tuesday]: 'TU',
    [Days.Wednesday]: 'WE',
    [Days.Thursday]: 'TH',
    [Days.Friday]: 'FR',
    [Days.Saturday]: 'SA'
  };

  return input.map(day => DaysMap[day]);
}

export const bydayDefinition: Definition<ByDayValue> = {
  parsedKey: 'byDay',
  parse: compose(parseByDay, parseSet),
  serializedKey: 'BYDAY',
  serialize: compose(serializeSet, serializeByDay)
};