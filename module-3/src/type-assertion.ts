let emni: any;

emni = "Next Level web Development";

// (emni as string).length
<string>emni.length // type as arek system

function kgToGram(param: string | number): string | number | undefined {
    if (typeof param === "string") {
        const value = parseFloat(param) * 1000;
        return `The converted result is : ${value} gram`
    }
    if (typeof param === "number") {
        const value = param * 1000;
        return value
    }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = kgToGram("1000") as string;



type CustomError = {
    message: string
}
try {

} catch (error) {
    console.log((error as CustomError).message)
}