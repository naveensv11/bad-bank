import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Register from './register';
import Deposit from './deposit';
import Cashback from './cashback';
import Alldata from './alldata';
import { UserProvider } from './context'; 
function App() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">YOURS BANK</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#register">REGISTER</Nav.Link>
                        <Nav.Link href="#deposit">DEPOSIT</Nav.Link>
                        <Nav.Link href="#cashback">CASHBACK</Nav.Link>
                        <Nav.Link href="#alldata">ALL-DATA</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <HashRouter>
                <UserProvider>
                    <Routes>
                        <Route path='/register' element={<Register />} />
                        <Route path='/deposit' element={<Deposit />} />
                        <Route path='/cashback' element={<Cashback />} />
                        <Route path='/alldata' element={<Alldata />} />
                    </Routes>
                </UserProvider>
            </HashRouter>
        </>
    );
}
export default App;