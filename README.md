# Project Intro
AcademyAtlas -
Beyond Limits, Beyond Learning.

The genesis of AcademyAtlas was driven by the struggles of my badminton coach and my art-teaching friend, both of whom faced challenges in managing their classes and finances.

The name of my project is inspired by Atlas, one of the most formidable ancient gods known for his strength and wisdom. 

AcademyAtlas aims to be a powerful ally for educators. 




## Overview
A web application designed to facilitate course planning, scheduling, student information recording, and invoicing for small to midsize educational institutions or self-employed teachers. 

It aims to streamline administrative tasks, enhance communication between teachers and students, and manage financial transactions efficiently.




## Brief Description:
AcademyAtlas is a comprehensive web application tailored for small to midsize educational institutions and self-employed educators. 

It is crafted to simplify and enhance the management of course planning, scheduling, student information, and financial transactions. 

The platform supports distinct accounts for teachers and students, enabling teachers to efficiently create student profiles, record and track progress, manage tuition fees, and schedule classes with ease. Students, on the other hand, gain access to their schedules, can book lessons, and review course histories, including payments and feedback.

Designed with a focus on streamlining administrative tasks and fostering better communication between educators and students, MyTeachMate also offers customization features allowing users to personalize the web interface to reflect their branding. 

With a robust tech stack including JavaScript, React/NEXT, postgreSQL, DataGrip and NodeJS/Express, the application promises a seamless user experience for all educational administration needs. 

AcademyAtlas aims to be an indispensable tool in the educational sector, making teaching and learning processes more efficient and interconnected.




## How to Use AcademyAtlas
- Register: 
From the home page, click "Start". Once registered, you will be automatically logged in. You will see your avatar and username in the top-right corner on pages other than the home page, along with a logout button. You can log out at any time.

- Login: 
Click the login button on the home page, or use the login option available in the navigation bar on other pages.

- Manage Classes: 
Once logged in, you can add or delete classes on the calendar page.

- Students and Tuition: 
The student and tuition page displays all student and payment information. This feature is currently under development.

- About and Contact Pages: 
These will display information about teachers and courses, or some photos. They are also under development.

- View Compatibility: 
Currently, the platform only supports tablet and desktop views. Mobile view is still under development.




### Features
The platform needs to support two types of accounts: teachers and students.

All Users
- schedule and delete classes through a calendar interface
- register and login 

Teachers (nice to have)
- view all student courses in calendar page
- manage tuition fees received, generate and download invoices
- set individual lesson prices to reflect in student balances
- record and access student information in student page
- track course progress and provide feedback
- maintain a notes section for important reminders.

Students (nice to have)
- only access own schedules
- book lessons during available times
- receive lesson feedback
- be reminded of low balance for tuition fees
- review their course history including dates, teacher comments, and payment information.

(nice to have)
Additionally, the web application should allow users to customize the web title and background images according to their preferences.




### User Profile
Targeted at small to midsize educational organizations and self-employed educators seeking an integrated solution for managing educational and administrative tasks.




### Tech Stack
- JS
- React/Next
- knex
- NodeJS/Express
- react calendar
- postgreSQL
- DataGrip
- Postman
- (supabase prisma) 
- to be continue




### Sitemap
- Login page.
- Calendar page.
- Student
- Tuition
- About
- Contact




### Mockups
see asset folder




### Data
three postgreSQL tables (knex):
- users
- events
- payments




### Frontend Endpoints
Registar page:
- http://localhost:3000/registar

Login page:
- http://localhost:3000/login

Canlender page:
- http://localhost:3000/canlendar

Students page:
- http://localhost:3000/students

TBC: Each student page:
- http://localhost:3000/students/:id




### Backend Endpoints
- http://localhost:8000/users
- http://localhost:8000/events
- http://localhost:8000/events/:event_id




### Auth
Authentication will be implemented using secure login mechanisms.
(nice to have)Teachers will have administrative access with the ability to manage student accounts and data. 
(nice to have)Students will have limited access to their personal information, schedules, and payment history.




## Extra Nice-to-haves
1. Customization:
    - Ability to edit web title and background images.

2. Have educator users group, which does not have the access to accounting function and create student account function

3. could record expenses for tax purpose

4. about section to display photos, introduction and achievements

5. contact section for address and contacting info

6. mutiply varification, using Nodemailer to send email to registered users





# Color Set
#61A3BA
#FFFFDD
#D2DE32
#A2C579
#7ab429 main AA green


