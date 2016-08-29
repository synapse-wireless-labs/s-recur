import { Frequencies, freqDefinition } from './freq';

describe('Frequency Definition', () => {
  it('should work on the "FREQ" key', () => {
    expect(freqDefinition.serializedKey).toEqual('FREQ');
  });

  it('should parse a frequncy value', () => {
    expect(freqDefinition.parse('YEARLY')).toEqual(Frequencies.Yearly);
    expect(freqDefinition.parse('MONTHLY')).toEqual(Frequencies.Monthly);
    expect(freqDefinition.parse('WEEKLY')).toEqual(Frequencies.Weekly);
    expect(freqDefinition.parse('DAILY')).toEqual(Frequencies.Daily);
    expect(freqDefinition.parse('HOURLY')).toEqual(Frequencies.Hourly);
    expect(freqDefinition.parse('MINUTELY')).toEqual(Frequencies.Minutely);
    expect(freqDefinition.parse('SECONDLY')).toEqual(Frequencies.Secondly);
  });

  it('should throw an error if it does not recognize the frequency', () => {
    const parse = () => freqDefinition.parse('SOMETHING');

    expect(parse).toThrowError(/Encountered unexpected frequency value/);
  });

  it('should serialize frequencies', () => {
    expect(freqDefinition.serialize(Frequencies.Yearly)).toEqual('YEARLY');
  });
});