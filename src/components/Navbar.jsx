import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link } from "react-router-dom"

import logo from "../images/logo.png"

import { SearchBar } from './'

const Navbar = () =>
(
  <Stack direction="row" sx={{ position: "sticky",zIndex:"10", top: "0",pb:2, px: 2, backgroundColor: "#121212" }} justifyContent="space-between">
    <Stack direction={"row"} alignItems="center" justifyContent="space-between" width="100%" mt="1rem">

      <Link to="/" >
        <img src={logo} style={{ width: "3rem" }} />
      </Link>
      <SearchBar />
    </Stack>
  </Stack>

)

export default Navbar