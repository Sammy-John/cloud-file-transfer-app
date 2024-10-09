import React from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import FileHistory from './components/FileHistory';

function App() {
  return (
    <div className="App">
      <h1>Cloud File Transfer</h1>
      <FileUpload />
      <FileHistory />
    </div>
  );
}

export default App;
