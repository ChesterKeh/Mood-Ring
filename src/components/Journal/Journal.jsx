import { useEffect, useState } from "react";
import JournalItem from "./JournalItem";

export default function Journal({ user, journals, loadJournals }) {
  // const [journals, setJournals] = useState([]);

  // useEffect(() => {
  //   fetch("/api/journal")
  //     .then((res) => res.json())
  //     .then((data) => setJournals(data.journals || []));
  // }, []);

  // console.log(journals);

  // if (journals.length === 0) {
  //   return <p>Loading</p>;
  // }

  return (
    <>
      <h2>journals</h2>
      {journals.map((entry) => (
        <JournalItem key={entry._id} item={entry} loadJournals={loadJournals} />
      ))}
    </>
  );
}
