import { Link, useLocation } from 'react-router-dom';
import { useUser } from '@/redux/hooks/use-user';
import { navItems } from '@/components/Header/UserHeader/BottomNav/nav-items';

function UserHeader() {
  const { name, avatar } = useUser();
  const location = useLocation();

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
          <div className="flex items-center gap-3">
            {/* User Avatar */}
            {avatar ? (
              <img
                src={avatar}
                alt={name || 'User'}
                className="w-8 h-8 rounded-full object-cover border-2 border-gray-600"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                <span className="text-white text-sm font-bold">
                  {name ? name.charAt(0).toUpperCase() : 'U'}
                </span>
              </div>
            )}
          </div>
        </div>
    </header>
  )
}

export default UserHeader