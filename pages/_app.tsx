import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "./api/Store";
import { Varela } from '@next/font/google'

function App({ Component, pageProps }: AppProps) {
  // const varela = Varela({
  //   weight: '400',
  // })
  return (
    <Provider store={store}>
      {/* <main className={varela.className}> */}
       <Component {...pageProps} /> 
      {/* </main> */}
    </Provider>
  );
}

export default App;
