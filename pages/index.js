import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";
const HomePage = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Feature is yours</p>
      </div>
      <div style={{ margin: "0 auto" }}>
        <div className='products-container'>
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default HomePage;
