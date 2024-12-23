import React, {useState} from "react";
import styles from "./offersList.module.scss";
import OfferItem from "../offerItem/offerItem";
import {IOffer} from "../../types/order";

type OffersListProps = {
  onSubmit: (selected: IOffer[]) => void
  data: any[]
};

const OffersList: React.FC<OffersListProps> = ({ onSubmit, data }) => {

  const [selected, setSelected] = useState<number[]>([])

  const handleClick = (index: number) => {
    setSelected(prevSelected => prevSelected?.includes(index)
      ? prevSelected?.filter((item) => item != index)
      : ([...prevSelected, index])
    )
  }

  const handleSubmit = ( selected: number[]) => {
    const submitData = data?.filter(({id}) => selected?.includes(id))
    onSubmit(submitData)
  }

  return (
    <>
      <div className={styles.content}>
        {data?.map(({name, price, id, photoId}, index) => (
          <OfferItem
            key={`OfferItem_${id}`}
            id={id}
            name={name}
            price={price}
            photoId={photoId}
            onClick={() => handleClick(id)}
            selected={selected?.includes(id)}
          />
        ))}
      </div>
      <button type="submit" className={styles.button} onClick={() => handleSubmit(selected)} disabled={selected?.length === 0}>
        Сохранить
      </button>
    </>
  );
};

export default OffersList;
