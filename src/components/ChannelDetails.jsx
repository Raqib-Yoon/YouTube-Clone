import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from "@mui/material"
import { ChannelCard, Videos } from "./"

import FetchFromApi from './utils/FetchFromApi'

const ChannelDetails = () => {

    const [videos, setVideos] = useState([])
    const [channelDetail, setChannelDetail] = useState([])

    const { id } = useParams()

    useEffect(() => {
        FetchFromApi(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data?.items[0]))
        console.log(channelDetail)
        FetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideos(data))
    }, [id])


    return (
        <Box
            sx={{
                backgroundColor: "#121212"
            }}
        >
            <div style={{ height: "15rem", backgroundImage: "linear-gradient(45deg, #803aa3, #17d7aa)" }} />
            <ChannelCard channelDetail={channelDetail} margin="auto" marginTop="-70px" />

            <Box
                sx={{
                    p: 2,
                    mt: "70px"
                }}
            >
                <Videos videos={videos} />
            </Box>

        </Box >
    )
}

export default ChannelDetails