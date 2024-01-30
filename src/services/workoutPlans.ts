import appAxios from "./appAxios";
import { WorkoutPlan } from "../utils/types";

const getAllPlans = async (): Promise<WorkoutPlan[]> => {
  return appAxios.get("/workoutPlans/").then((response) => {
    const data = response.data;
    console.log(data);
    return data;
  });
};

const createWorkoutPlan = async (workoutPlan: WorkoutPlan): Promise<WorkoutPlan> => {
  return appAxios.post("/workoutPlans/create", workoutPlan).then((response) => {
    const data = response.data;
    console.log("WORKOUT PLAN ADDED IS ", data);
    return data;
  });
};

const updateWorkoutPlan = async (data: WorkoutPlan) => {
  return appAxios.put(`/workoutPlans/${data.id}`, data).then((response) => response.data);
};

const deleteWorkoutPlan = async (id: string) => {
  return appAxios.delete(`/workoutPlans/${id}`).then((response) => {
    const { data } = response;
    return data;
  });
};

export default {
  getAllPlans,
  createWorkoutPlan,
  updateWorkoutPlan,
  deleteWorkoutPlan,
};