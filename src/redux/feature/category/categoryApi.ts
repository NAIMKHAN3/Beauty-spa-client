import { apiSlice } from "@/redux/rootApi/apiSlice";

const categoryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => ({
                url: "/category/get-category",
            })
        })
    })
})

export const {useGetCategoryQuery} = categoryApi;