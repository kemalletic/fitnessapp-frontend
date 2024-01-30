import appAxios from "./appAxios";
import { Exercise } from "../utils/types";

const getExercise = async (): Promise<Exercise[]> => {
    return appAxios.get(`/exercise/`).then(
        (response) => {
            const data = response.data;
            console.log(data);
            return data;
        });
}

const addExercise = async (exercise: Exercise): Promise<Exercise> => {
    return appAxios.post('/workouttypes/add', exercise).then(
        (response) => {
            const data = response.data;
            console.log("WORKOUT TYPE ADDED IS ", data);
            return data;
        });
}

const updateExercise = async (data: Exercise) => {
    return appAxios
        .put(`/exercise/${data.id}`, data)
        .then((response) => response.data);
};

const deleteExercise = async (id: string) => {
    return appAxios.delete(`/exercise/${id}`).then(response => {
        const { data } = response;
        return data;
    });
};

export default { getExercise, addExercise, updateExercise, deleteExercise };
