import React, { ChangeEvent, useEffect, useState } from 'react';
import { exerciseList } from '../../constants';
import ExerciseCard from '../ExerciseCard/ExerciseCard';
import { Exercise } from '../../utils/types';
import { ExerciseService } from '../../services';

type Props = {};

const ExerciseList = (props: Props) => {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
        setLoading(true);
        ExerciseService.getExercise()
            .then((data) => {
                setExercises(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredExercises = exerciseList.filter(
            (exercise) =>
                exercise.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setExercises(filteredExercises);
    };

    const enter = (id: string) => {
        const filteredExercises = exerciseList.filter(
            (exercise) => exercise.id !== id
        );
        setExercises(filteredExercises);
    };

    return (
        <>
            <h2 className="m-2">Find an exercise...</h2>
            <div className="row">
                <div className="col-12 col-md-4 mx-3">
                    <input
                        type="text"
                        className="form-control"
                        onChange={search}
                        placeholder="Search for an exerise..."
                    />
                </div>
            </div>
            {loading && (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            )}
            {error && (
                <div className="row">
                    <div className="col-12 col-md-3 m-3">
                        <div className="alert alert-danger" role="alert">
                            <h4 className="alert-heading">Unable to render data!</h4>
                            <p>{error?.response?.data?.message || error?.message}</p>
                            <hr />
                            <p className="mb-0">
                                Something went wrong, please try again.
                            </p>
                        </div>
                    </div>
                </div>
            )}
            {!loading && (
                <div className="row">
                    {exercises.map((exercise: Exercise) => (
                        <ExerciseCard
                            exercise={exercise}
                            enter={enter}
                            key={exercise.id}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default ExerciseList;
