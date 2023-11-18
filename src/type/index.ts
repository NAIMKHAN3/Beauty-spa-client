export interface IProduct {
    _id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: {
        _id: string;
        name: string
    };
    inStock: boolean;
    createdAt?:string;
    updatedAt?:string;
}