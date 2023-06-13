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
	
	main {
		overflow: auto;
		flex: 1;
	}
`;