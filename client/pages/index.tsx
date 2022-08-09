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
import styles from './styles.module.scss'

const index: NextPage = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    function create(event: any) {
        event.preventDefault();
        router.push('/user');

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
                
            </div>
            

            
        );
}

export default index;