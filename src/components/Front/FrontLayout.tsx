import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Header } from "./Header";
import { Footer } from "./Footer";

type Props = {
  children: any;
  bgColor?: any;
};
export default function FrontLayout({ children, bgColor }: Props) {
  return (
    <React.Fragment>
      <Box sx={{ background: bgColor }}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <Header />
        {/* Hero unit */}
        <Box sx={{ pt: 8, pb: 6 }}>{children}</Box>
        {/* End hero unit */}

        <Footer />
        {/* End footer */}
      </Box>
    </React.Fragment>
  );
}
