import { GetStaticPaths, GetStaticProps } from 'next';

export default function BlogPost({ date }: { date: string }) {
  return <h1>Hello, now is {date}</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], // Posts mais lidos
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { date: new Date().toISOString() },
    revalidate: 5,
  };
};
