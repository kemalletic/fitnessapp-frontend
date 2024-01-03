import React, { useState, ChangeEvent } from 'react';
import { workoutPlanList } from '../../constants';
import WorkoutPlanCard from '../WorkoutPlanCard/WorkoutPlanCard';


type Props = {};

const WorkoutPlanList = (props: Props) => {
    const [workoutPlans, setWorkoutPlans] = useState(workoutPlanList);

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredWorkoutPlans = workoutPlanList.filter(workoutPlan =>
            workoutPlan.name.toLowerCase().includes(e.target.value.toLowerCase())
        );

        setWorkoutPlans(filteredWorkoutPlans);
    };

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-4 mx-3">
                    <input
                        type="text"
                        className="form-control"
                        onChange={search}
                        placeholder='Search for an workout type...'
                    />
                </div>
            </div>
            <div className="row">
                {workoutPlans.map((workoutPlan, i) => (
                    <WorkoutPlanCard workoutPlan={workoutPlan} key={i} />
                ))}
            </div>
        </>
    );
};

export default WorkoutPlanList;
