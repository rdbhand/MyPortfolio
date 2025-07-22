import '../../styles/Projects.css';

function Projects(){

  let projectList=[{
  "title": "Assignment Submission System",
  "desc": "Web-based full stack app using HTML, CSS, JS, and PHP for managing assignment submissions.",
  "startDate": "08-2024",
  "endDate": "11-2025",
  "techStack": ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  "features": [
    "Student and teacher login",
    "Assignment upload and grading",
    "Deadline tracking and alerts"
  ],
  "responsibilities": [
    "Built UI and backend logic",
    "Managed MySQL database",
    "Tested and debugged core features"
  ],
  "tools": ["XAMPP", "phpMyAdmin", "VS Code", "GitHub"],
  "futureScope": [
    "Plagiarism detection",
    "Email notifications",
    "Analytics dashboard"
  ]
}
,
{
  "title": "Tiffin Service Management System",
  "desc": "Web-based application to manage tiffin orders, delivery schedules, and user subscriptions for a tiffin service provider.",
  "startDate": "02-2025",
  "endDate": "04-2025",
  "techStack": ["HTML", "CSS", "JavaScript", "Java", "MySQL"],
  "features": [
    "User registration and login",
    "Menu display and daily meal selection",
    "Subscription plans and payment tracking"
  ],
  "responsibilities": [
    "Designed interactive UI for customers and admins",
    "Handled order processing and status updates",
    "Implemented database schema for meals, users, and subscriptions"
  ],
  "tools": ["XAMPP", "phpMyAdmin", "VS Code", "GitHub"],
  "futureScope": [
    "Online payment integration (Razorpay/Paytm)",
    "Customer feedback and rating system",
    "Delivery tracking using GPS"
  ]
}
];
  return (
    <>
       <div className="projects-container">
      {projectList.map((project, index) => (
        <div className="project" key={index}>
          <h2>{project.title}</h2>
          <p><strong>Duration:</strong> {project.startDate} to {project.endDate}</p>
          <p>{project.desc}</p>
          
          <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>

          <p><strong>Tools:</strong> {project.tools.join(", ")}</p>

          
        </div>
      ))}
    </div>
    </>
  );
}

export default Projects;