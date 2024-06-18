import { Box, AppBar, Toolbar, Typography } from '@mui/material'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: '#394b59' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Game Platform
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
