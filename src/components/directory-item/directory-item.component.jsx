import "./directory-item.styles.scss";
import { Link } from "react-router-dom";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <Link to={`/shop/${title}`}>{title.toUpperCase()}</Link>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
