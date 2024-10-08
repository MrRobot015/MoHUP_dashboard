import * as React from 'react';
import Stack from '@mui/material/Stack';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import CustomDatePicker from './CustomDatePicker';
import NavbarBreadcrumbs from './NavbarBreadcrumbs';
import MenuButton from './MenuButton';
import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';

import Search from './Search';
import {Link} from "react-router-dom";
import {paths} from "../../../routes/paths";
import IconButton from "@mui/material/IconButton";
import {Close, Logout} from "@mui/icons-material";
import {Tooltip} from "@mui/material";

export default function Header() {
  return (
    <Stack
      direction="row"
      sx={{
        display: { xs: 'none', md: 'flex' },
        width: '100%',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'space-between',
        maxWidth: { sm: '100%', md: '1700px' },
        pt: 1.5,
      }}
      spacing={2}
    >
      <NavbarBreadcrumbs />
      <Stack direction="row" sx={{ gap: 1 }}>
        <Search />
        <CustomDatePicker />
        <ColorModeIconDropdown />
          <Tooltip title="logout">
          <Link to={paths.auth.root}>
              <IconButton
                  data-screenshot="toggle-mode"
                  disableRipple
                  size="small"
              >
                  <Logout/>
              </IconButton>
          </Link>
              </Tooltip>
      </Stack>
    </Stack>
  );
}
