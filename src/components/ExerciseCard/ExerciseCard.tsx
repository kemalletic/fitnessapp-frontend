import React from 'react'
import { Exercise } from "../../utils/types"

type Props = {
    exercise: Exercise
}

const ExerciseCard = ({ exercise }: Props) => {
    return (
        <div className="col-12 col-md-3 m-3">
            <div className="card">
                <div className="card-header">
                    ID: { exercise.id }
                </div>
                <div className="card-body">
                    <h5 className="card-name">{ exercise.name }</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Category: { exercise.category }</h6>
                    <p className="card-text">
                        <li className="list-group-item">Description: { exercise.description }</li>
                        <li className="list-group-item">Manufacturer: { exercise.manufacturer }</li>
                        <li className="list-group-item">Video URL: { exercise.videoUrl }</li>
                        
                    </p>
                    <a className="btn btn-primary">Start</a>
                </div>
            </div>
        </div>
    )
 }
 

export default ExerciseCard