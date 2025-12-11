import { memo } from 'react';
import { Box, Link, Stack, Typography } from '@mui/material';
import { FACTS_DATA } from 'shared/constants';
import {
  ButtonsContainer,
  factsDataContainerStyles,
  MainPageContentWrapper,
  mainSectionContainerStyles,
  StyledButton,
  StyledSection,
} from './MainPage.styles';
import { ContactUsButton } from 'shared/components';
import heroBackground from 'shared/assets/images/hero-background.jpg';
import { Contacts } from 'shared/components/Contacts';

function MainPageModuleProto() {
  return (
    <MainPageContentWrapper>
      <StyledSection
        backgroundImage={`url(${heroBackground})`}
        opacity={0.1}
        height={'500px'}
      >
        <Stack sx={mainSectionContainerStyles}>
          <Box style={{ margin: '0 32px' }} aria-labelledby="fact heading">
            <Typography variant="h1" margin="32px 0">
              КАЧЕСТВО И УДОБСТВО <br /> ДЛЯ ВАС
            </Typography>
            <Typography variant="h5" textAlign="justify">
              Добро пожаловать на наш сайт, где качество встречает удобство.{' '}
              <br />
              Мы предлагаем широкий выбор товаров и услуг, созданных с заботой о
              ваших потребностях. <br />
              Будь то покупки для дома или профессиональные решения — здесь вы
              найдете всё, что нужно для вашего комфорта и успеха.
              <br />
              Сделайте свой выбор прямо сейчас и наслаждайтесь отличным
              обслуживанием и быстрой доставкой (но это не точно)!
            </Typography>
          </Box>
          <ButtonsContainer>
            <StyledButton variant="contained">ТОВАРЫ</StyledButton>
            <StyledButton variant="contained">УСЛУГИ</StyledButton>
          </ButtonsContainer>
        </Stack>
      </StyledSection>
      <StyledSection backgroundColor="rgba(255, 205, 149, 60)">
        <Stack
          p="0 0 40px"
          maxWidth={'1280px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'24px'}
        >
          <Typography
            variant="h2"
            m="48px 32px"
            letterSpacing={1.3}
            textAlign={'center'}
            aria-labelledby="facts subheading"
          >
            ВЫБОР УВЕРЕННЫХ В СЕБЕ
          </Typography>
          <Box
            aria-labelledby="facts overstatement"
            sx={factsDataContainerStyles}
          >
            {FACTS_DATA.map((fact) => (
              <Box sx={{ margin: '0 32px 32px' }} key={fact.title}>
                <Typography fontWeight={600}>{fact.title}</Typography>
                <Typography variant="body2" textAlign="justify">
                  {fact.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </StyledSection>
      <StyledSection height="250px">
        <Stack
          maxWidth={'1280px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'24px'}
        >
          <Typography
            variant="h3"
            letterSpacing={1.3}
            mt="32px"
            mb="16px"
            textAlign={'center'}
            aria-labelledby="more facts heading"
          >
            ОСТАЛИСЬ ВОПРОСЫ???
          </Typography>
          <ContactUsButton aria-label="contact us" />
          <Link
            href="#"
            sx={{
              textDecorationColor: 'var(--dark-indigo-100)',
              '&:hover': {
                textDecorationColor: 'var(--dark-indigo-100)',
              },
            }}
          >
            <Typography variant="h3" sx={{ cursor: 'default' }}>
              +7(999)999-99-99{' '}
            </Typography>
          </Link>
          <Contacts phone vk telegram size={40} />
        </Stack>
      </StyledSection>
    </MainPageContentWrapper>
  );
}

export const MainPageModule = memo(MainPageModuleProto);
