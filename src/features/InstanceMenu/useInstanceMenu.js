import { instance } from '../../core';

const { useInstance } = instance;

const useInstanceMenu = () => {
  const {
    instances,
    addInstance,
    loadInstances,
    complete,
    initialized,
    isLoading,
  } = useInstance();

  return {
    instances,
    complete,
    initialized,
    isLoading,
    addInstance,
    initialize: loadInstances
  }
}

export default useInstanceMenu;