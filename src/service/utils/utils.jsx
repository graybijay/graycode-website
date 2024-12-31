
import { ApiEndPoints } from "@/src/config/apiconfig";
import axios from "axios";

const UtilsService = {
  async getSeoByPage(url) {
    try {
      let normalized = "/";
      if (url && url !== "") {
        normalized = url.split("?")[0];
      }
      const res = await axios.get(
        `${ApiEndPoints.api}/seo/getbypage?url=${normalized}`
      );
      if (
        res &&
        res.data &&
        res.data !== "undefined" &&
        res.data.Code === 200
      ) {
        if (res.data.Data === "undefined") {
          return {};
        }
        return JSON.stringify(res.data.Data);
      } else {
        return {};
      }
    } catch (error) {
      return {
        Message: error?.message,
        Code: error?.status,
        Data: null,
        loading: false,
      };
    }
  },

  async GetBlogDetail(slug) {
    try {
      const res = await axios.get(
        `${ApiEndPoints.api}/blogs/details?slug=${slug}`
      );
      if (
        res &&
        res.data &&
        res.data !== "undefined" &&
        res.data.Code === 200
      ) {
        if (res.data.Data === "undefined") {
          return {};
        }
        return JSON.stringify(res.data.Data);
      } else {
        return null;
      }
    } catch (error) {
      return {
        Message: error?.response?.statusText,
        Code: error?.response?.status,
        Data: null,
        loading: false,
      };
    }
  },
};

export default UtilsService;