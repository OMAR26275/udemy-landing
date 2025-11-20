import React from "react";
import { coursesData } from "../data/courses";

const CoursesSection = () => {
  return (
    <section className="courses-section">
      <div className="courses-title">
        <h2>Skills to transform your career and life</h2>
        <p>
          From critical skills to technical topics, Udemy supports your professional development.
        </p>
      </div>

      <div className="courses-container">
        {coursesData.map((course) => (
          <div key={course.id} className="course-card">
            <img src={course.image} alt={course.title} />
            <h3>{course.title}</h3>
            <p className="instructor">{course.instructor}</p>
            {course.badge && <span className="badge">{course.badge}</span>}
            <div className="rating">
              <span>⭐ {course.rating}</span>
              <span>({course.reviews})</span>
            </div>
            <p className="price">{course.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesSection;
