import React, { useState, useEffect, ChangeEvent } from 'react';
import WorkoutPlanCard from '../WorkoutPlanCard/WorkoutPlanCard';
import { WorkoutPlanService } from '../../services';
import useWorkoutPlans from '../../hooks/useWorkoutPlans';

type Props = {};

const WorkoutPlanList = (props: Props) => {
  const { data: workoutPlans, error, isLoading, refetch } = useWorkoutPlans();

  const enter = (id: string) => {
    // Implement your enter logic here
    console.log(`Entering workout type with ID: ${id}`);
  };

  return (
    <>
      <h2 className="m-2">Find a workout plan...</h2>
      <div className="row">
        <div className="col-12 col-md-4 mx-3">
          <input
            type="text"
            className="form-control"
            // onChange={search}
            placeholder="Search for a workout type..."
          />
        </div>
      </div>
      {isLoading && (
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && (
        <div className="row">
          <div className="col-12 col-md-3 m-3">
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Unable to render data!</h4>
              <p>{(error as any)?.response?.data?.message || (error as any)?.message}</p>
              <hr />
              <p className="mb-0">Something went wrong, please try again.</p>
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="row">
          {workoutPlans &&
            workoutPlans.map((workoutPlan, i) => (
              <WorkoutPlanCard workoutPlan={workoutPlan} enter={enter} key={i} />
            ))}
        </div>
      )}
    </>
  );
};

export default WorkoutPlanList;