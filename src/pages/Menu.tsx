import { IonContent, IonHeader, IonCard, IonPage, IonCardHeader, IonCardTitle,IonIcon,IonButton,IonToolbar,IonTitle,IonTabButton,IonLabel,IonBadge,IonRippleEffect,IonImg,useIonViewWillEnter  } from '@ionic/react';
import React, { useState } from 'react';
import './Menu.css';
import {business,calendar,personCircle,map,informationCircle} from 'ionicons/icons';
import Container from '../components/ExploreContainer';
import workout from '../otherstuff/workouts.json';
import { isConstructorDeclaration } from 'typescript';

let worknum = 0;
let setholder = 0;
let whatever:any;
let isfinished = false;
const Home: React.FC = () => {
  // COME BACK TOMORROW OLAYINI COZ YARIN
  
  const [time,changeTime] = useState('00:00');
  let timer = 0;
  let interval:any;
  const startTimer = (duration:number) => {
    timer = duration * 60;
    interval = setInterval(()=>{
      updateTimeValue();
    },1000)
  }

  const updateTimeValue = () => {
    let minutes: any = timer/60;
    let seconds: any = timer%60;
    minutes = String('0' + Math.floor(minutes)).slice(-2);
    seconds = String('0' + Math.floor(seconds)).slice(-2);
    const text = minutes + ":" + seconds;
    changeTime(text);
    timer--;

    if(timer < 0 ){
      changeTime('00:00');
      //console.log("aloo");
      clearInterval(interval);
      changeTimeout(false);
    }
  }

  const [text,changeText] = useState("Start Workout");
  const [exercise,changeExercise] = useState("Start Rep");
  //console.log(workout);

  const [title,changeTitle] = useState("");
  const [imgsrc,changeSrc] = useState("");
  const [sets,changeSets] = useState("");
  const [reps,changeReps] = useState("");

  const [breaktime,changeBreakTime] = useState(false);
  const [doneworking,changeDoneWorking] = useState(false);
  const [card,changeCard] = useState(<div></div>);
  const [timeout,changeTimeout] = useState(false);
  let workouttype;
  useIonViewWillEnter(() => {

    let currentdate = new Date().getTime() -  + (1 * 20 * 60 * 60 * 1000);
    if(currentdate < parseInt(localStorage.getItem("lastWorkout")!)){
      isfinished = true;
      localStorage.setItem("canWorkout","false");
    }

    switch(localStorage.getItem("WorkoutType")){
      case 'ppl': { 
        if(parseInt(localStorage.getItem("day")!) < 3){
          workouttype = Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)]);
        }
        else{
          localStorage.setItem("day","0");
          workouttype = Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)]);
        }
      }
      break;
      case '5x5': { 
        if(parseInt(localStorage.getItem("day")!) < 3){
          workouttype = Object.values(workout['5x5'][parseInt(localStorage.getItem("day")!)]);
        }
        else{
          localStorage.setItem("day","0");
          workouttype = Object.values(workout['5x5'][parseInt(localStorage.getItem("day")!)]);
        }
      }
      break;
      case 'brosplits': { 
        if(parseInt(localStorage.getItem("day")!) < 5){
          workouttype = Object.values(workout.brosplits[parseInt(localStorage.getItem("day")!)]);
        }
        else{
          localStorage.setItem("day","0");
          workouttype = Object.values(workout.brosplits[parseInt(localStorage.getItem("day")!)]);
        }
      }
      break;
      case 'upperlower': { 
        if(parseInt(localStorage.getItem("day")!) < 2){
          workouttype = Object.values(workout.upperlower[parseInt(localStorage.getItem("day")!)]);
        }
        else{
          localStorage.setItem("day","0");
          workouttype = Object.values(workout.upperlower[parseInt(localStorage.getItem("day")!)]);
        }
      }
      break;
      default: {
        if(parseInt(localStorage.getItem("day")!) < 3){
          workouttype = Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)]);
        }
        else{
          localStorage.setItem("day","0");
          workouttype = Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)]);
        }
      }
    }

    // if(localStorage.getItem("WorkoutType") == "ppl"){
    //   if(parseInt(localStorage.getItem("day")!) < 3){
    //     workouttype = Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)]);
    //   }
    //   else{
    //     localStorage.setItem("day","0");
    //     workouttype = Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)]);
    //   }
    // }
    // else{
    //   // BURADA DA PPL WORKOUT SONRA DEGISTIR
    //   if(parseInt(localStorage.getItem("day")!) < 3){
    //     workouttype = Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)]);
    //   }
    //   else{
    //     localStorage.setItem("day","0");
    //     workouttype = Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)]);
    //   }
    // }
    changeTitle(workouttype[worknum]!.title);
    changeSrc(workouttype[worknum]!.image);
    changeSets(workouttype[worknum]!.details[0].toString());
    changeReps(workouttype[worknum]!.details[1].toString());
  });

  const checkWorkout = () => {
    if(exercise == "Start Rep"){
      changeExercise("Finish Rep");
    }
    else{
      changeExercise("Start Rep");
      if(Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)])[worknum]!.details[0] <= 1){
        console.log("less than or equal to one");
        worknum+=1;
        console.log(worknum);
        if(worknum <= Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)]).length-1){
          console.log("test");
          changeTitle(Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)])[worknum]!.title || "asd");
          changeSrc(Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)])[worknum]!.image || "asdasd");
          changeSets(Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)])[worknum]!.details[0].toString());
          changeReps(Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)])[worknum]!.details[1].toString());
        }
        else{
          // will calculate this later
          localStorage.setItem("caloriesBurned","150");
          
          let x = parseInt(localStorage.getItem("day")!);
          x++;
          let currentdate = new Date().getTime();
          localStorage.setItem("lastWorkout",currentdate.toString());
          if(localStorage.getItem("WorkoutType") == "ppl"){
            if(x >= 2){
              localStorage.setItem("day","0");
            }
            else{
              localStorage.setItem("day",x.toString());
            }
          }
          isfinished = true;
        }
      }
      else{
        whatever = Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)])[worknum]!.details[0];
        whatever--;
        Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)])[worknum]!.details[0] = whatever;
        //console.log(whatever);
        changeSets(Object.values(workout.PPl[parseInt(localStorage.getItem("day")!)])[worknum]!.details[0].toString());
      }
      startTimer(60/60);
      changeTimeout(true);
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Workout</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="borderrr">
          {timeout == false && isfinished == false  ?  <div className = "workoutdiv ion-text-center ion-padding-vertical ion-padding-horizontal">
            <h1 className="exercisetitle">{title}</h1>
            <IonImg src={imgsrc}></IonImg>
            <div className="dflex ion-justify-content-between ion-padding-horizontal">
              <h5>Sets: {sets}</h5>
              <h5>Reps: {reps}</h5>
            </div>
            <IonButton className="exercisebutton" expand="block" color="secondary" size="large" onClick={()=> {checkWorkout()}}>{exercise}</IonButton>
          </div> : isfinished == false  ? 
          <div className = "ion-text-center ion-padding-vertical">
            <h1>Take a deep breath</h1>
            <h1>{time}</h1>
          </div> : <div className = "ion-text-center"><h1>Come back here tomorrow</h1></div>
          }
        </div>
      </IonContent>
    </IonPage>
  );
};


