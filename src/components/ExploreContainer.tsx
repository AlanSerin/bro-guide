import React from 'react';
import { IonButton, IonHeader, IonIcon, IonPage, IonSlide, IonSlides } from '@ionic/react';
import {business,arrowForward} from 'ionicons/icons';
import { Link } from 'react-router-dom';
import './ExploreContainer.css';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonSlides pager={true} options={slideOpts}>
          <IonSlide>
            <div className="ion-margin-horizontal">
              <IonIcon icon={business}></IonIcon>
              <div>
                <h1>Exercise Number One</h1>
                <div className = "container ion-padding-vertical">
                  <p className = "ion-margin-horizontal ion-text-center">Rep:1</p>
                  <IonButton onClick={()=> {console.log("test");}} >Start Exercise</IonButton>
                </div>
              </div>
            </div>
          </IonSlide>
          <IonSlide>
            <div className="ion-margin-horizontal">
              <IonIcon icon={business}></IonIcon>
              <h1>Exercise Number Two</h1>
              <div className = "container ion-padding-vertical">
                  <p className = "ion-margin-horizontal ion-text-center">Rep:1</p>
                  <IonButton onClick={()=> {console.log("test");}} >Start Exercise</IonButton>
              </div>
            </div>
          </IonSlide>
          <IonSlide>
            <div className="ion-margin-horizontal">
              <IonIcon icon={business}></IonIcon>
              <h1>Exercise Number Three</h1>
              <div className = "container ion-padding-vertical">
                  <p className = "ion-margin-horizontal ion-text-center">Rep:1</p>
                  <IonButton onClick={()=> {console.log("test");}} >Start Exercise</IonButton>
              </div>
            </div>
          </IonSlide>
      </IonSlides>
  );
};

export default ExploreContainer;
