import {Avatar, Box, Button, FormControl, Grid, Rating, Switch} from "@mui/material";
import React, {useEffect, useRef, useState} from "react";
import orderApi from "../../api/orderApi";
import {IOrderDetail, IReviewOrder} from "./interface";
import Link from "@mui/material/Link";
import util from "./util";
import {amber, cyan, grey, red} from "@mui/material/colors";
import OrderItem from "./OrderItem";
import StorefrontIcon from '@mui/icons-material/Storefront';
import {Star} from "@material-ui/icons";
import StarIcon from '@mui/icons-material/Star';
const dump = {
    createdAt: "2022-11-13T11:00:04.141Z",
    updatedAt: "2022-11-13T11:00:04.141Z",
    address: "24 Lê Anh Xuân,Quận Hải Châu,Phường Hòa Cường Nam,Đà Nẵng",
    totalDiscount: 4500,
    productDiscount: 0,
    voucherDiscount: 4500,
    totalPrice: 900000,
    deliveryFee: 15500,
    total: 911000,
    status: "wait_for_confirm",
    customer: {
        id: "358ccf48-dcd7-4db3-a805-903faa468c7c",
        name: "Huy Phan",
        email: "huy.phan@gmail.com",
        phone: null,
    },
    shop: {
        id: "358ccf48-dcd7-4db3-a805-903faa468c7c",
        name: "Huy Phan",
        avatar:"data:image/jpeg;base64,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",
        email: "huy.phan@gmail.com",
        phone: null,
    },
    items: [
        {
            id: "31f52466-8336-4b8f-922c-ede0c4435bdd",
            quantity: 3,
            product: {
                id: "8b5a6059-08d2-4910-b00d-492c51882a7e",
                name: "Áo Khoác Nhẹ Nam 3",
                description:
                    "Vải MeRo 2 Lớp Cổ Kiểu Dày - Áo Khoác 3 Sọc Nữ Chống Nắng, Mưa Gió, Gió Cách Nhiệt Xu hướng 2022",
                price: 300000,
                avatar:
                    "data:image/jpeg;base64,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",
                discount:0.5
            },
        },
        {
            id: "31f52466-8336-4b8f-922c-ede0c4435qwe",
            quantity: 3,
            product: {
                id: "8b5a6059-08d2-4910-b00d-492c51882a7e",
                name: "Áo Khoác Nhẹ Nam 3",
                description:
                    "Vải MeRo 2 Lớp Cổ Kiểu Dày - Áo Khoác 3 Sọc Nữ Chống Nắng, Mưa Gió, Gió Cách Nhiệt Xu hướng 2022",
                price: 300000,
                avatar:
                    "data:image/jpeg;base64,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",
                discount: 0.4
            },
        }
    ],
} as IOrderDetail;

const dumprv = {
    id: "1",
    updatedAt: "wqeqwewq",
    content: "sadawqewqewq",
    rating: 3,
}

