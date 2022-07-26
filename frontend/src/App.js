import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/chats" element={<ChatPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
