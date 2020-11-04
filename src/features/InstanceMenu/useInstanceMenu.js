import { instance, useCore } from '../../core';

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
  const core = useCore('instance')(null)
  console.log(core)
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