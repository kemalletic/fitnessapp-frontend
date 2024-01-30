import appAxios from "./appAxios";
import { WorkoutType } from "../utils/types";

export const getWorkoutTypeById = async (id: string): Promise<WorkoutType> => {
    try {
      const response = await appAxios.get<WorkoutType>(`/workouttypes/${id}`);
      const data = response.data;
      console.log("Workout type by ID:", data);
      return data;
    } catch (error) {
      console.error(`Error fetching workout type with ID ${id}:`, error);
      throw error;
    }
  };

const getAllWorkoutTypes = async (): Promise<WorkoutType[]> => {
    return appAxios.get(`/workouttypes/`).then(
        (response) => {
            const data = response.data;
            console.log(data);
            return data;
        });
}

const createWorkoutType = async (workoutType: WorkoutType): Promise<WorkoutType> => {
    return appAxios.post('/workouttypes/create', workoutType).then(
        (response) => {
            const data = response.data;
            console.log("WORKOUT TYPE ADDED IS ", data);
            return data;
        });
}

const updateWorkoutType = async (data: WorkoutType) => {
    return appAxios
        .put(`/workouttypes/${data.id}`, data)
        .then((response) => response.data);
};

const deleteWorkoutType = async (id: string) => {
    return appAxios.delete(`/workouttypes/${id}`).then(response => {
        const { data } = response;
        return data;
    });
};

export default { getWorkoutTypeById, getAllWorkoutTypes, createWorkoutType, updateWorkoutType, deleteWorkoutType };
