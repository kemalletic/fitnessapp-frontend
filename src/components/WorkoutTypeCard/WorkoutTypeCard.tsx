import React from 'react';
import { Link } from 'react-router-dom';
import { WorkoutType } from '../../utils/types';

type Props = {
  workoutType: WorkoutType;
  enter: (id: string) => void;
};

const WorkoutTypeCard = ({ workoutType, enter }: Props) => {
  return (
    <div className="col-12 col-md-3 m-3">
      <div className="card">
        <div className="card-header">ID: {workoutType.id}</div>
        <div className="card-body">
          <h5 className="card-name">{workoutType.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Category: {workoutType.category}</h6>
          <p className="card-text">
            <li className="list-group-item">Description: {workoutType.description}</li>
            <li className="list-group-item">Notes: {workoutType.notes}</li>
          </p>
          <Link className="btn btn-info mx-1" to={`/workouttypes/${workoutType.id}`}>
            View the workout type
          </Link>
          <button className="btn btn-primary" onClick={() => enter(workoutType.id)}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutTypeCard;