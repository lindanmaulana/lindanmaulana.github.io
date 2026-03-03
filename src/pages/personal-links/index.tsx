import { ListLink } from "./components/ListLink";

export const PagePersonalLinks = () => {
  return (
    <section>
      <div className="container max-w-md p-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <figure className="overflow-hidden bg-gray-600 rounded-full w-28 transition-global">
            <img
              src="/assets/images/me.png"
              alt="My Profile - Lindan Maulana"
              className="object-cover w-full h-full"
            />
          </figure>

          <div className="flex flex-col items-center gap-2 mb-2 group">
            <h2 className="px-4 py-3 text-3xl font-bold rounded group-hover:bg-gray-800 group-hover:text-white transition-global">
              Lindan Maulana
            </h2>
            <div className="flex items-center gap-2">
              <p className="px-3 py-2 text-sm font-medium text-white duration-300 bg-gray-800 shadow-xl cursor-pointer rotate-3 hover:rotate-0 hover:bg-transparent hover:text-gray-600 transition-global">
                Fullstack Developer
              </p>
              <div className="flex items-center gap-2 px-2 py-3 text-sm font-bold text-white bg-gray-800 cursor-pointer rotate-3 rotate hover:bg-transparent hover:text-gray-600 transition-global hover:rotate-0">
                Based in Kuningan
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center w-full gap-4">
            <h2 className="font-semibold text-gray-800">Connect with me</h2>

            <div className="w-full space-y-4">
              <ListLink />
            </div>
          </div>
        </div>

        <footer className="gap-1 mt-5 text-xs tracking-widest text-center text-slate-500">
          © 2026 Copyright by
          <span className="text-slate-300 ms-1">Lindan Maulana</span>
        </footer>
      </div>
    </section>
  );
};
