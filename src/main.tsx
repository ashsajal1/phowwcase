import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { SearchProvider } from './context/searchContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme accentColor='pink'>
      <SearchProvider>
        <App />
      </SearchProvider>
    </Theme>
  </React.StrictMode>,
)
