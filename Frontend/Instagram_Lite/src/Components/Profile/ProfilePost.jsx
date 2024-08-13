import React from 'react';

const ProfilePosts = ({ posts }) => {
 
  return (
    <div className="p-4 grid grid-cols-3 gap-1">
      {posts.map((item) => (
        <img
          key={item.id}
          src={item.src}
          alt={`Post ${item.id}`}
          className="w-full"
        />
      ))}
    </div>
  );
};

export default ProfilePosts;
