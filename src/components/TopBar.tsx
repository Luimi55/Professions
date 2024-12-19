import React, { useState } from "react";
import {
  Hamburger,
  NavDrawer,
  NavDrawerBody,
  NavDrawerHeader,
  NavDrawerProps,
  NavItem,
} from "@fluentui/react-nav-preview";
import {
  makeStyles,
  DrawerProps,
  useRestoreFocusSource,
  Title3,
} from "@fluentui/react-components";
import { Board20Regular } from "@fluentui/react-icons";

type Props = {};

const useStyles = makeStyles({
  container: {
    backgroundColor: "beige",
  },
  drawer:{
    backgroundColor: "#e6e3e3"
  },
  drawerItems: {
    backgroundColor: "#e6e3e3"
  }
});

type DrawerType = Required<DrawerProps>["type"];

const TopBar = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState<DrawerType>("overlay");
  const restoreFocusSourceAttributes = useRestoreFocusSource();
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Hamburger size="medium" onClick={() => setIsOpen(!isOpen)} />

        {/*TODO: Separar en componente aparte */}
      <NavDrawer
        {...restoreFocusSourceAttributes}
        defaultSelectedValue="1"
        size="medium"
        open={isOpen}
        onOpenChange={(_, { open }) => setIsOpen(open)}
        type={type}
        className={classes.drawer}
      >
        <NavDrawerHeader>
            <Title3>
                Menu
            </Title3>
        </NavDrawerHeader>
        <NavDrawerBody>
          <NavItem icon={<Board20Regular />} className={classes.drawerItems} value="1">
            Dashboard
          </NavItem>
          <NavItem icon={<Board20Regular />} className={classes.drawerItems} value="2">
            Dashboard
          </NavItem>
        </NavDrawerBody>
      </NavDrawer>
{/*TODO: Separar en componente aparte */}
      
    </div>
  );
};

export default TopBar;
