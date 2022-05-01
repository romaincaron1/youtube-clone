import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home(props) {
	return (
		<div className={styles.home}>
			<div className={styles.videoContainer}>
				{props.videos.map((video) => (
					<div className={styles.video}>
						<Link href={`${video.id}/`}>
              <a>
                <Image src={video.imageUrl} width="300" height="200" alt={video.title} />
                <span className={styles.duration}>{video.duration}</span>
              </a>
            </Link>
            <Link href={`${video.id}/`}>
              <a>
                <h3>{video.title}</h3>
              </a>
            </Link>
            <Link href={`${video.author}/`}>
              <a>
                <h5 className={styles.author}>{video.author}</h5>
              </a>
            </Link>
            <h6>{video.views} vues - il y a {video.publishedDate} heures</h6>
          </div>
				))}
			</div>
		</div>
	);
}

export async function getStaticProps() {
	const data = await import("/data/videos.json");
	const videos = await data.videos;

	return {
		props: {
			videos,
		},
		revalidate: 5,
	};
}
