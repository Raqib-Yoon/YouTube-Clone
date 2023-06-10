import React, { useState } from 'react'
import { Stack, Chip, IconButton } from "@mui/material"
import { categories } from "./utils/constants"


const ButtonStyle = {
  textTransform: "capitalize",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
  cursor: "pointer",
  outline: "none",
  border: "none",
  color: "white",
  padding: "4px 15px",
  borderRadius: "20px",
  transition: "all 0.3s ease",
  fontSize: "1rem",
  gap: "1rem",
}

const SideBar = ({selectedCategory,setSelectedCategory}) => {



  return (
    <Stack
      direction={{ xs: "row", md: "column" }}
      sx={{
        px: 2,
        borderRight: "1px solid #1d1c1c",
        overflow: "auto"
      }}
      spacing={1}
    >
      {
        categories.map(({ name, icon }, index) => (
          <IconButton
            onClick={() => { setSelectedCategory(name) }}
            className="category-btn"
            key={index}
            style={ButtonStyle}
            sx={{
              backgroundColor: selectedCategory === name ? "red" : undefined,
              "&:hover": {
                backgroundColor: "red",
              }
            }}
          >
            <span style={{
              fontSize: "0.6rem", color: selectedCategory === name ? "white" : "red"
            }}>{icon}</span>
            <span>{name}</span>
          </IconButton>
        ))
      }
    </Stack >
  )
}

export default SideBar