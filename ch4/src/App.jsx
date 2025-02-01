import { Post } from './components/Post.jsx'
import { CreatePost } from './components/CreatePost.jsx'
export function App() {
  return (
    (
      <Post
        title='Full-Stack React Projects'
        contents="Let's become full-stack developers!"
        author='Zaccccc'
      />
    ),
    (<CreatePost />)
  )
}

export default App
