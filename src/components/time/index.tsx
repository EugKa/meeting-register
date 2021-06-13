import React, { useEffect, useState } from 'react'
import { 
    IonSlides, 
    IonSlide, 
    IonItem,
} from '@ionic/react';
import { setTime } from '../../store/features/specialists-sclice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { ISpecialist } from '../../types';
import { TimeItem } from './time-item';
import './time.scss'

const slideOpts = {
    initialSlide: 0,
    slidesPerView: 3,
    speed: 400
  };

export const TimePicker = () => {
    const [activeTime, setActiveTime] = useState<number | string>('')
    const dispatch = useAppDispatch();

    // getting the index of the active slide of the specialist
    const avtiveIndex = useAppSelector((state) => state.specialistsSclice.activeSlide)

    //getting the data
    const visitTime = useAppSelector((state) => state.specialistsSclice.data)

    useEffect(() => {
        //if the active index is changed, reseted the state of the card with the date
        setActiveTime('')
    },[avtiveIndex])

    const handleSelect = (item:ISpecialist['visitTime']['0'], idx: number) => {
        //saved the ID of the card with time that was clicked 
        setActiveTime(item.id)
        dispatch(setTime({
            id: idx,
            time: item.time
        }))
    }

    const renderSlide = visitTime.filter((items: ISpecialist) => 
         //compare whether the active index of the specialist's slides is equal to the number of the slide, 
        // then i map the array and return the required array with visits time
            items.slideNumber === avtiveIndex).map((items: ISpecialist) => 
                items.visitTime.map((item: ISpecialist['visitTime']['0']) => {
                    return  <IonSlide key={item.id}>
                                <TimeItem item={item} 
                                        handleSelect={handleSelect} 
                                        activeTime={activeTime}
                                />
                            </IonSlide>
            }))
       
    return (
        <React.Fragment>
            <IonItem lines="none">
            Свободное Время
            </IonItem>
            <IonSlides options={slideOpts}>
                {renderSlide}   
            </IonSlides>
        </React.Fragment>
    )
}
