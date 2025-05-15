import React from "react";
import { useParams, Link } from "react-router-dom";

const courseData = {
  "ui-ux": {
    title: "Figma UI UX Design",
    description: "Use Figma to get a job in UI Design, User Experience Design.",
    price: "$17.84",
    videoUrl: "https://www.youtube.com/embed/jwCmIBJ8Jtc",
    thumbnail: "/src/assets/images/a1.png" 
  },
  "frontend": {
    title: "Frontend Development",
    description: "Build responsive, dynamic frontend interfaces with real-world projects.",
    price: "$17.84",
    videoUrl: "https://www.youtube.com/embed/UB1O30fR-EE",
    thumbnail: "/src/assets/images/a1.png" 
  },
  "backend": {
    title: "Backend Development",
    description: "Build scalable backend systems with real-world projects.",
    price: "$17.84",
    videoUrl: "https://www.youtube.com/embed/ldwlOzRvYOU",
    thumbnail: "/src/assets/images/a1.png" 
  }
};

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) {
    return <div className="text-center mt-20 text-red-600 text-xl">Course not found</div>;
  }

  return (
    <div className="min-h-screen pt-24 px-6 md:px-10 bg-gray-100">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <Link
          to="/courses"
          className="inline-block mb-4 text-teal-600 hover:text-teal-800 font-medium"
        >
          ← Back to Courses
        </Link>

        <h2 className="text-3xl font-bold text-teal-600 mb-4">{course.title}</h2>
        
        {/* ❌ Removed thumbnail image here */}

        <p className="text-gray-700 mb-4">{course.description}</p>
        <p className="text-teal-600 font-semibold text-lg mb-6">{course.price}</p>

        {/* Responsive Video */}
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={course.videoUrl}
            title="Course Preview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full rounded-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
