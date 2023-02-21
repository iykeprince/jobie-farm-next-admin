import "../styles/globals.css";
import "../Stylesheets/main.scss";

import type { AppProps } from "next/app";
import Script from "next/script";
import { AuthUserProvider } from "../contexts/auth.context";
import { Provider } from "react-redux";
import store, { persistor } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import Layouts from "../components/Layouts/Layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <div>
        <Script
          src="/assets/js/jquery.js"
          onLoad={() => console.log("jQuery loaded")}
        />
        <Script
          src="/assets/js/fontawesome.min.js"
          onLoad={() => console.log("fontAwesome loaded")}
        />
        <Script
          src="/assets/js/waypoints.min.js"
          onLoad={() => console.log("waypoint loaded")}
        />
        <Script
          src="/assets/js/bootstrap.min.js"
          onLoad={() => console.log("bootsrap loaded")}
        />
        <Script
          src="/assets/js/swiper.min.js"
          onLoad={() => console.log("swiper loaded")}
        />
        <Script
          src="/assets/js/jquery.countdown.min.js"
          onLoad={() => console.log("jquery countdowm loaded")}
        />
        <Script
          src="/assets/js/jquery.counterup.min.js"
          onLoad={() => console.log("countup loaded")}
        />
        <Script
          src="/assets/js/isotope.pkgd.min.js"
          onLoad={() => console.log("isotope loaded")}
        />
        <Script
          src="/assets/js/lightcase.js"
          onLoad={() => console.log("lightcase loaded")}
        />
        <Script
          src="/assets/js/functions.js"
          onLoad={() => console.log("function loaded")}
        />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Layouts>
              <Component {...pageProps} />
            </Layouts>
          </PersistGate>
        </Provider>
      </div>
    </AuthUserProvider>
  );
}
