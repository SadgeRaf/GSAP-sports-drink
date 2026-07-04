import NavBar from './components/NavBar'
import FlavorSection from './sections/FlavorSection'
import HeroSection from './sections/HeroSection'
import MessageSection from './sections/MessageSection'
import { ScrollSmoother } from 'gsap/all'
import { useGSAP } from '@gsap/react'
import NutritionSection from './sections/NutritionSection'

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  })
  return (
    <main>
      <NavBar />

      <div id='smooth-wrapper'>
        <div id="smooth-content">
          <HeroSection></HeroSection>
          <MessageSection></MessageSection>
          <FlavorSection></FlavorSection>
          <NutritionSection></NutritionSection>
        </div>
      </div>


    </main>
  )
}

export default App