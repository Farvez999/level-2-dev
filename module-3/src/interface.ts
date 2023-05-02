type User = {
    name: string;
    age: number
}

interface IUser {
    name: string;
    age: number
}

// const userWithTypeAlias: User = {
//     name: "Alias Type",
//     age: 100
// }

// const userWithInterface: IUser = {
//     name: "Interface",
//     age: 100
// }

interface IExtendedUser extends IUser {
    role: string
}

const user: IExtendedUser = {
    name: "Extended",
    age: 100,
    role: "Unknow"
}