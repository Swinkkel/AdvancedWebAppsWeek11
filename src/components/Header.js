import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ButtonAppBar() {
    const {t, i18n} = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">{t('home')}</Button>
          <Button color="inherit" component={Link} to="/about">{t('about')}</Button>

          <Button id="en" color="inherit" onClick={() => changeLanguage('en')}>EN</Button>
          <Button id="fi" color="inherit" onClick={() => changeLanguage('fi')}>FI</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
