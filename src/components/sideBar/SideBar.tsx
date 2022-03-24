import { Divider, Drawer, IconButton, styled, Typography, useTheme } from '@mui/material';
import React from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const DrawerHeader = styled("div")(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: "flex-end"
}))

const LogoStyled = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	...theme.mixins.toolbar,
	justifyContent: "flex-start"
}))

interface Props {
	isOpen: boolean;
	handleDrawerToggle: () => void
}

const DRAWER_WIDTH = 240;

const SideBar: React.FC<Props> = ({
	isOpen,
	handleDrawerToggle,
	children
}): JSX.Element => {
	const theme = useTheme()
  return (
	  <>
		  <Drawer sx={{
			  width: DRAWER_WIDTH,
			  flexShrink: 0,
			  "& -MUIDrawer": {
				  width: DRAWER_WIDTH,
				  boxSizing: "border-box"
			  }
		  }}
			  variant="persistent"
			  anchor='left'
			  open={isOpen}
		  >
			  <DrawerHeader>
				  <LogoStyled>
					  <Typography variant='subtitle2' component='div' align='left'>
						  My Logo
					  </Typography>
				  </LogoStyled>
				  <IconButton onClick={handleDrawerToggle}>
					  {theme.direction === 'ltr' ? (
						  <ChevronLeftIcon />
					  ) : (
						  <ChevronRightIcon />
					  )}
				  </IconButton>
			  </DrawerHeader>
			  <Divider />
			  {children}
		  </Drawer>
	  </>
  )
}

export default SideBar