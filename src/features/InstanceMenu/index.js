import React, { useEffect, useState } from 'react';
import useInstanceMenu from './useInstanceMenu'

const styles = createStyles();

export const InstanceMenu = () => {
  const { instances, addInstance, initialize } = useInstanceMenu();
  /* 
    below we have component specific view layer logic. Notice we define the functionality inline.
    The purpose behind doing this is encapsulation and separation of concerns. We are deriving some view layer specific state.
  */
  const [ selectedInstanceId, setSelectedInstanceId ] = useState(null);
  
  const isSelected = id => id === selectedInstanceId; 

  useEffect(() => {
    /* initialize instances by fetching them on initial render */
    initialize();
  }, [initialize]);

  return (
    <div style={styles.container}>
      <h3>Instances</h3>
      { instances.map(({ startDay, id}) => (
          <p key={id} style={{
            /* this will be handled in styled components by passing the id through */
            ...(isSelected(id) && {
              ...styles.active
            }),
            ...styles.instance,
          }} onClick={() => setSelectedInstanceId(id)}>{startDay}</p>)
        )
      }
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
    instance: {
      cursor: 'pointer',
    }
  }
}