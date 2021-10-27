import { useEffect, useState } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
function Api() {
  const [photos, setPhotos] = useState([]);
  const fetchData = async () => {
    try {
      const url = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?albumId=1"
      );
      //console.log("data =>", url.data);
      setPhotos(url.data);
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
      <div id="photoAlbum">
        {photos.map((photo) => {
          return (
            <PhotoCard thumbnailUrl={photo.thumbnailUrl} title={photo.title} />
          );
        })}
      </div>
    </div>
  );
}

export default Api;
