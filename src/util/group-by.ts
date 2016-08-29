export interface GroupBy {
  <T>(items: T[], keySelector: (item: T) => string): { [key: string]: T };
  <T, V>(items: T[], keySelector: (item: T) => string, map: (item: T) => V): { [key: string]: V };
}

export const groupBy: GroupBy = function(items: any[], keySelector, mapFn = item => item) {
  return items.reduce((group, item) => {
    return Object.assign(group, {
      [keySelector(item)]: mapFn(item)
    });
  }, {});
}