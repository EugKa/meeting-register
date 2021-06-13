import React from 'react';
import { IonApp, IonContent, IonSpinner } from '@ionic/react';

import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { DatePicker, TimePicker, Specialists, MeetSelect, DisplayMessage } from './components';
import { useAppSelector } from './store/hooks';

const App: React.FC = () => {
  const status = useAppSelector((state) => state.specialistsSclice.status);
  const ErrorBannerElement = status === 'failed' ? <DisplayMessage type="danger" message="Что то пошло не так. Пожалуйста попробуйте позже"/> : null;
  return (
    <IonApp>
      <IonContent>
        {ErrorBannerElement}
        {status === 'pending' ? (
          <div style={{textAlign: 'center'}}>
            <IonSpinner name="circles"/>
          </div>
        ) : (
          <React.Fragment>
            <Specialists/>
            <DatePicker/>
            <TimePicker/>
            <MeetSelect/>
          </React.Fragment>
        )}
        
      </IonContent>
    </IonApp>
  )
};

export default App;
