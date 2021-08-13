import "tailwindcss/tailwind.css";
//import Layout
import Layout from "../Layout/App-Layout";

//main func
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
