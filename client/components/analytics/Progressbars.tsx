import React from 'react'
import styles from './Styles.module.scss'

function Progressbar_light({data}:any) {
  const [progress,setprogress] = React.useState<any>();
  React.useEffect(() => { 
    setprogress(472 - ((data.progress/100)*472));
  }, [])

  return (
    <div className={styles.progressbar_container}>
      <div className={styles.progressbar_container_bg}>
        <div className={styles.progressbar_outer}>
          <div className={styles.progressbar_inner}>
            <div className={styles.progressbar_progress}>
                {data.progress}%
            </div>
          </div>
        </div>
        <svg className={styles.progressbar_svg} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
          <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
          </defs>
          <circle className={styles.progressbar_svgcircle} style={{strokeDashoffset:progress}} cx="80" cy="80" r="70" stroke-linecap="round" />
        </svg>
      </div>
    </div>
  )
}

  export default Progressbar_light

