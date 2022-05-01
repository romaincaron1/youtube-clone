import React from 'react'
import Navbar from '../Navbar/navbar'
import styles from './container.module.css'

export default function container({children}) {
  return (
    <>
        <Navbar />
        <div className={styles.container}>
          {children}
        </div>
    </>
  )
}
