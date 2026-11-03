# CampusFlow — Student ERP

A responsive browser-based student management project built with vanilla HTML, CSS and JavaScript. It runs on GitHub Pages without a build step.

## Main application
Open [CampusFlow](https://loverboylakshman7.github.io/student-mangement-system/).

- Overview dashboard with student, attendance and department metrics
- Student records: add, view, search, edit and delete
- Daily attendance register with bulk mark-present
- Monthly attendance reports and department summaries
- CSV export for student and attendance records
- JSON backup and restore from Settings
- Student profile dialog with attendance history
- Responsive layout, reduced-motion support and midnight-blue, starry-night and night-sakura theme

## Run locally
Open `index.html` in a modern browser, or use VS Code Live Server. No package installation or build process is required.

## Data, privacy and limitations
This is a front-end demonstration only. Student and attendance data are stored in the current browser's `localStorage`. Data is not synchronized between devices or users. Clearing browser storage can remove records; use Settings to download a JSON backup.

There is no backend, database, secure authentication, role-based access control or server-side authorization. Do not store real, confidential or sensitive student information. A production deployment requires a secured backend, database, authentication, authorization, audit logging, backups and privacy controls.

## Project structure
- `index.html` — main CampusFlow application and views
- `styles.css` — main application styles and forest palette
- `app.js` — student, attendance, reports, backup and restore logic
- `css/`, `js/` and older standalone HTML pages — retained legacy/demo files; the current supported app is root `index.html`

## GitHub Pages
For manual publishing, open Settings → Pages, choose Deploy from a branch, select `main` and `/ (root)`.

## License
MIT
