import GradientText from '../GradientText/GradientText'
import { Typewriter } from '../ui/typewriter'

export default function Hero() {
  return (
    <section className="h-[600px] flex items-center justify-center">
      <div style={{ width: '50%' }}>
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-5xl"
        >
          <h1>Hello! I'm Aman </h1>
          <h1 style={{display:'flex', justifyContent:'center'}}> I am a 
            <Typewriter
              text={['Coder', 'Developer']}
              speed={70}
              className="px-2 sm:px-2 md:px-3 text-yellow-400 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center"
              waitTime={1500}
              deleteSpeed={40}
              cursorChar={"_"}
            />
          </h1>
        </GradientText>
      </div>
    </section>
  )
} 