
import './App.css'
import Blogss from './Components/Blogs/Blogss'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Home/Header'

function App() {
  

  return (
    <div className=' lg:w-max p-6' >
      <Header></Header>

      <div className='md:flex justify-between mt-4 lg:pl-10 '>
      <Blogss></Blogss>
        <Bookmarks> </Bookmarks>
      </div>

    </div>
  )
}

export default App
