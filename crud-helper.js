require("dotenv").config();
require("./config/database");

// Require the Mongoose models
const Event = require("./models/Event");
const Journal = require("./models/Journal");
const Task = require("./models/Task");
const User = require("./models/userModels");

const main = async () => {
  await Event.deleteMany({});
  await Journal.deleteMany({});
  await Task.deleteMany({});
  await User.deleteMany({});

  // Generate 6 random dates in January 2024
  const randomDates = Array.from({ length: 6 }, () => {
    const day = Math.floor(Math.random() * 31) + 1; // Random day between 1 and 31
    return new Date(2024, 0, day); // Month parameter should be 0 for January
  });

  // Create initial events and save them
  const initialEvents = await Event.create([
    {
      calendarday: randomDates[0],
      eventname: "Event 1",
      description: "Description 1",
    },
    {
      calendarday: randomDates[1],
      eventname: "Event 2",
      description: "Description 2",
    },
    {
      calendarday: randomDates[2],
      eventname: "Event 3",
      description: "Description 3",
    },
    {
      calendarday: randomDates[3],
      eventname: "Event 4",
      description: "Description 4",
    },
    {
      calendarday: randomDates[4],
      eventname: "Event 5",
      description: "Description 5",
    },
    {
      calendarday: randomDates[5],
      eventname: "Event 6",
      description: "Description 6",
    },
  ]);

  console.log("Initial Events:", initialEvents);

  const initialJournals = await Journal.create([
    { date: randomDates[0], title: "Journal 1", body: "Body 1", mood: "Happy" },
    { date: randomDates[1], title: "Journal 2", body: "Body 2", mood: "Sad" },
    {
      date: randomDates[2],
      title: "Journal 3",
      body: "Body 3",
      mood: "Neutral",
    },
    { date: randomDates[3], title: "Journal 4", body: "Body 4", mood: "Happy" },
    { date: randomDates[4], title: "Journal 5", body: "Body 5", mood: "Sad" },
    {
      date: randomDates[5],
      title: "Journal 6",
      body: "Body 6",
      mood: "Neutral",
    },
    // Add more journals if needed
  ]);
  console.log("Initial Journals:", initialJournals);

  const initialTasks = await Task.create([
    {
      title: "Task 1",
      subtask: [{ item: "Subtask 1.1" }, { item: "Subtask 1.2" }],
    },
    {
      title: "Task 2",
      subtask: [
        { item: "Subtask 2.1" },
        { item: "Subtask 2.2" },
        { item: "Subtask 2.3" },
      ],
    },
    {
      title: "Task 3",
      subtask: [{ item: "Subtask 3.1" }, { item: "Subtask 3.2" }],
    },
    {
      title: "Task 4",
      subtask: [
        { item: "Subtask 4.1" },
        { item: "Subtask 4.2" },
        { item: "Subtask 4.3" },
      ],
    },
    {
      title: "Task 5",
      subtask: [{ item: "Subtask 5.1" }, { item: "Subtask 5.2" }],
    },
    {
      title: "Task 6",
      subtask: [{ item: "Subtask 6.1" }, { item: "Subtask 6.2" }],
    },
  ]);
  console.log("Initial Tasks:", initialTasks);

  const initialUsers = await User.create([
    {
      name: "User 1",
      email: "user1@example.com",
      password: "password123",
      linked_user_id: [],
      isPublic: true,
    },
    {
      name: "User 2",
      email: "user2@example.com",
      password: "password456",
      linked_user_id: [],
      isPublic: false,
    },
    {
      name: "User 3",
      email: "user3@example.com",
      password: "password789",
      linked_user_id: [],
      isPublic: true,
    },
    {
      name: "User 4",
      email: "user4@example.com",
      password: "password012",
      linked_user_id: [],
      isPublic: false,
    },
    {
      name: "User 5",
      email: "user5@example.com",
      password: "password345",
      linked_user_id: [],
      isPublic: true,
    },
  ]);
  console.log("Initial Users:", initialUsers);
};

main();
