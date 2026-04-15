function Header() {
  try {
    return (
      <header className="border-b border-[var(--border-color)] bg-transparent" data-name="header" data-file="components/Header.js">
        <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <a href="index.html" className="flex items-center">
              <img 
                src="https://imgsea.com/images/2026/04/15/Unknown.png" 
                alt="EonveraX AGI LAB" 
                className="h-10 sm:h-12 md:h-16"
                onError={(e) => {
                  e.target.alt = 'EonveraX AGI LAB';
                  console.error('Logo image failed to load');
                }}
              />
            </a>
          </div>
        </nav>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
