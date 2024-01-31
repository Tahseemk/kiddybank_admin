import update from "immutability-helper";
import { useCallback } from "react";
import Card from "./Card";

const Container = ({ setImageUrl, imageUrl, handleRemoveImage }) => {
  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      setImageUrl((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]],
          ],
        })
      );
    },
    [setImageUrl]
  );

  console.log("imageUrlCOnt", imageUrl)

  const renderCard = useCallback(
    (card, i) => {
      return (
        <Card
          key={i + 1}
          index={i}
          id={card?.id}
          text={card?.text}
          moveCard={moveCard}
          image={card}
          handleRemoveImage={handleRemoveImage}
        />
      );
    },
    [moveCard, handleRemoveImage]
  );

  if (imageUrl && imageUrl.length > 0) {
    return <>
      <Card
        key={1}
        index={1}
        id={123}
        text={"djdudu"}
        moveCard={moveCard}
        image={imageUrl}
        handleRemoveImage={handleRemoveImage}
      />
    </>;
  }
};
export default Container;
