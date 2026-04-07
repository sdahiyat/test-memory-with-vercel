export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Mindful Journal
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Track your thoughts, monitor your moods, and discover insights about yourself with AI-powered reflections.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-semibold mb-3">Daily Journaling</h3>
              <p className="text-gray-600">
                Capture your thoughts, experiences, and reflections in a private, secure space.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl mb-4">😊</div>
              <h3 className="text-xl font-semibold mb-3">Mood Tracking</h3>
              <p className="text-gray-600">
                Log your daily emotions and see patterns in your mental well-being over time.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-3">AI Insights</h3>
              <p className="text-gray-600">
                Get personalized reflections and insights powered by AI to understand yourself better.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Analytics</h3>
              <p className="text-gray-600">
                Visualize your journaling and mood patterns with beautiful charts and timelines.
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
