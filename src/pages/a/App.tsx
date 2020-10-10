// @ts-expect-error
import OPM from '/images/opm.png';
// import Logo from '/images/logo.svg';
import { NextPage } from 'next';

const App: NextPage = () => {
  return (
    <h1>
      I'm App in A <img src="/images/logo.svg" />
    </h1>
  );
};

export default App;
