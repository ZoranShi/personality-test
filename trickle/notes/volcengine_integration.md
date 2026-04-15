# 智谱 GLM API 集成说明

## 配置要求

在 `utils/aiAnalysis.js` 文件中，需要配置你的智谱 API Key：

```javascript
const apiKey = 'da9dfc50444143be80d7dae28bbbc5b2.XjWXAsm3TbxPAcj6';
```

请将上述 API Key 替换为你的实际 API Key。

## 工作原理

1. 用户完成31道测试题后点击"提交结果"
2. 系统收集所有问题和用户选择的答案文本
3. 通过智谱 GLM-4 Flash 模型进行语义分析
4. AI 根据用户答案模式判断最匹配的人格类型
5. 直接跳转到对应的结果页面

## API 端点

- 模型: `glm-4-flash` (智谱免费的 GLM-4 Flash 模型)
- 端点: `https://open.bigmodel.cn/api/paas/v4/chat/completions`
- 使用 Trickle 代理避免 CORS 问题

## 错误处理

如果 AI 分析失败，系统会自动降级到原有的简单计分逻辑，确保用户体验不受影响。
