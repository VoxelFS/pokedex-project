export interface pokemonType {
    abilities: ability[]; 
    base_experience: number;
    forms: {name: string; url: string}[];
    game_indices: {game_index: number; version: {name: string; url: string}}[];
    height: number;
    held_items: item[];
    id: number;
    is_default: boolean;
    location_area_encounters: string;
    moves: move[];
    name: string;
    order: number;
    past_abilities: any;
    past_types: any;
    species: {name: string; url: string};
    sprites: sprite[];
    stats: stat[];
    types: type[];
    weight: number
}

export interface pokemonObj {
    name: string;
    url: string;
}

export interface ability {
    name: string;
    url: string;
    is_hidden: boolean;
    slot: number
}

export interface item {
    name: string;
    url: string;
}

export interface move {
    name: string;
    url: string;
    version_group_details: {
        level_learned_at: number;
        move_learn_method: {name: string; url: string}[];
        version_group: {name: string; url: string};
    }
}

export interface sprite {
    back_default: string;
    back_female: undefined | string;
    back_shiny: string;
    back_shiny_female: undefined | string;
    front_default: string;
    front_default_female: undefined | string;
    front_shiny: string;
    front_shiny_female: undefined | string;
}

export interface stat {
    base_state: number;
    effort: number;
    stat: {
        name: string;
        url: string;
    }
}

export interface type {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}