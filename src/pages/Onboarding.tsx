import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingLayout from '../components/onboarding/OnboardingLayout';
import WelcomeScreen from '../components/onboarding/WelcomeScreen';
import DevicePairingScreen from '../components/onboarding/DevicePairingScreen';
import DataConsentScreen from '../components/onboarding/DataConsentScreen';

const Onboarding: React.FC = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  
  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Onboarding complete, navigate to home
      navigate('/');
    }
  };
  
  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  
  return (
    <OnboardingLayout
      currentStep={step}
      totalSteps={3}
      onNext={handleNext}
      onPrev={handlePrev}
      nextLabel={step === 3 ? 'Get Started' : 'Continue'}
    >
      {step === 1 && <WelcomeScreen />}
      {step === 2 && <DevicePairingScreen />}
      {step === 3 && <DataConsentScreen />}
    </OnboardingLayout>
  );
};

export default Onboarding;