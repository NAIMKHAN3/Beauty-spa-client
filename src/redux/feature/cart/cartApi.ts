import { apiSlice } from "@/redux/rootApi/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCart: builder.mutation({
            query: (data) => ({
                url: `/cart/create-cart`,
                method: "POST",
                body: data
            }),
            invalidatesTags:["cart"]
        }),
        removeProduct: builder.mutation({
            query: (data) => ({
                url: `/cart/remove-cart-product`,
                method: "PUT",
                body: data
            }),
            invalidatesTags:["cart"]
        }),
        getCart: builder.query({
            query: () => ({
                url: `/cart/get-cart`,
            }),
            providesTags:["cart"]
        }),
    })
})

export const {useCreateCartMutation, useGetCartQuery, useRemoveProductMutation} = productApi;