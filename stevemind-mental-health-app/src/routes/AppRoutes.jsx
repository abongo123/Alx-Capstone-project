import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../components/Dashboard";
import Resources from "../components/Resources";
import BookSession from "../components/BookSession";
import ChatSupport from "../components/ChatSupport";
import PrivateDiary from "../components/PrivateDiary";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/book-session" element={<BookSession />} />
        <Route path="/chat-support" element={<ChatSupport />} />
        <Route path="/private-diary" element={<PrivateDiary />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
