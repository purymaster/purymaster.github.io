import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import Header from '@views/shared/header';
import Footer from '@views/shared/footer';

export default function Layout() {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  max-width: 1340px;
  margin: 0 auto;
  padding: 0 30px;
  font-size: 16px;
  main {
    overflow: auto;
    flex: 1;
  }
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 599px) {
    font-size: 12px;
    padding: 0 15px;
  }
`;
