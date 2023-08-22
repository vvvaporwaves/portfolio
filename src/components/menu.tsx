import React from 'react';
import { Link } from 'gatsby';

interface Props {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
}

const Menu = ({ isOpen, setOpen }: Props) => {
  return (
    <aside
      className={`absolute top-0 w-[240px] z-50 duration-300 ${
        isOpen ? 'left-0' : 'left-[-250px]'
      }`}
      aria-label="Sidebar"
    >
      <div className="py-4 px-4 rounded-r bg-black shadow-lg">
        <ul className="space-y-2 text-purple">
          <li className="flex items-center p-2 rounded-lg">
            <button
              className="icon flex items-center justify-center relative nav-item"
              onClick={() => setOpen(false)}
            >
              <span
                className={`transform transition w-full h-px bg-current absolute ${
                  isOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'
                }`}
              />

              <span
                className={`transform transition w-full h-px bg-current absolute ${
                  isOpen ? 'opacity-0 translate-x-3' : 'opacity-100'
                }`}
              />

              <span
                className={`transform transition w-full h-px bg-current absolute ${
                  isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'
                }`}
              />
            </button>
          </li>

          <li>
            <Link
              to="/"
              className="flex items-center p-2 rounded-lg nav-item"
              activeClassName="text-pink"
              onClick={() => setOpen(false)}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="flex items-center p-2 rounded-lg nav-item"
              activeClassName="text-pink"
              onClick={() => setOpen(false)}
            >
              about
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className="flex items-center p-2 rounded-lg nav-item"
              activeClassName="text-pink"
              partiallyActive={true}
              onClick={() => setOpen(false)}
            >
              portfolio
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Menu;
