import "./App.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserCard from "./components/userCard";
import { fetchUserByName } from "./thunk/fetchUserByName";
import { getCollection } from "./services/bggCollection";
import { fetchCollectionByUsername } from "./thunk/fetchCollectionByUsername";
import BoardgameCard from "./components/boardgameCard";
import { selectCollectionByUsername } from "./store/slices/collection";

function App() {
  const [usernames, setUsernames] = useState('');
  const dispatch = useDispatch();
  const collection = useSelector((state) => selectCollectionByUsername(state, usernames));
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
      <UserCard />
      <Box sx={{display: "grid", gridTemplateColumns: "repeat(5, 20%)"}}>
        {
          collection.map(boardgame => <BoardgameCard key={boardgame} id={boardgame} />)
        }
      </Box>
    </div>
  );
}

export default App;
