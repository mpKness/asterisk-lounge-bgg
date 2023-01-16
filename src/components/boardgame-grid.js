import React from 'react';
import BoardgameCard from "./boardgame-card";
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import { selectCollectionByUsernames } from "../store/slices/collection";
import { selectChosenUsers } from '../store/slices/user';

const BoardgameGrid = () => {
    const chosenUsers = useSelector(selectChosenUsers);
    const collection = useSelector((state) => selectCollectionByUsernames(state, chosenUsers));
    console.log('chosen user', collection);

    return (
        <Box sx={{display: "grid", gridTemplateColumns: "repeat(5, 20%)"}}>
            {
                collection.map(boardgame => <BoardgameCard key={boardgame} id={boardgame} />)
            }
        </Box>
    )
};

export default BoardgameGrid;
