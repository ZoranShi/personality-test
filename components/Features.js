function Features() {
  try {
    const features = [
      { icon: 'icon-chart-bar', title: '科学准确', description: '基于权威心理学理论，经过大量样本验证' },
      { icon: 'icon-lock', title: '隐私保护', description: '所有测试数据加密存储，绝不泄露个人信息' },
      { icon: 'icon-zap', title: '快速便捷', description: '15分钟即可完成测试，获取详细报告' },
      { icon: 'icon-users', title: '专业解读', description: '提供深度分析和个性化成长建议' }
    ];

    return (
      <section id="features" className="py-20 bg-white" data-name="features" data-file="components/Features.js">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">为什么选择我们</h2>
            <p className="text-xl text-[var(--text-secondary)]">专业、科学、值得信赖的人格测试平台</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[var(--bg-light)] p-8 rounded-2xl card-hover text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto bg-white shadow-md">
                  <div className={`${feature.icon} text-3xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-[var(--text-secondary)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}