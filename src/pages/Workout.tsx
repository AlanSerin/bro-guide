import { IonCard, IonContent, IonHeader, IonIcon, IonPage, IonInput,
   IonLabel,IonItem,IonSelect,IonSelectOption,IonCardHeader,IonCardSubtitle, IonButton,IonRadioGroup,IonListHeader,IonRadio } from '@ionic/react';
import React, { useState } from 'react';
import './Workout.css';
import {business,arrowForward,pin, wifi, wine, warning, walk} from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import { link } from 'fs';
const Home: React.FC = () => {

  let history = useHistory();

  let tdee;
  
  const setData = (name:string,value:string) => {
      localStorage.setItem(name,value);
      localStorage.setItem("firsttime","0");
      proceed();
  }

  const proceed = () => {
    history.push({
      pathname:"/"
    })
  }

  

  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent fullscreen>
      <div className="borderstart"> 
        <div className="ion-text-center ion-padding-vertical">
            <h1>Select Workout</h1>
            <div className="workoutcard">
              <IonItem onClick = {() => {setData("WorkoutType","ppl")}} lines="none">
                <IonIcon className="workouticon" icon={wifi} slot="start" />
                <IonLabel>Push Pull Leg</IonLabel>
              </IonItem>
            </div>
            <div className="workoutcard">
              <IonItem onClick = {() => {setData("WorkoutType","5x5")}} lines="none">
                <IonIcon className="workouticon" icon={wine} slot="start"/>
                <IonLabel>5x5 Workout</IonLabel>
              </IonItem>
            </div>  
            <div className="workoutcard">
              <IonItem onClick = {() => {setData("WorkoutType","brosplits")}} lines="none">
                <IonIcon className="workouticon" icon={warning} slot="start" />
                <IonLabel>Bro Splits</IonLabel>
              </IonItem>
            </div>
            <div className="workoutcard">
              <IonItem onClick = {() => {setData("WorkoutType","upperlower")}} lines="none">
                <IonIcon className="workouticon" icon={walk} slot="start" />
                <IonLabel>Upper/Lower Splits</IonLabel>
              </IonItem>
            </div>
          </div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
