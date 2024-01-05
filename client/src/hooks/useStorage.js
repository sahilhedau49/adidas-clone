import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase";
import { useState } from "react";
import axios from "axios";

const useStorage = () => {
  const [progress, setProgress] = useState();
  const [isStored, setIsStored] = useState(false);
  const [loading, setLoading] = useState(false);

  const uploadProductIntoDB = (formData) => {
    if (!formData.image) {
      console.log("Image not found");
      return;
    }
    setLoading(true);
    const storageRef = ref(storage, "storeImages/" + formData.image.name);
    const uploadTask = uploadBytesResumable(storageRef, formData.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        console.log(error);
      },
      async () => {
        const uri = await getDownloadURL(uploadTask.snapshot.ref);
        console.log(uri);

        const dataToStore = {
          imgUrl: uri,
          name: formData.name,
          description: formData.description,
          category: formData.category,
          price: formData.price,
        };

        console.log(dataToStore); // Working ...

        // make post req
        try {
          const res = await axios.post(
            `${process.env.React_App_Backend_API}/product`,
            dataToStore
          );
          console.log(res);
          if (res.status === 200) {
            setIsStored(true);
            setLoading(false);
          }
        } catch (err) {
          console.log(err);
        }
      }
    );
  };

  return {
    uploadProductIntoDB,
    progress,
    isStored,
    setIsStored,
    loading,
  };
};

export default useStorage;
