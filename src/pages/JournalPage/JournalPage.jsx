import { useEffect, useState } from "react";
import Journal from "../../components/Journal/Journal";
import CreateButton from "../../components/CreateButton/CreateButton";

export default function JournalPage() {
  return (
    <>
      <h3>journal page</h3>
      <Journal />
      <CreateButton />
    </>
  );
}
