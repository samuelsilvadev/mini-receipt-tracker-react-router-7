import { NavLink } from "react-router";

const NAVIGATION = [
  {
    url: "/",
    title: "Receipts",
  },
  {
    url: "/add",
    title: "Track Receipt",
  },
];

export function Navigation() {
  return (
    <nav className="bg-white shadow-md w-full sticky top-0 receipt-tracker-navigation">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <span className="flex items-center ml-2 text-xl font-semibold text-gray-800">
            ReceiptTracker
          </span>

          <ul id="navigation-list-mf" className="flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <li key={item.url}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    isActive ? "text-blue-800" : "text-black"
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
