import { validPassword } from './Passwords';

describe('#validPassword', () => {
    it('returns true for valid passwords', () => {
        expect(validPassword(122345)).toBeTruthy();
        expect(validPassword(112233)).toBeTruthy();
        expect(validPassword(111122)).toBeTruthy();
    });
    it('returns false for invalid passwords', () => {
        expect(validPassword(111111)).toBeFalsy();
        expect(validPassword(111110)).toBeFalsy();
        expect(validPassword(123456)).toBeFalsy();
        expect(validPassword(12345)).toBeFalsy();
        expect(validPassword(1234567)).toBeFalsy();
        expect(validPassword('a string')).toBeFalsy();
        expect(validPassword(123444)).toBeFalsy();
        expect(validPassword(111211)).toBeFalsy();
        expect(validPassword(112211)).toBeFalsy();
    });
});