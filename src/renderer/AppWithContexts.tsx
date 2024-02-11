import App from './App';
import { AppContextProvider } from './contexts/AppContext';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function AppWithContexts() {
  return (
    <AppContextProvider>
      <App />
    </AppContextProvider>
  );
}

export default AppWithContexts;
