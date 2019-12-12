import Layout from '../components/Layout';
import Gallery from '../components/Gallery';

const Portfolio = () => {
  const images = [];
  const imageCount = 18;

  for (let i = imageCount; i > 0; i--) {
    images.push(`/static/portfolio/${i}.png`);
  }

  return (
    <Layout title="Portfolio">
      <h1>Portfolio</h1>
      <Gallery images={images} />
    </Layout>
  );
};

export default Portfolio;
