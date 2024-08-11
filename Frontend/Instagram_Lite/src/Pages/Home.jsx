import React from "react";
import Feed from "../Components/Feed/Feed";
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <>
      <Link to={`/signup`} className="text-blue-500 hover:underline">
        Sign Up
      </Link>
      <Feed></Feed>
    </>
  );
}
