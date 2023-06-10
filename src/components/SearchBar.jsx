import { useState, useEffect } from 'react'
import { Paper, IconButton, Box, useMediaQuery, useTheme } from '@mui/material'
import { Search } from "@mui/icons-material"
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
    const theme = useTheme()
    const onMD = useMediaQuery(theme.breakpoints.down('md'))
    const onSM = useMediaQuery(theme.breakpoints.down('sm'))

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (searchTerm) {
            navigate(`search/${searchTerm}`)
        }

        setSearchTerm('')
    }

    const [searchTerm, setSearchTerm] = useState('')


    return (
        <Paper
            component='form'
            onSubmit={handleSubmit}
            sx={{
                mr: { xs: "0.5rem", md: "5rem" },
                px: 3,
                borderRadius: 50,
                height: "2.5rem"
            }}
        >
            <input
                style={{
                    width: onSM ? "6rem" : "15rem",
                    height: '1.3rem',
                    border: "none",
                    outline: "none",
                    fontSize: "1rem"
                }}
                placeholder="Search..."
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />

            <IconButton sx={{ color: "red", }}>
                <Search />
            </IconButton>
        </Paper>
    )

}

export default SearchBar