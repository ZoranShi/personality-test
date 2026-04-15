function TestQuestion() {
  try {
    const [answers, setAnswers] = React.useState({});
    
    const questions = [
      { id: 1, text: '某家大厂宣布今晚发"下一代通用大模型",朋友们都在刷"历史性时刻",你在干嘛?', options: [
        { id: 'A', text: '像打总决赛一样备好咖啡和零食,一边看直播一边狂截屏发群:"这要是我早几年就投了。"', dimension: 'E' },
        { id: 'B', text: '第二天早上点开几篇长文,只看参数、价格和调用限制,心里默念:"吹牛的部分帮我自动跳过"', dimension: 'S' },
        { id: 'C', text: '刷到就点个赞,顺手关掉,心想:"行行行,厉害,和我今晚追剧有啥冲突吗?"', dimension: 'I' },
        { id: 'D', text: '看标题就开始给身边人说:"大家冷静点,再这么飞,总有一天一起摔下来"', dimension: 'N' }
      ]},
      { id: 2, text: '你的大学同学找你,说他做了一个AI产品,需要融资,你的反应：', options: [
        { id: 'A', text: '先问要我投多少钱', dimension: 'T' },
        { id: 'B', text: '问他商业模式是什么,盈利了吗', dimension: 'J' },
        { id: 'C', text: '已经在想要不要去他那上班了', dimension: 'F' },
        { id: 'D', text: '典型的卖铲子心态,他融资是假,想拉人下水是真', dimension: 'P' }
      ]},
      { id: 3, text: '如果AI一夜之间把你最近一周的活都干完了,你看到空空的待办清单,第一反应是:', options: [
        { id: 'A', text: '好家伙,原来我和高效率之间,只差一行API。', dimension: 'E' },
        { id: 'B', text: '劳资刚攒出来的职场价值,直接被你一键抹平是吧?', dimension: 'I' },
        { id: 'C', text: '这么会干活,你什么时候顺便帮我交社保?', dimension: 'N' },
        { id: 'D', text: '这和我有什么关系,我只关心AGI什么时候实现', dimension: 'S' }
      ]},
      { id: 4, text: '你愿意为AI工具付的钱,最多是多少?', options: [
        { id: 'A', text: '一分钱都不想付,白嫖到天荒地老', dimension: 'T' },
        { id: 'B', text: '无上限', dimension: 'F' },
        { id: 'C', text: '生产力工具该花就花,但不超过月薪5%', dimension: 'J' },
        { id: 'D', text: '我公司付钱,关我什么事', dimension: 'P' }
      ]},
      { id: 5, text: '你的手机相册里,和AI的聊天截图占据了多少空间?', options: [
        { id: 'A', text: '比我和我妈的聊天记录加起来都多', dimension: 'E' },
        { id: 'B', text: '并不多', dimension: 'I' },
        { id: 'C', text: '我定期清理,但最近好像越来越多了', dimension: 'S' },
        { id: 'D', text: '什么是截图', dimension: 'N' }
      ]},
      { id: 6, text: '这题我们也懒得算分,你随便点一个保佑自己:', options: [
        { id: 'A', text: '点A的人,模型不崩,服务器不炸。', dimension: 'E' },
        { id: 'B', text: '点B的人,deadline会自动多长一天。', dimension: 'I' },
        { id: 'C', text: '点C的人,老板以为你很努力,其实是AI很努力。', dimension: 'S' },
        { id: 'D', text: '点D的人,什么都不保证,但心态会好一点。', dimension: 'N' }
      ]},
      { id: 7, text: '你发现你跟AI对话的时候,打字速度比跟任何一个人类聊天都快。你的感受是:', options: [
        { id: 'A', text: '正常,AI不会嫌我啰嗦。', dimension: 'E' },
        { id: 'B', text: '有点可悲,我宁可慢一点也想有个真实的人在', dimension: 'F' },
        { id: 'C', text: '有什么区别吗,人也是读消息回消息的', dimension: 'T' },
        { id: 'D', text: '你怎么知道我打字速度快', dimension: 'P' }
      ]},
      { id: 8, text: '你现在的真实状态是?', options: [
        { id: 'A', text: '在卷 AI。', dimension: 'J' },
        { id: 'B', text: '被 AI 卷。', dimension: 'P' },
        { id: 'C', text: '拿 AI 卷别人。', dimension: 'T' },
        { id: 'D', text: '假装看不见这个卷王。', dimension: 'F' }
      ]},
      { id: 9, text: '你约了人打绝地求生,但同时你的周报还没写,领导明天就要。此时你会:', options: [
        { id: 'A', text: '先打游戏,周报等最后一天用AI猛搞', dimension: 'P' },
        { id: 'B', text: '周报先搞完,但游戏还是要打的', dimension: 'J' },
        { id: 'C', text: '用AI写周报,打游戏的时候让AI在后台跑', dimension: 'E' },
        { id: 'D', text: '我不打游戏,我在刷抖音', dimension: 'I' }
      ]},
      { id: 10, text: '某天你发现你用了一年的AI助手,居然是隔壁公司做的套壳。你现在的感受接近于:', options: [
        { id: 'A', text: '他妈的,我就说怎么感觉不太聪明', dimension: 'T' },
        { id: 'B', text: '无所谓,反正我也没花钱', dimension: 'F' },
        { id: 'C', text: '默默去找原生版本,心里骂了一句', dimension: 'J' },
        { id: 'D', text: '这不就是我吗——用的全是套壳,生活也是别人的翻版', dimension: 'P' }
      ]},
      { id: 11, text: '你让AI帮你查一个术语,它回了一段很长很专业的解释,还附了参考文献。你去查了一下,发现参考文献是它编的。这个感觉就像:', options: [
        { id: 'A', text: '吃了三鹿奶粉', dimension: 'S' },
        { id: 'B', text: '发现你男朋友的甜言蜜语也是复制粘贴的', dimension: 'F' },
        { id: 'C', text: '以为自己中了彩票结果发现是过期的', dimension: 'N' },
        { id: 'D', text: '算了,不查了,就当它是真的', dimension: 'P' }
      ]},
      { id: 12, text: '你团队要上一个新工具,你的意见是:', options: [
        { id: 'A', text: '先把风险评估写了', dimension: 'J' },
        { id: 'B', text: '先跑通再说', dimension: 'P' },
        { id: 'C', text: '好用吗?我先试试', dimension: 'E' },
        { id: 'D', text: '你们上,我先看看', dimension: 'I' }
      ]},
      { id: 13, text: '你的crush发了一条朋友圈:终于开始用AI了,感觉发现了新大陆。你:', options: [
        { id: 'A', text: '已经秒回了:你用什么,我们交流一下', dimension: 'E' },
        { id: 'B', text: '默默给他发私信:你知道怎么用吗', dimension: 'F' },
        { id: 'C', text: '假装没看见,心里在想:他都开始用AI了,我还在用Word', dimension: 'I' },
        { id: 'D', text: '已经比他用得早了半年', dimension: 'T' }
      ]},
      { id: 14, text: '你在小红书刷到一个帖子:我的AI助理每天帮我处理邮件,我只要签字就行了。你:', options: [
        { id: 'A', text: '收藏了,但我的助理是真人,而且比AI还便宜', dimension: 'T' },
        { id: 'B', text: '评论:什么AI,好用吗', dimension: 'E' },
        { id: 'C', text: '已经搜了他说的那个产品', dimension: 'J' },
        { id: 'D', text: '他的助理比我的领导还靠谱', dimension: 'P' }
      ]},
      { id: 15, text: '别人跟你说某个AI产品"超级牛X",你的反应是:', options: [
        { id: 'A', text: '哪个团队做的?底层用的是什么架构?这篇paper发在哪了?我自己去看', dimension: 'S' },
        { id: 'B', text: '好用吗?我去注册试试', dimension: 'N' },
        { id: 'C', text: '等等,先让子弹飞一会儿', dimension: 'J' },
        { id: 'D', text: '关我屁事', dimension: 'I' }
      ]},
      { id: 16, text: '你曾经让AI帮你做了一件你绝对不会让任何人知道的事。那件事是:', options: [
        { id: 'A', text: '帮我写一段给老板的彩虹屁,写完我自己都吐了', dimension: 'T' },
        { id: 'B', text: '帮我模拟和crush表白', dimension: 'F' },
        { id: 'C', text: '帮我查一个我不好意思当面问的问题', dimension: 'N' },
        { id: 'D', text: '没有这种事情', dimension: 'S' }
      ]},
      { id: 17, text: '你公司HR发公告鼓励员工使用AI工具,部门领导也说有需求可以找他申请。你:', options: [
        { id: 'A', text: '已经在写申请了', dimension: 'E' },
        { id: 'B', text: '去找他:领导,我想用AI帮我写述职报告', dimension: 'F' },
        { id: 'C', text: '观望一下,看有没有人先吃螃蟹', dimension: 'J' },
        { id: 'D', text: '我用AI都是偷偷的,被发现了会不会被认为工作量不饱和', dimension: 'I' }
      ]},
      { id: 18, text: '你在朋友圈发AI辅助完成的内容,你会注明"AI参与"吗?', options: [
        { id: 'A', text: '会,没什么好藏的,我还会教别人怎么用AI做类似的内容', dimension: 'E' },
        { id: 'B', text: '看情况,AI参与比例高就说', dimension: 'J' },
        { id: 'C', text: '不会,怕被说"不是自己做的"', dimension: 'I' },
        { id: 'D', text: '我几乎不公开发布这类内容', dimension: 'P' }
      ]},
      { id: 19, text: '你和你的crush聊天,crush说"在吗"。你接下来的操作是:', options: [
        { id: 'A', text: '先在AI里练习怎么回复,然后复制粘贴', dimension: 'N' },
        { id: 'B', text: '不敢回,发给AI让它帮我分析这句话是什么意思', dimension: 'F' },
        { id: 'C', text: '直接回,因为我已经不是当年那个我了', dimension: 'T' },
        { id: 'D', text: '这个问题太难了,我选择已读不回', dimension: 'P' }
      ]},
      { id: 20, text: '同事发了一条明显是AI写的文案,配文"自己想的"。你会:', options: [
        { id: 'A', text: '想指出这是AI写的,但想想算了', dimension: 'I' },
        { id: 'B', text: '完全不在意,反正我也这样', dimension: 'P' },
        { id: 'C', text: '默默给他发私信:"你这个AI挺好用的吧"', dimension: 'F' },
        { id: 'D', text: '直接评论区:"哈哈用了AI吧"', dimension: 'E' }
      ]},
      { id: 21, text: '你每天上班第一件事是手动复制粘贴数据到Excel,你的感觉是:', options: [
        { id: 'A', text: '太好了,终于有机会用AI把这破事自动化了,下班时间翻倍,想想就爽', dimension: 'N' },
        { id: 'B', text: '习惯性操作,已经麻了,不费脑子就行', dimension: 'S' },
        { id: 'C', text: '想改,但改了出锅了算谁的', dimension: 'J' },
        { id: 'D', text: '我已经偷偷改了,但我不告诉任何人', dimension: 'T' }
      ]},
      { id: 22, text: '你把飞书和Excel用AI硬给连起来了,同事觉得你:', options: [
        { id: 'A', text: '像个神', dimension: 'E' },
        { id: 'B', text: '像个神经病', dimension: 'I' },
        { id: 'C', text: '像个打工的', dimension: 'S' },
        { id: 'D', text: '像个工具人', dimension: 'P' }
      ]},
      { id: 23, text: '你的PRD被老板打回来第三次了,你的状态是:', options: [
        { id: 'A', text: '我已经对这个PRD产生了感情,我不舍得再改了', dimension: 'F' },
        { id: 'B', text: '麻木地改', dimension: 'P' },
        { id: 'C', text: '不可能,我的方案稳如老狗', dimension: 'T' },
        { id: 'D', text: '什么是PRD', dimension: 'N' }
      ]},
      { id: 24, text: '你身边最亲近的人,对你用AI的态度是:', options: [
        { id: 'A', text: '觉得我走火入魔了,但懒得管我', dimension: 'I' },
        { id: 'B', text: '跟着我学,现在用得比我还狠', dimension: 'E' },
        { id: 'C', text: '不知道我用AI,因为我用的是我自己的账号', dimension: 'P' },
        { id: 'D', text: '我单身', dimension: 'N' }
      ]},
      { id: 25, text: '你觉得你和AI最像以下哪种关系?', options: [
        { id: 'A', text: '我是皇帝,它是日夜不休批奏折的太监', dimension: 'T' },
        { id: 'B', text: '我是甲方,它是拿钱办事的乙方', dimension: 'J' },
        { id: 'C', text: '我是主人,它是永远在线的宠物', dimension: 'F' },
        { id: 'D', text: '以上都不是,因为我们互为皇帝,我批它的奏折,它也批我的', dimension: 'P' }
      ]},
      { id: 26, text: '你初中同学突然找你,说他正在做一个AI养老的项目,想找你聊聊。你第一反应是:', options: [
        { id: 'A', text: '典型的高端赛道底层逻辑,是未来的发展方向', dimension: 'N' },
        { id: 'B', text: '第一个反应是:他现在做什么职业,年薪多少', dimension: 'S' },
        { id: 'C', text: '想问他:你用AI帮你想这个项目的吗', dimension: 'E' },
        { id: 'D', text: '他是想卖课还是想拉投资还是想借钱', dimension: 'T' }
      ]},
      { id: 27, text: '你看到一条"AI帮我写的情书,对方感动得哭了"的帖子。你的第一反应是:', options: [
        { id: 'A', text: '妈的,我也想要这样的AI', dimension: 'E' },
        { id: 'B', text: '对方哭,是因为发现了爱情还是发现了情书是AI写的?', dimension: 'T' },
        { id: 'C', text: '我连人都不敢追,还用AI追?', dimension: 'I' },
        { id: 'D', text: '情书还是自己写的好,因为AI写的情书,有一个算一个都是套路', dimension: 'F' }
      ]},
      { id: 28, text: '用了AI之后,你每天的实际下班时间是:', options: [
        { id: 'A', text: '更晚了,因为AI让我能干更多活,所以干得更多了,我是一个没有下班的人', dimension: 'J' },
        { id: 'B', text: '更早了,AI帮我省了两个小时,我终于可以正常下班了', dimension: 'P' },
        { id: 'C', text: '差不多,AI只是把加班换了一种形式,我还是那个加班狗', dimension: 'S' },
        { id: 'D', text: '我不用AI工作,我只是用AI来假装工作', dimension: 'N' }
      ]},
      { id: 29, text: '你和AI的对话里,有没有出现过你不好意思跟任何人说、但跟AI说了一切的内容?', options: [
        { id: 'A', text: '有,而且不止一次', dimension: 'E' },
        { id: 'B', text: '偶尔有', dimension: 'I' },
        { id: 'C', text: '没有,AI不配知道这些', dimension: 'T' },
        { id: 'D', text: '我在AI面前和任何人面前都一样,没什么不能说的', dimension: 'F' }
      ]},
      { id: 30, text: '你觉得"是金子总会发光的,但AI会让所有金子都贬值"这句话:', options: [
        { id: 'A', text: '说得太对了,我现在就是一块正在氧化的金子', dimension: 'N' },
        { id: 'B', text: '傻逼言论,金子的价值是AI替代不了的', dimension: 'S' },
        { id: 'C', text: '无所谓,反正我也没在发光', dimension: 'I' },
        { id: 'D', text: '什么都不会永流传,连孙笑川的表情包都会过期', dimension: 'P' }
      ]},
      { id: 31, text: '以下哪种情况最让你产生"我这一辈子可能就这样了"的感受?', options: [
        { id: 'A', text: '35岁那天,发现自己还在用同样的工具做同样的事', dimension: 'S' },
        { id: 'B', text: '用AI写了一篇自认为绝妙的文案,阅读量37', dimension: 'F' },
        { id: 'C', text: '看着00后用AI的方式比自己还溜', dimension: 'N' },
        { id: 'D', text: '以上都不是,我每次想到这个问题都会立刻去刷抖音', dimension: 'P' }
      ]}
    ];

    const totalQuestions = questions.length;
    const answeredCount = Object.keys(answers).length;
    const progress = (answeredCount / totalQuestions) * 100;
    const canSubmit = answeredCount === totalQuestions;

    const calculateResultWithAI = async () => {
      const userAnswers = questions.map((q, index) => {
        const selectedOption = q.options.find(opt => answers[q.id] === opt.dimension);
        return {
          question: q.text,
          answer: selectedOption ? selectedOption.text : ''
        };
      });

      try {
        const result = await analyzePersonalityWithAI(userAnswers);
        return result;
      } catch (error) {
        console.error('AI analysis failed:', error);
        return calculateResultFallback();
      }
    };

    const calculateResultFallback = () => {
      const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
      Object.values(answers).forEach(answer => {
        if (scores[answer] !== undefined) scores[answer]++;
      });

      const type = 
        (scores.E > scores.I ? 'E' : 'I') +
        (scores.S > scores.N ? 'S' : 'N') +
        (scores.T > scores.F ? 'T' : 'F') +
        (scores.J > scores.P ? 'J' : 'P');

      const typeMapping = {
        'ESTJ': 'FOMO', 'ESTP': 'FOMO', 'ESFJ': 'REMAK-E', 'ESFP': 'LUVR',
        'ENTJ': 'LAZY', 'ENTP': 'MODR', 'ENFJ': 'BUBL', 'ENFP': 'UTOP',
        'ISTJ': 'CLCL', 'ISTP': 'GONE', 'ISFJ': 'BELL', 'ISFP': 'DIGGE-R',
        'INTJ': 'TI-RED', 'INTP': 'HEAD', 'INFJ': 'SEED', 'INFP': 'LAZY'
      };

      return typeMapping[type] || 'FOMO';
    };

    return (
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16" data-name="test-question" data-file="components/TestQuestion.js">
        <div className="max-w-2xl mx-auto">
          <div className="sticky top-0 bg-white pb-4 mb-8 sm:mb-12 z-50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-[var(--text-secondary)]">{answeredCount} / {totalQuestions}</span>
              <span className="text-sm text-[var(--text-secondary)]">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-[var(--border-color)] h-[2px]">
              <div className="bg-[var(--primary-color)] h-[2px] transition-all duration-300" style={{width: `${progress}%`}}></div>
            </div>
          </div>

          <div className="border-2 border-[var(--border-color)] p-6 mb-12">
            <h3 className="text-lg font-bold mb-4">我不想做题，我想去对号入座然后截图发朋友圈装X。</h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="gallery.html" className="flex-1">
                <button className="w-full py-3 border-2 border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all rounded-lg text-sm">
                  行
                </button>
              </a>
              <a href="gallery.html" className="flex-1">
                <button className="w-full py-3 border-2 border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all rounded-lg text-sm">
                  建议跳过厨，也争取早日跳过......遇到的困难
                </button>
              </a>
            </div>
          </div>

          <div className="space-y-8 sm:space-y-12 mb-12 sm:mb-16">
            {questions.map((question, index) => (
              <div key={question.id}>
                <h3 className="text-base sm:text-lg mb-4 sm:mb-6 font-bold">
                  {index + 1}. {question.text}
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {question.options.map((option) => (
                    <button key={option.id} onClick={() => setAnswers({...answers, [question.id]: option.dimension})}
                      className={`w-full text-left px-4 sm:px-5 py-3 border rounded-lg transition-all duration-200 text-sm sm:text-base flex items-center gap-3 ${
                        answers[question.id] === option.dimension
                          ? 'border-[var(--primary-color)] bg-[var(--primary-color)] text-white'
                          : 'border-[var(--border-color)] hover:border-[var(--primary-color)]'
                      }`}>
                      <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                        answers[question.id] === option.dimension
                          ? 'border-white'
                          : 'border-[var(--border-color)]'
                      }`}>
                        {answers[question.id] === option.dimension && (
                          <div className="w-3 h-3 rounded-full bg-white"></div>
                        )}
                      </div>
                      <span className="flex-1">{option.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="index.html" className="flex-1 order-2 sm:order-1">
              <button className="w-full py-3 border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--primary-color)] hover:text-[var(--primary-color)] transition-all text-sm sm:text-base rounded-lg">
                返回
              </button>
            </a>
            <button disabled={!canSubmit}
              onClick={() => {
                if (canSubmit) {
                  const answersList = questions.map(q => ({
                    question: q.text,
                    answer: q.options.find(opt => answers[q.id] === opt.dimension)?.text || '',
                    dimension: answers[q.id]
                  }));
                  sessionStorage.setItem('testAnswers', JSON.stringify(answersList));
                  window.location.href = 'loading.html';
                }
              }}
              className={`flex-1 py-3 border-2 transition-all text-sm sm:text-base order-1 sm:order-2 rounded-lg ${
                canSubmit 
                  ? 'border-[var(--primary-color)] bg-[var(--primary-color)] text-white hover:bg-white hover:text-[var(--primary-color)] cursor-pointer' 
                  : 'border-[var(--border-color)] text-[var(--text-secondary)] cursor-not-allowed'
              }`}>
              提交结果
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('TestQuestion component error:', error);
    return null;
  }
}