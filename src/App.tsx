
import './App.css'
import SkillContainer from './components/SkillContainer/SkillContainer.tsx'
import Background from './components/Background/Background.tsx'
import Profile from './components/Profile/Profile.tsx'

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <Background />
      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center gap-12 px-6 py-16 sm:gap-16">
      <Profile />
      <SkillContainer />
      </main>
    </div>
  )
}

export default App
