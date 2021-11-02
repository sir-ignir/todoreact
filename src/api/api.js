import { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import "./api.css";
import Form from "./Form";
function Api() {
  //setIsLoading(true);
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [albumId, setAlbumId] = useState(8);
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?albumId=" + albumId
      );
      //console.log("data =>", url.data);
      setPhotos(url.data);
      setTimeout(() => setIsLoading(false), 800);
    } catch (error) {
      console.log("error =>", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [albumId]);
  return (
    <div>
      <h1>mon api photo</h1>
      <Form albumId={albumId} setAlbumId={setAlbumId} />
      {isLoading ? (
        <p>getting data</p>
      ) : (
        <div id="photoAlbum">
          {photos.map((photo) => {
            return (
              <PhotoCard
                thumbnailUrl={photo.thumbnailUrl}
                title={photo.title}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Api;
