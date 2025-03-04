export interface Powerstats {
    intelligence: number,
    strength: number,
    speed: number,
    durability: number,
    power: number,
    combat: number,
}

interface Appearance {
    gender: string,
    race: string,
    height: Array<string>,
    weight: Array<string>,
    eyeColor: string,
    hairColor: string,
}

interface Biography {
    fullname: string,
    alterEgos: string,
    aliases: Array<string>,
    placeOfBirth: string,
    firstAppearance: string,
    publisher: string,
    alignment: string,
}

interface Work {
    occupation: string,
    base: string,
}

interface Connections {
    groupAffiliation: string,
    relatives: string,
}

interface Images {
    xs: string,
    sm: string,
    md: string,
    lg: string,
}

export interface Hero {
    id: number,
    name: string,
    slug: string,
    powerstats: Powerstats,
    appearance: Appearance,
    biography: Biography,
    work: Work,
    connections: Connections,
    images: Images,
}