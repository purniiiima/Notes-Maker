import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import styles from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={styles.navBar}> 
        <div className={styles.Search}>
            <div className={styles.logo}><SearchIcon/></div>
            <input type="text" placeholder='Search'/> 
        </div>
        <button><div className={styles.logo}><AddIcon/></div>
                <div className={styles.name}>Add Note</div></button>
    </div>
  )
}
