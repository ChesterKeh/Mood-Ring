import * as journalAPI from "./journal-api";

export async function getJournalsByDate(date) {
  const response = await journalAPI.getJournalsByDate(date, user);
  return response;
}

export async function createJournal(journalData) {
  const response = await journalAPI.createJournal(journalData);
  return response;
}

export async function updateJournal(journalData) {
  const response = await journalAPI.updateJournal(journalData);
  return response;
}

export async function deleteJournal(journalData) {
  const response = await journalAPI.deleteJournal(journalData);
  return response;
}
