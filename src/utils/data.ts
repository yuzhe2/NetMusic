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
    url: 'https://music.163.com/song/media/outer/url?id=4940920.mp3',
    img: 'http://p2.music.126.net/9bQAV8OXvGbMn9kMmmfErA==/109951164235631576.jpg?param=300y300'
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
    title: "奏",
    singer: "スキマスイッチ",
    album: "奏",
    time: '5.11',
    url: "https://music.163.com/song/media/outer/url?id=28409128.mp3",
    img: "https://p3.music.126.net/PfxhEebDuQqQnuOKOJp4-A==/18428914393424537.jpg?param=300y300",
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

export default musicData