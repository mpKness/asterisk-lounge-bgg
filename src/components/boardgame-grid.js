import React from 'react';
import BoardgameCard from "./boardgame-card";
import Box from '@mui/material/Box';
import { useSelector } from "react-redux";
import { selectCollectionByUsername } from "../store/slices/collection";

const BoardgameGrid = () => {
    const collection = useSelector((state) => selectCollectionByUsername(state, 'voamer'));

    return (
        <Box sx={{display: "grid", gridTemplateColumns: "repeat(5, 20%)"}}>
            {
                collection.map(boardgame => <BoardgameCard key={boardgame} id={boardgame} />)
            }
        </Box>
    )
};

export default BoardgameGrid;
