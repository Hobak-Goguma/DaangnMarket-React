import Layout from '@components/Layout';
import UploadContainer from '@components/Upload/UploadContainer';
import debug from 'debug';
import { NextPage } from 'next';
import React from 'react';

const log = debug('Luna:UploadPage');

const UploadPage: NextPage = () => {
  return (
    // @ts-expect-error
    <Layout>
      <UploadContainer />
    </Layout>
  );
};

UploadPage.getInitialProps = async () => {
  log('getInitialProps');
  return {};
};

export default UploadPage;
