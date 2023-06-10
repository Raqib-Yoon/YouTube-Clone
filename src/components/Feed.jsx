import { Box, Stack, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'

import { SideBar, Videos } from './'

import { thumbnails } from './utils/constants'
import FetchFromApi from './utils/FetchFromApi'


const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState("New")
    const [videos, setVideos] = useState([])

    useEffect(() => {

        FetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => setVideos(data))
    }, [selectedCategory])


    return (
        <Stack direction={{ xs: "column", md: "row" }} mt='1rem'>
            <Box>
                <SideBar
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                />
            </Box>

            <Box
                sx={{
                    px: 2,
                    py: 1,
                }}

            >
                <Typography variant="h5" sx={{ color: 'white', mb: { xs: "10px", md: undefined } }}><span style={{ color: "red" }}>{selectedCategory} </span>Videos</Typography>

                <Videos videos={videos} />

            </Box>
        </Stack>
    )
}

export default Feed