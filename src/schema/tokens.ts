export enum PropertyExpressionTypes { Dictionary, Collection, Value }
export enum KnownContentLines { RRULE, EXDATE, EXRULE, RDATE }

export type Set = string[];
export type Dictionary = { [key: string]: string };
export type Value = string;

export interface Definition<V> {
  serializedKey: string;
  serialize(input: V): string;

  parsedKey: string
  parse(input: string): V;
}

export enum Days {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
};
