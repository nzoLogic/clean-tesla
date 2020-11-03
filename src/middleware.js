import logger from 'redux-logger';
import api from './core/api';
import instance from './core/instance';
import features from './features';
const { ADD_INSTANCE } = instance.actions;
const { API_REQUEST, apiRequest } = api.actions;

const instanceMiddleWare = ({ dispatch }) => next => action => {
  /* log the action before continuing */
  next(action);

  if (action.type === ADD_INSTANCE) {
    console.log('hey dispatching add instance');
    dispatch(apiRequest({
      payload: {},
      meta: {
        path: '/instances',
        entity: 'instance',
        method: 'POST',
        onSuccess: () => dispatch({ type: 'ADD_INSTANCE_SUCCESS'}),
        onError: () => console.log('error')
      },
    }));
  }


  if (action.type === 'LOAD_INSTANCES') {
    dispatch(apiRequest({
      meta: {
        path: '/instances',
        method: 'GET',
        entity: ''
      }
    }))
  }
}

const apiMiddleWare = ({ dispatch }) => next => action => {
  next();
  
  if( action.type.includes(API_REQUEST) ) {
    const { meta } = action.payload;

    setTimeout(() => {
      meta.onSuccess()
    }, 2000)
  }
}
const middleware = [
  instanceMiddleWare,
  logger,
]

export default middleware