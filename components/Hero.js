function Hero() {
  try {
    return (
      <section className="min-h-[85vh] flex items-center justify-center px-4" data-name="hero" data-file="components/Hero.js">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 sm:mb-12 md:mb-16 leading-tight tracking-tight py-4">
              测试您在AI生态中的定位<br/>
              SBAI<br/>
              Self & Bot Attitude Indicator
            </h1>
            
            <a href="test.html">
              <button className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 border-2 border-[var(--primary-color)] bg-[var(--primary-color)] text-white font-light text-base sm:text-lg hover:bg-white hover:text-[var(--primary-color)] transition-all duration-300 rounded-lg mt-4 sm:mt-8">
                开始测试
              </button>
            </a>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}
