import { apiSlice } from "@/redux/rootApi/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => ({
                url: `/auth/login-user`,
                method: "POST",
                body: data
            })
        }),
        getProducts: builder.query({
            query: () => ({
                url: `/product/get-products`,
            })
        }),
    })
})

export const {useLoginUserMutation} = productApi;