import { IonContent, IonHeader, IonInput, IonPage, IonToggle, IonItem,IonLabel,IonToolbar,IonTitle,IonButtons,IonBackButton,IonCardTitle,IonCardContent } from '@ionic/react';
import React, { useState } from 'react';
import './Notifications.css';

const Settings: React.FC = () => {
  const [allowed, setAllowed] = useState(false);
  const [sounds, setSounds] = useState(false);
  const [lockscreen, setLockscreen] = useState(false);
  const [history, setHistory] = useState(false);
  const [vibrations, setVibrations] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref="/settings" />
          </IonButtons>
          <IonTitle>Notifications</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="borderrr">
          <div className="ion-padding-horizontal ion-padding-vertical">
            <IonItem>
              <IonLabel>Allow Notifications</IonLabel>
              <IonToggle color="secondary" checked={allowed} onIonChange={e => setAllowed(e.detail.checked)} />
            </IonItem>
            <IonItem>
              <IonLabel>Vibrations</IonLabel>
              <IonToggle color="secondary" checked={vibrations} onIonChange={e => setVibrations(e.detail.checked)} />
            </IonItem>
            <IonItem>
              <IonLabel>Sounds</IonLabel>
              <IonToggle color="secondary" checked={sounds} onIonChange={e => setSounds(e.detail.checked)} />
            </IonItem>
            <IonItem>
              <IonLabel>Show On Lockscreen</IonLabel>
              <IonToggle color="secondary" checked={lockscreen} onIonChange={e => setLockscreen(e.detail.checked)} />
            </IonItem>
            <IonItem>
              <IonLabel>Show in History</IonLabel>
              <IonToggle color="secondary" checked={history} onIonChange={e => setHistory(e.detail.checked)} />
            </IonItem>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
