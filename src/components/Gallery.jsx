import { useLocation, Link } from 'react-router-dom'
import Thumbnail from './Thumbnail'
import { IMAGES } from './data'

export default function Gallery() {
    let location = useLocation();

    return (
        <div>
            {IMAGES.map(i => (
                <Link
                    key={i.id}
                    to={{
                        pathname: `/img/${i.id}`,
                        // This is the trick! This link sets
                        // the `background` in location state.
                        state: { background: location }
                    }}
                >
                    <Thumbnail color={i.color} />
                    <p>{i.title}</p>
                </Link>
            ))}
        </div>
    );
}
