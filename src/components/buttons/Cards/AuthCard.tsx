import { Container, Card, Grid, GridCol } from "@mantine/core";
import { ReactNode } from "react";

type AuthCardProps = {
  children: ReactNode;
};

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <Container
      sx={{ display: "grid", placeContent: "center", minHeight: "100vh" }}
      py="sm"
      size="lg"
    >
      <Card
        radius="md"
        shadow="xl"
        w={{ sm: "300px", md: "600px", lg: "700px" }}
        withBorder
        p={0}
        bg="white"
      >
        <Grid>
          <GridCol
            sx={{
              background: "url(/img/gradient-bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            span={{ sm: 0, md: 6 }}
            h={{ sm: 0, md: "60vh" }}
          ></GridCol>
          <GridCol
            sx={{ placeContent: "center" }}
            span={{ sm: 12, md: 6 }}
            px="xl"
            mb={{ sm: "xl" }}
          >
            {children}
          </GridCol>
        </Grid>
      </Card>
    </Container>
  );
};

export default AuthCard;
