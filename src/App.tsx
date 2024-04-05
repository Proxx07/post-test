import './App.css';
import { usePosts } from './hooks/usePosts';
import {Post} from './components/post/Post.tsx'

function App() {
  const {
    posts, isLoading,
    handlePagination, page
  } = usePosts();

  return (
    <>
      <h1>Posts</h1>
      <div className='pagination'>
        {Array.from({length: 10}, (_, i) => i + 1).map(pageNumber => {
          return <button className={page === pageNumber ? 'active' : ''} onClick={() => handlePagination(pageNumber)}>{pageNumber}</button>
        })}
      </div>

      <div className="wrapper">
        {
          isLoading ? 'Loading...' : 
          !posts.length ? "Empty" : 
          posts.map(post => <Post post={post}/>)
        }
      </div>
    </>
  )
}

export default App
