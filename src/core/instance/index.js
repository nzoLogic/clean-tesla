import store from './store';
import useInstance from './hooks'
import * as actions from './actions'

const instance = {
  actions,
  useInstance,
  store,
  NAME: '[instance]'
}

export default instance;
