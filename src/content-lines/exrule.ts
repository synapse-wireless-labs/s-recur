import { Definition } from '../schema/tokens';
import { parseDictionary, serializeDictionary } from '../schema/parser';
import { recurrencesHandler, Recurrences } from '../recurrences/handler';
import { compose } from '../util/compose';

export type ExRule = Recurrences;
export const exruleDefinition: Definition<Recurrences> = {
  serializedKey: 'EXRULE',
  serialize: compose(serializeDictionary, recurrencesHandler.serialize),
  parsedKey: 'exrule',
  parse: compose(recurrencesHandler.parse, parseDictionary),
};