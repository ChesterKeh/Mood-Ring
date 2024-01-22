const BASE_URL = "/api/event";

export async function createEvent(eventData) {
    const res = await fetch(BASE_URL + "/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
    });
    if (res.ok) {
        return res.json();
    } else {
        return res;
        // throw new Error("Create Event Error");
    }
}
