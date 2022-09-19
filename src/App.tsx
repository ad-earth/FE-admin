import React from "react";
import { Route, Routes } from "react-router-dom";
//query
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
//pages
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/setProd" element={<SetProd />}></Route>
          <Route path="/postProd" element={<PostProd />}></Route>
          <Route path="/editProd" element={<EditProd />}></Route>
          <Route path="/setParcel" element={<SetParcel />}></Route>
          <Route path="/prodReport" element={<ProdReport />}></Route>
          <Route path="/postAd" element={<PostAd />}></Route>
          <Route path="/setAd" element={<SetAd />}></Route>
          <Route path="/adReport" element={<AdReport />}></Route>
        </Routes>
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}
export default App;
