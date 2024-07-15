import React from 'react';
import {Avatar, TextField} from "@mui/material";
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation'
import myLogo from "../images/frontDev.jpg"

const TestedMui = () => {
    return (
        <>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                    <EditIcon />
                </Fab>
                <Fab variant="extended">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Navigate
                </Fab>
                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>
            </Box>
            <Box>
                <Avatar
                    alt="Remy Sharp"
                    src={myLogo}
                    sx={{ width: 56, height: 56 }}
                />
            </Box>
        </>
    );
};

export default TestedMui;