import React, { ReactNode } from 'react';
import { Umbrella, ArrowLeft, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

interface OnboardingLayoutProps {
  children: ReactNode;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  isNextDisabled?: boolean;
  nextLabel?: string;
}

const OnboardingLayout: React.FC<OnboardingLayoutProps> = ({
  children,
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  isNextDisabled = false,
  nextLabel = 'Continue',
}) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="p-4 flex items-center justify-between border-b border-neutral-100">
        <div className="flex items-center space-x-2">
          <Umbrella className="text-primary-600 h-6 w-6" />
          <span className="font-bold text-lg text-primary-600">Mi Sombrita</span>
        </div>
        <div className="text-sm text-neutral-500">
          Step {currentStep} of {totalSteps}
        </div>
      </header>
      
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8 max-w-md">
          {children}
        </div>
      </main>
      
      <div className="container mx-auto px-4 py-4 max-w-md">
        {/* Progress bar */}
        <div className="h-1.5 bg-neutral-200 rounded-full mb-6 overflow-hidden">
          <div 
            className="h-full bg-primary-600 transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between">
          {currentStep > 1 ? (
            <Button 
              variant="outline" 
              onClick={onPrev}
              icon={<ArrowLeft size={16} />}
            >
              Back
            </Button>
          ) : (
            <div></div> // Empty div to keep the layout balanced
          )}
          
          <Button 
            onClick={onNext} 
            disabled={isNextDisabled}
            className="gap-1"
          >
            {nextLabel}
            {nextLabel === 'Continue' && <ArrowRight size={16} />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;