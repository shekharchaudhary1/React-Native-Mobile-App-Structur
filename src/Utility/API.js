import { axiosFormInstance, axiosInstance } from "./axiosInstances";
import * as SecureStore from "expo-secure-store";
import { ShowMessage } from "../components/Toast";
import message from "../constants/message";

let authToken = undefined;
function setAuthorization(token) {
  authToken = token;
}
function ClearToken() {
  authToken = undefined;
}
function getAuthorization() {
  return authToken;
}
const exports = {
  setAuthorization,
  ClearToken,
  getAuthorization,
};

export default exports;

export const addData = async (endpoint, requestBody) => {
  try {
    const result = await axiosInstance.post(
      endpoint,
      requestBody,
      authToken
        ? {
            headers: {
              Authorization: "Bearer " + authToken,
            },
          }
        : {
            headers: {},
          }
    );
    return result;
  } catch (error) {
    ShowMessage(
      message.common_messages.something_went,
      message.common_messages.error_toast
    );
    console.log(error);
    return error;
  }
};
export const addFormData = async (endpoint, requestBody) => {
  try {
    const result = await axiosFormInstance.post(endpoint, requestBody, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });
    return result;
  } catch (error) {
    return error;
  }
};

export const updateData = async (endpoint, requestBody) => {
  try {
    const result = await axiosInstance.patch(endpoint, requestBody, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });
    return result;
  } catch (error) {
    ShowMessage(
      message.common_messages.something_went,
      message.common_messages.error_toast
    );
    return error;
  }
};
export const updateFormData = async (endpoint, requestBody) => {
  try {
    const result = await axiosFormInstance.put(endpoint, requestBody, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });
    return result;
  } catch (error) {
    ShowMessage(
      message.common_messages.something_went,
      message.common_messages.error_toast
    );
    return error;
  }
};
export const deleteData = async (endpoint, requestBody) => {
  try {
    const result = await axiosInstance.delete(endpoint, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
      data: requestBody,
    });
    return result;
  } catch (error) {
    ShowMessage(
      message.common_messages.something_went,
      message.common_messages.error_toast
    );
    return error;
  }
};

export const getAllData = async (url) => {
  try {
    let result = await axiosInstance.get(url, {
      headers: {
        Authorization: "Bearer " + authToken,
      },
    });
    return result.data;
  } catch (error) {
    ShowMessage(
      message.common_messages.something_went,
      message.common_messages.error_toast
    );
    return error.response;
  }
};

export const updateUser = async (url, data) => {
  try {
    let result = await axiosInstance.put(`${url}`, data);
    return result.data;
  } catch (error) {
    ShowMessage(
      message.common_messages.something_went,
      message.common_messages.error_toast
    );
    return error.response.data;
  }
};
