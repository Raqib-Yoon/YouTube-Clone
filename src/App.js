import React from 'react'
import { Box, Stack } from "@mui/material"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { Navbar, Feed, VideoDetails, ChannelDetails, SearchFeed } from "./components"

import './styles/style.css'

const App = () =>
(
    <BrowserRouter>
        <Box sx={{ backgroundColor: "#121212", }}>
            <Navbar />
            <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetails />} />
                <Route path='/channel/:id' element={<ChannelDetails />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App