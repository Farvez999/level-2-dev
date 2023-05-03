type PersonType = {
    name: string;
    age: number;
    address: string;
}

type newTypeUsingKeyOf = keyof PersonType

const a: newTypeUsingKeyOf = 'address'

function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    obj[key];
}

const property = getProperty({ name: "Mr.X", age: 100 }, "age")