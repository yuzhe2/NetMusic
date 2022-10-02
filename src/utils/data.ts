import { SheetItem } from "../libs/aside"
import { SongItem } from "../libs/song"

const likeSheetData: SongItem[] = [
  {
    title: '千百度',
    singer: '许嵩',
    album: '苏格拉没有底',
    time: '03.16',
    url: 'https://music.163.com/song/media/outer/url?id=759852.mp3',
    img: 'http://p2.music.126.net/vM-5UTVh7ri0XQ3tS90-jQ==/2484896278797452.jpg?param=300y300'
  },
  {
    title: '医生',
    singer: '许嵩',
    album: '苏格拉没有底',
    time: '04.06',
    url: 'https://music.163.com/song/media/outer/url?id=469719260.mp3',
    img: 'http://p2.music.126.net/aY9LN0OfVrkh5LO1chFQig==/109951162875736171.jpg?param=300y300'
  },  
  {
    title: '微博控',
    singer: '许嵩',
    album: '苏格拉没有底',
    time: '03.42',
    url: 'https://m10.music.126.net/20220923105405/b8e276328efe39e80f9cb0ea9c35a63a/ymusic/60e3/2647/b973/4270e73673ce2dd6345444f1943953bf.mp3',
    img: 'http://p2.music.126.net/9bQAV8OXvGbMn9kMmmfErA==/109951164235631576.jpg?param=300y300',
  }
]

const clannadSheetMusic: SongItem[] = [
  {
    title: "イノセント",
    singer: "秋山裕和",
    album: "美少女万華鏡 -呪われし伝説の少女-",
    time: '3.21',
    url: "https://music.163.com/song/media/outer/url?id=33735981.mp3",
    img: "https://p3.music.126.net/NJEGDjMBNdY9JtVFFp6Mdw==/7865906186262561.jpg?param=300y300",
  },
  {
    title: "殻ノ少女",
    singer: "MANYO",
    album: "殻ノ少女 オリジナルサウンドトラック「Azure」",
    url: "https://music.163.com/song/media/outer/url?id=28466105.mp3",
    time: '4.11',
    img: "http://p2.music.126.net/scAe3f-GkQvo2h91Gpb0Bg==/1729531800492601.jpg?param=300y300",
  },
  {
    title: "夏影",
    singer: "麻枝准",
    album: "AIR ORIGINAL SOUNDTRACK",
    url: "https://music.163.com/song/media/outer/url?id=28151024.mp3",
    time: '2.11',
    img: "http://p1.music.126.net/CI_u3SfBgdTIAQtFnn_wnQ==/6040716883009850.jpg?param=300y300",
  },
]

const gameSheetMusic: SongItem[] = [
  {
    title: "逆さまの蝶",
    singer: "SNoW",
    album: "逆さまの蝶",
    time: '3.11',
    url: "https://music.163.com/song/media/outer/url?id=22707009.mp3",
    img: "https://p3.music.126.net/PtLd62-khEg8iCutTdE5Vg==/109951163286813093.jpg?param=300y300",
  },
  {
    title: "小さなてのひら",
    singer: "riya",
    album: "CLANNAD ORIGINAL SOUNDTRACK",
    time: '4.11',
    url: "https://music.163.com/song/media/outer/url?id=35345481.mp3",
    img: "https://p3.music.126.net/kRdEbe6fTsVDH-dMhcOHhw==/19171084741935656.jpg?param=300y300",
  },
  {
    title: "玫瑰花的葬礼",
    singer: "スキマスイッチ",
    album: "奏",
    time: '4.20',
    url: "https://music.163.com/song/media/outer/url?id=27646687.mp3",
    img: "https://p3.music.126.net/2iwn7NnfNwtdyu1enlJw_w==/83562883723773.jpg?param=300y300",
  },
]

const musicData = [
  {
    id: 9,
    data: likeSheetData
  },
  {
    id: 7,
    data: gameSheetMusic
  },
  {
    id: 8,
    data: clannadSheetMusic
  }
]

let sheetList: SheetItem[] = [
  {
    title: '我喜欢的音乐',
    id: 9,
    createTime: '2022-3-9 16:31:21',
    musicNum: 1213,
    playNum: 5219
  },
  {
    title: '游戏用',
    id: 7,
    createTime: '2022-5-19 16:31:21',
    musicNum: 6,
    playNum: 1,
    brief: ''
  },
  {
    title: 'clannad',
    id: 8,
    createTime: '2022-3-13 14:12:31',
    musicNum: 23,
    playNum: 123,
    brief: '汐是潮汐的意思，潮涨潮落。渚是海岸的意思。孩子大概就会像潮汐一样，总有一天会离开岸边（渚），在人生的道路上前行。然而不管她走多远，岸边（渚）会一直静静地等着，总有一天，在她累的时候，会回来，回到母亲（渚）的身边。'
  }
]

export {
  musicData,
  sheetList
}