import React from 'react'
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,.75)',
    color: '#fff',
    zIndex: 400
  }
}
const Button = () => {
  return (
    <div style={styles.container}>
      <div>
        <h2>Button</h2>
      </div>
    </div>
  )
}

export default Button