import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router';

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

export default function Arealist() {
    const router = useRouter()
    const [newarea, setNewarea] = React.useState<string>("");
    const [newareaError, setNewareaError] = React.useState<boolean>(false);

    async function addArea(){
        Swal.fire({
            title: 'Are you sure?',
            text: "Once you added, you can delete again if need!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, add this area!'
          }).then((result) => {
            if (newarea == "")
            {
                return;
            }
            if (result.isConfirmed) { 
            axios.get(gethost() + 'a/refreshtoken', { withCredentials: true }).then(async (res) => {
                const config = {
                    headers: { Authorization: `Bearer ${res.data.accesstoken}` }
                };
                const datapack = {
                    name: newarea
                };
                axios.post(gethost() +'m/utilarea',datapack ,config).then(async (res) => {
                    setNewarea ("");
                })
                    .catch(() => {
                        Swal.fire(
                            'Successfully Added!',
                            'this area has been Added.',
                            'success'
                            )
                    })
            })
            .catch((err) => { })
            }
          })
    }

    const newareaChangeHandler = (e: any) => {
        const newpcatergory_regex = /^[A-Z].{3,15}$/;
        const valid = !!e.target.value.match(newpcatergory_regex);
        setNewarea(e.target.value);
        setNewareaError(!valid);
    }

    return (
        <Grid item>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                Add Areas
            </Typography>
            <Stack direction="row" spacing={2}>

                <input
                    className={styles.inputbox_modern_catergory}
                    type="text"
                    placeholder="Enter New Area"
                    value={newarea}
                    //onChange={(e) => setNewcatergory(e.target.value)}
                    onChange={newareaChangeHandler}
                />

                <Button disabled={newareaError} className={styles.manager_settings_catergory_add_button} id="manager_catergory_add" variant="contained" size="small" onClick={addArea}>
                    Add
                </Button>
            </Stack>
            {newareaError && (<p className={styles.manager_catergory_error_message}> * Area must contain 4-15 characters and first letter must be capital</p>)}

            <Typography sx={{ mt: 4, mb: 2 }} variant="h5" component="div">
                Active Areas
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
