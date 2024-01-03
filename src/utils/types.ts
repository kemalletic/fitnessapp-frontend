export type Exercise = {
    id: string;
    name: string;
    description: string;
    category: string;
    manufacturer: string;
    videoUrl: string;
}

export type WorkoutType = {
    id: string;
    name: string;
    description: string;
    category: string;
    notes: string;

}

export type WorkoutPlan = {
    id: string;
    name: string;
    numberOfDays: number;
    exercises: Exercise[];
}