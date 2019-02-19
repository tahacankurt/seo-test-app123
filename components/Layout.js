import Navbar from '../components/Navbar'
import Head from 'next/head'

const Layout = (props) => (
    <div>
        <Head>
            <title>Test Blog</title>
            <meta name="google-site-verification" content="Y8MGmJoYMdgLPrlRLtrwojaOllJ8EwGun82ZEEbTLkU" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Navbar></Navbar>
        {props.children}
    </div>
)
export default Layout;