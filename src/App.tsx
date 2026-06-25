import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import BottomNav from './components/BottomNav'
import StatusBar from './components/StatusBar'
import Home from './screens/Home'
import Learn from './screens/Learn'
import ArticleReader from './screens/ArticleReader'
import Reps from './screens/Reps'
import RepProfile from './screens/RepProfile'
import Polis from './screens/Polis'
import Passport from './screens/Passport'

export default function App() {
  const location = useLocation()
  // The article reader is a full-screen overlay openable from anywhere;
  // it hides the bottom nav while open (Product Overview, Learn tab).
  const isReader = location.pathname.startsWith('/learn/article/')

  return (
    <div className="app-stage">
      <div className="phone">
        <StatusBar />
        <div className="screen" key={location.pathname}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/article/:id" element={<ArticleReader />} />
            <Route path="/reps" element={<Reps />} />
            <Route path="/reps/:id" element={<RepProfile />} />
            <Route path="/polis" element={<Polis />} />
            <Route path="/passport" element={<Passport />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
        {!isReader && <BottomNav />}
      </div>
      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, textAlign: 'center', maxWidth: 400 }}>
        Civvy — starting draft · Florida pilot · all figures are illustrative sample data
      </p>
    </div>
  )
}
