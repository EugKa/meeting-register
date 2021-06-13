import React from 'react'
import { 
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonRow, 
    IonCol 
} from '@ionic/react'
interface Props {
  name: string;
  photo: string;
}

export const ItemSlide = ( props: Props) => {
    return (
        <IonCard style={{width: '100%'}}>
            <IonCardHeader>
              <IonCardTitle>
                {props.name}
              </IonCardTitle>
            </IonCardHeader>
            <IonRow>
              <IonCol>
                <img style={{backgroundColor: 'aqua'}} src={props.photo} alt="ima" />
              </IonCol>
              <IonCol className="ion-align-self-center">
                <IonCardSubtitle>
                  Длительность консультации
                </IonCardSubtitle>
                <IonCardTitle>
                  50 минту
                </IonCardTitle> 
              </IonCol>
            </IonRow>
        </IonCard>

    )
}
