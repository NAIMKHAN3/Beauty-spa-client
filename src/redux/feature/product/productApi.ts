import { apiSlice } from "@/redux/rootApi/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductByCategory: builder.query({
            query: (id) => ({
                url: `/product/get-product-by-category/${id}`,
            })
        })
    })
})

export const {useGetProductByCategoryQuery} = productApi;