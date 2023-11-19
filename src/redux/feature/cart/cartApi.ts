import { apiSlice } from "@/redux/rootApi/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createCart: builder.mutation({
            query: (data) => ({
                url: `/cart/create-cart`,
                method: "POST",
                body: data
            })
        }),
        getCart: builder.query({
            query: () => ({
                url: `/cart/get-cart`,
            })
        }),
    })
})

export const {useCreateCartMutation, useGetCartQuery} = productApi;