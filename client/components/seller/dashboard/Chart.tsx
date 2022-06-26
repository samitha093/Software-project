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

}

const Chart: React.FC<ChartProps> = ({}) => {
    const UserData = [
        {
          id: 1,
          year: 2016,
          userGain: 80000,
          userLost: 823,
          time:'00',
        },
        {
          id: 2,
          year: 2017,
          userGain: 45677,
          userLost: 345,
          time:'01',
        },
        {
          id: 3,
          year: 2018,
          userGain: 78888,
          userLost: 555,
          time:'02',
        },
        {
          id: 4,
          year: 2019,
          userGain: 90000,
          userLost: 2555,
          time:'03',
        },
        {
          id: 5,
          year: 2020,
          userGain: 4300,
          userLost: 234,
          time:'04',
        },
        {
          id: 6,
          year: 2016,
          userGain: 80000,
          userLost: 823,
          time:'05',
        },
        {
          id: 7,
          year: 2017,
          userGain: 45677,
          userLost: 345,
          time:'06',
        },
        {
          id: 8,
          year: 2018,
          userGain: 78888,
          userLost: 555,
          time:'07',
        },
        {
          id: 9,
          year: 2019,
          userGain: 90000,
          userLost: 2555,
          time:'08',
        },
        {
          id: 10,
          year: 2020,
          userGain: 4300,
          userLost: 234,
          time:'09',
        },
        {
          id: 11,
          year: 2016,
          userGain: 80000,
          userLost: 823,
          time:'10',
        },
        {
          id: 12,
          year: 2017,
          userGain: 45677,
          userLost: 345,
          time:'11',
        },
        {
          id: 13,
          year: 2018,
          userGain: 78888,
          userLost: 555,
          time:'12',
        },
        {
          id: 14,
          year: 2019,
          userGain: 90000,
          userLost: 2555,
          time:'13',
        },
        {
          id: 15,
          year: 2020,
          userGain: 4300,
          userLost: 234,
          time:'14',
        },
        {
          id: 16,
          year: 2016,
          userGain: 80000,
          userLost: 823,
          time:'15',
        },
        {
          id: 17,
          year: 2017,
          userGain: 45677,
          userLost: 345,
          time:'16',
        },
        {
          id: 18,
          year: 2018,
          userGain: 78888,
          userLost: 555,
          time:'17',
        },
        {
          id: 19,
          year: 2019,
          userGain: 90000,
          userLost: 2555,
          time:'18',
        },
        {
          id: 20,
          year: 2020,
          userGain: 4300,
          userLost: 234,
          time:'19',
        },
        {
          id: 21,
          year: 2016,
          userGain: 80000,
          userLost: 823,
          time:'20',
        },
        {
          id: 22,
          year: 2017,
          userGain: 45677,
          userLost: 345,
          time:'21',
        },
        {
          id: 23,
          year: 2018,
          userGain: 78888,
          userLost: 555,
          time:'22',
        },
        {
          id: 24,
          year: 2019,
          userGain: 90000,
          userLost: 2555,
          time:'23',
        },
        {
          id: 24,
          year: 2019,
          userGain: 90000,
          userLost: 2555,
          time:'24',
        },
        {
            id: 25,
            year: 2019,
            userGain: 90000,
            userLost: 2555,
            time:'24',
          },
          {
            id: 26,
            year: 2019,
            userGain: 90000,
            userLost: 2555,
            time:'24',
          },
          {
            id: 27,
            year: 2019,
            userGain: 90000,
            userLost: 2555,
            time:'24',
          },
          {
            id: 28,
            year: 2019,
            userGain: 90000,
            userLost: 2555,
            time:'24',
          },
          {
            id: 29,
            year: 2019,
            userGain: 90000,
            userLost: 2555,
            time:'24',
          },
          {
            id: 30,
            year: 2019,
            userGain: 90000,
            userLost: 2555,
            time:'24',
          },

    ];
    const [userData, setUserData] = React.useState({
        labels: UserData.map((data) => data.time),
        datasets: [
          {
            label: "System Transactions",
            data: UserData.map((data) => data.userLost),
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