import * as eventAPI from "./event-api";

export async function createEvent(eventData) {
  const response = await eventAPI.createEvent(eventData);
  return response;
}
