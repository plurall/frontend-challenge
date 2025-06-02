import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import * as styles from './BackButton.module.scss'

export function BackButton() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <button onClick={handleBack} className={styles.backButton}>
      <span className={styles.icon}>←</span>
    </button>
  )
}
