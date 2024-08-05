import React from 'react';
import ProfileHeader from '../Components/Profile/ProfileHeader';
import ProfileBio from '../Components/Profile/ProfileBio';
import ProfilePosts from '../Components/Profile/ProfilePost';

const Profile = () => {
  return (
    <div className="max-w-4xl w-full lg:w-[70%] h-auto mx-auto mt-9 mb-9 pt-9">
      <ProfileHeader></ProfileHeader>
      <ProfileBio></ProfileBio>
      <ProfilePosts></ProfilePosts>
    </div>
  );
};

export default Profile;
