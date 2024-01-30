import { useMutation, useQueryClient } from 'react-query';
import { WorkoutPlanService } from '../services';
import { WorkoutPlan } from '../utils/types';


const useCreateWorkoutPlan = () => {
   const queryClient = useQueryClient();
   return useMutation((data: WorkoutPlan) => WorkoutPlanService.createWorkoutPlan(data), {
       onSuccess: () => {
           queryClient.invalidateQueries('workoutPlans');
       },
   });
};


export default useCreateWorkoutPlan;