import UserPage from '@/components/Layout/UserPage';

function Settings() {
  return (
    <UserPage>
      <div className="px-4 py-8">
        <h1 className="text-white text-2xl font-bebas-neue mb-4">Settings</h1>
        <p className="text-gray-300">Your settings and preferences will appear here.</p>
      </div>
    </UserPage>
  );
}

export default Settings;
