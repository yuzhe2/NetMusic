interface recommend {
  title: string;
  img: string;
}

import { comment } from "../../libs/detail"

const sheetData: recommend[] = [
  {
    img: "http://p2.music.126.net/615OzWFiFXT6P5-I7p1HIw==/19150194021015151.jpg?param=50y50",
    title: "[日系]清澈水灵的治愈萌音",
  },
  {
    img: "http://p2.music.126.net/QcPJfzds8ejF1FPgBaXMTw==/109951163128461676.jpg?param=50y50",
    title: "古典清香 I 我的茶馆里住着巴赫与肖邦",
  },
  {
    img: "http://p2.music.126.net/pgoRKjNPJ1GBIiw7Jil3bg==/19118308184394153.jpg?param=50y50",
    title: "Kawaii Bass丨汽水糖果柠檬软萌萝莉⚡️",
  },
];

const listenData: recommend[] = [
  {
    img: "http://p1.music.126.net/g7sQCjwP3PFjY_tDe0RKBg==/18618030394301094.jpg?param=50y50",
    title: "不知道起啥名的风",
  },
  {
    img: "http://p1.music.126.net/bM22jIP7SepMcSyW_MxiJw==/19028148230442144.jpg?param=50y50",
    title: "晚风心里吹",
  },
  {
    img: "http://p1.music.126.net/vHJtMjEc0mVzbPQPkn1qAA==/18809345418227444.jpg?param=50y50",
    title: "樱花树下",
  },
];

