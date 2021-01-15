/* eslint-disable @typescript-eslint/no-use-before-define,@typescript-eslint/no-unused-vars,no-prototype-builtins */
import { Character, Location, Episode, FilterCharacter, Characters, Info, FilterLocation, Locations, FilterEpisode, Episodes, CacheControlScope } from './types';

export const aCharacter = (overrides?: Partial<Character>, relationshipsToOmit: Set<string> = new Set()): Character => {
    relationshipsToOmit.add('Character');
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'a27edb72-6fd6-49c4-a8ad-43727bbfccf0',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'quia',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'eum',
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : 'id',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'consectetur',
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'mollitia',
        origin: overrides && overrides.hasOwnProperty('origin') ? overrides.origin! : relationshipsToOmit.has('Location') ? {} as Location : aLocation({}, relationshipsToOmit),
        location: overrides && overrides.hasOwnProperty('location') ? overrides.location! : relationshipsToOmit.has('Location') ? {} as Location : aLocation({}, relationshipsToOmit),
        image: overrides && overrides.hasOwnProperty('image') ? overrides.image! : 'quia',
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : [relationshipsToOmit.has('Episode') ? {} as Episode : anEpisode({}, relationshipsToOmit)],
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'natus',
    };
};

export const aLocation = (overrides?: Partial<Location>, relationshipsToOmit: Set<string> = new Set()): Location => {
    relationshipsToOmit.add('Location');
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : 'bfe52c08-bd42-41df-a3d4-364c80b41fe8',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'optio',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'ipsa',
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : 'sint',
        residents: overrides && overrides.hasOwnProperty('residents') ? overrides.residents! : [relationshipsToOmit.has('Character') ? {} as Character : aCharacter({}, relationshipsToOmit)],
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'quia',
    };
};

export const anEpisode = (overrides?: Partial<Episode>, relationshipsToOmit: Set<string> = new Set()): Episode => {
    relationshipsToOmit.add('Episode');
    return {
        id: overrides && overrides.hasOwnProperty('id') ? overrides.id! : '6d55cfbc-a432-4e88-8866-71f705990e69',
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'repellat',
        air_date: overrides && overrides.hasOwnProperty('air_date') ? overrides.air_date! : 'molestias',
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : 'tempora',
        characters: overrides && overrides.hasOwnProperty('characters') ? overrides.characters! : [relationshipsToOmit.has('Character') ? {} as Character : aCharacter({}, relationshipsToOmit)],
        created: overrides && overrides.hasOwnProperty('created') ? overrides.created! : 'et',
    };
};

export const aFilterCharacter = (overrides?: Partial<FilterCharacter>, relationshipsToOmit: Set<string> = new Set()): FilterCharacter => {
    relationshipsToOmit.add('FilterCharacter');
    return {
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'laboriosam',
        status: overrides && overrides.hasOwnProperty('status') ? overrides.status! : 'placeat',
        species: overrides && overrides.hasOwnProperty('species') ? overrides.species! : 'cumque',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'facere',
        gender: overrides && overrides.hasOwnProperty('gender') ? overrides.gender! : 'et',
    };
};

export const aCharacters = (overrides?: Partial<Characters>, relationshipsToOmit: Set<string> = new Set()): Characters => {
    relationshipsToOmit.add('Characters');
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : relationshipsToOmit.has('Info') ? {} as Info : anInfo({}, relationshipsToOmit),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [relationshipsToOmit.has('Character') ? {} as Character : aCharacter({}, relationshipsToOmit)],
    };
};

export const anInfo = (overrides?: Partial<Info>, relationshipsToOmit: Set<string> = new Set()): Info => {
    relationshipsToOmit.add('Info');
    return {
        count: overrides && overrides.hasOwnProperty('count') ? overrides.count! : 4434,
        pages: overrides && overrides.hasOwnProperty('pages') ? overrides.pages! : 6704,
        next: overrides && overrides.hasOwnProperty('next') ? overrides.next! : 5511,
        prev: overrides && overrides.hasOwnProperty('prev') ? overrides.prev! : 8829,
    };
};

export const aFilterLocation = (overrides?: Partial<FilterLocation>, relationshipsToOmit: Set<string> = new Set()): FilterLocation => {
    relationshipsToOmit.add('FilterLocation');
    return {
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'sit',
        type: overrides && overrides.hasOwnProperty('type') ? overrides.type! : 'laborum',
        dimension: overrides && overrides.hasOwnProperty('dimension') ? overrides.dimension! : 'omnis',
    };
};

export const aLocations = (overrides?: Partial<Locations>, relationshipsToOmit: Set<string> = new Set()): Locations => {
    relationshipsToOmit.add('Locations');
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : relationshipsToOmit.has('Info') ? {} as Info : anInfo({}, relationshipsToOmit),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [relationshipsToOmit.has('Location') ? {} as Location : aLocation({}, relationshipsToOmit)],
    };
};

export const aFilterEpisode = (overrides?: Partial<FilterEpisode>, relationshipsToOmit: Set<string> = new Set()): FilterEpisode => {
    relationshipsToOmit.add('FilterEpisode');
    return {
        name: overrides && overrides.hasOwnProperty('name') ? overrides.name! : 'officia',
        episode: overrides && overrides.hasOwnProperty('episode') ? overrides.episode! : 'dolorem',
    };
};

export const anEpisodes = (overrides?: Partial<Episodes>, relationshipsToOmit: Set<string> = new Set()): Episodes => {
    relationshipsToOmit.add('Episodes');
    return {
        info: overrides && overrides.hasOwnProperty('info') ? overrides.info! : relationshipsToOmit.has('Info') ? {} as Info : anInfo({}, relationshipsToOmit),
        results: overrides && overrides.hasOwnProperty('results') ? overrides.results! : [relationshipsToOmit.has('Episode') ? {} as Episode : anEpisode({}, relationshipsToOmit)],
    };
};
