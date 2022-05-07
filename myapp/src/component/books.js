import { useState } from "react";
export default function Book() {
  const [book, setBooks] = useState("");

  const bookDB = {
    javascript: [
      { name: "Eloquent JavaScript", rating: "4/5" },
      { name: "You Don't Know JS", rating: "3.5/5" },
    ],

    fiction: [
      {
        name: "Shiva Trilogy",
        rating: "5/5",
      },
      {
        name: "Harry Potter and the Sorcerer's Stone",
        rating: "4.5/5",
      },
    ],
    business: [
      {
        name: "Never Split the Difference",
        rating: "3.5/5",
      },
      {
        name: "Loonshots",
        rating: "5/5",
      },
    ],
  };

  return (
    <>
      <p>checkout my fevorite books. Select a genre to get started</p>
      <div>
        <button onClick={setBooks}>javascript</button>
        <button onClick={setBooks}>fiction</button>
        <button onClick={setBooks}>business</button>
      </div>
    </>
  );
}
