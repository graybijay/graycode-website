// let Base_URL = "https://api.graycode.com.np";
let Base_URL = "https://graycodeapi.graycode.com.np";
let Host_URL ="http://localhost:3000";
// let Host_URL ="https://graycodeadmin.graycode.com.np/";
let CompanyId="45"

function getApiEndPoints() {
  let apiEndPoints
   switch (process.env.NODE_ENV) {
    case "development":
      apiEndPoints = {
        api: Base_URL + "/api/v1",
        base: "/",
        baseUrl: Base_URL,
        hostUrl:Host_URL,
        companyId:CompanyId
      };
      break;
    case "production":
      apiEndPoints = {
        api: Base_URL + "/api/v1",
        base: "/",
        baseUrl: Base_URL,
        hostUrl:Host_URL,
        companyId:CompanyId
      };
      break;

    default:
      apiEndPoints = {
        api: Base_URL + "/api/v1",
        base: "/",
        baseUrl: Base_URL,
        hostUrl:Host_URL,
        companyId:CompanyId
      };
  }
  return apiEndPoints;
}
export const ApiEndPoints = getApiEndPoints();