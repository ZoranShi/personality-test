async function analyzePersonalityWithAI(userAnswers) {
  const personalityTypes = [
    { code: 'FOMO', name: '上车狂' },
    { code: 'REMAK-E', name: '回炉者' },
    { code: 'LUVR', name: '恋爱脑' },
    { code: 'LAZY', name: '摸鱼者' },
    { code: 'MODR', name: '改造派' },
    { code: 'BUBL', name: '泡沫人' },
    { code: 'UTOP', name: '乌托邦' },
    { code: 'CLCL', name: '算账者' },
    { code: 'GONE', name: '焦虑者' },
    { code: 'BELL', name: '杠铃人' },
    { code: 'DIGGE-R', name: '挖坟人' },
    { code: 'TI-RED', name: '爆肝人' },
    { code: 'HEAD', name: '鸵鸟' },
    { code: 'SEED', name: '布道者' }
  ];

  const prompt = `分析用户答题，返回最匹配的人格代码。\n\n${userAnswers.map((qa, i) => `${i + 1}. ${qa.question}\n答: ${qa.answer}`).join('\n\n')}\n\n只返回代码，如FOMO`;

  const apiKey = 'da9dfc50444143be80d7dae28bbbc5b2.XjWXAsm3TbxPAcj6';
  const endpoint = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
  const proxyUrl = `https://proxy-api.trickle-app.host/?url=${encodeURIComponent(endpoint)}`;
  
  const response = await fetch(proxyUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: 'glm-4-flash',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 50
    })
  });

  if (!response.ok) throw new Error('API failed');
  
  const data = await response.json();
  const resultType = data.choices[0].message.content.trim();
  
  if (personalityTypes.find(p => p.code === resultType)) {
    return resultType;
  }
  throw new Error('Invalid type');
}

async function analyzeAndRedirect() {
  try {
    const answersData = sessionStorage.getItem('testAnswers');
    if (!answersData) {
      window.location.href = 'test.html';
      return;
    }

    const answers = JSON.parse(answersData);
    const result = await analyzePersonalityWithAI(answers);
    
    sessionStorage.removeItem('testAnswers');
    window.location.href = `result.html?type=${result}`;
  } catch (error) {
    console.error('Analysis failed:', error);
    const fallbackResult = calculateResultFallback();
    sessionStorage.removeItem('testAnswers');
    window.location.href = `result.html?type=${fallbackResult}`;
  }
}

function calculateResultFallback() {
  const answersData = sessionStorage.getItem('testAnswers');
  if (!answersData) return 'FOMO';
  
  const answers = JSON.parse(answersData);
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  
  answers.forEach(answer => {
    if (scores[answer.dimension] !== undefined) {
      scores[answer.dimension]++;
    }
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
}

// 等待页面加载完成后再执行
window.addEventListener('DOMContentLoaded', () => {
  analyzeAndRedirect();
});
