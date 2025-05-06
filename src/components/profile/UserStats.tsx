import React from 'react';
import { User, Calendar, Shield, Clock, Car, Users } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import Card, { CardContent, CardHeader } from '../common/Card';
import Avatar from '../common/Avatar';
import ProgressBar from '../common/ProgressBar';
import { User as UserType } from '../../types';

interface UserStatsProps {
  user: UserType;
}

const UserStats: React.FC<UserStatsProps> = ({ user }) => {
  const { t, language } = useLanguage();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(language === 'es' ? 'es-ES' : 'en-US', options);
  };

  const calculateDaysSinceJoined = (dateString: string) => {
    const joinedDate = new Date(dateString);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - joinedDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="flex flex-col items-center py-6">
          <Avatar src={user.avatar} alt={user.name} size="xl" />
          <h2 className="font-bold text-xl mt-3">{user.name}</h2>
          <p className="text-neutral-500">{user.email}</p>
          
          <div className="mt-4 bg-primary-50 text-primary-700 font-medium text-sm py-1 px-3 rounded-full">
            {user.insurancePlan}
          </div>
          
          <div className="w-full mt-6 flex items-center justify-between text-sm">
            <div className="flex items-center">
              <Calendar className="text-neutral-500 h-4 w-4 mr-1" />
              <span className="text-neutral-600">
                {language === 'es' ? 'Se unió el' : 'Joined'} {formatDate(user.joinedDate)}
              </span>
            </div>
            <div className="text-neutral-500">
              {calculateDaysSinceJoined(user.joinedDate)} {language === 'es' ? 'días' : 'days ago'}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <h3 className="font-semibold text-neutral-800">{t('profile.weeklyGoal')}</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Shield className="text-success-500 h-5 w-5 mr-2" />
                <span className="font-medium text-neutral-700">{t('profile.safetyPointsGoal')}</span>
              </div>
              <span className="text-neutral-600">
                {user.weeklyProgress} / {user.weeklyGoal} {t('common.points')}
              </span>
            </div>
            
            <ProgressBar 
              value={user.weeklyProgress} 
              max={user.weeklyGoal} 
              color="success"
              size="md"
              animate={true}
            />
            
            <div className="text-sm text-neutral-500 flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{t('profile.goalReset')}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="font-semibold text-neutral-800">
            {language === 'es' ? 'Vehículos' : 'Vehicles'}
          </h3>
        </CardHeader>
        <CardContent>
          {user.vehicles.length > 0 ? (
            <div className="space-y-3">
              {user.vehicles.map((vehicle) => (
                <div key={vehicle.id} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0">
                  <div className="flex items-center">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Car className="text-primary-600 h-4 w-4" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-neutral-700">{vehicle.brand} {vehicle.model}</p>
                      <p className="text-sm text-neutral-500">{vehicle.licensePlate}</p>
                    </div>
                  </div>
                  <div className="text-xs bg-success-100 text-success-700 py-0.5 px-2 rounded-full">
                    {language === 'es' ? 'Protegido' : 'Protected'}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-neutral-500">
                {language === 'es' ? 'No hay vehículos registrados' : 'No vehicles registered'}
              </p>
              <button className="mt-2 text-sm text-primary-600 font-medium hover:underline">
                {language === 'es' ? 'Agregar un vehículo' : 'Add a vehicle'}
              </button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="font-semibold text-neutral-800">
            {language === 'es' ? 'Beneficiarios' : 'Beneficiaries'}
          </h3>
        </CardHeader>
        <CardContent>
          {user.emergencyContacts.length > 0 ? (
            <div className="space-y-3">
              {user.emergencyContacts.map((contact, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-100 last:border-0">
                  <div className="flex items-center">
                    <div className="bg-primary-100 p-2 rounded-lg">
                      <Users className="text-primary-600 h-4 w-4" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-neutral-700">{contact.name}</p>
                      <p className="text-sm text-neutral-500">{contact.relationship}</p>
                    </div>
                  </div>
                  <div className="text-sm text-neutral-600">
                    {contact.phone}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4">
              <p className="text-neutral-500">
                {language === 'es' ? 'No hay beneficiarios agregados' : 'No beneficiaries added'}
              </p>
              <button className="mt-2 text-sm text-primary-600 font-medium hover:underline">
                {language === 'es' ? 'Agregar un beneficiario' : 'Add a beneficiary'}
              </button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default UserStats;