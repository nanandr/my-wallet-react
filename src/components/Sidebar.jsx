import { useState } from "react";
import Card from "./Card";
import { MonthPicker } from "react-lite-month-picker";

export default function Sidebar() {
  const currentDate = new Date();

  const [selectedMonth, setSelectedMonth] = useState({
    month: currentDate.getMonth() + 1,
    year: currentDate.getFullYear(),
  });

  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 shadow-[10px_0_21px_-10px_rgb(220,220,220)] dark:shadow-[10px_0_21px_-10px_black]"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-zinc-900">
          <a href="/" className="flex items-center ps-2.5 mb-5">
            <img
              src="/wallet.svg"
              className="h-6 me-3 sm:h-7"
              alt="Wallet Logo"
            />
            <span className="self-center text-xl font-bold whitespace-nowrap dark:text-white">
              my wallet
            </span>
          </a>
          <Card className="bg-white dark:bg-zinc-800 dark:text-gray-50">
            <div className="w-full h-full p-2">
              <span className="block">balance</span>
              <span className="font-bold text-3xl">Rp2.000.000</span>
            </div>
          </Card>
          <ul className="space-y-2 font-medium">
            <MonthInput
              selected={selectedMonth}
              setShowMonthPicker={setIsPickerOpen}
              showMonthPicker={isPickerOpen}
              separator
            />
            {isPickerOpen ? (
              <MonthPicker
                setIsOpen={setIsPickerOpen}
                selected={selectedMonth}
                onChange={setSelectedMonth}
                size="small"
              />
            ) : null}
            <NavLink
              href="#"
              icon="/activity.svg"
              title="Activity"
              active
              separator
            >
              <Notification />
            </NavLink>
            <NavLink href="#" icon="/wish.svg" title="Wishlist">
              <Notification />
            </NavLink>
            <NavLink href="#" icon="" title="John Doe" separator>
              <Notification />
            </NavLink>
          </ul>
        </div>
      </aside>
    </>
  );
}

function MonthInput({
  selected,
  showMonthPicker,
  setShowMonthPicker,
  separator,
}) {
  function getMonth(month) {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return "Invalid month";
    }
  }

  return (
    <li
      className={
        separator
          ? "pt-2 mt-2 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700"
          : ""
      }
    >
      <button
        className="w-full flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-zinc-800 dark:active:bg-zinc-900 group"
        type="button"
        onClick={() => setShowMonthPicker(!showMonthPicker)}
      >
        <span className="font-bold text-2xl">{getMonth(selected.month)}</span>
        <span className="mt-auto ml-1">{selected.year}</span>
      </button>
    </li>
  );
}

function NavLink({ href, icon, title, active, separator, children }) {
  return (
    <li
      className={
        separator
          ? "pt-2 mt-2 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700"
          : ""
      }
    >
      <a
        href={href}
        className={
          (active ? "text-primary" : "text-gray-900 dark:text-white") +
          " flex items-center p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 dark:hover:bg-zinc-800 dark:active:bg-zinc-900 group"
        }
      >
        <img
          src={icon}
          className={
            (active ? "text-primary" : "text-gray-900 dark:text-white") + " h-4"
          }
        />
        <span className="flex-1 ms-3 whitespace-nowrap">{title}</span>
        {children}
      </a>
    </li>
  );
}

function Notification({ count, textColor }) {
  return (
    count > 0 && (
      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-white bg-red-600 rounded-full dark:bg-red-800 dark:text-gray-200">
        {count}
      </span>
    )
  );
}
