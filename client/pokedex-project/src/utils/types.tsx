interface baseTemplate {
    name: string;
    url: string;
}

export interface pokemonType {
    abilities: ability[]; 
    base_experience: number;
    forms: baseTemplate[];
    game_indices: {game_index: number; version: baseTemplate}[];
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
    species: baseTemplate;
    sprites: sprite;
    stats: stat[];
    types: type[];
    weight: number
}

export interface pokemonSpecies {
    base_happiness: number;
    capture_rate: number;
    color: baseTemplate;
    egg_groups: baseTemplate[];
    evolution_chain: {url: string};
    evolves_from_species: undefined | baseTemplate;
    flavor_text_entries: {flavor_text: string; language: baseTemplate; version: baseTemplate}[];
    form_description: any;
    forms_switchable: boolean;
    gender_rate: number;
    genera: {genus: string; language: baseTemplate}[];
    generation: baseTemplate;
    growth_rate: baseTemplate;
    habitat: baseTemplate;
    has_gender_difference: boolean;
    hatch_counter: number;
    id: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    name: string;
    names: {language: baseTemplate; name: string}[];
    order: number;

}

export interface pokemonObj {
    name: string;
    url: string;
}

export interface ability {
    ability: baseTemplate;
    is_hidden: boolean;
    slot: number;
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
        move_learn_method: baseTemplate[];
        version_group: baseTemplate;
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