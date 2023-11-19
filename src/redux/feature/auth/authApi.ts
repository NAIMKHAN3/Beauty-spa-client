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
        signupUser: builder.mutation({
            query: (data) => ({
                url: `/auth/create-user`,
                method: "POST",
                body: data
            })
        }),
    })
})

export const {useLoginUserMutation, useSignupUserMutation} = productApi;