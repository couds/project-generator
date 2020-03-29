import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'views/components/link';
import { Trans } from '@lingui/macro';

const Container = styled.div`
  width: 100%;
  max-width: 980px;
  margin: auto;
`;

const Content = styled(Container)`
  min-height: calc(100vh - 3rem);
`;

const Navbar = styled.nav`
  width: 100%;
  height: 3rem;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;

  a {
    line-height: 1.5rem;
    padding: 0.75rem 1rem;
    text-decoration: none;
  }

  ${Container} {
    display: flex;
    justify-content: flex-end;
  }
`;

const Layout = ({ children }) => (
  <>
    <Navbar>
      <Container>
        <Link to="/">
          <Trans>Home</Trans>
        </Link>
        <Link to="/store">
          <Trans>Store Examples</Trans>
        </Link>
      </Container>
    </Navbar>
    <Content>{children}</Content>
  </>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: undefined,
};

export default Layout;
