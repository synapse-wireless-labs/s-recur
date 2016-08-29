import { createDictionaryHandler } from './util/dictionary-handler';
import { compose } from './util/compose';
import { parseContentLines, serializeContentLines } from './schema/parser';
import { exdateDefinition, Excluding } from './content-lines/exdate';
import { rruleDefinition, RRule } from './content-lines/rrule';

import * as moment from 'moment';
import { Days } from './recurrences/definitions/byday';

export interface Event {
  rrule?: RRule;
  excluding?: Excluding;
}

const contentLinesHandler = createDictionaryHandler<Event>([
  exdateDefinition,
  rruleDefinition
]);


export const parse = compose(contentLinesHandler.parse, parseContentLines);
export const serialize = compose(serializeContentLines, contentLinesHandler.serialize);

export { Days } from './schema/tokens';
export { Frequencies } from './recurrences/definitions/freq';

// const demo = `RRULE:FREQ=WEEKLY;BYDAY=MO,TU,WE,TH,FR
// EXDATE:20141208T134000`;

// console.log(parse(demo));