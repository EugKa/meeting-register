import React from 'react'
import { IonCol, IonCardSubtitle, IonRow, IonCardTitle } from '@ionic/react'
import { ISpecialist } from '../../types'

interface Props {
    filtItem: ISpecialist
}

export const MeetSelectItem = (props: Props) => {
    const {date, time} = props.filtItem.meetings;
    return (
        <React.Fragment>
            <IonCol className="meet-select__content">
                    <IonCardSubtitle>Дата</IonCardSubtitle>
                    <IonRow className="meet-select__content-date">
                        <IonCardTitle>{date.dayOfMonth}</IonCardTitle>
                        <IonCardTitle>{date.month}</IonCardTitle>
                    </IonRow>
                </IonCol>
                <IonCol className="meet-select__content">
                    <IonCardSubtitle>Время</IonCardSubtitle>
                    <IonCardTitle>{time}</IonCardTitle>
            </IonCol>
        </React.Fragment>
        
    )
}