// {text == "Stop Workout" && breaktime != true && worknum < Object.keys(workout.PPl[day]).length?
//           <div className = "workoutdiv ion-text-center ion-padding-vertical ion-padding-horizontal">
//             <h1 className="exercisetitle">{Object.keys(workout.PPl[day])[worknum]}</h1>
//             // KENDIME NOT BU ISI COZ
//             {/* <IonImg src={Object.values(workout.PPl[day])[worknum]![1]}></IonImg> */}
//             <div className="dflex ion-justify-content-between ion-padding-horizontal">
//               <h5>Sets: {Object.values(workout.PPl[day])[worknum]![0][0]}</h5>
//               <h5>Reps: {Object.values(workout.PPl[day])[worknum]![0][1]}</h5>
//             </div>
//             <IonButton className="exercisebutton" expand="block" fill="outline" size="large" onClick={()=> {
//               if(exercise == "Start Rep"){
//                 changeExercise("Finish Rep");
//               }
//               else{
//                 changeExercise("Start Rep");
//                 changeBreakTime(true);
//               }
//             }}>{exercise}</IonButton>
//           </div> : 
//           <div></div>
//         }
//         {breaktime == true ? 
//           <div className = "ion-text-center ion-padding-vertical">
//             <h1>Wait for one minute please....</h1>
//             <IonButton onClick = {() =>{
//               // KENDIME NOT BU ISI COZ
//               Object.values(workout.PPl[day])[worknum][0][0] = Object.values(workout.PPl[day])[worknum][0][0] -1;
//               if(Object.values(workout.PPl[0])[worknum]![0][0] < 1){
//                 changeNum(worknum + 1);
//                 if(worknum >= Object.keys(workout.PPl[0]).length){
//                   changeText("Finish Workout");
//                 }
//               }
//               changeBreakTime(false)}}>Continue</IonButton>
//           </div>
//         : <div></div>
//         }
//         { doneworking == false ?
//           <IonCard className = "kart ion-activatable ripple-parent" onClick={() => {
//             if(text == "Start Workout"){
//               if( worknum < Object.keys(workout.PPl[0]).length){
//                 changeText("Stop Workout");
//                 if(localStorage.getItem("day") === null){
//                   localStorage.setItem("day","0");
//                 }
//                 day =  localStorage.getItem("day") as any;
//                 console.log(day);
//               }
//               else{
//                 changeText("Finish Workout");
//               }
//             }
//             else if (text == "Stop Workout"){
//               if( worknum < Object.keys(workout.PPl[0]).length){
//                 changeText("Start Workout");
//               }
//               else{
//                 changeText("Finish Workout");
//               }
//             }
//             else{
//               console.log("Finished Workout");
//               localStorage.setItem("day", (day + 1).toString());
//               changeDoneWorking(true);
//             }
//           }}>
//               <IonCardHeader className = "ion-text-center">
//                 <IonCardTitle className="ion-padding-vertical ion-padding-horizontal" >{text}</IonCardTitle>
//               </IonCardHeader>
//               <IonRippleEffect></IonRippleEffect>
//           </IonCard> : <div className = "ion-text-center ion-padding-vertical"><h1>Come Back Here Tommorow</h1></div>
//         }

export default Home;
