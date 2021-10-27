const photoCard = ({ thumbnailUrl, title }) => {
  return (
    <div className="photoCardContainer">
      <img src={thumbnailUrl} alt={title}></img>
    </div>
  );
};

export default photoCard;
