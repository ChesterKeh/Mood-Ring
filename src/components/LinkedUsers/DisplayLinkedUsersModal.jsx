import React, { useState } from "react";
import LinkedUsersModal from "./LinkedUsersModal";

export default function DisplayLinkedUserModal() {
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowEditModal = () => {
    setShowEditModal(true);
  };

  const handleHideEditModal = () => {
    setShowEditModal(false);
  };

  return (
    <main>
      <h1>friends </h1>

      <button onClick={handleShowEditModal}>Add Friends</button>
      <LinkedUsersModal
        showEditfriendList={showEditModal}
        setShowEditfriendList={handleHideEditModal}
      />
    </main>
  );
}
