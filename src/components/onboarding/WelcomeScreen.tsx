import React from 'react';
import { ShieldCheck, Heart, MapPin } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  return (
    <div className="text-center">
      <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
        <ShieldCheck className="text-primary-600 h-8 w-8" />
      </div>
      
      <h1 className="text-2xl font-bold text-neutral-900 mb-3">Welcome to Mi Sombrita</h1>
      <p className="text-neutral-600 mb-8">
        We protect you <span className="font-semibold text-primary-600">before</span> the accident happens.
      </p>
      
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5 mb-8">
        <h2 className="text-lg font-semibold text-neutral-800 mb-4">How it works:</h2>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-primary-50 p-2 rounded-lg mr-3 flex-shrink-0">
              <Heart className="text-primary-600 h-5 w-5" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-neutral-800">Health Monitoring</h3>
              <p className="text-sm text-neutral-600 mt-1">
                We connect to your wearable device to monitor your health in real-time.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-success-50 p-2 rounded-lg mr-3 flex-shrink-0">
              <MapPin className="text-success-600 h-5 w-5" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-neutral-800">Location Safety</h3>
              <p className="text-sm text-neutral-600 mt-1">
                We analyze your location to alert you about potentially risky areas.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-warning-50 p-2 rounded-lg mr-3 flex-shrink-0">
              <ShieldCheck className="text-warning-600 h-5 w-5" />
            </div>
            <div className="text-left">
              <h3 className="font-medium text-neutral-800">Preventive Protection</h3>
              <p className="text-sm text-neutral-600 mt-1">
                Earn rewards for safe behavior and get real-time alerts when we detect risks.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-neutral-500">
        Let's set up your protection in just a few steps.
      </p>
    </div>
  );
};

export default WelcomeScreen;