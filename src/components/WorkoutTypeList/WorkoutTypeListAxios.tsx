import React, { ChangeEvent, useEffect, useState } from 'react';
import { workoutTypeList } from '../../constants';
import WorkoutTypeCard from '../WorkoutTypeCard/WorkoutTypeCard';
import { WorkoutType } from '../../utils/types';
import { WorkoutTypeService } from '../../services';

type Props = {};

const WorkoutTypeList = (props: Props) => {
    const [workoutTypes, setWorkoutTypes] = useState<WorkoutType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
        setLoading(true);
        WorkoutTypeService.getAllWorkoutTypes()
            .then((data) => {
                setWorkoutTypes(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredWorkoutTypes = workoutTypeList.filter(
            (workoutType) =>
                workoutType.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setWorkoutTypes(filteredWorkoutTypes);
    };

    const enter = (id: string) => {
        const filteredWorkoutTypes = workoutTypeList.filter(
            (workoutType) => workoutType.id !== id
        );
        setWorkoutTypes(filteredWorkoutTypes);
    };

    return (
        <>
            <h2 className="m-2">Find a workout type...</h2>
            <div className="row">
                <div className="col-12 col-md-4 mx-3">
                    <input
                        type="text"
                        className="form-control"
                        onChange={search}
                        placeholder="Search for a workout type..."
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
                    {workoutTypes.map((workoutType: WorkoutType) => (
                        <WorkoutTypeCard
                            workoutType={workoutType}
                            enter={enter}
                            key={workoutType.id}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default WorkoutTypeList;