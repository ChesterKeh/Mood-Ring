const BASE_URL = "/api/event";

export async function getEventsByDate(date){
    const res = await fetch(BASE_URL + "/date/" + Date.parse(date), {
        headers:{"Content-Type": "application/json" }
    });
    if (res.ok) {
        return res.json();
    } else {
        return res;
    }
}

export async function createEvent(eventData){
    const res = await fetch(BASE_URL + "/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
    });
    if (res.ok) {
        return res.json();
    } else {
        return res;
    }
}

export async function updateEvent(eventData){
    const res = await fetch(BASE_URL + "/update", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
    });
    if (res.ok) {
        return res.json();
    } else {
        return res;
    }
}

export async function deleteEvent(eventData){
    const res = await fetch(BASE_URL + "/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(eventData),
    });
    if (res.ok) {
        return res.json();
    } else {
        return res;
    }
}
