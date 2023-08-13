import React from 'react'
import ReactDOM from 'react-dom/client'
import OriginalStarin from './Starin.tsx'
import { defaultProps } from './Starin.tsx'
import Starin from 'starin'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>Imported from npm</h1>
      <Starin {...defaultProps} />
    </div>
    <hr />
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <h1>Imported from original</h1>
      <OriginalStarin {...defaultProps} />
    </div>
  </React.StrictMode>
)
