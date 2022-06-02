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

interface WeekgraphProps {

}

const Weekgraph: React.FC<WeekgraphProps> = ({}) => {
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
            borderColor: "#da5050",
            borderWidth: 2,
            lineTension: 0.4,
            yAxisID:'y'
          },
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
            borderColor: "#821b8f",
            borderWidth: 2,
            lineTension: 0.4,
            yAxisID:'z',
          },
        ],
      });
      const options = {
        scales: {
            y:
            {
              display: true,
              beginAtZero: false,
            },

        },
      };
    return (
        <div className={styles.Weekbg}>
            <Line data={userData} options={options}/>
        </div>
    );
}

export default Weekgraph;