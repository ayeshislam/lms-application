import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { AuthProvider } from "./context/AuthContext";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import theme from "./theme";

function AppContent() {
  const location = useLocation();

  const noFooterPaths = ["/adminlogin", "/quizzes", "/lectures"];

  return (
    <>
      <Navbar />
      <AppRoutes />

      {!noFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
