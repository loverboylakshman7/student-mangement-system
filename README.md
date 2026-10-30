# CampusFlow — Student ERP

A responsive browser-based Student Management System built with vanilla HTML, CSS and JavaScript, with lightweight CSS 3D effects and motion.

## Features
- Dashboard with enrolment, attendance and department metrics
- Student create, read, update and delete
- Duplicate roll-number validation
- Daily attendance register and bulk mark-present
- Monthly attendance summary and department overview
- Export student and attendance records to CSV
- Responsive desktop and mobile layout
- 3D hover tilt on dashboard cards and panels (desktop pointer devices)
- Animated ambient background, page transitions, chart bars and interactive hover depth
- Respects the operating system reduced-motion accessibility preference
- Browser-local persistence using localStorage
- No build tools or package installation required

## Run locally
Open `index.html` in a modern browser, or use VS Code Live Server.

## GitHub Pages
Upload the files to the repository root, then open **Settings → Pages**. Choose **Deploy from a branch**, select `main` and `/ (root)`. The site will be published at `https://YOUR-USERNAME.github.io/REPOSITORY/`.

## Important limitation
This is a front-end demonstration. Data is stored in the current browser's localStorage; it is not shared between devices or users. Do not store real student personal information in this version. A production system needs a server-side API, managed database, authentication, role-based authorization, audit logs, backups and privacy controls.

## Project structure
- `index.html` — application structure
- `styles.css` — responsive interface
- `app.js` — student, attendance and report logic

## License
MIT
