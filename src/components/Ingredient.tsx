import React, {useState} from 'react'
import {IonCard,IonCardHeader,IonCardContent,IonCardTitle,IonInput,IonButton,IonLabel,IonItem,IonToast } from '@ionic/react'
import './Ingredients.css';
import Axios from 'axios';
interface ContainerProps {}

const Ingredient : React.FC<ContainerProps> = (props:any) => {
    const [showToast1, setShowToast1] = useState(false);
    let image = 'https://spoonacular.com/cdn/ingredients_100x100/' + props.image
    const [text, setText] = useState<string>();
    const calculateMacros = async () =>{
        let result = await Axios.get(`https://api.spoonacular.com/food/ingredients/${props.id}/information?amount=${text}&unit=g&apiKey=7900b26e638443b5851b4c38f0f2e2e2`);
        console.log(result);
        let carbs,fats,calories,proteins;
        carbs = result.data.nutrition.caloricBreakdown.percentCarbs;
        fats = result.data.nutrition.caloricBreakdown.percentFat;
        proteins = result.data.nutrition.caloricBreakdown.percentProtein;
        calories = result.data.nutrition.nutrients[28].amount;
        
        console.log(`${carbs},${fats},${proteins},${calories}`);
        if(localStorage.getItem("dailyCalories") == undefined || localStorage.getItem("dailyProteins") == undefined || localStorage.getItem("dailyFats") == undefined || localStorage.getItem("dailyCarbs") == undefined){
            localStorage.setItem("dailyCalories","0");
            localStorage.setItem("dailyProteins","0");
            localStorage.setItem("dailyFats","0");
            localStorage.setItem("dailyCarbs","0");
        }
        let cal = Math.floor(carbs*4 + fats*9 + proteins*4 + parseInt(localStorage.getItem("dailyCalories")!));
        localStorage.setItem("dailyCalories",cal.toString());
        localStorage.setItem("dailyProteins",parseInt(localStorage.getItem("dailyProteins")!) + proteins);
        localStorage.setItem("dailyFats",parseInt(localStorage.getItem("dailyFats")!) + fats);
        localStorage.setItem("dailyCarbs", parseInt(localStorage.getItem("dailyCarbs")!) + carbs);
        setShowToast1(true);
    }

    return (
        <div>
            <IonCard className="ingcard">
                <IonCardHeader>
                    <img src= {image} alt=""/>
                    <IonCardTitle>{props.name}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonItem lines="none">
                        <IonLabel>Enter Weight</IonLabel>
                        <IonInput className="ion-padding-horizontal" placeholder="gr" value={text} onIonChange={e => setText(e.detail.value!)}></IonInput>
                    </IonItem>
                    <IonButton onClick={calculateMacros} expand="block" color="secondary">Add Meal</IonButton>
                </IonCardContent>
            </IonCard>
            <IonToast color="light"
                isOpen={showToast1}
                onDidDismiss={() => setShowToast1(false)}
                message="Meal Saved."
                duration={1000}
            />
        </div>
    )
}

export default Ingredient
