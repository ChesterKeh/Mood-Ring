import React, { useState, useEffect } from "react";
import { Modal } from "react-overlays";
import SearchBar from "../LinkedUsers/SearchBar"; // Import the SearchBar component
import { getUser, getPublicUsers, addFriend, removeFriend } from "../../utilities/user-service";

export default function LinkedUserModal({ showEditModal, setShowEditModal, user, setUser }) {
    const [userList, setUserList] = useState([]);
    
    const renderBackdrop = (props) => <div className="backdrop" {...props} />;

    useEffect(() => {
        getUserList();
    }, [setShowEditModal, user]);

  const getUserList = async () => {
    try {
      const response = await getPublicUsers();
      setUserList(response);
    } catch (error) {
      console.log(error);
    }
  };

  const hideModal = () => {
    setShowEditModal(false);
  };

  const handleAddFriend = async (event) => {
    try {
        const friendUserId = event.target.name;
        const userObj = {  "userId": user._id, "friendId": friendUserId};
        const res = await addFriend(userObj);
        setUser(res);
    } catch (error) {
      console.error("Error adding friend:", error);
    }
  };

  const handleSearch = (searchTerm) => {
    const matchingUsers = publicUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchedUsers(matchingUsers);
  };

  return (
    <Modal className="modal" show={showEditModal} onHide={hideModal} renderBackdrop={renderBackdrop}>
      <div>
        <SearchBar onSearch={handleSearch} />
        <div>
          <label>Public Users:</label>
          <ul>
            {userList?.map((pubUser) => (
                <li key={pubUser._id}>
                    <label>Name: {pubUser.name}</label>
                    <button name={pubUser._id} onClick={handleAddFriend}>Add</button>
                </li>
            ))}
          </ul>
        </div>
        <button onClick={hideModal}>Close</button>
      </div>
    </Modal>
  );
}
