const db = [
    {
        nome: "Jorge William",
        email: "jorge@dio.com"
    },
    {
        nome: "Flávia Carla",
        email: "jorge@dio.com"
    },
    {
        nome: "Maria Lúcia",
        email: "jorge@dio.com"
    },
]

export class UserService {
    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }
        db.push(user)
        console.log("Db atualizado", db);

    }
    getAllUsers = () => {
        console.log(db);
        return db
    }
}