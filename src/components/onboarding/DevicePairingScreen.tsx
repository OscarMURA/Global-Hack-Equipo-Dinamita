import React, { useState } from 'react';
import { SmartphoneNfc, Check, Smartphone } from 'lucide-react';
import Button from '../common/Button';

const DevicePairingScreen: React.FC = () => {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [isPairing, setIsPairing] = useState(false);
  const [isPaired, setIsPaired] = useState(false);
  
  const devices = [
    { id: 'miband', name: 'Mi Band', icon: '🔴' },
    { id: 'applewatch', name: 'Apple Watch', icon: '⌚' },
    { id: 'fitbit', name: 'Fitbit', icon: '📱' },
    { id: 'garmin', name: 'Garmin', icon: '⌚' },
  ];
  
  const handlePairDevice = () => {
    if (!selectedDevice) return;
    
    setIsPairing(true);
    
    // Simulate pairing process
    setTimeout(() => {
      setIsPairing(false);
      setIsPaired(true);
    }, 2000);
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <SmartphoneNfc className="text-primary-600 h-8 w-8" />
        </div>
        
        <h1 className="text-2xl font-bold text-neutral-900 mb-3">Connect Your Device</h1>
        <p className="text-neutral-600">
          We need to connect to your wearable device to monitor your health metrics.
        </p>
      </div>
      
      {!isPaired ? (
        <>
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5 mb-6">
            <h2 className="text-lg font-semibold text-neutral-800 mb-4">Select your device:</h2>
            
            <div className="space-y-3">
              {devices.map((device) => (
                <div 
                  key={device.id}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors
                    ${selectedDevice === device.id 
                      ? 'border-primary-500 bg-primary-50' 
                      : 'border-neutral-200 hover:border-primary-300'}`}
                  onClick={() => setSelectedDevice(device.id)}
                >
                  <div className="flex-shrink-0 mr-3 text-xl">{device.icon}</div>
                  <span className="font-medium">{device.name}</span>
                  {selectedDevice === device.id && (
                    <Check className="ml-auto text-primary-600 h-5 w-5" />
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <Button 
              variant={selectedDevice ? 'primary' : 'outline'} 
              fullWidth
              disabled={!selectedDevice || isPairing}
              onClick={handlePairDevice}
            >
              {isPairing ? 'Pairing...' : 'Pair Device'}
            </Button>
          </div>
          
          <p className="text-sm text-neutral-500 text-center">
            Don't have a wearable device? You can still use the app with limited functionality.
          </p>
        </>
      ) : (
        <div className="text-center">
          <div className="bg-success-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Check className="text-success-600 h-10 w-10" />
          </div>
          
          <h2 className="text-xl font-bold text-neutral-900 mb-2">Device Connected!</h2>
          <p className="text-neutral-600 mb-6">
            Your wearable device has been successfully paired with Mi Sombrita.
          </p>
          
          <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-5 mb-6">
            <div className="flex items-center">
              <div className="bg-primary-100 p-3 rounded-lg mr-4">
                <Smartphone className="text-primary-600 h-6 w-6" />
              </div>
              <div className="text-left">
                <h3 className="font-medium text-neutral-800">Mi Band</h3>
                <p className="text-sm text-neutral-500">Connected and syncing</p>
              </div>
              <div className="ml-auto">
                <span className="bg-success-100 text-success-800 text-xs px-2 py-1 rounded-full">
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DevicePairingScreen;