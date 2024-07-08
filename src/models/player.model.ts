export interface Player {
    _id?: number;
    name: string;
    birthday: number;
    team: number; // Reference to the team _id
}
