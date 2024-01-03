import React, { useState, ChangeEvent } from 'react';
import { exerciseList } from '../../constants';
import ExerciseCard from '../ExerciseCard/ExerciseCard';

type Props = {};

const ExerciseList = (props: Props) => {
    const [exercises, setExercises] = useState(exerciseList);

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredExercises = exerciseList.filter(exercise =>
            exercise.name.toLowerCase().includes(e.target.value.toLowerCase())
        );

        setExercises(filteredExercises);
    };

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-4 mx-3">
                    <input
                        type="text"
                        className="form-control"
                        onChange={search}
                        placeholder='Search for an exercise...'
                    />
                </div>
            </div>
            <div className="row">
                {exercises.map((exercise, i) => (
                    <ExerciseCard exercise={exercise} key={i} />
                ))}
            </div>
        </>
    );
};

export default ExerciseList;
