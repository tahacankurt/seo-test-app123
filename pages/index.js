
import Layout from '../components/Layout';
import Fetch from 'isomorphic-unfetch'
import MovieList from '../components/MovieList'
import Link from 'next/link'
import Head from 'next/head'

const Index = (props) => (
    <div>
        <Layout>
            <Head>
                <title>Index Page</title>
                <meta name="description" content="Index Page Description" />
                <meta name="keywords" content="Index,page,keywords" />
            </Head>
            <h1>Hello Next.js</h1>
            <MovieList movieData={props.shows} />
        </Layout>
    </div>
)

Index.getInitialProps = async function () {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await response.json();

    return {
        shows: data
    };
}

export default Index;