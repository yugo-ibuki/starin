import React from 'react'
import ReactDOM from 'react-dom/client'
import Starin, { defaultProps } from './Starin.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Starin {...defaultProps} />
  </React.StrictMode>
)
