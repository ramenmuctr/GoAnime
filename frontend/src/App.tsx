import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Home.tsx';
import Anime from './pages/Anime';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Main />} />
                <Route path="/anime/:id" element={<Anime />} />
                <Route path="*" element={<Login />} /> {/* Любой другой путь → Login */}
            </Routes>
        </Router>
    );
}

export default App;
