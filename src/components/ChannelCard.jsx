import React from 'react'
import { CardMedia, Typography, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from "react-router-dom"

const ChannelCard = ({ channelDetail, marginTop, marginBottom, margin }) => {
    return (

        <Box key={channelDetail?.id?.channelId}
            sx={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
                width: "250px",
                margin,
                marginTop,
                mb: marginBottom,

            }}
        >

            <Link to={`/channel/${channelDetail?.id?.channelId}`}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    color: "#fff"
                }}
            >
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high?.url}
                    sx={{ width: "180px", height: "180px", borderRadius: "50%", boxShadow: "none", border: "1px solid #e3e3e3", mb: 2 ,margin:"auto"}}
                    
                />


                <Typography variant="h6" sx={{ color: "gray" }}  align='center' >
                    <CheckCircle sx={{ fontSize: 14, color: "gray", mr: "5px" }}/>
                    {channelDetail?.snippet?.title}
                </Typography>
                <Typography align="center" sx={{ color: 'gray' }}>
                    {
                        channelDetail?.statistics?.subscriberCount
                    }
                </Typography>
                )
            </Link>
        </Box >
    )

}

export default ChannelCard