import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "What is React?",
    text: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components that update efficiently in response to data changes.",
  },
  {
    title: "How does React work?",
    text: "React uses a virtual DOM to efficiently update the actual DOM. When the state of a component changes, React first updates the virtual DOM, then compares it with the previous virtual DOM, and finally updates only the necessary parts of the actual DOM.",
  },
  {
    title: "What is JSX?",
    text: "JSX (JavaScript XML) is a syntax extension for JavaScript recommended by React. It allows you to write HTML-like code in your JavaScript files, making it easier to describe what the UI should look like.",
  },
  {
    title: "How can I pass data between components in React?",
    text: "In React, data can be passed between components using props. Props are properties that you can pass to child components from parent components to share data and state.",
  },
  {
    title: "What are React Hooks?",
    text: "React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 to allow functional components to have local state, side effects, and more, which were previously only available in class components.",
  },
  {
    title: "Can I use React with other libraries/frameworks?",
    text: "Yes, React can be used alongside other libraries and frameworks. For example, you can use React with Redux for state management, React Router for navigation, and various styling libraries for CSS-in-JS solutions.",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  );
}

function AccordionItem({ num, title, children, curOpen, onOpen }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
