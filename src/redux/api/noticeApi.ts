import { IMeta, INotice } from "@/types";
import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const BUILDING_URL = "/notice";

export const buildingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all building
    Notices: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: BUILDING_URL,
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: INotice[], meta: IMeta) => {
        return {
          notice: response,
          meta,
        };
      },
      providesTags: [tagTypes.building],
    }),
    // get single building
    notice: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `${BUILDING_URL}/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.building],
    }),
    // create a new building
    addNotice: build.mutation({
      query: (data) => ({
        url: BUILDING_URL,
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.building],
    }),
    // update existing building
    updateNotice: build.mutation({
      query: (data) => ({
        url: `${BUILDING_URL}/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.building],
    }),
    // delete existing building
    deleteNotice: build.mutation({
      query: (id) => ({
        url: `${BUILDING_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.building],
    }),
  }),
});

export const {
  useAddNoticeMutation,
  useNoticesQuery,
  useNoticeQuery,
  useUpdateNoticeMutation,
  useDeleteNoticeMutation,
} = buildingApi;
