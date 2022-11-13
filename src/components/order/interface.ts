interface statusOrder {
    name:string,
    value:string
}

interface productItem {
    id:string,
    name:string,
    description:string,
    prive:string,
    avatar:string
}

interface shopOrder {
    id:string,
    name:string,
}

interface orderAndProduct {
    id:string,
    quantity:number,
    prouct:productItem
}
interface order {
    id:string,
    status:string,
    total:number,
    createdAt:string,
    updatedAt:string,
    shop:shopOrder,
    items:Array<orderAndProduct>,
}

interface responseOrder {
    orders:Array<order>,
    numOfPage:number
}


export type {
    statusOrder,order,shopOrder,orderAndProduct,productItem,responseOrder
}