import randomNumber from './app';

it('should return 1 when range is from 1 to 1', () => {
    expect(randomNumber(1, 1)).toBe(1);
})