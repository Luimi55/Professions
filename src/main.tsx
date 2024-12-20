import { createRoot } from 'react-dom/client'
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from "@react-oauth/google"
import {Provider} from 'react-redux';
import { Store } from './redux/Store.tsx';

createRoot(document.getElementById('root')!).render(
  <Provider store={Store}>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_AUTH_API_KEY}>

      <FluentProvider theme={webLightTheme}>
          <App />
      </FluentProvider>
    </GoogleOAuthProvider>
  </Provider>

)
