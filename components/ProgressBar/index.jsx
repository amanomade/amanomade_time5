import React from 'react'
import styles from './styles.module.scss'

const ProgressBar = ({ progress, height, fixWidth }) => {
  const Bar = {
    height: height,
    width: fixWidth ? `${fixWidth}px` : '100%',
    backgroundColor: '#E7E7E7',
    borderRadius: 40,
  }

  const ProgressBar = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: progress < 33.33 ? 'green' : progress >= 33.33 && progress <= 66.66 ? 'yellow' : 'red',
    borderRadius: 40,
    textAlign: 'right'
  }

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900
  }

  return (
    <div className={styles.content}>
      <div style={Bar}>
        <div style={ProgressBar}>
        </div>
      </div>
      <span style={progresstext}>{`${progress}`}</span>
    </div>
  )
}

export default ProgressBar;