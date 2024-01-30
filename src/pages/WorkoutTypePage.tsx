import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { workoutTypeList } from '../constants';
import useWorkoutTypes from '../hooks/useWorkoutTypes';
import { getWorkoutTypeById } from '../services/workoutTypes';

type Props = {};

const WorkoutTypePage = (props: Props) => {
  const { id } = useParams();
  
  const workoutType = workoutTypeList.find((w) => w.id === id);

  if (!workoutType) {
    return <p>The requested workout type does not exist.</p>;
  }

  

  return (
    <div className="col-12 col-md-6 m-3">
      <Link className="btn btn-info mb-2" to="/">
        Back to Workout Types
      </Link>
      <div className="card">
        <div className="card-header">ID: {workoutType.id}</div>
        <div className="card-body">
          <h5 className="card-title">{workoutType.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{workoutType.category}</h6>
          <p className="card-text">
            <li className="list-group-item">Description: {workoutType.description}</li>
            <li className="list-group-item">Notes: {workoutType.notes}</li>
          </p>
        </div>
      </div>
    </div> 
    
  ); 
};

export default WorkoutTypePage;