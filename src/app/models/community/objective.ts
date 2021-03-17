import {Catalogue, State} from '../app/models.index';

export interface Objective {
    id?:number;
    parent?:Objective;
    indicator?: string;
    means_verification?: string
    description?: string
    type?: Catalogue;
    children?: Objective[];
    state?: boolean;
}
