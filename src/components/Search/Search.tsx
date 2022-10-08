import { Box, InputLabel, MenuItem, TextField } from "@material-ui/core";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const [category, setCategory] = React.useState("1");

  const handleChange = (event: any) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <WrapBox sx={{ display: "flex", alignItems: "flex-end" }}>
        <Select
          id="demo-simple-select"
          value={category}
          label="Age"
          sx={{ boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
          onChange={(e) => handleChange(e)}
          style={{ height: "42px" ,borderRadius: '12px' , width : '200px' ,  fontWeight: 'bold' }}
        >
          <MenuItem value={"1"}>All Category </MenuItem>
          <MenuItem value={"10"}>Category 1 </MenuItem>
          <MenuItem value={"20"}>Category 2</MenuItem>
          <MenuItem value={"30"}>Category 3</MenuItem>
        </Select>
        <TextSearch
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
            disableUnderline: true
          }}
        />
      </WrapBox>
    </div>
  );
};
export default Home;
const TextSearch = styled(TextField)`
  height: 42px;
  &:after {
    border: none;
  }
  width : 300px;
`;
const WrapBox = styled(Box)`
  height: 42px;
  background: #F9F9F9;
  border: 1px solid #D1D1D1;
  border-radius: 12px;
  width: 500px;
`;
