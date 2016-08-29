# s-recur
Limited (though highly extensible) iCalendar parser that currently only supports `RRULE`, `RDATE`, `EXRULE`, and `EXDATE`

### Usage
1. Install the package
  ```bash
  npm install SOME-PACKAGE --save
  ```
2. Use `parse` or `serialize` to handle iCalendar event definitions:
  ```ts
  import * as sRecur from 's-recur';

  sRecur.parse(`RRULE:FREQ=MONTHLY;COUNT=3;`);

  sRecur.serialize({
    rrule: {
      count: 5,
      frequency: sRecur.Frequencies.Weekly,
      byDay: [ sRecur.Days.Wednesday, sRecur.Days.Thurday ]
    }
  });
  ```