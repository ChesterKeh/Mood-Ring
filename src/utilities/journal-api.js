const BASE_URL = "/api/journal";

export async function getJournalsByDate(date, userid){
    const res = await fetch(BASE_URL + "/date/" + Date.parse(date) + "/userid/" + userid,{
        headers:{"Content-Type": "application/json" }
    });
    if (res.ok) {
        return res.json();
    } else {
        return res;
    }
}

export async function createJournal(journalData) {
  const res = await fetch(BASE_URL + "/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(journalData),
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
    // throw new Error("Create Event Error");
  }
}

export async function updateJournal(journalData) {
  const res = await fetch(BASE_URL + "/update", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(journalData),
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
  }
}

export async function deleteJournal(journalData) {
  const res = await fetch(BASE_URL + "/delete", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(journalData),
  });
  if (res.ok) {
    return res.json();
  } else {
    return res;
  }
}
