
const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

export const paths = {
  auth:{
    root: `/`,
  },
  dashboard:{
    home:`${ROOTS.DASHBOARD}/`,
    services_stats: `${ROOTS.DASHBOARD}/services_stats/`,
  }
};
