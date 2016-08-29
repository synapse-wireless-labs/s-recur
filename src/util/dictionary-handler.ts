import { Definition, Dictionary } from '../schema/tokens';
import { groupBy } from './group-by';
import { compose } from './compose';

function createKeyFinder<T>(map: { [key: string]: T }) {
  return function (key: string): T {
    const result = map[key];

    if (!result) {
      throw new Error(`Unexpected dictionary key encountered: '${key}'`);
    }

    return result;
  }
}

function createDefinitionFinder(definitions: Definition<any>[]) {
  const bySerializedKey = groupBy(definitions, t => t.serializedKey);
  const byParsedKey = groupBy(definitions, t => t.parsedKey)

  return {
    serializer: createKeyFinder(byParsedKey),
    parser: createKeyFinder(bySerializedKey)  
  };
}

export function createDictionaryHandler<T extends {}>(definitions: Definition<any>[]) {
  const find = createDefinitionFinder(definitions);
  const useParsedKey = compose(d => d.parsedKey, find.parser)
  const useSerializedKey = compose(d => d.serializedKey, find.serializer);

  return {
    parse(input: Dictionary): T {
      const parseItem = compose(d => d.parse(input[d.serializedKey]), find.parser);

      return <any>groupBy(Object.getOwnPropertyNames(input), useParsedKey, parseItem);
    },
    serialize(input: T): Dictionary {
      const serializeItem = compose(d => d.serialize(input[d.parsedKey]), find.serializer);

      return groupBy(Object.getOwnPropertyNames(input), useSerializedKey, serializeItem);
    }
  };
}