import React from 'react'

import Modal from './components/Modal'
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <Modal>
      <Header />
      <ProgressBar value={30} />
    </Modal>
  )
}

export default App
