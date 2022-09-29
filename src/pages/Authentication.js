import React from 'react'
import { Grid } from '@mui/material'
import Commonbutton from '../Component/Common/CommonButton/Commonbutton'
const Authentication = () => {
    const buttonstyle = {
        backgroundColor: "yellow",


    }
    return (

        <Grid xs={8} item >
            this is authentication page
            <Commonbutton
                size="large"
                // color="primary"
                sx={buttonstyle}
            >Text</Commonbutton>
            <Commonbutton
                variant="contained"
            >Text</Commonbutton>
        </Grid>

    )
}

export default Authentication
