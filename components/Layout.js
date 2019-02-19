import Navbar from '../components/Navbar'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>Test Blog</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar></Navbar>
        {props.children}
    </div>
)
export default Layout;