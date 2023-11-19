import { apiSlice } from "@/redux/rootApi/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductByCategory: builder.query({
            query: (id) => ({
                url: `/product/get-product-by-category/${id}`,
            })
        }),
        getProducts: builder.query({
            query: ({page, limit, selectCategory, searchTerm}:{page:number, limit:number, selectCategory: string | null, searchTerm: string}) => ({
                url: `/product/get-products?page=${page}&limit=${limit}&category=${selectCategory}&searchTerm=${searchTerm}`,
            })
        }),
    })
})

export const {useGetProductByCategoryQuery, useGetProductsQuery} = productApi;