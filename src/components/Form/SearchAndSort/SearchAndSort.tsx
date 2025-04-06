import SearchIcon from "@mui/icons-material/Search";
import { Grid } from "@mui/material";
import { Control, FieldErrors, FieldPath, FieldValues } from "react-hook-form";
import CustomInput from "../InputFields/CustomInput/CustomInput";
import CustomSelect from "../InputFields/CustomSelect";

/**
 * this is a reusable component to show the search and sort in the desired components.
 */

export default function SearchAndSort<T extends FieldValues>({
  control,
  errors,
  searchName,
  sortName,
}: ISearchAndSort<T>) {
  return (
    <Grid container mt="24px" justifyContent={"space-between"} rowGap={"20px"}>
      <Grid size={{ lg: 5.8, md: 6, sm: 8, xs: 12 }}>
        <CustomInput
          name={searchName}
          control={control}
          required={true}
          error={errors?.["search"]?.message}
          type="primary"
          startIcon={<SearchIcon />}
          inputType="email"
          placeholder="Search"
        />
      </Grid>
      <Grid size={{ lg: 2.3, md: 5, sm: 3, xs: 12 }}>
        <CustomSelect
          name={sortName}
          control={control}
          itemList={permissions}
          error={errors?.["sort"]?.message}
          type="secondary"
        />
      </Grid>
    </Grid>
  );
}

const permissions = [
  {
    label: "Ascending",
    value: "asc",
  },
  {
    label: "Descending",
    value: "desc",
  },
];

interface ISearchAndSort<T extends FieldValues = FieldValues> {
  errors?: FieldErrors;
  control: Control<T>;
  searchName: FieldPath<T>;
  sortName: FieldPath<T>;
}
