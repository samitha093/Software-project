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


interface AreaProps {
    data: any
    refresh: any
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function Arealist() {
    const router = useRouter()
    const [newarea, setNewarea] = React.useState<string>("");
    const [newareaError, setNewareaError] = React.useState<boolean>(false);

    const [items, setItem] = React.useState<any[]>([{}]);
    const [refresh2, setRefresh2] = React.useState<string>("");

React.useEffect(()=>{
    axios.get(gethost() +'g/areas').then(async (res)=>{
        await setItem(res.data)
      }).catch(async()=>{
      })       
},[refresh2])

const generate = items.map((value) =>
            <ListItem 
                secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                }
            >

                <ListItemText
                    primary={value.name}
                />
            </ListItem>
    );


    async function addArea() {

        if (newarea == "") {
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
                name: newarea
            };
            axios.post(gethost() + 'm/utilarea', datapack, config).then(async (res) => {
                setRefresh2 (res.data);
                setNewarea("");
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'New area added',
                    showConfirmButton: false,
                    timer: 1500}
                )
            })
                .catch(() => {
                })
        })
            .catch((err) => { })
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
                    {generate}
                </List>
            </Demo>
        </Grid>
    );
}
