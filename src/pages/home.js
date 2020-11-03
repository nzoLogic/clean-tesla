import { InstanceMenu } from '../features'


const styles = makeStyles();

export const Home = () => (
    <div style={styles.container}>
        <header style={styles.header}>
          <h1>
            Clean Tesla POC
          </h1>
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