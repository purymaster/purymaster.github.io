import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '@views/shared/header';
import Footer from '@views/shared/footer';
import Box from '@views/shared/box';

export default function Layout() {
  return (
    <Container>
      <Header />
      <main>
        <Box>
          <Outlet />
        </Box>
      </main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  position: relative;
  font-size: 16px;
  main {
    padding: 70px 0 50px;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
    main {
      padding: 50px 0;
    }
  }
  @media (max-width: 599px) {
    font-size: 12px;
  }
`;
