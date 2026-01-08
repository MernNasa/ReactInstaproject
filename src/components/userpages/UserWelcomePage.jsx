import React from 'react'
import { useAuth } from '../../customhooks/useAuth'

const UserWelcomePage = () => {
  const {activeUser}=useAuth()
  return (
          <main className="flex-1 p-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-br from-black via-[#1f2937] to-[#111827]
 rounded-2xl shadow-md p-8 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back, {activeUser.fullname} 👋</h1>
          <p className="opacity-90">
            Your personal social space to share, explore, and connect.
          </p>
        </div>
   

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-2xl font-bold text-indigo-600">120</h3>
            <p className="text-gray-500 text-sm">Posts</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-2xl font-bold text-pink-600">2.4K</h3>
            <p className="text-gray-500 text-sm">Followers</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-2xl font-bold text-green-600">180</h3>
            <p className="text-gray-500 text-sm">Following</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <h3 className="text-2xl font-bold">🔥</h3>
            <p className="text-gray-500 text-sm">Engagement</p>
          </div>
        </div>
        {/* Feed + Right Widgets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feed */}
          <div className="lg:col-span-2 space-y-6">
            {[1, 2].map((post) => (
              <div key={post} className="bg-white rounded-2xl shadow">
                <div className="p-4 flex items-center gap-3 border-b">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold">
                    U
                  </div>
                  <div>
                    <p className="font-semibold">username</p>
                    <p className="text-xs text-gray-400">1h ago</p>
                  </div>
                </div>
                <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
                  Post Image
                </div>
                <div className="p-4">
                  <p className="text-sm mb-3">Building cool dashboards 🚀</p>
                  <div className="flex gap-6 text-gray-500 text-sm">
                    <span>❤️ Like</span>
                    <span>💬 Comment</span>
                    <span>🔗 Share</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Widgets */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-semibold mb-4">Recent Activity</h3>
              <ul className="text-sm text-gray-600 space-y-3">
                <li>❤️ Alex liked your post</li>
                <li>➕ Sara started following you</li>
                <li>💬 John commented on your photo</li>
              </ul>
            </div>

            {/* Trending */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-semibold mb-4">Trending Now</h3>
              <div className="flex flex-wrap gap-2">
                {["#react", "#tailwind", "#travel", "#fitness"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-black via-[#1f2937] to-[#111827] rounded-2xl shadow p-6 text-white">
              <h3 className="font-semibold mb-3">Quick Actions</h3>
              <button className="w-full bg-white text-indigo-600 rounded-lg py-2 mb-2 font-medium">
                Create Post
              </button>
              <button className="w-full bg-white/20 rounded-lg py-2 font-medium">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </main>
  )
}

export default UserWelcomePage