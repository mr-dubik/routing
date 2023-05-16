import { Routes, Route } from "react-router-dom";
import Main from "./pages/main/main";
import About from "./pages/about/about";
import NotFound from "./pages/not-gound/not-found";
import Profile from "./pages/profile/profile";
import Account from "./pages/account/account";
import ProtectedRoute from "./components/protected-route/protected-route";
import Wallet from "./pages/wallet/wallet";

function AppRoutes({ user }) {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/account" element={<Account />} />
        <Route path="/wallet" element={<Wallet />} />
      </Route>
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
