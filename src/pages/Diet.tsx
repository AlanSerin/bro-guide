import { IonContent, IonHeader, IonCard, IonPage, IonToolbar, IonTitle,IonProgressBar, IonButton,IonIcon,useIonViewWillEnter,IonButtons,IonBackButton } from '@ionic/react';
import React from 'react';
import './Diet.css';
import {business,arrowForward,informationCircleOutline} from 'ionicons/icons';
import { Link } from 'react-router-dom';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const Diet: React.FC = () => {

  // const getData = async (id: any) => {
  //   const result = await Axios.get(`https://api.spoonacular.com/food/ingredients/${id}/information?apiKey=7900b26e638443b5851b4c38f0f2e2e2&amount=1`);
  //   console.log(result);
  // }

  useIonViewWillEnter(() => {
    let date = new Date().getDate();
    console.log(`current date: ${date}`);
    if(date > parseInt(localStorage.getItem("currentDate")!) || localStorage.getItem("currentDate") == undefined){
      localStorage.setItem("dailyFats","0");
      localStorage.setItem("dailyCarbs","0");
      localStorage.setItem("dailyProteins","0");
      localStorage.setItem("dailyCalories","0");
      localStorage.setItem("caloriesBurned","0");
      localStorage.setItem("currentDate",date.toString());
    }
    if(localStorage.getItem("canWorkout") !== "false"){
      localStorage.setItem("caloriesBurned","0");
    }
  });

  return (
    <IonPage>
      <IonHeader collapse="condense" mode="ios">
        <IonToolbar className = "ion-text-start">
          <IonTitle>Diet</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="borderr">
          <div className="dflex ion-justify-content-between">
            <h1 className="ion-padding-horizontal"><strong>Daily Calories</strong></h1>
            <IonIcon className="ion-padding-vertical ion-padding-horizontal info" icon={informationCircleOutline} />
          </div>
          <IonCard className="caloriecard">
            <div className="dflex ion-justify-content-between">
              <div className="ion-padding-horizontal ion-padding-vertical">
                <h2><strong>{localStorage.getItem("dailyCalories")}</strong></h2>
                <p>Eaten</p>
                <h2><strong>{localStorage.getItem("caloriesBurned")}</strong></h2>
                <p>Burned</p>
              </div>
              <div className="ion-padding-horizontal ion-padding-vertical">
                <h1 className="ion-text-center"><strong>{parseInt(localStorage.getItem("tdee")!) - parseInt(localStorage.getItem("dailyCalories")!) + parseInt(localStorage.getItem("caloriesBurned")!)}</strong></h1>
                <h3>calories left</h3>
                <IonProgressBar value={parseFloat((Math.round(((parseInt(localStorage.getItem("dailyCalories")!)-parseInt(localStorage.getItem("caloriesBurned")!))/parseInt(localStorage.getItem("tdee")!)) * 100) / 100).toFixed(2))}></IonProgressBar><br />
              </div>
            </div>
          </IonCard>
          <div className="dflex ion-justify-content-between">
            <h1 className="ion-padding-horizontal"><strong>Macros</strong></h1>
            <IonIcon className="ion-padding-vertical ion-padding-horizontal info" icon={informationCircleOutline} />
          </div>
          <div className="ion-padding-horizontal ion-margin-bottom">
            <div className="dflex ion-justify-content-between ion-padding-horizontal">
              <div>
                <p className = "macroborder"><strong>{Math.floor(parseInt(localStorage.getItem("dailyCarbs")!))}g</strong></p>
              </div>
              <div className="thicc">
                <div className="dflex ion-justify-content-between">
                  <p>Carbs</p>
                  <p>{(Math.round((Math.floor(parseInt(localStorage.getItem("dailyCarbs")!))/Math.floor(parseInt(localStorage.getItem("carbs")!))) * 100)).toFixed(2)}%</p>
                </div>
                <IonProgressBar className="macrobar" value={parseFloat((Math.round((Math.floor(parseInt(localStorage.getItem("dailyCarbs")!))/Math.floor(parseInt(localStorage.getItem("carbs")!))) * 100)/ 100 ).toFixed(2))}></IonProgressBar><br />
              </div>
            </div>
            <div className="dflex ion-justify-content-between ion-padding-horizontal">
              <div>
                <p className = "macroborder"><strong>{Math.floor(parseInt(localStorage.getItem("dailyFats")!))}g</strong></p>
              </div>
              <div className="thicc">
                <div className="dflex ion-justify-content-between">
                  <p>Fats</p>
                  <p>{(Math.round((Math.floor(parseInt(localStorage.getItem("dailyFats")!))/Math.floor(parseInt(localStorage.getItem("fats")!))) * 100)).toFixed(2)}%</p>
                </div>
                <IonProgressBar className="macrobar" value={parseFloat((Math.round((Math.floor(parseInt(localStorage.getItem("dailyFats")!))/Math.floor(parseInt(localStorage.getItem("fats")!))) * 100)/ 100 ).toFixed(2))}></IonProgressBar><br />
              </div>
            </div>
            <div className="dflex ion-justify-content-between ion-padding-horizontal">
              <div>
                <p className = "macroborder"><strong>{Math.floor(parseInt(localStorage.getItem("dailyProteins")!))}g</strong></p>
              </div>
              <div className="thicc">
                <div className="dflex ion-justify-content-between">
                  <p>Protein</p>
                  <p>{(Math.round((Math.floor(parseInt(localStorage.getItem("dailyProteins")!))/Math.floor(parseInt(localStorage.getItem("protein")!))) * 100)).toFixed(2)}%</p>
                </div>
                <IonProgressBar className="macrobar" value={parseFloat((Math.round((Math.floor(parseInt(localStorage.getItem("dailyProteins")!))/Math.floor(parseInt(localStorage.getItem("protein")!))) * 100)/ 100 ).toFixed(2))}></IonProgressBar><br />
              </div>
            </div>
          </div>
          <div className="ion-padding-horizontal ion-padding-vertical">
            <IonButton mode="ios" className="addmeal" color="secondary" routerLink='/diet/meals' expand="block">Add Meal</IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Diet;
