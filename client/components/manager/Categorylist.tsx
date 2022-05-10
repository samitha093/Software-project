import * as React from 'react';
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
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
    const [nwcatergory, setnwcatergory] = React.useState("");

    return (
        <Box sx={{ flexGrow: 1, maxWidth: 600 }}>
            <Grid container spacing={2}>
                <Grid item>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Add Catergories
                    </Typography>
                    <input
                        className={styles.inputbox_modern_catergory}
                        type="string"
                        placeholder="Enter New Catergory"
                        value={nwcatergory}
                        onChange={(e) => setnwcatergory(e.target.value)}
                    />
                    <Button className={styles.manager_settings_catergory_add_button} variant="contained" size="small">
                        Add
                    </Button>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Active Catergories
                    </Typography>
                    <Demo>
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                                position: 'relative',
                                overflow: 'auto',
                                maxHeight: 200,
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
