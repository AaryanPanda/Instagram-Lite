import React, { useState, useEffect } from "react";
import FeedCard from "./FeedCard/FeedCard.jsx";

const Feed = ({ newPost, updateNewPost }) => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [feeds, setFeeds] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);  

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        setIsLoading(true); 
        const response = await fetch(
          `${API_URL}/api/posts/getAll?page=${page}&limit=3`
        );
        if (!response.ok) {
          throw new Error("Network response is not OK");
        }
        const data = await response.json();

        // Append new posts only if they are not already in the feed
        setFeeds((prevFeeds) => {
          const newPosts = data.posts.filter(
            (post) => !prevFeeds.some((existingPost) => existingPost.id === post.id)
          );
          return [...prevFeeds, ...newPosts];
        });

        setIsLoading(false); 
      } catch (error) {
        console.log(error);
        setIsLoading(false); 
      }
    };

    const fetchUserId = () => {
      const userId = localStorage.getItem("id");
      setCurrentUserId(parseInt(userId));
    };

    fetchFeeds();
    fetchUserId();
  }, [newPost, page]); 

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

  // Handle scrolling to load more posts
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 1 
    ) {
      if (!isLoading) {
        // Only fetch if not already loading
        setPage((prevPage) => prevPage + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Properly remove event listener
  }, [isLoading]);

  return (
    <div className="w-full min-h-screen lg:py-7 sm:py-3 flex flex-col lg:flex-row items-start gap-x-20 mt-5 pt-5 mb-5">
      <div className="w-full lg:w-[70%] h-auto relative">
        <div className="w-full h-auto flex items-center justify-center mt-6 mb-6">
          <div className="w-full lg:w-[73%] md:w-[73%] sm:w-[80%]">
            {feeds &&
              feeds.map((feed) => (
                <FeedCard
                  key={feed.id} // Use post.id directly as the unique key
                  updateNewPost={updateNewPost}
                  feed={feed}
                  onLike={likePost}
                  onUnlike={unlikePost}
                  currentUserId={currentUserId}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[25%] h-auto lg:block hidden"></div>
    </div>
  );
};

export default Feed;
