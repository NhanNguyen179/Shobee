import TextField from "@mui/material/TextField";
import styled from "styled-components";

export const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#FFA500",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#FFA500",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#FFA500",
    },
  },
});
