import './App.css'
import { Accordion } from './Project1-Accordion/Project1Accordion'
import { Project2RandomColorGenerator } from './Project2-RandomColoGenerator/Project2RandomColorGenerator'
import { ImageSlider } from './Project4-ImageSlider/ImageSlider'
import { StarRating } from './Project3-StarRating/StarRating'

function App() {
  return (
    <>
     {/* <Accordion/>
    <Project2RandomColorGenerator/>
    <StarRating/> */}
    <ImageSlider url={"https://picsum.photos/v2/list"} path={"1"} limit={"10"}/>
    </>
  )
}

export default App
