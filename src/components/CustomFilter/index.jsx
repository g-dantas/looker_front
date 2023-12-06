import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Checkbox, Skeleton, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

import { CustomAutoComplete, PaperComponent } from "./styles";
import { useSDK } from "@looker/components-data";

import { useFilter } from "../../context/Filter";
import { debounce } from "lodash";

const CustomFilter = ({ properties }) => {
  const { field, model } = properties;
  const { clearFilters, setActiveFilters } = useFilter();

  // *--- Looker Data ---*
  const [options, setOptions] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);
  const [label, setLabel] = useState("...");
  const [fieldName, setFieldName] = useState("...");

  const sdk = useSDK();

  useEffect(() => {
    (async () => {
      const { view, name: fieldName, label_short } = field;
      const values = await sdk.ok(
        sdk.model_fieldname_suggestions({
          model_name: model,
          view_name: view,
          field_name: fieldName,
        })
      );
      setFieldName(fieldName);
      setOptions(values?.suggestions);
      setLabel(label_short);
    })();
  }, [field, model, sdk]);

  const handleChange = (values) => {
    if (values.length === 0) {
      setSelectedValues([]);
      setActiveFilters((prev) => {
        const { [fieldName]: _, ...rest } = prev;
        return rest;
      });
      return;
    }
    setSelectedValues(values);
    setActiveFilters({ [fieldName]: values.map((option) => option).join(",") });
  };

  const debouncedHandleChange = debounce(handleChange, 600);

  if (options.length === 0) {
    return <Skeleton variant="light" width={150} height={41} />;
  }
  //*--- end of Looker Data ---*

  return (
    <CustomAutoComplete
      key={`customFilter-${fieldName}-${clearFilters}`}
      disableCloseOnSelect
      multiple
      disablePortal
      sx={{ padding: 0 }}
      ChipProps={{
        deleteIcon: (
          <CloseIcon
            sx={{
              fontSize: "16 px !important",
            }}
          />
        ),
        sx: {
          height: "21px",
        },
      }}
      popupIcon={<KeyboardArrowDownIcon />}
      PaperComponent={({ children }) => <PaperComponent>{children}</PaperComponent>}
      getOptionLabel={(option) => option}
      options={options}
      values={selectedValues}
      renderOption={(props, option, { selected }) => {
        return (
          <li {...props}>
            <Checkbox
              icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
              checkedIcon={<CheckBoxIcon fontSize="small" />}
              checked={selected}
              sx={{
                color: "#E3E4E8",
                "&.Mui-checked": {
                  color: "white",
                },
              }}
            />
            {option}
          </li>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant="outlined"
          InputProps={{
            ...params.InputProps,
          }}
          placeholder="Type to search"
        />
      )}
      onChange={(_, value) => {
        debouncedHandleChange(value);
      }}
    />
  );
};

CustomFilter.propTypes = {
  properties: PropTypes.object,
};

export default CustomFilter;
