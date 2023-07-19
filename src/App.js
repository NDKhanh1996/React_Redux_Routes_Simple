import './App.css';
import Navbar from './components/AppBar'
import Card from './components/PostList'
import Form from './components/Form'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function Home() {
    return (
        <>
            <Navbar/>
            <Card/>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/add" element={<Form/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
