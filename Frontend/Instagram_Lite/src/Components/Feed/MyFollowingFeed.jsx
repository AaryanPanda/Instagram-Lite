import React, { useState, useEffect } from "react";
import FeedCard from "./FeedCard/FeedCard.jsx";

const MyFollowingFeed = ({ newPost, updateNewPost }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [feeds, setFeeds] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const response = await fetch(`${API_URL}/api/posts/following-posts`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Networt Response is not Ok");
        }
        const data = await response.json();
        console.log(data);
        setFeeds(data);
      } catch (error) {
        console.log(error);
      } finally {
        setDataFetched(true);
      }
    };
    const fetchUserId = () => {
      const userId = localStorage.getItem("id");
      setCurrentUserId(parseInt(userId));
    };
    fetchFeeds();
    fetchUserId();
  }, [newPost]);

  const likePost = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/posts/like`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ postId: id }),
      });
      const result = await response.json();
      console.log(result);
      updateNewPost();
    } catch (err) {
      console.log(err);
    }
  };

  const unlikePost = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/posts/unlike`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        body: JSON.stringify({ postId: id }),
      });
      const result = await response.json();
      console.log(result);
      updateNewPost();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full min-h-screen lg:py-7 sm:py-3 flex flex-col lg:flex-row items-start gap-x-20 mt-5 pt-5 mb-5">
      {/* Conditionally render modal inside the div */}
      {dataFetched && feeds.length === 0 && (
        <div className="w-full flex items-center justify-center mt-20">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
            <p className="text-gray-700 font-medium">
              Follow any user to check out your following posts and stay updated
              with them.
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      )}

      {/* Feed content (only if feeds exist) */}
      {feeds.length > 0 && (
        <div className="w-full lg:w-[70%] h-auto relative">
          <div className="w-full h-auto flex items-center justify-center mt-6 mb-6">
            <div className="w-full lg:w-[73%] md:w-[73%] sm:w-[80%]">
              {feeds.map((feed) => (
                <FeedCard
                  key={feed.id}
                  updateNewPost={updateNewPost}
                  feed={feed}
                  setFeeds={setFeeds}
                  onLike={likePost}
                  onUnlike={unlikePost}
                  currentUserId={currentUserId}
                />
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="w-full lg:w-[25%] h-auto lg:block hidden"></div>
    </div>
  );
};

export default MyFollowingFeed;
