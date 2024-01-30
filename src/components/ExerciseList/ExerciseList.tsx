import React, { useState, useEffect, ChangeEvent } from 'react';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { ExerciseService } from '../../services';
import useExercises from '../../hooks/UseExercises';


type Props = {};

const ExerciseList = (props: Props) => {
  const { data: exercises, error, isLoading, refetch } = useExercises();

  const enter = (id: string) => {
    // Implement your enter logic here
    console.log(`Entering workout type with ID: ${id}`);
  };

  return (
    <>
      <h2 className="m-2">Find a exercise...</h2>
      <div className="row">
        <div className="col-12 col-md-4 mx-3">
          <input
            type="text"
            className="form-control"
            // onChange={search}
            placeholder="Search for an exercise..."
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
          {exercises &&
            exercises.map((exercise, i) => (
              <ExerciseCard exercise={exercise} enter={enter} key={i} />
            ))}
        </div>
      )}
    </>
  );
};

export default ExerciseList;
