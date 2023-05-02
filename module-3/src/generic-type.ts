type GenericArray<T> = Array<T>

const rollNumbers: GenericArray<number> = [44, 33, 22]
const rollNumbers2: GenericArray<string> = ['44', '33', '22']
const rollNumbers3: GenericArray<boolean> = [true, false]


type NameRollType = { name: string; roll: number }
const userNumberAndRollNumbers: GenericArray<NameRollType> = [
    {
        name: "Mr. X",
        roll: 1
    },
    {
        name: "Mr. y",
        roll: 2
    }
]