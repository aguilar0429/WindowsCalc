/*import React from 'react';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { personOutline } from 'ionicons/icons';


const Sidebar = () => {
  return (
    <IonMenu side="start" contentId="main-content">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonIcon icon={personOutline} slot="start" />
            <IonLabel>Pedro Mendoza</IonLabel>
          </IonItem>
          <IonItem>
            <IonIcon icon={personOutline} slot="start" />
            <IonLabel>Eduardo Aguilar</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Sidebar;*/

import React, { useState } from 'react';
import { IonButton, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem } from '@ionic/react';
import { IonMenuController } from '@ionic/react';

const Sidebar = () => {
  return (
    <IonMenu contentId="main" side="start">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>Item 1</IonItem>
          <IonItem>Item 2</IonItem>
          <IonItem>Item 3</IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};
export default Sidebar;