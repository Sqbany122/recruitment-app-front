import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import AddUsers from './components/AddUsers';
import UsersList from './components/UsersList';
import Navigation from './components/Navigation';


const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users-list" element={<UsersList />} />
          <Route path="/add-users" element={<AddUsers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
