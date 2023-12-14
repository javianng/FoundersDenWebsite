import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <Component  {...pageProps} />
      <SpeedInsights />
    </div>
  )
}

export default api.withTRPC(MyApp);
