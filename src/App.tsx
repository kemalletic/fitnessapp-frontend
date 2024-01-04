import ExerciseCard from "./components/ExerciseCard"
import Exercise from "./components/ExerciseCard"
import ExerciseList from "./components/ExerciseList"
import WorkoutTypeList from "./components/WorkoutTypeList"
import WorkoutPlanList from './components/WorkoutPlanList'
import UserProgressList from "./components/UserProgressList"


/*const exercise: Exercise = {
  id: '001',
  name: 'Bench Press',
  description: 'The bench press is a compound strength-training exercise that targets the chest, shoulders, and triceps. Lie on a flat bench, grip a barbell, and lower it to your chest before pushing it back up. It is effective for building upper body strength and muscle mass. Adjustments like incline or decline variations offer targeting specific areas.',
  category: 'Compound Movement Exercise',
  manufacturer:'TechnoGym',
  videoUrl:'https://www.youtube.com/watch?v=4Y2ZdHCOXok'

} */





function App() {
  return (
    <>
      <h2 className="m-2">Find an exercise...</h2>
      <ExerciseList />

      <h2 className="m-2">Find a workout type...</h2>
      <WorkoutTypeList />

      <h2 className="m-2">Find a workout plan...</h2>
      <WorkoutPlanList />

      
      <h2 className="m-2">Track Your Progress...</h2>
      <UserProgressList />

    </>
  );
}

export default App;