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
        getOrderNumber: builder.query({
            query: () => ({
                url: `/payment/get-order-number`,
            })
        }),
        getOrder: builder.query({
            query: (order:string | null) => ({
                url: `/payment/get-order/${order}`,
            })
        }),
    })
})

export const {useCreatePaymentMutation, useGetOrderNumberQuery, useGetOrderQuery} = paymentApi;