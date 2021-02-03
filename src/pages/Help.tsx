import { IonContent, IonHeader, IonInput, IonPage, IonTextarea, IonButton,IonLabel,IonToolbar,IonTitle,IonButtons,IonBackButton,IonCardTitle,IonCardContent } from '@ionic/react';
import React, { useState } from 'react';
import './Help.css';

const Settings: React.FC = () => {

  const [text, setText] = useState<string>();
  const [textArea, setTextArea] = useState<string>();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref="/settings" />
          </IonButtons>
          <IonTitle>Help</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="borderrr">
          <div className="ion-padding-horizontal ion-padding-vertical">
            <h1>Problem</h1>
            <IonInput className="ion-padding-horizontal problem" value={text} placeholder="Enter problem" onIonChange={e => setText(e.detail.value!)}></IonInput>
            <h1>Details</h1>
            <IonTextarea className ="ion-margin-bottom details" rows={5} cols={20} placeholder="Enter more information here..." value={textArea} onIonChange={e => setTextArea(e.detail.value!)}></IonTextarea>
            <div className="ion-padding-vertical">
              <IonButton color="secondary" expand="block">Send Report</IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
