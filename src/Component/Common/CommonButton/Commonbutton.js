import React from 'react'
import { Button } from '@mui/material'
const Commonbutton = ({ color, sx, children, size, variant, disable }) => {
    return (
        <Button color={color} sx={sx} size={size} variant={variant} >
            {children}
        </Button>
    )
}

export default Commonbutton
