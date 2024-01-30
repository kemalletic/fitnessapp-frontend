import React from 'react';

const About = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">Welcome to FitnessHub</h2>
            <p className="lead">Crushing fitness goals together! 💪</p>
          </div>

          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button bg-light"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  About Our Project
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-center">
                  <p>
                    Welcome to <em className="text-primary">FitnessHub</em> – a project born out of passion and dedication during the Web Engineering course.
                  </p>

                  <p>
                    In this course, we set out to create a revolutionary Fitness Application, aiming to provide a seamless experience for users at every fitness level.
                  </p>

                  <p className="fw-bold">What makes FitnessHub unique?</p>

                  <ul className="list-unstyled">
                    <li>
                      <em>Vast Workout Library:</em> Explore a diverse collection of workouts, from heart-pumping cardio to soothing meditation.
                    </li>

                    <li>
                      <em>Personalized Experience:</em> Tailor your fitness journey with personalized workout plans designed for your goals.
                    </li>

                    <li>
                      <em>Community and Support:</em> Join a community that crushes fitness goals together, supporting and inspiring each other.
                    </li>
                  </ul>

                  <p>
                    Embark on a transformative fitness experience with FitnessHub. Whether you're a beginner or an enthusiast, we're here to help you become the best version of yourself.
                  </p>

                  <p>
                    Thank you for being part of our FitnessHub community! 💪🚀
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
