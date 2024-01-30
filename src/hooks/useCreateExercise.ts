import { useMutation, useQueryClient } from 'react-query';
import { ExerciseService } from '../services';
import { Exercise } from '../utils/types';


const useCreateExercise = () => {
   const queryClient = useQueryClient();
   return useMutation((data: Exercise) => ExerciseService.addExercise(data), {
       onSuccess: () => {
           queryClient.invalidateQueries('exercises');
       },
   });
};


export default useCreateExercise;
