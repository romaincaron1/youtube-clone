import '../styles/globals.css'
import Container from './components/Container/container';


function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp
