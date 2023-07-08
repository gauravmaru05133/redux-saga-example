import React from 'react';
import { Routes } from './src/navigation/Routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';

export const App = ()=>{
  return (
    <SafeAreaProvider>
      <Provider store={store}>
      <Routes/>
      </Provider>
    </SafeAreaProvider>
    
  )
}



export default App;
