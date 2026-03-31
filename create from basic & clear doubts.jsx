1) Setup

npm create vite@latest my-app
cd my-app
npm install
npm run dev

👉 Difference:

Vite → fast, modern
create-react-app → slow, old setup

2) JSX
JSX is a very important React concept. 
👉 JSX = JavaScript XML
It allows you to write HTML inside JavaScript

// This looks like HTML, but it is actually JavaScript (JSX)
function App() {
  return <h1>Hello Vaishnavi</h1>;
}
{} → used to write JS inside HTML


// Without JSX ❌ (hard to read):
React.createElement("h1", null, "Hello Vaishnavi");


const name = "Vaishnavi" → store value
App() → React calls this function
return → UI is created
{name} → value inserted into UI

const name = "Vaishnavi";
function App() {
  return <h1>Hello {name}</h1>;
}
