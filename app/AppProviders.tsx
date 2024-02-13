import React from 'react';
import App from './App';
// import LanguageProvider from './store/Language/LanguageProvider';
// import LoginProvider from './store/Authentication/LoginProvider';
// import {ThemeProvider} from './context/ModeContext';

const AppProviders = () => {
  return (
    // <ThemeProvider>
    //   <LoginProvider>
    //     <LanguageProvider>
          <App />
    //      </LanguageProvider>
    //   </LoginProvider>
    // </ThemeProvider> 
  );
};

export default AppProviders;
