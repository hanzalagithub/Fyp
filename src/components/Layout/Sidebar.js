import React from 'react';
import { SidebarData } from '../data/SidebarData';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
// import AuthContext from '../../store/auth-context';

// import { Link } from 'react-router-dom';

const Sidebar = () => {
  // const authCtx = useContext(AuthContext);
  // const isLoggedIn = authCtx.isLoggedIn;
  const activeLink = 'hover:bg-green-500 pl-2 pr-3 mr-9 mb-2 h-14 flex justify-start items-center text-white bg-green-500 rounded-r-full  transition-width duration-300'
  const normalLink = 'hover:bg-green-500  pl-2 pr-9 mr-9 mb-2 h-14 flex justify-start items-center text-black rounded-full  transition-width duration-300'
  

  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownTitle, setDropdownTitle] = useState('');

  const toggleDropdown = (title) => {
    if (isDropdownOpen && dropdownTitle === title) {
      setDropdownOpen(false);
      setDropdownTitle('');
    } else {
      setDropdownOpen(true);
      setDropdownTitle(title);
    }
  };
  return (
    <>
      <nav>
  
        <ul className="text-black mt-8">
        {SidebarData.map((item, index) => (
            
            <li key={index}>
              {item.subItems ? (
                <>
                  <div
                    className="  hover:bg-green-500 block p-3 cursor-pointer rounded-r-full mb-2 mr-9 transition-width duration-300"
                    onClick={() => toggleDropdown(item.title)}
                    
                  >
                    <div className="flex justify-start items-center space-x-3 text-md">
                      <span>{item.img}</span>
                      <span>{item.title}</span>
                    <span className="ml-1">
                      {/* You can replace the following with your chevron-down SVG or Unicode character */}
                      {isDropdownOpen && dropdownTitle === item.title ? <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M12 11.828L9.17196 14.657L7.75696 13.243L12 8.99998L16.243 13.243L14.828 14.657L12 11.828Z" fill="green"/>


                        </svg>
                        : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path d="M12 12.172L14.828 9.34302L16.243 10.757L12 15L7.757 10.757L9.172 9.34302L12 12.172Z" fill="black"/>


                        </svg>
                      }
                    </span>
                    </div>
                  </div>
                  {isDropdownOpen && dropdownTitle === item.title && (
                    <ul className="pl-8">
                      {item.subItems.map((subItem, subIndex) => (
                        
                        <li key={subIndex}>
                          <NavLink
                            to={subItem.path}
                            className={({isActive})=>
                            isActive ? activeLink:normalLink}
                          >
                            <div className="flex justify-start items-center space-x-3 text-md">
                              <span>{subItem.img}</span>
                              <span>{subItem.title}</span>
                            </div>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.path}
                  className={({isActive})=>
                            isActive ? activeLink:normalLink}
                >
                  <div className="flex justify-start items-center space-x-3 text-md">
                    <span>{item.img}</span>
                    <span>{item.title}</span>
                  </div>
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;