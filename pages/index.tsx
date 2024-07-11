import React from 'react';
import Layout from '../components/Layout';
import Comic from "../components/Comic";

const HomePage: React.FC = () => {
  const title = 'Home Page - XKCD Comic Fetcher';
  const description = 'Welcome to XKCD Comic Fetcher. Explore and enjoy XKCD comics!';
  const author = 'Ilya-Linh Nguyen';

  return (
    <Layout title={title} description={description} author={author}>
      <div>
        <h1>Welcome to XKCD Comic Fetcher</h1>
        <p>This is the home page.</p>
        <Comic />
      </div>
    </Layout>
  );
};

export default HomePage;
