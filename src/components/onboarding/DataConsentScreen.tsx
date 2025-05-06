import React, { useState } from 'react';
import { Shield, Check } from 'lucide-react';

const DataConsentScreen: React.FC = () => {
  const [consentItems, setConsentItems] = useState({
    healthData: false,
    locationData: false,
    shareSummary: false,
  });
  
  const handleConsentChange = (key: keyof typeof consentItems) => {
    setConsentItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  const allConsentsGiven = consentItems.healthData && consentItems.locationData;

  return (
    <div>
      <div className="text-center mb-8">
        <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <Shield className="text-primary-600 h-8 w-8" />
        </div>
        
        <h1 className="text-2xl font-bold text-neutral-900 mb-3">Data Privacy & Consent</h1>
        <p className="text-neutral-600">
          We take your privacy seriously. Please review and consent to how we use your data.
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5 mb-8">
        <div className="space-y-5">
          <div 
            className={`p-4 rounded-lg border ${
              consentItems.healthData 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-neutral-200'
            }`}
          >
            <div className="flex items-start">
              <label 
                htmlFor="healthData" 
                className="flex items-center cursor-pointer flex-1"
              >
                <input
                  type="checkbox"
                  id="healthData"
                  className="rounded text-primary-600 focus:ring-primary-500 h-5 w-5 mr-3"
                  checked={consentItems.healthData}
                  onChange={() => handleConsentChange('healthData')}
                />
                <div>
                  <p className="font-medium text-neutral-800 mb-1">Health Data Collection</p>
                  <p className="text-sm text-neutral-600">
                    We collect heart rate, steps, and activity data from your wearable device to provide preventive safety alerts.
                  </p>
                </div>
              </label>
            </div>
          </div>
          
          <div 
            className={`p-4 rounded-lg border ${
              consentItems.locationData 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-neutral-200'
            }`}
          >
            <div className="flex items-start">
              <label 
                htmlFor="locationData" 
                className="flex items-center cursor-pointer flex-1"
              >
                <input
                  type="checkbox"
                  id="locationData"
                  className="rounded text-primary-600 focus:ring-primary-500 h-5 w-5 mr-3"
                  checked={consentItems.locationData}
                  onChange={() => handleConsentChange('locationData')}
                />
                <div>
                  <p className="font-medium text-neutral-800 mb-1">Location Data Usage</p>
                  <p className="text-sm text-neutral-600">
                    We use your location to identify risk areas and provide real-time safety recommendations.
                  </p>
                </div>
              </label>
            </div>
          </div>
          
          <div 
            className={`p-4 rounded-lg border ${
              consentItems.shareSummary 
                ? 'border-primary-500 bg-primary-50' 
                : 'border-neutral-200'
            }`}
          >
            <div className="flex items-start">
              <label 
                htmlFor="shareSummary" 
                className="flex items-center cursor-pointer flex-1"
              >
                <input
                  type="checkbox"
                  id="shareSummary"
                  className="rounded text-primary-600 focus:ring-primary-500 h-5 w-5 mr-3"
                  checked={consentItems.shareSummary}
                  onChange={() => handleConsentChange('shareSummary')}
                />
                <div>
                  <p className="font-medium text-neutral-800 mb-1">Anonymous Data Sharing (Optional)</p>
                  <p className="text-sm text-neutral-600">
                    Help us improve our service by sharing anonymized summary data.
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      {allConsentsGiven && (
        <div className="bg-success-50 border border-success-200 rounded-lg p-4 flex items-center mb-6">
          <Check className="text-success-600 h-5 w-5 mr-2 flex-shrink-0" />
          <p className="text-sm text-success-800">
            Thank you! You've provided the necessary consents to use Mi Sombrita.
          </p>
        </div>
      )}
      
      <p className="text-sm text-neutral-500 text-center">
        You can change these privacy settings at any time in your profile.
      </p>
    </div>
  );
};

export default DataConsentScreen;