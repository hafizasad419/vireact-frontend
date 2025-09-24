import React from 'react';


interface UserPageProps {
  children: React.ReactNode;
  className?: string;
}

function UserPage({ 
  children, 
  className = ''
}: UserPageProps) {
 
  return (
    <div className={`min-h-screen bg-black ${className}`}>
      {/* Main Content */}
      <main className="max-w-md mx-auto lg:max-w-lg relative pb-20">
        {children}
      </main>
    </div>
  );
}

export default UserPage;