import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'

import axios from 'axios';
import styles from '../styles.module.css'
import classnames from 'classnames';

//Session and local storage data
import { gethost } from '../../../session/Session';

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

    const newcatergoryChangeHandler = (e: any) => {
        const newpcatergory_regex = /^[A-Z].{3,20}$/;
        const valid = !!e.target.value.match(newpcatergory_regex);
        setNewcatergory(e.target.value);
        setNewcatergoryError(!valid);
    }

    async function addCatergory() {
        {
                if (newcatergory == "") {
                    Swal.fire(
                        'Oops!!!',
                        'Area can not be empty',
                        'warning'
                      )
                    return;
                }
                axios.get(gethost() + 'a/refreshtoken', { withCredentials: true }).then(async (res) => {
                    const config = {
                        headers: { Authorization: `Bearer ${res.data.accesstoken}` }
                    };
                    const datapack = {
                        name: newcatergory
                    };
                    axios.post(gethost() + 'm/utilcategory', datapack, config).then(async (res) => {
                        setNewcatergory("");
                        Swal.fire(
                            'Successfully Added!',
                            'this area has been Added.',
                            'success'
                        )
                    })
                        .catch(() => {
                            // Swal.fire(
                            //     'Successfully Added!',
                            //     'this area has been Added.',
                            //     'success'
                            // )
                        })
                })
                    .catch((err) => { })
            }
    }

    return (
        <Grid item>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                Add Categories
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

                <Button disabled={newcatergoryError} className={styles.manager_settings_catergory_add_button} id="manager_catergory_add" variant="contained" size="small" onClick={addCatergory}>
                    Add
                </Button>
            </Stack>
            {newcatergoryError && (<p className={styles.manager_catergory_error_message}> * Category must containe 4-20 characters and first letter must be capital</p>)}

            <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                Active Categories
            </Typography>
            <Demo>
                <List
                    sx={{
                        width: '100%',
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 400,
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
    );
}
