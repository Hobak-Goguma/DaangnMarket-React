import debug from 'debug';
import { NextPage } from 'next';
import styled from 'styled-components';

interface RProps {
  query: Record<string, any>;
}

const log = debug('Luna:R');

const StyledDiv = styled.div`
  color: ${({ theme }) => theme.primaryColor};
`;

const R: NextPage<RProps> = ({ query }) => {
  return <StyledDiv>R {JSON.stringify(query)}</StyledDiv>;
};

R.getInitialProps = async ({ query, pathname }) => {
  log('getInitialProps');
  console.log('query');
  console.dir(query);
  console.log('pathname');
  console.dir(pathname);
  return { query };
};

export default R;
