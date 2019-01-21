import { IRepository } from "../interfaces";
import { User } from "../models";

export class UserRepository implements IRepository<User> {

    getById(id: number): User {
        if (id <= 0) {
            throw new Error('Invalid argument.');
        }

        return null;
    }

    list(predicate?: (entity: User) => boolean): Array<User> {
        throw new Error("Method not implemented.");
    }

    add(entity: User): void {
        throw new Error("Method not implemented.");
    }

    delete(entity: User): void {
        throw new Error("Method not implemented.");
    }

    edit(entity: User): void {
        throw new Error("Method not implemented.");
    }

}
