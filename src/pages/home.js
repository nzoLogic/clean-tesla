import { InstanceMenu } from '../features'


const styles = makeStyles();

export const Home = () => (
    <div style={styles.container}>
        <header style={styles.header}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <InstanceMenu />
        </header>
      </div>
)

function makeStyles() {
  return {
    container: {
      textAlign: 'center',
    },
    header: {
      backgroundColor: '#282c34',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 'calc(10px + 2vmin)',
      color: 'white',
    }
  }
}