function TestTypes() {
  try {
    const tests = [
      { icon: 'icon-circle-user', title: 'MBTI人格测试', description: '了解你的性格类型，发现独特的思维方式和行为模式', duration: '15分钟', questions: '60题' },
      { icon: 'icon-heart', title: '九型人格测试', description: '探索内心深层动机，认识真实的自我', duration: '12分钟', questions: '45题' },
      { icon: 'icon-sparkles', title: '职业性格测试', description: '发现最适合你的职业方向和发展路径', duration: '10分钟', questions: '40题' }
    ];

    return (
      <section id="tests" className="py-20 bg-[var(--bg-light)]" data-name="test-types" data-file="components/TestTypes.js">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">选择你的测试</h2>
            <p className="text-xl text-[var(--text-secondary)]">多种专业测试，全方位了解自己</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tests.map((test, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl card-hover">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-[var(--secondary-color)]">
                  <div className={`${test.icon} text-3xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-2xl font-bold mb-3">{test.title}</h3>
                <p className="text-[var(--text-secondary)] mb-6">{test.description}</p>
                <div className="flex items-center space-x-4 text-sm text-[var(--text-secondary)] mb-6">
                  <div className="flex items-center space-x-1">
                    <div className="icon-clock text-base"></div>
                    <span>{test.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="icon-file-text text-base"></div>
                    <span>{test.questions}</span>
                  </div>
                </div>
                <button className="w-full py-3 rounded-full font-semibold border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300">
                  开始测试
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('TestTypes component error:', error);
    return null;
  }
}