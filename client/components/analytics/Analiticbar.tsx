import React from 'react'
import styles from './Styles.module.scss'

interface AnaliticbarProps {
    data:any,
}

const Analiticbar: React.FC<AnaliticbarProps> = ({data}) => {
    const [progress,setprogress] = React.useState<any>();
    React.useEffect(() => {
      setprogress(472 - ((data.progress/100)*472));
    }, [])
    return (
        <div className={styles.bg}>
                <div className={styles.progressbar_container}>
                    <div className={styles.progressbar_container_bg}>
                        <div className={styles.progressbar_outer_new}>
                            <div className={styles.progressbar_inner_newmiddle}>
                            <div className={styles.progressbar_inner_new}>
                                <div className={styles.progressbar_progress_new}>
                                    {data.progress}%
                                </div>
                            </div>
                            </div>
                        </div>
                        <svg className={styles.progressbar_svg} xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stop-color="#914ea3" />
                                <stop offset="100%" stop-color="#401f44" />
                            </linearGradient>
                        </defs>
                        <circle className={styles.progressbar_svgcircle} style={{strokeDashoffset:progress}} cx="80" cy="80" r="70" stroke-linecap="round" />
                        </svg>
                    </div>
                    </div>
        </div>
    );
}

export default Analiticbar;