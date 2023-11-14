import { fieldValidator, usePrevious } from "../../common/custom";
import { registration,login,verifyOtp } from "../../redux/auth/auth.action";
import { message } from "antd";
import TextInput from "../../components/FormComponents/TextInput";
import PasswordInput from "../../components/FormComponents/PasswordInput";
import Button from "../../components/ButtonComponents/Button";
import Loader from "../../common/loader";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import NavigationButton from "../../components/ButtonComponents/NavigationButton";

import { handleSubmit,handleInputChange } from "./eventHandler/event";
import FormFields from "./components/FormFields";

message.config({
  maxCount: 1,
});
export {
  fieldValidator,
  usePrevious,
  registration,
  message,
  TextInput,
  PasswordInput,
  Button,
  Loader,
  useDispatch,
  useSelector,
  _,
  handleSubmit,
  FormFields,
  handleInputChange,
  NavigationButton,
  login,
  verifyOtp
};
