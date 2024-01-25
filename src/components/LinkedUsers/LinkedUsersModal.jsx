import React, { useState, useEffect } from "react";
import { Modal } from "react-overlays";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import {
  getpublicusers,
  addfriend,
  removefriend,
} from "../../utilities/user-service";

export default function LinkedUserModal({
  showEditfriendList,
  setShowEditfriendList,
  prevfriendList,
}) {
  const [publicUsers, setPublicUsers] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const [searchedUsers, setSearchedUsers] = useState([]); // New state for searched users

  useEffect(() => {
    if (showEditfriendList) {
      fetchPublicUsers();
    }
  }, [showEditfriendList]);

  const fetchPublicUsers = async () => {
    try {
      const response = await getpublicusers();
      setPublicUsers(response);
    } catch (error) {
      console.log(error);
    }
  };

  const hideModal = () => {
    setShowEditfriendList(false);
  };

  const handleAddFriend = async (userId) => {
    try {
      console.log("Adding friend with userId:", userId);

      // Step 1: Call the addfriend API
      const user = await addfriend({ userId });
      console.log(user);
      console.log("Friend added successfully.");

      const prevFriends = [];
      console.log(prevFriends);
      // Step 4: Update the friendList state
      setFriendList((prevFriends) => [...prevFriends, addedFriend]);
      console.log("Updated friendList:", [...prevFriends, addedFriend]);

      // Step 5: Remove the friend from the publicUsers array
      setPublicUsers((prevPublicUsers) =>
        prevPublicUsers
          .filter((user) => user._id !== userId)
          .map((user) => user._id)
      );

      console.log("Updated publicUsers:", publicUsers);
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  };

  const handleRemoveFriend = async (userId) => {
    try {
      console.log("Removing friend with userId:", userId);

      // Step 1: Call the removefriend API
      await removefriend({ userId });
      console.log("Friend removed successfully.");

      // Step 2: Fetch the updated list of public users
      fetchPublicUsers();
      console.log("Fetching updated public users list.");

      // Step 3: Update the friendList state
      setFriendList((prevFriends) =>
        prevFriends.filter((friend) => friend._id !== userId)
      );
      console.log("Updated friendList:", friendList);

      // Step 4: Remove the friend from the publicUsers array and get only user IDs
      setPublicUsers((prevPublicUsers) =>
        prevPublicUsers
          .filter((user) => user._id !== userId)
          .map((user) => user._id)
      );
      console.log("Updated publicUsers:", publicUsers);
    } catch (error) {
      console.error("Error removing friend:", error);
    }
  };
  const handleSearch = (searchTerm) => {
    const matchingUsers = publicUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedUsers(matchingUsers);
  };

  return (
    <Modal
      className="modal"
      show={showEditfriendList}
      onHide={hideModal}
    >
      <div>
        <SearchBar onSearch={handleSearch} />
        <div>
          <label>Public Users:</label>
          <ul>
            {searchedUsers.length > 0
              ? searchedUsers.map((user) => (
                  <li key={user._id}>
                    {user.name}
                    <button onClick={() => handleAddFriend(user._id)}>
                      Add Friend
                    </button>
                  </li>
                ))
              : publicUsers.map((user) => (
                  <li key={user._id}>
                    {user.name}
                    <button onClick={() => handleAddFriend(user._id)}>
                      Add Friend
                    </button>
                  </li>
                ))}
          </ul>
        </div>
        <div>
          <label>Friends:</label>
          <ul>
            {friendList.map((friend) => (
              <li key={friend._id}>
                {friend.name}
                <button onClick={() => handleRemoveFriend(friend._id)}>
                  Remove Friend
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}
