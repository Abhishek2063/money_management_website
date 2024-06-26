import { Tokens } from "../../app/storage/index";
export let config = () => {
  let withOutAuthconfig, authConfig;
  authConfig = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers" : "*",

      Authorization: `${
        Tokens.getToken() ? Tokens.getToken() : Tokens.getVerifyToken()
      }`,
    },
  };
  withOutAuthconfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  return Tokens.getToken() || Tokens.getVerifyToken()
    ? authConfig
    : withOutAuthconfig;
};
