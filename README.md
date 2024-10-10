# Instagram Lite

Instagram Lite is a full-stack web application inspired by Instagram, featuring key functionalities such as creating posts, liking and commenting, following/unfollowing users, and secured authentication (including Google OAuth). This project allowed me to explore new technologies and move beyond my comfort zone.

---

## Features

- **Create Post (Images Only):** Users can create and share image-based posts.
- **Like and Comment on Posts:** Engage with posts by liking and commenting.
- **Follow/Unfollow Users:** Connect with other users by following or unfollowing their profiles.
- **Secure Authentication:** Sign up and log in securely using credentials or Google OAuth.
- **Responsive UI:** Fully responsive design for seamless user experience on different devices.

---

## Tech Stack

This project was a learning experience focused on exploring new technologies in both frontend and backend development. Below is the list of technologies used:

### Frontend

- **React**: UI development with React components and hooks.
- **Tailwind CSS**: For fast and responsive styling.
- **Vite**: For fast builds and live reload during development.
- **React Router Dom**: For dynamic routing within the app.
- **React Toastify**: For elegant toast notifications.
- **React Icons**: Providing scalable vector icons.
- **Google OAuth**: Secure authentication via Google using `@react-oauth/google`.
- **Supabase**: Used for authentication and storage.
- **Date-fns**: Utility for date manipulation.

### Backend

- **Node.js**: Backend runtime for executing JavaScript code.
- **Express.js**: Web framework for building APIs.
- **Sequelize**: ORM for PostgreSQL and SQLite databases.
- **PostgreSQL**: Primary relational database.
- **SQLite**: Lightweight relational database used during development.
- **JWT (JsonWebToken)**: For secure authentication and authorization.
- **Bcrypt.js**: For hashing passwords.
- **Express Validator**: Middleware for validating and sanitizing inputs.
- **CORS**: Handling Cross-Origin Resource Sharing.

---

## Project Structure

In this project, the frontend and backend are structured to run on the same port, and we serve the frontend from the backend itself. The `dist` folder, which contains the built frontend assets, is located inside the backend folder (inside the `client` folder).

The frontend code is included in the repository for reference purposes only.

---

## Running the Project Locally

To run this project locally, please follow these steps:

1. **Fork the Repository**: Start by forking the repository to your local device.
2. **Navigate to the Backend Directory**: Open your terminal and navigate to the backend directory of the project.
3. **Install Dependencies**: Run the following command to install the necessary dependencies:

   ```bash
   npm install

---
  
## Acknowledgments

- **React**: Inspired by the Instagram UI and user experience.
- **Kalvium Mentors**: Guided by Kalvium Mentors who helped shape the project direction.
