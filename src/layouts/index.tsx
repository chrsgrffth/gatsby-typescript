import * as React from 'react';
import Helmet from 'react-helmet';
import { Header } from '../components/header';
import '../css/main.css';

interface Props {
  children: any; // tslint:disable-line no-any
}

const DefaultLayout = (props: Props) => {
  return (
    <div className="bg-grey-lightest h-screen">
      <Helmet
        title="Gatsby TypeScript Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <div className="p-8">{props.children()}</div>
    </div>
  );
};

export default DefaultLayout;
