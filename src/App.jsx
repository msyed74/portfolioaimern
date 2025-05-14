
    import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import { ThemeProvider } from '@/contexts/ThemeContext.jsx';
    import MainLayout from '@/components/layout/MainLayout.jsx';
    import HomePage from '@/pages/HomePage.jsx';
    import { Toaster } from '@/components/ui/toaster.jsx';

    function App() {
      return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Router>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
              </Route>
            </Routes>
          </Router>
          <Toaster />
        </ThemeProvider>
      );
    }

    export default App;
  