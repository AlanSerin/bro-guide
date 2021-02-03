import { IonContent, IonHeader, IonInput, IonPage, IonSelect, IonItem,IonLabel,IonToolbar,IonTitle,IonButtons,IonBackButton,IonSelectOption,useIonViewWillLeave,IonButton } from '@ionic/react';
import React, { useState } from 'react';
import './Notifications.css';

const Settings: React.FC = () => {
  const [workout, setWorkout] = useState<string>();
  const [tdee, setTdee] = useState<string>();
 
  const changeTdee = () => {
    if(tdee !== localStorage.getItem("tdee") && tdee !== undefined && tdee !== ""){
      localStorage.setItem("tdee",tdee);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref="/settings"/>
          </IonButtons>
          <IonTitle>Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="borderrr">
          <div className="ion-padding-horizontal ion-padding-vertical">
          <IonItem>
            <IonLabel>Workout</IonLabel>
            <IonSelect value={workout} placeholder={localStorage.getItem("WorkoutType")! || "Select Workout"} onIonChange={e => {
              setWorkout(e.detail.value); 
              localStorage.setItem("WorkoutType",e.detail.value);
              localStorage.setItem("day","0");
              }}>
              <IonSelectOption value="ppl">Push Pull Legs</IonSelectOption>
              <IonSelectOption value="5x5">5 x 5</IonSelectOption>
              <IonSelectOption value="brosplits">Bro Splits</IonSelectOption>
              <IonSelectOption value="upperLower">Upper/Lower Splits</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel>TDEE</IonLabel>
            <IonInput value={tdee} placeholder="Enter Input" onIonChange={e => setTdee(e.detail.value!)}></IonInput>
          </IonItem>
          <IonButton onClick={() => changeTdee()} mode="ios" color="secondary" expand="block">Apply Changes</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
