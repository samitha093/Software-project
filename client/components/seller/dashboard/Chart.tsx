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
  datas:any
}

const Chart: React.FC<ChartProps> = ({datas}) => {
  const UserData = [
    {id: 1,userGain: 80000,},

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
  React.useEffect(()=>{
    setUserData({
      labels: datas.map((data:any) => data.id),
      datasets: [
        {
          label: "System Transactions",
          data: datas.map((data:any) => data.userGain),
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
    })
  },[datas])
  
    return (
        <div className={styles.bg_cart}>
            <div className={styles.pichart_title}>Last 30 days</div>
            <Line data={userData}/>
        </div>
    );
}

export default Chart;