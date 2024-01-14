import { Box, Container, IconButton } from "@mui/material";
import headerStyles from "./headerStyles";
import { Icon } from "@iconify/react";

const MainHeader = () => {
  return (
    <Box sx={headerStyles.topBox}>
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <IconButton sx={headerStyles.humBurger}>
            <Icon icon="heroicons-outline:menu" />
          </IconButton>
          <Box
            component={"img"}
            sx={headerStyles.headerLogo}
            src="images/logo-black.svg"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MainHeader;
