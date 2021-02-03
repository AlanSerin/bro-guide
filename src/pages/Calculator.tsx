import { IonCard, IonContent, IonHeader, IonIcon, IonPage, IonInput,
   IonLabel,IonItem,IonSelect,IonSelectOption,IonAlert,IonCardSubtitle, IonButton,IonRadioGroup,IonListHeader,IonRadio } from '@ionic/react';
import React, { useState } from 'react';
import './Calculator.css';
import {business,arrowForward} from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import { link } from 'fs';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const Home: React.FC = () => {

  let history = useHistory();
  const [age, setAge] = useState<string>();
  const [weight, setWeight] = useState<string>();
  const [height, setHeight] = useState<string>();
  const [activity, setActivity] = useState<string>();
  const [showAlert, setShowAlert] = useState(false);
  //const [bf, setBF] = useState<string>();
  const [selected, setSelected] = useState<string>('male');

  const calculateTDEE = () =>{
    if(age == undefined || weight == undefined || height == undefined || activity == undefined || selected == undefined 
     || age == "" || weight == "" || height == "" || activity == "" || selected == ""){
      setShowAlert(true);
      return;
    }
    let tdee = 0;
    if(selected == "male"){
      console.log("its a male");
      tdee = 66 + (13.7 * parseInt(weight!)) +  (5 * parseInt(height!)) - (6.8 * parseInt(age!));
    }
    else if (selected == "female"){
      console.log("its a female");
      tdee = 655 + (9.6 * parseInt(weight!)) +  (1.8 * parseInt(height!)) - (4.7 * parseInt(age!));
    }

    if(activity == "sedentary"){
      tdee = tdee * 1.2;
      localStorage.setItem("tdee",tdee.toString());
      console.log(tdee);
    }
    else if(activity == "light"){
      tdee = tdee * 1.375;
      localStorage.setItem("tdee",tdee.toString());
      console.log(tdee);
    }
    else if(activity == "moderate"){
      tdee = tdee * 1.55;
      localStorage.setItem("tdee",tdee.toString());
      console.log(tdee);
    }
    else if(activity == "heavy"){
      tdee = tdee * 1.725;
      localStorage.setItem("tdee",tdee.toString());
      console.log(tdee);
    }

    history.push({
      pathname:"/worktype",
      state: { detail: tdee}
    })
  }

  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent fullscreen>
      <div className="borderstart"> 
        <div className="ion-padding-vertical">
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            cssClass='my-custom-class'
            header={'Missing Data'}
            subHeader={''}
            message={'Please fill in all the details to continue'}
            buttons={['OK']}
          />
          <div className="ion-padding-horizontal">
            <h1 className="titleCalc">Give Us Some Details First</h1>
            <p>So we can figure out the best way to move forward</p>
          </div>
            <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
              <IonItem>
                <IonLabel>Gender</IonLabel>
                <IonItem lines="none">
                  <IonLabel>Male</IonLabel>
                  <IonRadio slot="start" value="male" />
                </IonItem>
                <IonItem lines="none">
                  <IonLabel>Female</IonLabel>
                  <IonRadio slot="start" value="female" />
                </IonItem>
              </IonItem>
            </IonRadioGroup>
            <IonItem >
              <IonLabel>Age</IonLabel>
              <IonInput value={age} placeholder="Enter Age" onIonChange={e => setAge(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem >
              <IonLabel>Weight</IonLabel>
              <IonInput value={weight} placeholder="Weight in kg" onIonChange={e => setWeight(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem >
              <IonLabel>Height</IonLabel>
              <IonInput value={height} placeholder="Height in cm" onIonChange={e => setHeight(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem >
              <IonLabel>Activity</IonLabel>
              <IonSelect placeholder="Select Activity" value={activity} okText="Okay" cancelText="Dismiss" onIonChange={e => setActivity(e.detail.value)}>
                <IonSelectOption value="sedentary">Sedentary</IonSelectOption>
                <IonSelectOption value="light">Light Exercise</IonSelectOption>
                <IonSelectOption value="moderate">Moderate Exercise</IonSelectOption>
                <IonSelectOption value="heavy">Heavy Exercise</IonSelectOption>
              </IonSelect>
            </IonItem>
            <div className = "ion-padding-horizontal ion-padding-vertical">
              <IonButton onClick={calculateTDEE} expand="block" color="secondary">Calculate</IonButton>
            </div>
        </div>
      </div>
        
        
      </IonContent>
    </IonPage>
  );
};

{/* <IonCardHeader>
              <IonCardSubtitle>TDEE Calculator</IonCardSubtitle>
            </IonCardHeader>
            <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
              <IonItem lines="none">
                <IonLabel>Gender</IonLabel>
                <IonItem lines="none">
                  <IonLabel>Male</IonLabel>
                  <IonRadio slot="start" value="male" />
                </IonItem>
                <IonItem lines="none">
                  <IonLabel>Female</IonLabel>
                  <IonRadio slot="start" value="female" />
                </IonItem>
              </IonItem>
            </IonRadioGroup>
              <IonItem lines="none">
                <IonLabel>Age</IonLabel>
                <IonInput value={age} placeholder="" onIonChange={e => setAge(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Weight</IonLabel>
                <IonInput value={weight} placeholder="kg" onIonChange={e => setWeight(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Height</IonLabel>
                <IonInput value={height} placeholder="cm" onIonChange={e => setHeight(e.detail.value!)}></IonInput>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Activity</IonLabel>
                <IonSelect value={activity} okText="Okay" cancelText="Dismiss" onIonChange={e => setActivity(e.detail.value)}>
                  <IonSelectOption value="sedentary">Sedentary</IonSelectOption>
                  <IonSelectOption value="light">Light Exercise</IonSelectOption>
                  <IonSelectOption value="moderate">Moderate Exercise</IonSelectOption>
                  <IonSelectOption value="heavy">Heavy Exercise</IonSelectOption>
                </IonSelect>
              </IonItem>
              <IonItem lines="none">
                <IonLabel>Body Fat (Optional)</IonLabel>
                <IonInput value={bf} placeholder="%" onIonChange={e => setBF(e.detail.value!)}></IonInput>
              </IonItem>
              <div className = "ion-padding-horizontal ion-padding-vertical">
                <IonButton onClick={calculateTDEE} expand="block" fill="outline">Calculate</IonButton>
              </div> */}

export default Home;
