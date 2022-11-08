import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  menu: {
    "&.MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#FFA500",
      },
      "&.Mui-focused label": {
        color: "#FFA500",
      },
    },
  },
  label: {
    "&.Mui-focused": {
      color: "#FFA500",
    },
  },
});

export const CustomSelect: React.FC<{
  label: string;
  options: string[];
}> = ({ label, options }) => {
  const [option, setOption] = React.useState<string>("");
  const classes = useStyles();

  const handleChange = (event: SelectChangeEvent) => {
    setOption(event.target.value);
  };

  return (
    <div>
      <FormControl margin="normal" fullWidth>
        <InputLabel className={classes.label}>{label}</InputLabel>
        <Select
          value={option}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          className={classes.menu}
          name={label}
          required
        >
          {options.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
