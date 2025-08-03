import React from 'react';

const courses = [
  { title: 'Angular', date: '4/5/2021' },
  { title: 'React', date: '6/3/20201' }
];

const CourseDetails = () => {
  return (
    <div style={{ padding: '0 20px' }}>
      <h2>Course Details</h2>
      {courses.map((course, idx) => (
        <div key={idx}>
          <strong>{course.title}</strong>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
