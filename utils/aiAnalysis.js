async function analyzePersonalityWithAI(userAnswers) {
  const personalityTypes = [
    { code: 'FOMO', name: '上车狂', description: '看到风就以为在点名的上车体质，信息雷达和试坑先锋' },
    { code: 'REMAK-E', name: '回炉者', description: '明明在推进项目但感觉永远在原点，PRD修改专业户' },
    { code: 'LUVR', name: '恋爱脑', description: '和AI的聊天记录比工作文档长，深度绑定型人格' },
    { code: 'LAZY', name: '摸鱼者', description: '高能摸鱼型生产力个体，重复三次自动触发自动化' },
    { code: 'MODR', name: '改造派', description: '世界补丁工程师，看什么都想加AI' },
    { code: 'BUBL', name: '泡沫人', description: '最警觉的泡沫雷达，天生冷静派' },
    { code: 'UTOP', name: '乌托邦', description: '浪漫主义者，思考人类和AGI共存的社会形态' },
    { code: 'CLCL', name: '算账者', description: '算得过就上，算不过就缓的现实派' },
    { code: 'GONE', name: '焦虑者', description: '焦虑情绪独立成人，看到AI就想"我以后怎么办"' },
    { code: 'BELL', name: '杠铃人', description: '讨论现场自带"等等"，风险意识超强' },
    { code: 'DIGGE-R', name: '挖坟人', description: '研究底层技术的学者，喜欢追根溯源' },
    { code: 'TI-RED', name: '爆肝人', description: '把自己贴满时间表，长期轻度透支状态' },
    { code: 'HEAD', name: '鸵鸟', description: '战略性观望大师，永远在等工具成熟' },
    { code: 'SEED', name: '布道者', description: '朋友圈自来水发动机，真心想让大家用上AI' }
  ];

  const prompt = `你是一个专业的心理测试分析师。现在有一个用户完成了31道关于AI使用态度的测试题，请根据用户的答案，分析他最符合以下哪种人格类型。

人格类型列表：
${personalityTypes.map(p => `- ${p.code} (${p.name}): ${p.description}`).join('\n')}

用户的答题情况：
${userAnswers.map((qa, i) => `${i + 1}. ${qa.question}\n   回答: ${qa.answer}`).join('\n\n')}

请仔细分析用户的答题模式、行为倾向和心理特征，选出最匹配的人格类型。

要求：
1. 只返回人格类型的代码（如FOMO、LAZY等）
2. 不要返回任何其他文字或解释
3. 必须从上述14种人格类型中选择一个`;

  const apiKey = 'da9dfc50444143be80d7dae28bbbc5b2.XjWXAsm3TbxPAcj6';
  const endpoint = 'https://open.bigmodel.cn/api/paas/v4/chat/completions';
  
  const requestBody = {
    model: 'glm-4-flash',
    messages: [
      {
        role: 'system',
        content: '你是一个专业的心理测试分析师。'
      },
      {
        role: 'user',
        content: prompt
      }
    ],
    temperature: 0.7,
    max_tokens: 50
  };

  const proxyUrl = `https://proxy-api.trickle-app.host/?url=${encodeURIComponent(endpoint)}`;
  
  try {
    const response = await fetch(proxyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error Response:', errorText);
      throw new Error(`API request failed: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const resultType = data.choices[0].message.content.trim();
    
    const validTypes = personalityTypes.map(p => p.code);
    if (validTypes.includes(resultType)) {
      return resultType;
    }
    
    throw new Error('Invalid personality type returned');
  } catch (error) {
    console.error('API call error:', error);
    throw error;
  }
}


