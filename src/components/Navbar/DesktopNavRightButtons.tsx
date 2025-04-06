import {
  Avatar,
  Badge,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// mui icons
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useForm } from "react-hook-form";
import CustomSelect from "../Form/InputFields/CustomSelect";

/**
 * This is the reusbale component Navbar buttons that is notification and icon buttons.
 *
 */

export default function DesktopNavRightButtons() {
  const theme = useTheme();
  const viewMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const viewDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const {
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "branchView",
    },
  });

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "flex-end",
      }}
    >
      <CustomSelect
        name="name"
        control={control}
        itemList={permissions}
        error={errors?.name?.message}
        type="primary"
        styles={{ backgroundColor: "neutral.lighter !important" }}
        placeholder=""
      />
      {viewDesktop && (
        <>
          <IconButton sx={{ backgroundColor: "neutral.lighter" }}>
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent=" "
              variant="dot"
            >
              <NotificationsNoneOutlinedIcon fontSize="medium" />
            </Badge>
          </IconButton>
        </>
      )}
      <IconButton
        disableFocusRipple
        disableRipple
        sx={{ backgroundColor: "neutral.lighter" }}
      >
        <Box display="flex">
          <Avatar sx={{ width: 24, height: 24 }} />
        </Box>
      </IconButton>
    </Box>
  );
}

interface FormData {
  name: string;
}

const permissions = [
  {
    label: "Branch View",
    value: "branchView",
  },
  {
    label: "Super Admin View",
    value: "adminView",
  },
];
