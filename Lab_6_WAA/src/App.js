import React from 'react';
import Posts from './Posts';
import Comments from './Comments';
import { DataProvider } from './context'; // Import the context provider

function App() {
  return (
    <DataProvider>
      <div>
        <h1>Welcome to Selam's App</h1>
        <Posts /> {/* Render the Posts component */}
        <Comments /> {/* Render the Comments component */}
      </div>
    </DataProvider>
  );
}

export default App;
