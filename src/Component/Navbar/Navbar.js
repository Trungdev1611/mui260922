import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './constant'
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import { sxNav } from './styleNav';
import { Divider, Toolbar } from '@mui/material';
export default function Navbar() {
    // const [showDrawer, setShowDrawer] = useState(true);
    const navigate = useNavigate()

    return (
        <div>

            <React.Fragment>
                <Drawer
                    anchor={"left"}
                    open={true}
                    sx={sxNav.drawer}
                    variant="permanent"
                >
                    <Toolbar />
                    <Divider />
                    <List >

                        {mainNavbarItems.map((item) => {
                            return <ListItem key={item.id} onClick={() => navigate(item.route)} sx={sxNav.icon}>
                                <ListItemIcon >{item.icon}</ListItemIcon>
                                <ListItemText primary={item.label} />
                            </ListItem>
                        })}

                    </List>
                </Drawer>
            </React.Fragment>

        </div>
    );
}
