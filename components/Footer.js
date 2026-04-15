function Footer() {
  try {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
      <footer className="border-t border-[var(--border-color)] py-8 sm:py-12 md:py-16" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"9px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"64px","marginLeft":"0px","fontSize":"16px","color":"rgb(17, 24, 39)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"start","fontWeight":"400","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="mb-12 sm:mb-16 pb-12 sm:pb-16 border-b border-[var(--border-color)]">
              <h3 style={{"paddingTop":"0px","paddingRight":"0px","paddingBottom":"0px","paddingLeft":"0px","marginTop":"0px","marginRight":"0px","marginBottom":"21px","marginLeft":"0px","fontSize":"14px","color":"rgb(107, 114, 128)","backgroundColor":"rgba(0, 0, 0, 0)","textAlign":"start","fontWeight":"500","objectFit":"fill","display":"block","position":"static","top":"auto","left":"auto","right":"auto","bottom":"auto"}} className="text-sm font-medium tracking-wider uppercase text-[var(--text-secondary)] mb-6 sm:mb-8">联系我们</h3>
              <div className="space-y-4 text-sm sm:text-base text-[var(--text-secondary)]">
                <p></p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="icon-mail text-base"></div>
                    <a href="mailto:contact@eonverax.com" className="hover:text-[var(--primary-color)] transition-colors">zoran@eonverax.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="icon-book-open text-base"></div>
                    <a href="https://xhslink.com/m/5VVPeDvINaE" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors">小红书：@EonveraX AGI LAB</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="icon-message-circle text-base"></div>
                    <span>公众号：@EonveraX AGI LAB</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="icon-zap text-base"></div>
                    <a href="https://okjk.co/v9NJwI" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--primary-color)] transition-colors">即刻：@EonveraX_AGI_LAB</a>
                  </div>
                </div>
                <p className="text-xs sm:text-sm"></p>
              </div>
            </div>
            
            <div className="mb-16">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-between w-full text-sm font-medium tracking-wider uppercase text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-colors mb-8"
              >
                <span>叠甲区域</span>
                <div className={`icon-chevron-down text-base transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}></div>
              </button>
              
              {isExpanded && (
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    本测试由EonveraX AGI Lab制作，仅供娱乐，不构成任何专业建议。
                  </p>
                  <p>
                    测试结果不代表你的真实能力，也不能预测你的未来，更不能作为任何决策的依据，包括但不限于换工作、分手、创业、相亲、追星、吵架、请假、买基金、养猫、装修、跳槽、搬家、拔智齿，以及任何你本来就在犹豫的事情。
                  </p>
                  <p>
                    如果你在测试后产生了任何强烈的自我认同感，请记住：你认同的不是你自己，你认同的是你希望的那个自己，或者说，你认同的是你希望别人以为的那个你。说白了，你认同的是你给自己加的那层滤镜。
                  </p>
                  <p>
                    如果你发现测试结果"太准了"，那是因为我精心挑选了那些让你觉得准的描述，而不是因为我真的了解你。如果你发现测试结果"一点都不准"，那也是正常的，因为你自己都不一定了解你自己，我凭什么了解？
                  </p>
                  <p>
                    本测试对任何因阅读测试结果而产生的焦虑、迷茫、自我怀疑、人生迷茫，以及"我是不是就这样了"的感受不承担任何责任。如果这些感受持续超过24小时，建议你出门右转找个真人聊聊天，而不是继续刷手机。
                  </p>
                  <p>
                    记住一句话：你是谁，不由一个测试决定，而由你明天醒来后做什么决定。
                  </p>
                  <p>
                    如果你读到这里，说明你大概率是一个认真的人。认真是好事，但别太认真。
                  </p>
                  <p>
                    最后感谢给我们灵感的B站UP主Q肉儿串儿（UID:417038183），做视频很有意思的美少女，感兴趣请关注她。
                  </p>
                  <p>
                    祝你开心。
                  </p>
                  <p className="text-right italic">
                    —— Zoran（熬夜版）
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-8 border-t border-[var(--border-color)] text-sm text-[var(--text-secondary)]">
              <span>SBAI</span>
              <span>© 2026 仅供娱乐</span>
            </div>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}
