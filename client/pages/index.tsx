import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image';
import ticket from '../assets/online-ticket.png'
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import StorefrontTwoToneIcon from '@mui/icons-material/StorefrontTwoTone';
import {Button} from '@mui/material';
import Navbar from '../components/Navbar'
import style from './user/style.module.css'
import events from './events'
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
import GitHubIcon from '@mui/icons-material/GitHub';
import CreateIcon from '@mui/icons-material/Create';
import { grey } from '@mui/material/colors';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkRoundedIcon from '@mui/icons-material/PhoneInTalkRounded';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import seat from '../assets/seat.png'
import social_distance from '../assets/social.jpg'
import aud from '../assets/aud.jpeg'
import mock from '../assets/mock.png'
import payment from '../assets/payment.jpeg'
import bid from '../assets/bid.jpg'
import stat from '../assets/stat.png'
import virus from '../assets/virus.png'
import chair from '../assets/office-chair.png'
import money from '../assets/money.png'


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

const index: NextPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    function create(event: any) {
        event.preventDefault();
        router.push('/user');

    }



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
            <div className={style.index}>
                <div className={style.main_container_1}>
                    <Navbar/>
                    <div className ={style.top_container}>
                        <div className ={style.left_container}>
                                    <div className={style.text_1} style={{display:'block'}}>
                                    <h2 style={{color:'#3b1c4e'}}>You dream it</h2><br/>
                                    <div style={{marginTop:'-60px', color:'#212121'}}> We ticket it</div><br/>
                                    </div>
                                    <div className= {style.text_1_1}>
                                    <br/>The best place to sell your<br/>fully customized event tickets.<br/><br/> Join with TickBid today!
                                    </div>
                                    <div className={style.btn_class}>
                                    <Button 
                                    className= {style.btn_create}
                                    variant="contained" 
                                    startIcon = {<ShoppingCartTwoToneIcon/>}
                                    onClick={create}
                                    >Buy Ticket</Button>
                                    <Button 
                                    className= {style.btn_create}
                                    variant="contained" 
                                    startIcon = {<StorefrontTwoToneIcon/>}
                                    onClick={create}
                                    >Sell Ticket</Button>
                                    </div> 
                        </div>
                        <div className ={style.right_container}>
                        <Image src = {ticket}
                            layout = "responsive"
                            m-50="true"
                            alt=''
                            ></Image>   
                        </div>
                    </div>
                    <svg className={style.svgstyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                    <path fill="white" fillOpacity="1" d="M0,128L26.7,133.3C53.3,139,107,149,160,128C213.3,107,267,53,320,53.3C373.3,53,427,107,480,149.3C533.3,192,587,224,640,218.7C693.3,213,747,171,800,138.7C853.3,107,907,85,960,96C1013.3,107,1067,149,1120,176C1173.3,203,1227,213,1280,202.7C1333.3,192,1387,160,1413,144L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
                    </svg>
                </div>
                <div>
                    <div className={styles.trending_board_container}><h2 className={styles.trending_board}>Trending Events</h2></div>
                    
                </div>
                <div>
                <div className={classnames( styles.shop_home)}>
                {/* <Navbar/> */}
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
                                <FontAwesomeIcon style={{cursor:'pointer'}} icon={faPlusSquare as IconProp} className={styles.font_icon} onClick={advanceclick}/>
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
                        </div>
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
                </div>
                <div>
                <div className ={style.top_container}> 
                       <div className ={style.footer}>
                          <div className ={style.aboutus}>
                            <h2 className ={style.h2}>About us</h2>
                            <p>TickBid is a powerful online event ticketing platform to 
                               sell  your event tickets and grow your events
                               & revenue without spending much time on 
                               traditional ticket sales. Build an awesome ticketing
                               experience, reach new attendees by giving access to
                                your ticket counter  to any fan at anywhere. Join with us!</p>
                                <IconButton>
                              <GitHubIcon sx={{ color: grey[300] }}/>
                              </IconButton>
                          </div>
                          <div className ={style.Quicklinks}>
                            <h2 className ={style.h2}>Quick Links</h2>
                            <ul>
                            <li><a href = "/" color="#a688a7">About Us</a></li>
                             <li> <a href = "#">Contact</a></li>
                            </ul>  
                          </div>
                          <div className ={style.contact}>
                            <h2 className ={style.h2}>Contact info</h2>
                            <div className ={style.row}>
                              <div> <LocationOnIcon sx={{ color: grey[300] }}/></div>
                              <div className={style.text_4}>fhjsfhjdhjshfjsfhjdf</div> 
                            </div>
                            <div className ={style.row}>
                              <div> <PhoneInTalkRoundedIcon sx={{ color: grey[300] }}/></div>
                              <div className={style.text_4}> +94 779384983  <br/> +94 779384983 </div> 
                            </div>
                            <div className ={style.row}>
                              <div> <AlternateEmailIcon sx={{ color: grey[300] }}/></div>
                              <div className={style.text_4}>fhjsfhjdhjshfjsfhjdf</div> 
                            </div>
                          </div>
                       </div> 
                </div> 
                </div>
            </div>
            

            
        );
}

export default index;