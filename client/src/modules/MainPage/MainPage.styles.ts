import type { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { ButtonElement } from 'shared/ui';
import { Box } from '@mui/material';

type StyledSectionType = {
  height?: CSSProperties['height'];
  backgroundColor?: CSSProperties['backgroundColor'];
  backgroundImage?: CSSProperties['backgroundImage'];
  opacity?: CSSProperties['opacity'];
};

export const MainPageContentWrapper = styled.div`
  width: 100%;
`;

export const StyledSection = styled.section<StyledSectionType>`
  width: 100%;
  display: flex;
  height: ${(props) => props.height || 'auto'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
  padding: 0;
  background-color: ${(props) => props.backgroundColor || 'none'};
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${(props) => props.backgroundImage || 'none'};
    opacity: ${(props) => props.opacity || 1};
    z-index: -1;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const ButtonsContainer = styled(Box)`
  height: 100%;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const StyledButton = styled(ButtonElement)`
  width: 300px;
  height: 60px;
  font-size: 1.5rem;
`;

export const factsDataContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  '@media (max-width: 1024px)': {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  '@media (max-width: 480px)': {
    gridTemplateColumns: '1fr',
  },
};

export const videoContainerStyles = {
  maxWidth: '560px',
  maxHeight: '315px',
  position: 'relative',
  margin: '24px 96px 0 32px',
  scale: 1.5,
  '@media (max-width: 1024px)': {
    maxWidth: '320px',
    maxHeight: '180px',
    margin: '48px 32px',
  },
  '@media (max-width: 480px)': {
    marginBottom: 0,
    scale: 1,
  },
};

export const mainSectionContainerStyles = {
  width: '100%',
  maxWidth: '1280px',
  paddingBottom: '100px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  '@media (max-width: 1024px)': {
    flexDirection: 'column',
  },
};
