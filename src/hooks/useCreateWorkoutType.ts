import { useMutation, useQueryClient } from 'react-query';
import { WorkoutTypeService } from '../services';
import { WorkoutType } from '../utils/types';


const useCreateWorkoutType = () => {
   const queryClient = useQueryClient();
   return useMutation((data: WorkoutType) => WorkoutTypeService.createWorkoutType(data), {
       onSuccess: () => {
           queryClient.invalidateQueries('workouttypes');
       },
   });
};


export default useCreateWorkoutType;
