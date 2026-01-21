import Hero from '../components/Hero'
import Services from '../components/Services'
import Partners from '../components/Partners'
import WhyChooseSatyah from '../components/WhyChooseSatyah'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="unified-section">
        <Partners isHomePage={true} />
        <Services />
        <WhyChooseSatyah />
      </div>
    </>
  )
}

export default Home