const lyric = [
  {
      "time": 0,
      "content": "作词 : 许嵩/李毅杰"
  },
  {
      "time": 1,
      "content": "作曲 : 李毅杰"
  },
  {
      "time": 2,
      "content": "编曲 : 许嵩/李毅杰"
  },
  {
      "time": 26,
      "content": "离开你一百个星期"
  },
  {
      "time": 28,
      "content": "我回到了这里"
  },
  {
      "time": 29,
      "content": "寻找我们爱过的证据"
  },
  {
      "time": 31,
      "content": "没有人愿意提起"
  },
  {
      "time": 33,
      "content": "玫瑰花它的过去"
  },
  {
      "time": 34,
      "content": "今天这里的主题"
  },
  {
      "time": 36,
      "content": "我把它叫作 回忆"
  },
  {
      "time": 37,
      "content": "我知道 爱情这东西"
  },
  {
      "time": 39,
      "content": "他没什么道理"
  },
  {
      "time": 40,
      "content": "过去我和你在一起"
  },
  {
      "time": 42,
      "content": "是我太叛逆"
  },
  {
      "time": 43,
      "content": "现在只剩我自己"
  },
  {
      "time": 45,
      "content": "偷偷的想你"
  },
  {
      "time": 48,
      "content": ""
  },
  {
      "time": 49,
      "content": "玫瑰花的葬礼"
  },
  {
      "time": 51,
      "content": "埋葬关于你的回忆"
  },
  {
      "time": 54,
      "content": "感觉双手麻痹"
  },
  {
      "time": 57,
      "content": "不能自已"
  },
  {
      "time": 58,
      "content": "已拉不住你"
  },
  {
      "time": 60,
      "content": ""
  },
  {
      "time": 60,
      "content": "真的好美丽"
  },
  {
      "time": 63,
      "content": "那天的烟花雨"
  },
  {
      "time": 66,
      "content": ""
  },
  {
      "time": 66,
      "content": "我说要娶穿碎花洋裙的你"
  },
  {
      "time": 70,
      "content": ""
  },
  {
      "time": 72,
      "content": "玫瑰花的葬礼"
  },
  {
      "time": 75,
      "content": "埋葬深深爱着的你"
  },
  {
      "time": 77,
      "content": ""
  },
  {
      "time": 78,
      "content": "残朵停止呼吸"
  },
  {
      "time": 80,
      "content": "渗入大地"
  },
  {
      "time": 82,
      "content": "没人会注意"
  },
  {
      "time": 83,
      "content": ""
  },
  {
      "time": 84,
      "content": "一片小雨滴"
  },
  {
      "time": 86,
      "content": "陪着我等天明"
  },
  {
      "time": 89,
      "content": ""
  },
  {
      "time": 90,
      "content": "我用这最后一分钟怀念你"
  },
  {
      "time": 95,
      "content": ""
  },
  {
      "time": 96,
      "content": "我在夜幕笼罩的天桥上潜行"
  },
  {
      "time": 99,
      "content": "每一级阶梯"
  },
  {
      "time": 100,
      "content": "都留着你我昔日印迹"
  },
  {
      "time": 102,
      "content": "温存迷醉 吵闹清醒"
  },
  {
      "time": 105,
      "content": "都还在我的脚畔"
  },
  {
      "time": 106,
      "content": "兜兜兜兜兜转不清"
  },
  {
      "time": 108,
      "content": "没来得及把红色玫瑰递给你"
  },
  {
      "time": 110,
      "content": "爱就像是一场雨"
  },
  {
      "time": 111,
      "content": "已经离我而去"
  },
  {
      "time": 113,
      "content": "你说过"
  },
  {
      "time": 113,
      "content": "太过鲜艳的爱情 终将凋零"
  },
  {
      "time": 117,
      "content": ""
  },
  {
      "time": 119,
      "content": "玫瑰花的葬礼"
  },
  {
      "time": 122,
      "content": "埋葬关于你的回忆"
  },
  {
      "time": 125,
      "content": "感觉双手麻痹"
  },
  {
      "time": 127,
      "content": "不能自已"
  },
  {
      "time": 129,
      "content": "已拉不住你"
  },
  {
      "time": 130,
      "content": "真的好美丽"
  },
  {
      "time": 133,
      "content": "那天的烟花雨"
  },
  {
      "time": 136,
      "content": "我说要娶穿碎花洋裙的你"
  },
  {
      "time": 141,
      "content": ""
  },
  {
      "time": 142,
      "content": "玫瑰花的葬礼"
  },
  {
      "time": 145,
      "content": "埋葬深深爱着的你"
  },
  {
      "time": 148,
      "content": "残朵停止呼吸"
  },
  {
      "time": 150,
      "content": "渗入大地"
  },
  {
      "time": 152,
      "content": "没人会注意"
  },
  {
      "time": 153,
      "content": ""
  },
  {
      "time": 154,
      "content": "一片小雨滴"
  },
  {
      "time": 157,
      "content": "陪着我等天明"
  },
  {
      "time": 159,
      "content": ""
  },
  {
      "time": 160,
      "content": "我用这最后一分钟怀念你"
  },
  {
      "time": 164,
      "content": ""
  },
  {
      "time": 166,
      "content": "总是回想过去 埋怨我自己"
  },
  {
      "time": 170,
      "content": ""
  },
  {
      "time": 172,
      "content": "总是不经意间 想起来了你"
  },
  {
      "time": 176,
      "content": ""
  },
  {
      "time": 177,
      "content": "现在的你 已经太遥不可及"
  },
  {
      "time": 182,
      "content": ""
  },
  {
      "time": 183,
      "content": "只能留在我记忆"
  },
  {
      "time": 189,
      "content": "玫瑰花的葬礼"
  },
  {
      "time": 192,
      "content": "埋葬关于你的回忆"
  },
  {
      "time": 195,
      "content": "感觉双手麻痹"
  },
  {
      "time": 197,
      "content": "不能自已"
  },
  {
      "time": 199,
      "content": "已拉不住你"
  },
  {
      "time": 200,
      "content": ""
  },
  {
      "time": 201,
      "content": "真的好美丽"
  },
  {
      "time": 204,
      "content": "那天的烟花雨"
  },
  {
      "time": 207,
      "content": "我说要娶穿碎花洋裙的你"
  },
  {
      "time": 211,
      "content": ""
  },
  {
      "time": 212,
      "content": "玫瑰花的葬礼"
  },
  {
      "time": 215,
      "content": "埋葬深深爱着的你"
  },
  {
      "time": 218,
      "content": "残朵停止呼吸"
  },
  {
      "time": 221,
      "content": "渗入大地"
  },
  {
      "time": 222,
      "content": "没人会注意"
  },
  {
      "time": 224,
      "content": "一片小雨滴"
  },
  {
      "time": 227,
      "content": "陪着我等天明"
  },
  {
      "time": 230,
      "content": "我用这最后一分钟怀念你"
  },
  {
      "time": 235,
      "content": ""
  },
  {
      "time": 236,
      "content": "我用这最后一分钟"
  }
] ;

const commentData: comment[] = [
  {
    img: 'http://p2.music.126.net/Kx9BTV1dcu0KrjEM8FgTQQ==/109951164853535230.jpg?param=300y300',
    nickName: '井筱而已-',
    content: '空有一身撩妹技能 可惜我是妹子',
    time: '2016年4月5日'
  },
  {
    img: 'http://p2.music.126.net/CISGxMueFnxVgHWFXChMQg==/109951164999206692.jpg?param=300y300',
    nickName: '一片叶-困',
    content: '开头的声道玩的好开心ww这首每次听到后面的“要らないんじゃない？冷めてんじゃない？”开始总会有种心疼的感觉♡',
    time: '2015年12月12日'
  },
  {
    img: 'http://p2.music.126.net/C-DL4XMRiMw2zuKjoSS6vA==/109951165849810754.jpg?param=300y300',
    nickName: '伊吹--萃香',
    content: '满脸胡子，听了少女心爆炸了。。。',
    time: '2016年4月2日'
  }
]

export { sheetData, listenData, lyric, commentData };
