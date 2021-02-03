import { IonContent, IonHeader, IonIcon, IonPage, IonSearchbar, IonButton,IonLabel,IonToolbar,IonTitle,IonButtons,IonBackButton,IonCardTitle,IonCardContent } from '@ionic/react';
import React, { useState } from 'react';
import './Meals.css';
import {v4 as uuidv4} from 'uuid';
import {person,notifications,helpBuoy,bug,chevronForward,handLeft} from 'ionicons/icons';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Ingredient from '../components/Ingredient';

const Settings: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [ingredients, SetIngredients] = useState<any[]>([]);
  
  const getData = async () => {
       let result = await Axios.get(`https://api.spoonacular.com/food/ingredients/search?query=${searchText}&apiKey=7900b26e638443b5851b4c38f0f2e2e2&number=5`);
       console.log(result);
       SetIngredients(result.data.results);
       //console.log(ingredients); 
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="" defaultHref="/diet" />
          </IonButtons>
          <IonTitle>Meal Finder</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="borderrr">
          <div className="ion-padding-horizontal ion-padding-vertical mealsearch">
            <div className="dflex">
              <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Search food or ingredient"></IonSearchbar>
              <IonButton onClick={getData} color="secondary">Search</IonButton>
            </div>
            <div>
            {ingredients !== [] && ingredients.map(ingredient => <Ingredient key={uuidv4()} {...ingredient} />)}
            </div>
          </div>  
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
