import { useQuery } from "react-query";
import { ExerciseService } from "../services";


const useExercises = () => {
   return useQuery('exercises',
       () => ExerciseService.getExercise()
   );
}


export default useExercises;
