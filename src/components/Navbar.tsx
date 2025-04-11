import type { FC } from "react";

import type { NavbarProps } from "../models";
import { LogOut } from "../icons";
import { getCountPhoto } from "../utils";

export const Navbar: FC<NavbarProps> = ({ list, handleLogOut }) => (
  <div className="w-screen flex justify-around items-center py-4">
    <h1 className="text-xl font-bold">
      Photo count:
      {getCountPhoto(list)}
    </h1>
    <div className="drawer-content">
      <label className="btn btn-primary drawer-button" onClick={handleLogOut}>
        <LogOut size={20} className="text-primary-content" />
        breed
      </label>
    </div>
  </div>
);
