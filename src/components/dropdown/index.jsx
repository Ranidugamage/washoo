import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import './index.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  

  const menuItems = [
    { id: 1, title: 'Profile Info', link: 'profile' },
    { id: 2, title: 'My Orders', link: 'myOrder' },
    { id: 3, title: 'My Reviews', link: '#' },
    { id: 4, title: 'Logout', link: '#' },
  ];

  return (
    <div className="dropdown">
      <div className="profile-icon" onClick={toggleDropdown}>
        <FaUser />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {menuItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href={item.link}>{item.title}</a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;