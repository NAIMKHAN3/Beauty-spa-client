import { apiSlice } from "@/redux/rootApi/apiSlice";

const paymentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createPayment: builder.mutation({
            query: (data) => ({
                url: `/payment/create-payment`,
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

export const {useCreatePaymentMutation} = paymentApi;