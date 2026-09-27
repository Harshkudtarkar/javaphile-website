import AnimatedText from './AnimatedText';

export default function Introduction() {
  return (
    <section className="w-full py-32 md:py-48 bg-[#F5F0E8]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center text-center">
        <AnimatedText
          as="h2"
          text="Coffee is more than a drink."
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-[#211712] leading-tight md:leading-none mb-8 md:mb-12"
          delay={0}
          animation="reveal"
          splitBy="words"
        />
        <AnimatedText
          as="h2"
          text="It is a ritual. A moment. A craft."
          className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-[#211712] leading-tight md:leading-none mb-8 md:mb-12"
          delay={0.3}
          animation="reveal"
          splitBy="words"
        />
        <AnimatedText
          as="p"
          text="At Javaphile, every cup tells a story."
          className="font-serif text-2xl md:text-3xl text-[#75685F]"
          delay={0.6}
          animation="fade"
          splitBy="lines"
        />
      </div>
    </section>
  );
}
