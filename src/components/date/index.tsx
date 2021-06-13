import React, { useEffect, useState } from 'react'
import 'moment/locale/ru'
import { 
    IonSlides, 
    IonSlide, 
    IonItem,
} from '@ionic/react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setDate } from '../../store/features/specialists-sclice';
import './date.styles.scss'
import { DateItem } from './date-item';
import { ISpecialist } from '../../types';


const slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    speed: 400
  };

export const DatePicker = () => {
    const [activeDateCard, setActiveDateCard] = useState<any>('')
    const dispatch = useAppDispatch();

    // getting the index of the active slide of the specialist
    const activeIndex = useAppSelector((state) => state.specialistsSclice.activeSlide)

    //getting the data
    const visitDate = useAppSelector((state) => state.specialistsSclice.data)

    useEffect(() => {
        //if the active index is changed, reseted the state of the card with the date
        setActiveDateCard('')
    },[activeIndex])

    const handleSelect = (item:ISpecialist['visitDate']['0'], idx: number) => {
        //saved the values of the card with date that was clicked 
        setActiveDateCard(item)

        //passing values in action
        dispatch(setDate({
            id: idx,
            dayOfMonth: item.dayOfMonth,
            month: item.month
        }))
    }


    const renderSlide = visitDate.filter((items: ISpecialist) => 
        //compare whether the active index of the specialist's slides is equal to the number of the slide, 
        // then i map the array and return the required array with visits dates
            items.slideNumber === activeIndex).map((filtItems: ISpecialist) => 
                filtItems.visitDate.map((item: ISpecialist['visitDate']['0']) => {
                    return <IonSlide key={item.id}>
                    <DateItem 
                        item={item} 
                        handleSelect={handleSelect} 
                        activeDateCard={activeDateCard}
                        filtItems={filtItems}
                    />
                </IonSlide>
            }))
   
    return (
        <React.Fragment>
            <IonItem lines="none">
            Возможная дата
            </IonItem>
            <IonSlides options={slideOpts}>
                {renderSlide}   
            </IonSlides>
        </React.Fragment>
    )
}
