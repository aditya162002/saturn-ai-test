import { useState } from "react";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  QuestionMarkCircleIcon,
  CalendarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: 'Home', icon: HomeIcon, href: '#' },
  { name: 'Calendar', icon: CalendarIcon, href: '#' },
  { name: 'Documents', icon: DocumentTextIcon, href: '#' },
  { name: 'Team', icon: UserGroupIcon, href: '#' },
  { name: 'Settings', icon: Cog6ToothIcon, href: '#' },
];

function SideNavigation() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <div
      className={`bg-white flex flex-col transition-all duration-200 ${
        collapsed ? "w-14" : "w-64"
      } relative`}
    >
      {/* White rounded corner overlay */}
      {/* <div className="absolute -right-5 top-0 w-5 h-5 bg-white"></div>
      <div className="absolute -right-5 top-0 w-5 h-5 rounded-br-xl bg-[#F9FAFB]"></div> */}

      {/* Logo */}
      <div className="p-4 flex items-center justify-between border-b border-[#D9D9D9]">
        {!collapsed && (
          <img
            src="public/saturn.svg"
            alt="Saturn"
            className="w-[67.27px] h-[12px] object-contain"
          />
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute bg-white right-[-10px] top-[30px] p-1 rounded-md hover:bg-gray-50 flex border border-[#D9D9D9] items-center justify-center"
        >
          <img
            src="/chevron-left.svg"
            alt="Collapse"
            className={`w-[12px] h-[12px] transition-transform ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Navigation items */}
      <nav className="flex-1 py-4">
        <div className="space-y-2 px-2">
          {navigation.map((item) => {
            const isActive = activeItem === item.name;
            return (
              <button
                key={item.name}
                className={`flex items-center w-full px-2 py-2 text-sm font-medium text-blue-600  rounded-md group ${
                  isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
                onClick={() => setActiveItem(item.name)}
              >
                {isActive ? (
                  <item.icon
                    className="w-5 h-5 mr-3 text-primary-600"
                    aria-hidden="true"
                  />
                ) : (
                  <item.icon
                    className="w-5 h-5 mr-3 text-gray-500 group-hover:text-gray-700"
                    aria-hidden="true"
                  />
                )}
                {!collapsed && item.name}
              </button>
            );
          })}
        </div>
      </nav>

      {/* User and help */}
      <div className="border-t border-[#D9D9D9] py-2 px-2">
        <div className="flex items-center p-2 rounded-md hover:bg-gray-100">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-3 overflow-hidden">
            <img
              src="public/profile-icon.jpg"
              className="w-full h-full object-cover rounded-full"
              alt="Profile"
            />
          </div>
          {!collapsed && (
            <span className="text-sm text-gray-700">Rohit's Space</span>
          )}
        </div>

        <button className="mt-2 flex items-center w-full px-2 py-2 text-sm text-gray-500 rounded-md hover:bg-gray-100 group">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-3 overflow-hidden">
            <img
              src="public/help-icon.svg"
              className="w-full h-full object-cover rounded-full"
              alt="Profile"
            />
          </div>
          {!collapsed && <span>Need help?</span>}
        </button>
      </div>
    </div>
  );
}

export default SideNavigation;
