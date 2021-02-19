import React from 'react';
import MainPage from './pages/main-page/MainPage';
import HeaderComponent from './views/header/HeaderComponent';
import { TailwindThemeProvider } from 'tailwind-react-ui'


function App() {
  return (
    <TailwindThemeProvider
    theme={{
      brandColors: {
        primary: 'red',
      },
    }} >
    <HeaderComponent/>
    <MainPage/>
   
    </TailwindThemeProvider>
  );
}

export default App;
