import '../styles/global.css';
import { AppProps } from 'next/app';
import { UserProvider } from '../contexts/user.context';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}