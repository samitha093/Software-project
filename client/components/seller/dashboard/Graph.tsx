import React from 'react'
import styles from './styles.module.scss'
import { Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js'

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );


interface GraphProps {
  datas:any
}

const Graph: React.FC<GraphProps> = ({datas}) => {
  const UserData = [
    {id: 1,year: 'By Bid',userLost: 423,},{id: 2,year: 'Direct Buy',userLost: 645,}
  ];
  const [userData, setUserData] = React.useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "System Transaction in Last Seven Days",
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
  React.useEffect(()=>{
    setUserData({
      labels: datas.map((data:any) => data.year),
      datasets: [
        {
          label: "System Transaction in Last Seven Days",
          data: datas.map((data:any) => data.userLost),
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
        <div className={styles.bg_graph}>
            <div className={styles.pichart_title}>Last 30 days</div>
            <Doughnut data={userData}/>
        </div>
    );
}

export default Graph;