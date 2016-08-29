import { Value, Dictionary, Set } from './tokens';


export function parseDictionary(input: string): Dictionary {
  return input.split(';').reduce((dictionary, fragment) => {
    const [lhand, rhand] = fragment.split('=');
    
    return Object.assign(dictionary, {
      [lhand]: rhand
    });
  }, {});
}

export function serializeDictionary(dictionary: Dictionary): string {
  const keys = Object.getOwnPropertyNames(dictionary);
  
  return keys.map(key => `${key}=${dictionary[key]}`).join(';');
}

export function parseSet(input: string): Set {
  return input.split(',');
}

export function serializeSet(input: Set): string {
  return input.join(',');
}

export function parseValue(input: string): Value {
  return input;
}

export function serializeValue(input: Value): string {
  return input;
}

export function parseContentLines(input: string): Dictionary {
  return input.replace(/\n[\s\t]/g, '').split('\n').reduce((dictionary, contentLine) => {
    const [ contentLineName, value ] = contentLine.split(/:(.+)?/);

    return Object.assign(dictionary, { [contentLineName]: value });
  }, {});
}

export function serializeContentLines(input: Dictionary): string {
  return Object.getOwnPropertyNames(input)
    .map(key => `${key}:${input[key]}`)
    .join('\n');
}