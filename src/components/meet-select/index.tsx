import React from "react";
import {
  IonCard,
  IonButton,
  IonRow,
  IonCardContent,
} from "@ionic/react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { updateDoc } from "../../store/features/specialists-sclice";
import { ISpecialist } from "../../types";
import './meet-select.styles.scss'
import { MeetSelectItem } from "./meet-select-item";

export const MeetSelect = () => {
  const dispatch = useAppDispatch();

  //getting the data
  const data = useAppSelector((state) => state.specialistsSclice.data);

  // getting the index of the active slide of the specialist
  const avtiveIndex = useAppSelector((state) => state.specialistsSclice.activeSlide);


  const handlerSubmit = (idx: number) => {

    //finding an array that matches the passed idx
    const existingUser = data.find((item) => item.slideNumber === idx);

    //passing values in action
    dispatch(
      updateDoc({
        id: existingUser?.id,
        time: existingUser?.meetings.time,
        dayOfMonth: existingUser?.meetings.date.dayOfMonth,
        month: existingUser?.meetings.date.month,
      })
    );
  };

  const renderList = (
    <React.Fragment>
      {data
        //compare whether the active index of the specialist's slides is equal to the number of the slide, 
        //and the return array of the the right specialist
        .filter((items: ISpecialist) => items.slideNumber === avtiveIndex)
        .map((filtItem: ISpecialist, idx: any) => {
          return (
            <IonRow key={idx}>
              <MeetSelectItem filtItem={filtItem}/>
            </IonRow>
          );
        })}
    </React.Fragment>
  );

  return (
      <IonCard>
        <IonCardContent>
          {renderList}
          <IonButton className="meet-select__btn" onClick={() => handlerSubmit(avtiveIndex)}>
            Записаться на бесплатную встречу
          </IonButton>
        </IonCardContent>
      </IonCard>
  );
};
