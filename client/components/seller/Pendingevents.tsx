import * as React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
interface PendingeventProps {

}
const Pendingevents: React.FC<PendingeventProps> = ({}) => {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div  className="seller-c-pendingevents" onClick={handleClickOpen}>
                <div>
                    <div  className="seller-c-pendingevents-top">
                        <div className="seller-c-pendingevents-top-info">
                            <div className="seller-c-pendingevents-top-info-left">
                                <div className="seller-c-pendingevents-top-info-left-name">
                                    Event name
                                </div>
                                <div className="seller-c-pendingevents-top-info-left-date">
                                    2021-08-23
                                </div>
                            </div>
                            <div className="seller-c-pendingevents-top-info-right">
                                <div className="seller-c-pendingevents-top-info-right-nooftickets">460</div>
                                <div className="seller-c-pendingevents-top-info-right-tickets">tickets</div>
                            </div>
                        </div>
                    </div>
                    <h5 className="seller-c-pendingevents-cardstatus">Info</h5>
                </div>
            </div>
        </div>
    );
}

export default Pendingevents;