import { useQuery } from "react-query";
import { WorkoutPlanService } from "../services";


const useWorkoutPlans = () => {
   return useQuery('workoutPlans',
       () => WorkoutPlanService.getAllPlans()
   );
}


export default useWorkoutPlans;