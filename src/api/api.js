import axios from "axios";
import { base_url } from "../config/config";

export const createContactUs = async (
  fullName,
  emailAddress,
  phoneNumber,
  selectRequirments,
  writeMessage
) => {
  let response = [];
  await axios
    .post(`${base_url}contact/contactus`, {
      fullName: fullName,
      emailAddress: emailAddress,
      phoneNumber: phoneNumber,
      selectRequirments: selectRequirments,
      writeMessage: writeMessage,
    })
    .then((res) => {
      response = res?.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return response;
};
