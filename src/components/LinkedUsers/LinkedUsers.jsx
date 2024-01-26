import React, { useEffect,useState } from "react";
import LinkedUsersModal from "../Modal/LinkedUsersModal";
import { getUser, removeFriend } from "../../utilities/user-service";

export default function LinkedUsers({ user, setUser }) {
    const [showEditModal, setShowEditModal] = useState(false);
    const [friendList, setFriendList] = useState([]);
    
    useEffect(() => {
        getFriendList();
    }, [user]);

    const getFriendList = async () => {
        try{      
            const newList = [];
            for (const friendId of user.linked_user_id){
                const friendObj = { "_id": friendId };
                const response = await getUser(friendObj);
                newList.push(response);
            }
            setFriendList(newList);
        } catch(error){
            console.log(error);
        }
    }

    const handleShowEditModal = () => {
        setShowEditModal(true);
    };

    const handleRemoveFriend = async (event) => {
        try {
            console.log("FIRE REMOVE FRIEND");
            const friendUserId = event.target.name;
            console.log(friendUserId);
            const userObj = { "userId": user._id, "friendId": friendUserId };
            const res = await removeFriend(userObj);
            console.log("RES", res);
            setUser(res);
        } catch (error) {
            console.error("Error removing friend:", error);
        }
    };
  
    return (
        <div>
            <div>
                <label>Friends:</label>
                <ul>
                    {friendList?.map((friend) => (
                        <li key={friend._id}>
                            <label>Name: {friend.name}</label> 
                            <button name={friend._id} onClick={handleRemoveFriend}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={handleShowEditModal}>Add Friends</button>
            <LinkedUsersModal showEditModal={showEditModal} setShowEditModal={setShowEditModal} user={user} setUser={setUser}/>
        </div>
    );
}
