import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Blog from "./pages/Blog/Blog";
import Post from "./pages/Blog/Post";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>

        <Routes>

          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* AUTENTICAÇÃO */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />

          {/* BLOG */}
          <Route path="/blog" element={<Blog />} />

          {/* POST INDIVIDUAL */}
          <Route path="/blog/:id" element={<Post />} />

        </Routes>

      </Router>
    </ThemeProvider>
  );
}

export default App;