import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import {order, responseOrder} from "./interface";
import {Pagination} from "@mui/material";
import {Box} from "@material-ui/core";
import orderApi from "../../api/orderApi";

const dump :Array<order>= [
    {
        id:"1",
        total:20000,
        status:"asdqweowqe",
        createdAt:new Date().toDateString(),
        updatedAt:new Date().toDateString(),
        shop:{
            name:"trung",
            id:"1"
        },
        items:[]
    },
]

export default function OrderView(child:any) {
    const status = child.status
    const [orders,setOrders] = useState<Array<order>>(dump)
    const [page, setPage] = useState(1);
    const [numOfPage, setNumOfPage] = useState(1);

    useEffect( ()=>{
       async function fetch(){
            const response = await orderApi.searchOrderByStatus(status,page)
            const data = response.data as responseOrder
            if(data){
                setOrders(data.orders)
                setNumOfPage(data.numOfPage)
            }
        }
         fetch().then()
    },[page])

    const handleChangePage = (e: any) => {
        setPage(e.value);
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>shop</TableCell>
                        <TableCell align="right">trạng thái</TableCell>
                        <TableCell align="right">tổng tiền</TableCell>
                        <TableCell align="right">ngày mua</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.shop.name}
                            </TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">{row.total}</TableCell>
                            <TableCell align="right">{new Date(row.createdAt).toDateString()}</TableCell>
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
    );
}