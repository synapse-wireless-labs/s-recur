import { Definition } from '../schema/tokens';
import { parseDictionary, serializeDictionary } from '../schema/parser';
import { recurrencesHandler, Recurrences } from '../recurrences/handler';
import { compose } from '../util/compose';

export type RRule = Recurrences;
export const rruleDefinition: Definition<Recurrences> = {
  serializedKey: 'RRULE',
  serialize: compose(serializeDictionary, recurrencesHandler.serialize),
  parsedKey: 'rrule',
  parse: compose(recurrencesHandler.parse, parseDictionary),
};