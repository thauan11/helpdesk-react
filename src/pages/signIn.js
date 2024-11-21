import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const SignIn = () => {
  return (
    <section className=" min-h-[100vh] grid place-items-center">
      <div className="w-[400px] rounded-b shadow-2xl shadow-zinc-500/100">
        <div className="px-4 py-2 bg-slate-900 rounded-t">
          <img
            src={logo}
            alt="Logo"
            className="w-[50px] mx-auto py-2"
          />
        </div>
        
        <div className="px-4 py-2 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <input
              type="email"
              placeholder="E-mail"
              className="mx-2 my-1 py-2 bg-transparent border-b border-zinc-300 outline-none"
            />
          </div>
          
          <div className="flex flex-col gap-1">
            <input
              type="password"
              placeholder="Senha"
              className="mx-2 my-1 py-2 bg-transparent border-b border-zinc-300 outline-none"
            />
          </div>

          <button
            type="button"
            className="bg-slate-900 text-zinc-100 w-full mx-auto py-2 rounded mt-2"
          >
            Login
          </button>

          <Link
            to="/signUp"
            className="mx-auto pb-2"
          >
            Cadastrar
          </Link>

        </div>

      </div>
    </section>
  );
}

export default SignIn