import { useEffect, useState } from "react";

export default function Journal() {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    fetch("/api/journal")
      .then((res) => res.json())
      .then((data) => setJournals(data.journals || []));
  }, []);

  console.log(journals);

  if (journals.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {journals.map((entry) => (
        <div key={entry._id}>
          <h1>{entry.title}</h1>
          <p>
            <i>{entry.mood}</i>
          </p>
          <p>{entry.body}</p>
          <hr />
        </div>
      ))}
    </>
  );
}
