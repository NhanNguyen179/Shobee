import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}
const NavBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", background: "#F9F9F9" }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTabOption label="Page One" href="/drafts" />
        <LinkTabOption label="Page Two" href="/trash" />
        <LinkTabOption label="Page Three" href="/spam" />
      </Tabs>
    </Box>
  );
};
export default NavBar;
const LinkTabOption = styled(LinkTab)`
  margin-right: 35px !important;
  font-family: 'Poppins' !important;
font-style: normal;
font-weight: bold !important;
font-size: 15px !important;
line-height: 22px !important;
`;
