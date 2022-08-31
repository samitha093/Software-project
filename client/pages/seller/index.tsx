////node packages
import React from 'react'
import type { NextPage } from 'next'
import axios from 'axios'
import {useRouter} from 'next/router'
import Swal from 'sweetalert2'
//Session and local storage data
import {gethost} from '../../session/Session';
//custom components
import Sidebar from '../../components/seller/Sidebar'
import Navbar from '../../components/Navbar'
import Homepage from '../../components/seller/dashboard/index'
import Topbar from '../../components/seller/Topbar'
import Popup from '../../components/seller/ticketpopups/Popup'
import Createevent from '../../components/seller/Createevents'
import Profile from '../../components/profile/Profile'
import Auth from '../../components/auth/Auth'
//stylesheet
import Styles from './styles.module.scss'


const index: NextPage = function ActiveEvents() {
    const [buyersidebar,setbuyersidebar] = React.useState([{status:true},{status:false},{status:false}]);
    const [items, setitem] = React.useState([])
    const [itemURL, setitemURL] = React.useState('s/getevent/pending');
    const [itemID, setitemID] = React.useState("1");
    const [refreshData, setrefreshData] = React.useState("");

    React.useEffect(()=>{
        axios.get(gethost() + 'a/refreshtoken',{withCredentials:true}).then(async (res)=>{
            //create a headet pack
            const config = {
              headers: { Authorization: `Bearer ${res.data.accesstoken}` }
            };
            axios.get(gethost() + itemURL ,config).then(async (res)=>{
              await setitem(res.data)
            }).catch(async()=>{
              await setitem([])
            })
        })
        .catch((err)=>{})       
    },[itemURL,refreshData])

    //component changer
    const selectcomponents = async(e:any)=>{
        tabchange(e);
    };
    const RefreshData = async(e:any)=>{
        setrefreshData(e);
    };
    async function tabchange(id:any){
        var datapack = [
            {status:id=='1'?true:false},
            {status:id=='2'?true:false},
            {status:id=='3'?true:false},
        ]
        setbuyersidebar(datapack);  
    }
    //for event page 
    const changeSellerList = async(e:any)=>{
        if(e == 1){
            setitemURL('s/getevent/pending');
            setitemID("1")
        }else if(e == 2){
            setitemURL('s/getevent/active');
            setitemID("2")
        }else if(e == 3){
            setitemURL('s/getevent/end');
            setitemID("3")
        }else if(e == 4){
            setitemURL('s/getevent/declined');
            setitemID("4")
        }
    };
    const listitem = items.map((item:any)=>(
        <Popup data={item} key={item.id}/>
    ));

    return (
        <Auth type={"SELLER"}><div className={Styles.seller_bg}>
            <Navbar/>
            <div className={Styles.seller_index}>
                <Sidebar id="1" data={{change: selectcomponents}}/>
                {buyersidebar[0].status ?
                    // {/* Home page */}
                    <div className={Styles.seller_setting_fix}>
                        <Homepage />
                    </div>
                :null}
                {buyersidebar[1].status ?
                // {/* EVENT page */}
                    <div>
                        <Topbar id="1" data={{change: changeSellerList}}/>
                        <div className={Styles.seller_index_parent_fix}>
                            <div className={Styles.seller_index_parent}>
                                <h1 className={Styles.seller_index_container_name}>Events</h1>
                                <div className={Styles.seller_index_container}>
                                    {listitem}
                                </div>
                            </div>
                        </div>
                        <div className={Styles.seller_index_float}>
                            {itemID=='1'?<Createevent refreshData={{change: RefreshData}}/>:null}
                        </div>
                    </div>
                :null}
                {buyersidebar[2].status ?
                // {/* Settings page */}
                    <div className={Styles.seller_setting_fix}>
                        <div className={Styles.seller_setting_con}>
                            <h1>Settings</h1>
                            <div className={Styles.seller_setting_con_in}><Profile/></div> 
                        </div>
                    </div>
                :null}

            </div>
        </div>
        </Auth>
    );
}

export default index;