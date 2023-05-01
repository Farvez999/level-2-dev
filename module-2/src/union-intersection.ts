// Union
type NoobDeveloper = {
    name: string
}

type JrDeveloper = {
    name: string
    expertise: string,
    experience: number
}

const newDeveloper: NoobDeveloper | JrDeveloper = {
    name: "Moznu Mia",
    expertise: "Javascript",
    experience: 2
}

//Intersection
type NoobsDeveloper = {
    name: string
}

type JrsDeveloper = NoobsDeveloper & {
    expertise: string,
    experience: number
}

type SrDeveloper = JrsDeveloper & {
    leaderExperience: number,
    level: "junior" | "mid" | "senior";
}

const developer: SrDeveloper = {
    name: "Konzu Mia",
    expertise: "Javascript",
    experience: 2,
    leaderExperience: 1,
    level: "senior"
}

const newsDeveloper: NoobsDeveloper | JrsDeveloper = {
    name: "Moznu Mia",
    expertise: "Javascript",
    experience: 2
}
