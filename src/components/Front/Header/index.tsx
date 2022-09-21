import NextLink from "next/link";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import List from "@mui/material/List";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const pages = ["Products", "Pricing", "Blog"];

export const Header: React.FC = () => {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Container sx={{ py: 1 }} maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <NextLink href="/">
              <CardMedia
                component="img"
                sx={{
                  height: "30px",
                  width: "auto",
                  cursor: "pointer",
                }}
                image="/assets/images/logo.png"
                alt="random"
              />
            </NextLink>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={handleCloseNavMenu}
                    color="text.primary"
                    href="/account/login"
                    sx={{ my: 1, mx: 1.5 }}
                  >
                    <Typography textAlign="center" color="text.primary">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <List sx={{ display: "flex" }} disablePadding={true}>
              {pages.map((page) => (
                <Link key={page} component={NextLink} href="/account/login">
                  <Typography
                    textAlign="center"
                    sx={{
                      mx: 2,
                      fontSize: 16,
                      cursor: "pointer",
                    }}
                    color="text.primary"
                  >
                    {page}
                  </Typography>
                </Link>
              ))}
            </List>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
            <Link component={NextLink} href="/account/login">
              <Typography
                textAlign="center"
                display="flex"
                alignItems="center"
                sx={{
                  bgcolor: "#461a42",
                  borderRadius: 2,
                  textAlign: "center",
                  color: "#ffffff",
                  textTransform: "unset",
                  fontSize: "1rem",
                  fontWeight: "700",
                  lineHeight: "50px",
                  paddingX: "20px",
                  cursor: "pointer",
                  "&.MuiTypography-root:hover": {
                    bgcolor: "#994192",
                  },
                }}
                color="text.primary"
              >
                Sign up
                <ArrowForwardIosIcon fontSize="small" />
              </Typography>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
