// import * as React from 'react';
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { fetchAllPosts } from "../API";
import { fetchUsers} from "../API";
import { styled, alpha } from '@mui/material/styles';
import Card from '@mui/material/Card';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


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
        {/* <label className="searchbar">
        <input
          type="text"
          placeholder="Search by book title or author"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </label> */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchParam}
            onChange={(e) => setSearchParam(e.target.value.toLowerCase())}
          />
        </Search>
        {searchParam && (
        <div>
          {searchResults.map((result) => (
            
            <Card sx={{ maxWidth: 345 }} to={`/posts/${result.post_id}`} key={result.post_id}>
                <div>
              <h3>{result.book_title}</h3>
              <img src={result.book_image} alt={result.book_title} />
               <p>{result.book_author}</p>
               <p>{result.book_summary}</p>
               </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}