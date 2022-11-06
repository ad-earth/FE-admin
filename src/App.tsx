import { Route, Routes } from "react-router-dom";
//query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
//pages
import DefaultLayout from "./components/layouts/defaultLayout/DefaultLayout";
import DefaultLoginLayout from "./components/layouts/defaultLoginLayout/DefaultLoginLayout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import SetProd from "./pages/SetProd";
import PostProd from "./pages/PostProd";
import SetParcel from "./pages/SetParcel";
import ProdReport from "./pages/ProdReport";
import SetAd from "./pages/SetAd";
import AdReport from "./pages/AdReport";
import NotFound from "./pages/NotFound";
//loading indicator
import Loading from "./elements/Loading";
//GlobalModal components
import GlobalModal from "./components/modal/GlobalModal";
// err toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ToastContainer />
        <GlobalModal />
        <Loading />
        <Routes>
          <Route path="/" element={<DefaultLoginLayout />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="find_account" element={<Account />} />
          </Route>
          <Route element={<DefaultLayout />}>
            <Route path="home" element={<Main />} />
            <Route path="setProd" element={<SetProd />} />
            <Route path="postProd" element={<PostProd />} />
            <Route path="shipping_service" element={<SetParcel />} />
            <Route path="sales_report" element={<ProdReport />} />
            <Route path="setAd" element={<SetAd />} />
            <Route path="ad_report" element={<AdReport />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}
export default App;
