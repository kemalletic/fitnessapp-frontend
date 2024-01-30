import React from 'react';
import { Link } from 'react-router-dom';
import { Exercise } from '../../utils/types';


type Props = {
  exercise: Exercise;
  enter: (id: string) => void;
};

const ExerciseCard = ({ exercise, enter }: Props) => {
  return (
    <div className="col-12 col-md-3 m-3">
      <div className="card">
        <div className="card-header">ID: {exercise.id}</div>
        <div className="card-body">
          <h5 className="card-name">{exercise.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Name: {exercise.name}</h6>
          <p className="card-text">
            <li className="list-group-item">Description: {exercise.description}</li>
            <li className="list-group-item">Category: {exercise.category}</li>
            <li className="list-group-item">Video URL: {exercise.videoUrl}</li>
          </p>
          <Link className="btn btn-info mx-1" to={`/exercises/${exercise.id}`}>
            View the workout type
          </Link>
          <button className="btn btn-primary" onClick={() => enter(exercise.id)}>
            Enter
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
