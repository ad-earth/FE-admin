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
import EditProd from "./pages/EditProd";
import SetParcel from "./pages/SetParcel";
import ProdReport from "./pages/ProdReport";
import PostAd from "./pages/PostAd";
import SetAd from "./pages/SetAd";
import AdReport from "./pages/AdReport";
import NotFound from "./pages/NotFound";
//loading indicator
import Loading from "./elements/Loading";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Loading />
        <Routes>
          <Route path="/" element={<DefaultLoginLayout />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="/find_account" element={<Account />} />
          </Route>
          <Route element={<DefaultLayout />}>
            <Route path="home" element={<Main />} />
            <Route path="setProd" element={<SetProd />} />
            <Route path="postProd" element={<PostProd />} />
            <Route path="editProd" element={<EditProd />} />
            <Route path="/shipping_service" element={<SetParcel />} />
            <Route path="/prod_report" element={<ProdReport />} />
            <Route path="postAd" element={<PostAd />} />
            <Route path="setAd" element={<SetAd />} />
            <Route path="/ad_report" element={<AdReport />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}
export default App;
