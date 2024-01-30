import { useQuery } from "react-query";
import { WorkoutTypeService } from "../services";


const useWorkoutTypes = () => {
   return useQuery('workouttypes',
       () => WorkoutTypeService.getAllWorkoutTypes()
   );
}


export default useWorkoutTypes;
