/** @format */
import { getDownloadURL, uploadBytes, ref } from "firebase/storage";
import { storage } from "./config";

export const uploadImage = async (uri) => {
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const id = Date.now();
  const fileRef = ref(storage, `img/${id}`);
  const result = await uploadBytes(fileRef, blob);

  // We're done with the blob, close and release it
  blob.close();
  console.log("upload Image Ok");
  return await getDownloadURL(fileRef);
};
