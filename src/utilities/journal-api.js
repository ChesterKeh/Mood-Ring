const BASE_URL = "/api/journal";

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
