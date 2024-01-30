import React, { ChangeEvent, useEffect, useState } from 'react';
import { workoutPlanList } from '../../constants';
import WorkoutPlanCard from '../WorkoutPlanCard/WorkoutPlanCard';
import { WorkoutPlan } from '../../utils/types';
import { WorkoutPlanService } from '../../services';
import workoutPlans from '../../services/workoutPlans';

type Props = {};

const WorkoutPlanList = (props: Props) => {
    const [workoutPlans, setWorkoutPlans] = useState<WorkoutPlan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>();

    useEffect(() => {
        setLoading(true);
        WorkoutPlanService.getAllPlans()
            .then((data) => {
                setWorkoutPlans(data);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const filterdWorkoutPlans = workoutPlanList.filter(
            (workoutPlan) =>
                workoutPlan.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setWorkoutPlans(filterdWorkoutPlans);
    };

    const enter = (id: string) => {
        const filteredWorkoutPlans = workoutPlanList.filter(
            (workoutPlan) => workoutPlan.id !== id
        );
        setWorkoutPlans(filteredWorkoutPlans);
    };

    return (
        <>
            <h2 className="m-2">Find a workout plan...</h2>
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
                    {workoutPlans.map((workoutPlan: WorkoutPlan) => (
                        <WorkoutPlanCard
                            workoutPlan={workoutPlan}
                            enter={enter}
                            key={workoutPlan.id}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default WorkoutPlanList;