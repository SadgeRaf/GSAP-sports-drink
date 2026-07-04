import FlavorSlider from "../components/FlavorSlider"
import FlavorTitle from "../components/FlavorTitle"


const FlavorSection = () => {
  return <section className="flavor-section">
<div className="h-full flex lg:flex-row flex-col items-center relative">
<div className="lg:w-[57%] flex-none h-88 lg:h-full md:mt-28 xl:mt-0">
  <FlavorTitle></FlavorTitle>
</div>
<div className="h-full">
  <FlavorSlider></FlavorSlider>
</div>
</div>
  </section>
}

export default FlavorSection