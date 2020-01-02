import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducers';
import ColorPicker from './components/ColorPicker';

const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
              <ColorPicker/>
        </Provider>
    );
}

export default App;
