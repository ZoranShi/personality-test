function PersonalityGallery() {
  try {
    const personalities = [
      { type: 'FOMO', title: '上车狂', image: 'https://imgsea.com/images/2026/04/15/FOMO.png', slogan: '这次我一定要上车！' },
      { type: 'REMAK-E', title: '回炉者', image: 'https://imgsea.com/images/2026/04/15/REMAK-E.png', slogan: '再改架构我是狗！汪汪汪！' },
      { type: 'LUVR', title: '恋爱脑', image: 'https://imgsea.com/images/2026/04/15/LUVR.png', slogan: 'Openai还我女朋友！' },
      { type: 'LAZY', title: '摸鱼者', image: 'https://imgsea.com/images/2026/04/15/LAZY.png', slogan: '摸鱼，是一种艺术。摸鱼不被发现更是。' },
      { type: 'MODR', title: '改造派', image: 'https://imgsea.com/images/2026/04/15/MODR.png', slogan: '我可以改变世界，改变自己。' },
      { type: 'BUBL', title: '泡沫人', image: 'https://i.ibb.co/j9LG4bH5/BUBL.png', slogan: '他冷静得像块冰！' },
      { type: 'UTOP', title: '乌托邦', image: 'https://i.ibb.co/1GrktrFv/Image.png', slogan: '可恶，我怎么感情里没这么浪漫。' },
      { type: 'CLCL', title: '算账者', image: 'https://i.ibb.co/fz37JgXC/CLCL.png', slogan: '你继续说，但是我的数字不会骗人。' },
      { type: 'GONE', title: '焦虑者', image: 'https://imgsea.com/images/2026/04/15/GONE.png', slogan: '看完分析更焦虑了怎么办？' },
      { type: 'BELL', title: '杠铃人', image: 'https://imgsea.com/images/2026/04/15/BELL.png', slogan: '谢谢你，阻冲之。' },
      { type: 'DIGGE-R', title: '挖坟人', image: 'https://imgsea.com/images/2026/04/15/DIGGE-R.png', slogan: '我一眼看出来这个垃圾测试的代码是乱写的（bushi。' },
      { type: 'TI-RED', title: '爆肝人', image: 'https://imgsea.com/images/2026/04/15/TI-RED.png', slogan: '如果上天给我十个肝。' },
      { type: 'HEAD', title: '鸵鸟', image: 'https://imgsea.com/images/2026/04/15/HEAD.png', slogan: '下次一定。' },
      { type: 'SEED', title: '布道者', image: 'https://imgsea.com/images/2026/04/15/SEED.png', slogan: '分享是一种美德。' }
    ];

    return (
      <div className="min-h-screen py-16 sm:py-24" data-name="personality-gallery" data-file="components/PersonalityGallery.js">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 sm:mb-20">
            <h1 className="text-4xl sm:text-5xl font-light mb-6 tracking-tight">14种人格图鉴</h1>
            <div className="w-16 h-[2px] bg-[var(--primary-color)] mx-auto mb-6"></div>
            <p className="text-lg text-[var(--text-secondary)]">探索每一种独特的AI时代人格</p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {personalities.map((personality) => (
              <a key={personality.type} href={`result.html?type=${personality.type}`}
                className="group block">
                <div className="border-2 border-[var(--border-color)] hover:border-[var(--primary-color)] transition-all duration-300 h-full flex flex-col">
                  <div className="bg-white p-6 overflow-hidden flex-shrink-0">
                    <img 
                      src={personality.image} 
                      alt={personality.title} 
                      loading="lazy"
                      decoding="async"
                      fetchpriority="low"
                      className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        console.error('Image failed to load:', personality.image);
                      }}
                    />
                  </div>
                  <div className="border-t-2 border-[var(--border-color)] p-5 bg-white flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{personality.title}</h3>
                    <p className="text-sm tracking-widest text-[var(--text-secondary)] mb-3">{personality.type}</p>
                    <p className="text-sm text-[var(--text-primary)] italic mt-auto">{personality.slogan}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-16 sm:mt-20">
            <a href="index.html">
              <button className="px-10 py-4 border-2 border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[var(--primary-color)] hover:text-white transition-all duration-300 text-base font-medium">
                返回首页
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('PersonalityGallery component error:', error);
    return null;
  }
}