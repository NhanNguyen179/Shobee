import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export const CustomCheckBox: React.FC<{ label: string }> = ({ label }) => {
  return (
    <FormControlLabel
      label={label}
      control={
        <Checkbox
          sx={{
            color: "#FFA500",
            "&.Mui-checked": {
              color: "#FFA500",
            },
          }}
        />
      }
    />
  );
};
