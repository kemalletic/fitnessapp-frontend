import { Link, useParams } from "react-router-dom"
import { exerciseList } from "../constants"

type Props = {}

const ExercisePage = (props: Props) => {
    const { id } = useParams()
    const exercise = exerciseList.find(w => w.id === id)

    if (!exercise) {
        return (
            <p>The requested exercise does not exist.</p>
        )
    }

    return (
        <div className="col-12 col-md-3 m-3">
            <Link className="btn btn-info mb-2" to="/" >Back to Exercises</Link>
            <div className="card">
                <div className="card-header">
                    id: {exercise.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{exercise.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{exercise.category}</h6>
                    <p className="card-text">
                        
                        <li className="list-group-item">Description: {exercise.description}</li>
                        
                        <li className="list-group-item">Video URL: {exercise.videoUrl}</li>
                    </p>
                </div>
            </div>
        </div>
    )

}

export default ExercisePage
