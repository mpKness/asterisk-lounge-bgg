import "./App.css";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { fetchUserByName } from "./thunk/fetch-user-by-name";
import { getCollection } from "./services/bgg-collection";
import { fetchCollectionByUsername } from "./thunk/fetch-collection-by-username";
import BoardgameGrid from "./components/boardgame-grid";
import UserGrid from "./components/user-grid";
import { selectAllOptions } from "./store/slices/options";
import OptionsPicker from "./components/options-picker";

function App() {
  const [usernames, setUsernames] = useState('');
  const dispatch = useDispatch();
  const options = useSelector(selectAllOptions);
  const getUser = async () => {
    getCollection(usernames, options);
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
      <OptionsPicker />
      <UserGrid />
      <BoardgameGrid />
    </div>
  );
}

export default App;
