import { IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonButton,IonLabel,IonToolbar,IonTitle,IonButtons,IonBackButton ,IonCardTitle,IonCardContent } from '@ionic/react';
import React, { useState } from 'react';
import './Suggestions.css';

const Settings: React.FC = () => {

  const [textArea, setTextArea] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref="/settings" />
          </IonButtons>
          <IonTitle>Suggestions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="borderrr">
          <div className="ion-padding-horizontal ion-padding-vertical">
            <h1>Help Us Improve</h1>
            <IonTextarea className ="ion-margin-bottom textarea" rows={5} cols={20} placeholder="Enter more information here..." value={textArea} onIonChange={e => setTextArea(e.detail.value!)}></IonTextarea>
            <div className="ion-padding-vertical">
              <IonButton color="secondary" expand="block">Send Suggestion</IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
