import * as journalAPI from "./journal-api";

export async function createJournal(journalData) {
  const response = await journalAPI.createJournal(journalData);
  return response;
}