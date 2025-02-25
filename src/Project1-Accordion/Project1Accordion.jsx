import { useState } from "react";

export const Accordion = () => {
  const dataArr = [
    {
      id: 1,
      question: "What is the capital of France?",
      answer: "Paris",
    },
    {
      id: 2,
      question: 'Who wrote the play "Romeo and Juliet"?',
      answer: "William Shakespeare",
    },
    {
      id: 3,
      question: "What is the largest planet in our solar system?",
      answer: "Jupiter",
    },
    {
      id: 4,
      question:
        "In the context of web development, what is the primary difference between local storage and session storage in JavaScript, and how does it impact data persistence across browser sessions?",
      answer:
        "Local storage persists data even after the browser is closed, while session storage clears data once the session ends (i.e., when the tab or browser is closed). This impacts how temporary or long-term data is stored in web applications.",
    },
  ];
  const [openItems, setOpenItems] = useState([]);
  const [multipleSelection, setMultipleSelection] = useState(false);

  const toggleItem = (id) => {
    if (multipleSelection) {
      openItems.includes(id)
        ? setOpenItems(openItems => openItems.filter((item) => item !== id))
        : setOpenItems(openItems => [...openItems, id]);
    } else {
      openItems.includes(id) ? setOpenItems([]) : setOpenItems([id]);
    }
  };

  const toggleSelectionMode = () => {
    setMultipleSelection(!multipleSelection);
    setOpenItems([]);
  };

  return (
    <div>
      <h1 className="text-2xl">Project1 - Accordion</h1>
      <button
        className={`p-2 border-1 rounded-2xl my-4 ${
          multipleSelection ? "bg-green-600 text-white" : "none"
        }`}
        onClick={toggleSelectionMode}
      >
        {multipleSelection ? "Multiple slection" : "Single selection"}{" "}
      </button>
      <ul>
        {dataArr.map((data) => (
          <li key={data.id}>
            <p
              onClick={() => toggleItem(data.id)}
              className="w-150 p-2 bg-red-800 text-white mx-auto my-2"
            >
              {data.question}
            </p>
            {openItems.includes(data.id) && (
              <p className="w-200 p-2 m-auto">{data.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
