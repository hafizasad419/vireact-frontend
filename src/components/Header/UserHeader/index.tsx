import { useState, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '@/redux/hooks/use-user';
import { useLogout } from '@/hooks/useLogout';
import { navItems } from '@/components/Header/UserHeader/BottomNav/nav-items';
import ProfileDropdown from '@/components/Header/UserHeader/ProfileDropdown';
import ConfirmationModal from '@/components/UI/ConfirmationModal';

function UserHeader() {
  const { name, avatar } = useUser();
  const location = useLocation();
  const { logout } = useLogout();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const avatarButtonRef = useRef<HTMLButtonElement>(null);

  const handleAvatarClick = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const handleLogoutClick = useCallback(() => {
    setIsConfirmModalOpen(true);
  }, []);

  const handleConfirmLogout = useCallback(() => {
    setIsConfirmModalOpen(false);
    logout();
  }, [logout]);

  const handleCloseModal = useCallback(() => {
    setIsConfirmModalOpen(false);
  }, []);

  const handleCloseDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  return (
    <header className="sticky top-0 max-w-md sm:max-w-none sm:w-full px-4 mx-auto pt-4 z-[100] bg-black">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bebas-neue text-white">VIREACT</h1>
          </div>

          {/* Navigation - Hidden on mobile, visible on larger screens */}
          <nav className="hidden sm:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors"
                >
                  <Icon className={`w-4 h-4 ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`} />
                  <span className={`text-sm font-medium ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* User Profile & Menu */}
          <div className="relative flex items-center gap-3">
            {/* User Avatar - Clickable */}
            <button
              ref={avatarButtonRef}
              type="button"
              onClick={handleAvatarClick}
              className="focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 focus:ring-offset-black rounded-full"
              aria-label="User menu"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              {avatar ? (
                <img
                  src={avatar}
                  alt={name || 'User'}
                  className="w-8 h-8 rounded-full object-cover border-2 border-gray-600 hover:border-gray-500 transition-colors cursor-pointer"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center hover:opacity-90 transition-opacity cursor-pointer">
                  <span className="text-white text-sm font-bold">
                    {name ? name.charAt(0).toUpperCase() : 'U'}
                  </span>
                </div>
              )}
            </button>

            {/* Profile Dropdown */}
            <ProfileDropdown
              isOpen={isDropdownOpen}
              onClose={handleCloseDropdown}
              onLogoutClick={handleLogoutClick}
              excludeRef={avatarButtonRef}
            />
          </div>
        </div>

        {/* Logout Confirmation Modal */}
        <ConfirmationModal
          isOpen={isConfirmModalOpen}
          onClose={handleCloseModal}
          onConfirm={handleConfirmLogout}
          title="Confirm Logout"
          message="Are you sure you want to logout? You will need to sign in again to access your account."
          confirmText="Logout"
          cancelText="Cancel"
        />
    </header>
  )
}

export default UserHeader