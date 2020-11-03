import logger from 'redux-logger';
import api from './core/api';
import instance from './core/instance';
import { LOAD_INSTANCES } from './core/instance/actions';

const { INSTANCE, ADD_INSTANCE, addInstanceSuccess, setInstanceLoading } = instance.actions;
const { API_REQUEST, apiRequest } = api.actions;


/**
 * This is an example of one way we can perform api calls.
 * 
 * This approach leverages middleware that listens to events happening in our application
 * and can perform api calls in a clean and decoupled way.
 */

const instanceMiddleWare = ({ dispatch }) => next => action => {
  /* log the action before continuing */
  next(action);

  if (action.type === ADD_INSTANCE) {
    dispatch(apiRequest({
      payload: {},
      meta: {
        path: '/instances',
        entity: INSTANCE,
        method: 'POST',
      },
    }));
    /* mocking a network request */
    setTimeout(() => {
      dispatch(addInstanceSuccess({
        ...action.payload
      }))
    }, 3000);
  }


  if (action.type === LOAD_INSTANCES) {
    /*
      Here we are listening for LOAD_INSTANCES event
      We can then determine if we need to send a request or
      simply access the store/cache.
    */
    dispatch(setInstanceLoading(true));
    setTimeout(() => dispatch(setInstanceLoading(false)), 2000)
  }
}

const apiMiddleWare = ({ dispatch }) => next => action => {
  next();
  
  if( action.type.includes(API_REQUEST) ) {
    const { meta } = action.payload;

    setTimeout(() => {
      console.log('meta apia ', meta)
      // meta.onSuccess()
    }, 2000)
  }
}
const middleware = [
  instanceMiddleWare,
  logger,
]

export default middleware