import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import 'nextra-theme-docs/style.css';

export const metadata = {};

const navbar = <Navbar logo={<b>frontend docs</b>} />;
const footer = <Footer>MIT {new Date().getFullYear()} © jieun, kim.</Footer>;

export default async function RootLayout({ children }) {
  return (
    <html lang='ko' dir='ltr' suppressHydrationWarning>
      <Head></Head>
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase='https://github.com/nueizkk/frontend-docs/tree/main/docs'
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
