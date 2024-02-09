import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import {NavLink} from "react-router-dom";
import './css/menu.css'
import Head from "./Head";

export default function AccountMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>

            <Box sx={{display: 'flex', alignItems: 'center', textAlign: 'center'}}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        sx={{ml: 2}}
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar style={{color: "black", backgroundColor: "yellow"}}
                                sx={{width: 100, height: 100}}>Menu</Avatar>
                    </IconButton>
                </Tooltip>
            </Box>
            <Head></Head>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 0,
                            height: 0,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >

                <NavLink to={"/"}>
                    <MenuItem><h2 className="menuTitle">Bienvenue</h2></MenuItem>
                </NavLink>


                <NavLink to={"/About"}>
                    <MenuItem><h2 className="menuTitle">A Propos </h2></MenuItem>
                </NavLink>


                <NavLink to={"/Projets"}>
                    <MenuItem><h2 className="menuTitle">Projets </h2></MenuItem>
                </NavLink>
                <NavLink to={"/Youtube"}>
                    <MenuItem><h2 className="menuTitle">You tube </h2></MenuItem>
                </NavLink>


                <NavLink to={"/Parcours"}>
                    <MenuItem><h2 className="menuTitle">Parcours </h2></MenuItem>
                </NavLink>

                <NavLink to={"/article"}>
                    <MenuItem><h2 className="menuTitle">Articles </h2></MenuItem>
                </NavLink>


                <NavLink to={"/Contact"}>
                    <MenuItem><h2 className="menuTitle">Contact</h2></MenuItem>
                </NavLink>

            </Menu>
        </React.Fragment>
    );
}