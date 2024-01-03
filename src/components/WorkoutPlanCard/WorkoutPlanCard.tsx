import React from 'react';
import { WorkoutPlan, Exercise } from '../../utils/types';

type Props = {
  workoutPlan: WorkoutPlan;
};

const WorkoutPlanCard = ({ workoutPlan }: Props) => {
  return (
    <div className="col-12 col-md-3 m-3">
      <div className="card">
        <div className="card-header">ID: {workoutPlan.id}</div>
        <div className="card-body">
          <h5 className="card-name">{workoutPlan.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Number of days: {workoutPlan.numberOfDays}
          </h6>
          <p className="card-text">
            Exercises:
            <ul className="list-group">
              {workoutPlan.exercises.map((exercise: Exercise) => (
                <li key={exercise.id} className="list-group-item">
                  {exercise.name}
                </li>
              ))}
            </ul>
          </p>
          <a className="btn btn-primary">Enter</a>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPlanCard;
