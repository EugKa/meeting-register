import React from 'react'
import {  
    IonCard,
    IonCardTitle,
    IonCardSubtitle,

} from '@ionic/react';

import { useAppSelector } from '../../store/hooks';
import { ISpecialist } from '../../types';

interface Props {
    activeDateCard: number | string;
    item: ISpecialist['visitDate']['0']
    handleSelect: (item:ISpecialist['visitDate']['0'], activeIndex:number) => void
}
export const DateItem = ({item, activeDateCard, handleSelect}: Props) => {

    // getting the index of the active slide of the specialist
    const activeIndex = useAppSelector((state) => state.specialistsSclice.activeSlide)

    return (
        <IonCard 
            onClick={() => handleSelect(item, activeIndex)}
            // checking if the id of the element matches the received id and activate the class
            className={item.id === activeDateCard ? "slides__slide-card active": 'slides__slide-card'}
        >
            <IonCardSubtitle 
                // checking if the id of the element matches the received id and activate the class
                className={item.id === activeDateCard ? "slides__slide-card-subtitle active": ''}
            >
                {item.dayOfWeek}
            </IonCardSubtitle>
            <IonCardTitle 
                // checking if the id of the element matches the received id and activate the class
                className={item.id === activeDateCard ? "slides__slide-card-title active": ''}
            > 
                {item.dayOfMonth}
            </IonCardTitle>
        </IonCard>
    )
}
