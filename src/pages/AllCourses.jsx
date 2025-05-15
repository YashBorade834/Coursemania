import React from "react";
import { Link } from "react-router-dom";

const allCourses = [
  {
    id: "ui-ux",
    title: "Figma UI UX Design",
    description: "Use Figma to get a job in UI Design, User Experience Design.",
    price: "$17.84",
    thumbnail: "/src/assets/images/a1.png",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Build responsive, dynamic frontend interfaces with real-world projects.",
    price: "$17.84",
    thumbnail: "/src/assets/images/a1.png" ,
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Build scalable backend systems with real-world projects.",
    price: "$17.84",
    thumbnail: "/src/assets/images/a1.png" ,
  },
  // Add more courses as needed here
  {
    id: "ui-ux",
    title: "Figma UI UX Design",
    description: "Use Figma to get a job in UI Design, User Experience Design.",
    price: "$17.84",
    thumbnail: "/src/assets/images/a1.png" ,
  },
  {
    id: "frontend",
    title: "Frontend Development",
    description: "Build responsive, dynamic frontend interfaces with real-world projects.",
    price: "$17.84",
    thumbnail: "/src/assets/images/a1.png" ,
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Build scalable backend systems with real-world projects.",
    price: "$17.84",
    thumbnail: "/src/assets/images/a1.png" ,
  },
];

const AllCourses = () => {
  return (
    <div className="min-h-screen pt-24 px-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">
        All Our Courses
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Explore our full range of programs tailored to help you grow your skills and career.
      </p>
      <Link
                to="/courses"
                className="inline-block mb-4 text-teal-600 hover:text-teal-800 font-medium"
              >
                ← Back to Courses
              </Link>

      <div className="grid md:grid-cols-3 gap-6">
        {allCourses.map((course) => (
          <Link to={`/course/${course.id}`} key={course.id}>
            <div className="bg-white p-5 shadow-lg rounded-lg hover:shadow-xl transition">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-3">{course.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{course.description}</p>
              <p className="text-teal-600 font-semibold mt-2">{course.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
