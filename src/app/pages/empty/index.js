import { message } from "antd";
import { Navigate } from "react-router-dom";
import {
  LOGIN,
  REGISTER,
  DASHBOARD,
 
} from "../../routing/routeConstants";
import { User } from "../../storage";
//To set the message configration like how many times message should display
message.config({
  maxCount: 1,
});
export {
  DASHBOARD,
  Navigate,
  LOGIN,
  REGISTER,
  User,
};
