import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import DrawerList from "../DrawerList";

/**
 * This is the reusbale component of mobile drawer on the left side which can be open and close.
 *
 */

type Anchor = "top" | "left" | "bottom" | "right";

export default function MobileDrawer({
  open,
  setOpen,
  handleDrawer,
}: MobileDrawer) {
  return (
    <div>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={handleDrawer}
        onOpen={() => null}
        sx={{ height: "100%" }}
      >
        <DrawerList open={open} setOpen={setOpen} />
      </SwipeableDrawer>
    </div>
  );
}

interface MobileDrawer {
  open: boolean;
  setOpen: (setOpen: boolean) => void;
  handleDrawer: () => void;
}
