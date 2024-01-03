import React, { useState, ChangeEvent } from 'react';
import { workoutTypeList } from '../../constants';
import WorkoutTypeCard from '../WorkoutTypeCard/WorkoutTypeCard';


type Props = {};

const WorkoutTypeList = (props: Props) => {
    const [workoutTypes, setWorkoutTypes] = useState(workoutTypeList);

    const search = (e: ChangeEvent<HTMLInputElement>) => {
        const filteredWorkoutTypes = workoutTypeList.filter(workoutType =>
            workoutType.name.toLowerCase().includes(e.target.value.toLowerCase())
        );

        setWorkoutTypes(filteredWorkoutTypes);
    };

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-4 mx-3">
                    <input
                        type="text"
                        className="form-control"
                        onChange={search}
                        placeholder='Search for an workout type...'
                    />
                </div>
            </div>
            <div className="row">
                {workoutTypes.map((workoutType, i) => (
                    <WorkoutTypeCard workoutType={workoutType} key={i} />
                ))}
            </div>
        </>
    );
};

export default WorkoutTypeList;
