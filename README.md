# School Management Mini Project – Reno Platforms

This project is a mini web application built with **Next.js** that allows users to add schools and view them in a responsive, modern UI.  
It includes a homepage, an add school form, and a show schools page with animations. The project uses **Neon PostgreSQL** for the database and is deployed on **Vercel**.

---

## Features

### Homepage
- Modern and responsive design with smooth navigation  
- Attractive animations and transitions for a better user experience  

### Add Schools Form
- Built using **Next.js** with **React Hook Form**  
- Input validation (email format, required fields, etc.)  
- Image upload support for schools  
- Data stored in **Neon PostgreSQL** database  
- Fully responsive on desktop and mobile  

### Show Schools Page
- Card-based layout similar to ecommerce product listings  
- Displays school **name, address, city, and image**  
- Includes hover effects and animations  
- Responsive design for all screen sizes  

---

## Tech Stack

- **Framework:** Next.js (React-based)  
- **Form Handling:** React Hook Form  
- **Database:** Neon (cloud-hosted PostgreSQL)  
- **Deployment:** Vercel  
- **Styling & Animations:** CSS, Next.js transitions  

---

## Deployment

The project is hosted on **Vercel** for seamless CI/CD and fast performance.  
Database is managed on **Neon** for reliable and scalable storage.  

---

## How to Run Locally

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/school-management-project.git
   cd school-management-project
Install dependencies:

bash
Copy code
npm install
Add your Neon DB credentials in .env.local:

env
Copy code
DATABASE_URL=your_neon_connection_string
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:3000 in your browser.

