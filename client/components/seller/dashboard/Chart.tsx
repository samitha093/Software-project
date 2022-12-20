import React from 'react'
import styles from './styles.module.scss'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

interface ChartProps {
  data:any
}

const Chart: React.FC<ChartProps> = ({data}) => {
  const [rows, setData] = React.useState<any[]>([]);
  React.useEffect(()=>{
    setData(data)
  },[])
    const UserData = [
        {id: 1,userGain: 80000,},
        {id: 2,userGain: 45677,},
        {id: 3,userGain: 78888,},
        {id: 4,userGain: 90000,},
        {id: 5,userGain: 4300,},
        {id: 6,userGain: 80000,},
        {id: 7,userGain: 45677,},
        {id: 8,userGain: 78888,},
        {id: 9,userGain: 90000,},
        {id: 10,userGain: 4300,},
        {id: 11,userGain: 80000,},
        {id: 12,userGain: 45677,},
        {id: 13,userGain: 78888,},
        {id: 14,userGain: 90000,},
        {id: 15,userGain: 4300,},
        {id: 16,userGain: 80000,},
        {id: 17,userGain: 45677,},
        {id: 18,userGain: 78888,},
        {id: 19,userGain: 90000,},
        {id: 20,userGain: 4300,},
        {id: 21,userGain: 80000,},
        {id: 22,userGain: 45677,},
        {id: 23,userGain: 78888,},
        {id: 24,userGain: 90000,},
        {id: 24,userGain: 90000,},
        {id: 25,userGain: 90000,},
        {id: 26,userGain: 90000,},
        {id: 27,userGain: 90000,},
        {id: 28,userGain: 90000,},
        {id: 29,userGain: 90000,},
        {id: 30,userGain: 90000,},
    ];
    const [userData, setUserData] = React.useState({
        labels: UserData.map((data) => data.id),
        datasets: [
          {
            label: "System Transactions",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
            borderColor: "black",
            borderWidth: 2,
            lineTension: 0.4
          },
        ],
      });
    return (
        <div className={styles.bg_cart}>
            <div className={styles.pichart_title}>Last 30 days</div>
            <Line data={userData}/>
        </div>
    );
}

export default Chart;