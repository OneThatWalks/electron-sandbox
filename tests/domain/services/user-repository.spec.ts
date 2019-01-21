import { UserRepository } from '../../../src/domain/services/user-repository'

const repo = new UserRepository();

test('getById throws error when id is 0', () => {
    expect(() => {
        repo.getById(0);
    }).toThrow();
});

test('getById returns entity when id is valid', () => {
    expect(repo.getById(1)).toEqual(null);
})