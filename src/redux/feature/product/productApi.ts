import { apiSlice } from "@/redux/rootApi/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductByCategory: builder.query({
            query: (id) => ({
                url: `/product/get-product-by-category/${id}`,
            })
        }),
        getProducts: builder.query({
            query: ({page, limit, selectCategory}:{page:number, limit:number, selectCategory: string | null}) => ({
                url: `/product/get-products?page=${page}&limit=${limit}&category=${selectCategory}`,
            })
        }),
    })
})

export const {useGetProductByCategoryQuery, useGetProductsQuery} = productApi;