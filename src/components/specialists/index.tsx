import React, { useEffect } from 'react';
import { 
    IonSlides, 
    IonSlide, 
} from '@ionic/react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchData, setActiveSlide } from '../../store/features/specialists-sclice';
import { ISpecialist } from '../../types';
import { ItemSlide } from './specialist-item';

const slideOpts = {
  initialSlide: 0,
  speed: 400, 
};

export const Specialists: React.FC = () => {
  //getting the data
  const data = useAppSelector((state) => state.specialistsSclice.data);

  //getting the status of the data
  const status = useAppSelector((state) => state.specialistsSclice.status);

  const dispatch = useAppDispatch();

  useEffect(() => {
    //checked if the status matches the required value, then request the data
    if(status === 'idle') {
      dispatch(fetchData())
    }
  }, [status,dispatch])

  const getIndex = async (event: any) => {
    let index: string | number = '';
    //getting the index of the slide
    await event.target.getActiveIndex().then((value: string | number) => (index=value));
    //set the value in the store
    dispatch(setActiveSlide(index))
  }

  return (
      <IonSlides 
        options={slideOpts} 
        onIonSlideDidChange={(e:any) => getIndex(e)}>
        {data.map((items: ISpecialist) => (
          <IonSlide key={items.id}>
            <ItemSlide {...items}/>
          </IonSlide>
        )   
        )}
      </IonSlides>
 )
}

// key={data.map(item => item.id).join('_')} 