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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
export const HeaderAccount: React.FC = () => {
  return (
    <AppBar
      position="static"
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
                  // 16:9
                  height: "30px",
                  width: "auto",
                  cursor: "pointer",
                }}
                image="/assets/images/white-brandmark.png"
                alt="random"
              />
            </NextLink>
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
                  bgcolor: "#5d2057",
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
                    bgcolor: "#5d2057",
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
