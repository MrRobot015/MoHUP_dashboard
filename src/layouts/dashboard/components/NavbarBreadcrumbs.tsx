import * as React from 'react';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Breadcrumbs, { breadcrumbsClasses } from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import {headerText as lang} from "../lang";
import {NavigateBeforeRounded} from "@mui/icons-material";
import {Link, useLocation} from "react-router-dom";
import {paths} from "../../../routes/paths";

const StyledBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  [`& .${breadcrumbsClasses.separator}`]: {
    color: (theme.vars || theme).palette.action.disabled,
    margin: 1,
  },
  [`& .${breadcrumbsClasses.ol}`]: {
    alignItems: 'center',
  },
}));

export default function NavbarBreadcrumbs() {
  const location = useLocation()

  return (
    <StyledBreadcrumbs
      aria-label="breadcrumb"
      separator={<NavigateBeforeRounded fontSize="small" />}
    >
      <Typography variant="body1">{lang.dashboard}</Typography>
      <Typography variant="body1" sx={{ color: 'text.primary', fontWeight: 600 }}>
        {location.pathname === paths.dashboard.services_stats ? <Link to='/dashboard/'>{lang.home}</Link> : lang.home}
      </Typography>
      {
          location.pathname === paths.dashboard.services_stats &&
          <Typography variant="body1">تفاصيل المحافظة</Typography>
      }
    </StyledBreadcrumbs>
  );
}
