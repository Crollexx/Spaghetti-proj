import React, {useEffect} from "react";
import styles from "./offerItem.module.scss";
import {getOfferImage} from "../../api/order";

type OfferItemProps = {
  selected: boolean
  onClick: () => void;

  id: number
  name: string;
  description?: string
  price: number
  photoId: number
};

const OfferItem: React.FC<OfferItemProps> = ({ name,price,  onClick, selected, id }) => {

  const [image, setImage] = React.useState('');

  const handleGetData = async (id: number) => {
    return await getOfferImage(id)
  }

  useEffect(() => {
    handleGetData(id).then(res => {
      setImage(res)
    })
  },[id])
  return (
    <div className={`${styles.offerItem} ${selected ? styles.active : ''}`} onClick={onClick}>

      <img src={image} alt="avatar" className={styles.image}/>
      <div className={styles.content}>
        <span>{name}</span>
        <span>{price} р</span>
      </div>
    </div>
  );
};

export default OfferItem;
