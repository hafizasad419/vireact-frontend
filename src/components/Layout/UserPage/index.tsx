import React from 'react';

interface UserPageProps {
  children: React.ReactNode;
  className?: string;
}

function UserPage({ 
  children, 
  className = ''
}: UserPageProps) {

  // On large screens (lg:), use full width; on smaller, keep max-w-md/3xl
  return (
    <div className={`min-h-screen bg-black ${className}`}>
      {/* Main Content */}
      <main className="relative pb-20">
        {children}
      </main>
    </div>
  );
}

export default UserPage;