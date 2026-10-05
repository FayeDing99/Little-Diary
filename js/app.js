(()=>{
const $=s=>document.querySelector(s);
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches, T=RM?.35:1;
const X=window.XUAN, D=window.XDATA;
const sv=(d,c='')=>`<svg class="${c}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const CHEV='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>';
const PLUS=sv('<path d="M12 6v12M6 12h12"/>');
const F='<circle cx="12" cy="12" r="9"/>';
const BASE_MOODS={
  happy:{t:'开心',d:F+'<path d="M8 10.8q1-1.6 2 0M14 10.8q1-1.6 2 0M8 14q4 4 8 0"/>',c:'var(--m-happy)'},
  calm:{t:'平静',d:F+'<path d="M8.5 10.5h2M13.5 10.5h2M10 15h4"/>',c:'var(--m-calm)'},
  down:{t:'有点丧',d:F+'<path d="M9 10v.6M15 10v.6M8.6 16.4q3.4-3 6.8 0"/>',c:'var(--m-down)'},
  angry:{t:'生气',d:F+'<path d="M8 8.4l2.6 1.3M16 8.4l-2.6 1.3M9.6 11.6v.4M14.4 11.6v.4M9 15.6h6"/>',c:'var(--m-angry)'},
  moved:{t:'感动',d:F+'<path d="M9 10v.6M15 10v.6M9.6 14.4q2.4 2 4.8 0M17 12.2q-1.1 1.6 0 2.5q1.1-.9 0-2.5z"/>',c:'var(--m-moved)'},
  tired:{t:'累了',d:F+'<path d="M8 10.6h2.5M13.5 10.6h2.5"/><circle cx="12" cy="15.2" r="1.2"/><path d="M17.5 2.5h3l-3 3h3"/>',c:'var(--m-tired)'}
};
const BASE_WEATHER={
  sunny:{t:'晴',d:'<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>'},
  cloudy:{t:'多云',d:'<path d="M7 18h10.5a3.5 3.5 0 0 0 .3-7 5.5 5.5 0 0 0-10.6-1A4 4 0 0 0 7 18z"/>'},
  rain:{t:'小雨',d:'<path d="M7 14h10.5a3.5 3.5 0 0 0 .3-7 5.5 5.5 0 0 0-10.6-1A4 4 0 0 0 7 14z"/><path d="M9 17l-1 3M13 17l-1 3M17 17l-1 3"/>'},
  snow:{t:'下雪',d:'<path d="M12 4v16M5.1 8l13.8 8M18.9 8 5.1 16"/>'},
  wind:{t:'有风',d:'<path d="M3 9h11a2.5 2.5 0 1 0-2.5-2.5M3 13h15a2.5 2.5 0 1 1-2.5 2.5M3 17h5"/>'},
  fog:{t:'起雾',d:'<path d="M4 8h13M7 12h13M4 16h10M17 16h3"/>'}
};
const EXTRA_ICONS={
  face:F+'<path d="M9 10v.6M15 10v.6"/><circle cx="12" cy="15" r="1.4"/>',
  heart:'<path d="M12 19s-7-4.3-7-9.2A3.8 3.8 0 0 1 12 7.5a3.8 3.8 0 0 1 7 2.3C19 14.7 12 19 12 19z"/>',
  star:'<path d="M12 4l2.3 5 5.2.6-3.9 3.5 1.1 5.2L12 15.6l-4.7 2.7 1.1-5.2-3.9-3.5 5.2-.6z"/>',
  spark:'<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6.5 6.5 9 9M15 15l2.5 2.5M6.5 17.5 9 15M15 9l2.5-2.5"/>',
  music:'<path d="M9 18V6l10-2v12"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="16" r="2"/>',
  leaf:'<path d="M5 19C5 10 10 5 19 5c0 9-5 14-14 14z"/><path d="M5 19l8-8"/>',
  moon:'<path d="M18 14.5A7 7 0 0 1 9.5 6a7 7 0 1 0 8.5 8.5z"/>',
  drop:'<path d="M12 4s6 6.5 6 10.5a6 6 0 0 1-12 0C6 10.5 12 4 12 4z"/>',
  rainbow:'<path d="M3 17a9 9 0 0 1 18 0M6.5 17a5.5 5.5 0 0 1 11 0M10 17a2 2 0 0 1 4 0"/>',
  thunder:'<path d="M7 13h10.5a3.5 3.5 0 0 0 .3-7 5.5 5.5 0 0 0-10.6-1A4 4 0 0 0 7 13z"/><path d="M12.5 14l-2 3.5h3l-2 3.5"/>'
};
const CAL=sv('<rect x="4" y="5.5" width="16" height="14.5" rx="2.5"/><path d="M8 3.5v4M16 3.5v4M4 10h16"/>');
const CUSTOM_COLORS=['#F2CF72','#A6CDB6','#A9B8D2','#EC9B8A','#EFA6B7','#C4B6DD','#B9D98F','#F0B48A'];
const PALETTES={sakura:{n:'樱粉',h:348,s:70,a:60},mint:{n:'薄荷绿',h:152,s:36,a:44},sky:{n:'雾蓝',h:208,s:52,a:52},lilac:{n:'藕紫',h:268,s:40,a:58},apricot:{n:'杏子',h:30,s:72,a:54}};
const FONTS={xiaowei:{f:'"ZCOOL XiaoWei","Noto Serif SC",serif',d:'清秀 · 站酷小薇'},song:{f:'"Noto Serif SC",serif',d:'端正 · 思源宋体'},hand:{f:'"Long Cang","Noto Serif SC",cursive',d:'随手写 · 龙藏体'}};
const CUPS={paper:'小纸杯',wood:'木签筒',glass:'玻璃罐'};
const METHODS={
  xlr:{n:'小六壬',need:'此刻时间，或报三个数',stamp:'壬',tip:'var(--accent)'},
  mh:{n:'梅花易数',need:'此刻年月日时，或报数',stamp:'梅',tip:'repeating-linear-gradient(var(--accent) 0 4px, transparent 4px 7px)'},
  dlr:{n:'大六壬',need:'以此刻起课',stamp:'课',tip:'linear-gradient(var(--accent) 0 35%, transparent 35% 65%, var(--accent) 65%)'},
  bz:{n:'八字 · 今日',need:'需要出生日期',stamp:'命',tip:'repeating-linear-gradient(var(--accent) 0 2px, transparent 2px 5px)'},
  zw:{n:'紫微 · 今日',need:'需要出生日期、时辰、性别',stamp:'紫',tip:'linear-gradient(var(--accent),var(--blush-2))'},
  hl:{n:'今日黄历',need:'无需输入',stamp:'历',tip:'linear-gradient(var(--line-strong) 0 50%, var(--accent) 50%)'}
};

/* ---------- storage ---------- */
const KEY='xiaoriji.v1';
const ls={get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const SAMPLES=[
 ['2025-04-06','sunny',['happy'],'楼下的玉兰全开了，骑车经过的时候故意多绕了一圈。买了一个有点贵的可颂，值得。'],
 ['2025-06-18','rain',['calm'],'下午坐在图书馆靠窗的位置，雨一直不大不小。读完了一本放了半年的书，最后一页有上一个借书人的铅笔字：“慢慢来”。'],
 ['2025-08-02','cloudy',['tired'],'搬家第二天。纸箱还剩七个，泡面还剩两包。晚上找不到台灯，只好开着手机电筒写这几行。'],
 ['2025-10-11','wind',['moved','happy'],'视频的时候妈妈偷偷把镜头转向阳台，说她种的薄荷活下来了。其实是我走之前顺手插的那一枝。'],
 ['2025-12-24','snow',['happy'],'第一场雪！在路边捏了一个拳头大的雪人，放进自行车车筐，骑到一半它掉了。'],
 ['2026-01-15','fog',['down'],'早上起来窗外什么都看不清，心情也是。交了作业，不确定写得对不对。晚饭吃了热汤面，好一点。'],
 ['2026-03-03','sunny',['calm'],'第一次自己做番茄炒蛋，盐放少了，但颜色很好看。'],
 ['2026-05-20','cloudy',['angry','tired'],'排了四十分钟的队，轮到我刚好卖完。回家路上越想越气，后来买了一支冰淇淋，气消了一半。'],
 ['2026-07-08','sunny',['happy'],'傍晚的云是粉色的，像谁把草莓牛奶打翻了。拍了十二张，没有一张拍得出来。'],
 ['2026-09-12','rain',['tired'],'连上三节课，伞还落在了教室。淋着回来的，不过路灯下的雨丝挺好看。']
].map((r,i)=>({id:'s'+i,date:r[0],weather:r[1],moods:r[2],text:r[3],sample:true}));
SAMPLES.push({id:'s10',date:'2026-09-30',weather:'sunny',moods:[],text:'',sample:true,todos:[
  {name:'背 30 个单词',type:'重复',done:true,minutes:25,time:'08:40'},{name:'小组讨论',type:'日程',done:true,minutes:60,time:'14:00'},
  {name:'交投资学 Milestone',type:'临时',done:true,minutes:90,time:'16:05'},{name:'喝够2000ml水',type:'重复',done:true,minutes:null,time:'21:10'},{name:'洗衣服',type:'临时',done:false,minutes:null,time:''}]});
let entries=ls.get(KEY)||SAMPLES.slice();
entries.forEach(e=>{if(!Array.isArray(e.moods)){e.moods=e.mood?[e.mood]:[];delete e.mood}if(!e.weather)e.weather='sunny'});
if(!entries.some(e=>e.id==='s10')&&entries.some(e=>e.sample))entries.push(SAMPLES[10]);
const save=()=>ls.set(KEY,entries);
const S=Object.assign({palette:'sakura',font:'xiaowei',cup:'paper',sound:true,customMoods:[],customWeather:[],method:'xlr',profile:{},hang:'lantern',sill:'leafy'},ls.get(KEY+'.settings')||{});
if(!S.profile)S.profile={};
const saveS=()=>ls.set(KEY+'.settings',S);
const MOODS=()=>{const o={...BASE_MOODS};S.customMoods.forEach(c=>o[c.k]={t:c.t,d:EXTRA_ICONS[c.icon]||EXTRA_ICONS.face,c:c.color,custom:1});return o};
const WEATHER=()=>{const o={...BASE_WEATHER};S.customWeather.forEach(c=>o[c.k]={t:c.t,d:EXTRA_ICONS[c.icon]||EXTRA_ICONS.spark,custom:1});return o};
const pad=n=>String(n).padStart(2,'0');
const ymd=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const todayStr=()=>ymd(new Date());
let drawn=ls.get(KEY+'.today'); if(!drawn||drawn.d!==todayStr()) drawn={d:todayStr(),n:0};
let recent=[], filters={mood:null,weather:null}, mode='diary', busy=false, pendingDrop=null;

/* ---------- theme: palette + font ---------- */
function isDark(){const t=document.documentElement.getAttribute('data-theme');if(t==='dark')return true;if(t==='light')return false;return matchMedia('(prefers-color-scheme: dark)').matches}
function applyTheme(){
  const p=PALETTES[S.palette]||PALETTES.sakura,h=p.h,s=p.s,st=document.documentElement.style,set=(k,v)=>st.setProperty(k,v),hs=(sat,l,a)=>a==null?`hsl(${h} ${sat.toFixed(1)}% ${l}%)`:`hsl(${h} ${sat.toFixed(1)}% ${l}% / ${a})`;
  if(!isDark()){
    set('--bg',hs(s*.9,99.2));set('--bg-out',hs(s*.45,96));set('--paper','#FFFFFF');set('--paper-back',hs(s,97));
    set('--blush',hs(s,94.5));set('--blush-2',hs(s*.75,87));set('--hair',hs(s*.35,91.5));
    set('--line',hs(s*.25,82));set('--line-strong',hs(s*.2,72));set('--ink',hs(8,21));set('--ink-2',hs(6,48));
    set('--accent',hs(s*.78,p.a));set('--accent-ink','#FFFFFF');set('--cup','#FFFFFF');set('--cup-in',hs(s*.7,93));set('--scrim',hs(s,98,.86));
  }else{
    set('--bg',hs(10,10.5));set('--bg-out',hs(10,7));set('--paper',hs(9,14.5));set('--paper-back',hs(12,18));
    set('--blush',hs(16,20));set('--blush-2',hs(16,27));set('--hair',hs(9,20));
    set('--line',hs(9,33));set('--line-strong',hs(9,43));set('--ink',hs(20,93));set('--ink-2',hs(7,64));
    set('--accent',hs(s*.75,75));set('--accent-ink',hs(20,13));set('--cup',hs(9,15.5));set('--cup-in',hs(14,20));set('--scrim',hs(10,8,.86));
  }
  set('--f-display',(FONTS[S.font]||FONTS.xiaowei).f);
}
try{matchMedia('(prefers-color-scheme: dark)').addEventListener('change',applyTheme)}catch(e){}
new MutationObserver(applyTheme).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});

/* ---------- background decorations ---------- */
const HANGS={
  lantern:{n:'圆灯笼',svg:`<path d="M40 0V48"/><path d="M33 48h14v5H33z" fill="var(--bg)"/><ellipse cx="40" cy="78" rx="21" ry="25" fill="var(--blush)"/><path d="M40 53V103M30 55Q23 78 30 101M50 55Q57 78 50 101"/><path d="M33 102h14v5H33z" fill="var(--bg)"/><g class="flutter" style="transform-origin:40px 107px"><path d="M40 107v9" /><path d="M36 116l-2 24M40 116v26M44 116l2 24" stroke="var(--accent)" opacity=".6"/></g>`},
  palace:{n:'宫灯',svg:`<path d="M40 0V46"/><path d="M28 50h24l4 6H24z" fill="var(--bg)"/><path d="M34 46h12v4H34z"/><path d="M26 56h28v44H26z" fill="var(--paper-back)"/><path d="M33 56v44M47 56v44M26 66h28M26 90h28"/><path d="M24 100h32l-4 6H28z" fill="var(--bg)"/><g class="flutter" style="transform-origin:40px 106px"><path d="M26 106v14M54 106v14" stroke="var(--accent)" opacity=".6"/><path d="M40 106v26" stroke="var(--accent)" opacity=".6"/><circle cx="40" cy="134" r="2" fill="var(--accent)" stroke="none" opacity=".6"/></g>`},
  glass:{n:'玻璃风铃',svg:`<path d="M40 0V60"/><path d="M23 86Q23 62 40 62Q57 62 57 86Z" fill="var(--paper)" fill-opacity=".55"/><circle cx="33" cy="74" r="2.4" fill="var(--blush-2)" stroke="none"/><circle cx="45" cy="70" r="2" fill="var(--blush-2)" stroke="none"/><circle cx="48" cy="79" r="2.4" fill="var(--blush-2)" stroke="none"/><path d="M28 70Q31 66 34 65" opacity=".7"/><g class="flutter" style="transform-origin:40px 86px"><path d="M40 86V100"/><circle cx="40" cy="89" r="1.6" fill="currentColor" stroke="none"/><path d="M34 100h12v42H34z" fill="var(--blush)"/><path d="M37 108h6M37 113h4"/></g>`},
  bamboo:{n:'竹管风铃',svg:`<path d="M40 0V38"/><path d="M16 42Q40 34 64 42"/><path d="M22 41V48M32 39V48M48 39V48M58 41V48"/><g class="flutter" style="transform-origin:40px 42px"><rect x="19.5" y="48" width="5" height="44" rx="2" fill="var(--wood)"/><rect x="29.5" y="48" width="5" height="58" rx="2" fill="var(--wood)"/><rect x="45.5" y="48" width="5" height="52" rx="2" fill="var(--wood)"/><rect x="55.5" y="48" width="5" height="38" rx="2" fill="var(--wood)"/><path d="M40 40V104"/><circle cx="40" cy="80" r="3.5" fill="var(--bg)"/><path d="M40 104Q34 116 40 130Q46 116 40 104Z" fill="var(--blush)"/></g>`},
  doll:{n:'晴天娃娃',svg:`<path d="M40 0V62"/><circle cx="40" cy="78" r="16" fill="var(--bg)"/><path d="M27 92C21 104 17 117 14 128Q20 123 26 129Q33 123 40 130Q47 123 54 129Q60 123 66 128C63 117 59 104 53 92" fill="var(--bg)"/><path d="M28 93Q40 98 52 93"/><path d="M40 96l-4 5M40 96l4 5"/><circle cx="34" cy="77" r="1.3" fill="currentColor" stroke="none"/><circle cx="46" cy="77" r="1.3" fill="currentColor" stroke="none"/><path d="M36 83Q40 86.5 44 83"/><ellipse cx="30.5" cy="82" rx="2.6" ry="1.4" fill="var(--blush-2)" stroke="none"/><ellipse cx="49.5" cy="82" rx="2.6" ry="1.4" fill="var(--blush-2)" stroke="none"/>`},
  none:{n:'不挂',svg:''}
};
const SILL_BASE='<path d="M0 100H400M0 106H300"/><path d="M342 100V8M348 100V8"/>';
const SILLS={
  leafy:{n:'叶子盆栽 · 杯子',svg:`<path d="M42 72L46 100H78L82 72Z" fill="var(--bg)"/><path d="M40 72H84"/><g class="leaves" style="transform-origin:62px 72px"><path d="M62 72C61 58 56 48 47 41"/><path d="M47 41C41 32 31 31 27 37C33 43 41 45 47 41"/><path d="M62 72C64 55 70 45 80 38"/><path d="M80 38C86 28 97 28 99 33C93 41 85 42 80 38"/><path d="M62 72C62 56 63 41 62 27"/><path d="M62 27C56 19 58 9 64 5C70 11 68 21 62 27"/></g><path d="M150 100V86Q150 80 156 80H170Q176 80 176 86V100"/><path d="M176 86Q184 86 182 93Q180 98 176 97"/><path d="M158 74Q156 70 159 66M166 74Q164 70 167 66" opacity=".7"/>`},
  cactus:{n:'仙人掌 · 书',svg:`<g class="leaves" style="transform-origin:61px 82px"><path d="M56 82V46Q56 37 61 37Q66 37 66 46V82" fill="var(--bg)"/><path d="M56 66Q46 66 46 56V50Q46 46 49.5 46Q53 46 53 50V58" fill="var(--bg)"/><path d="M66 60Q75 60 75 51V47Q75 44 72 44Q69 44 69 47V54" fill="var(--bg)"/><path d="M61 44v3M59 54v3M63 64v3" opacity=".6"/><circle cx="61" cy="35" r="2.6" fill="var(--blush-2)" stroke="none"/></g><path d="M44 82L48 100H74L78 82Z" fill="var(--bg)"/><path d="M42 82H80"/><path d="M140 100V90H198V100" fill="var(--bg)"/><path d="M146 90V81H192V90" fill="var(--bg)"/><path d="M150 81V73H186V81" fill="var(--bg)"/><path d="M148 95H190M154 85H184" opacity=".5"/><path d="M180 73V64l4 3 4-3v9" opacity=".8"/>`},
  succulent:{n:'多肉 · 小花瓶',svg:`<g class="leaves" style="transform-origin:65px 88px"><path d="M65 88Q50 82 44 70Q58 70 65 88" fill="var(--bg)"/><path d="M65 88Q80 82 86 70Q72 70 65 88" fill="var(--bg)"/><path d="M65 88Q57 74 65 62Q73 74 65 88" fill="var(--bg)"/><path d="M65 88Q52 88 42 82Q54 78 65 88" fill="var(--bg)"/><path d="M65 88Q78 88 88 82Q76 78 65 88" fill="var(--bg)"/></g><path d="M34 88H96"/><path d="M36 88Q36 100 46 100H84Q94 100 94 88" fill="var(--bg)"/><path d="M157 100Q147 92 151 82Q155 74 156 66H166Q167 74 171 82Q175 92 165 100Z" fill="var(--bg)"/><g class="leaves" style="transform-origin:161px 66px"><path d="M161 66Q159 48 166 36"/><path d="M161 60Q153 52 150 44"/><circle cx="166" cy="34" r="4" fill="var(--blush)"/><circle cx="149" cy="42" r="3" fill="var(--blush)"/></g>`},
  monstera:{n:'龟背竹 · 台灯',svg:`<g class="leaves" style="transform-origin:60px 76px"><path d="M60 76Q57 56 43 44Q29 47 32 61Q40 74 60 76Z" fill="var(--bg)"/><path d="M41 51l7 5M35 58l9 3M40 66l9 1" /><path d="M60 76Q64 50 82 38Q97 43 92 58Q82 71 60 76Z" fill="var(--bg)"/><path d="M84 45l-7 7M90 52l-9 5M86 62l-10 2"/><path d="M60 76Q60 52 58 30"/><path d="M58 30Q48 22 52 12Q62 16 58 30Z" fill="var(--bg)"/></g><path d="M40 76L44 100H76L80 76Z" fill="var(--bg)"/><path d="M38 76H82"/><path d="M148 100H184M166 100V70"/><path d="M151 70H181L173 50H159Z" fill="var(--blush)"/><path d="M166 76q4 2 4 6" opacity=".6"/>`}
};
function applyDeco(){const h=HANGS[S.hang]||HANGS.lantern,s=SILLS[S.sill]||SILLS.leafy;$('#hang').innerHTML=h.svg;$('#hang').style.display=h.svg?'':'none';$('#sill').innerHTML=SILL_BASE+s.svg}
const miniHang=k=>`<svg viewBox="0 0 80 150" fill="none" stroke="var(--line-strong)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:44px;height:84px">${HANGS[k].svg||'<path d="M30 70h20" stroke-dasharray="3 4"/>'}</svg>`;
const miniSill=k=>`<svg viewBox="20 0 190 112" fill="none" stroke="var(--line-strong)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:58px"><path d="M0 100H400"/>${SILLS[k].svg}</svg>`;

/* ---------- cup designs ---------- */
function cupParts(style){
  if(style==='oracle') return {back:'<ellipse cx="80" cy="14" rx="66" ry="10" fill="var(--cup-in)" stroke="var(--line-strong)" stroke-width="1.4"/>',front:`
    <path d="M14 14A66 10 0 0 0 146 14L140 136A60 10 0 0 1 20 136Z" fill="var(--paper-back)" stroke="var(--line-strong)" stroke-width="1.4"/>
    <path d="M15 28A65 10 0 0 0 145 28M19 122A61 10 0 0 0 141 122" fill="none" stroke="var(--accent)" stroke-width="2.2" opacity=".7"/>
    <circle cx="80" cy="76" r="25" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.2"/>
    <g stroke="var(--accent)" stroke-width="2.4" stroke-linecap="round"><path d="M68 66h24M68 74h9M83 74h9M68 82h24"/></g>
    <text x="80" y="98" text-anchor="middle" font-size="9" fill="var(--ink-2)" style="font-family:var(--f-classic);letter-spacing:2px">卜 筮</text>`};
  if(style==='book') return {back:'<ellipse cx="80" cy="16" rx="64" ry="10" fill="var(--cup-in)" stroke="var(--line-strong)" stroke-width="1.4"/>',front:`
    <path d="M16 16A64 10 0 0 0 144 16V134Q144 146 132 146H28Q16 146 16 134Z" fill="var(--paper)" stroke="var(--line-strong)" stroke-width="1.4"/>
    <g fill="none" stroke="var(--line)" stroke-width="1.2"><path d="M34 30V138M46 31V139M114 31V139M126 30V138"/></g>
    <path d="M16 30A64 10 0 0 0 144 30" fill="none" stroke="var(--blush-2)" stroke-width="3" stroke-linecap="round"/>
    <path d="M62 52h36v58l-18-10-18 10Z" fill="var(--blush)" stroke="var(--accent)" stroke-width="1.3" stroke-linejoin="round"/>
    <g font-size="14" fill="var(--accent)" text-anchor="middle" style="font-family:var(--f-display)"><text x="80" y="72">好</text><text x="80" y="90">句</text></g>`};
  if(style==='wood') return {back:'<ellipse cx="80" cy="14" rx="70" ry="11" fill="var(--cup-in)" stroke="var(--line-strong)" stroke-width="1.4"/>',front:`
    <path d="M10 14A70 11 0 0 0 150 14V136A70 11 0 0 1 10 136Z" fill="var(--wood)" stroke="var(--line-strong)" stroke-width="1.4"/>
    <path d="M38 30C36 60 38 100 36 140M78 33C80 70 76 110 79 146M120 30C122 64 118 104 121 141" fill="none" stroke="var(--stick-line)" stroke-width="1" opacity=".7"/>
    <path d="M10 30A70 11 0 0 0 150 30M10 122A70 11 0 0 0 150 122" fill="none" stroke="var(--accent)" stroke-width="3" opacity=".55"/>
    <rect x="62" y="58" width="36" height="46" rx="3" fill="var(--paper)" stroke="var(--accent)" stroke-width="1.3"/>
    <text x="80" y="88" text-anchor="middle" font-size="20" fill="var(--accent)" style="font-family:var(--f-display)">签</text>`};
  if(style==='glass') return {back:'<ellipse cx="80" cy="14" rx="66" ry="10" fill="none" stroke="var(--line-strong)" stroke-width="1.2" opacity=".7"/>',front:`
    <path d="M14 14A66 10 0 0 0 146 14C151 42 153 100 146 130Q143 145 128 146H32Q17 145 14 130C7 100 9 42 14 14Z" fill="var(--paper)" fill-opacity=".32" stroke="var(--line-strong)" stroke-width="1.4"/>
    <path d="M30 42Q25 82 31 120" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>
    <path d="M38 50Q35 66 37 78" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>
    <path d="M13 24A67 10 0 0 0 147 24" fill="none" stroke="var(--accent)" stroke-width="2.4" opacity=".75"/>
    <path d="M40 31q-12-10-14 0q6 6 14 0q-4 10-2 18M40 31q10-10 14-2q-5 6-14 2q4 10 8 16" fill="none" stroke="var(--accent)" stroke-width="1.6" stroke-linecap="round" opacity=".85"/>`};
  return {back:'<ellipse cx="80" cy="14" rx="72" ry="11" fill="var(--cup-in)" stroke="var(--line-strong)" stroke-width="1.4"/>',front:`
    <path d="M8 14A72 11 0 0 0 152 14C150 60 146 110 138 136Q136 144 126 145H34Q24 144 22 136C14 110 10 60 8 14Z" fill="var(--cup)" stroke="var(--line-strong)" stroke-width="1.4"/>
    <path d="M13 46Q80 60 147 46M19 116Q80 128 141 116" fill="none" stroke="var(--line)" stroke-width="1.2"/>
    <path d="M15 52Q80 66 145 52" fill="none" stroke="var(--blush-2)" stroke-width="3" stroke-linecap="round"/>
    <g font-size="15" fill="var(--ink-2)" text-anchor="middle" style="font-family:var(--f-display)"><text x="80" y="82">小</text><text x="80" y="98">日</text><text x="80" y="114">记</text></g>`};
}
const styleOf=m=>m==='oracle'?'oracle':m==='quote'?'book':S.cup;
function applyCup(){const p=cupParts(styleOf(mode));$('#cupBack').innerHTML=p.back;$('#cupFront').innerHTML=p.front}

/* ---------- sound & haptics ---------- */
let actx,noise;
function ac(){ if(!actx){ const C=window.AudioContext||window.webkitAudioContext; if(!C) return null; actx=new C(); const b=actx.createBuffer(1,actx.sampleRate*.5,actx.sampleRate),c=b.getChannelData(0); for(let i=0;i<c.length;i++)c[i]=Math.random()*2-1; noise=b;} if(actx.state==='suspended')actx.resume(); return actx;}
function clack(delay=0,vol=.22){ if(!S.sound) return; try{const a=ac(); if(!a) return; const t=a.currentTime+delay; const gl=mode==='diary'&&S.cup==='glass';
  const s=a.createBufferSource(); s.buffer=noise; const bp=a.createBiquadFilter(); bp.type='bandpass'; bp.frequency.value=(gl?3200:1600)+Math.random()*2200; bp.Q.value=gl?14:7;
  const g=a.createGain(); g.gain.setValueAtTime(vol,t); g.gain.exponentialRampToValueAtTime(.001,t+(gl?.12:.06)); s.connect(bp).connect(g).connect(a.destination); s.start(t); s.stop(t+.14);
  const o=a.createOscillator(); o.type=gl?'sine':'triangle'; o.frequency.setValueAtTime((gl?1800:380)+Math.random()*(gl?900:260),t); const g2=a.createGain(); g2.gain.setValueAtTime(vol*(gl?.35:.5),t); g2.gain.exponentialRampToValueAtTime(.001,t+(gl?.18:.05)); o.connect(g2).connect(a.destination); o.start(t); o.stop(t+.2);
 }catch(e){} }
function pop(){ if(!S.sound) return; try{const a=ac(); if(!a) return; const t=a.currentTime; const o=a.createOscillator(); o.type='sine'; o.frequency.setValueAtTime(520,t); o.frequency.exponentialRampToValueAtTime(1250,t+.13); const g=a.createGain(); g.gain.setValueAtTime(.16,t); g.gain.exponentialRampToValueAtTime(.001,t+.18); o.connect(g).connect(a.destination); o.start(t); o.stop(t+.2);}catch(e){} }
function swish(){ if(!S.sound) return; try{const a=ac(); if(!a) return; const t=a.currentTime; const s=a.createBufferSource(); s.buffer=noise; const f=a.createBiquadFilter(); f.type='bandpass'; f.frequency.setValueAtTime(900,t); f.frequency.linearRampToValueAtTime(2400,t+.3); f.Q.value=.8; const g=a.createGain(); g.gain.setValueAtTime(.0001,t); g.gain.linearRampToValueAtTime(.09,t+.08); g.gain.exponentialRampToValueAtTime(.001,t+.34); s.connect(f).connect(g).connect(a.destination); s.start(t); s.stop(t+.36);}catch(e){} }
const buzz=p=>{try{navigator.vibrate&&navigator.vibrate(p)}catch(e){}};
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const rnd=a=>a[Math.floor(Math.random()*a.length)];

/* ---------- helpers ---------- */
function tipOf(e){const M=MOODS();const cs=(e.moods||[]).map(k=>M[k]&&M[k].c).filter(Boolean);
  if(!cs.length)return'var(--line)';if(cs.length===1)return cs[0];const st=100/cs.length;return`linear-gradient(${cs.map((c,i)=>`${c} ${(i*st).toFixed(1)}% ${((i+1)*st).toFixed(1)}%`).join(',')})`}
function fmt(date){const [y,m,d]=date.split('-').map(Number);const wd='日一二三四五六'[new Date(y,m-1,d).getDay()];return{md:pad(m)+'.'+pad(d),y,m,d,wd}}
function lunarOf(date){try{const [y,m,d]=date.split('-').map(Number);return X.Solar.fromYmd(y,m,d).getLunar()}catch(e){return null}}
function lunarText(date){const L=lunarOf(date);return L?`农历${L.getMonthInChinese()}月${L.getDayInChinese()}`:''}
function ago(date){const [y,m,d]=date.split('-').map(Number);const a=new Date(y,m-1,d),n=new Date();n.setHours(0,0,0,0);const days=Math.round((n-a)/864e5);
  if(days<=0)return'今天写的';if(days===1)return'昨天的你';if(days<31)return days+' 天前的你';
  let mo=(n.getFullYear()-y)*12+(n.getMonth()-(m-1));if(n.getDate()<d)mo--;const yy=Math.floor(mo/12),mm=mo%12;
  return (yy?yy+' 年':'')+(mm?(yy?' ':'')+mm+' 个月':'')+'前的你';}
function toast(msg){const t=document.createElement('div');t.className='toast';t.textContent=msg;$('#app').appendChild(t);t.animate([{opacity:0,transform:'translate(-50%,-8px)'},{opacity:1,transform:'translate(-50%,0)'}],{duration:220,easing:'ease-out'});setTimeout(()=>{t.animate([{opacity:1},{opacity:0}],{duration:250}).onfinish=()=>t.remove()},2000)}
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const fmtMin=m=>!m?'':m<60?m+' 分钟':Math.floor(m/60)+' 小时'+(m%60?(m%60)+' 分':'');

/* ---------- bottom sheet ---------- */
let bsClose=null;
function openBS(html,mount,onClose){const bs=$('#bs'),c=$('#bsCard');c.innerHTML='<div class="bs-grip"></div>'+html;bs.hidden=false;bsClose=onClose||null;
  c.animate([{transform:'translateY(100%)'},{transform:'translateY(-6px)',offset:.8},{transform:'none'}],{duration:340*T,easing:'cubic-bezier(.2,.8,.3,1)'});
  $('#bsScrim').animate([{opacity:0},{opacity:1}],{duration:220,fill:'both'});c.scrollTop=0;mount&&mount(c)}
async function closeBS(){const bs=$('#bs');if(bs.hidden)return;const c=$('#bsCard');
  $('#bsScrim').animate([{opacity:1},{opacity:0}],{duration:200,fill:'forwards'});
  await c.animate([{transform:'none'},{transform:'translateY(100%)'}],{duration:240*T,easing:'ease-in',fill:'forwards'}).finished.catch(()=>{});
  bs.hidden=true;c.getAnimations().forEach(a=>a.cancel());$('#bsScrim').getAnimations().forEach(a=>a.cancel());const f=bsClose;bsClose=null;f&&f()}
$('#bsScrim').onclick=()=>closeBS();

/* ---------- date picker ---------- */
function datePicker({title,value,max,min='1920-01-01',quick=true,startYears=false,onPick}){
  let sel=value, base=value||(max&&max<todayStr()?max:todayStr());
  let [vy,vm]=base.split('-').map(Number), view=startYears?'years':'days', dir=0;
  const T0=todayStr();
  const draw=c=>{
    const body=c.querySelector('.dp-body');let h='';
    if(view==='days'){
      const first=new Date(vy,vm-1,1),start=new Date(vy,vm-1,1-first.getDay());
      h+=`<div class="dp-wk">${'日一二三四五六'.split('').map(x=>`<span>${x}</span>`).join('')}</div><div class="dp-grid">`;
      for(let i=0;i<42;i++){const d=new Date(start);d.setDate(start.getDate()+i);const s=ymd(d);
        let lt='';try{const L=X.Solar.fromYmd(d.getFullYear(),d.getMonth()+1,d.getDate()).getLunar();const jq=L.getJieQi();lt=jq||(L.getDay()===1?L.getMonthInChinese()+'月':L.getDayInChinese())}catch(e){}
        const cls=['dp-day',d.getMonth()+1!==vm?'out':'',s===T0?'today':'',s===sel?'sel':'',(max&&s>max)||s<min?'dis':''].join(' ');
        h+=`<button type="button" class="${cls}" data-d="${s}"><b>${d.getDate()}</b><small>${lt}</small></button>`}
      h+='</div>';
      if(quick)h+=`<div class="dp-quick">${[['今天',0],['昨天',-1],['前天',-2]].map(([n,o])=>{const d=new Date();d.setDate(d.getDate()+o);return`<button type="button" class="chip plain" data-d="${ymd(d)}">${n}</button>`}).join('')}</div>`;
    }else if(view==='years'){
      const maxY=max?+max.slice(0,4):new Date().getFullYear()+5,minY=+min.slice(0,4);h+='<div class="dp-years">';
      for(let y=maxY;y>=minY;y--)h+=`<button type="button" data-y="${y}" aria-pressed="${y===vy}">${y}</button>`;h+='</div>';
    }else{h+='<div class="dp-months">'+Array.from({length:12},(_,i)=>`<button type="button" data-m="${i+1}" aria-pressed="${i+1===vm}">${i+1}<small style="font-size:12px"> 月</small></button>`).join('')+'</div>'}
    body.innerHTML=h;
    c.querySelector('.dp-ym').innerHTML=view==='years'?'选年份':`${vy}<small>年</small>${vm}<small>月</small>${CHEV}`;
    c.querySelector('.dp-nav').style.visibility=view==='days'?'visible':'hidden';
    if(dir)body.animate([{opacity:0,transform:`translateX(${dir*24}px)`},{opacity:1,transform:'none'}],{duration:220,easing:'ease-out'});dir=0;
    if(view==='years'){const on=body.querySelector('[aria-pressed="true"]');on&&on.scrollIntoView({block:'center'})}
  };
  openBS(`<div class="bs-title"><h3>${title}</h3><span>${sel?sel.replace(/-/g,'.'):''}</span></div>
    <div class="dp-head"><button type="button" class="dp-ym"></button><div class="dp-nav"><button type="button" data-nav="-1" aria-label="上个月">${sv('<path d="M15 6l-6 6 6 6"/>')}</button><button type="button" data-nav="1" aria-label="下个月">${sv('<path d="M9 6l6 6-6 6"/>')}</button></div></div>
    <div class="dp-body"></div>`,c=>{
    draw(c);
    c.onclick=e=>{const b=e.target.closest('button');if(!b)return;
      if(b.classList.contains('dp-ym')){view=view==='days'?'years':'days';draw(c);return}
      if(b.dataset.nav){vm+=+b.dataset.nav;if(vm<1){vm=12;vy--}if(vm>12){vm=1;vy++}dir=+b.dataset.nav;draw(c);clack(0,.05);return}
      if(b.dataset.y){vy=+b.dataset.y;view='months';draw(c);return}
      if(b.dataset.m){vm=+b.dataset.m;view='days';draw(c);return}
      if(b.dataset.d){sel=b.dataset.d;[vy,vm]=sel.split('-').map(Number);draw(c);clack(0,.1);buzz(8);setTimeout(()=>{closeBS();onPick(sel)},170)}};
    let sx=null;const g=c.querySelector('.dp-body');
    g.addEventListener('touchstart',e=>{sx=e.touches[0].clientX},{passive:true});
    g.addEventListener('touchend',e=>{if(sx==null||view!=='days')return;const dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>50){const n=dx<0?1:-1;vm+=n;if(vm<1){vm=12;vy--}if(vm>12){vm=1;vy++}dir=n;draw(c)}});
  });
}
const HOURS=[['早子','00–01'],['丑','01–03'],['寅','03–05'],['卯','05–07'],['辰','07–09'],['巳','09–11'],['午','11–13'],['未','13–15'],['申','15–17'],['酉','17–19'],['戌','19–21'],['亥','21–23'],['晚子','23–24']];
const HOUR_H=[0,2,4,6,8,10,12,14,16,18,20,22,23];
const hourName=i=>i==null?'不清楚':HOURS[i][0]+(HOURS[i][0].length===1?'时':'时');
const CITIES=[['中国大陆',[['北京',116.40],['上海',121.47],['天津',117.20],['重庆',106.55],['广州',113.26],['深圳',114.06],['杭州',120.16],['南京',118.80],['苏州',120.58],['成都',104.07],['武汉',114.31],['西安',108.94],['长沙',112.94],['郑州',113.62],['济南',117.00],['青岛',120.38],['沈阳',123.43],['大连',121.61],['长春',125.32],['哈尔滨',126.64],['石家庄',114.51],['太原',112.55],['呼和浩特',111.75],['合肥',117.23],['福州',119.30],['厦门',118.09],['南昌',115.86],['南宁',108.37],['海口',110.20],['昆明',102.83],['贵阳',106.63],['兰州',103.83],['西宁',101.78],['银川',106.23],['乌鲁木齐',87.62],['拉萨',91.13]].map(([n,l])=>[n,l,'Asia/Shanghai'])],
 ['港澳台',[['香港',114.17,'Asia/Hong_Kong'],['澳门',113.54,'Asia/Macau'],['台北',121.56,'Asia/Taipei'],['高雄',120.30,'Asia/Taipei']]],
 ['海外',[['纽约',-74.01,'America/New_York'],['华盛顿',-77.04,'America/New_York'],['波士顿',-71.06,'America/New_York'],['费城',-75.17,'America/New_York'],['芝加哥',-87.63,'America/Chicago'],['休斯敦',-95.37,'America/Chicago'],['丹佛',-104.99,'America/Denver'],['洛杉矶',-118.24,'America/Los_Angeles'],['旧金山',-122.42,'America/Los_Angeles'],['西雅图',-122.33,'America/Los_Angeles'],['多伦多',-79.38,'America/Toronto'],['温哥华',-123.12,'America/Vancouver'],['伦敦',-0.13,'Europe/London'],['巴黎',2.35,'Europe/Paris'],['柏林',13.40,'Europe/Berlin'],['东京',139.69,'Asia/Tokyo'],['首尔',126.98,'Asia/Seoul'],['新加坡',103.82,'Asia/Singapore'],['吉隆坡',101.69,'Asia/Kuala_Lumpur'],['曼谷',100.50,'Asia/Bangkok'],['悉尼',151.21,'Australia/Sydney'],['墨尔本',144.96,'Australia/Melbourne'],['奥克兰',174.76,'Pacific/Auckland']]]];
function tzOffsetMin(tz,utcMs){const f=new Intl.DateTimeFormat('en-US',{timeZone:tz,hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'});
  const p=Object.fromEntries(f.formatToParts(new Date(utcMs)).map(x=>[x.type,x.value]));return(Date.UTC(+p.year,+p.month-1,+p.day,+p.hour%24,+p.minute,+p.second)-utcMs)/60000}
function utcFromLocal(y,m,d,H,M,place){const g=Date.UTC(y,m-1,d,H,M);if(place&&place.off!=null)return g-place.off*3600000;const tz=place&&place.tz||'Asia/Shanghai';
  const o1=tzOffsetMin(tz,g);let u=g-o1*60000;const o2=tzOffsetMin(tz,u);if(o2!==o1)u=g-o2*60000;return u}
function eotMin(utc){const d=new Date(utc),N=Math.floor((utc-Date.UTC(d.getUTCFullYear(),0,0))/864e5),B=2*Math.PI*(N-81)/365;return 9.87*Math.sin(2*B)-7.53*Math.cos(B)-1.5*Math.sin(B)}
const comps=ms=>{const d=new Date(ms);return{y:d.getUTCFullYear(),m:d.getUTCMonth()+1,d:d.getUTCDate(),H:d.getUTCHours(),M:d.getUTCMinutes()}};
const hhmm=c=>pad(c.H)+':'+pad(c.M);
const idxOfHour=H=>H===23?12:Math.floor((H+1)/2);
/* 出生时刻换算：北京时间（定节气、年月柱）与出生地时间（定日、时） */
function birthCalc(){const p=S.profile;const [y,m,d]=p.birth.split('-').map(Number);
  let H,M,exact=false;if(p.time){[H,M]=p.time.split(':').map(Number);exact=true}else if(p.hour!=null){H=HOUR_H[p.hour];M=30}else{H=12;M=0}
  const utc=utcFromLocal(y,m,d,H,M,p.place);const bj=comps(utc+8*3600000);
  let loc={y,m,d,H,M},tst=false;
  if(exact&&p.place&&p.tst!==false){loc=comps(utc+p.place.lon*240000+eotMin(utc)*60000);tst=true}
  const hourIdx=exact?idxOfHour(loc.H):p.hour;
  const placeTxt=p.place?p.place.n:'未填（按北京时间）';
  const note=`出生地：${placeTxt}${p.place?`，钟表时间 ${pad(H)}:${pad(M)}${exact?'':'（按时辰中点估算）'}`:''}${tst?`，真太阳时 ${hhmm(loc)}`:''}`;
  return{bj,loc,hourIdx,known:exact||p.hour!=null,exact,tst,note}}
function hourPicker(onPick){
  const cur=S.profile.hour;let mode=S.profile.time?'exact':'hour';const t=(S.profile.time||'').split(':');let nums=[t[0]||'',t[1]||''],slot=0;
  const body=()=>mode==='hour'?`<div class="hours">${HOURS.map((h,i)=>`<button type="button" data-h="${i}" aria-pressed="${!S.profile.time&&cur===i}">${h[0]}${h[0].length===1?'时':''}<small>${h[1]}</small></button>`).join('')}<button type="button" data-h="" aria-pressed="${cur==null&&!S.profile.time}">不清楚<small>先空着</small></button></div>`
    :`<div class="ntiles two">${[0,1].map(i=>`<button type="button" class="ntile ${slot===i?'on':''}" data-slot="${i}"><b class="${nums[i]?'':'ph'}">${nums[i]||'–'}</b><small>${i?'分':'时（0–23）'}</small></button>`).join('')}</div>
      <div class="keypad">${[1,2,3,4,5,6,7,8,9].map(n=>`<button type="button" data-key="${n}">${n}</button>`).join('')}<button type="button" class="fn" data-key="c">清空</button><button type="button" data-key="0">0</button><button type="button" class="fn" data-key="b">⌫</button></div>
      <div class="acts"><button type="button" class="btn sm primary" data-ok>确定</button></div>`;
  openBS(`<div class="bs-title"><h3>出生时间</h3><span>按出生地当时的钟表时间</span></div>
    <div class="segs" style="margin-bottom:12px"><button type="button" class="chip plain" data-mode="hour" aria-pressed="${mode==='hour'}">只知道时辰</button><button type="button" class="chip plain" data-mode="exact" aria-pressed="${mode==='exact'}">精确到分钟</button></div><div id="hpBody"></div>
    <p class="ask">精确时间才能做真太阳时校正；只知道时辰时，按时辰中点估算。</p>`,
    c=>{const hb=c.querySelector('#hpBody');const re=()=>{hb.innerHTML=body()};re();
      c.onclick=e=>{const b=e.target.closest('button');if(!b)return;
        if(b.dataset.mode){mode=b.dataset.mode;c.querySelectorAll('[data-mode]').forEach(x=>x.setAttribute('aria-pressed',x.dataset.mode===mode));re();return}
        if(b.dataset.h!=null){const v=b.dataset.h===''?null:+b.dataset.h;clack(0,.1);setTimeout(()=>{closeBS();onPick({hour:v,time:null})},120);return}
        if(b.dataset.slot!=null){slot=+b.dataset.slot;re();return}
        if(b.dataset.key!=null){const k=b.dataset.key,cur2=nums[slot];buzz(5);clack(0,.05);
          if(k==='b')nums[slot]=cur2.slice(0,-1);else if(k==='c'){nums=['',''];slot=0}else if(cur2.length<2){nums[slot]=cur2+k;if(nums[slot].length===2&&slot===0)slot=1}
          re();return}
        if(b.hasAttribute('data-ok')){const H=+nums[0],M=+(nums[1]||0);if(nums[0]===''||H>23||M>59){toast('时 0–23，分 0–59');return}
          closeBS();onPick({hour:idxOfHour(H),time:pad(H)+':'+pad(M)})}}});
}

function placePicker(onPick){
  let other=false;
  const body=()=>other?`<div class="lab2">经度（东经为正，西经为负）</div><input class="tin" id="plLon" inputmode="decimal" placeholder="例如 -77.04">
      <div class="lab2">出生时当地与 UTC 的时差（小时）</div><input class="tin" id="plOff" inputmode="decimal" placeholder="例如 -5（夏令时请自行加 1）">
      <div class="lab2">地名（可不填）</div><input class="tin" id="plName" maxlength="12" placeholder="例如 某某镇">
      <div class="acts"><button type="button" class="btn sm" data-back>返回城市列表</button><button type="button" class="btn sm primary" data-ok>确定</button></div>`
    :CITIES.map(([g,list])=>`<div class="lab2">${g}</div><div class="segs">${list.map(([n,l,tz])=>`<button type="button" class="chip plain" data-city="${n}" data-lon="${l}" data-tz="${tz}" aria-pressed="${S.profile.place&&S.profile.place.n===n}">${n}</button>`).join('')}</div>`).join('')+
      `<div class="acts"><button type="button" class="btn sm" data-clear>清除出生地</button><button type="button" class="btn sm" data-other>其他地点</button></div>`;
  openBS(`<div class="bs-title"><h3>出生地</h3><span>选最近的城市即可</span></div><div id="plBody"></div><p class="ask">列表里的城市按当地历史时区（含夏令时）自动换算。</p>`,c=>{
    const pb=c.querySelector('#plBody');const re=()=>{pb.innerHTML=body()};re();
    c.onclick=e=>{const b=e.target.closest('button');if(!b)return;
      if(b.dataset.city){clack(0,.08);const v={n:b.dataset.city,lon:+b.dataset.lon,tz:b.dataset.tz};setTimeout(()=>{closeBS();onPick(v)},120);return}
      if(b.hasAttribute('data-other')){other=true;re();return}
      if(b.hasAttribute('data-back')){other=false;re();return}
      if(b.hasAttribute('data-clear')){closeBS();onPick(null);return}
      if(b.hasAttribute('data-ok')){const lon=parseFloat(c.querySelector('#plLon').value),off=parseFloat(c.querySelector('#plOff').value);
        if(!(lon>=-180&&lon<=180)||!(off>=-12&&off<=14)){toast('经度 -180~180，时差 -12~14');return}
        closeBS();onPick({n:c.querySelector('#plName').value.trim()||`经度${lon}`,lon,off})}}});
}
/* ---------- custom add form ---------- */
function addForm(host,kind,onDone){
  host.querySelector('.addf')?.remove();
  const f=document.createElement('div');f.className='addf';
  let icon=kind==='mood'?'face':'rainbow',color=CUSTOM_COLORS[6],name='';
  const icons=kind==='mood'?['face','heart','star','spark','music','leaf','moon','drop']:['rainbow','thunder','spark','moon','star','drop','leaf','heart'];
  const draw=()=>{f.innerHTML=`<input type="text" class="tin" maxlength="5" placeholder="${kind==='mood'?'新心情，比如：想家':'新天气，比如：彩虹'}" value="${esc(name)}">
    <div class="icopick">${icons.map(k=>`<button type="button" data-i="${k}" aria-pressed="${k===icon}" aria-label="图标">${sv(EXTRA_ICONS[k])}</button>`).join('')}</div>
    ${kind==='mood'?`<div class="colpick">${CUSTOM_COLORS.map(c=>`<button type="button" data-c="${c}" style="background:${c}" aria-pressed="${c===color}" aria-label="签头颜色"></button>`).join('')}</div>`:''}
    <div class="bar"><button type="button" class="btn sm" data-x>取消</button><button type="button" class="btn sm primary" data-ok>添加</button></div>`;
    f.querySelector('input').oninput=e=>name=e.target.value};
  draw();host.appendChild(f);f.querySelector('input').focus();
  f.addEventListener('click',e=>{e.stopPropagation();const b=e.target.closest('button');if(!b)return;
    if(b.dataset.i){icon=b.dataset.i;draw()}
    else if(b.dataset.c){color=b.dataset.c;draw()}
    else if(b.hasAttribute('data-x'))f.remove();
    else if(b.hasAttribute('data-ok')){const t=name.trim();if(!t){const i=f.querySelector('input');i.classList.remove('shake');void i.offsetWidth;i.classList.add('shake');return}
      const k='c_'+Date.now().toString(36);(kind==='mood'?S.customMoods:S.customWeather).push(kind==='mood'?{k,t,icon,color}:{k,t,icon});saveS();f.remove();toast('加好了：'+t);onDone(k)}});
}

/* ---------- filter panel ---------- */
function chipRow(el,label,dict,get,set,kind){
  el.innerHTML=`<span class="lab">${label}</span><button class="chip plain" data-k="" aria-pressed="${!get()}">全部</button>`+
   Object.entries(dict).map(([k,v])=>`<button class="chip" data-k="${k}" aria-pressed="${get()===k}">${sv(v.d)}${esc(v.t)}</button>`).join('')+
   `<button class="chip add" data-add aria-label="自定义">${PLUS}</button>`;
  el.onclick=e=>{const b=e.target.closest('.chip');if(!b||busy)return;
    if(b.hasAttribute('data-add')){addForm($('#fPanel'),kind,()=>renderFilters());return}
    set(b.dataset.k||null);renderFilters();clack(0,.08);renderCup(true)};
}
function renderFilters(){
  const M=MOODS(),W=WEATHER();
  $('#moodRow').hidden=$('#weatherRow').hidden=mode!=='diary';$('#oracleRow').hidden=mode!=='oracle';$('#quoteRow').hidden=$('#quoteRow2').hidden=mode!=='quote';
  renderQuoteRows();
  chipRow($('#moodRow'),'心情',M,()=>filters.mood,v=>filters.mood=v,'mood');
  chipRow($('#weatherRow'),'天气',W,()=>filters.weather,v=>filters.weather=v,'weather');
  $('#oracleRow').innerHTML=Object.entries(METHODS).map(([k,m])=>`<button class="mopt" data-k="${k}" aria-pressed="${S.method===k}"><b>${m.n}</b><span>${m.need}</span></button>`).join('');
  $('#oracleRow').onclick=e=>{const b=e.target.closest('.mopt');if(!b||busy||b.dataset.k===S.method)return;setMethod(b.dataset.k)};
  if(mode==='diary'){$('#fLab').textContent='筛选';$('#fSum').textContent=(filters.mood&&M[filters.mood]?M[filters.mood].t:'全部心情')+' · '+(filters.weather&&W[filters.weather]?W[filters.weather].t:'全部天气')}
  else if(mode==='oracle'){$('#fLab').textContent='签种';$('#fSum').textContent=METHODS[S.method].n}
  else{$('#fLab').textContent='筛选';$('#fSum').textContent=(qf.cat?QCAT[qf.cat]:'全部心情')+' · '+(qf.jie==='today'?'应景':qf.jie||'不限时令')}
}
async function setMethod(k){S.method=k;saveS();renderFilters();closeFilter();clack(0,.1);await restick()}
function closeFilter(){const p=$('#fPanel');p.hidden=true;$('#fBtn').setAttribute('aria-expanded','false');p.querySelector('.addf')?.remove()}
$('#fBtn').onclick=()=>{const p=$('#fPanel');if(!p.hidden){closeFilter();return}p.hidden=false;$('#fBtn').setAttribute('aria-expanded','true');
  p.animate([{opacity:0,transform:'translateY(-6px) scale(.98)'},{opacity:1,transform:'none'}],{duration:200,easing:'ease-out'})};
document.addEventListener('pointerdown',e=>{if(!$('#fPanel').hidden&&!e.target.closest('.fbar'))closeFilter()});
const pool=()=>entries.filter(e=>(!filters.mood||e.moods.includes(filters.mood))&&(!filters.weather||e.weather===filters.weather));

/* ---------- cup: render, rain, swap ---------- */
const cup=$('#cup');
function hintHTML(){ if(mode==='quote'){const n=qPool().length,sn=seasonNow();return n?`${qf.jie==='today'?`应景 · ${sn.label} · `:qf.jie?`${qf.jie} · `:''}签筒里 <b>${n}</b> 句 · 今天抽了 <b>${drawn.n}</b> 支 · 点一下摇签`:''}
  if(mode==='oracle') return `${METHODS[S.method].n} · 今天抽了 <b>${drawn.n}</b> 支 · 点签筒起课`;
  const n=pool().length; return n?`签筒里 <b>${n}</b> 支 · 今天抽了 <b>${drawn.n}</b> 支 · 点一下摇签`:'' }
function renderCup(animate){
  const box=$('#sticks'); box.innerHTML='';
  let show;
  if(mode==='oracle'){show=Array.from({length:13},(_,i)=>({id:'o'+i,_tip:METHODS[S.method].tip}));$('#emptyCup').hidden=true}
  else if(mode==='quote'){const p=qPool();$('#emptyCup').hidden=p.length>0;$('#emptyCup').innerHTML='这个组合还没有句子<br>换个心情试试';show=p.slice().sort(()=>Math.random()-.5).slice(0,13).map(q=>({id:q.id,_tip:QTIP[q.src]}))}
  else{const p=pool();$('#emptyCup').hidden=p.length>0;$('#emptyCup').innerHTML='这个组合还没有日记<br>换个心情试试';show=p.slice().sort(()=>Math.random()-.5).slice(0,13);
    if(pendingDrop&&p.find(e=>e.id===pendingDrop)&&!show.find(e=>e.id===pendingDrop))show[0]=p.find(e=>e.id===pendingDrop)}
  const n=show.length;
  show.forEach((e,i)=>{
    const s=document.createElement('div');s.className='stick';
    const x=n>1?-46+92*(i/(n-1)):0, r=(x/46)*9+(Math.random()*4-2), h=172+Math.random()*28;
    s.style.left=(80+x)+'px';s.style.height=h+'px';s.style.setProperty('--tip',e._tip||tipOf(e));
    s.style.transform=`rotate(${r}deg)`;s.dataset.r=r;s.dataset.id=e.id;box.appendChild(s);
    if(animate) s.animate([{transform:`translateY(40px) rotate(${r}deg)`,opacity:0},{transform:`translateY(-6px) rotate(${r}deg)`,opacity:1,offset:.7},{transform:`rotate(${r}deg)`}],{duration:380*T,delay:i*22*T,easing:'ease-out',fill:'backwards'});
  });
  $('#hint').innerHTML=hintHTML();
}
async function flyOut(){const ss=[...document.querySelectorAll('.stick')];
  await Promise.all(ss.map((s,i)=>{const r=+s.dataset.r;return s.animate([{transform:`rotate(${r}deg)`,opacity:1},{transform:`translateY(-30px) rotate(${r}deg)`,opacity:1,offset:.25},{transform:`translateY(-${260+Math.random()*120}px) rotate(${r+(Math.random()*80-40)}deg)`,opacity:0}],{duration:420*T,delay:i*18*T,easing:'cubic-bezier(.4,0,.8,.4)',fill:'forwards'}).finished.catch(()=>{})}))}
async function rain(){
  const ss=[...document.querySelectorAll('.stick')];const step=55*T,dur=560*T;
  const ps=ss.map((s,i)=>{const r=+s.dataset.r,k=(Math.random()*50-25);
    return s.animate([{transform:`translateY(-380px) rotate(${r+k}deg)`,opacity:0},{opacity:1,offset:.12},{transform:`translateY(14px) rotate(${r}deg)`,offset:.72},{transform:`translateY(-10px) rotate(${r-k*.08}deg)`,offset:.86},{transform:`rotate(${r}deg)`}],{duration:dur,delay:i*step,easing:'cubic-bezier(.5,0,.75,0)',fill:'backwards'}).finished.catch(()=>{})});
  ss.forEach((s,i)=>clack((i*step+dur*.72)/1000,.08+Math.random()*.08));
  setTimeout(()=>{buzz(15);cup.animate([{transform:'none'},{transform:'translateY(5px) scale(1.04,.95)'},{transform:'none'}],{duration:260,easing:'ease-out'})},ss.length*step+dur*.6);
  await Promise.all(ps)}
async function restick(){busy=true;try{await flyOut();renderCup(false);await rain()}finally{busy=false}}
function idle(){ if(busy||$('#v-draw').hidden||!$('#ov').hidden||!$('#bs').hidden)return; const ss=[...document.querySelectorAll('.stick')]; if(!ss.length)return; const s=rnd(ss),r=+s.dataset.r;
  s.animate([{transform:`rotate(${r}deg)`},{transform:`translateY(-10px) rotate(${r+3}deg)`},{transform:`translateY(-2px) rotate(${r-2}deg)`},{transform:`rotate(${r}deg)`}],{duration:620,easing:'ease-in-out'});}
if(!RM) setInterval(idle,4000);

function setMode(m){mode=m;$('#seg').dataset.m=m;$('#seg').querySelectorAll('button').forEach(x=>x.setAttribute('aria-selected',x.dataset.m===m));cup.setAttribute('aria-label',m==='diary'?'摇签筒，抽一篇日记':m==='oracle'?'摇签筒，起课':'摇签筒，抽一句好句')}
/* ---- 签筒切换：3D 转盘 ---- */
const MODES=['diary','oracle','quote'];
const nbMode=d=>MODES[(MODES.indexOf(mode)+d+3)%3];
const cfMain=$('#cfMain'),cfPrev=$('#cfPrev'),cfNext=$('#cfNext');
function ghostHTML(m){const p=cupParts(styleOf(m));return `<div class="cup-wrap"><svg class="cup-back" viewBox="0 0 160 150" aria-hidden="true">${p.back}</svg><div class="sticks"></div><svg class="cup-front" viewBox="0 0 160 150" aria-hidden="true">${p.front}</svg><span class="cup-shadow"></span></div>`}
function prepGhosts(){cfPrev.innerHTML=ghostHTML(nbMode(-1));cfNext.innerHTML=ghostHTML(nbMode(1))}
function layout(p){[[cfPrev,-1],[cfMain,0],[cfNext,1]].forEach(([el,d])=>{const e=d+p,a=Math.abs(e);
  el.style.transform=a<.001?'':`translateX(${e*112}px) translateZ(${-a*180}px) rotateY(${-e*58}deg)`;
  el.style.opacity=d===0?Math.max(0,1-a*.85):Math.max(0,Math.min(1,(1-a)*1.25));el.style.zIndex=String(10-Math.round(a*5))})}
const ease=(k,t)=>k==='back'?1+2.2*Math.pow(t-1,3)+1.2*Math.pow(t-1,2):1-Math.pow(1-t,3);
function tweenLayout(a,b,dur,k){return new Promise(res=>{const t0=performance.now(),D=Math.max(1,dur*T);const step=now=>{const t=Math.min(1,(now-t0)/D);layout(a+(b-a)*ease(k,t));if(t<1)requestAnimationFrame(step);else res()};requestAnimationFrame(step)})}
async function goMode(dir,from=0){if(busy&&from===0)return;busy=true;try{closeFilter();release();prepGhosts();swish();buzz(10);clack(.05,.1);
  await tweenLayout(from,-dir,560,'back');
  setMode(nbMode(dir));applyCup();$('#sticks').innerHTML='';renderFilters();layout(0);prepGhosts();
  renderCup(false);await rain()}finally{busy=false}}
$('#seg').onclick=e=>{const b=e.target.closest('button');if(!b||busy||b.dataset.m===mode)return;const d=(MODES.indexOf(b.dataset.m)-MODES.indexOf(mode)+3)%3;goMode(d===1?1:-1)};
let sw=null,swiped=false;const area=$('.cup-area');
area.addEventListener('pointerdown',e=>{if(busy||!$('#ov').hidden||e.button>0)return;sw={x:e.clientX,y:e.clientY,t:performance.now(),on:false,p:0,id:e.pointerId}});
area.addEventListener('pointermove',e=>{if(!sw)return;const dx=e.clientX-sw.x,dy=e.clientY-sw.y;
  if(!sw.on){if(Math.abs(dx)>12&&Math.abs(dx)>Math.abs(dy)*1.3){sw.on=true;busy=true;release();prepGhosts();try{area.setPointerCapture(sw.id)}catch(_){}}else return}
  sw.p=Math.max(-1.15,Math.min(1.15,dx/210));layout(sw.p)});
const endSw=async e=>{if(!sw)return;const s=sw;sw=null;if(!s.on)return;swiped=true;setTimeout(()=>swiped=false,80);
  const v=(e.clientX-s.x)/Math.max(1,performance.now()-s.t);
  if(Math.abs(s.p)>.28||Math.abs(v)>.55){await goMode(s.p<0?1:-1,s.p)}else{await tweenLayout(s.p,0,300,'out');busy=false}};
area.addEventListener('pointerup',endSw);area.addEventListener('pointercancel',endSw);

const canDraw=()=>mode==='oracle'||(mode==='quote'?qPool().length>0:pool().length>0);
cup.addEventListener('pointerdown',()=>{ if(busy||!canDraw())return; ac(); cup.animate([{transform:'none'},{transform:'translateY(5px) scale(1.04,.95)'}],{duration:120,easing:'ease-out',fill:'forwards'});
  document.querySelectorAll('.stick').forEach(s=>s.animate([{transform:`rotate(${s.dataset.r}deg)`},{transform:`translateY(-8px) rotate(${s.dataset.r}deg)`}],{duration:140,fill:'forwards',easing:'ease-out'}));});
const release=()=>{ if(busy)return; cup.getAnimations().forEach(a=>a.cancel()); document.querySelectorAll('.stick').forEach(s=>s.getAnimations().forEach(a=>a.cancel())); };
cup.addEventListener('pointerleave',release);cup.addEventListener('pointercancel',release);
cup.addEventListener('click',()=>{ if(busy||swiped)return; if(mode==='oracle'){release();askOracle()} else if(mode==='quote')drawQuote(); else drawDiary() });

function drawDiary(){
  const p=pool(); if(!p.length)return;
  let cand=p.filter(e=>!recent.includes(e.id)); if(!cand.length)cand=p;
  const chosen=rnd(cand); recent.push(chosen.id); recent=recent.slice(-Math.min(3,Math.max(0,p.length-1)));
  const sticks=[...document.querySelectorAll('.stick')];let el=sticks.find(s=>s.dataset.id===chosen.id); if(!el){el=rnd(sticks);el.dataset.id=chosen.id}
  shakeAndOpen(el,tipOf(chosen),{html:cardHTML(chosen),stamp:stampFor(chosen)});
}
/* ---------- 好句签 ---------- */
const QCAT={happy:'同乐',calm:'静好',down:'打气',angry:'消气',moved:'温柔',tired:'歇一歇'};
const QSRC={gu:['古典',.6],xian:['现代',.2],wai:['外国',.2]};
const QTIP={gu:'var(--accent)',xian:'var(--blush-2)',wai:'var(--line-strong)'};
let qf=Object.assign({cat:null,jie:null},ls.get(KEY+'.qf')||{});if(qf.season){qf.jie='today';delete qf.season}
const JIE_CHIPS=['春','夏','秋','冬','春节','元宵','清明','端午','七夕','中秋','重阳','冬至'];
const QS=()=>window.QUOTES||[];
const JQ_ORDER=['立春','雨水','惊蛰','春分','清明','谷雨','立夏','小满','芒种','夏至','小暑','大暑','立秋','处暑','白露','秋分','寒露','霜降','立冬','小雪','大雪','冬至','小寒','大寒'];
const JQ_PY={DONG_ZHI:'冬至',XIAO_HAN:'小寒',DA_HAN:'大寒',LI_CHUN:'立春',YU_SHUI:'雨水',JING_ZHE:'惊蛰'};
function seasonNow(){const L=nowLunar(),S0=X.Solar.fromDate(new Date());
  let jq=L.getJieQi()||(L.getPrevJieQi(true)?L.getPrevJieQi(true).getName():'');jq=JQ_PY[jq]||jq;
  const i=JQ_ORDER.indexOf(jq),season=i<0?'':['春','夏','秋','冬'][Math.floor(i/6)];
  const fest=[...L.getFestivals(),...S0.getFestivals()].map(x=>x.replace(/节$/,''));
  if(L.getJieQi()==='清明'||jq==='清明')fest.push('清明');
  return{jq,season,fest,label:[...fest,jq].filter(Boolean).join(' · ')||season}}
function qPool(){let p=QS().filter(q=>!qf.cat||q.cat.includes(qf.cat));
  if(qf.jie&&qf.jie!=='today'){const j=qf.jie,si=['春','夏','秋','冬'].indexOf(j);p=p.filter(q=>(q.jie||[]).some(x=>x===j||(si>=0&&Math.floor(JQ_ORDER.indexOf(x)/6)===si&&JQ_ORDER.indexOf(x)>=0)))}
  else if(qf.jie==='today'){const sn=seasonNow(),hit=q=>(q.jie||[]),strong=p.filter(q=>hit(q).some(j=>sn.fest.includes(j)||j===sn.jq));const ids=new Set(strong.map(q=>q.id));p=[...strong,...p.filter(q=>!ids.has(q.id)&&hit(q).includes(sn.season))]}
  return p}
function renderQuoteRows(){const r=$('#quoteRow'),r2=$('#quoteRow2');if(!r)return;const sn=seasonNow();
  r.innerHTML=`<span class="lab">心情</span><button class="chip plain" data-c="" aria-pressed="${!qf.cat}">全部</button>`+Object.entries(QCAT).map(([k,t])=>`<button class="chip plain" data-c="${k}" aria-pressed="${qf.cat===k}">${t}</button>`).join('');
  r2.innerHTML=`<span class="lab">时令</span><button class="chip plain" data-s="" aria-pressed="${!qf.jie}">不限</button><button class="chip plain" data-s="today" aria-pressed="${qf.jie==='today'}">应景 · ${esc(sn.label)}</button>`+JIE_CHIPS.map(j=>`<button class="chip plain" data-s="${j}" aria-pressed="${qf.jie===j}">${j}</button>`).join('');
  const on=e=>{const b=e.target.closest('.chip');if(!b||busy)return;if(b.dataset.c!=null)qf.cat=b.dataset.c||null;if(b.dataset.s!=null)qf.jie=b.dataset.s||null;ls.set(KEY+'.qf',qf);renderFilters();clack(0,.08);renderCup(true)};
  r.onclick=on;r2.onclick=on}
let qRecent=[];
function drawQuote(){const p=qPool();if(!p.length)return;
  const bySrc={};p.forEach(q=>(bySrc[q.src]=bySrc[q.src]||[]).push(q));
  const srcs=Object.keys(bySrc),tot=srcs.reduce((a,k)=>a+QSRC[k][1],0);let r=Math.random()*tot,src=srcs[0];for(const k of srcs){r-=QSRC[k][1];if(r<=0){src=k;break}}
  let cand=bySrc[src].filter(q=>!qRecent.includes(q.id));if(!cand.length)cand=bySrc[src];
  const q=rnd(cand);qRecent.push(q.id);qRecent=qRecent.slice(-Math.min(12,Math.max(0,p.length-1)));
  const sticks=[...document.querySelectorAll('.stick')];let el=sticks.find(s=>s.dataset.id===q.id);if(!el){el=rnd(sticks);el.dataset.id=q.id}
  shakeAndOpen(el,QTIP[q.src],{html:quoteHTML(q),stamp:'句'})}
const strip=t=>t.replace(/[，。！？；：、“”‘’「」『』《》（）\s,.!?;:—…·]/g,'');
function markLine(line,q){const sl=strip(line),sq=strip(q.line);if(!sl)return '';
  if(line.includes(q.line))return esc(line).replace(esc(q.line),`<mark>${esc(q.line)}</mark>`);
  if(sl.length>2&&sq.includes(sl))return `<mark>${esc(line)}</mark>`;return esc(line)}
const fullBox=(lines,q,en)=>`<div class="qt-full${en?' en':''}">${lines.map(l=>l===''?'<p class="gap"></p>':`<p>${en?esc(l):markLine(l,q)}</p>`).join('')}</div>`;
function quoteHTML(q){const sn=seasonNow(),jie=(q.jie||[]).filter(j=>sn.fest.includes(j)||j===sn.jq);
  const by=q.src==='wai'?`${q.author}《${q.title}》`:`${q.era?`〔${q.era}〕`:''}${q.author}《${q.title}》`;
  const cats=q.cat.map(k=>QCAT[k]).join(' · ');
  return `<span class="tape"></span>
   <div class="o-head"><span class="o-title">好句签</span><span class="badge">${QSRC[q.src][0]} · ${cats}</span></div>
   <div class="qt-line">${esc(q.line)}</div>
   ${q.orig?`<div class="qt-orig">${esc(q.orig)}</div>`:''}
   <div class="qt-by">—— ${esc(by)}${jie.length?`<span class="qt-season">应景 · ${jie.join(' · ')}</span>`:''}</div>
   ${q.full?`<div class="sec"><h4>${q.src==='wai'?'全诗':'全文'}</h4>${fullBox(q.full,q)}${q.origFull?fullBox(q.origFull,q,true):''}</div>`:''}
   ${!q.full&&q.ctx?`<div class="sec"><h4>上下文</h4><div class="qt-full"><p>${markLine(q.ctx,q)}</p></div>${q.ctxOrig?fullBox(q.ctxOrig,q,true):''}</div>`:''}
   <div class="sec"><h4>释义</h4><p class="qt-yi">${esc(q.yi)}</p>${q.note?`<p class="gloss" style="margin:6px 0 0">异文：${esc(q.note)}</p>`:''}</div>
   ${q.jie&&q.jie.length?`<div class="ask">时令：${q.jie.join('、')}</div>`:''}
   <div class="n-foot"><span>${q.src==='wai'?'原文已进入公有领域，中文为本程序自译':q.src==='xian'?'作者去世已逾 50 年，作品在中国大陆已进入公有领域':'全文以 chinese-poetry 为底本校字'}${q.check?`；核对：${esc(q.check)}`:''}</span><span class="badge">好句</span></div>`}

async function shakeAndOpen(el,tip,content){
  if(busy)return; busy=true;
  cup.getAnimations().forEach(a=>a.cancel());
  document.querySelectorAll('.stick').forEach(s=>s.getAnimations().forEach(a=>a.cancel()));
  const sticks=[...document.querySelectorAll('.stick')];
  el.style.setProperty('--tip',tip);
  await cup.animate([{transform:'translateY(5px) scale(1.04,.95)'},{transform:'translateY(-6px) scale(.97,1.04)'}],{duration:130*T,easing:'cubic-bezier(.3,1.6,.6,1)'}).finished.catch(()=>{});
  const D=1050*T;
  const sh=cup.animate([0,-14,12,-11,9,-8,6,-4,2,0].map((a,i)=>({transform:`translateY(${i%2?-4:0}px) rotate(${a}deg)`})),{duration:D,easing:'ease-in-out'});
  sticks.forEach(s=>{const r=+s.dataset.r,k=[];for(let i=0;i<9;i++)k.push({transform:`translateY(${i%2?-(6+Math.random()*(s===el?30:16)):0}px) rotate(${r+(Math.random()*8-4)}deg)`});k.push({transform:`rotate(${r}deg)`});s.animate(k,{duration:D,delay:Math.random()*60,easing:'ease-in-out'})});
  for(let i=0;i<14;i++)clack(i*D/1000/14+Math.random()*.04,.12+Math.random()*.14);
  buzz([18,50,14,60,18,50,12,70,24]);
  await sh.finished.catch(()=>{});
  pop(); buzz(30);
  const app=$('#app').getBoundingClientRect(), r=el.getBoundingClientRect(), H=el.offsetHeight, ang=+el.dataset.r;
  const ov=$('#ov'); ov.hidden=false; $('#stage').innerHTML=''; $('#nact').innerHTML='';
  $('#scrim').animate([{opacity:0},{opacity:1}],{duration:420*T,fill:'both'});
  const fly=document.createElement('div'); fly.className='fly';
  fly.style.height=H+'px'; fly.style.left=(r.left+r.width/2-app.left-5.5)+'px'; fly.style.top=(r.top+r.height/2-app.top-H/2)+'px';
  fly.style.setProperty('--tip',tip); ov.appendChild(fly); el.style.visibility='hidden';
  cup.animate([{transform:'none'},{transform:'translateY(6px) scale(1.03,.96)'},{transform:'none'}],{duration:300*T,easing:'ease-out'});
  const cx=app.width/2-(r.left+r.width/2-app.left), cy=(app.height-90)/2-(r.top+r.height/2-app.top);
  await fly.animate([
    {transform:`translate(0,0) rotate(${ang}deg)`,easing:'cubic-bezier(.2,.9,.3,1.25)'},
    {transform:`translate(0,-130px) rotate(${-ang*.6}deg)`,offset:.42,easing:'cubic-bezier(.65,0,.35,1)'},
    {transform:`translate(${cx}px,${cy}px) rotate(90deg) scale(1.25)`}
  ],{duration:820*T,fill:'forwards'}).finished.catch(()=>{});
  fly.animate([{opacity:1},{opacity:0,transform:`translate(${cx}px,${cy}px) rotate(90deg) scale(1.5,.6)`}],{duration:220*T,fill:'forwards'}).onfinish=()=>fly.remove();
  drawn.n++; ls.set(KEY+'.today',drawn);
  busy=false;
  await openNote({...content,stickEl:el});
}

/* ---------- diary card ---------- */
function stampFor(e){const M=MOODS();const k=(e.moods||[]).find(k=>M[k]);return k?sv(M[k].d):'记'}
function cardHTML(e){
  const f=fmt(e.date),M=MOODS(),W=WEATHER(), w=W[e.weather]||W.sunny, ms=(e.moods||[]).filter(k=>M[k]);
  const tags=`<span class="tag">${sv(w.d)}${esc(w.t)}</span>`+
    (ms.length?ms.map(k=>`<span class="tag" style="background:color-mix(in srgb, ${M[k].c} 32%, var(--paper))">${sv(M[k].d)}${esc(M[k].t)}</span>`).join(''):'<span class="tag none">心情 · 无</span>');
  const td=e.todos||[];
  const todos=td.length?`<div class="n-sub">这一天做了 · ${td.filter(t=>t.done).length}/${td.length}</div><ul class="n-todo">${td.map(t=>`<li class="${t.done?'':'undone'}"><i>${t.done?'✓':'○'}</i><span class="nm">${esc(t.name)}</span><span class="mt">${[t.type,t.time,fmtMin(t.minutes)].filter(Boolean).map(esc).join(' · ')}</span></li>`).join('')}</ul>`:'';
  return `<span class="tape"></span>
   <div class="n-date"><span class="md">${f.md}</span><span class="yw">${f.y} 年 · 周${f.wd} · ${lunarText(e.date)}</span></div>
   <div class="n-tags">${tags}</div>
   ${e.text?`<p class="n-text">${esc(e.text)}</p>`:''}${todos}
   <div class="n-foot"><span class="ago">${ago(e.date)}</span><span style="display:flex;gap:4px">${td.length?'<span class="badge">每日List</span>':''}${e.sample?'<span class="badge">示例</span>':''}</span></div>`;
}

/* =====================================================================
   玄学签：每种方法都按固定的起课规则计算，不用随机数
   ===================================================================== */
const GAN='甲乙丙丁戊己庚辛壬癸',ZHI='子丑寅卯辰巳午未申酉戌亥';
const WXG={甲:'木',乙:'木',丙:'火',丁:'火',戊:'土',己:'土',庚:'金',辛:'金',壬:'水',癸:'水'};
const WXZ={子:'水',丑:'土',寅:'木',卯:'木',辰:'土',巳:'火',午:'火',未:'土',申:'金',酉:'金',戌:'土',亥:'水'};
const SHENG={木:'火',火:'土',土:'金',金:'水',水:'木'},KE={木:'土',土:'水',水:'火',火:'金',金:'木'};
const isYang=g=>GAN.indexOf(g)%2===0;
function shishen(dm,g){const a=WXG[dm],b=WXG[g],same=isYang(dm)===isYang(g);
  if(a===b)return same?'比肩':'劫财';if(SHENG[a]===b)return same?'食神':'伤官';if(KE[a]===b)return same?'偏财':'正财';if(KE[b]===a)return same?'七杀':'正官';return same?'偏印':'正印'}
const SHISHEN_DESC={比肩:'与日主同五行、同阴阳。通行释义：自我、同辈、并肩之力。',劫财:'与日主同五行、异阴阳。通行释义：竞争、分夺、人情花费。',食神:'日主所生、同阴阳。通行释义：表达、口福、闲适。',伤官:'日主所生、异阴阳。通行释义：才华外露、锋芒、变动。',偏财:'日主所克、同阴阳。通行释义：流动之财、机遇、交际。',正财:'日主所克、异阴阳。通行释义：稳定之财、勤勉、务实。',七杀:'克日主、同阴阳。通行释义：压力、挑战、魄力。',正官:'克日主、异阴阳。通行释义：规矩、名誉、责任。',偏印:'生日主、同阴阳。通行释义：偏门学问、独思、灵感。',正印:'生日主、异阴阳。通行释义：庇护、学习、长辈助力。'};
const CHONG={子:'午',午:'子',丑:'未',未:'丑',寅:'申',申:'寅',卯:'酉',酉:'卯',辰:'戌',戌:'辰',巳:'亥',亥:'巳'};
const HE6={子:'丑',丑:'子',寅:'亥',亥:'寅',卯:'戌',戌:'卯',辰:'酉',酉:'辰',巳:'申',申:'巳',午:'未',未:'午'};
const nowLunar=()=>X.Solar.fromDate(new Date()).getLunar();
const lunarStamp=L=>`农历${L.getMonthInChinese()}月${L.getDayInChinese()} · ${L.getTimeZhi()}时`;
const qline=(t,c)=>`<div class="quote">${t}${c?`<cite>${c}</cite>`:''}</div>`;
const lvl=(t,k)=>k==='bad'&&S.gentle!==false&&t==='凶'?'':`<span class="lvl ${k==='bad'&&S.gentle!==false?'soft':k}">${t}</span>`;

/* ---- 七级吉凶 + 怎么办 ---- */
const GRADES=['大吉','中吉','小吉','平','小凶','中凶','大凶'],GENTLE={4:'宜缓',5:'宜慎',6:'宜守'};
const gentleOn=()=>S.gentle!==false;
const gName=g=>gentleOn()&&g>=4?GENTLE[g]:GRADES[g];
const gKind=g=>g<=2?'good':g===3?'mid':gentleOn()?'soft':'bad';
const MED='身体的事请以医生的意见为准，这里只是参考；不舒服的话，可以早点去看看。';
const BUGUO=['无咎者，善补过也。','《周易·系辞上》','无咎：没有过错带来的灾祸。意思是：能及时补救过失，就不会有咎害。'];
function gradeHTML(g,basis){
  return `<div class="grade ${gKind(g)}"><div class="gtop"><span class="gl">${gName(g)}</span><span class="gdots" aria-label="七级中第${g+1}级">${GRADES.map((_,i)=>`<i class="${i===g?'on':''}"></i>`).join('')}</span></div><div class="gb">${basis}<span class="gsrc">这是几项古法合看的参考，不是定论；人和事都比卦象复杂，最后怎么做，还是由你来定。</span></div></div>`}
function adviceHTML(g,classic,tips,note){
  const qs=classic.map(c=>qline(c[0],c[1])+(c[2]?`<p class="gloss">${c[2]}</p>`:'')).join('');
  return `<div class="sec advice"><h4>${g>=4?'可以怎么做':'怎么用好'}</h4>${qs}${note?`<p class="gloss">${note}</p>`:''}<div class="tips"><span class="ttag">今人建议</span><ul>${tips.map(t=>`<li>${t}</li>`).join('')}</ul></div></div>`}
/* 温和模式下，偏凶的签把「怎么办」放在最前 */
const arrange=(g,plain,adv)=>gentleOn()&&g>=4?adv+plain:plain+adv;
function gradeDesc(){return '七级：大吉、中吉、小吉、平、小凶、中凶、大凶。'+(gentleOn()?'温和显示下，小凶、中凶、大凶写作宜缓、宜慎、宜守。':'')}

/* ---- 大白话 ---- */
const plainBox=t=>`<div class="plain">${t}</div>`;
const XLR_PLAIN=[
 {综合:'大安是六宫里最稳的一宫，事事顺当。「将军回田野」是收兵归田之象，宜守成、按原计划稳稳地办，不宜冒进；最后一句提醒细节还要再仔细推敲。',失物:'东西没丢远，多半就在附近。',行人:'等的人还没动身。',求财:'想谋的事，往东边去求。',疾病:'病情不碍事。',官事:'歌诀没专门讲官事；大安主平稳，可以按平稳来看。',家宅:'家里平安。'},
 {综合:'事情拖拖拉拉、一时难成，眼下还看不清楚。也提醒留意口舌是非，人际上平平。',失物:'往南边找能找到；要追讨的东西，抓紧去讨才能如愿。',行人:'出门的人还没踏上归程。',求财:'所谋之事还不明朗，一时难成。',疾病:'歌诀没专门讲疾病；留连主拖延，事情容易反复。',官事:'公事官司宜放慢一些，不必着急。',家宅:'歌诀没专门讲家宅；人事平平。'},
 {综合:'喜事很快就到，事情进展快、顺利。',失物:'往申、未、午方（大致西南到正南）找，可以在路上问问人。',行人:'出门的人有消息了。',求财:'求财往南边去。',疾病:'病人没有大碍。',官事:'官事有福气照应。',家宅:'家宅、家畜都吉。'},
 {综合:'主口舌争执，古人提醒多留意官非和是非，家里也容易有些小状况，说话可以多留心。',失物:'宜早点去讨、去找，拖久了可能更难找回。',行人:'出门的人路上会受些惊吓。',求财:'歌诀没专门讲求财；赤口主口舌是非。',疾病:'原句是「病者出西方」，并提醒防染时疫。',官事:'和官方、机构打交道的事，可以多留意分寸。',家宅:'家里鸡犬（一作六畜）作怪，不太安宁。'},
 {综合:'很吉利，事情好商量，会有女性来报喜，凡事和和气气就能成。',失物:'往西南（坤方）找。',行人:'出门的人马上就到。',求财:'交易买卖很顺。',疾病:'原句是「病者祈上苍」，病人宜祈福求安。',官事:'歌诀没专门讲官事；小吉主凡事和合。',家宅:'歌诀没专门讲家宅；小吉主凡事和合。'},
 {综合:'不吉，事情容易落空；和女性相关的事多别扭不顺。',失物:'东西不容易找回来。',行人:'出门的人路上可能有灾。',求财:'求财没有收益。',疾病:'病人像遇到暗中作祟，经过禳解可以安康。',官事:'官事有刑伤。',家宅:'歌诀没专门讲家宅；空亡主落空不祥。'}];
const GUA_PLAIN={"乾":["杂卦","乾刚","刚健有力"],"坤":["杂卦","坤柔","柔顺承载"],"屯":["序卦","屯者，物之始生也","万物初生，起步艰难"],"蒙":["序卦","蒙者，蒙也，物之稺也","尚在蒙昧，需要启蒙、学习"],"需":["杂卦","需，不进也","等待时机，暂不前进"],"讼":["杂卦","讼，不亲也","争执不和"],"师":["序卦","师者，众也","兴众用兵，靠众人和纪律"],"比":["序卦","比者，比也","亲近相辅"],"小畜":["杂卦","小畜，寡也","积蓄还少"],"履":["杂卦","履，不处也","一步步践行，不停留，也要小心"],"泰":["序卦","泰者，通也","通泰顺畅"],"否":["杂卦","否泰，反其类也","闭塞不通，与泰相反"],"同人":["杂卦","同人，亲也","与人同心亲近"],"大有":["杂卦","大有，众也","所有丰盛"],"谦":["杂卦","谦轻","自处谦下"],"豫":["杂卦","豫怠也","安乐，也要防松懈"],"随":["杂卦","随，无故也","随从、顺应，不拘守旧故"],"蛊":["序卦","蛊者，事也","有事待整治"],"临":["序卦","临者，大也","居上临下、亲临其事"],"观":["杂卦","临观之义，或与或求","观察，也被人观看"],"噬嗑":["序卦","嗑者，合也","咬合，除去中间的阻隔"],"贲":["序卦","贲者，饰也","文饰装点"],"剥":["序卦","剥者，剥也","剥落衰败"],"复":["杂卦","复，反也","回返、重新开始"],"无妄":["杂卦","无妄，灾也","不妄为，防意外之灾"],"大畜":["杂卦","大畜，时也","大有积蓄，待时而用"],"颐":["杂卦","颐，养正也","颐养，养之以正"],"大过":["杂卦","大过，颠也","过度失衡"],"坎":["序卦","坎者，陷也","陷入险境"],"离":["序卦","离者，丽也","附着、依附"],"咸":["杂卦","咸，速也","彼此感应，来得快"],"恒":["序卦","恒者，久也","恒久"],"遯":["序卦","遯者，退也","退避"],"大壮":["杂卦","大壮则止","强盛之时宜知止"],"晋":["序卦","晋者，进也","上进"],"明夷":["序卦","夷者，伤也","光明受伤"],"家人":["杂卦","家人，内也","家内之道"],"睽":["序卦","睽者，乖也","乖离不合"],"蹇":["序卦","蹇者，难也","行路艰难"],"解":["序卦","解者，缓也","困难缓解"],"损":["杂卦","损益，盛衰之始也","减损"],"益":["杂卦","损益，盛衰之始也","增益"],"夬":["序卦","夬者，决也","决断"],"姤":["序卦","姤者，遇也","相遇"],"萃":["序卦","萃者，聚也","聚集"],"升":["序卦","聚而上者谓之升","逐步上升"],"困":["序卦","升而不已必困","困穷受限"],"井":["杂卦","井通","通达，养人不穷"],"革":["杂卦","革，去故也","去旧"],"鼎":["杂卦","鼎，取新也","取新"],"震":["序卦","震者，动也","震动"],"艮":["序卦","艮者，止也","止"],"渐":["序卦","渐者，进也","循序渐进"],"归妹":["杂卦","归妹，女之终也","女子出嫁之象"],"丰":["序卦","丰者，大也","盛大"],"旅":["杂卦","亲寡，旅也","在外漂泊，亲人少"],"巽":["序卦","巽者，入也","顺而能入"],"兑":["序卦","兑者，说也","喜悦"],"涣":["序卦","涣者，离也","离散"],"节":["杂卦","节，止也","节制"],"中孚":["杂卦","中孚，信也","诚信"],"小过":["杂卦","小过，过也","稍有过越"],"既济":["杂卦","既济，定也","事已定"],"未济":["序卦","物不可穷也","事未完成，还在路上"]};
const gp=n=>{const g=GUA_PLAIN[n];return g?`${g[2]}（《${g[0]}》：“${g[1]}”）`:""};
const TI_PLAIN={旺:'体卦在这个季节当令而旺，你这边底气足。',衰:'体卦在这个季节失令而衰，你这边力量偏弱，可以多给自己留些余地。',不旺不衰:'体卦在这个季节不旺不衰，底气一般。'};
const REL_PLAIN={体克用:'体克用：你能压得住所问之事，书上算吉。',用克体:'用克体：所问之事反过来压着你，书上算凶。',体生用:'体生用：你在往外付出、消耗，书上说有耗失之患。',用生体:'用生体：所问之事在帮你、给你助力，书上说有进益之喜。',体用比和:'体用比和：你和所问之事五行相同，书上说百事顺遂。'};
const LQ_PLAIN={官鬼:'压力、官事、病痛这类事',父母:'文书、长辈、房屋这类事',妻财:'钱财、收入这类事',子孙:'喜事、晚辈、化解烦忧这类事',兄弟:'同辈、竞争、花钱这类事'};
const JIANG_PLAIN={贵人:'有尊长贵人相助',腾蛇:'有惊扰、怪异之事',螣蛇:'有惊扰、怪异之事',朱雀:'有文书或口舌',六合:'有和合、交易之事',勾陈:'有纠缠、迟滞',青龙:'有财喜',天空:'虚而不实，防空口许诺',白虎:'防伤损、疾病',太常:'有吃喝、衣物、礼节之事',玄武:'防失窃、暗昧之事',太阴:'有隐秘、私下之事',天后:'有女性相助或恩泽'};
const SS_PLAIN={比肩:'今天的能量和你同类，适合靠自己、和同伴一起做事，也容易各自坚持己见。',劫财:'今天和你同类但阴阳相反，常说主竞争、分走资源，花钱和人情往来可以多留心。',食神:'今天是你“生出去”的力量，适合表达、享受、放松一下。',伤官:'今天也是你“生出去”的力量，但更锋利，想法多、表达欲强，说话可以多留意分寸。',偏财:'今天是你能掌控的财，偏向机会和人际带来的流动之财。',正财:'今天是你能掌控的财，偏向踏实工作换来的稳定收入，适合务实做事。',七杀:'今天的力量在克你，而且来势较猛，压力和挑战偏多，也是逼出魄力的时候。',正官:'今天的力量在约束你，讲规矩、讲责任，适合按章办事、维护名声。',偏印:'今天的力量在生扶你，偏向独自思考、钻研冷门的东西。',正印:'今天的力量在生扶你，像有人照顾、托底，适合学习、休整、向长辈请教。'};
const ZX_PLAIN={建:'建日，适合开始新事情、出行',除:'除日，适合除旧、打扫、治病',满:'满日，主丰满',平:'平日，各方面平平',定:'定日，适合定下事情、签约',执:'执日，适合执守、收拾整理',破:'破日，大事一般不宜办',危:'危日，凡事小心谨慎',成:'成日，诸事易成',收:'收日，适合收获、收账',开:'开日，适合开张、开始',闭:'闭日，宜收藏，不宜大动'};

/* ---- 小六壬 ---- */
const XLR=[
 {n:'大安',j:'吉',v:'大安事事昌，求谋在东方，失物去不远。宅舍保安康，行人身未动，病者主无妨，将军回田野，仔细更推详。',alt:'「求谋在东方」一作「求财在坤方」。'},
 {n:'留连',j:'凶',v:'留连事难成，求谋日未明，官事只宜缓。去者未回程，失物南方见，急讨方称心。更须防口舌，人事且平平。',alt:'「只宜缓」一作「凡宜缓」；「急讨方称心」一作「急讨方遂心」「急讨方心称」；「人事」一作「人口」。'},
 {n:'速喜',j:'吉',v:'速喜喜来临，求财向南行，失物申未午，逢人路上寻。官事有福德，病者无祸侵，田宅六畜吉，行人有音信。',alt:'「音信」一作「信音」。'},
 {n:'赤口',j:'凶',v:'赤口主口舌，官非切宜防，失物速速讨，行人有惊慌。鸡犬多作怪，病者出西方，更须防咒诅，恐怕染瘟殃。',alt:'「切宜防」一作「切要防」；「失物速速讨」一作「失物急去寻」；「鸡犬」一作「六畜」；「恐怕」一作「诚恐」。'},
 {n:'小吉',j:'吉',v:'小吉最吉昌，路上好商量，阴人来报喜。失物在坤方，行人立便至，交易甚是强，凡事皆和合，病者祈上苍。',alt:'「交易」一作「交关」；「祈上苍」一作「叩穹苍」。'},
 {n:'空亡',j:'凶',v:'空亡事不祥，阴人多乖张，求财无利益。行人有灾殃，失物寻不见，官事有刑伤，病人逢暗鬼，解禳保安康。',alt:'「解禳保安康」一作「析解可安康」。'}];
const XLR_WX=['木','土','火','金','水','土'];
/* 各宫对各类事的吉凶，取自歌诀原句；空串表示歌诀未专门讲，按本宫通论 */
const XLR_TOPIC=[
 {综合:[1,'大安事事昌'],失物:[1,'失物去不远'],行人:[0,'行人身未动'],求财:[1,'求谋在东方'],疾病:[1,'病者主无妨'],家宅:[1,'宅舍保安康']},
 {综合:[-1,'留连事难成'],失物:[1,'失物南方见'],行人:[-1,'去者未回程'],求财:[-1,'求谋日未明'],官事:[0,'官事只宜缓']},
 {综合:[1,'速喜喜来临'],失物:[1,'失物申未午'],行人:[1,'行人有音信'],求财:[1,'求财向南行'],疾病:[1,'病者无祸侵'],官事:[1,'官事有福德'],家宅:[1,'田宅六畜吉']},
 {综合:[-1,'赤口主口舌'],失物:[0,'失物速速讨'],行人:[-1,'行人有惊慌'],疾病:[-1,'恐怕染瘟殃'],官事:[-1,'官非切宜防'],家宅:[-1,'鸡犬多作怪']},
 {综合:[1,'小吉最吉昌'],失物:[1,'失物在坤方'],行人:[1,'行人立便至'],求财:[1,'交易甚是强'],疾病:[0,'病者祈上苍'],家宅:[1,'凡事皆和合']},
 {综合:[-1,'空亡事不祥'],失物:[-1,'失物寻不见'],行人:[-1,'行人有灾殃'],求财:[-1,'求财无利益'],疾病:[-1,'病人逢暗鬼'],官事:[-1,'官事有刑伤']}];
const xlrVal=(i,q)=>{const t=XLR_TOPIC[i][q||'综合'];return t?t:[XLR[i].j==='吉'?1:-1,'']};
const XLR_ADV=[
 {c:[['宅舍保安康……仔细更推详。','小六壬歌诀 · 大安','「仔细更推详」：顺利的时候，也值得把细节再推敲一遍。']],t:['可以按原来的计划稳稳往前走，不必急着另起炉灶。','有空的话，不妨把重要的细节再核对一遍。']},
 {c:[['官事只宜缓……急讨方称心。更须防口舌。','小六壬歌诀 · 留连','公事宜放缓；需要追讨的事，主动一些更容易如愿；也提醒留意口舌。']],t:['慢一点也没关系，可以先完成手边能推进的一小步。','需要别人回复的事，方便的话可以主动问一声。','说话时给彼此留点余地，情绪上来时，决定可以晚一点再做。']},
 {c:[['速喜喜来临……行人有音信。','小六壬歌诀 · 速喜','好消息来得快。']],t:['有好消息的话，可以趁热推进。','在等回音的事，今天问一问也许会有进展。']},
 {c:[['官非切宜防，失物速速讨。','小六壬歌诀 · 赤口','古人提醒留意口舌是非；要找、要讨的东西，宜早不宜迟。']],t:['今天沟通时可以多一点耐心，重要的事不妨用文字说清楚，也先听听对方怎么说。','有争执或要签字的事，方便的话可以缓一天。','丢了东西的话，早点去找会更容易找回。']},
 {c:[['路上好商量……凡事皆和合。','小六壬歌诀 · 小吉','事情好商量，以和为贵。']],t:['今天适合商量、合作、谈条件。','语气放软一点，往往更容易谈拢。']},
 {c:[['病人逢暗鬼，解禳保安康。','小六壬歌诀 · 空亡','解禳：古人指祈祷消灾。歌诀本身给的化解之道，是主动去「解」，而不是干等。']],t:['期望可以先放低一些，也不必把希望都押在一处。','重要的决定不妨多核实一次，口头说定的事可以落到纸面上。','今天也许更适合整理、收尾，新的事情可以等等再开始。']}];
const QDESC={综合:'不限定哪一类事，看这件事整体顺不顺。',失物:'东西丢了，问能不能找回、往哪个方向找。',行人:'在等的人、出门在外的人，什么时候回来或到达。',求财:'想赚钱、谈生意、谋一件事，能不能如愿。',疾病:'自己或家人身体不舒服，问病情轻重。',官事:'官司、公事，和单位、机构打交道的事。',家宅:'家里、住处安不安宁。',
  人事:'日常人际和办事，拿不准归哪类时就选它。',求谋:'谋划一件事，问能不能成、成得快慢。',求名:'考试、升职、评选、名声。',交易:'买卖、签约、谈价钱。',出行:'要出门、旅行，问路上顺不顺。',谒见:'去见某个人，问见不见得到、有没有收获。',婚姻:'恋爱、婚事能不能成。',婚恋:'感情、恋爱、婚事的走向。男生看妻财、女生看官鬼，都看六合、天后（填了性别才会加上妻财或官鬼）。',考试文书:'考试、证书、合同、文件、消息。看父母和朱雀。',工作:'求职、升职、工作上的事。看官鬼和青龙。',天时:'问天气，看晴还是雨。',饮食:'饭局、吃喝能不能成、丰不丰盛。'};
const QDESC_MH={求财:'求财、赚钱，问有没有财、会不会损耗。',行人:'等的人、出门在外的人什么时候回来。',失物:'东西丢了，问能不能找回。',家宅:'家里安不安稳，有进益还是有破耗。',疾病:'身体不舒服，问病情走向、好不好治。'};
const QDESC_DLR={综合:'不限定哪一类事，只看三传和天将。',求财:'赚钱、生意、收入。看妻财和青龙。',疾病:'身体不舒服，问病情。看官鬼和白虎（病神）。',出行:'出门、旅行、搬动。看驿马是否进入三传。'};
const XLR_Q={综合:null,失物:/失物/,行人:/行人|去者/,求财:/求财|求谋|交易/,疾病:/病/,官事:/官/,家宅:/宅|田宅/};
function xlrPlain(i,q){const P=XLR_PLAIN[i],g=XLR[i];let t=`<p>落在<b>${g.n}</b>，${g.j}。${P.综合}</p>`;
  if(q&&q!=='综合')t=`<p>问${q}：<b>${P[q]}</b></p>`+t;
  else t+=`<p class="sub">${['失物','行人','求财','疾病'].map(k=>k+'：'+P[k]).join(' ')}</p>`;return t}
const XLR_YQ=['一、五、七','二、八、十','三、六、九','四、七、十','一、五、七','三、六、九'];
const XLR_PACE=[['「行人身未动」','人还没动身，要再等一等'],['「去者未回程」','还在拖着，会比预想的晚'],['「行人有音信」','很快会有消息'],['「行人有惊慌」','路上可能有些波折'],['「行人立便至」','很快就到'],['「行人有灾殃」','行程不太稳，不容易如期']];
const XLR_PACE_G=['大安主安稳，事情不急，按部就班地来','留连主拖延，会比预想的慢','速喜主快，消息来得快','赤口主口舌，中途可能有波折','小吉主和合，进展顺','空亡主落空，时间不好定'];
function xlrWhen(i,o){const u=UNIT(o.qp),tr=o.q==='行人';
  return yqBox(`<p>结果宫是<b>${XLR[i].n}</b>，口诀里它的应期数是<b>${XLR_YQ[i]}</b>。${o.qp.day?`你已经说了是${o.qp.day}，这几个数在这里参考意义不大，可以主要看快慢。`:o.qp.span==='mid'?`如果是几天内的事，可以看作第${XLR_YQ[i]}天前后；如果是几个月的事，就是${XLR_YQ[i]}个月前后。`:`你问的事${o.qp.span==='near'?'比较近':'比较长远'}，可以看作${XLR_YQ[i]}${u[0]}前后。`}</p><p>快慢：${tr?`歌诀说${XLR_PACE[i][0]}，${XLR_PACE[i][1]}。`:`按本宫通论，${XLR_PACE_G[i]}。`}</p>`,
   `应期数出自小六壬口诀「凡谋事一五七」等（天玉宫、vocus 两处一致）。两处都没写单位，按事情远近读成天、月或年（${u[1]}），这是本程序的读法。`)}
function castXLR(o){
  const L=nowLunar();let steps;
  if(o.how==='num'){const [a,b,c]=o.nums;const i1=(a-1)%6,i2=(i1+b-1)%6,i3=(i2+c-1)%6;steps=[[`一数 ${a}`,i1],[`二数 ${b}`,i2],[`三数 ${c}`,i3]]}
  else{const m=Math.abs(L.getMonth()),d=L.getDay(),h=ZHI.indexOf(L.getTimeZhi())+1;const i1=(m-1)%6,i2=(i1+d-1)%6,i3=(i2+h-1)%6;
    steps=[[`${L.getMonthInChinese()}月`,i1],[L.getDayInChinese(),i2],[`${L.getTimeZhi()}时`,i3]]}
  const g=XLR[steps[2][1]],re=XLR_Q[o.q];
  const pos=['起因','过程','结果'],vv=steps.map(s=>xlrVal(s[1],o.q));
  const wx=steps.map(s=>XLR_WX[s[1]]),endWx=wx[2];
  const wxRel=[0,1].map(i=>{const a=wx[i];return a===endWx?['比和',0]:SHENG[a]===endWx?['生结果宫',.5]:KE[a]===endWx?['克结果宫',-.5]:SHENG[endWx]===a?['被结果宫所生',0]:['被结果宫所克',0]});
  const sc=vv[0][0]+vv[1][0]+2*vv[2][0]+wxRel[0][1]+wxRel[1][1];
  const grade=sc>=3.5?0:sc>=2.5?1:sc>=1?2:sc>-1?3:sc>-2.5?4:sc>-3.5?5:6;
  const f=n=>(n>0?'+':'')+n,vt=v=>v>0?'吉':v<0?'凶':'平';
  const ji=vv.map(v=>v[0]>0),end=vv[2][0];
  const trend=vv.every(v=>v[0]>0)?'一路顺':vv.every(v=>v[0]<0)?'一路阻':vv[0][0]<0&&end>0?'先难后易':vv[0][0]>0&&end<0?'先顺后阻':end>0?'结果偏顺':end<0?'结果偏阻':vv[0][0]>0?'前顺后平':vv[0][0]<0?'前阻后平':'平稳';
  const basis=`${steps.map((s,i)=>`${pos[i]}${XLR[s[1]].n}（${vv[i][1]?`「${vv[i][1]}」`:'本宫通论'}，${vt(vv[i][0])} ${f(vv[i][0]*(i===2?2:1))}）`).join(' → ')}；五行：${steps.slice(0,2).map((s,i)=>`${XLR[s[1]].n}${wx[i]}${wxRel[i][0]}（${f(wxRel[i][1])}）`).join('、')}，结果宫${XLR[steps[2][1]].n}属${endWx}。合计 ${f(sc)}，走向${trend}，为${gName(grade)}。<span class="gsrc">各宫对「${o.q}」的吉凶取自歌诀原句，歌诀没专门讲的按本宫通论；三宫读作起因、过程、结果，结果宫记两分；六宫五行取道家、江氏一派（大安木、留连土、速喜火、赤口金、小吉水、空亡土，留连、小吉另有异说）；分值和五行加减是本程序的口径。</span>`;
  const adv=adviceHTML(grade,[...XLR_ADV[steps[2][1]].c,...(grade>=4?[BUGUO]:[])],[...(o.q==='疾病'?[MED]:[]),...(o.q&&o.q!=='综合'?[`问${o.q}：${XLR_PLAIN[steps[2][1]][o.q]}`,XLR_ADV[steps[2][1]].t[0]]:XLR_ADV[steps[2][1]].t),...(trend==='先难后易'?['开头可能不太顺，后面会慢慢转好，可以再坚持一下。']:trend==='先顺后阻'?['开头比较顺，收尾的时候可以多留意一些。']:[]),...(wxRel.some(r=>r[1]<0)?[`前面的${steps.slice(0,2).filter((s,i)=>wxRel[i][1]<0).map(s=>XLR[s[1]].n).join('、')}克结果宫：阻力可能来自${steps.slice(0,2).map((s,i)=>wxRel[i][1]<0?pos[i]:'').filter(Boolean).join('和')}阶段，可以先把那一环理一理。`]:[])]);
  const dirRe=o.qp&&o.qp.kind==='where'?/[东南西北坤]方|申未午|南行/:null,dirHit=dirRe&&dirRe.test(g.v),reHit=re&&re.test(g.v);
  const verse=g.v.split(/(?<=[，。])/).map(p=>(re&&re.test(p))||(dirRe&&dirRe.test(p))?`<mark>${p}</mark>`:p).join('');
  const html=`<span class="tape"></span>
   <div class="o-head"><span class="o-title">小六壬</span><span class="badge">${o.how==='num'?'报数起课':'时间起课'}</span></div>
   <div class="o-meta">${todayStr().replace(/-/g,'.')} · ${lunarStamp(L)}</div>
   <div class="path">${steps.map((s,i)=>`${i?'→':''}<small>${s[0]}</small><span class="${i===2?'on':''}">${XLR[s[1]].n}</span>`).join(' ')}</div>
   <div class="o-big">${g.n}${lvl(g.j,g.j==='吉'?'good':'bad')}</div>
   ${undCard('xlr',o)}
   ${gradeHTML(grade,basis)}
   ${o.qp&&o.qp.kind==='when'?xlrWhen(steps[2][1],o):''}
   ${arrange(grade,plainBox(xlrPlain(steps[2][1],o.q)),adv)}
   <div class="verse">${verse}</div>
   ${reHit||dirHit?`<div class="ask">已标出${reHit?`与「${o.q}」相关`:''}${reHit&&dirHit?'和':''}${dirHit?'讲方位':''}的句子。</div>`:''}${dirRe&&!dirHit?`<div class="ask">${g.n}这一宫的歌诀没有讲方位。</div>`:''}
   <div class="ask">异文：${g.alt}</div>
   <div class="sec"><h4>起课规则</h4><p>${o.how==='num'?'从大安起数第一个数，落宫处起数第二个数，再起数第三个数，顺数六宫（大安、留连、速喜、赤口、小吉、空亡）。':'正月起大安，月上起日，日上起时，顺数六宫（大安、留连、速喜、赤口、小吉、空亡）。'}末宫即所得。</p></div>
   <div class="n-foot"><span>歌诀按多个通行本互校，取多数本用字</span><span class="badge">小六壬</span></div>`;
  return {html,stamp:'壬'};
}

/* ---- 梅花易数 ---- */
const XT={1:'乾',2:'兑',3:'离',4:'震',5:'巽',6:'坎',7:'艮',8:'坤'};
const TRI={乾:'111',兑:'110',离:'101',震:'100',巽:'011',坎:'010',艮:'001',坤:'000'};
const TRI_X={乾:'天',兑:'泽',离:'火',震:'雷',巽:'风',坎:'水',艮:'山',坤:'地'};
const TRI_WX={乾:'金',兑:'金',离:'火',震:'木',巽:'木',坎:'水',艮:'土',坤:'土'};
const byBits=b=>Object.keys(TRI).find(k=>TRI[k]===b);
const guaName=bits=>{const lo=byBits(bits.slice(0,3)),hi=byBits(bits.slice(3));const nm=D.GUA[bits][0];return lo===hi?`${hi}为${TRI_X[hi]}`:`${TRI_X[hi]}${TRI_X[lo]}${nm}`};
const stripName=t=>t.replace(/^[^：]{1,3}：/,'');
const hexHTML=(bits,mv)=>`<div class="hex">${bits.split('').reverse().map((b,i)=>`<i class="${b==='1'?'y':''}${6-i===mv?' mv':''}"></i>`).join('')}</div>`;

const CAT_PLAIN={人事:['事情由你掌控，吉','对方或事情压着你，不宜','你要付出，有耗损','有进益','谋事顺利'],
 求谋:['能成，但成得慢','谋不成，还可能有害','谋得多、成得少','不用多谋就能成','求谋称意'],
 求财:['有财','没有财','有损耗之忧','有进益之喜','财利顺心'],
 求名:['名可成，但成得慢','名不可成','名难成，或因名有损','名易成，或因名有得','功名称意'],
 交易:['有财','不成','难成，或因交易有失','马上能成，成了有财','容易成'],
 出行:['可以去，到了多得意','出门有祸','出行有破耗','有意外之财','出行顺快'],
 行人:['人会回来，但要晚些','人不回来','人还没回来','人马上就回来','归期就在这几天'],
 谒见:['见得到','见不到','难见，见了也没益处','见得到，见了还有收获','欢欢喜喜见面'],
 失物:['能找到，但要晚些','找不回来','很难找到','容易找到','东西没丢'],
 婚姻:['能成，但成得晚','不可成，成了也有害','难成，或因婚事有失','容易成，或因婚事有得','婚姻吉利'],
 家宅:['家宅多吉','家宅多凶','多耗散，可以留意防盗','多进益，或有人馈赠','家宅安稳'],
 疾病:['病容易好，不用药也会好转','用药也难见效','病拖拖拉拉难好','很快就好','病容易好转'],
 饮食:['饮食有阻','吃不上','饭局难成','饮食丰盛','饮食丰足']};
const REL_IDX={体克用:0,用克体:1,体生用:2,用生体:3,体用比和:4};
const relTo=(ti,x)=>{const a=TRI_WX[ti],b=TRI_WX[x];return a===b?'比和':KE[a]===b?'体克':KE[b]===a?'克体':SHENG[a]===b?'体生':'生体'};
const REL2={比和:['与体比和','好'],体克:['被体所克','好'],克体:['克体','不好'],体生:['耗体（体去生它）','有耗'],生体:['生体','好']};
const TIANSHI=[['离','离多主晴'],['坎','坎多主雨'],['坤','坤乃阴晦'],['乾','乾主晴明'],['震','震多则春夏雷轰'],['巽','巽多则四时风烈'],['艮','艮多则久雨必晴'],['兑','兑多则不雨亦阴']];
const yaoCi=t=>{let v=0;const tags=[];const h=(re,n,x)=>{if(re.test(t)){v+=x;tags.push(n);return true}return false};
  h(/元吉|大吉/,'元吉',1)||h(/吉/,'吉',1);h(/凶/,'凶',-1);h(/[厉厲]/,'厉',-.5);h(/吝/,'吝',-.5);h(/悔亡/,'悔亡',.5)||h(/悔/,'悔',-.5);h(/[无無]咎/,'无咎',.5);h(/[无無]攸利/,'无攸利',-.5)||h(/[无無]不利/,'无不利',.5);
  return{v:Math.max(-1,Math.min(1,v)),tags}};
const MH_CATS=['人事','求谋','求财','求名','交易','出行','行人','谒见','失物','婚姻','家宅','疾病','天时','饮食'];
const WX_GZ={金:['庚辛','申酉'],木:['甲乙','寅卯'],水:['壬癸','亥子'],火:['丙丁','巳午'],土:['戊己','辰戌丑未']};
const GUA_POS={乾:'戌亥',坎:'子',艮:'丑寅',震:'卯',巽:'辰巳',离:'午',坤:'未申',兑:'酉'};
function mhWhen(ti,o,trend,isTS,rel){const wx=TRI_WX[ti],[gs,zs]=WX_GZ[wx],pos=GUA_POS[ti],zAll=[...new Set((zs+pos).split(''))].join('');
  const hit=gz=>gs.includes(gz[0])||zAll.includes(gz[1]);let list='';
  if(o.qp.span==='far'){const out=[],t=new Date();let last='';for(let i=1;i<=420&&out.length<3;i++){const d=new Date(t.getFullYear(),t.getMonth(),t.getDate()+i,12);const mg=X.Solar.fromDate(d).getLunar().getMonthInGanZhiExact();if(mg!==last){last=mg;if(hit(mg))out.push(`<li><b>${d.getFullYear()}年${d.getMonth()+1}月${d.getDate()}日起</b>的${mg}月</li>`)}}
    list=`<p>你问的事比较长远，按月看。接下来对得上的月份（按节气分月）：</p><ul class="dlist">${out.join('')}</ul>`}
  else if(o.qp.day)list=`<p>你已经说了是${o.qp.day}，就不往后列日子了。</p>`;
  else{const ds=nextDays(Ld=>hit(Ld.getDayInGanZhi()),3,30);list=`<p>接下来对得上的日子：</p><ul class="dlist">${ds.map(x=>`<li><b>${md(x.d)}</b> ${x.L.getDayInGanZhi()}日</li>`).join('')}</ul>`}
  const cp=CAT_PLAIN[o.q]&&(o.q==='行人'||o.q==='出行')?`<p>${o.q==='行人'?'快慢：':''}原书占${o.q}，${rel}是「${CAT_PLAIN[o.q][REL_IDX[rel]]}」。</p>`:'';
  return yqBox(`<p>先天起卦看卦气。体卦是<b>${ti}</b>，属${wx}，后天方位在${pos}。所以应期多落在天干${gs.split('').join('、')}，或地支${zAll.split('').join('、')}的${o.qp.span==='far'?'月或日':'日子'}。</p>${list}${cp}${isTS?'':`<p>走向是<b>${trend}</b>，${/后吉|偏吉/.test(trend)?'等到的时候，多半是好消息':'就算到了那个时候，也可能不如预期，可以多准备一手'}。</p>`}`,
   `「先天起卦看卦气、后天起卦看卦数」是今人的说法，书上举例「乾属金，应在庚辛日或申酉日，或戌亥日」。只查到两篇几乎相同的文章，可能同出一源；看哪一卦也说法不一，这里取代表你的体卦。<span class="tagx">来源不足</span>`)}
const ZHI_ORDER='子丑寅卯辰巳午未申酉戌亥';
function dlrWhen(r,di,kong,YS,hits){const bz=di.bazi.split(' '),yz=bz[0][1],mz=bz[1][1],dz=bz[2][1],c0=r.sanChuan.chuChuan[0],mo=r.sanChuan.moChuan[0];const ps=[];
  if(c0===yz)ps.push(`发用（初传）${c0}就是太岁（今年年支），应在<b>一年之内</b>。`);
  else if(c0===mz)ps.push(`发用（初传）${c0}就是月建（本月月支），应在<b>一个月之内</b>。`);
  else if(c0===dz)ps.push(`发用（初传）${c0}就是今天的日支，应在<b>当天</b>。`);
  const empt=[...new Set([...(YS?hits.map(i=>[r.sanChuan.chuChuan,r.sanChuan.zhongChuan,r.sanChuan.moChuan][i][0]):[]),mo].filter(z=>kong.includes(z)))];
  let single='';
  if(empt.length){const out=nextDays(Ld=>Ld.getDayInGanZhi()[0]==='甲',1,12)[0];const fill=empt.map(z=>{const x=nextDays(Ld=>Ld.getDayInGanZhi()[1]===z,1,13)[0];return x?`${z}日 ${md(x.d)}`:''}).filter(Boolean);
    single=`<p>${empt.join('、')}落空亡。空亡要等「出旬」或「填实」才应：出旬是这一旬结束${out?`，即 ${md(out.d)} 起`:''}；填实是遇到同一地支的日子${fill.length?`，即 ${fill.join('、')}`:''}。<span class="tagx">仅一个来源</span></p>`}
  if(!ps.length&&!empt.length)ps.push('发用不是太岁、月建或日支，三传也没有落空亡，课里没有明确的应期信号。这种时候，通行的说法是看事情远近：远的事应在年月，近的事应在日时。<span class="tagx">仅一个来源</span>');
  return yqBox(ps.map(x=>`<p>${x}</p>`).join('')+single,'「年月发用，应事在当年月」「用起太岁应在一年之内，用起月建应在一月之内，用起日干日支应在即日」见网易《大六壬的断课思路与步骤》与国学术数馆两处；空亡待出旬、填实，「远应年月，近应日时」只查到国学术数馆一处，标为「仅一个来源」。')}
function castMH(o){
  const L=nowLunar(),hz=ZHI.indexOf(L.getTimeZhi())+1;let up,low,mv,how,total;
  if(o.how==='num'){const [a,b]=o.nums;
    if(b){up=a%8||8;low=b%8||8;mv=(a+b+hz)%6||6;total=a+b+hz;how=`报两数：${a} 为上卦，${b} 为下卦，${a}+${b}+时数${hz}=${a+b+hz}，除六取动爻`}
    else{up=a%8||8;low=hz%8||8;mv=(a+hz)%6||6;total=a+hz;how=`报一数：${a} 为上卦，时数 ${hz}（${L.getTimeZhi()}）为下卦，${a}+${hz}=${a+hz}，除六取动爻`}}
  else{const y=ZHI.indexOf(L.getYearZhi())+1,m=Math.abs(L.getMonth()),d=L.getDay(),s=y+m+d;up=s%8||8;low=(s+hz)%8||8;mv=(s+hz)%6||6;total=s+hz;
    how=`年支${L.getYearZhi()}(${y}) + ${L.getMonthInChinese()}月(${m}) + ${L.getDayInChinese()}(${d}) = ${s}，除八得上卦；加${L.getTimeZhi()}时(${hz}) = ${s+hz}，除八得下卦，除六得动爻`}
  const U=XT[up],Lo=XT[low],bits=TRI[Lo]+TRI[U];
  const chg=bits.split('');chg[mv-1]=chg[mv-1]==='1'?'0':'1';const bian=chg.join('');const hu=bits.slice(1,4)+bits.slice(2,5);
  const ti=mv<=3?U:Lo, yong=mv<=3?Lo:U, a=TRI_WX[ti], b=TRI_WX[yong];
  const rel=a===b?'体用比和':KE[a]===b?'体克用':KE[b]===a?'用克体':SHENG[a]===b?'体生用':'用生体';
  const relK={体用比和:'good',体克用:'good',用生体:'good',体生用:'mid',用克体:'bad'}[rel];
  const mz=L.getMonthZhi(),season='寅卯'.includes(mz)?'春':'巳午'.includes(mz)?'夏':'申酉'.includes(mz)?'秋':'亥子'.includes(mz)?'冬':'四季月';
  const WANG={春:['震','巽'],夏:['离'],秋:['乾','兑'],冬:['坎'],四季月:['坤','艮']},SHUAI={春:['坤','艮'],夏:['乾','兑'],秋:['震','巽'],冬:['离'],四季月:['坎']};
  const tiState=WANG[season].includes(ti)?'旺':SHUAI[season].includes(ti)?'衰':'不旺不衰';
  const G=D.GUA[bits],GB=D.GUA[bian],cat=D.MHCAT[o.q]||D.MHCAT['人事'];
  const huLo=byBits(hu.slice(0,3)),huUp=byBits(hu.slice(3)),bianYong=mv<=3?byBits(bian.slice(0,3)):byBits(bian.slice(3));
  const rH=[huLo,huUp].map(x=>[x,relTo(ti,x)]),rB=relTo(ti,bianYong);
  const isTS=o.q==='天时';
  const yongGood=relK!=='bad'&&relK!=='mid',bianGood=REL2[rB][1]==='好';
  const trend=yongGood&&!bianGood?'先吉后凶':!yongGood&&bianGood?'先凶后吉':yongGood?'始终偏吉':'始终偏不利';
  const RS={体用比和:2,用生体:2,体克用:1,体生用:-1,用克体:-2},BS={生体:1,比和:1,体克:.5,体生:-.5,克体:-1},HS={生体:.5,克体:-.5,比和:.5};
  const yc=yaoCi(G[3][mv-1]);
  const sc=RS[rel]+BS[rB]+rH.reduce((t,[x,r])=>t+(HS[r]||0),0)+(tiState==='旺'?.5:tiState==='衰'?-.5:0)+yc.v;
  const grade=sc>=3.5?0:sc>=2.5?1:sc>=1?2:sc>-1?3:sc>-2.5?4:sc>-3.5?5:6;
  const fmt=n=>(n>0?'+':'')+n;
  const helper=[...rH.filter(([x,r])=>r==='生体').map(([x])=>'互卦'+x),...(rB==='生体'?['变卦'+bianYong]:[])];
  const basis=`本卦${rel}（${fmt(RS[rel])}）· 变卦${bianYong}${REL2[rB][0]}（${fmt(BS[rB])}）· 互卦${rH.map(([x,r])=>x+(r==='生体'?'生体':r==='克体'?'克体':r==='比和'?'比和（体党）':'无碍')).join('、')}（${fmt(rH.reduce((t,[x,r])=>t+(HS[r]||0),0))}）· 体卦${tiState}（${fmt(tiState==='旺'?.5:tiState==='衰'?-.5:0)}）· 动爻爻辞${yc.tags.length?'有「'+yc.tags.join('」「')+'」':'无吉凶断语'}（${fmt(yc.v)}）＝ ${fmt(sc)}，为${gName(grade)}。<span class="gsrc">原书说「不可拘执于一」，所以几项合看：体用、互变、卦气依《梅花易数》，互卦与体同五行算「体党」（「体党多而体势盛」）。爻辞的吉、凶、悔、吝、厉、无咎按《系辞》分轻重参入；原书认为年月日时、报数起卦属先天，「不必用《易》书之辞，专以卦断」，所以爻辞在这里只占小份量。分值和分级界线是本程序的口径。</span>`;
  const mc=[];if(helper.length)mc.push(['欲知凶中有救，生體之卦存焉。','《梅花易数》卷二 · 疾病占',`本卦里${helper.join('、')}属${Object.keys(SHENG).find(k=>SHENG[k]===TRI_WX[ti])}，${Object.keys(SHENG).find(k=>SHENG[k]===TRI_WX[ti])}生${TRI_WX[ti]}，正是生体之卦。此句原在疾病占；《体用总诀》也说「用生體，有進益之喜」，生体为吉，各类占断同理。`]);
  if(trend==='先凶后吉'||trend==='先吉后凶')mc.push([trend==='先凶后吉'?'用凶變吉者，先凶後吉。':'用吉變凶者，先吉後凶。','《梅花易数》卷二 · 體用生克篇之一',trend==='先凶后吉'?'眼前不顺，结局转好。':'开头顺，结局可能有变，可以多留意。']);
  if(tiState==='旺'&&RS[rel]<0)mc.push(['若體逢克而乘旺，猶為庶幾。','《梅花易数》卷二 · 疾病占','体卦当令而旺，即使受克，也还有指望（原在疾病占，理同）。']);
  const ZCL={体克用:['體克用，諸事吉。','体克用：你能掌控这件事。'],用克体:['用克體，諸事凶。','用克体：事情压着你，所以不妨避其锋芒、寻找助力。'],体生用:['體生用，有耗失之患。','耗失：付出多、收获少。知道耗在哪里，就能先把口子收紧。'],用生体:['用生體，有進益之喜。','进益：有收获、有长进。'],体用比和:['體用比和，則百事順遂。','比和：你和这件事五行相同，彼此顺。']};
  if(!mc.length)mc.push([ZCL[rel][0],'《梅花易数》卷二 · 體用總訣',ZCL[rel][1]]);
  if(grade>=4)mc.push(BUGUO);
  const MH_TIP={用克体:['事情暂时有些压力，可以先避开锋芒，不必硬碰，缓一缓再出手。','不妨把事情拆小，从最有把握的一步开始。','也可以找找能帮上忙的人或资源，书上说的「生体之卦」就是这样的助力。'],体生用:['这件事可能比较耗钱或耗精力，可以先给自己定个上限，量力而为。','投入之前，不妨想想自己最想要的是什么。'],体克用:['事情大体在你掌控中，只是可能需要多一点时间和耐心。'],用生体:['事情在帮你，可以顺势而为，主动一些。'],体用比和:['和这件事气场相合，按自己的节奏推进就好。']};
  const mtips=[...(o.q==='疾病'?[MED]:[]),...MH_TIP[rel],...(trend==='先吉后凶'?['开局顺利的时候，可以顺手把收尾也安排好。']:trend==='先凶后吉'?['前面难一点不代表结果不好，可以再撑一撑。']:[]),...(tiState==='衰'?['你这边的力量偏弱，可以多给自己留些余地，不必硬撑。']:[])];
  const madv=isTS?'':adviceHTML(grade,mc,mtips);
  const allTri=[U,Lo,huLo,huUp,byBits(bian.slice(0,3)),byBits(bian.slice(3))];const cnt={};allTri.forEach(t=>cnt[t]=(cnt[t]||0)+1);
  let tsTxt='';if(isTS){const lines=TIANSHI.filter(([t])=>cnt[t]).sort((a,b)=>cnt[b[0]]-cnt[a[0]]);
    tsTxt=`<p>占天时不看体用，看本卦、互卦、变卦六个经卦里各卦出现的多少：${Object.entries(cnt).sort((a,b)=>b[1]-a[1]).map(([k,v])=>k+'×'+v).join('、')}。</p><p>按书上：${lines.map(([t,l])=>`<b>${l}</b>`).join('；')}。${mz&&('巳午'.includes(mz)&&cnt['离']&&!cnt['坎']?'夏天离多而无坎，主亢旱。':'亥子'.includes(mz)&&cnt['坎']&&!cnt['离']?'冬天坎多而无离，主雨雪。':'')}出现最多的卦分量最重。</p>`}
  const html=`<span class="tape"></span>
   <div class="o-head"><span class="o-title">梅花易数</span><span class="badge">占${o.q}</span></div>
   <div class="o-meta">${todayStr().replace(/-/g,'.')} · ${lunarStamp(L)}</div>
   <div class="guas">
     <div class="gua main">${hexHTML(bits,mv)}<b>${guaName(bits)}</b>本卦</div>
     <div class="gua">${hexHTML(hu,0)}<b>${guaName(hu)}</b>互卦</div>
     <div class="gua">${hexHTML(bian,0)}<b>${guaName(bian)}</b>变卦</div>
     <div class="gua"><b style="font-size:20px">${['初','二','三','四','五','上'][mv-1]}</b>动爻</div>
   </div>
   <div class="o-big" style="font-size:24px">${isTS?'天时不分体用':rel+lvl(relK==='good'?'吉':relK==='bad'?'凶':'耗',relK)}</div>
   ${undCard('mh',o)}
   ${isTS?'':gradeHTML(grade,basis)}
   ${o.qp&&o.qp.kind==='when'?mhWhen(ti,o,trend,isTS,rel):''}
   <div class="ask">体卦 <b>${ti}${TRI_WX[ti]}</b>（${season}${tiState}） · 用卦 <b>${yong}${TRI_WX[yong]}</b></div>
   ${arrange(isTS?0:grade,plainBox(isTS?tsTxt+`<p>本卦「${guaName(bits)}」，互卦「${guaName(hu)}」，变卦「${guaName(bian)}」。</p>`:`<p>体卦代表你，用卦代表${o.ask?'「'+esc(o.ask)+'」':'你问的事'}。${ti}属${TRI_WX[ti]}，${yong}属${TRI_WX[yong]}，${REL_PLAIN[rel]}${CAT_PLAIN[o.q]?`占${o.q}具体是：<b>${CAT_PLAIN[o.q][REL_IDX[rel]]}</b>。`:''}${TI_PLAIN[tiState]}</p><p>事情中段看互卦：${rH.map(([x,r])=>`${x}${TRI_WX[x]}${REL2[r][0]}`).join('，')}${rH.some(([x,r])=>r==='克体')?'，中途有阻力':rH.some(([x,r])=>r==='生体')?'，中途有助力':''}。结果看变卦：用卦变成${bianYong}${TRI_WX[bianYong]}，${REL2[rB][0]}，结果${REL2[rB][1]}。合起来是<b>${trend}</b>。</p><p class="sub">本卦「${guaName(bits)}」讲的是${gp(G[0])}；互卦「${guaName(hu)}」：${gp(D.GUA[hu][0])}；变卦「${guaName(bian)}」：${gp(GB[0])}。</p>`),madv)}
   <div class="sec"><h4>占${o.q}</h4>${qline(cat[0],'《梅花易数》'+cat[2].replace('梅花易数·',''))}${cat[1]?`<p style="font-size:12.5px;color:var(--ink-2)">白话：${cat[1]}</p>`:''}</div>
   <div class="sec"><h4>本卦卦辞</h4>${qline(`${G[0]}：${stripName(G[1])}`,'《周易》')}${qline(G[2],'《象》')}</div>
   <div class="sec"><h4>动爻爻辞</h4>${qline(G[3][mv-1],'《周易》')}</div>
   <div class="sec"><h4>变卦卦辞 · 事之末应</h4>${qline(`${GB[0]}：${stripName(GB[1])}`,'《周易》')}</div>
   <div class="sec"><h4>起卦</h4><p style="font-size:12.5px">${how}。动爻在${mv<=3?'下':'上'}卦，故${mv<=3?'下':'上'}卦为用、${mv<=3?'上':'下'}卦为体。${o.how==='num'?'':'年支取农历年（以正月初一为界，有的流派以立春为界，春节前后几天两种口径会起出不同的卦）；晚上 11 点后的子时仍算当天。'}</p>${qline(D.MH_ZONG,'《梅花易数》卷二 · 體用總訣')}${qline(D.MH_TIYONG,'《梅花易数》卷一 · 先天後天論')}${qline('用吉變凶者，先吉後凶；用凶變吉者，先凶後吉。','《梅花易数》卷二 · 體用生克篇之一')}</div>
   <div class="n-foot"><span>体用、卦气以《梅花易数》为据</span><span class="badge">梅花易数</span></div>`;
  return {html,stamp:'梅'};
}

/* ---- 大六壬 ---- */
const KETI={元首:'四课中只有一课上克下，取之为初传。',重审:'四课中只有一课下贼上，取之为初传。',知一:'有两课以上克贼，取与日干阴阳相比者为用。',比用:'有两课以上克贼，取与日干阴阳相比者为用。',涉害:'有两课以上克贼，与日干俱比或俱不比，取涉害深者为用；深浅相同，先取地盘四孟上神，次四仲、四季。',遥克:'四课无克贼，取上神与日干遥相克者为用（神克日为蒿矢，日克神为弹射）。',昴星:'四课无克又无遥克，阳日取地盘酉上神、阴日取天盘酉下神为初传。',别责:'四课不全（只得三课）又无克，阳日取干合之神、阴日取支前三合为用。',八专:'干支同位，四课只得两课。',伏吟:'月将加时同位，天地盘不动。',反吟:'天地盘六冲，天盘与地盘相对。'};
const MA={申:'寅',子:'寅',辰:'寅',寅:'申',午:'申',戌:'申',巳:'亥',酉:'亥',丑:'亥',亥:'巳',卯:'巳',未:'巳'};
const DLR_CATS=['综合','求财','考试文书','工作','疾病','婚恋','出行'];
function dlrYS(q){const g=S.profile.gender;return{
  求财:{lq:['妻财'],j:['青龙'],n:'妻财、青龙'},考试文书:{lq:['父母'],j:['朱雀'],n:'父母、朱雀'},工作:{lq:['官鬼'],j:['青龙'],n:'官鬼、青龙'},
  疾病:{lq:['官鬼'],j:['白虎'],n:'官鬼、白虎',bad:true},婚恋:{lq:g==='男'?['妻财']:g==='女'?['官鬼']:[],j:['六合','天后'],n:'六合、天后'+(g==='男'?'、妻财':g==='女'?'、官鬼':'')},
  出行:{lq:[],j:[],ma:true,n:'驿马'}}[q]||null}
const JI_JIANG=['贵人','六合','青龙','太常','太阴','天后'];
const LIUQIN={官鬼:'克日干者',父母:'生日干者',妻财:'日干所克',子孙:'日干所生',兄弟:'与日干同五行'};
function dlrPlain(r,kong){const parts=[['开头','chuChuan'],['过程中','zhongChuan'],['最后','moChuan']].map(([n,k])=>{const v=r.sanChuan[k];
    return `${n}落在${v[0]}，牵涉${LQ_PLAIN[v[2]]||v[2]}，遇${v[1]}（${JI_JIANG.includes(v[1])?'吉将':'凶将'}），${JIANG_PLAIN[v[1]]||''}${kong.includes(v[0])?'；这一步落空亡，多半虚而不实':''}`});
  const good=['chuChuan','zhongChuan','moChuan'].filter(k=>JI_JIANG.includes(r.sanChuan[k][1])).length;
  return `<p>${parts.join('。<br>')}。</p><p class="sub">三传里吉将 ${good} 个、凶将 ${3-good} 个。末传看归结，最后一步最要紧。天将、六亲代表的事情是通行释义。</p>`}
function dlrAt(now){let r=X.getLiuRenByDate(now),late=false,jiangNote='';
  if(now.getHours()===23){const d=new Date(now);d.setHours(0,30,0,0);const r0=X.getLiuRenByDate(d);if(r0.dateInfo.yuejiang!==r.dateInfo.yuejiang)jiangNote=`（今日中气交接，月将已换为${r.dateInfo.yuejiang}，此处按当日0点的${r0.dateInfo.yuejiang}）`;r=r0;late=true}
  return{r,late,jiangNote}}
function castDLR(o){
  const now=new Date(),dl=dlrAt(now),r=dl.r,L=nowLunar(),di=r.dateInfo,kong=di.kong||[];
  const kts=String(r.sanChuan.keTi||'').split('·');const kt=kts[0];
  const ke=['ke1','ke2','ke3','ke4'].map((k,i)=>{const v=r.siKe[k];return`<div>${v[0][0]}<br>${v[0][1]}<small>${['一','二','三','四'][i]}课 · ${v[1]}</small></div>`}).join('');
  const ch=[['初传','chuChuan','事之始'],['中传','zhongChuan','事之中'],['末传','moChuan','事之终']].map(([n,k,m])=>{const v=r.sanChuan[k];const empty=kong.includes(v[0]);
    return`<div><small>${n}</small><b>${v[0]}</b><span>${v[1]} ${lvl(JI_JIANG.includes(v[1])?'吉将':'凶将',JI_JIANG.includes(v[1])?'good':'bad')}${empty?' '+lvl('空亡','mid'):''}</span><small>${v[2]}${v[3]?' · 遁'+v[3]:''}</small></div>`}).join('');
  const CK=['chuChuan','zhongChuan','moChuan'],W3=[1,1,2],q=o.q||'综合',YS=dlrYS(q),dz=(di.bazi.split(' ')[2]||'')[1],ma=MA[dz];
  const C=CK.map(k=>r.sanChuan[k]),isHit=v=>YS&&(YS.lq.includes(v[2])||YS.j.includes(v[1])||(YS.ma&&v[0]===ma));
  const pts=C.map((v,i)=>{if(kong.includes(v[0]))return 0;if(YS&&YS.j.includes(v[1])&&!JI_JIANG.includes(v[1])&&!YS.bad)return 0;return(JI_JIANG.includes(v[1])?1:-1)*W3[i]});
  const jsc=pts.reduce((a,b)=>a+b,0);
  const hits=C.map((v,i)=>isHit(v)?i:-1).filter(i=>i>=0),live=hits.filter(i=>!kong.includes(C[i][0]));
  let ysc=0,ysTxt='';if(YS){if(YS.bad){ysc=live.length?-1:hits.length?0:.5;ysTxt=live.length?`病神（${YS.n}）入传 ${'−1'}`:hits.length?'病神入传而空亡（0）':'病神不入传（+0.5）'}
    else{ysc=live.length?1:hits.length?0:-.5;ysTxt=live.length?`类神（${YS.n}）见于${live.map(i=>['初','中','末'][i]+'传').join('、')}（+1）`:hits.length?`类神（${YS.n}）入传而空亡，未发动（0）`:`类神（${YS.n}）不入传（−0.5）`}}
  let skc=0;const skl=[];C.forEach((v,i)=>{if(hits.includes(i)&&YS&&YS.lq.includes(v[2]))return;if(v[2]==='父母'){skc+=.5;skl.push(['初','中','末'][i]+'传生日干')}else if(v[2]==='官鬼'){skc-=.5;skl.push(['初','中','末'][i]+'传克日干')}});skc=Math.max(-1,Math.min(1,skc));
  const sc=jsc+ysc+skc,f=n=>(n>0?'+':'')+n;
  const grade=sc>=4?0:sc>=2.5?1:sc>=1?2:sc>-1?3:sc>-2.5?4:sc>-4?5:6;
  const basis=`天将：${C.map((v,i)=>`${['初','中','末'][i]}传${v[1]}${kong.includes(v[0])?'（空亡，不计）':YS&&YS.j.includes(v[1])&&!JI_JIANG.includes(v[1])&&!YS.bad?'（为类神，不按凶将计）':`（${f(pts[i])}）`}`).join('、')}${YS?`；${ysTxt}`:''}；${skl.length?skl.join('、')+`（${f(skc)}）`:'三传不生不克日干（0）'} ＝ ${f(sc)}，为${gName(grade)}。<span class="gsrc">吉将、凶将，「末传为归结」，类神宜入传、不宜空亡，三传生日干为吉、克日干为凶，都是六壬通说；各项分值、末传记两分、空亡不计分是本程序的口径；课体、神煞未计入。</span>`;
  const DLR_TIP={螣蛇:'遇到突发状况时，可以先缓一口气，弄清楚再回应。',腾蛇:'遇到突发状况时，可以先缓一口气，弄清楚再回应。',朱雀:'说话、发消息、交文书之前，可以多看一遍，口舌之争能少则少。',勾陈:'约定和条款不妨写清楚一些，可以少些拖延和纠缠。',天空:'对口头承诺可以先打个折，落到纸面上会更踏实。',白虎:'出行、运动时可以多注意安全，身体不舒服就早点休息。',玄武:'财物和账号可以收好一些，来路不明的消息多留个心。'};
  const badJ=[...new Set(CK.map(k=>r.sanChuan[k]).filter(v=>!JI_JIANG.includes(v[1])&&!kong.includes(v[0])).map(v=>v[1]))];
  const goodJ=[...new Set(CK.map(k=>r.sanChuan[k][1]).filter(j=>JI_JIANG.includes(j)))];
  const dtips=[...badJ.map(j=>`${j}：${DLR_TIP[j]}`),...(goodJ.length?[`${goodJ.join('、')}是吉将：${goodJ.map(j=>JIANG_PLAIN[j]).join('，')}，可以借借这股力。`]:[]),...(kong.includes(r.sanChuan.moChuan[0])?['末传落空亡：结果可能不了了之，不妨把希望分散一些，不必都押在这一件事上。']:[])];
  const QT={求财:['财路今天有动静，可以留意身边的机会。','财的事今天也许不急于一时，可以先做些准备。'],考试文书:['文书、消息方面有动静，可以多看看邮件和通知。','考试和文书的事，按部就班地准备就好。'],工作:['工作上有动静，可以主动一些。','工作上暂时平稳，可以先把手头的事做好。'],婚恋:['感情上有动静，可以多一点主动和坦诚。','感情的事不必着急，慢慢来也好。'],出行:['驿马入传，主动、出行，路上可以多注意安全。','课上没有明显的出行之象，如果要出门，按计划来就好。']};
  if(q==='疾病')dtips.unshift(MED);else if(QT[q])dtips.unshift(QT[q][live.length?0:1]);
  const dadv=adviceHTML(grade,grade>=4?[BUGUO]:[['吉凶者，失得之象也。','《周易·系辞上》','吉凶说的是得与失的征象，不是定数。']],dtips.length?dtips:['按自己的节奏来就好。'],'大六壬古籍重在断事，少讲化解；这里只引《周易》的通义。');
  const html=`<span class="tape"></span>
   <div class="o-head"><span class="o-title">大六壬</span><span class="badge">${esc(r.sanChuan.keTi||'')}课</span></div>
   <div class="o-meta">${di.bazi} · 月将${di.yuejiang} · ${di.xun}旬 · 空亡${kong.join('')}</div>
   ${undCard('dlr',o)}
   ${gradeHTML(grade,basis)}
   ${o.qp&&o.qp.kind==='when'?dlrWhen(r,di,kong,YS,hits):''}
   ${arrange(grade,plainBox((YS?`<p>问${q}，主要看${YS.n}。${YS.bad?(live.length?'病神出现在三传里，病象比较明显，可以多照顾自己。':hits.length?'病神入传但落空亡，症状可能没有看起来那么重。':'病神没有进入三传，从课上看病象不明显。'):(live.length?'它出现在三传里，这件事今天有动静。':hits.length?'它进了三传但落空亡，可能雷声大、雨点小。':'它没出现在三传里，这件事今天也许不会有明显进展。')}</p>`:'')+dlrPlain(r,kong)),dadv)}
   <div class="sec"><h4>四课（上为天盘神，下为干支）</h4><div class="ke">${ke}</div></div>
   <div class="sec"><h4>三传</h4><div class="chuan">${ch}</div></div>
   <div class="sec"><h4>课体 · ${esc(kt)}</h4><p>${KETI[kt]||''}${kts[1]?`三传另成「${esc(kts[1])}」格。`:''}</p></div>
   <div class="sec"><h4>怎么看</h4><p style="font-size:12.5px">初传为发用，看事情从何而起；中传看过程；末传看归结。天将中贵人、六合、青龙、太常、太阴、天后为吉将，螣蛇、朱雀、勾陈、天空、白虎、玄武为凶将。六亲以日干为我：${Object.entries(LIUQIN).map(([k,v])=>k+'＝'+v).join('，')}。</p></div>
   ${dl.late?`<div class="ask">晚上 11 点后的子时，仍按当天的日干支起课（0 点换日）${dl.jiangNote}。</div>`:''}
   <div class="n-foot"><span>课式依九宗门取三传，月将以中气换将</span><span class="badge">大六壬</span></div>`;
  return {html,stamp:'课'};
}

/* ---- 八字 · 今日 ---- */
const HE5={甲:'己',己:'甲',乙:'庚',庚:'乙',丙:'辛',辛:'丙',丁:'壬',壬:'丁',戊:'癸',癸:'戊'};
function castBZ(o={}){
  const p=S.profile,bc=birthCalc(),lunOf=c=>X.Solar.fromYmdHms(c.y,c.m,c.d,c.H,c.M,0).getLunar();
  const LB=lunOf(bc.bj),LL=lunOf(bc.loc),ecB=LB.getEightChar(),ecL=LL.getEightChar(),BL=LL,ec=ecL,hasH=bc.known;
  const NY=gz=>X.LunarUtil.NAYIN[gz]||'';
  const yG=ecB.getYear(),mG=ecB.getMonth(),dG=ecL.getDay(),tG=ecL.getTime(),dm=dG[0];
  const cols=[['年柱',yG,NY(yG)],['月柱',mG,NY(mG)],['日柱',dG,NY(dG)]];if(hasH)cols.push(['时柱',tG,NY(tG)]);
  const pillars=cols.map(([n,gz,ny],i)=>`<div class="pillar ${i===2?'day':''}"><small>${i===2?'日主':shishen(dm,gz[0])}</small><b>${gz[0]}<br>${gz[1]}</b><small>${n} · ${ny}</small></div>`).join('')+(hasH?'':'<div class="pillar"><small>时辰未填</small><b style="color:var(--line-strong)">?<br>?</b><small>时柱</small></div>');
  const cnt={木:0,火:0,土:0,金:0,水:0};cols.forEach(c=>{cnt[WXG[c[1][0]]]++;cnt[WXZ[c[1][1]]]++});const tot=cols.length*2;
  const N=nowLunar(),ly=N.getYearInGanZhiExact(),lm=N.getMonthInGanZhiExact(),ld=N.getDayInGanZhi();
  const ssD=shishen(dm,ld[0]),dz=ec.getDay()[1],tz=ld[1];
  const rel=CHONG[dz]===tz?`今日日支${tz}冲日柱地支${dz}（${dz}${tz}相冲）`:HE6[dz]===tz?`今日日支${tz}与日柱地支${dz}六合`:tz===dz?`今日日支与日柱地支同为${dz}`:`今日日支${tz}与日柱地支${dz}不冲不合`;
  const he5=HE5[dm]===ld[0];
  let yun='';if(p.gender==='女'||p.gender==='男'){try{const Y=ecB.getYun(p.gender==='男'?1:0),ny=new Date().getFullYear();const dy=Y.getDaYun().find(d=>d.getGanZhi()&&d.getStartYear()<=ny&&d.getEndYear()>=ny);
    yun=`<dt>大运</dt><dd>${dy?`${dy.getGanZhi()}（${dy.getStartYear()}–${dy.getEndYear()}，${shishen(dm,dy.getGanZhi()[0])}运）`:'尚未起运'} · ${Y.getStartYear()}年${Y.getStartMonth()}个月${Y.getStartDay()}天起运</dd>`}catch(e){}}
  const html=`<span class="tape"></span>
   <div class="o-head"><span class="o-title">八字 · 今日</span><span class="badge">${esc(p.name||'我')}</span></div>
   <div class="o-meta">生于 ${p.birth.replace(/-/g,'.')} ${p.time?p.time:hasH?hourName(p.hour):'（时辰未填，只排三柱）'} · ${BL.getYearInChinese()}年${BL.getMonthInChinese()}月${BL.getDayInChinese()}<br>${bc.note}</div>
   ${undCard('bz',o)}
   <div class="sec"><div class="grid4">${pillars}</div></div>
   <div class="sec"><h4>五行个数（干支各算一个，共 ${tot} 个）</h4><div class="wx">${Object.entries(cnt).map(([k,v])=>`<div><i style="--h:${v/tot*100}%"></i>${k} ${v}</div>`).join('')}</div></div>
   <div class="sec"><h4>今日</h4><dl class="kv"><dt>日主</dt><dd>${dm}${WXG[dm]}（${isYang(dm)?'阳':'阴'}）</dd><dt>流年</dt><dd>${ly}（${shishen(dm,ly[0])}）</dd><dt>流月</dt><dd>${lm}（${shishen(dm,lm[0])}）</dd><dt>流日</dt><dd><b style="font-weight:500">${ld}</b>（天干${ld[0]}为${ssD}）</dd>${yun}</dl></div>
   <div class="o-big" style="font-size:24px">今日见${ssD}</div>
   <p style="font-size:13.5px;line-height:1.8;margin:0">${SHISHEN_DESC[ssD]}${rel}。${he5?`今日天干${ld[0]}与日主${dm}相合（${dm}${ld[0]}合）。`:''}</p>
   ${plainBox(`<p>你的日主是${dm}${WXG[dm]}。今天是${ld}日，对你来说是「${ssD}」：${SS_PLAIN[ssD]}</p><p>${CHONG[dz]===tz?'今天和你的日支相冲，冲主变动，今天容易有计划被打乱、心里不安稳的感觉，适合放慢节奏。':HE6[dz]===tz?'今天和你的日支相合，合主和顺，人际和合作上比较好说话。':tz===dz?'今天的日支和你的日支相同，同气相求，比较自在。':'今天和你的日支不冲不合，没有额外的波动。'}${he5?`今天的天干${ld[0]}和你的日主${dm}相合，通行释义主和合、牵绊，容易被人或事“绑住”，也容易谈拢。`:''}今年${ly}对你是「${shishen(dm,ly[0])}」，这个月${lm}是「${shishen(dm,lm[0])}」，可以当作大背景。</p>`)}
   <div class="sec"><h4>说明</h4><p style="font-size:12.5px;color:var(--ink-2)">十神按子平法以日干为我推定。日主强弱、格局与喜用神要综合全盘才能判断，这里只列出排盘和今日干支的关系，不替你下结论。</p></div>
   <div class="n-foot"><span>年月柱按出生时刻对应的北京时间定节气；日柱、时柱按出生地${bc.tst?'真太阳时':'当地时间'}；晚子时不换日</span><span class="badge">八字</span></div>`;
  return {html,stamp:'命'};
}

/* ---- 紫微 · 今日 ---- */
const STAR_WX={紫微:'阴土',天机:'阴木',太阳:'阳火',武曲:'阴金',天同:'阳水',廉贞:'阴火，兼木',天府:'阳土',太阴:'阴水',贪狼:'阳木，兼水',巨门:'阴水，一说阴土',天相:'阳水',天梁:'阳土',七杀:'阴金，兼火',破军:'阴水'};
const PALACE_DESC={命宫:'自身性情与整体走向',兄弟:'手足、同辈',夫妻:'伴侣与感情',子女:'子女、创作与晚辈',财帛:'钱财进出',疾厄:'身体状况',迁移:'外出与外界际遇',仆役:'朋友、同事、部属',交友:'朋友、同事、部属',官禄:'事业、学业',田宅:'居所、家宅',福德:'精神状态与享受',父母:'长辈、上司与文书'};
const SIHUA=[['化禄','财禄、顺遂与机缘'],['化权','掌控与能力发挥'],['化科','名声、贵人与文书'],['化忌','阻滞与执着，需要留心']];
function castZW(o={}){
  const p=S.profile,bc=birthCalc(),lc=bc.loc,ds=`${lc.y}-${lc.m}-${lc.d}`,LL=X.Solar.fromYmdHms(lc.y,lc.m,lc.d,lc.H,lc.M,0).getLunar(),isLeap=LL.getMonth()<0;
  const lp=p.leap||'half';let a,leapTxt='';
  if(isLeap&&lp==='next'){let ly=LL.getYear(),lm=Math.abs(LL.getMonth())+1;if(lm>12){lm=1;ly++}a=X.astro.byLunar(`${ly}-${lm}-${LL.getDay()}`,bc.hourIdx,p.gender,false,false,'zh-CN');leapTxt='闰月生：整月按下个月排'}
  else{a=X.astro.bySolar(ds,bc.hourIdx,p.gender,lp!=='this','zh-CN');if(isLeap)leapTxt=lp==='this'?'闰月生：整月按本月排':'闰月生：前半月按本月、十五日后按下个月排'}
  const ming=a.palaces.find(x=>x.name==='命宫'),body=a.palaces.find(x=>x.isBodyPalace);
  const starTxt=pl=>pl.majorStars.length?pl.majorStars.map(s=>`${s.name}${s.brightness?'<small style="color:var(--ink-2)">'+s.brightness+'</small>':''}${STAR_WX[s.name]?`（${STAR_WX[s.name]}）`:''}${s.mutagen?' 化'+s.mutagen:''}`).join('、'):'';
  let mingStars=starTxt(ming);if(!mingStars){const opp=a.palaces[(a.palaces.indexOf(ming)+6)%12];mingStars=`命无正曜，借对宫（${opp.name}）主星：${starTxt(opp)||'亦无'}`}
  const h=a.horoscope(new Date()),dPal=a.palaces[h.daily.index],yPal=a.palaces[h.yearly.index];
  const findStar=n=>{const pl=a.palaces.find(x=>[...x.majorStars,...x.minorStars,...(x.adjectiveStars||[])].some(s=>s.name===n));return pl?pl.name:'—'};
  const sihua=h.daily.mutagen.map((n,i)=>`<dt>${SIHUA[i][0]}</dt><dd>${n} · 在本命${findStar(n)}（${PALACE_DESC[findStar(n)]||''}）</dd>`).join('');
  const html=`<span class="tape"></span>
   <div class="o-head"><span class="o-title">紫微 · 今日</span><span class="badge">${esc(p.name||'我')}</span></div>
   <div class="o-meta">${a.lunarDate} ${a.time} · ${a.chineseDate} · ${p.gender}<br>${bc.note}${leapTxt?'；'+leapTxt:''}</div>
   ${undCard('zw',o)}
   <div class="sec"><h4>本命</h4><dl class="kv"><dt>命宫</dt><dd>${ming.heavenlyStem}${ming.earthlyBranch} · ${mingStars}</dd><dt>身宫</dt><dd>${body?body.name:''}</dd><dt>五行局</dt><dd>${a.fiveElementsClass}</dd><dt>命主</dt><dd>${a.soul}</dd><dt>身主</dt><dd>${a.body}</dd></dl></div>
   <div class="o-big" style="font-size:22px">流日命宫在本命${dPal.name}</div>
   <p style="font-size:13.5px;line-height:1.8;margin:0">今日（${h.daily.heavenlyStem}${h.daily.earthlyBranch}日）以本命${dPal.name}为流日命宫，这一天多与「${PALACE_DESC[dPal.name]||''}」相关。流年（${h.yearly.heavenlyStem}${h.yearly.earthlyBranch}）命宫在本命${yPal.name}。</p>
   ${plainBox(`<p>今天的重心在「${PALACE_DESC[dPal.name]||dPal.name}」这一块。</p><p>化禄落在${findStar(h.daily.mutagen[0])}，${PALACE_DESC[findStar(h.daily.mutagen[0])]||''}方面比较顺、有机会；化权落在${findStar(h.daily.mutagen[1])}，这方面你说了算；化科落在${findStar(h.daily.mutagen[2])}，这方面容易得到认可或贵人帮忙；化忌落在${findStar(h.daily.mutagen[3])}，${PALACE_DESC[findStar(h.daily.mutagen[3])]||''}方面容易卡住，可以多留心，也不必钻牛角尖。</p>`)}
   <div class="sec"><h4>流日四化（${h.daily.heavenlyStem}干）</h4><dl class="kv">${sihua}</dl><p style="font-size:12.5px;color:var(--ink-2);margin-top:6px">${SIHUA.map(s=>s[0]+'主'+s[1]).join('；')}（通行释义）。</p></div>
   <div class="n-foot"><span>依紫微斗数安星法排盘；时辰按出生地${bc.tst?'真太阳时':'当地时间'}</span><span class="badge">紫微斗数</span></div>`;
  return {html,stamp:'紫'};
}

/* ---- 今日黄历 ---- */
const HLG={祭祀:['祭拜祖先、神明',2],嫁娶:['结婚',2],求嗣:['向神明祈求子嗣',2],冠笄:['成人礼（冠指男子、笄指女子）',2],纳采:['订婚下聘，婚姻六礼之一',2],进人口:['家中添人：古指收养子女，今也指添丁、招人',2],纳财:['进财：购置产业、进货、收账等',2],纳畜:['买入家畜，今也指收养宠物',2],会亲友:['宴请、聚会亲友',2],上梁:['安装房屋的屋顶大梁',2],伐木:['砍伐树木',2],出行:['出门远行',2],开市:['开业、开张营业',2],入宅:['搬入新居',2],移徙:['搬家',2],修造:['房屋（阳宅）的建造与修缮',2],动土:['盖房（阳宅）开工，挖下第一锄土',2],破土:['专指墓葬（阴宅）开挖，和盖房的「动土」不是一回事',2],立券:['订立契约、签合同',2],祈福:['祈求神明降福，许愿还愿',2],解除:['清扫宅舍、解除灾厄',2],安葬:['埋葬',2],启钻:['拾骨迁葬（又写作「启攒」）',2],破屋:['拆除房屋',2],坏垣:['拆除围墙',2],栽种:['种植',2],平治道涂:['铺路、修路',2],定磉:['安放柱子底下的石墩（柱础）',2],
作灶:['安修厨灶、移动灶位',1],安门:['安装门户',1],开光:['神佛像塑成后开光供奉',1],出火:['移动神位（「火」指香火），不是失火',1],拆卸:['拆掉建筑物',1],立碑:['在墓前立碑',1],修坟:['修理坟墓',1],行丧:['举行丧礼',1],挂匾:['悬挂招牌、匾额',1],合帐:['制作蚊帐',1],纳婿:['男方入赘女家',1],斋醮:['设坛做法事前的斋戒仪式',1],安香:['安放神位、香火',1],塑绘:['塑神像、绘画像',1],谢土:['建筑完工后祭谢土神',1],入殓:['把遗体放入棺材',1],移柩:['出殡时把棺木移出屋外',1],开生坟:['预先开造坟墓',1],馀事勿取:['除了所列之事，其他事都不宜做',1],除服:['脱下丧服',1],成服:['穿上丧服',1],架马:['与上梁相关的营建工序，一说同上梁',1],
入学:['入学、拜师',1],赴任:['上任就职',1],安床:['安置床铺（搬新居、新婚时）',1],扫舍:['打扫房屋',1],沐浴:['沐浴斋戒、洗澡',1],理发:['理发；古指婴儿剃胎发或出家剃度',1],整手足甲:['修剪手脚指甲（古指婴儿初次剪甲）',1],求医:['看病求医、动手术',1],裁衣:['裁制衣服（古指婚前裁嫁衣）',1],经络:['古指安置纺车、织布，今也引申为安装机器',1],修饰垣墙:['粉刷修整墙壁、围墙',1],乘船:['乘船渡水',1],筑堤:['修筑堤防',1],竖柱:['竖立房屋承重柱',1],开渠:['开挖水渠',1],交易:['买卖、投资等交易',1],出货财:['出货、发货',1],畋猎:['打猎',1],取渔:['捕鱼',1],结网:['结网捕鱼',1],牧养:['放牧牛羊家禽',1],问名:['婚姻六礼之一：问女方姓名、生辰',1],断蚁:['堵塞蚂蚁洞',1],
盖屋:['盖房子',0],起基:['打地基',0],作梁:['制作房梁',0],掘井:['挖井',0],开池:['开挖水池',0],置产:['购置田产房产',0],造畜稠:['修建牲畜栏圈',0],塞穴:['堵塞洞穴',0],补垣:['修补墙垣',0],开仓:['开仓出粮',0],造仓:['建造仓库',0],造船:['造船',0],造桥:['造桥',0],造车器:['制造车具',0],雕刻:['雕刻',0],词讼:['打官司',0],探病:['探望病人',0],治病:['治病',0],针灸:['针灸',0],习艺:['学手艺',0],分居:['分家另住',0],归宁:['出嫁女子回娘家探亲（古义）',0],雇佣:['雇人',0],安机械:['安装机械',0],安碓磑:['安装舂米的碓和石磨',0],开柱眼:['在柱子上凿榫眼',0],合脊:['屋脊合拢、封顶',0],普渡:['超度亡灵的法会',0],割蜜:['取蜂蜜',0],教牛马:['调教牛马',0],开厕:['修建厕所',0],放水:['开闸放水',0],合寿木:['预先制作棺木（寿材）',0],造庙:['修建庙宇',0],修门:['修理门户',0],诸事不宜:['所有事都不宜做',0],无:['没有特别宜做 / 忌做的事',0],归岫:['',-1],订盟:['订婚，或缔结盟约',0],捕捉:['捕捉禽兽、害虫',0]};
const HLG_TAG=['字面义，未查到两个独立来源，仅供参考','单一来源','两个来源互证'];
document.addEventListener('click',e=>{const t=e.target.closest('.yj [data-t]');if(!t)return;const sec=t.closest('.sec');const k=t.dataset.t,g=HLG[k];
  let box=sec.querySelector('.qhint');if(box&&box.dataset.k===k){box.remove();return}if(!box){box=document.createElement('div');box.className='qhint';sec.appendChild(box)}
  box.dataset.k=k;box.innerHTML=g&&g[1]>=0?`<b>${k}</b>：${g[0]}<br><span style="font-size:11px;color:var(--ink-2)">${HLG_TAG[g[1]]}</span>`:`<b>${k}</b>：暂未找到可靠解释`;
  box.animate([{opacity:0,transform:'translateY(-4px)'},{opacity:1,transform:'none'}],{duration:180});clack(0,.05)});

const HL_RISK=['破土','出火','纳采','问名','立券','移徙','冠笄','进人口','启钻','解除','经络','成服','除服','馀事勿取','斋醮','开光','安香','谢土','合帐','纳婿','整手足甲','归宁','订盟','定磉','平治道涂','求嗣','入殓','移柩','开生坟','合寿木','畋猎','取渔','纳畜','纳财','修造'];
const gl=t=>HL_RISK.includes(t)&&HLG[t]?`${t}（${HLG[t][0]}）`:t;
function hlPlain(L){const yi=L.getDayYi().map(gl),ji=L.getDayJi().map(gl),ch=(L.getDayChongDesc().match(/\)(.+)$/)||[])[1];
  return `<p>今天是${L.getDayTianShenType()}日（值神${L.getDayTianShen()}，${L.getDayTianShenLuck()}），${ZX_PLAIN[L.getZhiXing()]||L.getZhiXing()+'日'}。</p><p>适合做：${yi.slice(0,6).join('、')}${yi.length>6?' 等':''}。<br>不太适合做：${ji.slice(0,6).join('、')}${ji.length>6?' 等':''}。</p>${ch?`<p class="sub">今天冲属${ch}，属${ch}的朋友可以多留个心。喜神在${L.getDayPositionXiDesc()}，财神在${L.getDayPositionCaiDesc()}。</p>`:''}`}
const ZX_GOOD='除危定执成开',ZX_BAD='闭破';
const hlScore=L=>{const a=L.getDayTianShenLuck()==='吉'?1:-1,z=L.getZhiXing(),b=ZX_GOOD.includes(z)?1:ZX_BAD.includes(z)?-2:-1,c=L.getXiuLuck()==='吉'?1:-1;return{a,b,c,sc:a+b+c}};
const HL_ACTS={出行:['出行'],签约交易:['立券','交易','纳财'],搬家入宅:['移徙','入宅'],开业开张:['开市','挂匾','开仓'],嫁娶订婚:['嫁娶','纳采','订盟'],动工装修:['动土','修造','起基','盖屋','竖柱'],看病求医:['求医','治病','针灸'],理发:['理发'],安床:['安床'],祭祀祈福:['祭祀','祈福'],聚会会友:['会亲友'],入学拜师:['入学','习艺']};
const hlAct=(Ld,act)=>{const ts=HL_ACTS[act];if(!ts)return null;const yi=Ld.getDayYi(),ji=Ld.getDayJi(),iy=ts.filter(t=>yi.includes(t)),ij=ts.filter(t=>ji.includes(t));
  if(iy.length&&!ij.length)return{v:2,t:`「${iy.join('、')}」列在宜`};if(ij.length&&!iy.length)return{v:-2,t:`「${ij.join('、')}」列在忌`};if(iy.length)return{v:0,t:'宜忌里都出现'};
  if(yi.includes('诸事不宜'))return{v:-2,t:'今日诸事不宜'};if(yi.includes('馀事勿取'))return{v:-1,t:'宜里没有，且「馀事勿取」'};return{v:0,t:'宜忌都没列'}};
function castHL(o={}){if(!o.qp&&o.ask)o.qp=parseQ(o.ask);
  const L=nowLunar(),ts=L.getDayTianShenType(),z=L.getZhiXing(),H=hlScore(L),act=HL_ACTS[o.act]?o.act:null,A=act?hlAct(L,act):null;
  const p=S.profile;let sx='',chong=0;if(p.birth){try{const [y,m,d]=p.birth.split('-').map(Number);sx=X.Solar.fromYmd(y,m,d).getLunar().getYearShengXiao();if(L.getDayChongShengXiao()===sx)chong=-1}catch(e){}}
  const sc=(A?A.v*1.5+H.sc*.5:H.sc)+chong;
  const grade=sc>=3?0:sc>=2?1:sc>=1?2:sc>-1?3:sc>-2.5?4:sc>-4?5:6;
  const f=n=>(n>0?'+':'')+n;
  const basis=`${act?`想做「${act}」：${A.t}（${f(A.v)}×1.5）· 日子本身（以下合计×0.5）：`:''}值神${L.getDayTianShen()}·${ts}（${f(H.a)}）· ${z}日（${f(H.b)}）· ${L.getXiu()}宿${L.getXiuLuck()}（${f(H.c)}）${sx?` · 今日冲${L.getDayChongShengXiao()}，你属${sx}（${chong?'−1':'0'}）`:''} ＝ ${f(sc)}，为${gName(grade)}。<span class="gsrc">择日以事为主：选了想做的事，它在不在宜忌里占主要份量，日子本身的吉凶减半；建除吉凶据「建满平收黑，除危定执黄；成开皆可用，闭破不相当」；${sx?'生肖按农历正月初一划分；':'在设置里填了出生日期，会再看今天冲不冲你的生肖；'}各项分值是本程序的口径。</span>`;
  const hlWhen=()=>{if(!act)return '';const ds=nextDays(Ld=>okDay(Ld)&&!(sx&&Ld.getDayChongShengXiao()===sx),3,60);
    return yqBox(ds.length?`<p>${act?`接下来适合「${act}」的日子`:'接下来值神、建除、星宿至少两项吉的日子'}${sx?'（已避开冲你生肖的日子）':''}：</p><ul class="dlist">${ds.map(x=>`<li><b>${md(x.d)}</b> ${x.L.getDayTianShenType()}·${x.L.getZhiXing()}日${act?` · 宜${HL_ACTS[act].filter(t=>x.L.getDayYi().includes(t)).join('、')}`:''}</li>`).join('')}</ul>`:`<p>往后 60 天里没找到特别合适的日子，可以挑宜忌都没提到、日子本身不差的一天。</p>`,
      '黄历是择日：它不预测事情什么时候发生，只告诉你哪天做这件事比较合适。')};
  const okDay=Ld=>act?(hlAct(Ld,act).v>0&&hlScore(Ld).sc>=-1):hlScore(Ld).sc>=1;
  let nx='';if(grade>=3){const t=new Date();for(let i=1;i<=45;i++){const d=new Date(t.getFullYear(),t.getMonth(),t.getDate()+i,12);const Ld=X.Solar.fromDate(d).getLunar();if(okDay(Ld)&&!(sx&&Ld.getDayChongShengXiao()===sx)){nx=`${d.getMonth()+1}月${d.getDate()}日</b>（周${'日一二三四五六'[d.getDay()]}，${Ld.getDayTianShenType()}·${Ld.getZhiXing()}日${act?`，宜${HL_ACTS[act].filter(x=>Ld.getDayYi().includes(x)).join('、')}`:''}）`;break}}}
  const yi=L.getDayYi().filter(x=>x!=='无'&&x!=='诸事不宜').slice(0,4);
  const jiL=L.getDayJi().filter(x=>x!=='无'&&x!=='诸事不宜').slice(0,4);
  const htips=[...(act?[A.v>0?`「${act}」今天在宜里，可以安排上。`:A.v<0?`「${act}」今天不太合适，如果能挪，可以考虑${nx?`<b>${nx}`:'换个日子'}。`:`「${act}」今天宜忌都没提到，可以结合自己的安排来定${nx&&grade>=4?`；想挑个更稳的日子，可以看看<b>${nx}`:''}。`]:[]),
    ...(chong?[`今天冲你的生肖（${sx}），重要的事可以考虑换一天，日常照常就好。`]:[]),
    ...(!act&&yi.length?[`今天宜：${yi.map(gl).join('、')}，这些事今天做比较合适。`]:[]),
    ...(!act&&jiL.length?[`列在「忌」里的${jiL.map(gl).join('、')}，可以考虑换个日子${nx?`，比如<b>${nx}`:''}。`]:[]),
    ...(grade<=2?['今天日子不错，想做的事可以排上日程。']:['日常的吃饭、上班、见朋友，照常就好。'])];
  const hadv=adviceHTML(grade,[['建滿平收黑，除危定執黃；成開皆可用，閉破不相當。','择日通行口诀，《玉匣记》等通书收录',`今天是${z}日，口诀里${ZX_GOOD.includes(z)?'属「黄」，可用':ZX_BAD.includes(z)?'属「闭破」，最不宜用':'属「黑」'}。这只是一项；某件事具体能不能做，以当天的宜忌为准（宜忌已综合了更多神煞）。`],...(grade>=4?[BUGUO]:[])],htips);
  const html=`<span class="tape"></span>
   <div class="o-head"><span class="o-title">今日黄历</span><span class="badge">${ts}日</span></div>
   <div class="o-meta">${todayStr().replace(/-/g,'.')} · ${L.getYearInGanZhi()}年 ${L.getMonthInChinese()}月${L.getDayInChinese()} · ${L.getMonthInGanZhi()}月 ${L.getDayInGanZhi()}日</div>
   <div class="o-big" style="font-size:26px">${L.getZhiXing()}日 · ${L.getDayTianShen()}${lvl(L.getDayTianShenLuck(),L.getDayTianShenLuck()==='吉'?'good':'bad')}</div>
   ${undCard('hl',o)}
   ${gradeHTML(grade,basis)}
   ${o.qp&&o.qp.kind==='when'?hlWhen():''}
   ${arrange(grade,plainBox(hlPlain(L)),hadv)}
   <div class="sec"><h4>宜<span class="qtip">点词条看古义</span></h4><div class="yj">${L.getDayYi().map(x=>`<span data-t="${x}">${x}</span>`).join('')}</div></div>
   <div class="sec"><h4>忌</h4><div class="yj ji">${L.getDayJi().map(x=>`<span data-t="${x}">${x}</span>`).join('')}</div></div>
   <div class="sec"><dl class="kv"><dt>冲煞</dt><dd>冲${L.getDayChongDesc()} · 煞${L.getDaySha()}</dd><dt>星宿</dt><dd>${L.getXiu()}宿（${L.getXiuLuck()}）</dd><dt>喜神</dt><dd>${L.getDayPositionXiDesc()}</dd><dt>福神</dt><dd>${L.getDayPositionFuDesc()}</dd><dt>财神</dt><dd>${L.getDayPositionCaiDesc()}</dd><dt>彭祖百忌</dt><dd>${L.getPengZuGan()}　${L.getPengZuZhi()}</dd><dt>节气</dt><dd>${L.getPrevJieQi().getName()}后</dd></dl></div>
   <div class="n-foot"><span>宜忌、值神、建除依传统择日规则推算</span><span class="badge">黄历</span></div>`;
  return {html,stamp:'历'};
}

/* ---- 起课前的输入 ---- */
/* ---- 读懂问题：关键词规则（不联网、不用 AI） ---- */
const QK=[
 ['失物',/丢了|丢失|遗失|找不到|找不着|不见了|失物|弄丢|落在哪|放哪|放在哪/],
 ['疾病',/病|身体|健康|手术|医院|发烧|感冒|疼|痛|康复|好转|体检|复查|过敏|住院/],
 ['官事',/官司|诉讼|起诉|仲裁|警察|罚款|纠纷|律师|法院|投诉|处分/],
 ['工作',/工作|公司|面试|升职|加薪|跳槽|求职|找工作|实习|老板|领导|上司|入职|录用|秋招|春招|岗位|职位|辞职|裁员|转正|offer/i],
 ['考试文书',/考试|考研|考公|雅思|托福|成绩|录取|证书|签证|合同|文件|论文|申请|毕业|答辩|分数|面签|审批|批下来/],
 ['婚恋',/喜欢|恋爱|感情|对象|男朋友|女朋友|男友|女友|脱单|结婚|婚|复合|分手|暗恋|表白|相亲|桃花|前任|心意/],
 ['求财',/钱|收入|工资|薪水|投资|股票|基金|生意|发财|奖金|报销|理财|赚|财|债|彩票/],
 ['交易',/买|卖|签约|成交|下单|谈判|砍价|价格/],
 ['家宅',/家里|家人|房子|租房|买房|搬家|装修|室友|房东|家宅|住处/],
 ['出行',/出国|回国|出门|旅行|旅游|出差|航班|飞机|机票|高铁|火车|自驾|行程|再来|回来|回去|回家|到达|到家|来.{0,4}(美国|中国|国内|这边|这里)|去.{0,6}(玩|旅|国|省|市|州|岛|美国|日本|韩国|英国|欧洲|中国|上海|北京)|快递|包裹|到货|发货/],
 ['谒见',/见面|见到|拜访|约见|面谈|约会|见一面/],
 ['天时',/天气|下雨|下雪|晴天|刮风|台风|降温/],
 ['饮食',/吃饭|饭局|聚餐|请客/],
 ['求名',/出名|名气|评选|获奖|比赛|竞选|排名|涨粉/]];
const QKIND=[['when',/什么时候|啥时候|何时|几时|哪天|哪一天|多久|多长时间|哪年|哪个月|几月|几号|多少天|何日|什么时间|几点|多快|快了吗|快了没/],
 ['where',/在哪|哪里|哪儿|什么地方|方位|往哪|哪个方向|放哪/],['which',/还是|哪个好|选哪|哪一个/],['whether',/能不能|会不会|可不可以|能否|是否|行不行|好不好|顺不顺|成不成|有没有|[吗嘛]/]];
const KIND_N={when:'什么时候',where:'在哪里',which:'选哪个',whether:'能不能、顺不顺'};
const OTHER_P=/他|她|它|对方|[爸妈]|爷爷|奶奶|姥|外公|外婆|老公|老婆|孩子|儿子|女儿|朋友|同学|同事|男友|女友|男朋友|女朋友|对象|快递|包裹|货/;
function parseQ(t){t=(t||'').trim();if(!t)return null;const hit=[];let topic=null;
  const all=QK.filter(([n,re])=>re.test(t));const kind=(QKIND.find(([n,re])=>re.test(t))||[null])[0];
  const cx=all.find(([n])=>n==='出行'),generic=cx&&/^(回来|回去|回家|到达|到家)$/.test(t.match(cx[1])[0]),others=all.filter(([n])=>n!=='出行');
  const person=OTHER_P.test(t)&&!/^我/.test(t);
  if(cx&&kind==='when'&&(!generic||!others.length||person))topic='出行';else if(others.length&&generic&&!person)topic=others[0][0];else if(cx&&generic&&person)topic='出行';else if(all.length)topic=all[0][0];
  if(!topic&&kind==='when'&&person&&/来|回|到/.test(t))topic='行人';
  if(topic==='出行'&&OTHER_P.test(t)&&!/^我/.test(t)&&/来|回|到/.test(t))topic='行人';
  const words=[];QK.forEach(([n,re])=>{const m=t.match(re);if(m&&(n===topic||(topic==='行人'&&n==='出行')))words.push(m[0])});QKIND.forEach(([n,re])=>{const m=t.match(re);if(m&&n===kind)words.push(m[0])});
  const far=/几年|哪年|明年|后年|毕业|退休|移民|美国|中国|国外|出国|回国|结婚|买房/.test(t),near=/今天|明天|后天|今晚|这周|这礼拜|下周|这几天|马上|快递|包裹|钥匙/.test(t);
  if(topic==='行人'&&!words.some(w=>/来|回|到|快递|包裹|货/.test(w))){const m=t.match(/来|回|到/);if(m)words.unshift(m[0])}
  return{t,topic,kind,words:[...new Set(words)],span:near?'near':far?'far':'mid',years:/几年|哪年/.test(t),day:(t.match(/今天|今晚|明天|明晚|后天/)||[])[0]||''}}
const MAPQ={xlr:{失物:'失物',疾病:'疾病',官事:'官事',工作:'官事',求财:'求财',交易:'求财',家宅:'家宅',出行:'行人',行人:'行人'},
 mh:{失物:'失物',疾病:'疾病',官事:'人事',考试文书:'求名',工作:'求名',求名:'求名',婚恋:'婚姻',求财:'求财',交易:'交易',家宅:'家宅',出行:'出行',行人:'行人',谒见:'谒见',天时:'天时',饮食:'饮食'},
 dlr:{求财:'求财',交易:'求财',考试文书:'考试文书',工作:'工作',求名:'工作',疾病:'疾病',婚恋:'婚恋',出行:'出行',行人:'出行'}};
const DEFQ={xlr:'综合',mh:'人事',dlr:'综合'};
const HLK=[['搬家入宅',/搬家|入住|乔迁|入宅/],['签约交易',/签约|签合同|合同|交易|买卖|成交/],['开业开张',/开业|开张|开店/],['嫁娶订婚',/结婚|领证|订婚|婚礼|嫁|娶/],['动工装修',/装修|动工|动土|开工/],['看病求医',/看病|手术|就医|求医|体检/],['理发',/理发|剪头|剪发|烫发|染发/],['安床',/安床|换床|买床/],['祭祀祈福',/祭祀|祈福|拜佛|上香|扫墓/],['聚会会友',/聚会|聚餐|见朋友|会友|请客/],['入学拜师',/入学|开学|报到|拜师/],['出行',/出行|出门|旅行|旅游|出差|出国|回国|航班|机票|再来|来.{0,4}美国|去.{0,6}(玩|美国|国外)/]];
const hlActOf=t=>{const m=HLK.find(([n,re])=>re.test(t||''));return m?m[0]:null};
/* 理解说明：k=方法，qp=解析结果，q=实际采用的分类 */
function undText(k,qp,q,act){if(!qp)return '';
  const tp=qp.topic==='行人'?'行人（别人或东西来到）':qp.topic==='出行'?'出行':qp.topic;
  let t=`理解为：${tp?`问<b>${tp}</b>`:'没认出是哪一类事'}${qp.kind?`，问的是<b>${KIND_N[qp.kind]}</b>`:''}${qp.words.length?`（依据：${qp.words.map(w=>'「'+esc(w)+'」').join('')}）`:''}。`;
  if(k==='xlr'||k==='mh'||k==='dlr'){const m=MAPQ[k][qp.topic];
    if(!qp.topic)t+=`按「${q}」看。`;else if(!m)t+=`这一法没有对应的分类，按「${DEFQ[k]}」看。`;
    else if(k==='xlr'&&qp.topic==='出行')t+='小六壬没有「出行」一类，歌诀里的「行人」就是出门在外、在路上的人，所以按「行人」看。';
    else if(k==='dlr'&&qp.topic==='行人')t+='大六壬这里按「出行」看驿马。';
    else if(m!==qp.topic){const d=(k==='mh'&&QDESC_MH[m])||(k==='dlr'&&QDESC_DLR[m])||QDESC[m];t+=`这一法里归「${m}」${d?`（${d.replace(/。$/,'')}）`:''}。`}
    if(q&&m&&q!==m)t+=`你手动选了「${q}」，按你选的看。`}
  if(k==='hl')t+=act?`想做的事按「${act}」看。`:'没认出想做什么事，看整天。';
  if(k==='bz'||k==='zw')t+='八字、紫微看的是你和今天的关系，不针对单个问题，也不推具体时间。';
  if(qp.kind==='when'&&(k==='xlr'||k==='mh'||k==='dlr'))t+='下面会多一段「应期」。';
  if(qp.kind==='when'&&k==='hl')t+=act?'下面会列出接下来适合的日子。':'黄历是择日，只能告诉你哪天适合做某件事，回答不了事情什么时候发生；想问时间，可以换小六壬、梅花易数或大六壬。';
  if(qp.kind==='which')t+='二选一的问题，古法一次只看一件事，可以把两个选项分开各问一次。';
  if(qp.kind==='where')t+=k==='xlr'?'结果宫的歌诀里如果有讲方位的句子，会一并标出。':'这一法不专门推方位，下面只看吉凶走向。';
  return t}
const undCard=(k,o)=>o.ask?`<div class="ask">所问：<b>${esc(o.ask)}</b></div>${o.qp?`<div class="und">${undText(k,o.qp,o.q,o.act)}</div>`:''}`:'';
const UNIT=qp=>qp&&qp.span==='near'?['天','近事论日']:qp&&qp.span==='far'?[qp.years?'年':'个月',qp.years?'问的是哪一年，论年':'远一点的事论月']:['天或个月','几天内的事论日，几个月的事论月'];
const yqBox=(body,src)=>`<div class="sec yq"><h4>应期 · 什么时候</h4>${body}<p class="gloss" style="margin-left:0">${src}</p></div>`;
/* 往后找日子：返回 [{d,L}] */
function nextDays(pred,n,max=60){const out=[],t=new Date();for(let i=1;i<=max&&out.length<n;i++){const d=new Date(t.getFullYear(),t.getMonth(),t.getDate()+i,12);const Ld=X.Solar.fromDate(d).getLunar();if(pred(Ld))out.push({d,L:Ld})}return out}
const md=d=>`${d.getMonth()+1}月${d.getDate()}日（周${'日一二三四五六'[d.getDay()]}）`;
function missingFor(k){const p=S.profile,m=[];if(k==='bz'||k==='zw'){if(!p.birth)m.push('出生日期')}if(k==='zw'){if(p.hour==null&&!p.time)m.push('出生时辰');if(p.gender!=='女'&&p.gender!=='男')m.push('性别')}return m}
function askOracle(){
  const k=S.method,M=METHODS[k],L=nowLunar();
  const miss=missingFor(k);
  if(miss.length){
    openBS(`<div class="bs-title"><h3>${M.n}</h3><span>还差一点信息</span></div>
      <div class="note">${k==='bz'?'八字要用出生日期排年、月、日三柱，时辰和性别可选（有时辰才能排时柱，有性别才能排大运）。':'紫微斗数要用出生日期、出生时辰和性别安命宫、定大限，三样缺一不可。'}<br>还缺：<b>${miss.join('、')}</b>。</div>
      <div class="note" style="margin-top:8px">不想填的话，可以先抽<b>小六壬</b>、<b>梅花易数</b>或<b>大六壬</b>，它们只用此刻的时间或你报的数。</div>
      <div class="acts"><button class="btn sm" data-sw="xlr">换小六壬</button><button class="btn sm" data-sw="mh">换梅花易数</button><button class="btn sm primary" data-fill>去填写</button></div>`,c=>{
      c.onclick=async e=>{const b=e.target.closest('button');if(!b)return;
        if(b.dataset.sw){await closeBS();setMethod(b.dataset.sw)}
        if(b.hasAttribute('data-fill')){await closeBS();openSettings(true)}}});
    return}
  const st={how:'time',q:k==='mh'?'人事':'综合',ask:'',nums:[],slot:0,qinfo:false};const maxLen=k==='xlr'?2:3,nSlots=k==='xlr'?3:2;
  const qs=k==='xlr'?Object.keys(XLR_Q):k==='mh'?MH_CATS:k==='dlr'?DLR_CATS:null;
  const timeNote={xlr:`以此刻起课：${L.getMonthInChinese()}月${L.getDayInChinese()}、${L.getTimeZhi()}时`,mh:`以此刻起卦：${L.getYearZhi()}年、${L.getMonthInChinese()}月${L.getDayInChinese()}、${L.getTimeZhi()}时`};
  const p=S.profile;
  const curQ=()=>st.qp&&!st.qManual&&qs?(MAPQ[k][st.qp.topic]||DEFQ[k]):st.q;
  const body=()=>{let h='';
    h+=`<div class="lab2">写下想问的（可不填）</div><input class="tin" id="askTxt" maxlength="40" placeholder="${k==='hl'?'比如：什么时候搬家合适':'比如：什么时候再来美国'}" value="${esc(st.ask)}"><div class="und" id="qUnd"></div>`;
    if(qs)h+=`<div class="lab2">所问之事<span class="qtip">会按你写的自动选；也可以自己点。选中后再点一下，看是什么意思</span></div><div class="segs" data-g="q">${qs.map(x=>`<button type="button" class="chip plain" data-v="${x}" aria-pressed="${st.q===x}">${x}</button>`).join('')}</div>${st.qinfo?`<div class="qhint"><b>${st.q}</b>：${(k==='mh'&&QDESC_MH[st.q])||(k==='dlr'&&QDESC_DLR[st.q])||QDESC[st.q]||''}</div>`:''}`;
    if(k==='xlr'||k==='mh'){h+=`<div class="lab2">起课方式</div><div class="segs" data-g="how"><button type="button" class="chip plain" data-v="time" aria-pressed="${st.how==='time'}">用此刻时间</button><button type="button" class="chip plain" data-v="num" aria-pressed="${st.how==='num'}">${k==='xlr'?'报三个数':'报数'}</button></div>`;
      h+=st.how==='time'?`<div class="note" style="margin-top:10px">${timeNote[k]}</div>`:`<div class="ntiles ${k==='mh'?'two':''}">${(k==='xlr'?[0,1,2]:[0,1]).map(i=>`<button type="button" class="ntile ${st.slot===i?'on':''}" data-slot="${i}"><b class="${st.nums[i]?'':'ph'}">${st.nums[i]||'–'}</b><small>${k==='mh'?(i===0?'上卦数':'下卦数 · 可不填'):'第'+'一二三'[i]+'个数'}</small></button>`).join('')}</div>
        <div class="keypad">${[1,2,3,4,5,6,7,8,9].map(n=>`<button type="button" data-key="${n}">${n}</button>`).join('')}<button type="button" class="fn" data-key="c">清空</button><button type="button" data-key="0">0</button><button type="button" class="fn" data-key="b">⌫</button></div><div class="ask">${k==='xlr'?'心里想着所问之事，随口报三个 1–99 的数。':'报一个数：作上卦，时辰数作下卦；报两个数：先数为上卦，后数为下卦。'}</div>`}
    if(k==='dlr'){const r=dlrAt(new Date()).r;h+=`<div class="note" style="margin-top:12px">以此刻起课：${r.dateInfo.bazi.split(' ')[2]}日 ${L.getTimeZhi()}时，月将 ${r.dateInfo.yuejiang}。</div>`}
    if(k==='bz')h+=`<div class="note" style="margin-top:12px">用设置里的个人信息：${p.birth.replace(/-/g,'.')} ${p.hour!=null?hourName(p.hour):'时辰未填'}${p.gender?' · '+p.gender:''}</div>`;
    if(k==='zw')h+=`<div class="note" style="margin-top:12px">用设置里的个人信息：${p.birth.replace(/-/g,'.')} ${hourName(p.hour)} · ${p.gender}</div>`;
    if(k==='hl')h+=`<div class="lab2">今天想做的事（可不选）</div><div class="segs" data-g="act">${['不选',...Object.keys(HL_ACTS)].map(x=>`<button type="button" class="chip plain" data-v="${x}" aria-pressed="${(st.act||'不选')===x}">${x}</button>`).join('')}</div><div class="note" style="margin-top:10px">今天 ${todayStr().replace(/-/g,'.')} · ${L.getMonthInChinese()}月${L.getDayInChinese()}。选了想做的事，会先看它在不在今天的宜忌里；不选就看整天。${p.birth?'':'在设置里填出生日期，还会看今天冲不冲你的生肖。'}</div>`;
    return h};
  /* 按输入的文字更新理解说明、自动选分类，不重建输入框 */
  const paintParse=c=>{st.qp=parseQ(st.ask);
    if(qs&&!st.qManual){st.q=st.qp?(MAPQ[k][st.qp.topic]||DEFQ[k]):DEFQ[k];c.querySelectorAll('[data-g=q] .chip').forEach(x=>x.setAttribute('aria-pressed',x.dataset.v===st.q))}
    if(k==='hl'&&!st.actManual){st.act=st.qp&&hlActOf(st.ask)||null;c.querySelectorAll('[data-g=act] .chip').forEach(x=>x.setAttribute('aria-pressed',x.dataset.v===(st.act||'不选')))}
    const u=c.querySelector('#qUnd');if(u){u.innerHTML=st.qp?undText(k,st.qp,st.q,st.act):'';u.hidden=!st.qp}};
  openBS(`<div class="bs-title"><h3>${M.n}</h3><span>${M.need}</span></div><div id="askBody"></div><div class="acts"><button class="btn sm" data-x>取消</button><button class="btn sm primary" data-go>摇签起课</button></div>`,c=>{
    const ab=c.querySelector('#askBody');const syncAsk=()=>{const v=c.querySelector('#askTxt');if(v)st.ask=v.value};ab.innerHTML=body();paintParse(c);
    ab.addEventListener('input',e=>{if(e.target.id==='askTxt'){st.ask=e.target.value;paintParse(c)}});
    const paintTiles=()=>{c.querySelectorAll('.ntile').forEach(t=>{const i=+t.dataset.slot,b=t.querySelector('b');t.classList.toggle('on',st.slot===i);b.textContent=st.nums[i]||'–';b.classList.toggle('ph',!st.nums[i])})};
    c.onclick=async e=>{const b=e.target.closest('button');if(!b)return;
      if(b.dataset.slot!=null){st.slot=+b.dataset.slot;clack(0,.05);paintTiles();return}
      if(b.dataset.key!=null){const kk=b.dataset.key,cur=st.nums[st.slot]||'';buzz(5);clack(0,.05);
        if(kk==='b')st.nums[st.slot]=cur.slice(0,-1);
        else if(kk==='c'){st.nums=[];st.slot=0}
        else{if(cur.length>=maxLen){if(st.slot<nSlots-1){st.slot++;st.nums[st.slot]=(kk==='0'?'':kk)}}
          else if(!(cur===''&&kk==='0'))st.nums[st.slot]=cur+kk;
          if((st.nums[st.slot]||'').length>=maxLen&&st.slot<nSlots-1&&k==='xlr')st.slot++}
        paintTiles();const t=c.querySelector(`.ntile[data-slot="${st.slot}"] b`);t&&t.animate([{transform:'scale(1.25)'},{transform:'none'}],{duration:180,easing:'ease-out'});return}
      const g=b.parentElement.dataset.g;if(g){syncAsk();if(g==='q'&&st.q===b.dataset.v){st.qinfo=!st.qinfo}else{if(g==='q'){st.qinfo=false;st.qManual=true}if(g==='act'){st.actManual=true;st.act=b.dataset.v==='不选'?null:b.dataset.v}else st[g]=b.dataset.v}clack(0,.06);ab.innerHTML=body();paintParse(c);
        if(g==='q'&&st.qinfo){const qh=c.querySelector('.qhint');qh&&qh.animate([{opacity:0,transform:'translateY(-4px)'},{opacity:1,transform:'none'}],{duration:200,easing:'ease-out'})}return}
      if(b.hasAttribute('data-x')){closeBS();return}
      if(b.hasAttribute('data-go')){
        const v=c.querySelector('#askTxt');if(v)st.ask=v.value.trim();st.qp=parseQ(st.ask);let arg=st;
        if(st.how==='num'){const need=k==='xlr'?3:1;const tiles=[...c.querySelectorAll('.ntile')];
          const nums=tiles.map((t,i)=>st.nums[i]?parseInt(st.nums[i],10):null);let bad=false;
          tiles.forEach((t,i)=>{if(i<need&&!(nums[i]>0)){t.classList.remove('shake');void t.offsetWidth;t.classList.add('shake');bad=true}});
          if(bad){toast(k==='xlr'?'三个数都要填':'至少报一个数');return}arg={...st,nums:nums.filter(x=>x!=null)}}
        const akey=`${k}|${qs?st.q:''}|${st.act||''}|${st.ask}`,alog=ls.get(KEY+'.asks')||{},today=todayStr(),seen=alog.d===today?alog.keys||[]:[];
        if(seen.includes(akey)&&st.warned!==akey){st.warned=akey;ab.querySelector('.repeat')?.remove();
          const box=document.createElement('div');box.className='qhint repeat';box.innerHTML=`<b>今天已经问过${st.ask?'「'+esc(st.ask)+'」':'这件事'}了</b>${qline('初筮告，再三渎，渎则不告。','《周易》蒙卦')}<span style="font-size:12px;color:var(--ink-2)">古人认为第一次占问最有意义，反复问反而看不清。${['hl','bz','zw'].includes(k)?'这一项今天的结果是固定的，再抽也一样。':''}如果还想再看一次也可以，不妨当作参考。</span>`;
          ab.appendChild(box);box.animate([{opacity:0,transform:'translateY(-4px)'},{opacity:1,transform:'none'}],{duration:220,easing:'ease-out'});box.scrollIntoView({block:'nearest',behavior:'smooth'});b.textContent='仍然摇签';clack(0,.06);return}
        let res;try{res={xlr:castXLR,mh:castMH,dlr:castDLR,bz:castBZ,zw:castZW,hl:castHL}[k](arg)}catch(err){console.error(err);toast('排盘出错了：'+err.message);return}
        ls.set(KEY+'.asks',{d:today,keys:[...new Set([...seen,akey])].slice(-60)});
        await closeBS();
        const sticks=[...document.querySelectorAll('.stick')];shakeAndOpen(rnd(sticks),M.tip,res)}};
  });
}

/* ---------- note: fold + unfold ---------- */
async function openNote({html,stamp,stickEl,entry}){
  busy=true;
  const ov=$('#ov'), stage=$('#stage'); ov.hidden=false;
  if(!stickEl){$('#nact').innerHTML='';$('#scrim').animate([{opacity:0},{opacity:1}],{duration:300*T,fill:'both'})}
  const card=document.createElement('article'); card.className='card'; card.innerHTML=html; card.style.visibility='hidden'; stage.appendChild(card);
  const W=card.offsetWidth, h=Math.ceil(card.offsetHeight/3); card.style.height=3*h+'px';
  const slice=k=>{const c=card.cloneNode(true);c.style.visibility='visible';c.style.top=(-k*h)+'px';c.style.width=W+'px';c.style.height=3*h+'px';return c};
  const fold=document.createElement('div'); fold.className='fold'; fold.style.width=W+'px'; fold.style.height=h+'px';
  const mid=document.createElement('div'); mid.className='face'; mid.appendChild(slice(1));
  const mk=(k,isTop)=>{const p=document.createElement('div');p.className='panel';p.style.height=h+'px';
    const fr=document.createElement('div');fr.className='face';fr.appendChild(slice(k));const sh=document.createElement('div');sh.className='shade';fr.appendChild(sh);
    const bk=document.createElement('div');bk.className='face back';
    if(isTop)bk.innerHTML=`<div class="stamp"><span class="ring">${stamp}</span>小日记</div>`;
    p.append(fr,bk);return p};
  const top=mk(0,true), bot=mk(2,false);
  top.style.bottom='100%'; top.style.transformOrigin='50% 100%'; top.style.transform='rotateX(-180deg) translateZ(-2px)';
  bot.style.top='100%'; bot.style.transformOrigin='50% 0'; bot.style.transform='rotateX(180deg) translateZ(-1px)';
  fold.append(mid,top,bot); stage.appendChild(fold);
  const EZ='cubic-bezier(.22,1,.36,1)';
  await fold.animate([{transform:'translateY(24px) scale(.5) rotate(-6deg)',opacity:0},{transform:'translateY(-3px) scale(1.03) rotate(.8deg)',opacity:1,offset:.65},{transform:'none',opacity:1}],{duration:300*T,easing:'cubic-bezier(.2,.8,.3,1)'}).finished.catch(()=>{});
  await sleep(40*T);
  swish(); buzz(10);
  const tD=380*T,bD=340*T;
  top.querySelector('.shade').animate([{opacity:1},{opacity:0}],{duration:tD,easing:'ease-out',fill:'forwards'});
  const ta=top.animate([{transform:'rotateX(-180deg) translateZ(-2px)'},{transform:'rotateX(6deg) translateZ(-2px)',offset:.78},{transform:'rotateX(0deg) translateZ(-2px)'}],{duration:tD,easing:EZ,fill:'forwards'});
  await sleep(tD*.5);
  swish(); buzz(10);
  bot.querySelector('.shade').animate([{opacity:1},{opacity:0}],{duration:bD,easing:'ease-out',fill:'forwards'});
  const ba=bot.animate([{transform:'rotateX(180deg) translateZ(-1px)'},{transform:'rotateX(-5deg) translateZ(-1px)',offset:.78},{transform:'rotateX(0deg) translateZ(-1px)'}],{duration:bD,easing:EZ,fill:'forwards'});
  await Promise.all([ta.finished.catch(()=>{}),ba.finished.catch(()=>{})]);
  card.style.height=''; card.style.visibility='visible'; fold.remove();
  const act=$('#nact');
  act.innerHTML=stickEl?`<button class="btn" id="aBack">放回签筒</button><button class="btn primary" id="aAgain">${mode==='oracle'?'再起一课':mode==='quote'?'再抽一句':'再抽一支'}</button>`
                       :`<button class="btn danger" id="aDel">删除</button><button class="btn primary" id="aBack">收起</button>`;
  [...act.children].forEach((b,i)=>b.animate([{opacity:0,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:280*T,delay:i*70*T,fill:'backwards',easing:'ease-out'}));
  const close=q=>closeNote(card,stickEl,q);
  $('#aBack').onclick=()=>close(false);
  $('#scrim').onclick=()=>close(false);
  if(stickEl)$('#aAgain').onclick=async()=>{await close(true);if(mode==='oracle')askOracle();else if(mode==='quote')drawQuote();else drawDiary()};
  else{ let armed=false; $('#aDel').onclick=async ev=>{ if(!armed){armed=true;ev.currentTarget.textContent='确定删除？';setTimeout(()=>{armed=false;const b=$('#aDel');if(b)b.textContent='删除'},3000);return}
     entries=entries.filter(x=>x.id!==entry.id);save();await close(false);renderList();renderCup();toast('删掉了')}}
  busy=false;
}
async function closeNote(card,stickEl,quick){
  busy=true; $('#scrim').onclick=null; $('#nact').innerHTML='';
  let tx=0,ty=60;
  if(stickEl){const a=card.getBoundingClientRect(),c=cup.getBoundingClientRect();tx=c.left+c.width/2-(a.left+a.width/2);ty=c.top+60-(a.top+a.height/2)}
  const d=(quick?300:420)*T;
  card.animate([{transform:'none',opacity:1},{transform:`translate(${tx*.15}px,-14px) scale(1.03)`,opacity:1,offset:.25},{transform:`translate(${tx}px,${ty}px) scale(.12,.3) rotate(-30deg)`,opacity:0}],{duration:d,easing:'cubic-bezier(.5,0,.75,0)',fill:'forwards'});
  await $('#scrim').animate([{opacity:1},{opacity:0}],{duration:d,fill:'forwards'}).finished.catch(()=>{});
  $('#ov').hidden=true; $('#stage').innerHTML=''; $('#scrim').getAnimations().forEach(a=>a.cancel());
  if(stickEl){const r=+stickEl.dataset.r;stickEl.style.visibility='';clack(.12,.2);
    await stickEl.animate([{transform:`translateY(-90px) rotate(${r}deg)`},{transform:`translateY(6px) rotate(${r}deg)`,offset:.75},{transform:`rotate(${r}deg)`}],{duration:380*T,easing:'ease-in'}).finished.catch(()=>{});
    $('#hint').innerHTML=hintHTML();}
  busy=false;
}

/* ---------- tabs ---------- */
function go(v){
  document.querySelectorAll('.tab').forEach(t=>t.setAttribute('aria-selected',t.dataset.v===v));
  ['draw','write','list'].forEach(k=>$('#v-'+k).hidden=k!==v);
  $('#app').classList.toggle('on-draw',v==='draw');
  closeFilter();
  if(v==='list')renderList();
  if(v==='write')renderPickers();
  if(v==='draw'&&pendingDrop){filters={mood:null,weather:null};if(mode!=='diary'){setMode('diary');applyCup()}renderFilters();renderCup();dropNew()}
}
document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{ if(busy)return; go(t.dataset.v)});
function dropNew(){const s=document.querySelector(`.stick[data-id="${pendingDrop}"]`);pendingDrop=null;if(!s)return;const r=+s.dataset.r;
  s.animate([{transform:`translateY(-320px) rotate(${r+20}deg)`,opacity:0},{opacity:1,offset:.15},{transform:`translateY(10px) rotate(${r}deg)`,offset:.7},{transform:`translateY(-12px) rotate(${r}deg)`,offset:.85},{transform:`rotate(${r}deg)`}],{duration:780*T,delay:250,easing:'ease-in',fill:'backwards'});
  setTimeout(()=>{clack(0,.25);clack(.06,.12);buzz(20);cup.animate([{transform:'none'},{transform:'translateY(4px) scale(1.03,.97) rotate(-2deg)'},{transform:'none'}],{duration:320,easing:'ease-out'})},250+546*T)}

/* ---------- write ---------- */
let wDate=todayStr(),wMoods=[],wWeather=null,openPk={mood:false,weather:false};
function renderDateBtn(){const f=fmt(wDate),rel=wDate===todayStr()?'今天':'';$('#wDateBtn').innerHTML=`<span class="big">${f.md}</span><span class="sm"><b>${rel?rel+' · ':''}周${f.wd} · ${f.y}</b>${lunarText(wDate)}</span>${CAL}`}
$('#wDateBtn').onclick=()=>datePicker({title:'哪一天的日记',value:wDate,max:todayStr(),onPick:v=>{wDate=v;renderDateBtn()}});
function renderPickers(){
  const M=MOODS(),W=WEATHER();
  const build=(host,kind)=>{
    const dict=kind==='mood'?M:W, sel=kind==='mood'?wMoods:(wWeather?[wWeather]:[]), open=openPk[kind];
    const sum=sel.filter(k=>dict[k]).length?sel.filter(k=>dict[k]).map(k=>`<span>${sv(dict[k].d)}${esc(dict[k].t)}</span>`).join(''):kind==='mood'?'<span class="muted">无 · 点开可多选</span>':`<span>${sv(W.sunny.d)}晴</span><span class="muted">默认</span>`;
    host.innerHTML=`<button type="button" class="pk-head" aria-expanded="${open}"><span class="lab">${kind==='mood'?'心情':'天气'}</span><span class="pk-sum">${sum}</span>${CHEV}</button>
      <div class="pk-body" ${open?'':'hidden'}><div class="row wrap">${Object.entries(dict).map(([k,v])=>`<button type="button" class="chip" data-k="${k}" aria-pressed="${sel.includes(k)}">${kind==='mood'?`<i class="dotc" style="background:${v.c}"></i>`:''}${sv(v.d)}${esc(v.t)}</button>`).join('')}<button type="button" class="chip add" data-add aria-label="自定义">${PLUS}</button></div></div>`;
    host.onclick=e=>{
      if(e.target.closest('.addf'))return;
      if(e.target.closest('.pk-head')){openPk[kind]=!openPk[kind];renderPickers();const b=host.querySelector('.pk-body');if(openPk[kind])b.animate([{opacity:0,transform:'translateY(-4px)'},{opacity:1,transform:'none'}],{duration:200});return}
      const c=e.target.closest('.chip');if(!c)return;
      if(c.hasAttribute('data-add')){addForm(host.querySelector('.pk-body'),kind,k=>{if(kind==='mood')wMoods.push(k);else wWeather=k;renderPickers()});return}
      const k=c.dataset.k;
      if(kind==='mood')wMoods=wMoods.includes(k)?wMoods.filter(x=>x!==k):[...wMoods,k];else wWeather=wWeather===k?null:k;
      clack(0,.06);renderPickers()};
  };
  build($('#pkMood'),'mood');build($('#pkWeather'),'weather');
}
function resetWrite(){wDate=todayStr();renderDateBtn();$('#wText').value='';wMoods=[];wWeather=null;openPk={mood:false,weather:false};renderPickers();$('#wCount').textContent='0 字'}
$('#wText').addEventListener('input',e=>$('#wCount').textContent=e.target.value.trim().length+' 字');
$('#wForm').addEventListener('submit',e=>{e.preventDefault();const t=$('#wText').value.trim();
  if(!t){const a=$('#wText');a.classList.remove('shake');void a.offsetWidth;a.classList.add('shake');a.focus();return}
  const id='e'+Date.now().toString(36);entries.push({id,date:wDate,moods:wMoods.slice(),weather:wWeather||'sunny',text:t});save();
  pendingDrop=id;resetWrite();go('draw');toast('投进签筒了')});

/* ---------- list ---------- */
function renderList(){
  const s=entries.slice().sort((a,b)=>b.date.localeCompare(a.date)),M=MOODS(),W=WEATHER();
  $('#lTitle').textContent=`共 ${s.length} 篇`;
  $('#clearSamples').hidden=!entries.some(e=>e.sample);
  let html='',last='';
  s.forEach(e=>{const f=fmt(e.date),mk=f.y+' · '+pad(f.m);if(mk!==last){html+=`<div class="month">${mk}</div>`;last=mk}
    const w=W[e.weather]||W.sunny,ms=(e.moods||[]).filter(k=>M[k]),td=e.todos||[];
    const ex=e.text||(td.length?`做了 ${td.filter(t=>t.done).length} 件事：${td.filter(t=>t.done).map(t=>t.name).join('、')}`:'');
    html+=`<button class="entry" data-id="${e.id}"><span class="d">${pad(f.d)}<small>周${f.wd}</small></span><span style="min-width:0"><span class="meta"><span>${sv(w.d)}${esc(w.t)}</span>${ms.map(k=>`<span>${sv(M[k].d)}${esc(M[k].t)}</span>`).join('')}${!ms.length?'<span>心情 无</span>':''}${td.length?'<span class="badge">每日List</span>':''}${e.sample?'<span class="badge">示例</span>':''}</span><span class="ex">${esc(ex)}</span></span></button>`});
  $('#list').innerHTML=html||'<p style="color:var(--ink-2);font-family:var(--f-display);text-align:center;margin-top:40px">还没有日记，去写第一篇吧</p>';
}
$('#list').onclick=e=>{const b=e.target.closest('.entry');if(!b||busy)return;const en=entries.find(x=>x.id===b.dataset.id);if(en)openNote({html:cardHTML(en),stamp:stampFor(en),stickEl:null,entry:en})};
$('#clearSamples').onclick=()=>{entries=entries.filter(e=>!e.sample);save();renderList();renderCup();toast('示例已清除')};
$('#impBtn').onclick=()=>{const p=$('#imp');p.hidden=!p.hidden;if(!p.hidden)$('#impText').focus()};

/* ---------- import ---------- */
const KW_W=[['snow',/雪/],['rain',/雨/],['wind',/风/],['fog',/雾|霾|阴天/],['cloudy',/多云|云/],['sunny',/晴|太阳|阳光/]];
const KW_M=[['angry',/生气|气死|烦死|恼火|火大/],['down',/难过|伤心|低落|丧|郁闷|想哭|失落/],['tired',/累|困|疲|好忙/],['moved',/感动|温暖|暖心|泪目/],['happy',/开心|高兴|快乐|哈哈|好玩|幸福/],['calm',/平静|安静|放松|慢慢/]];
const tagW=t=>{for(const [k,r] of KW_W) if(r.test(t)) return k; return null};
const tagM=t=>KW_M.filter(([k,r])=>r.test(t)).map(x=>x[0]).slice(0,3);
function normDate(s){s=String(s||'').trim();let m=s.match(/(\d{4})\s*[-./年]\s*(\d{1,2})\s*[-./月]\s*(\d{1,2})/);if(m)return`${m[1]}-${m[2].padStart(2,'0')}-${m[3].padStart(2,'0')}`;
  m=s.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})/);if(m)return`${m[3]}-${m[1].padStart(2,'0')}-${m[2].padStart(2,'0')}`;return null}
function csvRows(t){t=t.replace(/^﻿/,'');const rows=[];let row=[],f='',q=false;
  for(let i=0;i<t.length;i++){const c=t[i];if(q){if(c==='"'){if(t[i+1]==='"'){f+='"';i++}else q=false}else f+=c}
    else if(c==='"')q=true;else if(c===','||c==='\t'){row.push(f);f=''}else if(c==='\n'){row.push(f);rows.push(row);row=[];f=''}else if(c!=='\r')f+=c}
  if(f||row.length){row.push(f);rows.push(row)}return rows.filter(r=>r.some(x=>x.trim()))}
const COLS={date:['日期','date','day','完成日期'],type:['类型','type','分类','category','任务类型'],name:['任务','任务名称','名称','name','task','title','事项'],done:['完成','是否完成','done','status','状态','completed'],
  minutes:['用时','用时(分钟)','用时（分钟）','minutes','duration','时长','耗时'],time:['时间','完成时间','开始时间','开始','time','start','completedat','completed_at'],
  text:['日记','内容','正文','text','content','diary','note'],mood:['心情','mood','moods'],weather:['天气','weather']};
function findMood(n){n=String(n).trim();if(!n||n==='无')return null;const M=MOODS();for(const [k,v] of Object.entries(M))if(k===n||v.t===n)return k;const t=tagM(n);return t[0]||null}
function findWeather(n){n=String(n).trim();if(!n||n==='无')return null;const W=WEATHER();for(const [k,v] of Object.entries(W))if(k===n||v.t===n)return k;return tagW(n)}
function parseCSV(raw){
  const rows=csvRows(raw);if(rows.length<2)return null;
  const head=rows[0].map(h=>h.trim().toLowerCase().replace(/\s/g,''));const idx={};
  for(const [k,al] of Object.entries(COLS)){const i=head.findIndex(h=>al.some(a=>a.toLowerCase()===h));if(i>=0)idx[k]=i}
  if(idx.date==null||(idx.name==null&&idx.text==null))return null;
  const g=(r,k)=>idx[k]!=null?(r[idx[k]]||'').trim():'';
  const body=rows.slice(1);
  if(idx.text!=null) return {kind:'diary',items:body.map(r=>({date:normDate(g(r,'date'))||todayStr(),text:g(r,'text'),moods:[...new Set(g(r,'mood').split(/[;；、|/]/).map(findMood).filter(Boolean))],weather:findWeather(g(r,'weather'))||'sunny'})).filter(x=>x.text)};
  const byDay={};
  body.forEach(r=>{const d=normDate(g(r,'date'));const n=g(r,'name');if(!d||!n)return;
    const dn=g(r,'done').toLowerCase();const done=idx.done==null?true:/^(1|true|yes|y|是|已完成|完成|done|✓|√)$/.test(dn);
    const tp=g(r,'type');const type=/重复|recur/i.test(tp)?'重复':/日程|sched/i.test(tp)?'日程':/临时|temp/i.test(tp)?'临时':tp;
    const mins=parseInt(g(r,'minutes'),10);const tm=(g(r,'time').match(/\d{1,2}:\d{2}/)||[''])[0];
    (byDay[d]=byDay[d]||[]).push({name:n,type,done,minutes:isNaN(mins)?null:mins,time:tm})});
  return {kind:'list',items:Object.entries(byDay).map(([date,todos])=>({date,text:'',moods:[],weather:'sunny',todos:todos.sort((a,b)=>(a.time||'99').localeCompare(b.time||'99'))}))};
}
function parseText(raw,fname=''){
  raw=raw.trim(); if(!raw) return null;
  try{const j=JSON.parse(raw);if(Array.isArray(j))return{kind:'diary',items:j.filter(x=>x&&x.text).map(x=>{const ms=Array.isArray(x.moods)?x.moods:(x.mood?[x.mood]:[]);return{date:normDate(x.date)||todayStr(),text:String(x.text).trim(),moods:ms.map(findMood).filter(Boolean),weather:(x.weather&&findWeather(x.weather))||'sunny'}})}}catch(e){}
  const firstLine=raw.split(/\r?\n/)[0].toLowerCase();
  if(/\.csv$/i.test(fname)||(/[,\t]/.test(firstLine)&&Object.values(COLS).flat().some(a=>firstLine.includes(a.toLowerCase())))){const c=parseCSV(raw);if(c)return c}
  const re=/^\s*(\d{4})\s*[-./年]\s*(\d{1,2})\s*[-./月]\s*(\d{1,2})\s*日?\s*(.*)$/; const out=[]; let cur=null;
  raw.split(/\r?\n/).forEach(line=>{const m=line.match(re);
    if(m){cur={date:`${m[1]}-${m[2].padStart(2,'0')}-${m[3].padStart(2,'0')}`,lines:[m[4]].filter(Boolean)};out.push(cur)}
    else{ if(!cur){cur={date:null,lines:[]};out.push(cur)} cur.lines.push(line)}});
  let res=out.map(o=>({date:o.date,text:o.lines.join('\n').trim()})).filter(o=>o.text);
  if(res.length===1&&!res[0].date) res=res[0].text.split(/\n\s*\n/).map(t=>({date:null,text:t.trim()})).filter(o=>o.text);
  return {kind:'diary',items:res.map(o=>({date:o.date||todayStr(),text:o.text,moods:tagM(o.text),weather:tagW(o.text)||'sunny'}))};
}
let parsed=null,impName='';
function preview(){parsed=parseText($('#impText').value,impName);const pv=$('#impPv'),gb=$('#impGo');
  if(!parsed||!parsed.items.length){pv.textContent=$('#impText').value.trim()?'没认出内容，检查一下日期或表头':'还没有内容';gb.disabled=true;gb.textContent='导入';parsed=null;return}
  const ds=parsed.items.map(p=>p.date).sort(),n=parsed.items.length;
  if(parsed.kind==='list'){const tasks=parsed.items.reduce((s,d)=>s+d.todos.length,0),merge=parsed.items.filter(d=>entries.some(e=>e.date===d.date&&!e.sample)).length;
    pv.textContent=`每日List：${n} 天、${tasks} 件事（${ds[0]} 至 ${ds[n-1]}）${merge?`，其中 ${merge} 天会并进已有日记`:''}`}
  else pv.textContent=`识别到 ${n} 篇，${ds[0]} 至 ${ds[n-1]}，自动打标签 ${parsed.items.filter(p=>p.moods.length).length} 篇`;
  gb.disabled=false;gb.textContent=`导入 ${n} ${parsed.kind==='list'?'天':'篇'}`}
$('#impText').addEventListener('input',()=>{impName='';preview()});
$('#impFile').addEventListener('change',e=>{const f=e.target.files[0];if(!f)return;const rd=new FileReader();rd.onload=()=>{$('#impText').value=rd.result;impName=f.name;preview()};rd.readAsText(f);e.target.value=''});
$('#impGo').onclick=()=>{if(!parsed)return;const base=Date.now().toString(36);let added=0,merged=0;
  parsed.items.forEach((p,i)=>{
    if(parsed.kind==='list'){const ex=entries.find(e=>e.date===p.date&&!e.sample);
      if(ex){const have=new Set((ex.todos||[]).map(t=>t.name+'|'+t.time));ex.todos=(ex.todos||[]).concat(p.todos.filter(t=>!have.has(t.name+'|'+t.time)));merged++;return}}
    entries.push({id:'i'+base+i,...p});added++});
  save();toast(merged?`新增 ${added} 篇，合并 ${merged} 天`:`导入了 ${added} ${parsed.kind==='list'?'天':'篇'}`);
  $('#impText').value='';impName='';preview();$('#imp').hidden=true;renderList();renderCup()};

/* ---------- settings ---------- */
function miniCup(style){const p=cupParts(style);const tips=['var(--m-happy)','var(--m-calm)','var(--m-moved)','var(--m-down)','var(--m-tired)'];let st='';
  [[52,-8,-6],[66,-30,-2],[80,-18,1],[94,-36,4],[108,-10,7]].forEach(([x,y,r],i)=>{st+=`<g transform="rotate(${r} ${x} 140)"><rect x="${x-5}" y="${y}" width="10" height="150" rx="4" fill="var(--stick)" stroke="var(--stick-line)" stroke-width="1.2"/><rect x="${x-3.5}" y="${y+5}" width="7" height="20" rx="3" fill="${tips[i]}"/></g>`});
  return `<svg viewBox="0 -50 160 200" aria-hidden="true">${p.back}${st}${p.front}</svg>`}
function renderSettings(){
  const el=$('#settings'),M=MOODS(),W=WEATHER(),p=S.profile;
  el.innerHTML=`<div class="sheet-top"><h2>设置</h2><button class="hbtn" data-close>完成</button></div>
  <h3 id="profAnchor">个人信息 · 玄学签用</h3>
  <div class="prof">
    <div class="srow" style="cursor:default">称呼<input class="tin" id="pName" maxlength="10" placeholder="可不填" value="${esc(p.name||'')}" style="max-width:160px;text-align:right;background:var(--paper);border:0"></div>
    <div class="srow" style="cursor:default">性别<span class="segs">${['女','男'].map(g=>`<button type="button" class="chip plain" data-gender="${g}" aria-pressed="${p.gender===g}">${g}</button>`).join('')}</span></div>
    <button class="srow" data-birth>出生日期 <span class="${p.birth?'set':''}">${p.birth?p.birth.replace(/-/g,'.')+' · '+lunarText(p.birth):'未填'}</span></button>
    <button class="srow" data-hour>出生时间 <span class="${p.hour!=null||p.time?'set':''}">${p.time?p.time:p.hour!=null?hourName(p.hour)+' '+HOURS[p.hour][1]:'未填'}</span></button>
    <button class="srow" data-place>出生地 <span class="${p.place?'set':''}">${p.place?p.place.n+(p.place.off!=null?` · UTC${p.place.off>=0?'+':''}${p.place.off}`:''):'未填（按北京时间）'}</span></button>
    ${p.place&&p.time?`<button class="srow" data-tst>真太阳时校正 <span class="set">${p.tst!==false?'开':'关'}</span></button>`:''}
    ${p.birth&&(()=>{try{const [y,m,d]=p.birth.split('-').map(Number);return X.Solar.fromYmd(y,m,d).getLunar().getMonth()<0}catch(e){return false}})()?`<div class="srow" style="cursor:default;display:block">闰月出生 · 紫微怎么排<div class="segs" style="margin-top:8px">${[['half','前半月本月，后半月下月'],['this','整月按本月'],['next','整月按下月']].map(([k,t])=>`<button type="button" class="chip plain" data-leap="${k}" aria-pressed="${(p.leap||'half')===k}">${t}</button>`).join('')}</div></div>`:''}
    <p class="hint">八字要出生日期；紫微斗数要出生日期、时间和性别。海外出生请填出生地：年柱、月柱按出生时刻对应的北京时间定节气，日柱、时柱按出生地时间；填了精确时间还会按经度做真太阳时校正。只保存在这台设备的浏览器里。${p.birth||p.gender||p.hour!=null||p.time||p.place||p.name?' <button class="badge" data-clearp style="cursor:pointer">清除个人信息</button>':''}</p>
  </div>
  <h3>主题色</h3><div class="pals">${Object.entries(PALETTES).map(([k,q])=>`<button class="pal" data-pal="${k}" aria-pressed="${S.palette===k}"><i style="background:linear-gradient(135deg,hsl(${q.h} ${q.s}% 94%) 50%,hsl(${q.h} ${(q.s*.78).toFixed(1)}% ${q.a}%) 50%)"></i>${q.n}</button>`).join('')}</div>
  <h3>日记字体</h3><div class="fonts">${Object.entries(FONTS).map(([k,f])=>`<button class="fopt" data-font="${k}" aria-pressed="${S.font===k}"><span><b style="font-family:${f.f.replace(/"/g,"'")}">今天的云是粉色的</b><span>${f.d}</span></span><em>${S.font===k?'使用中':''}</em></button>`).join('')}</div>
  <h3>背景 · 挂饰</h3><div class="decos">${Object.entries(HANGS).map(([k,h])=>`<button class="dopt" data-hang="${k}" aria-pressed="${S.hang===k}">${miniHang(k)}${h.n}</button>`).join('')}</div>
  <h3>背景 · 窗台</h3><div class="decos sills">${Object.entries(SILLS).map(([k,h])=>`<button class="dopt" data-sill="${k}" aria-pressed="${S.sill===k}">${miniSill(k)}${h.n}</button>`).join('')}</div>
  <h3>日记签筒</h3><div class="cups">${Object.entries(CUPS).map(([k,n])=>`<button class="copt" data-cup="${k}" aria-pressed="${S.cup===k}">${miniCup(k)}${n}</button>`).join('')}</div>
  <h3>自定义心情</h3><div class="clist">${S.customMoods.length?S.customMoods.map(c=>`<div class="citem"><i class="dotc" style="background:${c.color}"></i>${sv(M[c.k].d)}${esc(c.t)}<button class="x" data-delm="${c.k}">删除</button></div>`).join(''):'<p>还没有。写日记或筛选时点“＋”也能加。</p>'}</div>
  <div style="margin-top:8px"><button class="btn sm" data-addm>＋ 加一个心情</button></div>
  <h3>自定义天气</h3><div class="clist">${S.customWeather.length?S.customWeather.map(c=>`<div class="citem">${sv(W[c.k].d)}${esc(c.t)}<button class="x" data-delw="${c.k}">删除</button></div>`).join(''):'<p>还没有。</p>'}</div>
  <div style="margin-top:8px"><button class="btn sm" data-addw>＋ 加一个天气</button></div>
  <h3>其他</h3>
  <button class="srow" data-snd>声音 <span>${S.sound?'开':'关'}</span></button>
  <button class="srow" data-gentle>玄学签吉凶 <span>${gentleOn()?'温和显示（宜缓 / 宜慎 / 宜守）':'显示原字（小凶 / 中凶 / 大凶）'}</span></button>
  <button class="srow" data-spec>设计说明 <span>配色、动效、起课依据、字体授权 ›</span></button>`;
  const n=el.querySelector('#pName');n.oninput=()=>{S.profile.name=n.value.trim();saveS()};
}
function rerenderSettings(){const st=$('#settings').scrollTop;renderSettings();$('#settings').scrollTop=st}
$('#settings').addEventListener('click',e=>{if(e.target.closest('.addf'))return;const b=e.target.closest('button');if(!b)return;const d=b.dataset;
  if(b.hasAttribute('data-close')){$('#settings').hidden=true;return}
  if(d.gender){S.profile.gender=S.profile.gender===d.gender?undefined:d.gender}
  else if(b.hasAttribute('data-birth')){datePicker({title:'出生日期',value:S.profile.birth,max:todayStr(),quick:false,startYears:!S.profile.birth,onPick:v=>{S.profile.birth=v;saveS();rerenderSettings()}});return}
  else if(b.hasAttribute('data-hour')){hourPicker(v=>{S.profile.hour=v.hour;S.profile.time=v.time;saveS();rerenderSettings()});return}
  else if(b.hasAttribute('data-place')){placePicker(v=>{S.profile.place=v;saveS();rerenderSettings()});return}
  else if(b.hasAttribute('data-tst')){S.profile.tst=S.profile.tst===false}
  else if(d.leap){S.profile.leap=d.leap}
  else if(b.hasAttribute('data-clearp')){S.profile={};toast('个人信息已清除')}
  else if(d.hang){S.hang=d.hang;applyDeco();clack(0,.08)}
  else if(d.sill){S.sill=d.sill;applyDeco();clack(0,.08)}
  else if(d.pal){S.palette=d.pal;applyTheme()}
  else if(d.font){S.font=d.font;applyTheme()}
  else if(d.cup){S.cup=d.cup;if(mode==='diary')applyCup();clack(0,.2)}
  else if(d.delm){S.customMoods=S.customMoods.filter(c=>c.k!==d.delm);entries.forEach(x=>x.moods=x.moods.filter(k=>k!==d.delm));wMoods=wMoods.filter(k=>k!==d.delm);save();if(filters.mood===d.delm)filters.mood=null}
  else if(d.delw){S.customWeather=S.customWeather.filter(c=>c.k!==d.delw);entries.forEach(x=>{if(x.weather===d.delw)x.weather='sunny'});if(wWeather===d.delw)wWeather=null;save();if(filters.weather===d.delw)filters.weather=null}
  else if(b.hasAttribute('data-addm')){addForm(b.parentElement,'mood',()=>{renderSettings();renderFilters()});return}
  else if(b.hasAttribute('data-addw')){addForm(b.parentElement,'weather',()=>{renderSettings();renderFilters()});return}
  else if(b.hasAttribute('data-snd')){S.sound=!S.sound;$('#soundBtn').setAttribute('aria-pressed',S.sound)}
  else if(b.hasAttribute('data-spec')){openSpec();return}
  else if(b.hasAttribute('data-gentle')){S.gentle=!gentleOn();toast(S.gentle?'偏凶的签会写作宜缓、宜慎、宜守':'将显示小凶、中凶、大凶原字')}
  else return;
  saveS();rerenderSettings();renderFilters();renderPickers();if(!busy)renderCup()});
function openSettings(toProfile){const s=$('#settings');renderSettings();s.hidden=false;s.scrollTop=0;s.animate([{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'none'}],{duration:260,easing:'ease-out'});
  if(toProfile){const a=s.querySelector('#profAnchor');a.animate([{color:'var(--accent)'},{color:'var(--ink-2)'}],{duration:1600})}}
$('#setBtn').onclick=()=>openSettings(false);
const sb=$('#soundBtn');sb.setAttribute('aria-pressed',S.sound);sb.onclick=()=>{S.sound=!S.sound;saveS();sb.setAttribute('aria-pressed',S.sound);if(S.sound)clack(0,.2)};

/* ---------- spec ---------- */
function openSpec(){const s=$('#spec');s.innerHTML=specHTML();s.hidden=false;s.scrollTop=0;s.animate([{opacity:0,transform:'translateY(16px)'},{opacity:1,transform:'none'}],{duration:260,easing:'ease-out'});s.querySelector('[data-close]').onclick=()=>s.hidden=true}
function specHTML(){
  const sw=[['--bg','底色','页面底，带一点主题色的白'],['--paper','纸','便签、卡片、输入框'],['--blush','淡色','选中态、标签底'],['--blush-2','淡色二','胶带、腮红、签筒色带'],['--accent','强调色','主按钮、玄学签头、选中日期'],['--ink','墨','正文'],['--ink-2','灰墨','辅助文字'],['--line','线稿','背景简笔画、分隔线'],['--stick','竹签','签身，固定暖竹色']];
  return `<div class="sheet-top"><h2>设计说明</h2><button class="hbtn" data-close>关闭</button></div>
  <p style="color:var(--ink-2);margin-top:4px">关键词：留白、轻、一点点俏皮。本页色块跟着当前主题色和深浅模式变化。</p>
  <h3>主题色</h3>
  <p>五套：樱粉、薄荷绿、雾蓝、藕紫、杏子。每套只定义色相和饱和度，其余颜色按同一公式生成；日期选择器、起课面板、玄学卡片也都取这套颜色。</p>
  <div class="sw">${sw.map(s=>`<div><i style="background:var(${s[0]})"></i><span>${s[1]}<br><span style="padding:0;color:var(--ink-2)">${s[2]}</span></span></div>`).join('')}</div>
  <h3>字体与授权</h3>
  <div class="tbl"><table><tr><th>用途</th><th>字体</th><th>授权</th></tr>
  <tr><td>标题、日记正文（默认）</td><td>站酷小薇 ZCOOL XiaoWei</td><td>SIL OFL 1.1</td></tr>
  <tr><td>日记正文（可选）、玄学卡片、古文引文</td><td>思源宋体 Noto Serif SC</td><td>SIL OFL 1.1</td></tr>
  <tr><td>日记正文（可选）</td><td>龙藏体 Long Cang</td><td>SIL OFL 1.1</td></tr>
  <tr><td>界面文字</td><td>思源黑体 Noto Sans SC</td><td>SIL OFL 1.1</td></tr>
  <tr><td>日期、数字</td><td>Instrument Serif</td><td>SIL OFL 1.1</td></tr></table></div>
  <p>OFL 允许免费商用、嵌入 App 和改造，唯一限制是不能单独售卖字体文件。上线时建议把字体子集打包进 App，而不是依赖在线加载。</p>
  <h3>玄学签：起课依据</h3>
  <ul>
   <li><b>小六壬</b>：正月起大安，月上起日、日上起时，顺数大安、留连、速喜、赤口、小吉、空亡；或从大安起依次数三个数。歌诀取民间通行本（各本字句略有出入），并按所问之事标出相关句子。</li>
   <li><b>梅花易数</b>：年月日时起卦（年支数+农历月+日除八得上卦，加时数除八得下卦，总数除六得动爻）或报数起卦（物数占、尺寸占例）。体用、卦气旺衰、十八类占断辞引《梅花易数》原文，卦辞、爻辞引《周易》原文。</li>
   <li><b>大六壬</b>：月将加占时，布天地盘与十二天将，按九宗门取三传，标出课体、空亡、六亲、遁干。</li>
   <li><b>八字 · 今日</b>：按节气排四柱（无时辰则排三柱），以日干为我推十神，对照今日流年、流月、流日干支和日支冲合，不替用户判断喜用神。</li>
   <li><b>紫微 · 今日</b>：按安星法排本命盘，取流日命宫所在本命宫位和流日四化。</li>
   <li><b>今日黄历</b>：宜忌、值神（黄道/黑道）、建除十二值星、二十八宿、冲煞、彭祖百忌、喜神福神财神方位。</li>
   <li>每张签都写明依据；释义里的“通行释义”是今人常用的概括，不是古籍原文。</li>
   <li><b>七级吉凶</b>：大吉、中吉、小吉、平、小凶、中凶、大凶，每一级都由几项依据合看，卡片上逐项列出分值。小六壬：三宫读作起因、过程、结果（结果宫记两分），每宫对所问之事的吉凶取歌诀原句，再加前两宫对结果宫的五行生克（五行取道家、江氏一派）。梅花易数：体用为主，加变卦、互卦（与体同五行为「体党」）、体卦旺衰，再参入动爻爻辞的吉、凶、悔、吝、厉、无咎（原书说先天起卦「不必用《易》书之辞」，所以只占小份量）。大六壬：三传天将（末传记两分、空亡不计），加所问之事的类神是否入传、是否空亡，以及三传对日干的生克。黄历：先看想做的事在不在宜忌里，再看值神黄黑道、建除、二十八宿，填了出生日期还看是否冲你的生肖。各项吉凶取自古籍或通书，分值和分级界线是本程序的口径。八字、紫微只列关系，不分吉凶</li>
   <li><b>可以怎么做</b>：先引古籍原句（小六壬歌诀、《梅花易数》、《周易·系辞》、择日口诀），再另列「今人建议」，两者分开标注；建议都用商量的语气，只是参考。默认温和显示，偏凶的签写作宜缓、宜慎、宜守，并把化解放在最前；设置里可切回原字。</li>
   <li><b>读懂问题</b>：写下的问题用关键词规则识别（不联网、不用 AI）：认出是哪类事（出行、行人、失物、求财、工作、考试文书、婚恋、疾病等），以及问的是什么时候、在哪里、选哪个还是能不能，再自动选好各法对应的分类。卡片和起课面板都会写出「理解为……」和依据的字眼；理解错了可以自己点分类，按你选的为准。</li>
   <li><b>应期（问什么时候）</b>：小六壬用口诀应期数（大安、小吉一五七，留连二八十，速喜、空亡三六九，赤口四七十），并按歌诀说快慢；梅花易数按卦气，看体卦五行和后天方位对应的日或月（今人说法，来源不足，卡片上标明）；大六壬看发用是否为太岁、月建、日支，以及空亡出旬、填实；黄历列出接下来适合做这件事的日子。八字、紫微不推应期。数字的单位古书没写，按事情远近读成日、月或年，这是本程序的读法。</li>
   <li><b>好句签</b>：古典 6 成、现代 2 成、外国 2 成的比例抽取。古典诗文以 chinese-poetry（MIT）为底本校字，异文写明；现代只收去世已逾 50 年的中国作家；外国只收原文已进入公有领域的作品，中文自译并附原文。卡片顺序：好句 → 全文（诗）或上下文 → 释义。可按心情和时令（节气、节日、四季、今天应景）筛选。</li>
   <li><b>一事不二占</b>：同一天同一件事再问时，引蒙卦「初筮告，再三渎，渎则不告」提醒，仍可继续。</li>
  </ul>
  <h3>开源库与数据（均可免费商用）</h3>
  <ul><li>lunar-javascript（MIT）：农历、节气、八字、黄历</li><li>iztro（MIT，内含 lunar-typescript、lunar-lite、i18next、dayjs，均为 MIT）：紫微斗数排盘</li><li>liuren-ts-lib（Apache-2.0，内含 tyme4ts，MIT）：大六壬排盘</li><li>《周易》卦爻辞取自 @freizl/yijing（MIT），已与另外两个独立版本逐条校勘并改正 7 处错误；《梅花易数》原文取自 opencode-tianji 数据（MIT），已与劝学网全文逐字核对</li><li>小六壬歌诀按四个通行本互校，取多数本用字，分歧处注明异文</li></ul>
  <h3>抽签动效时序</h3>
  <div class="tbl"><table><tr><th>阶段</th><th>时长</th><th>做什么</th></tr>
  <tr><td>按下</td><td>120ms</td><td>签筒压扁，所有签上抬 8px</td></tr>
  <tr><td>摇签</td><td>1050ms</td><td>±14° 衰减摇摆；每支签随机跳动；14 次碰撞声 + 短震动</td></tr>
  <tr><td>出签 / 飞入</td><td>820ms</td><td>选中的签冲出，横转 90° 飞到中心</td></tr>
  <tr><td>展开</td><td>300 + 约 550ms</td><td>三折便签弹出，上折页翻开到一半时下折页接着翻，两页交叠进行</td></tr>
  <tr><td>换签筒</td><td>约 1.6s</td><td>左右滑动签筒或点下方切换：三个签筒排成一圈 3D 转盘，旧筒带着签转向一侧、隐入后方，新筒从另一侧转到正前方并轻微回弹，然后签一支支落进新筒。滑动距离不够会弹回原位。</td></tr>
  <tr><td>换签种</td><td>约 1.3s</td><td>签飞出，再按新签种的签头样式落回</td></tr></table></div>
  <h3>日期选择</h3>
  <p>自绘日历：每格同时显示公历和农历（初一显示月份，节气日显示节气名），左右滑动或点箭头翻月，点年月进入年份/月份网格，选中后自动收起。写日记时有“今天 / 昨天 / 前天”快捷键；选出生日期时直接从年份开始。</p>
  <h3>数据结构</h3>
<pre class="code">Entry { id, date, text, moods: string[], weather (默认 sunny), todos? }
Settings { palette, font, cup, sound, method,
  profile: { name, gender, birth: "YYYY-MM-DD", hour: 0–12 | null },
  customMoods, customWeather }</pre>
  <h3>落地建议</h3>
  <ul>
   <li><b>微信小程序</b>：三个排盘库都是纯 JS，可以直接放进小程序；个人信息用 wx.setStorageSync 存本地，涉及出生日期属于个人信息，上线前要写进隐私协议并做授权说明。</li>
   <li><b>App</b>：Flutter 可用 lunar 的 Dart 版本；React Native 可直接用这三个 JS 库。</li>
   <li>这个原型的数据只存在当前浏览器，换设备不会同步。</li>
  </ul>`;
}

/* ---------- init ---------- */
applyTheme();applyDeco();applyCup();renderFilters();resetWrite();renderCup(true);
})();
