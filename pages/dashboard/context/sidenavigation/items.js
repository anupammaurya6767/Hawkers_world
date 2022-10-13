import Link from "next/link";

import data from './data';

const style = {
  inactive: `text-gray-400`,
  active: `font-medium text-black`,
  link: `flex items-center justify-start my-2 p-4 text-sm w-full hover:text-black`,
};

export default function SidenavItems() {
  const { pathname } = "changeMe"
  return (
    <ul className="md:pl-6">
      <li>
        {data.map((item) => (
          <Link href={item.link} key={item.title}>
            <span
              className={`${style.link} 
               ${item.link === pathname ? style.active : style.inactive}`}
            >
              <span>{item.icon}</span>
              <span className="mx-4">{item.title}</span>
            </span>
          </Link>
        ))}
      </li>
    </ul>
  );
}
