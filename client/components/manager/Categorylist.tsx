import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import axios from 'axios';

import styles from './styles.module.css'
import classnames from 'classnames';

function generate(element: React.ReactElement) {
    return [0, 1, 2, 3, 4, 5, 6].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function Categorylist() {
    const router = useRouter()

    const [newcatergory, setNewcatergory] = React.useState<string>("");
    const [newcatergoryError, setNewcatergoryError] = React.useState<boolean>(false);

    //Need a function to retrieve and store privioulsy entered catergories

    async function addCatergory() { //This fuction is to store new catergory in the database
        const datapack = {
            catergory: newcatergory
        }
        //There should be routing part here. (Refer USER)
        //Also check whether there is same catergory already in  the database. If not newly add, else error msg
    }

    const newcatergoryChangeHandler = (e: any) => {
        const newpcatergory_regex = /^[A-Z].{3,20}$/;
        const valid = !!e.target.value.match(newpcatergory_regex);
        setNewcatergory(e.target.value);
        setNewcatergoryError(!valid);
    }

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 600 }}>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Add Catergories
                    </Typography>
                    <Stack direction="row" spacing={2}>

                        <input
                            className={styles.inputbox_modern_catergory}
                            type="text"
                            placeholder="Enter New Catergory"
                            value={newcatergory}
                            //onChange={(e) => setNewcatergory(e.target.value)}
                            onChange={newcatergoryChangeHandler}
                        />

                        <Button className={styles.manager_settings_catergory_add_button} variant="contained" size="small" onClick={addCatergory}>
                            Add
                        </Button>
                    </Stack>
                    {newcatergoryError && (<p className={styles.manager_catergory_error_message}> * Catergory must be 4-20 characters and first letter capital</p>)}

                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Active Catergories
                    </Typography>
                    <Demo>
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 400,
                                bgcolor: 'background.paper',
                                position: 'relative',
                                overflow: 'auto',
                                maxHeight: 300,
                                '& ul': { padding: 0 },
                            }}
                        >
                            {generate(
                                <ListItem
                                    secondaryAction={
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon />
                                        </IconButton>
                                    }
                                >

                                    <ListItemText
                                        primary="Single-line item"
                                    />
                                </ListItem>,
                            )}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
        </Box>
    );
}
