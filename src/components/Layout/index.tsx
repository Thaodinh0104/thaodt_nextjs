import { Footer } from "@components/Footer";
import { Header } from "@components/Header";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
export default function Layout({ children }: { children: any }) {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
}
