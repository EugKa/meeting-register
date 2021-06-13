import React from 'react'
import { IonCardSubtitle, IonCardTitle, IonItem } from '@ionic/react'
import { useAppSelector } from '../../store/hooks'
import { ISpecialist } from '../../types'

interface Props {
    activeTime: number | string;
    handleSelect: (item:ISpecialist['visitTime']['0'], activeIndex:number) => void
    item: ISpecialist['visitTime']['0']
}

export const TimeItem = ({item, activeTime, handleSelect}: Props) => {

    // getting the index of the active slide of the specialist
    const avtiveIndex = useAppSelector((state) => state.specialistsSclice.activeSlide)

    return (
        <IonItem lines="none" onClick={() => handleSelect(item, avtiveIndex)}>
            {/* checking if the id of the element matches the received id
             and return the right element*/}
            {item.id === activeTime ? (
                <IonCardTitle className="active">
                    {item.time}
                </IonCardTitle>
                ): (                   
                    <IonCardSubtitle>
                        {item.time}
                    </IonCardSubtitle>
                )
            }
        </IonItem>
    )
}
