import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { instance } from './core';
import { Home } from './pages/home';
import middleware from './middleware'

const reducer = combineReducers({ instance: instance.store })
const store = createStore(
    reducer,
    applyMiddleware(...middleware)
  )

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
