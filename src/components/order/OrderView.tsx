import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import {IOrderSearch, IResponseOrder} from "./interface";
import {Avatar, Button, Pagination} from "@mui/material";
import {Box} from "@material-ui/core";
import orderApi from "../../api/orderApi";
import util from "./util"
import OrderDetail from "./OrderDetail";
import DeleteIcon from '@mui/icons-material/Delete';
import constant from "./constant";
const dump :Array<IOrderSearch>= [
    {
        id:"1",
        total:20000,
        status:"wait_for_confirm",
        createdAt:new Date().toDateString(),
        updatedAt:new Date().toDateString(),
        shop:{
            name:"trungtrungtrungtrungtrungtrungtrungtrungtrung",
            id:"1",
            avatar:"data:image/jpeg;base64,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"
        },
        items:[]
    },
    {
        id:"2",
        total:20000,
        status:"wait_for_confirm",
        createdAt:new Date().toDateString(),
        updatedAt:new Date().toDateString(),
        shop:{
            name:"trungtrungtrungtrungtrungtrungtrungtrungtrung",
            id:"1",
            avatar:"data:image/jpeg;base64,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"
        },
        items:[]
    },
    {
        id:"3",
        total:20000,
        status:"wait_for_confirm",
        createdAt:new Date().toDateString(),
        updatedAt:new Date().toDateString(),
        shop:{
            name:"trungtrungtrungtrungtrungtrungtrungtrungtrung",
            id:"1",
            avatar:"data:image/jpeg;base64,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"
        },
        items:[]
    },
]

export default function OrderView(child:any) {
    const inputStatus = child.status
    const [orders,setOrders] = useState<Array<IOrderSearch>>(dump)
    const [page, setPage] = useState(1);
    const [numOfPage, setNumOfPage] = useState(1);
    const [detailId,setDetailId] = useState<string|null>(null)

    useEffect( ()=>{
       async function fetch(){
            const response = await orderApi.searchOrderByStatus(inputStatus,page)
            const data = response.data as IResponseOrder
            if(data){
                setOrders(data.orders)
            }
        }
         fetch().then()
    },[page,inputStatus])

    const handleChangePage = (e: any) => {
        setPage(e.value);
    };

    const handlerClickOrderRow = (id:string|null)=>{
        setDetailId(id)
    }

    const handlerCancelOrder = (id:string) =>{
        if(window.confirm("Bạn có chắc chắn muốn hủy đơn hàng này ?")){
            async function fetch(){
                // api cancel
                await orderApi.updateStatusOrder(id,'cancelled')
            }
            fetch().then(async (res) =>{
                const response = await orderApi.searchOrderByStatus(inputStatus,page)
                const data = response.data as IResponseOrder
                if(data){
                    setOrders(data.orders)
                }
                }
            )
        }
    }

    return (
        <Box>
            {
                orders.length ?
                    <Box>
                        <TableContainer component={Paper}>
                            <Table sx={{minWidth: 650}} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Cửa hàng</TableCell>
                                        <TableCell align="left">trạng thái</TableCell>
                                        <TableCell align="left">tổng tiền</TableCell>
                                        <TableCell align="left">ngày mua</TableCell>
                                        <TableCell align="left">số sản phẩm</TableCell>
                                        {inputStatus === constant.status.waitForConfirm.value ?
                                            <TableCell align="left">Hủy đặt hàng </TableCell> : <></>}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {orders.map((row) => (
                                        <TableRow
                                            key={row.id}
                                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                            hover={true}
                                            style={{cursor: "pointer"}}
                                            onClick={e => handlerClickOrderRow(row.id)}
                                        >
                                            <TableCell component="th" scope="row">
                                                <Box style={{display: "flex", alignItems: "center"}}>
                                                    <Avatar src={row.shop.avatar} style={{marginRight: '5px'}}
                                                            variant={"rounded"}></Avatar>
                                                    {util.limitString(row.shop.name, 12)}
                                                </Box>
                                            </TableCell>
                                            <TableCell align="left">{util.getNameStatusByValue(row.status)}</TableCell>
                                            <TableCell align="left">{util.convertToMoneyString(row.total)}</TableCell>
                                            <TableCell
                                                align="left">{util.getFormattedDate(new Date(row.createdAt))}</TableCell>
                                            <TableCell align="left">{row.items.length}</TableCell>
                                            {inputStatus === constant.status.waitForConfirm.value ? <TableCell align="left"><Button
                                                onClick={e => handlerCancelOrder(row.id)}><DeleteIcon/></Button></TableCell> : <></>}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            <Box
                                mt={10}
                                mb={5}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <Pagination
                                    count={numOfPage}
                                    defaultPage={1}
                                    color={"primary"}
                                    variant="outlined"
                                    onChange={(e) => handleChangePage(e)}
                                />
                            </Box>
                        </TableContainer>
                        <Box>
                            {detailId ? <OrderDetail orderId={detailId}/> : <></>}
                        </Box>
                    </Box>
                    : (
                        <Box style={{height:400,backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
                            <img src={"https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/5fafbb923393b712b96488590b8f781f.png"} style={{width:200,height:200}}/>
                            <p>Bạn chưa có đơn hàng nào </p>
                        </Box>
                    )
            }
        </Box>
    );
}