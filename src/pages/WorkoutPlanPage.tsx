import { Link, useParams } from "react-router-dom"
import { workoutPlanList } from "../constants"

type Props = {}

const WorkoutPlanPage = (props: Props) => {
    const { id } = useParams()
    const workoutPlan = workoutPlanList.find(w => w.id === id)

    if (!workoutPlan) {
        return (
            <p>The requested workout type does not exist.</p>
        )
    }

    return (
        <div className="col-12 col-md-3 m-3">
            <Link className="btn btn-info mb-2" to="/" >Back to Workout Types</Link>
            <div className="card">
                <div className="card-header">
                    id: {workoutPlan.id}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{workoutPlan.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{workoutPlan.numberOfDays}</h6>
                    <p className="card-text">
                        
                    <li className="list-group-item">Exercises: {workoutPlan.listExercises}</li>
                        
                        
                    </p>
                </div>
            </div>
        </div>
    )

}

export default WorkoutPlanPage
