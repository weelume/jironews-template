import type {TemplateLocale} from '../../types';
export type Bilingual=Record<TemplateLocale,string>;
export interface Article {id:string;title:Bilingual;category:string;group:string;date:string;image:string;body:Record<TemplateLocale,string[]>}
export const categories=[
  {
    "id": "parenting",
    "name": {
      "zh": "亲子",
      "en": "Parenting"
    },
    "image": "/templates/jironews/images/photo-1618005182384-a83a8bd57fbe.jpg"
  },
  {
    "id": "business",
    "name": {
      "zh": "商业",
      "en": "Business"
    },
    "image": "/templates/jironews/images/photo-1634017839464-5c339ebe3cb4.jpg"
  },
  {
    "id": "finance",
    "name": {
      "zh": "财经",
      "en": "Finance"
    },
    "image": "/templates/jironews/images/photo-1633167606207-d840b5070fc2.jpg"
  },
  {
    "id": "exercise",
    "name": {
      "zh": "运动",
      "en": "Exercise"
    },
    "image": "/templates/jironews/images/photo-1635070041078-e363dbe005cb.jpg"
  },
  {
    "id": "travel",
    "name": {
      "zh": "旅行",
      "en": "Travel"
    },
    "image": "/templates/jironews/images/photo-1618005198919-d3d4b5a92ead.jpg"
  },
  {
    "id": "beauty",
    "name": {
      "zh": "美妆",
      "en": "Beauty"
    },
    "image": "/templates/jironews/images/photo-1620641788421-7a1c342ea42e.jpg"
  },
  {
    "id": "sports",
    "name": {
      "zh": "体育",
      "en": "Sports"
    },
    "image": "/templates/jironews/images/photo-1600585154340-be6161a56a0c.jpg"
  },
  {
    "id": "hobbies",
    "name": {
      "zh": "爱好",
      "en": "Hobbies"
    },
    "image": "/templates/jironews/images/photo-1518531933037-91b2f5f229cc.jpg"
  },
  {
    "id": "gaming",
    "name": {
      "zh": "游戏",
      "en": "Gaming"
    },
    "image": "/templates/jironews/images/photo-1550745165-9bc0b252726f.jpg"
  },
  {
    "id": "automotive",
    "name": {
      "zh": "汽车",
      "en": "Automotive"
    },
    "image": "/templates/jironews/images/photo-1503376780353-7e6692767b70.jpg"
  },
  {
    "id": "science",
    "name": {
      "zh": "科学",
      "en": "Science"
    },
    "image": "/templates/jironews/images/photo-1572635196237-14b3f281503f.jpg"
  },
  {
    "id": "work-life",
    "name": {
      "zh": "职场",
      "en": "Work Life"
    },
    "image": "/templates/jironews/images/photo-1634017839464-5c339ebe3cb4.jpg"
  },
  {
    "id": "entertainment",
    "name": {
      "zh": "娱乐",
      "en": "Entertainment"
    },
    "image": "/templates/jironews/images/photo-1550745165-9bc0b252726f.jpg"
  },
  {
    "id": "photography",
    "name": {
      "zh": "摄影",
      "en": "Photography"
    },
    "image": "/templates/jironews/images/photo-1579783900882-c0d3dad7b119.jpg"
  },
  {
    "id": "technology",
    "name": {
      "zh": "科技",
      "en": "Technology"
    },
    "image": "/templates/jironews/images/photo-1618005182384-a83a8bd57fbe.jpg"
  },
  {
    "id": "lifestyle",
    "name": {
      "zh": "生活",
      "en": "Lifestyle"
    },
    "image": "/templates/jironews/images/photo-1586023492125-27b2c045efd7.jpg"
  }
];
export const articles:Article[]=[
  {
    "id": "slide-retro-fashion",
    "title": {
      "zh": "复古时尚如何走进当代生活",
      "en": "Rediscovering Retro Fashion Trends for the Modern Era"
    },
    "category": "lifestyle",
    "group": "featured",
    "date": "FRIDAY, FEBRUARY 2, 2024",
    "image": "/templates/jironews/images/photo-1509631179647-0177331693ae.jpg",
    "body": {
      "zh": [
        "从复古时尚如何走进当代生活出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores rediscovering retro fashion trends for the modern era. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "slide-urban-architecture",
    "title": {
      "zh": "可持续巨型城市的建筑愿景",
      "en": "Architectural Visions: Designing Sustainable Megacities of Tomorrow"
    },
    "category": "business",
    "group": "featured",
    "date": "SUNDAY, FEBRUARY 4, 2024",
    "image": "/templates/jironews/images/photo-1486406146926-c627a92ad1ab.jpg",
    "body": {
      "zh": [
        "从可持续巨型城市的建筑愿景出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores architectural visions: designing sustainable megacities of tomorrow. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "slide-quantum-tech",
    "title": {
      "zh": "类脑芯片正在改变人工智能",
      "en": "Neuromorphic Silicon: The Microchip Revolution Transforming AI"
    },
    "category": "technology",
    "group": "featured",
    "date": "TUESDAY, FEBRUARY 6, 2024",
    "image": "/templates/jironews/images/photo-1518770660439-4636190af475.jpg",
    "body": {
      "zh": [
        "从类脑芯片正在改变人工智能出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores neuromorphic silicon: the microchip revolution transforming ai. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "slide-heritage-culinary",
    "title": {
      "zh": "古老都城里的地道饮食文化",
      "en": "Exploring Authentic Culinary Delights Across Ancient Capitals"
    },
    "category": "travel",
    "group": "featured",
    "date": "THURSDAY, FEBRUARY 8, 2024",
    "image": "/templates/jironews/images/photo-1555396273-367ea4eb4db5.jpg",
    "body": {
      "zh": [
        "从古老都城里的地道饮食文化出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores exploring authentic culinary delights across ancient capitals. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "grid-1",
    "title": {
      "zh": "地区决赛加时赛中的精准传球",
      "en": "Precision Passing Playbook Seals Overtime Victory in Regional Finals"
    },
    "category": "sports",
    "group": "curated",
    "date": "OCT 04, 2026",
    "image": "/templates/jironews/images/photo-1508098682722-e99c43a406b2.jpg",
    "body": {
      "zh": [
        "从地区决赛加时赛中的精准传球出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores precision passing playbook seals overtime victory in regional finals. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "grid-2",
    "title": {
      "zh": "从欧洲微型农场到餐桌的新风潮",
      "en": "Heritage Micro-Harvests and the Farm-to-Bistronomy Movement Across Europe"
    },
    "category": "travel",
    "group": "curated",
    "date": "OCT 03, 2026",
    "image": "/templates/jironews/images/photo-1556910103-1c02745aae4d.jpg",
    "body": {
      "zh": [
        "从从欧洲微型农场到餐桌的新风潮出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores heritage micro-harvests and the farm-to-bistronomy movement across europe. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "grid-3",
    "title": {
      "zh": "创业团队如何借助协作加速成长",
      "en": "Early-Stage Founders Leverage Decentralized Workflows to Scale Operations"
    },
    "category": "business",
    "group": "curated",
    "date": "OCT 02, 2026",
    "image": "/templates/jironews/images/photo-1600880292203-757bb62b4baf.jpg",
    "body": {
      "zh": [
        "从创业团队如何借助协作加速成长出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores early-stage founders leverage decentralized workflows to scale operations. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "grid-4",
    "title": {
      "zh": "运动生物力学助力马拉松突破",
      "en": "Adaptive Biomechanics Pave the Way for Record-Breaking Marathon Splits"
    },
    "category": "exercise",
    "group": "curated",
    "date": "OCT 01, 2026",
    "image": "/templates/jironews/images/photo-1476480862126-209bfaa8edc8.jpg",
    "body": {
      "zh": [
        "从运动生物力学助力马拉松突破出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores adaptive biomechanics pave the way for record-breaking marathon splits. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "editorial-8",
    "title": {
      "zh": "跨洲基础设施重新绘制供应链",
      "en": "Transcontinental Infrastructure Consortium Redraws Modern Supply Routes"
    },
    "category": "business",
    "group": "editorial",
    "date": "OCT 04, 2026",
    "image": "/templates/jironews/images/photo-1573496359142-b8d87734a5a2.jpg",
    "body": {
      "zh": [
        "从跨洲基础设施重新绘制供应链出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores transcontinental infrastructure consortium redraws modern supply routes. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "dispatch-1",
    "title": {
      "zh": "设计工作室带来新的创意效率",
      "en": "Boutique Design Collectives Outpace Legacy Agencies in Creative Output"
    },
    "category": "business",
    "group": "editorial",
    "date": "OCT 03, 2026",
    "image": "/templates/jironews/images/photo-1556761175-5973dc0f32e7.jpg",
    "body": {
      "zh": [
        "从设计工作室带来新的创意效率出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores boutique design collectives outpace legacy agencies in creative output. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "dispatch-2",
    "title": {
      "zh": "跨境流动性迎来更稳定的预期",
      "en": "Central Banking Reserve Forums Signal Stable Cross-Border Liquidities"
    },
    "category": "business",
    "group": "editorial",
    "date": "OCT 02, 2026",
    "image": "/templates/jironews/images/photo-1573497019940-1c28c88b4f3e.jpg",
    "body": {
      "zh": [
        "从跨境流动性迎来更稳定的预期出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores central banking reserve forums signal stable cross-border liquidities. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "editorial-11",
    "title": {
      "zh": "先锋服饰中的色彩复兴",
      "en": "Neo-Brutalist Color Theory and the Renaissance of Avant-Garde Garments"
    },
    "category": "lifestyle",
    "group": "editorial",
    "date": "OCT 03, 2026",
    "image": "/templates/jironews/images/photo-1509631179647-0177331693ae.jpg",
    "body": {
      "zh": [
        "从先锋服饰中的色彩复兴出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores neo-brutalist color theory and the renaissance of avant-garde garments. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "culture-1",
    "title": {
      "zh": "循环面料推动零废弃时装",
      "en": "Circular Fabric Innovations Usher Zero-Waste Runways into Milan"
    },
    "category": "lifestyle",
    "group": "editorial",
    "date": "OCT 02, 2026",
    "image": "/templates/jironews/images/photo-1490481651871-ab68de25d43d.jpg",
    "body": {
      "zh": [
        "从循环面料推动零废弃时装出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores circular fabric innovations usher zero-waste runways into milan. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "culture-2",
    "title": {
      "zh": "独立电影中的实景特效艺术",
      "en": "International Film Festivals Champion Independent Practical FX Directors"
    },
    "category": "lifestyle",
    "group": "editorial",
    "date": "OCT 01, 2026",
    "image": "/templates/jironews/images/photo-1469488865564-c2de10f69f96.jpg",
    "body": {
      "zh": [
        "从独立电影中的实景特效艺术出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores international film festivals champion independent practical fx directors. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "editorial-14",
    "title": {
      "zh": "光学神经互联与行星模拟",
      "en": "Optical Neural Interconnects Achieve Sub-Millisecond Planetary Simulation"
    },
    "category": "technology",
    "group": "editorial",
    "date": "OCT 04, 2026",
    "image": "/templates/jironews/images/photo-1618005182384-a83a8bd57fbe.jpg",
    "body": {
      "zh": [
        "从光学神经互联与行星模拟出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores optical neural interconnects achieve sub-millisecond planetary simulation. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "tech-1",
    "title": {
      "zh": "液冷计算集群解锁气候模型",
      "en": "Liquid-Cooled Cryogenic Clusters Unlock Unprecedented Climate Models"
    },
    "category": "technology",
    "group": "editorial",
    "date": "OCT 03, 2026",
    "image": "/templates/jironews/images/photo-1558494949-ef010cbdcc31.jpg",
    "body": {
      "zh": [
        "从液冷计算集群解锁气候模型出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores liquid-cooled cryogenic clusters unlock unprecedented climate models. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "tech-2",
    "title": {
      "zh": "为偏远数据中心提供清洁能源",
      "en": "Next-Generation Solid-State Microgrids Power Remote Clean Data Hubs"
    },
    "category": "technology",
    "group": "editorial",
    "date": "OCT 02, 2026",
    "image": "/templates/jironews/images/photo-1522071820081-009f0129c71c.jpg",
    "body": {
      "zh": [
        "从为偏远数据中心提供清洁能源出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores next-generation solid-state microgrids power remote clean data hubs. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "loop-1",
    "title": {
      "zh": "移民危机中的全球责任",
      "en": "Migration crisis highlights global responsibility gaps"
    },
    "category": "parenting",
    "group": "latest",
    "date": "July 22, 2025",
    "image": "/templates/jironews/images/photo-1488521787991-ed7bbaae773c.jpg",
    "body": {
      "zh": [
        "从移民危机中的全球责任出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores migration crisis highlights global responsibility gaps. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "loop-2",
    "title": {
      "zh": "气候峰会受到全球关注",
      "en": "Climate summit draws worldwide political attention"
    },
    "category": "science",
    "group": "latest",
    "date": "July 22, 2025",
    "image": "/templates/jironews/images/photo-1589656966895-2f33e7653819.jpg",
    "body": {
      "zh": [
        "从气候峰会受到全球关注出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores climate summit draws worldwide political attention. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "loop-3",
    "title": {
      "zh": "文化复兴重新连接社区",
      "en": "Revival movement sparks cultural renaissance again"
    },
    "category": "entertainment",
    "group": "latest",
    "date": "July 21, 2025",
    "image": "/templates/jironews/images/photo-1517841905240-472988babdf9.jpg",
    "body": {
      "zh": [
        "从文化复兴重新连接社区出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores revival movement sparks cultural renaissance again. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "loop-4",
    "title": {
      "zh": "深海热泉的新发现",
      "en": "Deep sea hydrothermal discoveries amaze marine biologists"
    },
    "category": "science",
    "group": "latest",
    "date": "July 20, 2025",
    "image": "/templates/jironews/images/photo-1682687220063-4742bd7fd538.jpg",
    "body": {
      "zh": [
        "从深海热泉的新发现出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores deep sea hydrothermal discoveries amaze marine biologists. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "loop-5",
    "title": {
      "zh": "轨道太阳能与清洁推进技术",
      "en": "Solar orbital deployment confirms clean propulsion breakthrough"
    },
    "category": "technology",
    "group": "latest",
    "date": "July 19, 2025",
    "image": "/templates/jironews/images/photo-1451187580459-43490279c0fa.jpg",
    "body": {
      "zh": [
        "从轨道太阳能与清洁推进技术出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores solar orbital deployment confirms clean propulsion breakthrough. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  },
  {
    "id": "loop-6",
    "title": {
      "zh": "恢复梯田应对干旱挑战",
      "en": "Highland agricultural terrace systems revived for drought resilience"
    },
    "category": "travel",
    "group": "latest",
    "date": "July 18, 2025",
    "image": "/templates/jironews/images/photo-1506744038136-46273834b3fb.jpg",
    "body": {
      "zh": [
        "从恢复梯田应对干旱挑战出发，我们关注变化如何影响普通人的生活。这是一篇用于展示新闻排版与阅读体验的示例报道，人物、结论及统计不作为真实新闻发布。",
        "理解一则新闻，需要把事件放回它发生的背景。技术、社区与公共选择相互作用，真正值得追踪的是那些持续发生的改变。我们通过观察问题、比较不同观点，邀请读者形成自己的判断。",
        "现场的细节往往比宏大的叙事更有解释力。从参与者的日常经验到长期规划，新的路径需要被讨论、检验和修正。开放的交流与透明的信息，是理解复杂世界的起点。",
        "故事并不会在这里结束。随着新的资料出现，观点也应接受检验。保持好奇，辨别事实与评论，关注每一次改变背后的真实生活。"
      ],
      "en": [
        "This demonstration feature explores highland agricultural terrace systems revived for drought resilience. It illustrates the reading experience of an editorial publication. People, conclusions and figures are sample content rather than verified reporting.",
        "To understand a changing world, we look beyond the headline. Technology, communities and public choices intersect in everyday decisions. Following these connections helps readers ask better questions and consider different perspectives.",
        "Details from daily life often reveal more than a sweeping narrative. From practical experience to long-term planning, new ideas need discussion, testing and revision. Open conversation and transparent information make complex stories easier to understand.",
        "The story remains open. As new evidence emerges, interpretations should be examined again. Stay curious, distinguish facts from opinion, and keep the people behind the headlines in view."
      ]
    }
  }
];
export const editorial=[
  {
    "id": "editorial-perspectives",
    "title": {
      "zh": "趋势观察",
      "en": "Trending Dispatches"
    },
    "featured": "editorial-8",
    "compact": [
      "dispatch-1",
      "dispatch-2"
    ]
  },
  {
    "id": "culture-design",
    "title": {
      "zh": "文化与美学",
      "en": "Culture & Aesthetics"
    },
    "featured": "editorial-11",
    "compact": [
      "culture-1",
      "culture-2"
    ]
  },
  {
    "id": "frontiers-technology",
    "title": {
      "zh": "科技与发现",
      "en": "Frontiers & Discovery"
    },
    "featured": "editorial-14",
    "compact": [
      "tech-1",
      "tech-2"
    ]
  }
];
export const team=[
  {
    "id": "team-1",
    "name": "Ethan Collins",
    "role": {
      "zh": "资深撰稿人",
      "en": "Senior Writer"
    },
    "image": "/templates/jironews/images/photo-1534528741775-53994a69daeb.jpg"
  },
  {
    "id": "team-2",
    "name": "Noah Wright",
    "role": {
      "zh": "作者",
      "en": "Author"
    },
    "image": "/templates/jironews/images/photo-1507003211169-0a1dd7228f2d.jpg"
  },
  {
    "id": "team-3",
    "name": "Lucas Harper",
    "role": {
      "zh": "总编辑",
      "en": "Editor-in-Chief"
    },
    "image": "/templates/jironews/images/photo-1500648767791-00dcc994a43e.jpg"
  },
  {
    "id": "team-4",
    "name": "Henry Adams",
    "role": {
      "zh": "内容编辑",
      "en": "Content Writer"
    },
    "image": "/templates/jironews/images/photo-1573496359142-b8d87734a5a2.jpg"
  }
];
export const cubeFaces=[
  {
    "id": "front",
    "angle": 0,
    "image": "/templates/jironews/images/photo-1486406146926-c627a92ad1ab.jpg",
    "label": {
      "zh": "世界",
      "en": "World"
    }
  },
  {
    "id": "top",
    "angle": 90,
    "image": "/templates/jironews/images/photo-1518770660439-4636190af475.jpg",
    "label": {
      "zh": "科技",
      "en": "Technology"
    }
  },
  {
    "id": "back",
    "angle": 180,
    "image": "/templates/jironews/images/photo-1461896836934-ffe607ba8211.jpg",
    "label": {
      "zh": "体育",
      "en": "Sports"
    }
  },
  {
    "id": "bottom",
    "angle": 270,
    "image": "/templates/jironews/images/photo-1611974789855-9c2a0a7236a3.jpg",
    "label": {
      "zh": "商业",
      "en": "Business"
    }
  },
  {
    "id": "right",
    "angle": 90,
    "image": "/templates/jironews/images/photo-1513694203232-719a280e022f.jpg",
    "label": {
      "zh": "文化",
      "en": "Culture"
    }
  },
  {
    "id": "left",
    "angle": -90,
    "image": "/templates/jironews/images/photo-1507679799987-c73779587ccf.jpg",
    "label": {
      "zh": "设计",
      "en": "Design"
    }
  }
];
export const podcasts=[
  {
    "id": "top-stories",
    "title": {
      "zh": "今日头条：理解不断变化的世界",
      "en": "Today's Top Stories: What Matters Now"
    },
    "image": "/templates/jironews/images/photo-1590602847861-f357a9332bbc.jpg",
    "duration": {"zh":"15 分钟","en":"15 MIN"}
  },
  {
    "id": "global-events",
    "title": {
      "zh": "全球事件如何塑造我们的明天",
      "en": "How Global Events Shape Our Tomorrow"
    },
    "image": "/templates/jironews/images/photo-1585829365295-ab7cd400c167.jpg",
    "duration": {"zh":"全球视野","en":"GLOBAL PERSPECTIVE"}
  },
  {
    "id": "real-people",
    "title": {
      "zh": "真实的人 真实的故事 更明亮的明天",
      "en": "Real People. Real Stories. A Brighter Tomorrow."
    },
    "image": "/templates/jironews/images/photo-1598488035139-bdbb2231ce04.jpg",
    "duration": {"zh":"值得倾听的声音","en":"VOICES THAT MATTER"}
  }
];

export const impactMetrics=[
 {id:'readers',title:{zh:'每月超过百万读者',en:'1M+ Readers Every Month'},body:{zh:'好奇的心灵在这里相遇，通过新闻、深度分析与多元视角，一起理解世界。',en:'Millions of curious minds trust us for accurate news, in-depth analysis and diverse perspectives from around the world.'},left:'photo-1585829365295-ab7cd400c167'},
 {id:'categories',title:{zh:'关注五十余种新闻视角',en:'50+ News Categories Covered'},body:{zh:'从全球政治与商业，到科技、体育、文化和生活，关注每一个正在改变世界的故事。',en:'From global politics and business to technology, sports, entertainment and lifestyle — all the stories that matter, in one place.'},right:'photo-1594909122845-11baa439b7bf'},
 {id:'contributors',title:{zh:'百余位专业撰稿人遍布全球',en:'100+ Expert Contributors Worldwide'},body:{zh:'记者、分析师和行业专家带来可信的见解、新鲜的视角和有影响力的故事。',en:'Journalists, analysts and industry experts bring you trusted insights, fresh perspectives and stories that make a difference.'},left:'photo-1516035069371-29a1b244cc32',right:'photo-1477959858617-67f30bc75b82'}
];
