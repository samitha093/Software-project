import React from 'react'
import QRCode from 'qrcode'
interface TicketProps {
 id : string
}

const Ticket: React.FC<TicketProps> = ({id}) => {
    const [imag, setimg] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const viewchange = async()=>{
        if(open == false){
            setOpen(true);
            const response = await QRCode.toDataURL(id);
            console.log(response);
            setimg(response);
        }else{
            setOpen(false);
        }
    };
        return (
            <div className="buyer-c-ticket" onClick={viewchange}>
                {!open?
                    <div  id="ticket-cord" >
                        {id}
                    </div>
                :
                    <div>
                        <center><img src={imag} alt="" width="200" height="200"/></center>
                    </div>
                }  
            </div>
            
        );
}

export default Ticket;