import Link from 'next/link'


class MovieList extends React.Component {

    render() {
        console.log(this.props.movieData[0]);
        return (
            <div>
                <h1>Movie List</h1>
                <ul>

                    {this.props.movieData.map(({ show }) => (
                        <li key={show.id}>
                            <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                                <a>{show.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }



}


export default MovieList;