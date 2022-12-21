import React from 'react'
import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Shop from '../components/store/Shop'
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare} from "@fortawesome/free-regular-svg-icons";
import styles from './styles.module.scss'
import classnames from 'classnames';
import {gethost } from '../session/Session';
import axios from 'axios';
import Swal from 'sweetalert2'
import id from 'date-fns/esm/locale/id/index.js';



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


  const events: NextPage = function ActiveEvents() {
    // const [value, setValue] = React.useState<DateRange<Date>>([null, null]);
    const theme = useTheme();
    const [personName, setPersonName] = React.useState<string[]>([]);
    const [personName2, setPersonName2] = React.useState<string[]>([]);
  
    const handleChange = async(event: SelectChangeEvent<typeof personName>) => {
      const {
        target: { value },
      } = event;
      await setPersonName(
        // On autofill we get a the stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      //console.log(value)
      const reqData ={
        tag:'category',
        data:value
      }
      getdatafromfilter(reqData);
    };
    const handleChange2 = (event2: SelectChangeEvent<typeof personName2>) => {
        const {
          target: { value },
        } = event2;
        setPersonName2(
          // On autofill we get a the stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
        //console.log(value)
        const reqData ={
          tag:'area',
          data:value
        }
        getdatafromfilter(reqData);
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
    const [evntname, setevntname] = React.useState<string>("")
    const nameChangeHandler = (event:any) =>{
        setevntname(event.target.value);
        const reqData ={
          tag:'name',
          data:event.target.value
        }
        getdatafromfilter(reqData);
    }
    const [l1, setL1] = React.useState<boolean>(true)
    const [l2, setL2] = React.useState<boolean>(true)
    const [l3, setL3] = React.useState<boolean>(true)
    const [l4, setL4] = React.useState<boolean>(true)
    const [l5, setL5] = React.useState<boolean>(true)
    const levelChangeHandler = (event:any,value:string) =>{
      //console.log(value);
      if(value == 'l1'){
        if(l1 == true){
          setL1(false);
        }else{
          setL1(true);
        }
      }
      if(value == 'l2'){
        if(l2 == true){
          setL2(false);
        }else{
          setL2(true);
        }
      }
      if(value == 'l3'){
        if(l3 == true){
          setL3(false);
        }else{
          setL3(true);
        }
      }
      if(value == 'l4'){
        if(l4 == true){
          setL4(false);
        }else{
          setL4(true);
        }
      }
      if(value == 'l5'){
        if(l5 == true){
          setL5(false);
        }else{
          setL5(true);
        }
      }
      const TicketTypes={
        l1:value=='l1'?l1==true?false:true:l1,
        l2:value=='l2'?l2==true?false:true:l2,
        l3:value=='l3'?l3==true?false:true:l3,
        l4:value=='l4'?l4==true?false:true:l4,
        l5:value=='l5'?l5==true?false:true:l5,
      }
      const reqData ={
        tag:'ticketTypes',
        data:TicketTypes
      }
      getdatafromfilter(reqData);
  }
  const [tickerarray, settickerarray] = React.useState<any>([])
  const getdatafromfilter = (data:any) =>{
    //console.log(event.target.value)
    const TicketTypes={
      l1:l1,
      l2:l2,
      l3:l3,
      l4:l4,
      l5:l5
    }
    const reqDataset ={
      name: data.tag=='name'?data.data:evntname,
      category:data.tag=='category'?data.data:personName,
      area:data.tag=='area'?data.data:personName2,
      ticketTypes:data.tag=='ticketTypes'?data.data:TicketTypes
    }
    const reqData ={
      dataarray:reqDataset
    }
    axios.post(gethost() + 'g/tickets',reqData)
    .then(async (res)=>{
      settickerarray(res.data)
    })
    .catch((err)=>{
     console.log(err);
    }) 
}

        return (
            
            <div className={classnames( styles.shop_home)}>
                {/* <Navbar/> */}
                <div className={styles.event_container}>
                    <div className={styles.event_container_left}>
                        <div className={styles.event_container_left_content}>
                        {/*<Paper
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
                            </Paper>*/}
                        <div className={styles.advance_options}>
                            <div className={styles.advance_options_left}>
                                Advance Options
                            </div>
                            <div className={styles.advance_options_right}>
                                <FontAwesomeIcon style={{cursor:'pointer'}} icon={faPlusSquare as IconProp} className={styles.font_icon} onClick={advanceclick}/>
                            </div>
                        </div>
                        <div className={styles.auto_hide} id="advance-opt">
                        {/*<div>
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
                                    value={personName2}
                                    onChange={handleChange2}
                                    input={<OutlinedInput label="Select Category" />}
                                    MenuProps={MenuProps}
                                    >
                                    {areaitems.map((name) => (
                                        // console.log(name.name)
                                        <MenuItem
                                        key={name.id}
                                        value={name.name}
                                        style={getStyles(name, personName2, theme)}
                                        >
                                        {name.name}
                                        </MenuItem>
                                    ))}
                                    </Select>
                                </FormControl>
                            </div>
                                    </div>*/}
                        <div>
                            <h4>
                                Ticket Types
                            </h4>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox checked={l1} />} label="Level 1 Tickets" onChange={(e)=>levelChangeHandler(e,'l1')}/>
                                <FormControlLabel control={<Checkbox checked={l2} />} label="Level 2 Tickets" onChange={(e)=>levelChangeHandler(e,'l2')}/>
                                <FormControlLabel control={<Checkbox checked={l3} />} label="Level 3 Tickets" onChange={(e)=>levelChangeHandler(e,'l3')}/>
                                <FormControlLabel control={<Checkbox checked={l4} />} label="Level 4 Tickets" onChange={(e)=>levelChangeHandler(e,'l4')}/>
                                <FormControlLabel control={<Checkbox checked={l5} />} label="Level 5 Tickets" onChange={(e)=>levelChangeHandler(e,'l5')}/>
                            </FormGroup>
                        </div>
                        
                        </div>
                        
                        </div>
                    </div>
                    <div className={styles.event_container_Right}>
                        <Shop tickets={tickerarray}/>
                    </div>
                </div>
            </div>
        );
}

export default events;