export default function OrderDetail(child:any){
    const orderId = child.orderId as string
    const refReviewContent = useRef<any>(null)
    const [order,setOrder] = useState<IOrderDetail|null>(dump)
    const [review,setReview] = useState<IReviewOrder|null>(dumprv)
    const [enableReview,setEnableReview] = useState<boolean>(()=>{
        if(review) return false
        else return true
    })
    useEffect(()=>{
        async function fetch(){
            const response1 = await orderApi.detailOrderById(orderId)
            const data = response1.data as IOrderDetail
            if(data){
                setOrder(data)
            }

            // get review
            orderApi.getReviewByOrderId(orderId).then((response)=>{
                if(response.data) {
                    const data = response.data as IReviewOrder
                    setReview(data)
                    setEnableReview(false)
                }
            })
        }
        fetch().then()
    },[])

    const handleEnabelReviewChange= (e:any)=>{
        console.log(e.target.checked)
        if(e.target.checked ){
            setEnableReview(true)
        }else{
            setEnableReview(false)
        }

    }
    const handleReviewContentChange= (e:any)=>{
        setReview(prevState => {
            return {
                ...prevState,
                content: refReviewContent.current.value
            } as IReviewOrder
        })
        console.log(review)
    }
    const handleChangeRating = (e:any,value:number|null)=>{
        if(value){
            setReview(prevState => {
                return {
                    ...prevState,
                    rating: value
                } as IReviewOrder
            })
        }
        console.log(review)
    }

    return (
        <Box mt={5} style={{minHeight:"100px",backgroundColor:'white',boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <Box  style={{padding:"20px"}}>
                {/*header*/}
                <Box style={{padding:"20px 0",cursor:'pointer',borderBottom:"1px solid",borderColor:grey[300],display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                    <Box >
                        <div style={{display:'flex',alignItems:"center"}}>
                            <h3>Chi tiết đơn hàng</h3>
                        </div>
                        <div style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
                            <StorefrontIcon/>
                        <h3 style={{color:amber[900],margin:'0 10px'}}>Cửa hàng </h3>
                        <Link>{order?.shop.name}</Link>
                        </div>
                    </Box>
                    <Box style={{display:'flex',justifyContent:"center",alignItems:"center"}}>
                        <p style={{marginRight:"3px", color:cyan[400]}}>{util.getNameStatusByValue(order?.status)}</p>
                        {review?.id?<p style={{ color:amber[900]}}><span style={{marginRight:'3px'}}>|</span>Đã đánh giá</p>:<></>}
                    </Box>
                </Box>
                {/*body*/}
                <Box>
                    {order?.items.map(item=>{
                        return <OrderItem key={item.id} item={item}></OrderItem>})
                    }
                </Box>
                {/*footer*/}
                <Box mt={5}>
                    <Grid container>
                        <Grid xs={8}>
                            <Box>
                            <label style={{fontWeight:"bold",color:amber[900]}} htmlFor={"address"}>Địa chỉ nhận hàng</label>
                            <p id={"address"}>{order?.address}</p>
                            </Box>
                            <Box>
                                <label htmlFor={"reviewEnable"} style={{color:amber[900]}}>Mở đánh giá</label>
                                <Switch
                                    id={"reviewEnable"}
                                    checked={enableReview}
                                    onChange={e => handleEnabelReviewChange(e)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </Box>
                            <Box sx={enableReview?{display:"block"}:{display: "none"}} >
                            <FormControl  style={{width:'80%'}}>
                                <div style={{display:"flex",flexDirection:"column"}}>
                                    <label htmlFor={"contentReview"}>Nội dung đánh giá </label>
                                    <textarea rows={10} ref={refReviewContent} style={{resize:"none",columns:30,maxHeight:300}} id={"contentReview"} value={review?review.content:""} onChange={(e)=>handleReviewContentChange(e)}/>
                                    <br/>
                                    <label htmlFor={"ratingReview"}>Xếp hạng </label>
                                    <div style={{width:"100%",textAlign:"center"}}>
                                        <Rating  size={'large'} id={"ratingReview"} value={review?review.rating:5} onChange={(e,value)=>handleChangeRating(e,value)}/>
                                    </div>
                                    <Button style={{backgroundColor:amber[900],color:"white"}}>Đánh giá</Button>
                                </div>
                            </FormControl>
                            </Box>
                        </Grid>
                        <Grid xs={4}>
                            <Grid container>
                                <Grid item xs={6}><p>Tổng tiền</p></Grid>
                                <Grid item xs={6}><p> {util.convertToMoneyString(order?.totalPrice)}</p></Grid>
                                <Grid item xs={6}><p>Phí vận chuyển</p></Grid>
                                <Grid item xs={6}><p>{util.convertToMoneyString(order?.deliveryFee)}</p></Grid>
                                <Grid item xs={6}><p>Giảm giá</p></Grid>
                                <Grid item xs={6}><p>- {util.convertToMoneyString(order?.totalDiscount)}</p></Grid>
                                <Grid item xs={6}><p>Tiền phải thanh toán</p></Grid>
                                <Grid item xs={6}><p style={{color:red[700]}}>{util.convertToMoneyString(order?.total)}</p></Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}