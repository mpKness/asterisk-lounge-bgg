import "./App.css";
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserCard from "./components/user-card";
import { fetchUserByName } from "./thunk/fetch-user-by-name";
import { getCollection } from "./services/bgg-collection";
import { fetchCollectionByUsername } from "./thunk/fetch-collection-by-username";
import BoardgameGrid from "./components/boardgame-grid";
import UserGrid from "./components/user-grid";

function App() {
  const [usernames, setUsernames] = useState('');
  const dispatch = useDispatch();
  const getUser = async () => {
    getCollection(usernames);
    dispatch(fetchUserByName(usernames));
    dispatch(fetchCollectionByUsername(usernames));
  };

  return (
    <div className="App">
      <Box sx={{
        display: "flex",
        flexDirection: "column",
      }}>
        <TextField label="usernames" onChange={(event) => setUsernames(event.target.value)}/>
        <Button onClick={getUser}> Get Users </Button>
      </Box>
      <UserGrid />
      <BoardgameGrid />
    </div>
  );
}

export default App;
