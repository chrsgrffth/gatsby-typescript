import * as React from 'react';
import Helmet from 'react-helmet';
import { Header } from '../components/header';

interface Props {
  children: any; // tslint:disable-line no-any
}

const DefaultLayout = (props: Props) => {
  return (
    <div>
      <Helmet
        title="Gatsby TypeScript Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div>{props.children()}</div>
    </div>
  );
};

export default DefaultLayout;
