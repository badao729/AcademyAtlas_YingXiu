# Project Title
MyTeachMate

EduManage Pro

PlanMyClass -

AcademyAtlas -


AcademyAtlas:
Plan, Pursue, Achieve.
Beyond Limits, Beyond Learning.


color
#61A3BA
#FFFFDD
#D2DE32
#A2C579
#7ab429 main AA green






## Overview

A web application designed to facilitate course planning, scheduling, student information recording, and invoicing for small to midsize educational institutions or self-employed teachers. 
It aims to streamline administrative tasks, enhance communication between teachers and students, and manage financial transactions efficiently.



### Problem

The platform needs to support two types of accounts: teachers and students.

Teachers 
- schedule classes through a calendar interface
- auth function (email verification)

(nice to have)
- view summaries of all student courses.
- manage tuition fees received, generate and download invoices
- set individual lesson prices to reflect in student balances
- record and access student information
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




### Features

Teacher Features:

1. Auth function (email verification)
2. Tracking and recording of student progress and feedback. (nice to have)
3. Scheduling system for lessons.
4. Financial management tools for tracking tuition payments and generating invoices.(nice to have)
5. Custom pricing per lesson for each student. (nice to have)
6. Summary views of student course participation.(nice to have)
7. Note-taking functionality for important reminders. (nice to have)

Student Features:

1. Access to personal schedules with the ability to book lessons.(nice to have)
2. Automatic email notifications for lesson booking awaiting teacher approval. (nice to have)
3. View lesson feedback. (nice to have)
4. Low balance alerts for tuition fees. (nice to have)
5. Access to historical course records, including teacher comments and payment information. (nice to have)

Customization:
- Ability to edit web title and background images. (nice to have)



## Implementation



### Tech Stack
- JS
- React/Next
- PostgreSQL
- prisma
- supabase
- react fullCalendar
- axios, lottie, moment, sass
- react-datetime, react-dom, react-modal
- to be continue




### Sitemap

- Login page.
- Calendar page.

For admin users: (nice to have)
    Dashboard page.Registration page 
    (for admin account setup and user background settings).
    Student setup page.
    Student summary page.
    Individual student profile pages.
    Income and expenses statement page.
    Invoice generating page.
    Notes page.

For students: (nice to have)
    Student profile page.
    Payment history and invoice download page.




### Mockups
see asset folder





### Data
three SQL tables (knex):
- user info
- timetable 
- payment 





### Endpoints

Login and registar page:
- http://localhost:3000/

Canlender page:
- http://localhost:3000/canlendar

students page:
- http://localhost:3000/students

each student page:
- http://localhost:3000/students/:id





### Auth

Authentication will be implemented using secure login mechanisms.
Teachers will have administrative access with the ability to manage student accounts and data. (nice to have)
Students will have limited access to their personal information, schedules, and payment history.





## Roadmap
week 1 (3.18-23): 
1. 3.18-19: test react libaray (calendar, date picking and etc.)
2. 3.20: design database tables
3. 3.20: study NEXT and SQL tutorial
4. 3.23: complete login and register pages for both fontend and backend

week 2 (3.24-28)
1. complete calendar page
    - study inStock delete page 
2. testing

week2 (3.29-31)
1. working on nice to have feature 







## Nice-to-haves

1. Customization:
    - Ability to edit web title and background images.

2. Have educator users group, which does not have the access to accounting function and create student account function

3. could record expenses for tax purpose

4. about section to display photos, introduction and achievements

5. contact section for address and contacting info







## Brief Description:

MyTeachMate is a comprehensive web application tailored for small to midsize educational institutions and self-employed educators. 

It is crafted to simplify and enhance the management of course planning, scheduling, student information, and financial transactions. 

The platform supports distinct accounts for teachers and students, enabling teachers to efficiently create student profiles, record and track progress, manage tuition fees, and schedule classes with ease. Students, on the other hand, gain access to their schedules, can book lessons, and review course histories, including payments and feedback.

Designed with a focus on streamlining administrative tasks and fostering better communication between educators and students, MyTeachMate also offers customization features allowing users to personalize the web interface to reflect their branding. 

With a robust tech stack including JavaScript, React, MySQL, and NodeJS/Express, the application promises a seamless user experience for all educational administration needs. 

MyTeachMate aims to be an indispensable tool in the educational sector, making teaching and learning processes more efficient and interconnected.




- in the future
mutiply varification 