import * as React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const OptionHeader = () => {
  return (
    <WrapOption>
      <AccountCircleIcon />
      <LinkLogin>Đăng nhập </LinkLogin>
      <IconButton aria-label="cart">
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </WrapOption>
  );
};
export default OptionHeader;
const WrapOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LinkLogin = styled.a`
  margin-left: 12px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #6a983c;
  margin-right: 45px;
`;
