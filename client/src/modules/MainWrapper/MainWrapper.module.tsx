import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Stack, Typography } from '@mui/material';
// import { ContactUsButton } from 'shared/components';
import {
  MainContentWrapper,
  MainPageWrapper,
  StyledFooter,
  StyledHeader,
  StyledNav,
} from './MainWrapper.styles';
import { ROOT } from 'shared/constants';
import { Contacts } from 'shared/components/Contacts';

function MainWrapperProto() {
  return (
    <MainPageWrapper>
      <StyledHeader>
        <Stack
          width={'100%'}
          maxWidth={'1280px'}
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Link
            href={ROOT}
            sx={{ textDecoration: 'none', color: 'var(--dark-indigo-100)' }}
            aria-label="go to facts company homepage"
          >
            <Typography
              variant="h6"
              marginLeft="32px"
              aria-labelledby="company-header"
            >
              Olck Company
            </Typography>
          </Link>

          <StyledNav aria-label="main navigation">
            <Contacts telegram phone vk />
          </StyledNav>
        </Stack>
      </StyledHeader>
      <MainContentWrapper>
        <Outlet />
      </MainContentWrapper>
      <StyledFooter>
        <Stack
          width={'100%'}
          maxWidth={'1280px'}
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'space-center'}
          alignItems={'center'}
        >
          <Typography variant="h6" aria-labelledby="company footer">
            Olck Company {new Date().getFullYear()}
          </Typography>
          <Typography variant="caption" aria-labelledby="company owner">
            by Serginza ©
          </Typography>
        </Stack>
      </StyledFooter>
    </MainPageWrapper>
  );
}

export const MainWrapperModule = memo(MainWrapperProto);
