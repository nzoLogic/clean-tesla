import React, { useEffect, useState } from 'react';
import useInstanceMenu from './useInstanceMenu'
import { showIf, hideIf } from '../../shared/helper.js';

const styles = createStyles();

export const InstanceMenu = () => {
  const {
    instances,
    addInstance,
    initialize,
    initialized,
    isLoading,
    failed,
    error
  } = useInstanceMenu();
  /* 
    below we have component specific view layer logic. Notice we define the functionality inline.
    The purpose behind doing this is encapsulation and separation of concerns. We are deriving some view layer specific state.
  */
  const [ selectedInstanceId, setSelectedInstanceId ] = useState(null);
  
  const isSelected = id => id === selectedInstanceId; 

  useEffect(() => {
    /* initialize instances by fetching them on initial render */
    initialize();
  }, []);

  return (
    <div style={styles.container}>
      <h3>Instances</h3>
      <div style={styles.section}>

      { showIf(isLoading)(() => <h3>Loading...</h3>) }
      { hideIf(isLoading)(() => (
          instances.map(({ startDay, id}) => (
            <div style={styles.card}>
              <p key={id} style={{
                /* this will be handled in styled components by passing the id through */
                ...(isSelected(id) && {
                  ...styles.active
                }),
                ...styles.instance,
              }} onClick={() => setSelectedInstanceId(id)}>
                {startDay}
              </p>
            </div>
            )
          )
        ))
      }
      </div>
      <div>
        <button onClick={addInstance}>Add Instance</button>
      </div>
    </div>
  )
}

/* this is simply for POC simplicity. We will use styled components */
function createStyles() {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '100%'
    },
    active: {
      outline: '1px solid white'
    },
    section: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',

    },
    instance: {
      cursor: 'pointer',
    },
    card: {
      width: '240px',
      backgroundColor: '#fff',
      color: '#000',
      margin: '8px'
    }
  }
}