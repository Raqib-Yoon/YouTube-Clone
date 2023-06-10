import React from 'react'
import { Stack, Card, CardMedia, CardContent, Typography, Box } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from "react-router-dom"


const VideoCard = ({ video}) => {
    // console.log(video)

    return (
        <>
            <Card key={video?.id?.videoId} sx={{ backgroundColor: "#000",maxWidth:'300px' }}>

                <Link to={`/video/${video?.id?.videoId}`}>
                    <CardMedia
                        image={video?.snippet?.thumbnails?.high?.url}
                        sx={{ width: { xs: "300px", sm: "300px" }, height: { xs: "8rem", sm: "8rem" }, }}
                    >
                    </CardMedia>
                </Link>

                <CardContent sx={{ paddingTop: "15px", pb: 0 }}>
                    <Typography sx={{ color: 'white', fontSize: "0.8rem", lineHeight: 1.5 }}
                        variant="subtitle1">{video?.snippet?.title.slice(0, 60)}</Typography
                    >

                    <Stack direction="row" mt="0.8rem" alignItems="center" justifyContent="space-between" >
                        <Link to={video?.snippet?.channelId ? `/channel/${video?.snippet?.channelId}` : `/channel/default`}>
                            <Stack direction='row' alignItems="center">
                                <CheckCircle sx={{ color: "white", fontSize: "0.7rem" }} />
                                <Typography sx={{ color: 'white', fontSize: "0.7rem", ml: '0.4rem' }} variant="body2">{video?.snippet?.channelTitle.slice(0, 20)}</Typography>
                            </Stack>
                        </Link>

                        <Stack direction="row" alignItems="center">
                            <Typography sx={{ color: 'white', fontSize: "0.7rem", }} variant="body2">5.8M Views</Typography>
                            <Typography sx={{ color: 'white', fontSize: "0.7rem", ml: '0.4rem' }} variant="body2">6 Hours ago</Typography>
                        </Stack>
                    </Stack >
                </CardContent>

            </Card>
        </>

    )
}


export default VideoCard