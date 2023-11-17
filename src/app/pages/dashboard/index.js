import { fieldValidator, usePrevious } from "../../common/custom";
import { message, Modal } from "antd";
import Button from "../../components/ButtonComponents/Button";
import NavigationButton from "../../components/ButtonComponents/NavigationButton";
import Loader from "../../common/loader";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { getUserDetails } from "../../storage/user";

import dayjs from "dayjs";
import Table from "react-bootstrap/Table";
import { PaginationFooter } from "../../common/pagination";
import DateInput from "../../components/FormComponents/DateInput";
import TextInput from "../../components/FormComponents/TextInput";
import SelectInput from "../../components/FormComponents/SelectInput";
import Swal from "sweetalert2";
import {
  getToalIncomeExpanse,
  getExpenseByCategory,
  getIncomeExpenseSummary,
  getExpenseDays,
} from "../../redux/dashboard/dashboard.action";

message.config({
  maxCount: 1,
});
export {
  fieldValidator,
  usePrevious,
  message,
  Button,
  Loader,
  useDispatch,
  useSelector,
  _,
  NavigationButton,
  PlusOutlined,
  getUserDetails,
  dayjs,
  Table,
  PaginationFooter,
  EditOutlined,
  DeleteOutlined,
  Modal,
  DateInput,
  TextInput,
  SelectInput,
  Swal,
  getToalIncomeExpanse,
  getExpenseByCategory,
  getIncomeExpenseSummary,
  getExpenseDays,
};
