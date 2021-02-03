import { IonCard, IonContent, IonHeader, IonIcon, IonPage, IonInput,
   IonLabel,IonItem,IonSelect,IonSelectOption,IonCardHeader,IonToolbar, IonButton,IonRadioGroup,IonList,IonTitle } from '@ionic/react';
import React, { useState } from 'react';
import './Worktype.css';
import {business,arrowForward} from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';
import { link } from 'fs';


const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const Home: React.FC = () => {

  let calories = 0;
  let history = useHistory();
  const [state,changeState] = useState(false);
  const [protein,changeProtein] = useState(Number);
  const [carbs,changeCarbs] = useState(Number);
  const [fats,changeFats] = useState(Number);

  let tdee:number;
  
  const setData = (type:string) => {
    console.log("triggered");
    let protein = 0;
    let carbs = 0;
    let fats = 0;
    
    let x = parseFloat(localStorage.getItem("tdee")!);
    if(type === "bulk"){
      x *= 1.2;
      protein = x * 0.25/4;
      protein = Math.round(protein);
      changeProtein(protein);
  
      carbs = x * 0.40/4;
      carbs = Math.round(carbs);
      changeCarbs(carbs);
  
      fats = x * 0.35/9;
      fats = Math.round(fats);
      changeFats(fats);
  
      calories = parseInt(localStorage.getItem("tdee")!) * 1.2
    }
    else if(type === "cut"){
      x *= 0.8;
      protein = x * 0.4 /4;
      protein = Math.round(protein);
      changeProtein(protein);
  
      carbs = x * 0.30/4;
      carbs = Math.round(carbs);
      changeCarbs(carbs);
  
      fats = x * 0.30/9;
      fats = Math.round(fats);
      changeFats(fats);
  
      calories = parseInt(localStorage.getItem("tdee")!) * 0.8;
    }

    tdee = x; 

    localStorage.setItem("protein",protein.toString());
    localStorage.setItem("carbs",carbs.toString());
    localStorage.setItem("fats",fats.toString());
    
    localStorage.setItem("dailyFats","0");
    localStorage.setItem("dailyCarbs","0");
    localStorage.setItem("dailyProteins","0");
    localStorage.setItem("dailyCalories","0");
    localStorage.setItem("caloriesBurned","0");

    changeState(true);
    console.log(x,protein,carbs,fats);
  }

  const proceed = () => {
    localStorage.setItem("tdee",calories.toString());
    //localStorage.setItem("tdee",tdee.toString())
    history.push({
      pathname:"/workout"
    })
  }
  

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <div className="borderstart">
          <div className="startTitle ion-padding-horizontal ion-padding-vertical">
              <h1 className="titleCalc">Important Question</h1>
          </div>
          <div className="parent">
            <div className="worktypecard">
              <div className="inndercarddiv">
                <h1>Are you looking to bulk up or cut down?</h1>
              </div>
            </div>
            <div className="buttons">
              <IonButton expand="block" color="secondary" onClick = {() =>{
                setData("bulk");
              }}>I want to bulk</IonButton>
              <IonButton expand="block" color="secondary" onClick = {() =>{
                setData("cut");
              }}>I want to cut</IonButton>
            </div> {state == true ? 
            <div className="ion-text-center">
              <div className = "statcard">
                <IonItem className = "ion-text-center" lines = "none"> 
                  <IonLabel>{protein}g protein</IonLabel>
                </IonItem>
                <IonItem className = "ion-text-center" lines = "none"> 
                  <IonLabel>{carbs}g carbs</IonLabel>
                </IonItem> 
                <IonItem className = "ion-text-center" lines = "none"> 
                  <IonLabel>{fats}g fats</IonLabel>
                </IonItem>
                <IonButton color="secondary" onClick={proceed} expand="block">Proceed</IonButton>  
              </div>
            </div> : <div></div>} 
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
