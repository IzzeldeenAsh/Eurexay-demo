import { TruncateLettersPipe } from './truncate-letters.pipe';

describe('TruncateLettersPipe', () => {
  it('create an instance', () => {
    const pipe = new TruncateLettersPipe();
    expect(pipe).toBeTruthy();
  });
});
