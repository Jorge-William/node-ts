export interface User {
    name: string,
    email: string
}

const databaseFake = [
    {
        name: "Jorge William",
        email: "jorge@dio.com"
    },
    {
        name: "Flávia Carla",
        email: "jorge@dio.com"
    },
    {
        name: "Maria Lúcia",
        email: "jorge@dio.com"
    },
]

export class UserService {
    db: User[]

    constructor(database = databaseFake) {
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }
        this.db.push(user)
        console.log("Db atualizado", this.db);

    }
    getAllUsers = () => {
        console.log(this.db);
        return this.db
    }
}