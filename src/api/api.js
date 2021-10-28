import { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import "./api.css";
import Form from "./form";
function Api() {
  const [isLoading, setIsLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [albumId, setAlbumId] = useState(1);
  const fetchData = async () => {
    try {
      const url = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?albumId=" + albumId
      );
      //console.log("data =>", url.data);
      setPhotos(url.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error =>", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>mon api photo</h1>
      <Form albumId={albumId} />
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
