import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonRouterOutlet,IonTabs,IonTabBar,IonTabButton,IonLabel,IonIcon } from '@ionic/react';
import {settingsSharp,barbellSharp,restaurant} from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import worktype from './pages/Worktype';
import Workout from './pages/Workout';
import Menu from './pages/Menu';
import Settings from './pages/Settings';
import Diet from './pages/Diet';
import Meals from './pages/Meals';
import Report from './pages/Report';
import Help from './pages/Help';
import Suggestions from './pages/Suggestions';
import Notifications from './pages/Notifications';
import Account from './pages/Account';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonContent>
        <IonTabs>
          <IonRouterOutlet mode = "ios">
            <Route path="/home" component={Home} exact={true} />
            <Route path="/calculator" component={Calculator} exact={true} />
            <Route path="/menu" component={Menu} exact={true} />
            <Route path="/worktype" component={worktype} exact={true} />
            <Route path="/workout" component={Workout} exact={true} />
            <Route path="/settings" component={Settings} exact={true} />
            <Route path="/diet" component={Diet} exact={true} />
            <Route path="/diet/meals" component={Meals} exact={true} />
            <Route path="/settings/report" component={Report} exact={true} />
            <Route path="/settings/help" component={Help} exact={true} />
            <Route path="/settings/suggestions" component={Suggestions} exact={true} />
            <Route path="/settings/notifications" component={Notifications} exact={true} />
            <Route path="/settings/account" component={Account} exact={true} />
            <Route exact path="/" render={(props) => {
              if(localStorage.getItem("firsttime") == "0"){
                return <Redirect to="/menu" />;
              }
              else{
                return <Redirect to="/home" />;
              }
            }} />
          </IonRouterOutlet>
          <IonTabBar mode = "ios" slot="bottom">
            <IonTabButton tab="diet" href="/diet">
              <IonIcon icon={restaurant} />
              <IonLabel>Diet</IonLabel>
            </IonTabButton>
            <IonTabButton tab="menu" href="/menu">
              <IonIcon icon={barbellSharp} />
              <IonLabel>Workout</IonLabel>
            </IonTabButton>
            <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settingsSharp} />
              <IonLabel>Settings</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonContent>
    </IonReactRouter>
  </IonApp>
);

export default App;
