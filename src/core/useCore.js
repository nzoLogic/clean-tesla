import instance from './instance'
import api from './api';

const core = {
  instance: {
    ...instance,
  },
  api: {
    ...api
  }
}

const store = {
  instanceStore: {
    actions: {
      INSTANCE_ACTION: 'INSTANCE_ACTION'
    },
    reducer: () => ({
      type: 'INSTANCE_ACTION_TYPE'
    }),
  },
  apiStore: {
    actions: {
      API_REQUEST: 'API_REQUEST',
    },
    reducer: () => ({
      type: 'API_ACTION_TYPE'
    })
  }
}
const useCore = entity => withStore => {
  const entityExists = entityDoesExist(entity)(core);

  if (entityExists) {

    return {
      ...core[entity],
      ...(withStore ? getEntityStore(entity)(store) : {})
    }
  }
}

export default useCore;

function entityDoesExist(entity) {
  return function(core) {
    return core[entity] !== undefined;
  }
}

function getEntityStore(entity) {
  const key = `${entity}Store`
  return function(store) {
    return store[key]
  }
}