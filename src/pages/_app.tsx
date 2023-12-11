import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  )
}

export default api.withTRPC(MyApp);
