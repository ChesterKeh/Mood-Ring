import * as eventAPI from "./event-api";

export async function getEventsByDate(date){
  const response = await eventAPI.getEventsByDate(date);
  return response;
}

export async function createEvent(eventData){
  const response = await eventAPI.createEvent(eventData);
  return response;
}

export async function updateEvent(eventData){
  const response = await eventAPI.updateEvent(eventData);
  return response;
}

export async function deleteEvent(eventData){
  const response = await eventAPI.deleteEvent(eventData);
  return response;
}