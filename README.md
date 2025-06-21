# 🎓 Student Progress Management System (MERN)

A full-stack web application to manage and monitor students' Codeforces performance. Built with the MERN stack, it features data sync, visual analytics, inactivity alerts, and submission tracking.

## Features

- Add/Edit/Delete student records
- View all students in a table with details like name, email, phone, Codeforces handle, current and max rating
- View individual student’s Codeforces contest history with a line graph and table
- Filter contest history by 30/90/365 days
- View problem-solving stats with filters (7/30/90 days): hardest problem, total solved, average rating, average per day
- Bar chart for problems solved by rating
- Submission heatmap
- Export student data as CSV
- Automatic daily Codeforces data sync at 2 AM using cron job
- Re-sync student data instantly if their handle is updated
- Inactivity detection: send reminder emails if no submissions in last 7 days
- Track how many reminders have been sent, and disable them for specific students
- Mobile/tablet responsive UI with dark/light mode toggle

## Tech Stack

- Frontend: React.js, Tailwind CSS, Chart.js, React Calendar Heatmap
- Backend: Node.js, Express.js, MongoDB, Nodemailer, Node-cron
- External API: Codeforces Public API

## Folder Structure

student-progress-system/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── utils/
│   ├── index.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
└── README.md

## Getting Started

### Backend Setup

```bash
cd backend
npm install
# Create a .env file with:
# MONGO_URI=your_mongo_uri
# MAIL_USER=your_email
# MAIL_PASS=your_email_password_or_app_password
# CRON_TIME="0 2 * * *"  # optional, defaults to 2 AM
npm run dev
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## API Endpoints

Base URL: `/api/students`

| Method | Endpoint        | Description               |
|--------|------------------|---------------------------|
| GET    | `/`              | Get all students          |
| POST   | `/`              | Add a new student         |
| GET    | `/:id`           | Get student by ID         |
| PUT    | `/:id`           | Update student            |
| DELETE | `/:id`           | Delete student            |
| POST   | `/sync/:id`      | Manual CF sync for student|

## Links

- GitHub: [https://github.com/Mrakshaymehta/Student-Progress-Management-System](https://github.com/Mrakshaymehta/Student-Progress-Management-System)
- Demo Video: [Add your Loom/YouTube link here]

## Author

Akshay Mehta  
GitHub: https://github.com/Mrakshaymehta  
LinkedIn: https://linkedin.com/in/akshay-mehta-23
