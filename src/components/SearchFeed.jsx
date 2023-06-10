import React,{useState,useEffect} from 'react'
import { Box, Typography } from "@mui/material"
import { useParams } from 'react-router-dom'

import { Videos } from './'
import FetchFromApi  from './utils/FetchFromApi'

const SearchFeed = () => {

  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams()

  useEffect(() => {

    FetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) => setVideos(data))

  }, [searchTerm])



  return (
    <Box
      sx={{
        px: 2,
        py: 1,
        height:"95vh",
        overflow:"auto"
      }}

    >
      <Typography variant="h5" sx={{ color: 'white', mb: { xs: "10px", md: undefined } }}>Search Results for<span style={{ color: "red" }}> {searchTerm} </span>Videos</Typography>

      <Videos videos={videos} />

    </Box>
  )
}

export default SearchFeed