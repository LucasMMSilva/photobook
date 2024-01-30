import React from 'react'
import styles from './MainContainer.module.css'
const MainContainer = ({children}) => {
  return (
    <div className={styles.container}>
        <div>
            {children}
        </div>
    </div>
  )
}

export default MainContainer