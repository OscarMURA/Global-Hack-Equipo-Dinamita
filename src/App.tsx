import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/common/Navbar';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Rewards from './pages/Rewards';
import Leaderboard from './pages/Leaderboard';
import Profile from './pages/Profile';
import Safety from './pages/Safety';
import Insurance from './pages/Insurance';
import Vehicles from './pages/Vehicles';
import EmergencyButton from './components/common/EmergencyButton';

function App() {
  // For demo purposes, we're showing the app as if onboarding is completed
  const onboardingCompleted = false;

  return (
    <LanguageProvider>
      <UserProvider>
        <Router>
          <div className="min-h-screen bg-neutral-50">
            <Routes>
              <Route 
                path="/onboarding" 
                element={onboardingCompleted ? <Navigate to="/" /> : <Onboarding />} 
              />
              <Route
                path="/*"
                element={
                  onboardingCompleted ? (
                    <Navigate to="/onboarding" />
                  ) : (
                    <>
                      <Navbar />
                      <main className="lg:pl-64 pt-14 pb-20 lg:pt-0 lg:pb-0 min-h-screen">
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/rewards" element={<Rewards />} />
                          <Route path="/leaderboard" element={<Leaderboard />} />
                          <Route path="/profile" element={<Profile />} />
                          <Route path="/safety" element={<Safety />} />
                          <Route path="/insurance" element={<Insurance />} />
                          <Route path="/vehicles" element={<Vehicles />} />
                        </Routes>
                      </main>
                      <EmergencyButton onRequestHelp={() => console.log('Emergency help requested')} />
                    </>
                  )
                }
              />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </LanguageProvider>
  );
}

export default App;