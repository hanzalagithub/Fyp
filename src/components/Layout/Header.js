import React, { useContext} from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon,UserCircleIcon } from '@heroicons/react/24/outline';
import AuthContext from '../../store/auth-context'; // Import your authentication context
import { useNavigate } from 'react-router-dom';
// import icon from '../assets/OIP1.jpeg';
const Header = () => {
  const authCtx = useContext(AuthContext);
  const Navigate = useNavigate();

  // const [isSignedIn, setIsSignedIn] = useState(true);

  const handleSignOut = () => {
    authCtx.logout();
    // setIsSignedIn(false);
    Navigate('/Signin');
  };

  return (
    <header className="bg-green-500 text-white p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Welcome, Admin!</h2>

        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            className="relative rounded-full bg-green-900 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-green-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>

          {/* Profile dropdown */}
          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative rounded-full bg-green-900 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-green focus:ring-offset-2 focus:ring-offset-green-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                {/* You can replace the following image with your actual user profile image */}
                <UserCircleIcon className="h-8 w-8" aria-hidden="true" />
              </Menu.Button>
            </div>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={handleSignOut}
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
