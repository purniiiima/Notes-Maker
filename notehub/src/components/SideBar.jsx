import React from 'react'
import HubIcon from '@mui/icons-material/Hub';
import AddIcon from '@mui/icons-material/Add';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import styles from "./SideBar.module.css"

export default function SideBar() {
  return (
    <div className={styles.sidebar}>
    <div className={styles.websiteName}>
        <div className={styles.logo}><HubIcon/></div>
         <div className={styles.name}>NoteHub</div>
         </div>
    <div className={styles.functions}>
        <ul>
            <li> 
                <div className={styles.logo}><HomeIcon/></div>
                <div className={styles.name}>Home</div>
            </li>
            <li> 
                <div className={styles.logo}><ScheduleIcon/></div>
                <div className={styles.name}>Recent</div>
            </li>
            <li> 
                <div className={styles.logo}><ClearAllIcon/></div>
                <div className={styles.name}>All Notes</div>
            </li>
        </ul>
    </div>
    </div>
  )
}
