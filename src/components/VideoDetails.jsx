import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography, useTheme, useMediaQuery } from '@mui/material'
import { Link, useParams } from "react-router-dom"
import thumbnails from './utils/constants'
import { Videos } from './'
import ReactPlayer from 'react-player'
import FetchFromApi, { relatedVideos } from "./utils/FetchFromApi"
import { CheckCircle } from '@mui/icons-material'








const VideoDetails = () => {

  const [videoDetails, setVideoDetails] = useState([])
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  const theme = useTheme()

  const onSM = useMediaQuery(theme.breakpoints.down('sm'))
  const onMD = useMediaQuery(theme.breakpoints.down('md'))
  const onXS = useMediaQuery(theme.breakpoints.down('xs'))

  useEffect(() => {

    FetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) => setVideoDetails(data.items[0]))


    relatedVideos(id).then((data) => setVideos(data))

  }, [id])

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", sm: "row", flexWrap: "wrap" }}>
        <Box sx={{ backgroundColor: "red", flexBasis: "70%", width: "100%", height: "100%", position: "sticky", top: "86px" }}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width='100%' height={onSM ? "15rem" : "23rem"} />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {videoDetails?.snippet?.title}
          </Typography>
          <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} px={2} py={1}>
            <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
              <Typography variant={{ xs: "subtitle1", md: "h6" }} color={"#fff"}>
                {/* channel title here */}
                {videoDetails?.snippet?.channelTitle}

              </Typography>
              <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </Link>
            <Stack direction={'row'} gap="20px" alignItems="center">
              <Typography variant='subtitle2' sx={{ opacity: "0.7" }}>
                {/* viwers count here */}
                {videoDetails?.statistics?.likeCount} viewers
              </Typography>

              <Typography variant='subtitle2' sx={{ opacity: "0.7" }}>
                {/* Liker's count here */}
                {videoDetails?.statistics?.viewCount} likes
              </Typography>

            </Stack>
          </Stack>
        </Box>

        {/* Related Videos Block */}

        <Stack alignItems='center' px={2} py={{ xs: 5, md: 1 }} justifyContent="center">

          <Videos direction="column" videos={videos} />

        </Stack>


      </Stack >
    </Box>
  )
}

export default VideoDetails