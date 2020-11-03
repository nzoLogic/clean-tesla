import store from './store';
import useInstance from './useInstance'
import * as actions from './actions'

const instance = {
  actions,
  useInstance,
  store,
  NAME: '[instance]'
}

export default instance;
