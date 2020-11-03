import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';

const useInstance = () => {
  const dispatch = useDispatch();
  const {
    instances,
    initialized,
    isLoading,
    complete,
    failed,
    error
  } = useSelector(({ instance }) => instance);

  const addInstance = useCallback(() => dispatch(actions.addInstance(), [dispatch]));
  const loadInstances = useCallback(() => dispatch(actions.loadInstances(), [dispatch]));

  return {
    instances,
    initialized,
    isLoading,
    complete,
    error,
    failed,
    loadInstances,
    addInstance,
  }
}

export default useInstance;