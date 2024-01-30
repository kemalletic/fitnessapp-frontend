import React from 'react';
import WorkoutTypeList from '../components/WorkoutTypeList';
import WorkoutPlanList from '../components/WorkoutPlanList';  // Import the WorkoutPlanList component

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <h2 className="m-3">Find a Workout type...</h2>
      <WorkoutTypeList />
      
      {/* Add the WorkoutPlanList component */}
      <div>
        <h2 className="m-3">Explore Workout Plans</h2>
        <WorkoutPlanList />
      </div>
    </div>
  );
}

export default Home;
