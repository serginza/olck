import styled from '@emotion/styled';

export const MainPageWrapper = styled.div`
  width: 100%;
  min-width: 320px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContentWrapper = styled.main`
  width: 100%;
  min-width: 320px;
  margin: 72px 0 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100vw;
  min-width: 320px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: 2px solid var(--soft-indigo-30);
  background-color: var(--soft-blue-100);
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
  margin-right: 32px;
`;

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  z-index: 10;
  width: 100vw;
  min-width: 320px;
  height: 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 2px solid var(--soft-indigo-30);
  background-color: var(--soft-blue-100);
`;
