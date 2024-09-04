import React, { useState } from "react";

const ProfileHeader = ({ username, postCount, user, updateNewPost }) => {
  
  const API_URL = import.meta.env.VITE_API_URL;
  const currentUserId = parseInt(localStorage.getItem("id"));
  const [isFollowing, setIsFollowing] = useState(
    user.followers.some((follower) => follower.id === currentUserId)
  );

  const handleUnFollow = async () => {
    try {
      const response = await fetch(`${API_URL}/api/users/unfollow/${user.id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log(data);
      setIsFollowing(false);
      updateNewPost();
    } catch (err) {
      console.log(err);
    }
  };

  const handleFollow = async () => {
    try {
      const response = await fetch(`${API_URL}/api/users/follow/${user.id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      console.log(data);
      setIsFollowing(true);
      updateNewPost();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex items-center p-4">
      <img
        src="https://via.placeholder.com/150"
        alt=""
        className="w-24 h-24 rounded-full"
      />
      <div className="ml-6">
        <div className="text-2xl font-semibold">{username}</div>
        <div className="flex flex-wrap mt-2">
          <span className="mr-4">
            <strong>{postCount}</strong> posts
          </span>
          <span className="mr-4">
            <strong>{user.followers.length}</strong> followers
          </span>
          <span className="mr-4">
            <strong>{user.following.length}</strong> following
          </span>
          {user.id !== currentUserId && (
            <button
              className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={isFollowing ? handleUnFollow : handleFollow}
            >
              {isFollowing ? "Unfollow" : "Follow"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
