import tw from 'twin.macro';
import { Layout } from '@components/Layout';

const Title = tw.h1`
  text-2xl
`;

export default function Home() {
  return (
    <Layout>
      <Title>Home Page</Title>
    </Layout>
  );
}
