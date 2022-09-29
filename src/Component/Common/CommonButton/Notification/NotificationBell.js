import React from 'react'
import { Badge } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
const NotificationBell = () => {
    return (
        <IconButton>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge>
        </IconButton>
    )
}

export default NotificationBell
