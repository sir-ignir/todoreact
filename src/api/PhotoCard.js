const photoCard = ({ thumbnailUrl, title }) => {
  return (
    <div className="photoCardContainer">
      <img src={thumbnailUrl} alt={title} key={thumbnailUrl}></img>
    </div>
  );
};

export default photoCard;
