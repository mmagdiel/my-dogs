import clsx from "clsx";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

import type { ListObject } from "../../models";
import { List, Navbar } from "../../components";
import { usePublicPage } from "../../hooks";
import { homeService } from "../../services";
import { AllBreeds, listDefault } from "../../models";
import { homeInterceptor } from "../../utils";
import { getLabelBy, isItemInList, removeItemOfList } from "../../utils";

homeInterceptor();

const allbreeds = [...AllBreeds];

export const Home = () => {
  const [index, setIndex] = useState<number>(0);
  const [list, setList] = useState<ListObject>(listDefault);
  const [isAllEl, setIsAllEl] = useState<boolean>(false);
  const [selectedBreed, setSelectedBreed] = useState<string[]>(allbreeds);
  const { y } = useWindowScroll();
  const deleteCookie = usePublicPage();

  useEffect(() => {
    try {
      fetchData(selectedBreed[index], index);
    } catch (e) {
      // TODO: send error to the monitoring app
      console.error(e);
    }
  }, []);

  useEffect(() => {
    const calcIndex = Math.floor(y / 1000);
    if (calcIndex > 1) {
      if (calcIndex > index) setIndex(calcIndex);
    }
  }, [y]);

  useEffect(() => {
    try {
      fetchData(selectedBreed[index], index);
    } catch (e) {
      // TODO: send error to the monitoring app
      console.error(e);
    }
  }, [index]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClick = (e: any) =>
    setSelectedBreed((state) => {
      const item = e.target.firstChild.data;
      const isItemIn = isItemInList(state);
      const removeItemOf = removeItemOfList(state);
      return item && isItemIn(item)
        ? removeItemOf(item)
        : [...state, e.target.firstChild.data];
    });

  const fetchData = async (data: string, index: number) => {
    const response = await homeService(data);
    setList((state) => ({
      ...state,
      [allbreeds[index]]: response.data.message,
    }));
  };

  const handleToggle = () => {
    setIsAllEl((state) => !state);
    return isAllEl ? setSelectedBreed(allbreeds) : setSelectedBreed([]);
  };

  const handleLogOut = () => deleteCookie();

  return (
    <div className="h-screen relative">
      <div className="drawer fixed z-10 bg-primary-content">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <Navbar list={list} handleLogOut={handleLogOut} />
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          />
          <ul className="menu bg-base-200 text-base-content min-h-full w-40 p-4">
            <li className="text-lg">All breeds</li>
            <li
              className="mt-2 p-2 rounded-sm bg-neutral-content"
              onClick={handleToggle}
            >
              {getLabelBy(isAllEl)}
            </li>
            {allbreeds.map((item) => (
              <li
                key={item}
                className={clsx("mt-2 p-2 rounded-sm bg-neutral-content", {
                  "bg-primary text-primary-content":
                    selectedBreed.includes(item),
                })}
                onClick={handleClick}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <main className="flex flex-col items-center pt-18">
        <List list={list} />
      </main>
      {/* <Fab /> */}
    </div>
  );
};
