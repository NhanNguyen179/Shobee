import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";
import { makeStyles } from "@material-ui/core";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

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

interface option {
  value: any;
  label: string;
}

export const CustomSelect: React.FC<{
  label: string;
  options: option[];
  value: any;
  setValue: (option: any) => void;
  defaultValue?: any;
}> = ({ label, options, value, setValue, defaultValue }) => {
  const classes = useStyles();
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };
  React.useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, []);
  return (
    <div>
      <FormControl margin="normal" fullWidth>
        <InputLabel className={classes.label}>{label}</InputLabel>
        <Select
          value={
            options.length === 0 ? "" : value !== "" ? value : defaultValue
          }
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          className={classes.menu}
          name={label}
          required
          MenuProps={MenuProps}
        >
          {options.length === 0 ? (
            <MenuItem value="">Đang tải...</MenuItem>
          ) : (
            options.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))
          )}
        </Select>
      </FormControl>
    </div>
  );
};
