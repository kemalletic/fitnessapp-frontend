import { Exercise, WorkoutPlan, WorkoutType } from "./utils/types";

export const exerciseList: Exercise[] = [
    {
        id: '002',
        name: 'Squat',
        description: 'The squat is a compound exercise that targets the muscles of the lower body, including the quadriceps, hamstrings, and glutes. Stand with your feet shoulder-width apart, lower your body by bending your knees, and then return to the starting position. Squats are effective for building leg strength and overall lower body development.',
        category: 'Compound Movement Exercise',
        manufacturer: 'PowerMax',
        videoUrl: 'https://www.youtube.com/watch?v=ultWZbUMPL8'

    },

    {
        id: '003',
        name: 'Deadlift',
        description: 'The deadlift is a compound exercise that targets the muscles of the posterior chain, including the lower back, glutes, and hamstrings. Bend at the hips and knees to lower your body to the ground, then lift the barbell by extending your hips and knees. Deadlifts are excellent for overall strength and development of the posterior muscles.',
        category: 'Compound Movement Exercise',
        manufacturer: 'Rogue Fitness',
        videoUrl: 'https://www.youtube.com/watch?v=op9kVnSso6Q'
    },

    {
        id: '004',
        name: 'Pull-up',
        description: 'The pull-up is a bodyweight exercise that targets the muscles of the upper back, including the latissimus dorsi. Hang from a horizontal bar with an overhand grip, then pull your body upward until your chin is above the bar. Pull-ups are effective for building upper body strength, especially in the back and arms.',
        category: 'Bodyweight Exercise',
        manufacturer: 'No Equipment Required',
        videoUrl: 'https://www.youtube.com/watch?v=eGo4IYlbE5g'

    }





]

export const workoutTypeList: WorkoutType[] = [
    {
        id: '002',
        name: 'Powerlifting Routine',
        description: 'Powerlifting training aims to increase overall strength by focusing on compound movements like squats, bench press, and deadlifts.',
        category: 'Strength Training',
        notes: 'Pay attention to proper form and gradually increase weights for progressive overload.',
    },

    {
        id: '003',
        name: 'Cardio Circuit',
        description: 'Cardio circuit workouts combine aerobic exercises to burn calories and improve cardiovascular health, aiding in weight loss.',
        category: 'Cardiovascular Exercise',
        notes: 'Include a mix of activities like running, jumping jacks, and burpees for an effective circuit.',
    },

    {
        id: '004',
        name: 'Yoga for Mobility',
        description: 'Yoga enhances flexibility and mobility by incorporating poses and stretches. It promotes relaxation and overall well-being.',
        category: 'Flexibility and Mobility',
        notes: 'Focus on controlled breathing and hold each pose to improve flexibility and reduce stiffness.',
    }
      
      


]


export const workoutPlanList: WorkoutPlan[] = [
  {
    id: '001',
    name: 'Full Body Strength',
    numberOfDays: 3,
    exercises: [
      // Reference existing exercises here
      exerciseList.find((exercise) => exercise.id === '002')!,
      exerciseList.find((exercise) => exercise.id === '004')!,
      // Add other exercises as needed
    ]
  }
  // Add other workout plans as needed
];
