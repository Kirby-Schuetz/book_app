// NOT SURE IF I NEED THIS. i did.

import * as React from 'react';
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, Route, Routes } from "react-router-dom";
import { fetchAllPosts } from "../API";
import { fetchUsers} from "../API";


export default function SearchBar() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [searchResults, setSearchResults] = useState([])



    // fetch posts and users
    useEffect(() => {
        fetchAllPosts().then((data) => setPosts(data));
        fetchUsers().then((data) => setUsers(data));
    }, []);
  
    const search = () => {
    // Filter posts by book title and author
    const bookResults = posts.filter(
      (post) =>
        post.book_title.toLowerCase().includes(searchParam) ||
        post.book_author.toLowerCase().includes(searchParam)
    );

    setSearchResults([...bookResults]);
  };

  useEffect(() => {
    if (searchParam) {
        search();
      } else {
        setSearchResults([]); // Clear the results when the search bar is empty
      }
    }, [searchParam, posts]);

    return (
    <div>
        <label>
        Search:{" "}
        <input
          type="text"
          placeholder="Search by book title or author"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label>
        {searchParam && (
        <div>
          {searchResults.map((result) => (
            <div key={result.id}>
              {result.book_title && (
                <Link to={`/posts/${result.id}`}>{result.book_title}</Link>
              )}
              {result.book_author && (
                <Link to={`/posts/${result.id}`}>{result.book_author}</Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}