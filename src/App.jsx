import Layout from './Layout'
import { Routes, Route } from 'react-router-dom'
import Home from './components/user/Home'
import Portfolio from './components/user/Portfolio'
import Freelance from './components/user/Freelance'
import Experience from './components/user/ExperiencePage'
import Profile from './components/user/Profile'
import Contact from './components/user/Contact'
import Text from './components/mddata/Text'
import Post from './components/mddata/Post'
import Article from './components/mddata/Article'
import Ai from './components/otherdata/Ai'
import AIagent from './components/otherdata/AIagent'
import Test from './Test'
function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
         <Route path="/Text" element={<Text/>} />
        <Route path="/settings" element={<h1>Settings</h1>} />
               <Route path="/Contact" element={<Contact/>} />
        <Route path="/notifications" element={<h1>Notifications</h1>} />
        <Route path="/profile" element={<Profile/>} />
               <Route path="/Test" element={<Test/>} />
               
      <Route path="/Experience" element={<Experience/>} />
           <Route path="/Freelance" element={<Freelance/>} />
               <Route path="/Portfolio" element={<Portfolio/>} />
                 <Route path="/Ai" element={<Ai/>} />
                    <Route path="/Post" element={<Post/>} />
                       <Route path="/Article" element={<Article/>} />
                                  <Route path="/AIagent" element={<AIagent/>} />
      </Routes>
    </Layout>
  )
}

export default App
