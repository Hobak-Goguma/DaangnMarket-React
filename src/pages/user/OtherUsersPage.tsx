import Layout from '@components/Layout';
import OtherUser from '@components/OtherUser';
import debug from 'debug';
import { NextPage } from 'next';
import React from 'react';

const log = debug('Luna:OtherUsersPage');

const OtherUserPage: NextPage = () => {
  return (
    // @ts-expect-error
    <Layout>
      <OtherUser />
    </Layout>
  );
};

OtherUserPage.getInitialProps = async () => {
  log('getInitialProps');
  return {};
};

export default OtherUserPage;
