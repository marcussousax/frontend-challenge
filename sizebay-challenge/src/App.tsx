import React from 'react'

import Modal from './components/Modal'
import Header from './components/Header'
import List from './components/List'
import ProgressBar from './components/ProgressBar'

function App() {
  return (
    <Modal>
      <Header />
      <ProgressBar value={30} />
      <List />
    </Modal>
  )
}

export default App
