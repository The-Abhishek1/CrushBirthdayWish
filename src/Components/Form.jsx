import React, { useState } from "react";
import { db, storage } from "../FireBase/FireBase";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import BirthdayWishes from "./BirthdayWishes";

//Main Function 
function Form() {
  const [spinner, setSpinner] = useState(false);
  const [imageUpload, setImageUpload] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data) => {
    setSpinner(true);
    if (imageUpload == null) {
      setSpinner(false);
      return;
    }
    const imageRef = ref(storage, `Users/${data.name}`);
    try {
      await uploadBytes(imageRef, imageUpload).then((res) => {
        console.log("Image Uploaded Successfullly");
      }),
        await getDownloadURL(imageRef).then((url) => {
          globalThis.uploadUrl = url;
          console.log(uploadUrl);
        });

      const docRef = await addDoc(collection(db, "Wishes"), {
        Name: data.name,
        Wish: data.wish,
        imageUrl: uploadUrl,
      });
      console.log("Document written with ID: ", docRef.id);
      reset();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    alert("Thanks for your amazing wishes😊❤️!!!");
    setSpinner(false);
  };

  return (
    <>
      <div className="flex justify-center items-center pb-1 mt-[-40px] italic ">
        <form
          className="bg-slate-100 shadow-md rounded md:px-8 px-4 pt-6 pb-8 mb-4 w-[250px] flex flex-col justify-between "
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="m-2 text-center text-[15px] italic">
            "Spread Birthday Cheer: Wish Her Happy Birthday! 🥳🎈🎂"
          </p>
          <div className="mb-4">
            <label className="block text-gray-700 text-[12px] font-bold mb-2">
              Username
            </label>
            <input
              className="shadow text-[12px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              {...register("name", {
                required: "Please enter your name.",
              })}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-[12px] font-bold mb-2">
              Image
            </label>
            <input
              className="shadow text-[12px] appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-[12px] font-bold mb-2">
              Wishes
            </label>
            <textarea
              placeholder="Wishes😊❤️"
              required
              {...register("wish", {
                required: "Please enter your wishes.",
                minLength: 10,
              })}
              className="text-[12px] shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 italic text-white font-bold py-2 w-full cursor-pointer rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <div
          className="h-[50px] w-[50px] fixed top-[45%] grid place-content-center"
          style={{ zIndex: "2" }}
        >
          {spinner ? (
            <button
              disabled
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
            >
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Form;
