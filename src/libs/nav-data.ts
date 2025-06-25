import type { ICategoryType, INavDataType } from '../../src/types/interface'


// const queryAllAiSite = () => {
//   const list = document.querySelectorAll('.url-card .card')
//   const aiList = Array.from(list).map((el) => {
//     if (!el) return {}
//     const item = el.querySelector('.card-body')
//     const url = el.getAttribute('data-url')
//     const name = item.querySelector('.url-info strong')?.innerHTML
//     const desc = item.querySelector('.url-info p')?.innerHTML
//     // const url = item.querySelector('a')?.getAttribute('href')
//     const icon = item.querySelector('.url-img img')?.getAttribute('src')
//     return {
//       name,
//       desc,
//       url,
//       icon
//     }
//   })
//   return aiList
// }


export const aiNavData: INavDataType[] = [
  {
    categoryCode: "assistant",
    categoryName: "智能助手",
    list: [
      // {
      //   "name": "问小白",
      //   "desc": "元石科技推出的AI智能助手，支持DeepSeek满血版",
      //   "url": "https://wenxiaobai.paluai.com/aibot",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2025/04/wenxiaobai-logo-2.png"
      // },
      {
        "name": "豆包",
        "desc": "字节跳动推出的免费AI智能助手",
        "url": "https://www.doubao.com/chat/",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/doubao-icon.png"
      },
      {
        "name": "讯飞星火",
        "desc": "科大讯飞推出的AI智能助手，支持PPT生成、深度推理",
        "url": "https://xinghuo.xfyun.cn/desk",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/xunfei-xinghuo-logo.png"
      },
      // {
      //   "name": "逗逗",
      //   "desc": "AI游戏陪玩，支持原神、黑神话、LOL！",
      //   "url": "https://doudou.paluai.com/web_aitool",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2024/12/doudou-logo.png"
      // },
      {
        "name": "ChatGPT",
        "desc": "OpenAI旗下AI对话工具",
        "url": "https://chatgpt.com/",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/chatgpt-icon.png"
      },
      {
        "name": "Claude",
        "desc": "Anthropic公司推出的对话式AI智能助手",
        "url": "https://claude.ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/anthropic-icon.png"
      },
      {
        "name": "Kimi智能助手",
        "desc": "月之暗面推出的AI智能助手",
        "url": "https://www.kimi.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/kimi-ai-logo.png"
      },
      {
        "name": "DeepSeek",
        "desc": "幻方量化推出的AI智能助手和开源大模型",
        "url": "https://deepseek.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/deepseek-chat-icon.png"
      },
      {
        "name": "Qwen Chat",
        "desc": "阿里通义推出的 Qwen 最新模型体验平台",
        "url": "https://chat.qwen.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/tongyi-icon.png"
      },
      {
        "name": "MiniMax",
        "desc": "MiniMax推出的AI智能问答助手",
        "url": "https://chat.minimaxi.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/03/MiniMax-logo.png"
      },
      {
        "name": "腾讯元宝",
        "desc": "腾讯推出的免费AI智能助手",
        "url": "https://yuanbao.tencent.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/tencent-yuanbao-icon.png"
      },
      {
        "name": "Gemini",
        "desc": "Google推出的AI聊天对话机器人Gemini",
        "url": "https://deepmind.google/technologies/gemini",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/googel-gemini-app-icon.webp"
      },
      {
        "name": "Z.ai",
        "desc": "智谱面向全球推出的最新模型体验平台",
        "url": "https://chat.z.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/04/z-ai-logo.png"
      },
      {
        "name": "Grok",
        "desc": "马斯克旗下xAI推出的人工智能助手",
        "url": "https://x.ai/grok",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/xai-icon.png"
      },
      {
        "name": "Poe",
        "desc": "问答社区Quora推出的问答机器人工具",
        "url": "https://poe.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/quora-poe-icon.png"
      },
      {
        "name": "智谱清言",
        "desc": "智谱推出的全能AI助手",
        "url": "https://chatglm.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/zhipu-ai-chatglm-icon.png"
      },
      {
        "name": "通义",
        "desc": "阿里推出的自研大模型，通情、达义，你的全能AI助手！",
        "url": "https://www.tongyi.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/tongyi-aliyun-icon.png"
      },
      {
        "name": "华为小艺",
        "desc": "华为旗下小艺AI助手网页端，已接入DeepSeek-R1",
        "url": "https://xiaoyi.huawei.com/chat/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/02/xiaoyi-huawei-logo.png"
      },
      {
        "name": "书生大模型",
        "desc": "上海人工智能实验室推出的系列AI模型",
        "url": "https://intern-ai.org.cn/home",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/06/shusheng-logo.png"
      },
      {
        "name": "文心一言",
        "desc": "百度推出的基于文心大模型的AI对话互动工具",
        "url": "https://yiyan.baidu.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/baidu-yiyan-icon.png"
      },
      {
        "name": "阶跃AI",
        "desc": "阶跃星辰推出的支持多模态的AI聊天机器人",
        "url": "https://yuewen.cn/chats/new?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/stepchat-icon.png"
      },
      {
        "name": "百小应",
        "desc": "百川智能推出的免费AI助手",
        "url": "https://ying.baichuan-ai.com/chat?from=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/ying-ai-icon.png"
      },
      {
        "name": "天工AI",
        "desc": "昆仑万维推出的AI智能助手",
        "url": "https://www.tiangong.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/tiangong-ai-search-icon.png"
      },
      // {
      //   "name": "Copilot",
      //   "desc": "微软推出的网页版Copilot助手",
      //   "url": "https://copilot.microsoft.com",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/microsoft-copilot-icon.png"
      // },
      // {
      //   "name": "Character.AI",
      //   "desc": "创建虚拟角色并与其对话",
      //   "url": "",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/character-ai-icon.png"
      // },
      // {
      //   "name": "J1 Assistant",
      //   "desc": "罗永浩旗下 Jarvis 项目推出的 AI 智能助手",
      //   "url": "https://ai-bot.cn/j1-assistant",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2025/01/J1-Assistant-logo.png"
      // },
      {
        "name": "Meta AI助手",
        "desc": "Meta推出的免费AI聊天助手",
        "url": "https://www.meta.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/imagine-with-meta.png"
      },
      // {
      //   "name": "Bing新必应",
      //   "desc": "微软推出的新版结合了ChatGPT功能的必应",
      //   "url": "",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/new-bing-icon.png"
      // },
      // {
      //   "name": "Koko AI",
      //   "desc": "Seele公司推出的「AI+3D」情感陪伴产品",
      //   "url": "https://www.seeles.ai/?utm_source=aiduck.netlify.app",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Koko-ai-logo.png"
      // },
      {
        "name": "Me.bot",
        "desc": "心识宇宙推出的个性化AI伴侣产品",
        "url": "https://www.me.bot/?utm_source=aiduck.netlify.app",
        "icon": "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/ae/39/fa/ae39fa8f-aa28-f211-8aa5-40fdd111feda/AppIcon-0-0-1x_U007ephone-0-85-220.png/460x0w.webp"
      },
      // {
      //   "name": "Saylo",
      //   "desc": "AI驱动的故事角色扮演游戏应用，沉浸式的剧本互动体验",
      //   "url": "https://www.sayloai.com/?utm_source=aiduck.netlify.app",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/Saylo-logo.png"
      // },
      {
        "name": "通义星尘",
        "desc": "用AI定制属于你自己的IP角色",
        "url": "https://tongyi.aliyun.com/xingchen/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/tongyi-icon.png"
      },
      {
        "name": "CueMe",
        "desc": "夸克推出的AI智能对话助手，支持2万字长文写作",
        "url": "https://cueme.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/CueMe-logo.png"
      },
      {
        "name": "造梦次元",
        "desc": "AI互动内容平台，虚拟角色逗你开心",
        "url": "https://ciyuan.ideaflow.pro/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/zaomengciyuan-logo.png"
      },
      {
        "name": "Museland",
        "desc": "沉浸式AI角色扮演产品",
        "url": "https://www.museland.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Museland-logo.png"
      },
      {
        "name": "百度AI助手",
        "desc": "百度推出的多场景AI智能体助手",
        "url": "https://chat.baidu.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/chat.baidu-logo.png"
      },
      {
        "name": "商量SenseChat",
        "desc": "商汤科技推出的免费AI聊天助手",
        "url": "https://chat.sensetime.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/sensechat-new-icon.png"
      },
      {
        "name": "小悟空",
        "desc": "字节跳动推出的免费AI对话助手和个人助理",
        "url": "https://wukong.com/tool",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/09/wukong-ai-icon.png"
      },
      {
        "name": "紫东太初",
        "desc": "中科院与武智院推出的千亿参数全模态大模型和助手",
        "url": "https://taichu-web.ia.ac.cn/#/",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/taichu-ai-icon.png"
      },
      // {
      //   "name": "小黄蕉",
      //   "desc": "字节跳动旗下推出的AI虚拟交友聊天平台",
      //   "url": "https://chatwiz.cn/h5/feely?utm_source=aiduck.netlify.app",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/chatwiz-icon.png"
      // },
      {
        "name": "冒泡鸭",
        "desc": "阶跃星辰推出的AI聊天机器人和智能体平台",
        "url": "https://maopaoya.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/maopaoya-icon.png"
      },
      {
        "name": "Cici",
        "desc": "豆包国际版，字节跳动面向海外市场推出的AI助手",
        "url": "https://www.cici.com/chat/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Cici-logo.png"
      },
      {
        "name": "百川大模型",
        "desc": "百川智能推出的大模型助手，融合了意图理解、信息检索以及强化学习技术",
        "url": "https://ying.baichuan-ai.com/chat?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/baichuan-ai-icon.png"
      },
      {
        "name": "Le Chat",
        "desc": "Mistral推出的AI对话聊天助手",
        "url": "https://chat.mistral.ai/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/02/mistral-ai-icon.png"
      },
      // {
      //   "name": "百度AI伙伴",
      //   "desc": "百度最新上线的AI搜索对话工具",
      //   "url": "https://chat.baidu.com",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/chat-baidu-icon.png"
      // },
      // {
      //   "name": "超级助理",
      //   "desc": "百度智能云发布的基于文心一言的AI原生应用和Copilot“超级助理”",
      //   "url": "https://cloud.baidu.com/product/infoflow.html?ref=aiduck.netlify.app",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/superagent-icon.png"
      // },
      {
        "name": "钉钉·个人版",
        "desc": "钉钉推出的个人版办公应用程序，内置AI智能助手，可进行AI创作、AI对话、AI绘画",
        "url": "https://workspace.dingtalk.com/welcome?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/dingtalk-personal-ai.png"
      },
      {
        "name": "Wanderboat",
        "desc": "硅谷初创公司UTA AI推出的AI旅行助手",
        "url": "https://wanderboat.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/wanderboat-logo.png"
      },
      {
        "name": "MChat",
        "desc": "基于孟子GPT大模型的AI对话机器人",
        "url": "https://www.langboat.com/portal/mengzi-gpt?from=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/langboat-mchat-icon.png"
      },
      {
        "name": "Luca面壁露卡",
        "desc": "面壁智能推出的千亿多模态大模型免费智能对话助手",
        "url": "https://luca.cn",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/luca-modelbest-icon.png"
      },
      {
        "name": "元象XChat",
        "desc": "元象XVERSE大模型驱动的AI聊天助手",
        "url": "https://chat.xverse.cn/home/index.html?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/xverse-icon.png"
      },
      {
        "name": "ChitChop",
        "desc": "字节旗下面向海外用户推出的免费大模型产品和AI助手工具箱",
        "url": "https://www.chitchop.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/chitchop-icon.png"
      },
      {
        "name": "魔搭GPT（ModelScopeGPT）",
        "desc": "阿里达摩院推出的大小模型协同的智能助手，具备作诗、绘画、视频生成、语音播放等多模态能力",
        "url": "https://www.modelscope.cn/studios/damo/ModelScopeGPT",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/modelscope-icon.png"
      },
      // {
      //   "name": "Forefront",
      //   "desc": "提供GPT-3.5、GPT-4、Claude的AI聊天机器人",
      //   "url": "",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/forefront-ai-icon.png"
      // },
      {
        "name": "HuggingChat",
        "desc": "HuggingFace推出的在线聊天机器人，基于Open Assistant模型",
        "url": "https://huggingface.co/chat/",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/huggingchat-icon.png"
      },
      {
        "name": "TigerBot",
        "desc": "虎博科技推出的AI对话聊天机器人，基于TigerBot开源大模型",
        "url": "https://tigerbot.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/06/tigerbot-icon.png"
      },
      {
        "name": "Stable Chat",
        "desc": "Stability AI 最新推出的免费聊天对话网站",
        "url": "https://research.stability.ai/chat",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/stable-chat-icon.png"
      },
      // {
      //   "name": "ColossalChat",
      //   "desc": "Colossal-AI推出的免费开源版ChatGPT聊天机器人替代品",
      //   "url": "",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/colossal-chat-icon.png"
      // },
      // {
      //   "name": "Jasper Chat",
      //   "desc": "Jasper针对内容创作者出品的AI聊天工具",
      //   "url": "",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/jasper-ai-icon.png"
      // },
      // {
      //   "name": "YouChat AI",
      //   "desc": "AI搜索对话工具",
      //   "url": "",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/youchat-icon.png"
      // },
      // {
      //   "name": "ChatSonic",
      //   "desc": "WriteSonic出品的ChatGPT竞品",
      //   "url": "",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/chatsonic-ai-icon.png"
      // },
      // {
      //   "name": "Replika",
      //   "desc": "AI对话陪伴工具",
      //   "url": "",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/replika-ai-icon.png"
      // },
      // {
      //   "name": "Whispr",
      //   "desc": "免费AI对话回应",
      //   "url": "",
      //   "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/whispr-icon.png"
      // },
      {
        "name": "MOSS",
        "desc": "复旦大学团队开发的对话式大型语言模型",
        "url": "https://moss.fastnlp.top",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/moss-icon.png"
      },
      {
        "name": "Open Assistant",
        "desc": "免费开源的对话式AI，GitHub星标超3万",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/oepn-assistant-icon.png"
      },
      {
        "name": "Pi",
        "desc": "DeepMind联创新公司推出的AI聊天机器人",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/heypi-icon.png"
      },
      {
        "name": "Inworld",
        "desc": "开发和创建AI虚拟角色并与其互动",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/inworld-icon.png"
      },
      {
        "name": "商量SenseChat",
        "desc": "商汤科技推出的类ChatGPT的人工智能大语言模型",
        "url": "https://chat.sensetime.com/wb",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/sensechat-icon.png"
      },
      {
        "name": "360智脑",
        "desc": "360搜索最新推出的AI对话聊天机器人",
        "url": "https://ai.360.com/?src=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/06/ai-360-icon.png"
      },
      {
        "name": "Neeva",
        "desc": "集成了AI问答的AI搜索引擎",
        "url": "https://ai-bot.cn/sites/1890.html",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/neeva-icon.png"
      },
      {
        "name": "对话写作猫",
        "desc": "秘塔写作猫推出的AI对话聊天工具",
        "url": "https://ai-bot.cn/sites/13.html",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/xiezuocat-ai-icon.png"
      },
      {
        "name": "应事AI",
        "desc": "MiniMax推出的AI对话助理，已免费开放",
        "url": "https://hailuoai.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/09/yingshi-ai-icon.png"
      }
    ]
  },
  {
    categoryCode: "search",
    categoryName: "AI搜索",
    list: [
      {
        "name": "问小白",
        "desc": "DeepSeek-R1满血版免费不限次，支持联网搜索",
        "url": "https://wenxiaobai.paluai.com/aibot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/04/wenxiaobai-logo-2.png"
      },
      {
        "name": "夸克AI",
        "desc": "集AI搜索、网盘、文档、创作等功能于一体的应用",
        "url": "https://b.quark.cn/apps/qkhomepage_twofoufeb/routes/model?entry=other_baoyingpckk_cpa9&ch=other_baoyingpckk_cpa9&image=search&dp=",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/11/quark-logo-1.png"
      },
      {
        "name": "秘塔AI搜索",
        "desc": "最好用的AI搜索工具，没有广告，直达结果",
        "url": "https://metaso.cn/?s=aibot1&referrer_s=aibot1",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/metaso-ai-search-icon.png"
      },
      {
        "name": "Perplexity",
        "desc": "强大的对话式AI搜索引擎",
        "url": "https://www.perplexity.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/perplexity-icon.png"
      },
      {
        "name": "SearchGPT",
        "desc": "OpenAI最新推出的AI搜索引擎",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/SearchGPT-logo.png"
      },
      {
        "name": "Devv",
        "desc": "面向程序员的新一代AI搜索引擎",
        "url": "https://devv.ai/zh?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/devv-ai-icon.png"
      },
      {
        "name": "AMiner",
        "desc": "智谱AI推出的大模型学术平台",
        "url": "https://www.aminer.cn/open/research?f=aibot_search_dr_v1",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/aminer-logo.png"
      },
      {
        "name": "心流",
        "desc": "阿里旗下推出的AI搜索助手",
        "url": "https://iflow.cn/?utm_source=aibot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/iflow-icon.png"
      },
      {
        "name": "点点",
        "desc": "小红书推出的 AI 搜索应用，主打生活场景",
        "url": "https://ai-bot.cn/diandian",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/12/diandian-logo.png"
      },
      {
        "name": "知乎直答",
        "desc": "知乎推出的AI搜索引擎，直达问题答案",
        "url": "https://zhida.zhihu.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/zhihu-zhida-icon.png"
      },
      {
        "name": "纳米搜索",
        "desc": "360公司推出的AI搜索应用，一切皆可生成视频",
        "url": "https://ai-bot.cn/namiso",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/11/namisousuo-logo.png"
      },
      {
        "name": "百度AI探索版",
        "desc": "百度推出的深度AI搜索引擎",
        "url": "https://think.baidu.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/baidu-zuojia-icon.png"
      },
      {
        "name": "Lumina",
        "desc": "完全免费的AI学术搜索引擎",
        "url": "https://lumina.sh/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Lumina-logo.png"
      },
      {
        "name": "Felo",
        "desc": "免费AI智能搜索引擎，支持社交联网搜索和多语种问答结果",
        "url": "https://felo.ai/search?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Felo-ai-logo.png"
      },
      {
        "name": "360AI搜索",
        "desc": "360推出的新一代AI搜索引擎",
        "url": "https://so.360.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/360-ai-search-icon.png"
      },
      {
        "name": "天工AI搜索",
        "desc": "昆仑万维最新推出的结合大模型的AI搜索引擎",
        "url": "https://tiangong.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/tiangong-ai-search-icon.png"
      },
      {
        "name": "Exa AI",
        "desc": "专门为AI模型设计的搜索引擎平台",
        "url": "https://exa.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/Exa-AI-logo.png"
      },
      {
        "name": "Reddo",
        "desc": "全球产品信息AI搜索引擎，能语义化搜索任何公开的产品与公司",
        "url": "https://www.reddo.cloud/search_home?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Reddo-logo.png"
      },
      {
        "name": "博查AI搜索",
        "desc": "支持多模型的AI搜索引擎",
        "url": "https://bochaai.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/bocha-ai-icon.png"
      },
      {
        "name": "链企AI",
        "desc": "链企智能推出的AI商业搜索工具",
        "url": "https://www.lianqiai.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/lianqiai-logo.png"
      },
      {
        "name": "问问小宇宙",
        "desc": "小宇宙推出的AI搜索产品",
        "url": "https://ask.xiaoyuzhoufm.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/xiaoyuzhou-website.png"
      },
      {
        "name": "Dexa AI",
        "desc": "AI播客搜索工具",
        "url": "https://dexa.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/dexa-ai-icon.png"
      },
      {
        "name": "CuspAI",
        "desc": "剑桥大学推出的材料学专业AI搜索工具",
        "url": "https://www.cusp.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/CuspAI-website.png"
      },
      {
        "name": "XAnswer",
        "desc": "支持生成思维导图的免费AI搜索工具",
        "url": "https://www.xanswer.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/XAnswer-logo.png"
      },
      {
        "name": "Glean",
        "desc": "专为职场人设计的AI搜索引擎",
        "url": "https://www.glean.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Glean-logo.png"
      },
      {
        "name": "AlphaSense",
        "desc": "专为金融专业人士设计的AI搜索工具",
        "url": "https://www.alpha-sense.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/AlphaSense-logo.png"
      },
      {
        "name": "Globe Explorer",
        "desc": "结构化AI知识搜索引擎",
        "url": "https://explorer.globe.engineer/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/globe-explorer-icon.png"
      },
      {
        "name": "Reportify",
        "desc": "AI投资研究问答搜索引擎",
        "url": "https://reportify.cc/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/reportify-icon.png"
      },
      {
        "name": "Phind",
        "desc": "专为开发者设计的AI搜索引擎",
        "url": "https://www.phind.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/phind-icon.png"
      },
      {
        "name": "iAsk AI",
        "desc": "快速准确的AI搜索引擎",
        "url": "https://iask.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/iask-ai-icon.png"
      },
      {
        "name": "Consensus",
        "desc": "AI科研学术搜索引擎",
        "url": "https://consensus.app/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/consensus-icon.png"
      },
      {
        "name": "Komo Search",
        "desc": "简洁直观的AI搜索引擎",
        "url": "https://komo.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/komo-search-icon.png"
      },
      {
        "name": "Searcholic",
        "desc": "AI驱动的电子书和文档搜索引擎",
        "url": "https://searcholic.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/searcholic-icon.png"
      },
      {
        "name": "Andi",
        "desc": "对话式人工智能搜索引擎",
        "url": "https://andisearch.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/andi-search-icon.png"
      },
      {
        "name": "Songtell",
        "desc": "AI驱动的音乐百科搜索引擎",
        "url": "https://www.songtell.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/songtell-icon.png"
      },
      {
        "name": "ThinkAny",
        "desc": "新时代的AI搜索引擎",
        "url": "https://thinkany.ai/zh?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/thinkany-icon.png"
      },
      {
        "name": "Miku",
        "desc": "快速精准的AI搜索引擎",
        "url": "https://www.hellomiku.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/miku-icon.png"
      },
      {
        "name": "Qdrant",
        "desc": "开源的向量数据库和向量相似性AI搜索引擎",
        "url": "https://qdrant.tech/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Qdrant-logo.png"
      },
      {
        "name": "Adot",
        "desc": "一个由AI驱动的 Web3 搜索引擎",
        "url": "https://www.adot.tech/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/Adot-website02.png"
      },
      {
        "name": "开搜AI",
        "desc": "面向大众的免费AI问答搜索引擎",
        "url": "https://kaisouai.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/kaisouai-icon.png"
      }
    ]
  },
  {
    categoryCode: "office",
    categoryName: "办公工具",
    list: [
      {
        "name": "包阅AI",
        "desc": "高效的AI智能阅读助手",
        "url": "https://baoyueai.com/channel?utm_id=228292",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/baoyueai-icon.png"
      },
      {
        "name": "txyz",
        "desc": "AI文献阅读和学术研究辅助平台",
        "url": "https://www.txyz.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/txyz-ai-icon.png"
      },
      {
        "name": "百度文库AI助手",
        "desc": "基于文心一言的一站式智能文档助手",
        "url": "https://wenku.baidu.com/ndlaunch/browse/chat?fr=dist_wk_aiasis&dist_source=kfpt-WD&utm_account=dist&keyword=PPT&searchFr=1&third_id=wkds_98a21f011a37f111f0855b83_400000159",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/10/baidu-wenku-ai-icon.png"
      },
      {
        "name": "小绿鲸",
        "desc": "AI英文文献阅读工具",
        "url": "https://www.xljsci.com/channelCode=sebEce",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/06/xljsci-logo-1.png"
      },
      {
        "name": "Doc2X",
        "desc": "AI文档识别、转换与翻译工具",
        "url": "https://noedgeai.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/11/Doc2X-logo.png"
      },
      {
        "name": "Acrobat AI Assistant",
        "desc": "Adobe推出的Acrobat PDF文档AI助手",
        "url": "https://www.adobe.com/acrobat/generative-ai-pdf.html?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/02/adobe-acrobat-icon.png"
      },
      {
        "name": "WPS AI",
        "desc": "WPS推出的AI办公助手，已免费开放",
        "url": "https://ai.wps.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/07/wps-ai-white-icon.png"
      },
      {
        "name": "腾讯文档智能助手",
        "desc": "腾讯推出的AI文档生成和辅助工具",
        "url": "https://docs.qq.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/qq-docs-ai-logo.png"
      },
      {
        "name": "Cubox",
        "desc": "高效的AI阅读学习助手和信息收集管理工具",
        "url": "https://cubox.pro/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/02/cubox-icon.png"
      },
      {
        "name": "Quivr",
        "desc": "开源的知识库搭建工具，构建你的第二大脑",
        "url": "https://www.quivr.app/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/02/quivr-logo.png"
      },
      {
        "name": "Coda AI",
        "desc": "在线协作平台Coda推出的AI写作和文档助手，类似于Notion AI",
        "url": "https://coda.io/product/ai?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/06/coda-icon.png"
      },
      {
        "name": "有道速读",
        "desc": "网易有道推出的AI论文和文档阅读助手",
        "url": "https://read.youdao.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/youdao-new-icon.png"
      },
      {
        "name": "腾讯问卷",
        "desc": "腾讯推出的AI生成调查问卷的免费工具",
        "url": "https://wj.qq.com/ai/generate.html?utm_source=AI&utm_medium=aibot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/02/wj-qq-icon.png"
      },
      {
        "name": "匡优AI",
        "desc": "AI出题工具，快速生成各类考试题目",
        "url": "https://ai.kyou.ltd/pc?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/ai.kyou-logo.png"
      },
      {
        "name": "通义智文",
        "desc": "基于通义大模型的AI阅读助手，可智能阅读网页、论文、图书和文档",
        "url": "https://tongyi.aliyun.com/zhiwen#/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/tongyi-aliyun-icon.png"
      },
      {
        "name": "字语智能",
        "desc": "一站式智能Office内容创作平台",
        "url": "https://getgetai.com/?from=AIGJDH",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/getgetai-icon.png"
      },
      {
        "name": "星火文档问答",
        "desc": "基于讯飞星火大模型的AI文档和知识库问答助手",
        "url": "https://chatdoc.xfyun.cn/?from=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/xinghuo-icon.png"
      },
      {
        "name": "PMAI",
        "desc": "面向产品经理的AI助手",
        "url": " https://www.pm-ai.cn/?utm_source=NoKVb4O",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/pmai-icon.png"
      },
      {
        "name": "万知",
        "desc": "零一万物推出的一站式AI文档阅读和PPT创作工作台",
        "url": "https://www.wanzhi01.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/wanzhi01-icon.png"
      },
      {
        "name": "PDF.ai",
        "desc": "AI PDF文档阅读工具，智能文档总结摘要",
        "url": "https://pdf.ai/?via=ai-bot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/pdf-ai-icon.png"
      },
      {
        "name": "司马阅",
        "desc": "AI文档阅读分析工具",
        "url": "https://smartread.cc?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/07/smartread-icon.png"
      },
      {
        "name": "知我AI",
        "desc": "智能阅读机器人，AI总结文档、网页、视频、播客等",
        "url": "https://knowme.xiaoduoai.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/knowme-ai-icon.png"
      },
      {
        "name": "星火科研助手",
        "desc": "科大讯飞联合中科院推出的AI科研文献助手",
        "url": "https://paper.iflytek.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/iflytek-paper-icon.png"
      },
      {
        "name": "印象AI",
        "desc": "印象笔记推出的AI知识和信息管理功能",
        "url": "https://www.yinxiang.com/about/yxai-yxbj",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/yinxiang-ai-icon.png"
      },
      {
        "name": "Craft AI Assistant",
        "desc": "在线文档工具Craft推出的AI文档和创作助手",
        "url": "https://www.craft.do/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/07/craft-icon.png"
      },
      {
        "name": "Humata",
        "desc": "基于GPT的AI文档分析、阅读和问答工具",
        "url": "https://www.humata.ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/humata-ai-icon.png"
      },
      {
        "name": "ChatDOC",
        "desc": "基于ChatGPT的文档阅读、提取、总结、摘要的工具",
        "url": "http://chatdoc.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/chatdoc-icon.png"
      },
      {
        "name": "PandaGPT",
        "desc": "AI文档要点总结工具",
        "url": "https://www.pandagpt.io",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/pandagpt-icon.png"
      },
      {
        "name": "Rossum.ai",
        "desc": "现代化的AI文档处理工具",
        "url": "https://rossum.ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/rossum-ai-icon.png"
      },
      {
        "name": "Super AI",
        "desc": "AI复杂文档自动识别处理转换",
        "url": "https://super.ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/super-ai-icon.png"
      }
    ]
  },
  {
    categoryCode: 'programming',
    categoryName: "AI编程",
    list: [
      {
        "name": "Trae",
        "desc": "字节跳动推出的免费AI编程工具，基于Claude模型",
        "url": "https://trae.paluai.com/trae",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/02/trae-logo.png"
      },
      {
        "name": "通义灵码",
        "desc": "阿里推出的免费AI编程工具，基于通义大模型",
        "url": "https://click.aliyun.com/m/1000399943",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/tongyi-lingma-icon-1.png"
      },
      {
        "name": "文心快码",
        "desc": "百度推出的AI编程助手，基于文心大模型",
        "url": "https://comate.baidu.com/?inviteCode=8f8or9cz",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/comate-baidu-logo.png"
      },
      {
        "name": "豆包AI编程",
        "desc": "豆包推出的AI编程新功能",
        "url": "https://ai-bot.cn/doubao-aicoding",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/doubao-icon.png"
      },
      {
        "name": "Cursor",
        "desc": "AI代码编辑器，快速进行编程和软件开发",
        "url": "https://www.cursor.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/cursor-logo.png"
      },
      {
        "name": "GitHub Copilot",
        "desc": "GitHub推出的AI编程工具",
        "url": "https://github.com/features/copilot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/github-copilot-icon.png"
      },
      {
        "name": "代码小浣熊",
        "desc": "商汤科技推出的免费AI编程助手",
        "url": "https://www.xiaohuanxiong.com/login?utm_source=blmay1",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/sensetime-raccoon-code-icon.png"
      },
      {
        "name": "Firebase Studio",
        "desc": "谷歌推出的AI编程工具，一站式开发全栈应用",
        "url": "https://ai-bot.cn/firebase-studio",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/04/Firebase-Studio-logo.png"
      },
      {
        "name": "Windsurf",
        "desc": "Codeium公司推出的AI编程工具",
        "url": "https://ai-bot.cn/windsurf",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/11/Windsurf-logo.png"
      },
      {
        "name": "Bolt.new",
        "desc": "StackBlitz 推出的全栈AI代码工具，可以看作 Artfacts、V0 和 Replit 的结合体",
        "url": "https://ai-bot.cn/bolt%E2%80%A4new",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/Bolt.new-logo.png"
      },
      {
        "name": "Replit Agent",
        "desc": "AI初创公司Replit推出的AI编程工具",
        "url": "https://ai-bot.cn/replit-agent",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/Replit-Agent-logo.png"
      },
      {
        "name": "Lovable",
        "desc": "AI编程工具，用自然对话快速构建网站和Web应用",
        "url": "https://ai-bot.cn/lovable",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/02/Lovable-logo.png"
      },
      {
        "name": "Clacky AI",
        "desc": "AI编程工具，打造L3级的Coding Studio",
        "url": "https://ai-bot.cn/clacky-ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/06/Clacky-logo.png"
      },
      {
        "name": "CodeBuddy",
        "desc": "腾讯推出的AI编程助手",
        "url": "https://ai-bot.cn/codebuddy",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/05/CodeBuddy-logo.png"
      },
      {
        "name": "CodeWhisperer",
        "desc": "亚马逊推出的免费AI编程助手",
        "url": "https://aws.amazon.com/codewhisperer",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/codewhisperer-icon.png"
      },
      {
        "name": "Junie",
        "desc": "JetBrains 推出的 AI 编程助手",
        "url": "https://ai-bot.cn/junie",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/01/Junie-logo-1.png"
      },
      {
        "name": "CodiumAI",
        "desc": "免费的AI代码测试和分析工具",
        "url": "https://www.codium.ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/codiumai-icon.png"
      },
      {
        "name": "CodeGeeX",
        "desc": "智谱AI推出的免费AI编程助手",
        "url": "https://codegeex.cn",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/codegeex-icon.png"
      },
      {
        "name": "Cody",
        "desc": "Sourcegraph推出的免费AI编程工具",
        "url": "https://about.sourcegraph.com/cody?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/sourcegraph-cody-icon.png"
      },
      {
        "name": "DevChat",
        "desc": "开源的支持多款大模型的AI编程助手",
        "url": "https://www.devchat.ai/zh?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/devchat-icon.png"
      },
      {
        "name": "Genie",
        "desc": "Cosine AI推出的AI编程助手",
        "url": "https://ai-bot.cn/genie",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/genie-logo.png"
      },
      {
        "name": "iFlyCode",
        "desc": "科大讯飞推出的智能编程助手",
        "url": "https://iflycode.xfyun.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/iflycode-icon.png"
      },
      {
        "name": "Twinny",
        "desc": "专为 VS Code 设计的AI代码补全插件",
        "url": "https://twinny.dev/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/twinny-logo.png"
      },
      {
        "name": "Project IDX",
        "desc": "谷歌推出的AI云端开发和代码编辑器",
        "url": "https://idx.dev/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/project-idx-icon.png"
      },
      {
        "name": "Sketch2Code",
        "desc": "微软AI Lab推出的将手绘草图转换成HTML代码工具",
        "url": "https://sketch2code.azurewebsites.net",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/sketch2code-icon.png"
      },
      {
        "name": "CodeFuse",
        "desc": "蚂蚁集团推出的AI代码编程助手",
        "url": "https://codefuse.alipay.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/10/codefuse-icon.png"
      },
      {
        "name": "Tabby",
        "desc": "免费开源的自托管AI编程助手",
        "url": "https://tabby.tabbyml.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/tabby-ai-icon.png"
      },
      {
        "name": "C知道",
        "desc": "CSDN推出的AI技术问答工具",
        "url": "https://so.csdn.net/chat?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/so-csdn-logo.png"
      },
      {
        "name": "驭码CodeRider",
        "desc": "极狐GitLab推出的AI编程与软件智能研发助手",
        "url": "https://coderider.gitlab.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/coderider-icon.png"
      },
      {
        "name": "Duo Chat",
        "desc": "GitLab推出的AI编程助手",
        "url": "https://about.gitlab.com/gitlab-duo/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/gitlab-duo-chat-icon.png"
      },
      {
        "name": "CodeRabbit",
        "desc": "AI驱动的代码审查平台",
        "url": "https://coderabbit.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/coderabbit-icon.png"
      },
      {
        "name": "Augment Code",
        "desc": "AI编程辅助工具，专为大型代码库设计",
        "url": "https://www.augmentcode.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/augment-code-icon.png"
      },
      {
        "name": "Devin",
        "desc": "首个全自主的AI软件工程师智能体",
        "url": "https://preview.devin.ai/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/devin-ai.png"
      },
      {
        "name": "Plandex",
        "desc": "免费开源的基于终端的AI编程引擎",
        "url": "https://plandex.ai/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/plandex-icon.png"
      },
      {
        "name": "Fitten Code",
        "desc": "非十科技推出的免费AI代码助手",
        "url": "https://code.fittentech.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/fitten-code-icon.png"
      },
      {
        "name": "BLACKBOX AI",
        "desc": "黑箱AI编程助理，快速代码生成",
        "url": "https://www.useblackbox.io/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/blackbox-ai-icon.png"
      },
      {
        "name": "Solo",
        "desc": "Mozilla推出的零编程无代码AI网站建设工具",
        "url": "https://soloist.ai/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/solo-ai-website-composer-icon.png"
      },
      {
        "name": "JetBrains AI",
        "desc": "JetBrains推出的AI编程开发助手",
        "url": "https://www.jetbrains.com/ai/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/jetbrains-ai-icon.png"
      },
      {
        "name": "CodeArts Snap",
        "desc": "华为云推出的智能编程助手",
        "url": "https://www.huaweicloud.com/product/codeartside/snap.html",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/06/codearts-snap-icon.png"
      },
      {
        "name": "AskCodi",
        "desc": "你的个人AI编程助手",
        "url": "https://www.askcodi.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/askcodi-icon.png"
      },
      {
        "name": "v0.dev",
        "desc": "AI生成前端React/UI组件，由Vercel推出",
        "url": "https://v0.dev/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/09/v0-dev-icon.png"
      },
      {
        "name": "Boxy",
        "desc": "CodeSandbox推出的AI编程助手",
        "url": "https://codesandbox.io/blog/meet-boxy-ai-coding-assistant",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/codesandbox-boxy-icon.png"
      },
      {
        "name": "Quest AI",
        "desc": "AI将设计稿生成React代码，支持JavaScript和TypeScript",
        "url": "https://www.quest.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/06/quest-ai-icon.png"
      },
      {
        "name": "天工智码Skycode",
        "desc": "AI智能编程助手，轻松生成各种代码",
        "url": "https://sky-code.singularity-ai.com/index.html#",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/skycode-icon-1.png"
      },
      {
        "name": "JamGPT",
        "desc": "AI Debug调试助手",
        "url": "https://jam.dev/jamgpt",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/jamgpt-icon.png"
      },
      {
        "name": "aiXcoder",
        "desc": "自然语言到代码的方法级代码生成，以及多行智能代码补全",
        "url": "https://www.aixcoder.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/aixcoder-icon.png"
      },
      {
        "name": "AirOps",
        "desc": "AI SQL语句生成和修改",
        "url": "https://www.airops.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/airops-icon.png"
      },
      {
        "name": "Imgcook",
        "desc": "阿里推出的免费设计稿智能生成前端代码",
        "url": "https://www.imgcook.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/imgcook-icon.png"
      },
      {
        "name": "Deco",
        "desc": "京东推出的设计稿一键生成多端代码工具",
        "url": "https://ling-deco.jd.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/deco-icon.png"
      },
      {
        "name": "Ghostwriter",
        "desc": "知名在线编程IDE Replit推出的AI编程助手",
        "url": "https://replit.com/site/ghostwriter",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/replit-icon.png"
      },
      {
        "name": "Codiga",
        "desc": "AI代码实时分析",
        "url": "https://www.codiga.io",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/codiga-icon.png"
      },
      {
        "name": "Locofy",
        "desc": "AI无代码工具将Figma、Adobe XD和Sketch设计转换成前端代码",
        "url": "https://www.locofy.ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/locofy-ai-icon.png"
      },
      {
        "name": "Fronty",
        "desc": "AI智能将图片转换成HTML和CSS代码",
        "url": "https://fronty.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/fronty-icon.png"
      },
      {
        "name": "MarsX",
        "desc": "AI无代码软件开发",
        "url": "https://www.marsx.dev",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/marsx.dev-icon.png"
      },
      {
        "name": "Tabnine",
        "desc": "AI代码自动补全编程助手",
        "url": "https://www.tabnine.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/tabnine-icon.png"
      },
      {
        "name": "Mutable AI",
        "desc": "人工智能加速软件开发",
        "url": "https://mutable.ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/mutable-ai-icon.png"
      },
      {
        "name": "Debuild",
        "desc": "低代码快速开发网页应用",
        "url": "https://debuild.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/debuild-app-icon.png"
      },
      {
        "name": "Warp",
        "desc": "21世纪的终端工具（内置AI命令搜索）",
        "url": "https://www.warp.dev",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/warp-dev-icon.png"
      },
      {
        "name": "Fig",
        "desc": "下一代命令行工具（内置AI终端命令自动补全）",
        "url": "https://fig.io",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/fig-icon.png"
      },
      {
        "name": "CodeSnippets",
        "desc": "AI代码生成、补全、分析、重构和调试",
        "url": "https://codesnippets.ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/codesnippets-icon.png"
      },
      {
        "name": "Hocoos",
        "desc": "无代码AI智能在线快速创建网站",
        "url": "https://hocoos.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/hocoos-icon.png"
      },
      {
        "name": "HTTPie AI",
        "desc": "AI API开发工具",
        "url": "https://httpie.io/ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/ed3195db-a392-4595-b559-4bd5576eab29.gif"
      },
      {
        "name": "AI Code Reviewer",
        "desc": "AI代码检查",
        "url": "https://ai-code-reviewer.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/ai-code-reviewer-icon.png"
      },
      {
        "name": "Visual Studio IntelliCode",
        "desc": "Visual Studio AI辅助开发",
        "url": "https://visualstudio.microsoft.com/zh-hans/services/intellicode",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/vs-intellicode-icon.png"
      },
      {
        "name": "HeyCLI",
        "desc": "自然语言转义为CLI命令",
        "url": "https://www.heycli.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/heycli-icon.png"
      },
      {
        "name": "Codeium",
        "desc": "免费的AI编程工具，智能生成和补全代码",
        "url": "https://www.codeium.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/codeium-icon.png"
      }
    ]
  },
  {
    categoryCode: "image",
    categoryName: "AI图像",
    list: [
      {
        "name": "吐司AI",
        "desc": "AI绘画模型社区和在线生图平台",
        "url": "https://ai-bot.cn/tusiart",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/tusiart-logo.png"
      },
      {
        "name": "绘蛙",
        "desc": "AI电商营销工具，免费生成商品图和种草文案",
        "url": "https://ihuiwa.paluai.com/aibot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/ihuiwa-icon.png"
      },
      {
        "name": "稿定AI",
        "desc": "一站式AI设计工具集，免费AI绘图、图片转AI绘画、AI抠图消除 ",
        "url": "https://www.gaoding.com/utms/68f2b6d26cdb4048adf21904798c7229",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/gaoding-design-icon.png"
      },
      {
        "name": "LiblibAI·哩布哩布AI",
        "desc": "国内领先的AI图像创作平台和模型分享社区",
        "url": "https://www.liblib.art/viphome?referralCode=yBzpZD7x",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/liblibai-icon.png"
      },
      {
        "name": "阿贝智能",
        "desc": "一站式AI绘本创作平台，副业变现必备",
        "url": "https://abeiai.com/?r=133",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/abeiai-logo.jpg"
      },
      {
        "name": "即梦",
        "desc": "抖音旗下免费AI图片创作工具",
        "url": "https://jimeng.paluai.com/ai-tool",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/jimeng-logo-1.png"
      },
      {
        "name": "Midjourney",
        "desc": "AI图像和插画生成工具",
        "url": "https://www.midjourney.com/home",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/midjourney-icon.png"
      },
      {
        "name": "Stable Diffusion",
        "desc": "StabilityAI推出的文本到图像生成AI",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/stability-ai-icon.png"
      },
      {
        "name": "Civitai",
        "desc": "免费的AI图像绘画作品和模型分享平台和社区",
        "url": "https://civitai.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/civitai-icon.png"
      },
      {
        "name": "堆友AI反应堆",
        "desc": "阿里旗下堆友推出的多风格AI绘画生成器",
        "url": "https://d.design/?from=aibot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/07/d-design-ai-icon.png"
      },
      {
        "name": "炉米Lumi",
        "desc": "字节跳动推出的AIGC图像创作平台",
        "url": "https://ai-bot.cn/lumi",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/11/lumi-logo.png"
      },
      {
        "name": "可灵AI",
        "desc": "快手推出的AI图像和视频创作平台",
        "url": "https://app.klingai.com/cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/03/klingai-logo.png"
      },
      {
        "name": "AI改图神器",
        "desc": "AI万能图片在线编辑器",
        "url": "https://img.logosc.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/img-logosc-icon.png"
      },
      {
        "name": "通义万相",
        "desc": "阿里最新推出的AI绘画创作模型",
        "url": "https://tongyi.aliyun.com/wanxiang/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/tongyi-aliyun-icon.png"
      },
      {
        "name": "秒画",
        "desc": "商汤科技推出的免费AI作画和图片生成平台",
        "url": "https://miaohua.sensetime.com/inspiration?invite_code=9yvxNm7BR",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/09/miaohua-icon.png"
      },
      {
        "name": "WHEE",
        "desc": "美图推出的AI图片和绘画创作生成平台",
        "url": "https://www.whee.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/whee-logo.png"
      },
      {
        "name": "奇域AI",
        "desc": "中式审美国风AI绘画创作平台",
        "url": "https://www.qiyuai.net/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/qiyu-ai-icon.png"
      },
      {
        "name": "触手AI绘画",
        "desc": "免费专业的AI绘画/模型/分享平台",
        "url": "https://acgnai.art/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/10/douchu-ai-icon.png"
      },
      {
        "name": "造梦日记",
        "desc": "AI一下，妙笔生画",
        "url": "https://zmrj.art/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/printidea-art-icon.png"
      },
      {
        "name": "Canva AI图像生成",
        "desc": "在线设计工具Canva推出的AI图像生成工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/canva-icon.png"
      },
      {
        "name": "Krea AI",
        "desc": "实时AI图像、视频生成和编辑平台",
        "url": "https://www.krea.ai/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/krea-ai-icon.png"
      },
      {
        "name": "Photoroom",
        "desc": "在线AI图片编辑工具",
        "url": "https://www.photoroom.com/zh?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Photoroom-logo.png"
      },
      {
        "name": "Ribbet.ai",
        "desc": "免费的多功能AI图片处理工具箱",
        "url": "https://ribbet.ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/ribbet-ai-icon.png"
      },
      {
        "name": "万相营造",
        "desc": "阿里旗下推出的多模态AI创意生成平台",
        "url": "https://agi.taobao.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/11/wanxiangyingzao-logo.png"
      },
      {
        "name": "悟空图像PhotoSir",
        "desc": "新一代专业图像处理软件，更智能、更高效、更好用",
        "url": "https://www.photosir.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/photosir-icon.png"
      },
      {
        "name": "360智图",
        "desc": "360推出的AI作图平台，支持智能抠图、智能消除、智能放大、智能配图",
        "url": "https://chacha.so.com/home?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/chacha-so-icon.png"
      },
      {
        "name": "像素蛋糕",
        "desc": "像甜科技推出的AI图像后期软件",
        "url": "https://www.pixcakeai.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/pixcakea-logo.png"
      },
      {
        "name": "remove.bg",
        "desc": "强大的AI图片背景移除工具",
        "url": "https://www.remove.bg/zh?aid=kkgjrdhppgtrhbyn&utm_campaign=affiliate+marketing&utm_medium=referral&utm_source=affiliate",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/remove-bg-icon.png"
      },
      {
        "name": "如果相机",
        "desc": "仅需1张照片，快速生成AI写真照片",
        "url": "https://ifshot.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ifshot.com/images/logo.png"
      },
      {
        "name": "ARC",
        "desc": "腾讯旗下ARC实验室推出的免费AI图片处理工具",
        "url": "https://arc.tencent.com/zh/ai-demos",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/tencent-arc-icon.png"
      },
      {
        "name": "Cutout.Pro",
        "desc": "AI在线处理图片",
        "url": "https://www.cutout.pro",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/cutout-pro-icon.png"
      },
      {
        "name": "MagicStudio",
        "desc": "高颜值AI图像处理工具",
        "url": "https://magicstudio.com/zh",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/magicstudio-icon.png"
      },
      {
        "name": "Booltool",
        "desc": "在线AI图像工具箱",
        "url": "https://booltool.boolv.tech/home",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/booltool-icon.png"
      },
      {
        "name": "Faceswapper",
        "desc": "AI在线换脸工具",
        "url": "https://faceswapper.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Faceswapper-logo.png"
      },
      {
        "name": "ClipDrop",
        "desc": "Stability.ai推出的AI图片处理系列工具",
        "url": "https://clipdrop.co",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/clipdrop-icon.png"
      },
      {
        "name": "Vmake AI",
        "desc": "AI在线图像和视频编辑平台，专为电商、设计提供服务",
        "url": "https://vmake.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Vmake-AI-logo.png"
      },
      {
        "name": "Leonardo.ai",
        "desc": "免费的AI绘画和图像生成工具和社区",
        "url": "https://leonardo.ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/leonardo-ai-icon.png"
      },
      {
        "name": "DeepSwapper",
        "desc": "免费的在线AI换脸工具，支持图片、视频多种格式",
        "url": "https://www.deepswapper.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/DeepSwapper-logo-1.png"
      },
      {
        "name": "Kacha AI",
        "desc": "专业的AI写真工具，媲美专业摄影",
        "url": "https://www.kacha.ai/zh?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/kacha-ai-logo.png"
      },
      {
        "name": "PicTech AI",
        "desc": "免费的在线图片翻译工具，支持一键抠图",
        "url": "https://www.pictech.cc/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/PicTech-AI-logo.png"
      },
      {
        "name": "Hotpot.ai",
        "desc": "AI图片图像处理和生成工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/hotpot-ai-icon.png"
      },
      {
        "name": "IconGen",
        "desc": "免费的icon图标AI生成器",
        "url": "https://www.icongen.io/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/IconGen.io-logo.png"
      },
      {
        "name": "言之画",
        "desc": "AI图像内容创作平台，由出门问问推出",
        "url": "https://paint.mobvoi.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/paint-mobvoi-icon.png"
      },
      {
        "name": "百度智能云一念",
        "desc": "基于百度文心大模型的多模态内容创作平台",
        "url": "https://yinian.cloud.baidu.com/creativity/main/workbench?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/baidu-xiling-icon.png"
      },
      {
        "name": "艾绘",
        "desc": "一键创作故事、绘画、配音，轻松创建高质量的绘本故事",
        "url": "https://www.aiyou.art/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/aiyou-art-logo.png"
      },
      {
        "name": "Graviti Diffus",
        "desc": "开箱即用的 Stable Diffusion WebUI 在线图像生成服务",
        "url": "https://www.diffus.graviti.com/?utm_source=tool&utm_medium=referral&utm_campaign=aibot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/graviti-diffus-icon.png"
      },
      {
        "name": "秘塔捉捉猫",
        "desc": "秘塔写作猫推出的AI文字到图像生成工具",
        "url": "https://ai-bot.cn/sites/1607.html",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/drawdraw-ai-icon.png"
      },
      {
        "name": "超能画布",
        "desc": "百度网盘推出的AI创意图像写真创作平台",
        "url": "https://photo.baidu.com/photasy/home?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/photasy-icon.png"
      },
      {
        "name": "Bing Image Creator",
        "desc": "微软必应推出的基于DALL·E的AI图像生成工具",
        "url": "https://www.bing.com/images/create?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/new-bing-icon.png"
      },
      {
        "name": "Adobe Firefly",
        "desc": "Adobe最新推出的AI图片生成工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/adobe-icon.png"
      },
      {
        "name": "简单AI",
        "desc": "搜狐推出的AI图片生成平台",
        "url": "https://ai.sohu.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/ai-sohu-icon.png"
      },
      {
        "name": "摩笔马良",
        "desc": "摩尔线程推出的AI图像绘画创作平台",
        "url": "https://maliang.mthreads.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/mthreads-icon.png"
      },
      {
        "name": "Exactly.ai",
        "desc": "专业的AI绘画和艺术创作平台",
        "url": "https://exactly.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/exactly-ai-icon.png"
      },
      {
        "name": "画宇宙",
        "desc": "人工智能AI作画网站",
        "url": "https://creator.nolibox.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/creator-nolibox-icon.png"
      },
      {
        "name": "6pen Art",
        "desc": "面包多团队推出的从文本描述生成绘画艺术作品",
        "url": "https://6pen.art/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/6pen-art-icon.png"
      },
      {
        "name": "创客贴AI画匠",
        "desc": "创客贴推出的AI艺术画生成工具",
        "url": "https://aiart.chuangkit.com/landingpage?utm_source=aibotQD",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/chuangkit-aiart-icon.png"
      },
      {
        "name": "Visual Electric",
        "desc": "专业的高质量AI图像创作工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/visual-electric-icon.png"
      },
      {
        "name": "360智绘",
        "desc": "360推出的AI图片和绘画生成工具",
        "url": "https://aigc.360.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/aigc-360-icon.png"
      },
      {
        "name": "网易AI创意工坊",
        "desc": "网易云课堂推出的AI作画平台，在线使用Stable Diffusion出图",
        "url": "https://ke.study.163.com/artWorks/painting?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/sd-163-study-icon.png"
      },
      {
        "name": "Imagine with Meta",
        "desc": "Meta最新推出的在线AI图像生成器",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/imagine-with-meta.png"
      },
      {
        "name": "Freepik AI Image Generator",
        "desc": "Freepik最新推出的AI图片生成工具",
        "url": "https://www.freepik.com/ai/image-generator?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/06/freepik-ai-image-generator-icon.png"
      },
      {
        "name": "Stockimg AI",
        "desc": "AI生成各种类型的图像和插画",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/stockimg-ai-icon.png"
      },
      {
        "name": "Stable Doodle",
        "desc": "StabilityAI最新推出的将手绘草图转换成精美图像的工具",
        "url": "https://clipdrop.co/stable-doodle",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/07/stable-doodle-icon.png"
      },
      {
        "name": "175FUN",
        "desc": "免费AI绘画社区，国货之光",
        "url": "https://175.fun/?refer=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/175fun-logo.png"
      },
      {
        "name": "行者AI美术",
        "desc": "AI图片生成和美术创作工具箱",
        "url": "https://xingzheai.cn/#create?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/06/xingzhe-ai-icon.png"
      },
      {
        "name": "Skybox AI",
        "desc": "AI生成和合成360°全景图像插画",
        "url": "https://skybox.blockadelabs.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/skybox-ai-icon.png"
      },
      {
        "name": "Facet",
        "desc": "AI图片修图和优化工具",
        "url": "https://facet.ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/facet-ai-icon.png"
      },
      {
        "name": "Relight",
        "desc": "ClipDrop推出的AI图像打光工具",
        "url": "https://clipdrop.co/relight",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/clipdrop-relight-icon-1.png"
      },
      {
        "name": "Upscayl",
        "desc": "免费开源的AI图片无损放大工具",
        "url": "https://www.upscayl.org",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/upscayl-icon.png"
      }
    ]
  },
  {
    categoryCode: "writing",
    categoryName: "AI写作",
    list: [
      {
        "name": "讯飞绘文",
        "desc": "免费AI写作工具，5分钟生成一篇原创稿！",
        "url": "https://turbodesk.xfyun.cn/client-pro?channelid=aitool1",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/turbodesk-logo.png"
      },
      {
        "name": "笔灵AI写作",
        "desc": "面向专业写作领域的AI写作工具",
        "url": "https://ibiling.cn/?from=ai-bot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/07/ibiling-icon.png"
      },
      {
        "name": "火山写作",
        "desc": "字节推出的免费AI写作助手（已合并至豆包）",
        "url": "https://ai-bot.cn/sites/4189.html",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/huoshan-writing-icon.png"
      },
      {
        "name": "新华妙笔",
        "desc": "新华社推出的体制内办公学习平台",
        "url": "https://miaobi.xinhuaskl.com/?channel=shuzhi",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/xinhua-miaobi-icon.png"
      },
      {
        "name": "笔灵AI小说",
        "desc": "笔灵推出的AI小说生成和创作工具",
        "url": "https://ibiling.cn/novel-workbench/?from=aibotnovel",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/biling-novel-logo.png"
      },
      {
        "name": "讯飞文书",
        "desc": "国产大模型AI公文写作工具",
        "url": "https://gw.iflydocs.com/?from=aibot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/01/gw-iflydocs-logo.png"
      },
      {
        "name": "蛙蛙写作",
        "desc": "AI小说和内容创作工具",
        "url": "https://wawawriter.com/app/?invitationCode=6lEPR2",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/wawawriter-icon.png"
      },
      {
        "name": "墨狐AI",
        "desc": "短篇小说AI写作助手，专为网文小说作者设计",
        "url": "https://inkfox-ai.com/?utm_source=navigator&utm_campaign=aibot/#/home",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/mohuai-logo-2.jpg"
      },
      {
        "name": "Paperpal",
        "desc": "英文论文写作助手",
        "url": "https://www.editage.cn/paperpal?utm_source=ai-bot&utm_medium=Banner&utm_campaign=Banner",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/paperpal-icon.png"
      },
      {
        "name": "稿易AI论文",
        "desc": "AI论文写作助手，免费生成2000字大纲",
        "url": "https://gaoyiai.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/01/gaoyiai-logo.png"
      },
      {
        "name": "千笔AI论文",
        "desc": "全网首家论文无限改稿平台",
        "url": "https://www.qianbixiezuo.com/?pic=g5DP",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/aipaperpass-icon.png"
      },
      {
        "name": "66AI论文",
        "desc": "高质量、低查重、低AIGC率的AI论文写作工具",
        "url": "https://www.66paper.cn/AI_A2E1C09",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/66aipaper-website.png"
      },
      {
        "name": "稿定AI文案",
        "desc": "小红书、公众号、短视频AI文案生成工具",
        "url": "https://www.gaoding.com/utms/cd3cc3a1cb0149d3bfc4a71b5e157098",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/gaoding-design-icon.png"
      },
      {
        "name": "秘塔写作猫",
        "desc": "AI写作，文章自成",
        "url": "https://xiezuocat.com/?s=aigj",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/xiezuocat-ai-icon.png"
      },
      {
        "name": "光速写作",
        "desc": "AI写作、PPT生成工具，单篇最长15000字",
        "url": "https://www.guangsuxie.com/static/college-write-web/home?from=AItools ",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/guangsuxie-icon.png"
      },
      {
        "name": "松果AI写作",
        "desc": "AI写作工具，支持批量生成文章",
        "url": "https://songguoai.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/02/songguoai-logo.png"
      },
      {
        "name": "讯飞写作",
        "desc": "科大讯飞推出的AI智能写作助手",
        "url": "https://huixie.iflyrec.com/list?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/huixie-iflyrec-logo1.png"
      },
      {
        "name": "小鱼AI写作",
        "desc": "一站式AI写作平台，一键生成高质量原创内容",
        "url": "https://www.xiaoyuxiezuo.com/AI_A2E1C09",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/xiaoyuAI-logo.png"
      },
      {
        "name": "万能小in",
        "desc": "AI知识助手，专业知识库的论文专家",
        "url": "https://xiaoin.com.cn/home/index?sharerUserId=1815301629231030274",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/05/xiaoin-logo-1.png"
      },
      {
        "name": "Notion AI",
        "desc": "Notion推出的AI内容创作助手",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/notion-ai-icon.png"
      },
      {
        "name": "QuillBot",
        "desc": "AI英/德语写作润色和改进工具",
        "url": "https://try.quillbot.com/6eqrqpoysmlh",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/quillbot-icon.png"
      },
      {
        "name": "FlowUs AI",
        "desc": "在线文档平台息流推出的AI创作助手，类似于Notion AI",
        "url": "https://flowus.cn/ai?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/flowus-icon.png"
      },
      {
        "name": "茅茅虫",
        "desc": "一站式AI论文写作助手",
        "url": "https://mymmc.cn/?fromId=954f8p78",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/mymmc-ai-logo.png"
      },
      {
        "name": "笔目鱼",
        "desc": "AI英文论文写作工具",
        "url": "https://www.bmysci.com/?channelCode=aibotad",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/06/bmysci-logo.png"
      },
      {
        "name": "ReadPo",
        "desc": "AI读写助手，支持内容聚合快速阅读并总结",
        "url": "https://ai-bot.cn/readpo",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/12/ReadPo-logo.png"
      },
      {
        "name": "迅捷AI写作",
        "desc": "迅捷办公团队推出的AI写作工具",
        "url": "https://www.aichat1234.com/app/?mode=aibot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/xuejieAI.png"
      },
      {
        "name": "橙篇",
        "desc": "百度推出的AI长文理解和内容创作工具",
        "url": "https://cp.baidu.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/chengpian-icon.png"
      },
      {
        "name": "深言达意",
        "desc": "免费的词句查询智能写作辅助工具，输入模糊描述即可查找词句",
        "url": "https://www.shenyandayi.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/shenyandayi-icon.png"
      },
      {
        "name": "彩云小梦",
        "desc": "彩云科技推出的智能AI故事写作工具",
        "url": "https://if.caiyunai.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/if-caiyunai-icon.png"
      },
      {
        "name": "MidReal",
        "desc": "AI互动式小说文本生成工具",
        "url": "https://midreal.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/MidReal-logo.png"
      },
      {
        "name": "Rytr",
        "desc": "AI内容生成和写作助手",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/rytr-me-icon.png"
      },
      {
        "name": "Copy.ai",
        "desc": "人工智能营销文案和内容创作工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/copy-ai-icon.png"
      },
      {
        "name": "Jasper",
        "desc": "AI文字内容创作工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/jasper-ai-icon.png"
      },
      {
        "name": "库宝AI工作助手",
        "desc": "千库网推出的多功能AI创作工具",
        "url": "https://588tool.com/?hd=1240",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/588tool-logo.png"
      },
      {
        "name": "Grammarly",
        "desc": "AI英语语法和拼写检查写作助手",
        "url": "https://www.grammarly.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/grammarly-icon.png"
      },
      {
        "name": "文状元",
        "desc": "AI公文写作助手，提供大量范文库",
        "url": "https://www.wenzhuangyuan.cn/workspace/writing-store?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/wenzhuangyuan-logo.png"
      },
      {
        "name": "晓语台",
        "desc": "智能AI写作工具，内置500+创作模板",
        "url": "https://www.xiaoyutai.com/?share_code=XYT90931478",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/xiaoyutai-icon.png"
      },
      {
        "name": "Writesonic",
        "desc": "AI写作，文案，释义工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/writesonic-icon.png"
      },
      {
        "name": "DeepL Write",
        "desc": "DeepL推出的AI驱动的写作助手",
        "url": "https://www.deepl.com/write",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/deepl-write-icon.png"
      },
      {
        "name": "Jenni",
        "desc": "AI研究文章和博客写作辅助工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/jenni-ai-icon.png"
      },
      {
        "name": "有道翻译·AI写作",
        "desc": "网易有道推出的智能写作辅助工具，支持100多种语言",
        "url": "https://fanyi.youdao.com/aiwrite?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/youdao-new-icon.png"
      },
      {
        "name": "Wordvice AI",
        "desc": "Wordvice推出的免费AI写作助手",
        "url": "https://wordvice.ai/cn?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/Wordvice-logo.jpg"
      },
      {
        "name": "AI新媒体文章",
        "desc": "夸克推出的AI写作工具",
        "url": "https://vt.quark.cn/blm/creator-773/index?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/quark-creator-logo.png"
      },
      {
        "name": "魔撰写作",
        "desc": "出门问问旗下推出的AI智能写作工具",
        "url": "https://www.moyin.com/?channelCode=AIGJJ01_20240905",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/x-moyin-icon.png"
      },
      {
        "name": "宙语Cosmos",
        "desc": "专为中文写作设计的AI智能写作助手",
        "url": "https://ailjyk.com/pc/creation/model?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/zhouyuCosmos-logo.png"
      },
      {
        "name": "灵构AI笔记",
        "desc": "在线安全的灵感收集、思路整理AI笔记工具",
        "url": "https://88lingo.com/ai?utm_id=577",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/88lingo-icon.png"
      },
      {
        "name": "有道写作",
        "desc": "网易有道出品的智能英文写作修改和润色工具",
        "url": "https://write.youdao.com/#/homepage",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/write-youdao-icon.png"
      },
      {
        "name": "写作蛙",
        "desc": "智谱AI推出的免费智能写作工具",
        "url": "https://littlefrog.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/10/littlefrog-ai-icon.png"
      },
      {
        "name": "文思助手",
        "desc": "强大的AI写作智能体，支持生成专业报告和科研论文",
        "url": "https://wensi.sodabot.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/文思助手-logo.png"
      },
      {
        "name": "WriteWise",
        "desc": "喜马拉雅推出的免费网文和小说AI写作工具",
        "url": "https://www.ximalaya.com/gatekeeper/write-wise-web?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/writewise-icon.png"
      },
      {
        "name": "百度作家平台",
        "desc": "百度免费AI小说写作工具",
        "url": "https://zuojia.baidu.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/09/baidu-zuojia-icon-1.png"
      },
      {
        "name": "爱创作",
        "desc": "ZAKER新闻推出的AI写作工具",
        "url": "https://ai.zaker.cn",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/ai-zaker-icon.png"
      },
      {
        "name": "Verse",
        "desc": "印象笔记旗下团队推出的AI写作和文档工具",
        "url": "https://verse.app.yinxiang.com/product/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/06/verse-icon.png"
      },
      {
        "name": "Moonbeam",
        "desc": "长文章AI内容创作助手",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/moonbeam-icon.png"
      },
      {
        "name": "Cohesive",
        "desc": "人工智能文案内容创作和编辑工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/cohesive-icon.png"
      },
      {
        "name": "万彩AI",
        "desc": "全能型AI内容和文案创作助手",
        "url": "https://ai.kezhan365.com/inviteCode/FwJFxy",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/ai-kezhan365-icon.png"
      },
      {
        "name": "WritingPal",
        "desc": "面向留学生的AI英文写作工具",
        "url": "https://writingpal.ai/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/writingpal-icon.png"
      },
      {
        "name": "Magic Write",
        "desc": "Canva旗下AI文案生成器",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/canva-icon.png"
      },
      {
        "name": "NovelAI",
        "desc": "AI小说故事创作工具",
        "url": "https://novelai.net/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/novel-ai-icon.png"
      },
      {
        "name": "奇妙文",
        "desc": "出门问问推出的AI写作助理",
        "url": "https://wen.mobvoi.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/wen-mobvoi-icon.png"
      },
      {
        "name": "Spell.tools",
        "desc": "高颜值AI内容营销创作工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/spell-tools-icon.png"
      },
      {
        "name": "HyperWrite",
        "desc": "AI写作助手帮助你创作内容更自信",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/hyperwriteai-icon.png"
      },
      {
        "name": "Typeface AI",
        "desc": "AI创意内容创作助手",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/typeface-ai-icon.png"
      },
      {
        "name": "悉语",
        "desc": "阿里旗下智能文案工具，一键生成电商营销文案",
        "url": "https://chuangyi.taobao.com/pages/aiCopy",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/xiyu-alibaba-icon.png"
      },
      {
        "name": "文涌Effidit",
        "desc": "腾讯AI Lab开发的智能创作助手",
        "url": "https://effidit.qq.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/effidit-icon.png"
      },
      {
        "name": "火龙果写作",
        "desc": "AI驱动的文字生产力工具",
        "url": "https://www.mypitaya.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/mypitaya-icon.png"
      },
      {
        "name": "树熊写作",
        "desc": "树熊AI推出的AI智能写作工具",
        "url": "https://ai.koalaoffice.com/ai/homePage?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/koalaoffice-logo.png"
      },
      {
        "name": "爱改写",
        "desc": "AI改写、纠错、润色辅助工具",
        "url": "https://www.aigaixie.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/aigaixie-icon.png"
      },
      {
        "name": "HeyFriday",
        "desc": "国内团队推出的智能AI写作工具",
        "url": "https://www.heyfriday.cn/home",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/heyfriday-icon.png"
      },
      {
        "name": "易撰",
        "desc": "新媒体AI内容创作助手",
        "url": "https://www.yizhuan5.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/yizhuan5-icon.png"
      },
      {
        "name": "智搜",
        "desc": "Giiso写作机器人，内容创作AI辅助工具",
        "url": "https://www.giiso.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/giiso-icon.png"
      },
      {
        "name": "创作王",
        "desc": "AI一键帮助你创作营销内容",
        "url": "https://aiapp.cc/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/aiapp-cc-icon.png"
      },
      {
        "name": "字符狂飙",
        "desc": "全方位AI文档生成工具，快速生成专业文档",
        "url": "https://vgoapp.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/wordfury-icon.png"
      },
      {
        "name": "XPaper AI",
        "desc": "晓语台旗下的论文写作辅助指导平台",
        "url": "https://www.130ai.com/?source=ugJBi0zP",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/xpaper-ai-icon.png"
      },
      {
        "name": "悟智写作",
        "desc": "人工智能驱动的自动化写作平台",
        "url": "https://www.wuz.com.cn/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/wuz-ai-icon.png"
      },
      {
        "name": "讯飞智检",
        "desc": "讯飞推出的智能写作SaaS工具，支持智能写作后的校对与合规审核",
        "url": "https://zj.xfyun.cn/exam/text",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/zj-xfyun-icon.png"
      },
      {
        "name": "5118 SEO优化精灵",
        "desc": "一键式生成高质量SEO文章，提高搜索引擎排名获得更多流量",
        "url": "https://www.5118.com/ai/articlegenius",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/5118-icon.png"
      },
      {
        "name": "ContentBot",
        "desc": "AI快速写作工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/contentbot-icon.png"
      },
      {
        "name": "Bearly",
        "desc": "AI阅读总结、写作和内容生成助手",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/bearly-ai-icon.png"
      },
      {
        "name": "快文CopyDone",
        "desc": "AIGC原创内容创作和营销文案生成",
        "url": "https://copyai.cn",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/copydone-icon.png"
      },
      {
        "name": "Peppertype.ai",
        "desc": "高质量AI内容生成",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/peppertype-ai-icon.png"
      },
      {
        "name": "Compose AI",
        "desc": "免费的Chrome浏览器自动化写作扩展",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/compose-ai-icon.png"
      },
      {
        "name": "Texta",
        "desc": "AI博客和文章一键生成",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/texta-ai-icon.png"
      },
      {
        "name": "Sudowrite",
        "desc": "AI故事写作工具，多种风格选择",
        "url": "https://www.sudowrite.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/sudowrite-icon.png"
      },
      {
        "name": "ClosersCopy",
        "desc": "AI文案写作机器人",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/closercopy-icon.png"
      },
      {
        "name": "WPS智能写作",
        "desc": "WPS旗下在线智能写作工具",
        "url": "https://ai-bot.cn/sites/33.html",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/wps-aiwrite-icon.png"
      },
      {
        "name": "Anyword",
        "desc": "AI文案写作助手和文本生成器",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/anyword-icon.png"
      },
      {
        "name": "Hypotenuse AI",
        "desc": "人工智能写作助手和文本生成器",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/hypotenuse-ai-icon.png"
      },
      {
        "name": "Smodin AI Research Paper",
        "desc": "Smodin推出的AI研究论文写作工具",
        "url": "https://smodin.io/zh-cn/%E4%BD%9C%E5%AE%B6/%E7%A0%94%E7%A9%B6%E8%AE%BA%E6%96%87",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/smodin-icon.png"
      },
      {
        "name": "ParagraphAI",
        "desc": "基于ChatGPT的AI写作应用",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/paragraph-ai-icon.png"
      },
      {
        "name": "LongShot",
        "desc": "AI长文章写作工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/longshot-ai-icon.png"
      },
      {
        "name": "Jounce",
        "desc": "无限制免费AI文案写作",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/jounce-ai-icon.png"
      },
      {
        "name": "Reword",
        "desc": "AI文章写作",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/reword-ai-icon.png"
      },
      {
        "name": "Elephas",
        "desc": "与Mac、iPhone、iPad集成的个人写作助手",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/elephas-icon.png"
      },
      {
        "name": "AISEO",
        "desc": "AI创作SEO优化友好的文案和文章",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/aiseo-ai-icon.png"
      },
      {
        "name": "PaperBetter AI",
        "desc": "AI论文写作工具，一键生成万字初稿",
        "url": "http://www.ai.paperbetter.com/?f=9",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/paperbetter-ai-icon.png"
      },
      {
        "name": "Writer",
        "desc": "企业级AI内容创作工具",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/writer-icon.png"
      },
      {
        "name": "范文喵",
        "desc": "面向大学生的AI论文写作工具",
        "url": "https://ai.wolian.chat/openmao/#/?inviteCode=1745323733465174017",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/openmao-ai-icon.png"
      },
      {
        "name": "小微智能论文",
        "desc": "人工智能论文创作辅助工具",
        "url": "http://t2unr1.checkmore.net/tb/NY6p0S?dCode=uJda4GWdSpLzU9Mi&couponCode=xiaoweilunwen",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/xiaoweiai-icon.png"
      },
      {
        "name": "笔杆论文",
        "desc": "简单高效的AI论文写作平台",
        "url": "https://write.bigan.net/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/bigan-writer-icon.png"
      }
    ]
  },
  {
    categoryCode: "video",
    categoryName: "视频剪辑",
    list: [
      {
        "name": "绘蛙AI视频",
        "desc": "绘蛙推出的AI图生视频工具",
        "url": "https://www.ihuiwa.com/workspace/ai-video/custom-action?huiwaInviteCode=EMRCAL",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/ihuiwa-icon.png"
      },
      {
        "name": "白日梦",
        "desc": "AI视频创作平台，最长可生成六分钟的视频",
        "url": "https://aibrm.paluai.com/bairimeng",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/aibrm-icon.png"
      },
      {
        "name": "讯飞绘镜",
        "desc": "科大讯飞推出的AI短视频创作平台",
        "url": "https://typemovie.art/?utm_source=nt-aibot#/dashboard",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/01/typemovie-logo-2.png"
      },
      {
        "name": "Vidu",
        "desc": "生数科技推出的AI视频生成大模型",
        "url": "https://www.vidu.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/12/Vidu-logo1.jpg"
      },
      {
        "name": "SoundView",
        "desc": "AI视频本地化工具，支持视频配音和翻译",
        "url": "https://soundviewai.com/invitation?inviteCode=H6tVloZUV&from=aibot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/12/SoundView-logo.jpg"
      },
      {
        "name": "HeyGen",
        "desc": "AI数字人视频创作平台",
        "url": "https://ai-bot.cn/heygen",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/heygen-icon.png"
      },
      {
        "name": "有言",
        "desc": "一站式AI视频创作和3D数字人生成平台",
        "url": "https://www.youyan3d.com/platform/?utm_source=zhanwaidaoliu&utm_campaign=zwj&utm_content=aigongjuji&from=aigongjuji",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/youyan-icon.png"
      },
      {
        "name": "巨日禄",
        "desc": "一站式AI动漫视频创作平台",
        "url": "https://jurilu.paluai.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/jurilu.png"
      },
      {
        "name": "可灵AI",
        "desc": "快手推出的AI视频生成工具",
        "url": "https://kling.kuaishou.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/03/klingai-logo.png"
      },
      {
        "name": "即梦AI",
        "desc": "字节跳动推出的一站式AI创作平台",
        "url": "https://jimeng.jianying.com/ai-tool/home",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/jimeng-logo-1.png"
      },
      {
        "name": "智谱清影",
        "desc": "智谱推出的AI视频生成工具",
        "url": "https://ai-bot.cn/qingying",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/chatglm-video-logo.png"
      },
      {
        "name": "Pollo AI",
        "desc": "一站式AI图像和视频创作平台",
        "url": "https://ai-bot.cn/pollo-ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/06/Pollo-AI-logo.png"
      },
      {
        "name": "创一AI",
        "desc": "AI音视频创作工具，支持AI短片、AI角色和作图配音等",
        "url": "https://www.creatifyone.com/?source=ai-bot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/05/creatifyone-logo.png"
      },
      {
        "name": "蝉镜",
        "desc": "AI数字人视频生成平台",
        "url": "https://www.chanjing.cc/refc/?type=hzBuy&id=BEB41KJUj-n9rTc5kxR5WGKv6bdmvm_rv5Qpxs0XNFc",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/chanjing-icon.png"
      },
      {
        "name": "Runway",
        "desc": "AI视频工具，绿幕抠除、视频生成、动态捕捉等功能",
        "url": "https://runwayml.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/runwayml-icon.png"
      },
      {
        "name": "海螺视频",
        "desc": "MiniMax公司推出的AI视频生成工具",
        "url": "https://ai-bot.cn/hailuoai-video",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/04/hailuoai-logo.png"
      },
      {
        "name": "腾讯混元AI视频",
        "desc": "腾讯推出的AI视频生成工具",
        "url": "https://video.hunyuan.tencent.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/12/hunyuan-video-logo.png"
      },
      {
        "name": "通义万相AI视频",
        "desc": "通义万相AI视频是阿里推出的...",
        "url": "https://ai-bot.cn/tongyi-wanxvideo",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/tongyi-aliyun-icon.png"
      },
      {
        "name": "JoyPix",
        "desc": "AI数字人创作工具，支持声音克隆",
        "url": "https://www.joypix.ai?invitation_code=ai-bot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/03/JoyPix-logo.png"
      },
      {
        "name": "Sora",
        "desc": "OpenAI推出的AI视频生成模型",
        "url": "https://openai.com/sora?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/openai-gpt-model.png"
      },
      {
        "name": "Pika",
        "desc": "Pika Labs推出的AI视频生成和编辑工具",
        "url": "https://pika.art",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/pika-icon.png"
      },
      {
        "name": "Medeo",
        "desc": "AI视频创作平台，一句话生成完整视频",
        "url": "https://ai-bot.cn/medeo",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/05/Medeo-logo.jpg"
      },
      {
        "name": "Dream Machine",
        "desc": "Luma AI推出的AI视频生成工具",
        "url": "https://lumalabs.ai/dream-machine?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/dream-machine-icon.png"
      },
      {
        "name": "KreadoAI",
        "desc": "AI数字人视频营销创作平台",
        "url": "https://www.kreadoai.com/zh?via=aibot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/03/KreadoAI-logo.png"
      },
      {
        "name": "妙播",
        "desc": "腾讯广告推出的AI直播电商解决方案",
        "url": "https://admuse.qq.com/intelligent/live/page/index.html#/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/04/intelligent-live-logo.png"
      },
      {
        "name": "即创",
        "desc": "抖音推出的一站式AI智能创作平台",
        "url": "https://aic.oceanengine.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/11/aic-oceanengine-icon.png"
      },
      {
        "name": "Hedra",
        "desc": "AI对口型视频生成工具",
        "url": "https://www.hedra.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/hedra-icon.png"
      },
      {
        "name": "Vozo",
        "desc": "多功能AI视频编辑工具",
        "url": "https://www.vozo.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/Vozo-logo.png"
      },
      {
        "name": "Viggle",
        "desc": "AI生成可控的角色动态视频的工具",
        "url": "https://viggle.ai/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/viggle-ai-icon.png"
      },
      {
        "name": "Tavus",
        "desc": "AI数字人克隆和AI视频实时对话工具",
        "url": "https://ai-bot.cn/tavus",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Tavus-logo.png"
      },
      {
        "name": "阶跃视频",
        "desc": "阶跃星辰推出的AI视频生成工具",
        "url": "https://ai-bot.cn/yuewen-videos",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/stepchat-icon.png"
      },
      {
        "name": "秒创",
        "desc": "AIGC内容创作平台",
        "url": "https://aigc.yizhentv.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/yizhentv-logo.png"
      },
      {
        "name": "元镜",
        "desc": "AI视频生成工具，支持多模态创意分镜创作服务",
        "url": "https://ai-bot.cn/yuanjing",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/02/yuanjing-logo.png"
      },
      {
        "name": "SkyReels",
        "desc": "昆仑万维推出的AI短剧创作平台",
        "url": "https://skyreels.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/skyreels-logo1.png"
      },
      {
        "name": "MOKI",
        "desc": "美图推出的AI视频短片创作平台",
        "url": "https://www.moki.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/moki-icon.png"
      },
      {
        "name": "神笔马良",
        "desc": "猫眼娱乐推出的AI影视创作生成工具",
        "url": "https://ai-bot.cn/shenbi-maoyan",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/shenbi-maoyan-logo.png"
      },
      {
        "name": "Video Ocean",
        "desc": "潞晨科技推出的多功能AI视频生成平台",
        "url": "https://ai-bot.cn/video-ocean",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/Video-Ocean-logo.png"
      },
      {
        "name": "Flow Studio",
        "desc": "FlowGPT推出的AI长视频生成工具",
        "url": "https://flowgpt.com/flow-studio?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/Flow-Studio-logo.png"
      },
      {
        "name": "Vizard",
        "desc": "将长视频转为社交短视频的AI工具",
        "url": "https://vizard.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Vizard.ai-logo.png"
      },
      {
        "name": "寻光",
        "desc": "阿里达摩院推出的全流程AI视频创作平台",
        "url": "https://xunguang.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/ali-xunguang-icon.png"
      },
      {
        "name": "Hotshot",
        "desc": "AI视频生成工具，将文本转为3秒逼真视频",
        "url": "https://hotshot.co/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Hotshot-logo.png"
      },
      {
        "name": "Viva",
        "desc": "免费的AI视频生成和图像创作平台",
        "url": "https://vivago.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/viva-ai-icon.png"
      },
      {
        "name": "Humva",
        "desc": "AI数字人生成工具，自定义创建专属数字人",
        "url": "https://humva.ai/?utm_source=aibot&utm_medium=website&utm_campaign=seo",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/01/Humva-logo.png"
      },
      {
        "name": "D-ID",
        "desc": "AI真人口播视频生成工具",
        "url": "https://www.d-id.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/d-id-icon.png"
      },
      {
        "name": "Stable Video",
        "desc": "Stability AI推出的AI视频生成工具",
        "url": "https://www.stablevideo.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/02/stable-video-icon.png"
      },
      {
        "name": "OneStory",
        "desc": "专业的AI故事生成助手",
        "url": "https://onestory.art/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/OneStory-logo.png"
      },
      {
        "name": "Noisee AI",
        "desc": "月之暗面旗下推出的AI音乐视频MV生成工具",
        "url": "https://noisee.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/noisee-ai-icon.png"
      },
      {
        "name": "腾讯智影",
        "desc": "腾讯推出的AI智能创作工具",
        "url": "https://zenvideo.qq.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/zenvideo-qq-icon.png"
      },
      {
        "name": "万兴播爆",
        "desc": "AI数字人口播视频营销工具，海量素材一键套用",
        "url": "https://virbo.wondershare.cn",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/virbo-wondershare-icon.png"
      },
      {
        "name": "Vimi",
        "desc": "商汤科技推出的可控人物视频生成AI模型",
        "url": "https://www.sensetime.com/cn/product-detail?categoryId=51134571&gioNav=1",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/vimi-icon.png"
      },
      {
        "name": "Etna",
        "desc": "七火山科技推出的AI文生视频工具\n",
        "url": "https://etna.7volcanoes.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/Etna-logo.png"
      },
      {
        "name": "艺映AI",
        "desc": "AI视频创作工具，支持文生视频、图生视频及视频转漫画功能",
        "url": "https://www.artink.art/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/artink-logo.png"
      },
      {
        "name": "LensGo",
        "desc": "AI视频创作工具，支持视频转动漫，替换3D人物",
        "url": "https://lensgo.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/LensGo-logo.png"
      },
      {
        "name": "必剪Studio",
        "desc": "B站推出的免费AI数字分身定制和视频创作工具",
        "url": "https://member.bilibili.com/york/bilibili-studio/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/bilibili-studio-logo.png"
      },
      {
        "name": "度加创作工具",
        "desc": "百度官方出品的AIGC创作平台",
        "url": "https://aigc.baidu.com/?utm_source=ai-bot-c",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/06/aigc-baidu-icon.png"
      },
      {
        "name": "WinkStudio",
        "desc": "美图推出的桌面端AI视频剪辑工具",
        "url": "https://wink.meitu.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/winkstudio-icon.png"
      },
      {
        "name": "VMagic",
        "desc": "AI视频处理平台，提供视频风格转换、换脸、照片舞蹈等功能",
        "url": "https://www.vmagic.app/zh?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/VMagic-logo.png"
      },
      {
        "name": "讯飞虚拟人",
        "desc": "科大讯飞推出的全栈式AI虚拟人应用服务平台",
        "url": "https://virtual-man.xfyun.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/virtual-man-xfyun-logo.png"
      },
      {
        "name": "飞影数字人",
        "desc": "AI数字人创作平台，支持免费定制数字人",
        "url": "https://www.flyworks.live/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/flyworks-logo.png"
      },
      {
        "name": "Video Studio",
        "desc": "在线AI视频制作工具，零编辑技能制作专业视频内容",
        "url": "https://www.vidustudio.net/zh?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/Video-Studio-logo1.png"
      },
      {
        "name": "Pixfun",
        "desc": "一站式动画故事AI视频生成平台",
        "url": "https://app.pixfun.ai/home?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/pixfun.jpg"
      },
      {
        "name": "Decohere",
        "desc": "AI视频生成平台，支持音频同步功能",
        "url": "https://www.decohere.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Decohere-logo.png"
      },
      {
        "name": "YoYo",
        "desc": "鹿影科技推出的二次元动漫视频AI创作平台",
        "url": "https://avolutionai.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/yoyo-logo.png"
      },
      {
        "name": "Opus Clip",
        "desc": "AI视频切片工具，自动从长视频中提取精彩片段",
        "url": "https://www.opus.pro/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Opus-Clip-logo.png"
      },
      {
        "name": "Filmora",
        "desc": "万兴科技推出的AI视频编辑工具",
        "url": "https://filmora.wondershare.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Filmora-logo.png"
      },
      {
        "name": "Descript",
        "desc": "AI视频编辑工具，支持通过编辑文字来剪辑音视频内容",
        "url": "https://www.descript.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/Descript-logo.png"
      },
      {
        "name": "曦灵数字人",
        "desc": "百度推出的AI数字人和视频创作平台",
        "url": "https://xiling.cloud.baidu.com/main/home?hmsr=ai%E5%B7%A5%E5%85%B7%E9%9B%86&hmpl=&hmcu=&hmkw=&hmci=",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/baidu-xiling-icon.png"
      },
      {
        "name": "开拍",
        "desc": "美图推出的AI口播视频制作工具",
        "url": "https://kaipai.meitu.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/kaipai-icon.png"
      },
      {
        "name": "Duix",
        "desc": "硅基智能推出的AI数字人生成平台",
        "url": "https://www.duix.ai/duix-app-landing-page/#/home?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/duix-icon.png"
      },
      {
        "name": "场辞",
        "desc": "新片场推出的AI视频字幕制作工具",
        "url": "https://trans.xinpianchang.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/xinpianchang-trans-logo.png"
      },
      {
        "name": "一起剪",
        "desc": "AI短视频创作平台，图文一键成片",
        "url": "https://www.yiqijian.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/yiqijian-logo1.png"
      },
      {
        "name": "Spikes Studio",
        "desc": "AI自动将长视频切片剪辑为短视频",
        "url": "https://spikes.studio/?ref=uS3c5lzVrr",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/spikes-studio-icon.png"
      },
      {
        "name": "Google Vids",
        "desc": "谷歌推出的AI视频创作工具",
        "url": "https://workspace.google.com/products/vids/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/google-vids-icon.png"
      },
      {
        "name": "DomoAI",
        "desc": "一键将照片和视频动漫化的AI工具",
        "url": "https://domoai.app/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/12/domoai-icon.png"
      },
      {
        "name": "Gatekeep",
        "desc": "AI教学视频生成工具，可生成数学物理问题解释视频",
        "url": "https://gatekeep.ai/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/gatekeep-ai-icon.png"
      },
      {
        "name": "Morph Studio",
        "desc": "高质量的AI文本到视频生成工具",
        "url": "https://www.morphstudio.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/01/morph-studio-icon.png"
      },
      {
        "name": "Haiper",
        "desc": "AI视频生成和重绘工具，支持文本/图像转视频",
        "url": "https://haiper.ai/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/haiper-ai-icon.png"
      },
      {
        "name": "Showrunner",
        "desc": "AI动画视频剧集生成工具",
        "url": "https://www.showrunner.xyz/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/showrunner-icon.png"
      },
      {
        "name": "即构数智人",
        "desc": "即构科技推出的AI数字人创作平台",
        "url": "https://aigc.zego.im/#/MyHome?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/zego-icon.png"
      },
      {
        "name": "快剪辑",
        "desc": "360旗下的AI视频剪辑工具，AI成片、AI数字人、智能添加字幕、去水印等",
        "url": "https://www.kuaijianji.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/06/kuaijianji-icon.png"
      },
      {
        "name": "闪剪",
        "desc": "AI数字人短视频创作工具",
        "url": "https://shanjian.tv/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/shanjian-icon.png"
      },
      {
        "name": "Wonder Studio",
        "desc": "AI自动为CG角色制作动画、打光并将其合成到真人场景中",
        "url": "https://wonderdynamics.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/wonder-dynamics-icon.png"
      },
      {
        "name": "Magicam",
        "desc": "实时的AI直播/视频换脸工具",
        "url": "https://magicam.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/magicam-icon.png"
      },
      {
        "name": "LTX Studio",
        "desc": "AI电影制作和视频短片生成平台",
        "url": "https://ltx.studio/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/02/ltx-studio-logo.png"
      },
      {
        "name": "Clipfly",
        "desc": "一站式AI长视频制作和编辑平台",
        "url": "https://www.clipfly.ai/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/03/clipfly-ai-icon.png"
      },
      {
        "name": "Captions",
        "desc": "AI驱动的视频剪辑和制作平台",
        "url": "https://www.captions.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/captions-ai-icon.png"
      },
      {
        "name": "Capsule",
        "desc": "AI驱动的在线视频剪辑工具，个人和小团队免费",
        "url": "https://capsule.video/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/09/capsule-video-icon.png"
      },
      {
        "name": "GoEnhance",
        "desc": "AI视频风格转换和画质增强工具",
        "url": "https://www.goenhance.ai/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/goenhance-icon.png"
      },
      {
        "name": "InVideo AI",
        "desc": "人工智能视频创作和剪辑工具",
        "url": "https://invideo.io/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/invideo-icon.png"
      },
      {
        "name": "Unscreen",
        "desc": "AI智能视频背景移除工具",
        "url": "https://www.unscreen.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/unscreen-icon.png"
      },
      {
        "name": "EbSynth",
        "desc": "AI将真人视频转化为油画风动画",
        "url": "https://ebsynth.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/ebsynth-icon.png"
      },
      {
        "name": "Artflow",
        "desc": "AI创建生成视频动画",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/artflow-ai-icon.png"
      },
      {
        "name": "Kaiber",
        "desc": "图片文字转视频的AI引擎",
        "url": "",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/kaiber-ai-icon.png"
      },
      {
        "name": "Typeframes",
        "desc": "AI快速生成高质量的产品介绍视频",
        "url": "https://www.typeframes.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/02/typeframes-icon.png"
      },
      {
        "name": "DreamFace",
        "desc": "让图片动起来的AI工具",
        "url": "https://dreamfaceapp.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/dreamface-icon.png"
      },
      {
        "name": "Mootion",
        "desc": "AI原生3D动画创作平台",
        "url": "https://mootion.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/02/mootion-ai-icon.png"
      },
      {
        "name": "PixVerse",
        "desc": "爱诗科技推出的AI视频生成工具",
        "url": "https://ai-bot.cn/pixverse-ai-video-generator",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/PixVerse-logo.png"
      },
      {
        "name": "来画",
        "desc": "动画和数字人智能生成平台",
        "url": "https://www.laihua.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/laihua-icon.png"
      },
      {
        "name": "奇妙元",
        "desc": "AI数字人视频生成平台，由出门问问推出",
        "url": "https://weta365.com/conduct",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/weta365-icon.png"
      },
      {
        "name": "绘影字幕",
        "desc": "一键智能在线自动为视频加字幕",
        "url": "https://huiyingzimu.com/?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/huiyingzimu-icon.png"
      }
    ]
  },
  {
    categoryCode: "efficiency",
    categoryName: "效率提升",
    list: [
      {
        "name": "飞书多维表格",
        "desc": "表格形态的 AI 工作流搭建工具",
        "url": "https://www.feishu.cn/paid/ai-register?utm_from=dlz_aibot",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/03/feishu-ai-register-logo.png"
      },
      {
        "name": "TinyWow",
        "desc": "免费在线AI工具箱",
        "url": "https://tinywow.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/tinywow-icon.png"
      },
      {
        "name": "ima.copilot",
        "desc": "腾讯推出的AI智能工作台产品，基于混元大模型",
        "url": "https://ima.qq.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/ima-logo.png"
      },
      {
        "name": "飞书知识问答",
        "desc": "飞书智能办公推出的AI知识库工具",
        "url": "https://ai-bot.cn/ask-feishu",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/03/ask-feishu-logo.png"
      },
      {
        "name": "Monica",
        "desc": "全能AI助手，提供聊天、搜索、写作、翻译等多功能服务",
        "url": "https://monica.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/monica-icon.png"
      },
      {
        "name": "WPS灵犀",
        "desc": "WPS推出的AI办公助手，支持PPT生成、AI写作",
        "url": "https://lingxi.wps.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/08/copilot-wps-logo.jpg"
      },
      {
        "name": "Glif",
        "desc": "无代码的AI小工具构建平台",
        "url": "https://glif.app/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/glif-app-icon.png"
      },
      {
        "name": "奇觅",
        "desc": "美图推出的游戏广告AI制作与投放平台",
        "url": "https://qimi.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/qimi-icon.png"
      },
      {
        "name": "云一朵",
        "desc": "百度网盘最新推出的智能助理",
        "url": "https://pan.baidu.com/aipan/welcome",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/08/baidu-aipan-icon.png"
      },
      {
        "name": "苏打办公",
        "desc": "360公司推出的一站式AI办公工具",
        "url": "https://bangong.360.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/suda-bangong-logo.png"
      },
      {
        "name": "Tome",
        "desc": "AI销售助手",
        "url": "https://tome.app/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2025/05/Tome-logo.png"
      },
      {
        "name": "Hoarder",
        "desc": "开源的基于AI的书签和个人知识库管理工具",
        "url": "https://hoarder.app/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/hoarder-app-icon.png"
      },
      {
        "name": "通义晓蜜",
        "desc": "阿里推出的企业智能服务解决方案",
        "url": "https://tongyi.aliyun.com/xiaomi?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/tongyi-icon.png"
      },
      {
        "name": "奇妙问",
        "desc": "企业AI数字员工生成平台",
        "url": "https://aiask365.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/aiask365.com_.png"
      },
      {
        "name": "NotebookLM",
        "desc": "谷歌推出的AI笔记应用，5分钟生成一段对话播客",
        "url": "https://notebooklm.google/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/09/NotebookLM-logo.png"
      },
      {
        "name": "影刀AI Power",
        "desc": "面向企业的无代码AI开发和集成平台",
        "url": "https://www.yingdao.com/ai-power/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/04/yingdao-ai-power-logo.png"
      },
      {
        "name": "通答AI",
        "desc": "企业AI数字员工生成平台",
        "url": "https://www.tongdaai.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/06/tongda-ai-icon.png"
      },
      {
        "name": "司马诸葛",
        "desc": "企业级AI数字员工平台",
        "url": "https://smartchoose.cn/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/smartchoose-logo.png"
      },
      {
        "name": "靠谱AI",
        "desc": "无代码AI机器人创建平台",
        "url": "https://www.kaopuai.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/05/kaopuai-icon.png"
      },
      {
        "name": "Einstein Copilot",
        "desc": "Salesforce推出的CRM系统AI对话助手",
        "url": "https://www.salesforce.com/einsteincopilot?ref=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/02/einstein-copilot-icon.png"
      },
      {
        "name": "Zapier AI",
        "desc": "Zapier推出的AI自动化集成功能",
        "url": "https://zapier.com/ai?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/05/zapier-icon.png"
      },
      {
        "name": "怪兽AI知识库",
        "desc": "企业知识库大模型 + 智能AI问答机器人",
        "url": "https://www.guaishouai.net/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/07/guaishouai-net-logo.png"
      },
      {
        "name": "熊猫办公",
        "desc": "AI办公服务平台，提供PPT模板、Excel模板、Word模板等资源",
        "url": "https://www.tukuppt.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/tukuppt-logo.png"
      },
      {
        "name": "小易AI",
        "desc": "易企秀推出的AI办公工具",
        "url": "https://ai.eqxiu.com/?utm_source=aiduck.netlify.app",
        "icon": "https://ai-bot.cn/wp-content/uploads/2024/10/xiaoyiAI-logo.png"
      },
      {
        "name": "Merlin",
        "desc": "基于ChatGPT的Chrome浏览器扩展，浏览任意网页时利用GPT",
        "url": "https://merlin.foyer.work",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/merlin-icon.png"
      },
      {
        "name": "Raycast AI",
        "desc": "Raycast推出的Mac AI助手，智能写作、编程、回答问题等",
        "url": "https://www.raycast.com/ai",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/04/raycast-icon.png"
      },
      {
        "name": "Timely",
        "desc": "AI时间管理跟踪软件",
        "url": "https://timelyapp.com",
        "icon": "https://ai-bot.cn/wp-content/uploads/2023/03/timely-app-icon.png"
      }
    ]
  }
]

export const categoryList: ICategoryType[] = aiNavData.map((item) => {
  return {
    categoryCode: item.categoryCode,
    categoryName: item.categoryName
  }
})
