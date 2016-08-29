import { createDictionaryHandler } from '../util/dictionary-handler';
import { bydayDefinition, ByDayValue } from './definitions/byday';
import { countDefinition, CountValue } from './definitions/count';
import { dtstartDefinition, DTStartValue } from './definitions/dtstart';
import { freqDefinition, FrequencyValue } from './definitions/freq';
import { untilDefinition, UntilValue } from './definitions/until';

export interface Recurrences {
  byDay?: ByDayValue;
  count?: CountValue;
  dtstart?: DTStartValue;
  frequency?: FrequencyValue;
  until?: UntilValue;
}

export const recurrencesHandler = createDictionaryHandler<Recurrences>([
  bydayDefinition,
  countDefinition,
  dtstartDefinition,
  freqDefinition,
  untilDefinition
]);