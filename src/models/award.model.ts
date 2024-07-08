export interface Award {
    _id?: number;
    type: string;
    date: number;
    player: number; // Reference to the player _id
}
