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
    time: 0,
    content: "作词 : 许嵩",
  },
  {
    time: 1,
    content: "作曲 : 许嵩",
  },
  {
    time: 2,
    content: "编曲 : 覃桢",
  },
  {
    time: 29,
    content: "你的昵称实在够土很多人用过",
  },
  {
    time: 32,
    content: "Lucy不寂寞 Fancy有一坨",
  },
  {
    time: 36,
    content: "你的头像和你够像但不够诱惑",
  },
  {
    time: 39,
    content: "见过本尊的只有我",
  },
  {
    time: 43,
    content: "你关注的人里面有七个非常火",
  },
  {
    time: 46,
    content: "全部是男的 我也有点火",
  },
  {
    time: 50,
    content: "你最HAPPY的是看那粉丝数增多",
  },
  {
    time: 53,
    content: "其实全是我的弟兄",
  },
  {
    time: 57,
    content: "只是喝一碗杨枝甘露",
  },
  {
    time: 60,
    content: "你掏出手机拍个不休",
  },
  {
    time: 63,
    content: "把我晾在一旁像一块木头",
  },
  {
    time: 67,
    content: "让我感觉有点寂寞",
  },
  {
    time: 71,
    content: "",
  },
  {
    time: 72,
    content: "你是可以什么都不做",
  },
  {
    time: 75,
    content: "但不可以什么都不说",
  },
  {
    time: 79,
    content: "你又登录了你微博",
  },
  {
    time: 81,
    content: "分享直播你的生活",
  },
  {
    time: 86,
    content: "我是可以什么都不说",
  },
  {
    time: 89,
    content: "但不可以什么都不做",
  },
  {
    time: 93,
    content: "放下客户端立地成佛",
  },
  {
    time: 98,
    content: "",
  },
  {
    time: 102,
    content: "",
  },
  {
    time: 111,
    content: "",
  },
  {
    time: 113,
    content: "你的昵称实在够土很多人用过",
  },
  {
    time: 116,
    content: "Lucy不寂寞 Fancy有一坨",
  },
  {
    time: 119,
    content: "你的头像和你够像但不够诱惑",
  },
  {
    time: 123,
    content: "见过本尊的只有我",
  },
  {
    time: 126,
    content: "你关注的人里面有七个非常火",
  },
  {
    time: 130,
    content: "全部是男的 我也有点火",
  },
  {
    time: 133,
    content: "你最HAPPY的是看那粉丝数增多",
  },
  {
    time: 137,
    content: "其实全是我的弟兄",
  },
  {
    time: 140,
    content: "只是喝一碗杨枝甘露",
  },
  {
    time: 143,
    content: "你掏出手机拍个不休",
  },
  {
    time: 147,
    content: "把我晾在一旁像一块木头",
  },
  {
    time: 150,
    content: "让我感觉有点寂寞",
  },
  {
    time: 154,
    content: "",
  },
  {
    time: 156,
    content: "你是可以什么都不做",
  },
  {
    time: 159,
    content: "但不可以什么都不说",
  },
  {
    time: 162,
    content: "你又登录了你微博",
  },
  {
    time: 164,
    content: "分享直播你的生活",
  },
  {
    time: 169,
    content: "我是可以什么都不说",
  },
  {
    time: 173,
    content: "但不可以什么都不做",
  },
  {
    time: 176,
    content: "放下客户端立地成佛",
  },
  {
    time: 182,
    content: "你是可以什么都不做",
  },
  {
    time: 185,
    content: "但不可以什么都不说",
  },
  {
    time: 188,
    content: "你又登录了你微博",
  },
  {
    time: 190,
    content: "分享直播你的生活",
  },
  {
    time: 195,
    content: "我是可以什么都不说",
  },
  {
    time: 199,
    content: "但不可以什么都不做",
  },
  {
    time: 203,
    content: "放下客户端立地成佛",
  },
  {
    time: 208,
    content: "",
  },
  {
    time: 210,
    content: "我不想再转你的微博",
  },
  {
    time: 216,
    content: "",
  },
  {
    time: 218,
    content: "",
  },
];

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
