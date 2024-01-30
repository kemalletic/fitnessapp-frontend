import React from 'react';
import { Link } from 'react-router-dom';
import { WorkoutPlan } from '../../utils/types';

type Props = {
  workoutPlan: WorkoutPlan;
  enter: (id: string) => void;
};

const WorkoutPlanCard = ({ workoutPlan, enter }: Props) => {
  return (
    <div className="col-12 col-md-3 m-3">
      <div className="card">
        <div className="card-header">ID: {workoutPlan.id}</div>
        <div className="card-body">
          <h5 className="card-name">{workoutPlan.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Number of days: {workoutPlan.numberOfDays}</h6>
          <p className="card-text">
            <li className="list-group-item">Exercises: {workoutPlan.listExercises}</li>
            
          </p>
          <Link className="btn btn-info mx-1" to={`/workoutplans/${workoutPlan.id}`}>
            View the workout plan
          </Link>
          <button className="btn btn-primary" onClick={() => enter(workoutPlan.id)}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;
