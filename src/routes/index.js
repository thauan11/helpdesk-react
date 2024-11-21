import { Route, Routes } from "react-router-dom";
import { SignIn } from "../pages/signIn";
import { SignUp } from "../pages/signUp";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}