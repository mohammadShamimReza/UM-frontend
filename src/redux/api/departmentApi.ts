import { tagTypes } from "../teg-Types";
import { baseApi } from "./baseApi";

const DEPARTMENT_URL = "/academic-departments";

export const departmentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addDepartment: build.mutation({
      query: (data) => ({
        url: DEPARTMENT_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.department],
    }),
  }),
});

export const { useAddDepartmentMutation } = departmentApi;
