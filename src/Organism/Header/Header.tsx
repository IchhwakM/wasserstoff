import { Stack } from '@mui/material'
import { Logo, PageRoutes, Profile, Search } from '../../Atom'
import React from 'react';

export const Header = () => {
  return (
    <Stack direction="row" height="60px" p="0 48px" bgcolor="#ffffff" alignItems="center" justifyContent="space-between">
      <Logo />
      <Search />
      <PageRoutes />
      <Profile />
    </Stack>
  )
}
