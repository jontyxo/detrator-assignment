"use client";
import { Box,Paper, Typography } from "@mui/material";
export default async function Page(){
  const response =await fetch("https://fakestoreapi.com/products/")

  const data = await response.json();

    return<>
        <Box sx={{display:"flex",alignItems: "center",flexDirection: "column"}}>

{data.map(data=>(
  <>
<Paper elevation={3} sx={{my:3,px:1,py:1, display:'flex', alignItems: "center",flexDirection: "column"}}>

  <Typography sx={{width:'250px', fontWeight: 'bold',textAlign: 'center'}}>{data.title}</Typography>
<Box sx={{py:1}}>
<img width='400px' height='auto' src={data.image} />
</Box>
<Box sx={{display: 'flex', justifyContent: 'space-between',width:'100%', py:1}}>

<Typography sx={{fontWeight: 'bold'}}>Price: {data.price}</Typography>
<Typography>Rating: {data.rating.rate}⭐</Typography>
</Box>
<Typography width='400px'>
Description: {data.description}
</Typography>

</Paper>
  </>
))}
</Box>
    </>
}