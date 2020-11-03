import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';

const useInstance = () => {
  const dispatch = useDispatch();
  const instance = useSelector(({ instance }) => instance);
  const addInstance = useCallback(() => dispatch(actions.addInstance(), [dispatch]));
  const loadInstances = useCallback(() => dispatch({ type: 'LOAD_INSTANCES'}), [dispatch]);

  const { instances } = instance;

  return {
    instances,
    loadInstances,
    addInstance,
  }
}

export default useInstance;