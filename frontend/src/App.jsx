import React from 'react'
import { Routes, Route } from 'react-router'
import { Toaster } from 'react-hot-toast'

import HomePage from './Pages/HomePage'
import CreatePage from './Pages/CreatePage'
import NoteDetailPage from './Pages/NoteDetailPage'

const App = () => {
  return (
    <div data-theme="nord" className="min-h-screen bg-base-200">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            fontFamily: "'Nunito', sans-serif",
            fontSize: '14px',
            borderRadius: '8px',
          },
        }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  );
}

export default App
