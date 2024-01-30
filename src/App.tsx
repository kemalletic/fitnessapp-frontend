import { Route, Routes } from "react-router-dom";
import { About, WorkoutTypePage, Home, Login, NotFound, Registration, StartPage, Profile, WorkoutPlanPage, ExercisePage } from "./pages";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<StartPage />} /> {/* Use index route for the StartPage */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/about" element={<About />} />
        <Route path="/workouttypes/:id" element={<WorkoutTypePage />} />
        <Route path="/workoutPlans/:id" element={<WorkoutPlanPage />} />
        <Route path="/exercises/:id" element={<ExercisePage />} />
        
        

        
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          {/* add any other protected routes here */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
