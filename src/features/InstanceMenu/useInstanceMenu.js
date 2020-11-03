import { useCallback } from 'react';
import { instance } from '../../core';
const { useInstance } = instance;

const useInstanceMenu = () => {
  const { instances, addInstance, loadInstances } = useInstance();

  return {
    instances,
    addInstance,
    initialize: loadInstances
  }
}

export default useInstanceMenu;