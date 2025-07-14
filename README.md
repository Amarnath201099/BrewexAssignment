# Brewex Landing Page

This is the landing page for **Brewex**, a business-focused platform offering solutions for Revenue Management, Marketing, and Commercial Functions. The page is designed to be responsive, editable, and visually engaging, with an interactive timeline and editable headings.

## 🌐 Live Demo

Explore the live version of the Brewex landing page here:  
👉 [View Live Site](https://brewex-assignment-one.vercel.app/)

This live demo showcases the responsive layout, editable headline functionality, and the interactive timeline section.

---

## 📁 Project Structure

```bash
src/
├── assets/                # Static images and design elements
│   ├── asset-design.png
│   └── bg-shape-1.svg
│
├── components/            # Reusable components
│   ├── NavBar/            # Navigation bar component
│   │   └── index.js
│   ├── Timeline/          # Horizontal timeline component
│   │   └── index.js
│
├── pages/
│   └── LandingPage/       # Main landing page
│       ├── index.js
│       └── index.css
```

---

## 🚀 Features

### ✅ Editable Headline

- Edit the main headline using a popup editor.
- Use `***your text***` to highlight parts of the heading in yellow.

### ✅ Responsive Design

- Optimized for desktop and mobile devices using media queries.

### ✅ Interactive Timeline

- A horizontal timeline showing different stages of the Brewex solution.
- Icons and descriptions for each step.
- Highlighting of completed steps.

### ✅ Visual Assets

- Integrated design assets (SVGs, PNGs) to create a polished look and feel.

---

## 🛠️ Technologies Used

- **React** – UI framework
- **React Icons** – For scalable vector icons
- **CSS Modules** – Component-specific styling
- **Responsive Web Design** – Media queries for mobile support

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository

````bash
git clone https://github.com/Amarnath201099/BrewexAssignment.git
cd BrewexAssignment```
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the App

```bash
npm start
```

The app will start in development mode at http://localhost:3000.

## 🔧 Feature Improvements (Planned / Suggested)

### 🗄️ Backend Integration for Editable Heading

- Connect the heading editor to a backend API using Node.js, Express, or similar.
- Store and retrieve the editable heading from a **database** (MongoDB, PostgreSQL, etc.).
- Add functionality to:
  - **Fetch heading** on page load.
  - **Save edited heading** to the database.
  - **Handle errors** and fallback if the backend is unreachable.
- Secure the edit functionality via authentication for admin-only access (optional).

### 📊 Admin Dashboard (Future Scope)

- Admin UI for managing multiple headings and content blocks.
- View edit history or logs of changes.
- Option to reset to default content.

---

## 🙏 Thanks

Thank you for reviewing this project!

This landing page was built as part of the **Brewex assignment** to demonstrate frontend skills, component reuse, styling, and future-ready architecture.

Feel free to suggest improvements or contribute ideas!
