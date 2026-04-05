npx create-react-app my-app
cd my-app
npm start

npm create vite@latest
cd my-react-app
npm install
npm run dev

// 👉 create-react-app = old, slow setup
// 👉 Uses Create React App (CRA)


// 👉 vite = modern, fast setup
// 👉 Uses Vite (modern tool)

// 👉 Use Vite always

// create-react-app = a tool that creates a ready React project
// my-app = your project name

// npx runs the package without installing it permanently
// Saves memory + always uses latest version

// It automatically creates:

// Folder structure 📁
// React setup ⚙️
// Dependencies (React, Babel, Webpack)

// Node Package eXecute
// npx = run a Node.js package directly without installing it

// npm → installs packages
// npx → executes packages

// create and run a React app, you need:

// npm / npx (comes with Node.js)
// Development server
// Build tools (Webpack, Vite, etc.)

// All of these come from Node.js


vite
----

// UI automatically updates everywhere
// Displays current name
// Create a variable (name) and a function (setName) to store and update data
// const [name, setName] = useState("Vaishnavi");
// name → current value
// setName → function to change value
// "Vaishnavi" → initial value


import { useState } from "react"; 
// import → Used to bring something from another file/library
// useState → A React Hook used to store and update data in a component
// from "react" → It is imported from the React library

  
import { useState } from "react";

function App() {
  // one const state
  const [name, setName] = useState("Vaishnavi");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, {name} 👋</h1>
      <p>Welcome {name} to React learning</p>
      <p>Your name length is: {name.length}</p>

      {/* change name */}
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
          // onChange listens to input changes, e is the event object, e.target.value gets the current input value, 
          // and setName updtes the state.
          
          // Input box = notebook
          // onChange = teacher watching you write
          // e.target.value = what you wrote
          // setName = teacher saving it in records
    </div>
  );
}

export default App;

// 2) ----- with click change name
import { useState } from "react";

function App() {
  const [name, setName] = useState("Vaishnavi");

  const changeName = () => {
    setName("Reddy");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello, {name} 👋</h1>

      <button onClick={changeName}>
        Change Name
      </button>
    </div>
  );
}

export default App;

// 3) --- adding index 
// names.map((name, index) => ...)

import { useState } from "react";

function App() {
  const [names, setNames] = useState(["Vaishnavi", "Reddy", "Tadesena"]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Name List</h1>

      {names.map((name, index) => (
        <h3 key={index}>
          {index} - {name}
        </h3>
      ))}
    </div>
  );
}

export default App;


// 4) about Import & Router
// import Home from "./Home";

// 👉 Bring component from another file
{/* <Route path="/about" element={<About />} />

👉 If URL = /about → show About page */}
{/* <Link to="/about">About</Link>

👉 Navigate without reload */}

// 👉 Click link → URL changes → React shows that page
🎯 Output
/ → Home Page
/about → About Page


📁 Folder Structure
src/
 ├── App.jsx
 ├── Home.jsx
 └── About.jsx

// Create Pages
function Home() {
  return <h1>Home Page</h1>;
}

export default Home;
------
function About() {
  return <h1>About Page</h1>;
}

export default About
------
function About() {
  return <h1>About Page</h1>;
}

export default About;
------ App.jsx

  
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
//  BrowserRouter enables routing, Routes groups all routes, Route defines individual paths,
//  and Link is used for navigation without page reload.
// BrowserRouter = Road system
// Routes = Map
// Route = Specific road
// Link = Vehicle to move

import Home from "./Home";
import About from "./About";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about"> About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


// 5) --- nav(navigation)
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages
function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      
      {/* NAVBAR */}
      <nav style={{ background: "#eee", padding: "10px" }}>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/about" style={{ margin: "10px" }}>About</Link>
        <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
  
