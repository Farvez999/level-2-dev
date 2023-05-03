// Kono kichu retun na korle void  | Kichu return korle string

interface ITodo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
}
const getTodo = async (): Promise<ITodo> => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return await res.json()
};

const getTodoData = async (): Promise<void> => {
    const result = await getTodo();
    console.log(result)
}

getTodoData()


//String Type

const makePromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
        const data: string = "Data is fetched"
        if (data) {
            resolve(data)
        } else {
            reject("Failed Data")
        }
    })
}

const getPromiseData = async (): Promise<string> => {
    const data = await makePromise();
    return data
}

// Boolean
const makePromiseBoolean = (): Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data: boolean = true
        if (data) {
            resolve(data)
        } else {
            reject("Failed Data")
        }
    })
}

const getPromiseDataBoolean = async (): Promise<boolean> => {
    const data = await makePromiseBoolean();
    return data
}

// Object
const makePromiseObject = (): Promise<object> => {
    return new Promise<object>((resolve, reject) => {
        const data: object = { data: "Data is fetched" }
        if (data) {
            resolve(data)
        } else {
            reject("Failed Data")
        }
    })
}

const getPromiseDataObject = async (): Promise<object> => {
    const data = await makePromiseObject();
    return data
}