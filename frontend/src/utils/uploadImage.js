import { API_PATH } from "./apiPath";
import axiosInstance from "./axiosinstance";

const uploadImage = async (imageFile) => {
    const formData = new FormData();
    formData.append('image', imageFile)

    try {
        const response = await axiosInstance.post(API_PATH.IMAGE.UPLOAD_IMAGE, formData, {
            headers: {
                "Content-Type": "multipart/form-data", // Set header for file upload
            }
        });
        return response.data; // Return response data
    }
    catch (error) {
        console.log('Error uploading the image:', error);
        throw error; // Rethrow error for handling
    }
}

export default uploadImage;