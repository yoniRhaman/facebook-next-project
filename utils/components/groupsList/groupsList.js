"use client";

import { FaPlus } from "react-icons/fa";
import "./groupsList.css";
import Searchicon from "../../icons/searchicon";
import { useEffect, useState } from "react"; // Import useState
import CreateGroup from "../createGroup/createGroup";
import { useGroupContext } from "@/utils/contexts/groupContext";

export default function GroupsList({ groupFromServer }) {
  // State to manage the visibility of the CreateGroup modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Extract listGroup and setlistGroup from GroupContext
  const { listGroup, setlistGroup } = useGroupContext();

  // Effect to set the list of groups from server data
  useEffect(() => {
    setlistGroup(groupFromServer);
  }, [groupFromServer, setlistGroup]);

  // Handle the click event to open the CreateGroup modal
  const handleCreateGroupClick = () => {
    setIsModalOpen(true);
  };

  // Handle the event to close the CreateGroup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="groups-body">
      <div className="background"></div>
      <div className="Groups-container column">
        <div className="search-top-container column gap-20">
          <div className="top-container">
            <h1>Groups</h1>
          </div>
          <div className="search-input1 row center">
            <Searchicon />
            <input
              type="text"
              name="search"
              placeholder="Search groups"
            />
          </div>
        </div>
        <button
          className="button-create"
          role="button"
          onClick={handleCreateGroupClick}
        >
          <FaPlus /> Create New Group
        </button>
        <div className="Groups-p center">
          <p>Groups you manage</p>
        </div>
        <div className="manage-bottom-container">
          {listGroup.map((group) => (
            <button className="btn-Groups" key={group._id}>
              <img
                className="grup-img"
                src={
                  group.images ??
                  "https://www.gag-lachayot.co.il/wp-content/uploads/2022/07/articles-14-2.jpg"
                }
                alt="Group Picture"
              />
              <p>{group.name}</p>
            </button>
          ))}
        </div>

        {/* Conditionally render CreateGroup modal */}
        {isModalOpen && <CreateGroup onClose={closeModal} />}
      </div>
    </div>
  );
}
