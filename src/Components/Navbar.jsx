import Profile from "../assets/1.jpg";

const Navbar = () => {
  return (
    <div className="navbar fixed z-10  bg-slate-800 text-slate-100 shadow-xl mb-6">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">MOVIE WEB</a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={Profile} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow text-slate-900 menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge bg-cyan-500">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
