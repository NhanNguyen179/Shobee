import {Box, Button, Grid} from "@mui/material";
import {useState} from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {statusOrder} from "./interface";
import {amber} from "@mui/material/colors";
import OrderView from "./OrderView";

const listStatus:Array<statusOrder> = [
    {name:"wait",value:"wait_for_confirm"},
    {name:"comfirm",value:"confirmed"},
    {name:"delivery",value:"delivering"},
    {name:"completed",value:"completed"},
    {name:"cancelled",value:"cancelled"}
]

export default function OrderContainer( ){
    const [sta,setSta] = useState<statusOrder>(listStatus[0])
    const handleTabChange = (e:any)=>{
        setSta((prevState)=>{
            const a = listStatus.find((x)=>x.value===e.target.value)
            if(a){
                return a
            }
            else
                return listStatus[0]
        })
    }

    return (
        <Box style={{margin:"100px auto",maxWidth:"1024px"}}>
            <Grid container style={{maxWidth:"100%"}}>
                {
                    listStatus.map((o)=>{
                        return (<Grid item xs={2}><Button style={{color:amber[700],alignItems:"center",width:"100%"}} onChange={(e)=>handleTabChange(o.value)}>{o.name}</Button> </Grid>)
                    })
                }
            </Grid>
            <Box>
                <OrderView status={sta.value}/>
            </Box>
        </Box>
    )
}