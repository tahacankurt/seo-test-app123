import Layout from '../components/Layout'
import Head from 'next/head'

const About = () => (
    <div>
        <Layout>
            <Head>
                <title>About Page</title>
                <meta name="description" content="About Page Description" />
                <meta name="keywords" content="About,page,keywords" />
            </Head>
            <h1>About Next.js</h1>
        </Layout>
    </div>
)
export default About;