import type { FC } from "react";

import type { ListProps } from "../models";
import { getKeyByLink } from "../utils";

export const List: FC<ListProps> = ({ list }) => {
  return Object.values(list)
    .reduce((prev: string[], curr: string[] | null) => {
      const arr = Array.isArray(curr) ? curr : [];
      return [...prev, ...arr];
    }, [])
    .map((item: string) => (
      <article
        key={getKeyByLink(item)}
        className="card w-80 bg-base-100 shadow-sm m-2"
      >
        <img src={item} alt="" className="p-2" />
      </article>
    ));
};
