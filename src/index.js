/* eslint-disable no-unused-vars */
import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import App from './App'

const rootElement = document.getElementById('root')

createRoot(rootElement).render(<App />)
