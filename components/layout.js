import Header from "./header";
import Head from 'next/head'
import Footer from "./footer";

function Layout(props) {
  return (
    <>
      <Head>
          <title>Shopping Cart</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
        </Head>
        
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 w-full max-w-4xl p-4 mx-auto md:px-8 md:py-16">
          {props.children}
        </main>
        <Footer />
      </div>
      </>
  );
}

export default Layout;
