import React from 'react'
import {  
    IonCard,
    IonCardTitle,
    IonCardSubtitle,

} from '@ionic/react';

import { useAppSelector } from '../../store/hooks';
import { ISpecialist } from '../../types';

interface Props {
    activeDateCard: any;
    item: ISpecialist['visitDate']['0']
    handleSelect: (item:ISpecialist['visitDate']['0'], activeIndex:number) => void;
    filtItems: ISpecialist
}
export const DateItem = ({item, activeDateCard, handleSelect, filtItems}: Props) => {

    // getting the index of the active slide of the specialist
    const activeIndex = useAppSelector((state) => state.specialistsSclice.activeSlide)
    console.log(`activeDateCard`, activeDateCard)
    console.log(`item`, item)
    return (
        <IonCard 
            onClick={() => handleSelect(item, activeIndex)}
            //checking if the id of the element matches the received
            //or meeting value equal item value and return the right element
            className={
                item.id === activeDateCard.id || 
                filtItems.meetings.date.dayOfMonth === item.dayOfMonth ?
                "slides__slide-card active": 'slides__slide-card'
            }
        >
            <IonCardSubtitle 
                //checking if the id of the element matches the received
                //or meeting value equal item value and return the right element
                className={
                    item.id === activeDateCard.id || 
                    filtItems.meetings.date.dayOfMonth === item.dayOfMonth ?
                    "slides__slide-card-subtitle active": ''
                }
            >
                {item.dayOfWeek}
            </IonCardSubtitle>
            <IonCardTitle 
                //checking if the id of the element matches the received
                //or meeting value equal item value and return the right element
                className={
                    item.id === activeDateCard.id || 
                    filtItems.meetings.date.dayOfMonth === item.dayOfMonth ?
                    "slides__slide-card-title active": ''
                }
            > 
                {item.dayOfMonth}
            </IonCardTitle>
        </IonCard>
    )
}
