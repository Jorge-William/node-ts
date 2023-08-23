import { User, UserService } from "./UserService";

describe('UserService', () => {
    const mockDb: User[] = []
    const userService = new UserService(mockDb);

    test('Deve adicionar um novo usuário', () => {
        const mockConsole = jest.spyOn(global.console, 'log');
        userService.createUser("Jorge", "jorge@william.com");

        expect(mockConsole).toHaveBeenCalledWith('Db atualizado', mockDb)
    })
})