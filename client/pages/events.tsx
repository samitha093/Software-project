import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Shop from '../components/Shop'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { DateRangePicker} from '@mui/x-date-pickers-pro'
// import DateRangePicker, { DateRange } from '@mui/lab/DateRangePicker';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare} from "@fortawesome/free-regular-svg-icons";
import styles from './styles.module.css'
import classnames from 'classnames';
import {gethost } from '../session/Session';
import axios from 'axios';
import Swal from 'sweetalert2'



const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Category - 1',
  'Category - 2',
  'Category - 3'
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const advanceclick = () => {
    if (process.browser) {
    const container = document.getElementById("advance-opt");
      if (container !== null) {
        //console.log(container.style.height);
        //container.classList.add("right-panel-active");
        //container.style.width ='0px';
        // container.style.right='-400px';
    if(container.style.height == '0px'){
        container.style.height= '100%';
    }else{
        container.style.height= '0px';
    }
    
      }
     }
  };

const events: NextPage = () => {
    // const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);
  
    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    const [category, setCategory] = React.useState<any[]>([])
    const [areaitems, setArea] = React.useState<any[]>([])
    React.useEffect(()=>{
        //get data
        axios.get(gethost() + 'g/areas')
        .then(async (res)=>{
          await setArea(res.data);
        })
        .catch(()=>{
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'server is not Responding, please try again later!'
            })
            return;
        }) 
        axios.get(gethost() + 'g/categories')
        .then(async (res)=>{
          await setCategory(res.data);
        })
        .catch(()=>{
          Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'server is not Responding, please try again later!'
            })
            return;
        }) 
        
      },[])
    const nameChangeHandler = (event:any) =>{
        console.log(event.target.value)
    }
        return (
            
            <div className={classnames(styles.buyer_bg, styles.shop_home)}>
                <Navbar/>
                <div className={styles.event_container}>
                    <div className={styles.event_container_left}>
                        <div className={styles.event_container_left_content}>
                        <Paper
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}
                            >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Search Your Event"
                                inputProps={{ 'aria-label': 'search google maps' }}
                                onChange={nameChangeHandler}
                            />
                            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                        <div className={styles.advance_options}>
                            <div className={styles.advance_options_left}>
                                Advance Options
                            </div>
                            <div className={styles.advance_options_right}>
                                <FontAwesomeIcon style={{cursor:'pointer'}} icon={faPlusSquare} className={styles.font_icon} onClick={advanceclick}/>
                            </div>
                        </div>
                        <div className={styles.auto_hide} id="advance-opt">
                        <div>
                            <h4>
                                Event Category 
                            </h4>
                            <div>
                                <FormControl sx={{ m: 1, width: '90%' }}>
                                    <InputLabel id="demo-multiple-name-label">Select Category</InputLabel>
                                    <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Select Category" />}
                                    MenuProps={MenuProps}
                                    >
                                    {category.map((name) => (
                                        <MenuItem
                                        key={name.id}
                                        value={name.name}
                                        style={getStyles(name, personName, theme)}
                                        >
                                        {name.name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div>
                            <h4>
                                Area
                            </h4>
                            <div>
                                <FormControl sx={{ m: 1, width: '90%' }}>
                                    <InputLabel id="demo-multiple-name-label">Select Area</InputLabel>
                                    <Select
                                    labelId="demo-multiple-name-label"
                                    id="demo-multiple-name"
                                    multiple
                                    value={personName}
                                    onChange={handleChange}
                                    input={<OutlinedInput label="Select Category" />}
                                    MenuProps={MenuProps}
                                    >
                                    {areaitems.map((name) => (
                                        // console.log(name.name)
                                        <MenuItem
                                        key={name.id}
                                        value={name.name}
                                        style={getStyles(name, personName, theme)}
                                        >
                                        {name.name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div>
                            <h4>
                                Ticket Types
                            </h4>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Level 1 Tickets" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Level 2 Tickets" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Level 3 Tickets" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Level 4 Tickets" />
                                <FormControlLabel control={<Checkbox defaultChecked />} label="Level 5 Tickets" />
                            </FormGroup>
                        </div>
                        
                        </div>
                        
                        </div>
                    </div>
                    <div className={styles.event_container_Right}>
                        <Shop/>
                    </div>
                </div>
            </div>
        );
}

export default events;