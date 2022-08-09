import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import axios from 'axios'

interface ProgressbarProps {

}
const Progressbar: React.FC<ProgressbarProps> = ({}) => {
    const percentage = 80;
        return (
            <div>
               <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={5} />
            </div>
        );
}
export default Progressbar;
