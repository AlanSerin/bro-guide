import { IonContent, IonHeader, IonIcon, IonPage, IonSlide, IonSlides } from '@ionic/react';
import React from 'react';
import './Home.css';
import {business,arrowForward} from 'ionicons/icons';
import { Link } from 'react-router-dom';

const slideOpts = {
  initialSlide: 0,
  speed: 400
};

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        
      </IonHeader>
      <IonContent fullscreen>
      <div className="borderstart">
        <IonSlides pager={true} options={slideOpts}>
            <IonSlide>
              <div className="ion-margin-horizontal">
                <IonIcon className="slideicon" icon={business}></IonIcon>
                <div>
                  <h1>Welcome to Bro Guide</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="ion-margin-horizontal">
                <IonIcon className="slideicon" icon={business}></IonIcon>
                <div>
                  <h1>Welcome to Bro Guide</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>
              </div>
            </IonSlide>
            <IonSlide>
              <div className="ion-margin-horizontal">
                <IonIcon className="slideicon" icon={business}></IonIcon>
                <div>
                  <h1>Shall We Start?</h1>
                  <Link to="/calculator">Continue <IonIcon className="arrow" icon={arrowForward}></IonIcon> </Link>
                </div>
              </div>
            </IonSlide>
        </IonSlides>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
