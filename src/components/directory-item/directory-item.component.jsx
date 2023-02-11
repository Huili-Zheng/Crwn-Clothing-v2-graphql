import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  console.log(category);
  const { imageUrl, title } = category;
  const navigate = useNavigate();
  const goToCategoryHandler = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body onClick={goToCategoryHandler}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
