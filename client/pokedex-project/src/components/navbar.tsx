import * as React from 'react';
import { AppBar, Box, IconButton, MenuItem } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {

    const pages = [['Home', '/']];
    const settings = ['Profile', 'Logout'];
    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (url: string) => {
        setAnchorElNav(null);
        navigate(url);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar style={{ background: '#7D78A3' }}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <CatchingPokemonIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant='h5'
                        noWrap
                        component="a"
                        href='#test'
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                        >
                            Pokedex
                        </Typography>
                        
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none'}
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page[0]} onClick={() => handleCloseNavMenu(page[1])}>
                                        <Typography textAlign="center">{page[0]}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#test"
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            Pokedex
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                            <Button
                                key={page[0]}
                                onClick={() => handleCloseNavMenu(page[1])}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page[0]}
                            </Button>
                            ))}
                        </Box>
                        <Box>
                            <Button color="inherit">Login</Button>
                            <Button color="inherit">Register</Button>
                        </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}