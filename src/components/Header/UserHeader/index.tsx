import { useUser } from '@/redux/hooks/use-user';

function UserHeader() {

  const { name, avatar } = useUser();

  return (
    <header className="sticky top-0 max-w-md mx-auto pt-4 z-[100] bg-black">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bebas-neue text-white">VIREACT</h1>
          </div>

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