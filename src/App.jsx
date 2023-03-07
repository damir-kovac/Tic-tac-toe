import { Route, Routes } from "react-router-dom";
import Board from "./pages/Board";
import LoginPage from "./pages/LoginPage";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Board" element={<Board />} />
        </Routes>
    );
}

export default App;
