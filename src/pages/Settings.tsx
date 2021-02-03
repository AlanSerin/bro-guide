import { IonContent, IonHeader, IonIcon, IonPage, IonList, IonItem,IonLabel,IonToolbar,IonTitle } from '@ionic/react';
import React from 'react';
import './Settings.css';
import {person,notifications,helpBuoy,bug,chevronForward,handLeft} from 'ionicons/icons';
import { Link } from 'react-router-dom';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const Settings: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="borderrr">
          <div className="ion-padding-horizontal ion-padding-vertical">
            <IonItem routerLink="/settings/account">
              <IonIcon class="icon" icon={person} slot="start" />
              <IonLabel>Account</IonLabel>
            </IonItem>
            <IonItem routerLink="/settings/notifications">
              <IonIcon class="icon" icon={notifications} slot="start" />
              <IonLabel>Notifications</IonLabel>
            </IonItem>
            <IonItem routerLink="/settings/suggestions">
              <IonIcon class="icon" icon={handLeft} slot="start" />
              <IonLabel>Suggestions</IonLabel>
            </IonItem>
            <IonItem routerLink="/settings/help">
              <IonIcon class="icon" icon={helpBuoy} slot="start" />
              <IonLabel>Help</IonLabel>
            </IonItem>
            <IonItem routerLink="/settings/report">
              <IonIcon class="icon" icon={bug} slot="start" />
              <IonLabel>Bug Report</IonLabel>
            </IonItem>
          </div>

          <div className="footer">
            <p>Made by Alan Serin. All rights reserved.</p>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
