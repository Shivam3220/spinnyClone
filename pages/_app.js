import "@/styles/globals.css";
import store from "../ReduxStore/Store";
import { Provider } from "react-redux";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
        <Navbar />
        <div className="">

          <Component {...pageProps} />
        <div className="absolute top-36 md:top-24 z-0 bg-cover">
          <img src="https://spn-sta.spinny.com/spinny-web/static-images/assets/images/pages/SellCar/assets/sell_landing_back_desktop.jpg" />
        </div>
        </div>
    </Provider>
  );
}
