import React, { useState } from 'react';
import { Mountain, MapPin, Backpack, Compass, ChevronRight, Plus, TrendingUp, Users, Heart, Share2, MessageCircle } from 'lucide-react';

const HikingMiniApp = () => {
  const [currentPage, setCurrentPage] = useState('guide'); // 'guide', 'home', 'routes', or 'routeDetail'
  const [guideStep, setGuideStep] = useState(0);
  const [routeFilter, setRouteFilter] = useState('all'); // 'all', 'easy', 'medium', 'hard'
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [detailTab, setDetailTab] = useState('intro'); // 'intro', 'guide', 'equipment'

  const guidePages = [
    {
      icon: Mountain,
      title: '记录每一次探险',
      description: '用脚步丈量山川，用镜头定格美景',
      bgGradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: MapPin,
      title: '分享徒步攻略',
      description: '让你的经验成为他人的指南针',
      bgGradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Backpack,
      title: '装备推荐',
      description: '找到最适合你的户外装备',
      bgGradient: 'from-orange-500 to-amber-600'
    }
  ];

  const routes = [
    {
      id: 1,
      image: '🏔️',
      title: '梅里雪山大环线',
      difficulty: '高难度',
      difficultyLevel: 'hard',
      days: '8天',
      distance: '120km',
      altitude: '4200m',
      author: '山野行者',
      avatar: '👨',
      likes: 1243,
      views: 8921,
      location: '云南·德钦',
      season: '10-11月'
    },
    {
      id: 2,
      image: '🌲',
      title: '稻城亚丁徒步路线',
      difficulty: '中等',
      difficultyLevel: 'medium',
      days: '5天',
      distance: '65km',
      altitude: '4500m',
      author: '云游四海',
      avatar: '👩',
      likes: 2156,
      views: 12453,
      location: '四川·稻城',
      season: '4-5月,9-10月'
    },
    {
      id: 3,
      image: '⛰️',
      title: '武功山全程穿越',
      difficulty: '中等',
      difficultyLevel: 'medium',
      days: '3天',
      distance: '45km',
      altitude: '1918m',
      author: '徒步达人',
      avatar: '🧑',
      likes: 1876,
      views: 9654,
      location: '江西·萍乡',
      season: '全年',
      description: '武功山位于江西省中西部，居罗霄山脉北支，绵延120公里，主峰白鹤峰海拔1918.3米。武功山以草甸奇观闻名，10万亩高山草甸绵绵于海拔1600多米的高山之巅，穿云入雾。',
      highlights: ['高山草甸', '云海日出', '金顶栈道', '瀑布群'],
      tips: ['建议带登山杖', '山顶温差大，注意保暖', '提前预订山顶帐篷或客栈', '注意防晒'],
      itinerary: [
        { 
          day: 1, 
          title: '龙山村 - 金顶', 
          distance: '18km', 
          time: '8小时', 
          ascent: '+1200m',
          desc: '从龙山村登山口出发，沿石阶而上，途经观音宕、紫极宫',
          waypoints: [
            { name: '龙山村登山口', time: '08:00', altitude: '800m', desc: '起点，检查装备，开始登山' },
            { name: '观音宕', time: '10:30', altitude: '1200m', desc: '第一个休息点，可补充饮用水' },
            { name: '紫极宫', time: '13:00', altitude: '1500m', desc: '午餐休息点，有小卖部' },
            { name: '发云界', time: '15:30', altitude: '1800m', desc: '开始进入高山草甸区域' },
            { name: '金顶', time: '18:00', altitude: '1918m', desc: '扎营看日落，建议提前预订帐篷' }
          ],
          notes: ['前半段为台阶路，注意膝盖保护', '发云界后手机信号较弱', '金顶风大，注意保暖'],
          photos: ['🌄', '⛺', '🌅']
        },
        { 
          day: 2, 
          title: '金顶 - 白鹤峰', 
          distance: '15km', 
          time: '6小时',
          ascent: '+300m',
          desc: '早起观日出，穿越高山草甸，体验云海美景',
          waypoints: [
            { name: '金顶日出', time: '05:30', altitude: '1918m', desc: '最佳日出观赏点' },
            { name: '吊马桩', time: '09:00', altitude: '1800m', desc: '著名草甸景观点' },
            { name: '绝望坡', time: '11:30', altitude: '1650m', desc: '陡峭下坡，注意安全' },
            { name: '白鹤峰', time: '14:00', altitude: '1700m', desc: '第二晚露营地' }
          ],
          notes: ['日出时间约5:30，提前30分钟到达', '草甸路段注意防晒', '绝望坡较陡，建议使用登山杖'],
          photos: ['🌅', '🌾', '☁️']
        },
        { 
          day: 3, 
          title: '白鹤峰 - 沈子村', 
          distance: '12km', 
          time: '5小时',
          ascent: '-1500m',
          desc: '下山路段，经过瀑布群，返回山下',
          waypoints: [
            { name: '白鹤峰出发', time: '08:00', altitude: '1700m', desc: '开始下山' },
            { name: '九龙山', time: '10:00', altitude: '1200m', desc: '观景台，可俯瞰山谷' },
            { name: '龙潭瀑布', time: '11:30', altitude: '600m', desc: '瀑布群景区，可戏水休息' },
            { name: '沈子村', time: '13:00', altitude: '200m', desc: '终点，行程结束' }
          ],
          notes: ['下山时注意膝盖保护', '瀑布区域路滑，小心行走', '到达后可在村里用餐休息'],
          photos: ['💧', '🏔️', '🎉']
        }
      ],
      equipmentList: [
        { category: '服装', items: ['冲锋衣', '速干衣裤', '抓绒衣', '登山鞋'] },
        { category: '装备', items: ['登山包(40-50L)', '登山杖', '头灯', '睡袋'] },
        { category: '食品', items: ['压缩饼干', '能量棒', '水果', '电解质饮料'] }
      ]
    },
    {
      id: 4,
      image: '🏕️',
      title: '贡嘎山大环线',
      difficulty: '高难度',
      difficultyLevel: 'hard',
      days: '7天',
      distance: '110km',
      altitude: '4800m',
      author: '雪域行者',
      avatar: '👨‍🦰',
      likes: 1543,
      views: 7234,
      location: '四川·康定',
      season: '5-6月,9-10月'
    },
    {
      id: 5,
      image: '🌄',
      title: '狼塔C线穿越',
      difficulty: '高难度',
      difficultyLevel: 'hard',
      days: '9天',
      distance: '130km',
      altitude: '3800m',
      author: '沙漠之鹰',
      avatar: '🧔',
      likes: 987,
      views: 5432,
      location: '新疆·昌吉',
      season: '7-8月'
    },
    {
      id: 6,
      image: '🌿',
      title: '虎跳峡徒步',
      difficulty: '简单',
      difficultyLevel: 'easy',
      days: '2天',
      distance: '28km',
      altitude: '2600m',
      author: '丽江老张',
      avatar: '👨‍🦳',
      likes: 3421,
      views: 18765,
      location: '云南·丽江',
      season: '全年'
    },
    {
      id: 7,
      image: '🏞️',
      title: '尼泊尔ABC大环线',
      difficulty: '中等',
      difficultyLevel: 'medium',
      days: '10天',
      distance: '85km',
      altitude: '4130m',
      author: '喜马拉雅向导',
      avatar: '👳',
      likes: 2876,
      views: 15432,
      location: '尼泊尔·博卡拉',
      season: '3-5月,10-11月'
    },
    {
      id: 8,
      image: '🗻',
      title: '四姑娘山长坪沟',
      difficulty: '简单',
      difficultyLevel: 'easy',
      days: '1天',
      distance: '15km',
      altitude: '3200m',
      author: '蜀山之王',
      avatar: '👨‍🌾',
      likes: 2543,
      views: 13245,
      location: '四川·小金',
      season: '5-10月'
    }
  ];

  const equipment = [
    {
      id: 1,
      image: '🎒',
      name: '超轻登山包 50L',
      price: '¥899',
      category: '背包',
      rating: 4.9
    },
    {
      id: 2,
      image: '👟',
      name: '防水徒步鞋',
      price: '¥1299',
      category: '鞋靴',
      rating: 4.8
    },
    {
      id: 3,
      image: '⛺',
      name: '双人帐篷',
      price: '¥1599',
      category: '露营',
      rating: 4.7
    }
  ];

  const teams = [
    {
      id: 1,
      route: '虎跳峡徒步',
      leader: '户外老驴',
      avatar: '🧑‍🦰',
      date: '11月15日',
      duration: '2天1夜',
      current: 5,
      total: 8,
      difficulty: '中等',
      tags: ['AA制', '新手友好']
    },
    {
      id: 2,
      route: '雨崩村徒步',
      leader: '雪山追梦',
      avatar: '👨‍🦱',
      date: '11月20日',
      duration: '4天3夜',
      current: 3,
      total: 6,
      difficulty: '较难',
      tags: ['包车', '资深驴友']
    }
  ];

  // 引导页
  if (currentPage === 'guide') {
    const currentGuide = guidePages[guideStep];
    const Icon = currentGuide.icon;

    return (
      <div className="w-full max-w-md mx-auto min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center px-6 relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
          </div>

          {/* 图标 */}
          <div className={`relative mb-8 bg-gradient-to-br ${currentGuide.bgGradient} p-10 rounded-full shadow-2xl animate-pulse`}>
            <Icon size={64} strokeWidth={1.5} />
          </div>

          {/* 标题和描述 */}
          <h1 className="text-3xl font-bold mb-3 text-center">{currentGuide.title}</h1>
          <p className="text-lg text-slate-300 text-center mb-12 max-w-xs">{currentGuide.description}</p>

          {/* 步骤指示器 */}
          <div className="flex gap-2 mb-12">
            {guidePages.map((_, index) => (
              <div
                key={index}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === guideStep 
                    ? 'w-10 bg-white' 
                    : 'w-1.5 bg-slate-600'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="p-5 space-y-2">
          {guideStep < guidePages.length - 1 ? (
            <>
              <button
                onClick={() => setGuideStep(guideStep + 1)}
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3.5 rounded-xl font-semibold shadow-lg active:scale-95 transition-all"
              >
                下一步
              </button>
              <button
                onClick={() => setCurrentPage('home')}
                className="w-full bg-transparent text-slate-400 py-3.5 rounded-xl font-medium active:bg-slate-800 transition-all"
              >
                跳过
              </button>
            </>
          ) : (
            <button
              onClick={() => setCurrentPage('home')}
              className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3.5 rounded-xl font-semibold shadow-lg active:scale-95 transition-all"
            >
              开始探险
            </button>
          )}
        </div>
      </div>
    );
  }

  // 我的页面
  if (currentPage === 'profile') {
    const userStats = {
      routes: 23,
      distance: 856,
      days: 67,
      altitude: 4800
    };

    const myRoutes = [
      { id: 1, title: '武功山穿越', date: '2024-10-15', image: '⛰️', status: '已完成' },
      { id: 2, title: '虎跳峡徒步', date: '2024-09-20', image: '🌿', status: '已完成' },
      { id: 3, title: '梅里雪山大环线', date: '2024-11-20', image: '🏔️', status: '计划中' }
    ];

    const achievements = [
      { id: 1, name: '初出茅庐', icon: '🥉', desc: '完成首次徒步', unlocked: true },
      { id: 2, name: '百里征程', icon: '🥈', desc: '累计徒步100km', unlocked: true },
      { id: 3, name: '登峰造极', icon: '🏆', desc: '登顶海拔4000m+', unlocked: true },
      { id: 4, name: '徒步达人', icon: '⭐', desc: '完成20条路线', unlocked: true },
      { id: 5, name: '千里之行', icon: '💎', desc: '累计徒步1000km', unlocked: false },
      { id: 6, name: '云端漫步', icon: '☁️', desc: '登顶海拔5000m+', unlocked: false }
    ];

    const menuItems = [
      { icon: '📝', title: '我的攻略', count: 12, color: 'from-blue-500 to-cyan-500' },
      { icon: '👥', title: '我的组队', count: 5, color: 'from-purple-500 to-pink-500' },
      { icon: '❤️', title: '收藏路线', count: 34, color: 'from-red-500 to-rose-500' },
      { icon: '🎒', title: '装备清单', count: 0, color: 'from-orange-500 to-amber-500' },
      { icon: '📷', title: '我的足迹', count: 156, color: 'from-emerald-500 to-teal-500' },
      { icon: '⚙️', title: '设置', count: 0, color: 'from-slate-500 to-slate-600' }
    ];

    return (
      <div className="w-full max-w-md mx-auto min-h-screen bg-slate-50">
        {/* 顶部个人信息 */}
        <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 px-5 pt-10 pb-20 relative overflow-hidden">
          {/* 背景装饰 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          </div>

          {/* 设置按钮 */}
          <button className="absolute top-10 right-5 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full active:scale-95 transition-all">
            <Share2 size={20} />
          </button>

          {/* 用户信息 */}
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-4xl mb-3 border-4 border-white shadow-xl">
              👨‍🦰
            </div>
            <h2 className="text-white text-xl font-bold mb-1">山野行者</h2>
            <p className="text-emerald-100 text-sm mb-4">探索世界的每一个角落</p>
            
            {/* 等级徽章 */}
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full">
              <span className="text-amber-300 text-lg">⭐</span>
              <span className="text-white text-sm font-medium">Lv.8 资深驴友</span>
            </div>
          </div>
        </div>

        {/* 数据统计卡片 */}
        <div className="px-5 -mt-12 relative z-10 mb-5">
          <div className="bg-white rounded-2xl shadow-xl p-5">
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600 mb-1">{userStats.routes}</div>
                <div className="text-xs text-slate-500">完成路线</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{userStats.distance}</div>
                <div className="text-xs text-slate-500">总里程(km)</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">{userStats.days}</div>
                <div className="text-xs text-slate-500">徒步天数</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">{userStats.altitude}</div>
                <div className="text-xs text-slate-500">最高海拔(m)</div>
              </div>
            </div>
          </div>
        </div>

        {/* 成就徽章 */}
        <div className="px-5 mb-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800 flex items-center gap-2">
              <span className="text-amber-500">🏆</span>
              我的成就
            </h3>
            <button className="text-emerald-600 text-sm font-medium flex items-center active:scale-95 transition-all">
              查看全部 <ChevronRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className={`bg-white rounded-xl p-3 text-center shadow-sm ${
                  achievement.unlocked ? '' : 'opacity-40'
                }`}
              >
                <div className="text-3xl mb-1">{achievement.icon}</div>
                <div className="text-xs font-bold text-slate-800 mb-0.5">{achievement.name}</div>
                <div className="text-xs text-slate-500">{achievement.desc}</div>
                {achievement.unlocked && (
                  <div className="mt-1 text-xs text-emerald-600 font-medium">✓ 已解锁</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 我的路线 */}
        <div className="px-5 mb-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-slate-800">我的路线</h3>
            <button className="text-emerald-600 text-sm font-medium flex items-center active:scale-95 transition-all">
              查看全部 <ChevronRight size={14} />
            </button>
          </div>
          <div className="space-y-3">
            {myRoutes.map((route) => (
              <div key={route.id} className="bg-white rounded-xl shadow-sm p-3 flex items-center gap-3 active:scale-95 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                  {route.image}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-slate-800 text-sm mb-1">{route.title}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>📅 {route.date}</span>
                  </div>
                </div>
                <div className={`text-xs px-2 py-1 rounded-full font-medium flex-shrink-0 ${
                  route.status === '已完成' 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {route.status}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 功能菜单 */}
        <div className="px-5 mb-20">
          <div className="grid grid-cols-2 gap-3">
            {menuItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm p-4 active:scale-95 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center text-xl`}>
                    {item.icon}
                  </div>
                  {item.count > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                      {item.count}
                    </span>
                  )}
                </div>
                <div className="font-medium text-slate-800 text-sm">{item.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部导航 */}
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-200 px-5 py-3 flex items-center justify-around safe-bottom">
          <button
            onClick={() => setCurrentPage('home')}
            className="flex flex-col items-center gap-0.5 active:scale-95 transition-all"
          >
            <Mountain size={22} className={currentPage === 'home' ? 'text-emerald-600' : 'text-slate-400'} />
            <span className={`text-xs ${currentPage === 'home' ? 'text-emerald-600 font-medium' : 'text-slate-400'}`}>
              首页
            </span>
          </button>

          <button
            onClick={() => setCurrentPage('routes')}
            className="flex flex-col items-center gap-0.5 active:scale-95 transition-all"
          >
            <MapPin size={22} className={currentPage === 'routes' || currentPage === 'routeDetail' ? 'text-emerald-600' : 'text-slate-400'} />
            <span className={`text-xs ${currentPage === 'routes' || currentPage === 'routeDetail' ? 'text-emerald-600 font-medium' : 'text-slate-400'}`}>
              路线
            </span>
          </button>

          <button className="flex flex-col items-center gap-0.5 active:scale-95 transition-all -mt-6">
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3.5 rounded-full shadow-xl">
              <Plus size={24} className="text-white" />
            </div>
          </button>

          <button className="flex flex-col items-center gap-0.5 active:scale-95 transition-all">
            <MessageCircle size={22} className="text-slate-400" />
            <span className="text-xs text-slate-400">社区</span>
          </button>

          <button
            onClick={() => setCurrentPage('profile')}
            className="flex flex-col items-center gap-0.5 active:scale-95 transition-all"
          >
            <Users size={22} className={currentPage === 'profile' ? 'text-emerald-600' : 'text-slate-400'} />
            <span className={`text-xs ${currentPage === 'profile' ? 'text-emerald-600 font-medium' : 'text-slate-400'}`}>
              我的
            </span>
          </button>
        </div>
      </div>
    );
  }

  // 路线详情页面
  if (currentPage === 'routeDetail' && selectedRoute) {
    return (
      <div className="w-full max-w-md mx-auto min-h-screen bg-slate-50">
        {/* 顶部大图 */}
        <div className="relative h-64 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center">
          <span className="text-9xl">{selectedRoute.image}</span>
          
          {/* 返回按钮 */}
          <button 
            onClick={() => setCurrentPage('routes')}
            className="absolute top-10 left-5 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full active:scale-95 transition-all"
          >
            <ChevronRight size={20} className="rotate-180" />
          </button>

          {/* 分享和收藏 */}
          <div className="absolute top-10 right-5 flex gap-2">
            <button className="bg-black/30 backdrop-blur-sm text-white p-2 rounded-full active:scale-95 transition-all">
              <Share2 size={20} />
            </button>
            <button className="bg-black/30 backdrop-blur-sm text-white p-2 rounded-full active:scale-95 transition-all">
              <Heart size={20} />
            </button>
          </div>

          {/* 底部渐变遮罩 */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent"></div>
        </div>

        {/* 标题区 */}
        <div className="px-5 -mt-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h1 className="text-2xl font-bold text-slate-800 mb-2">{selectedRoute.title}</h1>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <MapPin size={14} />
                  <span>{selectedRoute.location}</span>
                </div>
              </div>
              <div className={`text-xs px-3 py-1.5 rounded-full font-medium flex-shrink-0 ${
                selectedRoute.difficultyLevel === 'easy' 
                  ? 'bg-green-100 text-green-700'
                  : selectedRoute.difficultyLevel === 'medium'
                  ? 'bg-orange-100 text-orange-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {selectedRoute.difficulty}
              </div>
            </div>

            {/* 关键数据 */}
            <div className="grid grid-cols-4 gap-3 pt-4 border-t border-slate-100">
              <div className="text-center">
                <div className="text-xs text-slate-500 mb-1">时长</div>
                <div className="text-sm font-bold text-slate-800">{selectedRoute.days}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-500 mb-1">距离</div>
                <div className="text-sm font-bold text-slate-800">{selectedRoute.distance}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-500 mb-1">海拔</div>
                <div className="text-sm font-bold text-slate-800">{selectedRoute.altitude}</div>
              </div>
              <div className="text-center">
                <div className="text-xs text-slate-500 mb-1">季节</div>
                <div className="text-sm font-bold text-slate-800">{selectedRoute.season}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab导航 */}
        <div className="px-5 mt-4">
          <div className="bg-white rounded-xl shadow-sm p-1 flex gap-1">
            {[
              { key: 'intro', label: '路线介绍' },
              { key: 'guide', label: '行程攻略' },
              { key: 'equipment', label: '装备清单' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setDetailTab(tab.key)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition-all ${
                  detailTab === tab.key
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                    : 'text-slate-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 内容区 */}
        <div className="px-5 mt-4 pb-24">
          {/* 路线介绍 */}
          {detailTab === 'intro' && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-sm p-5">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Mountain size={18} className="text-emerald-600" />
                  路线简介
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">{selectedRoute.description}</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-5">
                <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <Compass size={18} className="text-emerald-600" />
                  路线亮点
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedRoute.highlights?.map((highlight, idx) => (
                    <span key={idx} className="bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-emerald-200">
                      ✨ {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-sm p-5 border border-amber-200">
                <h3 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
                  💡 温馨提示
                </h3>
                <ul className="space-y-2">
                  {selectedRoute.tips?.map((tip, idx) => (
                    <li key={idx} className="text-amber-700 text-sm flex items-start gap-2">
                      <span className="text-amber-500 mt-0.5">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 作者信息 */}
              <div className="bg-white rounded-2xl shadow-sm p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-2xl">
                      {selectedRoute.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-slate-800">{selectedRoute.author}</div>
                      <div className="text-xs text-slate-500">路线贡献者</div>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-md active:scale-95 transition-all">
                    + 关注
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 行程攻略 */}
          {detailTab === 'guide' && (
            <div className="space-y-4">
              {selectedRoute.itinerary?.map((day, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden">
                  {/* 日期头部 */}
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                          D{day.day}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{day.title}</h4>
                          <p className="text-sm text-emerald-100">{day.desc}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3 text-sm text-white">
                      <span className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                        <MapPin size={14} />
                        {day.distance}
                      </span>
                      <span className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                        ⏱️ {day.time}
                      </span>
                      <span className="flex items-center gap-1 bg-white/20 px-2 py-1 rounded-lg">
                        📈 {day.ascent}
                      </span>
                    </div>
                  </div>

                  {/* 路线图示 */}
                  <div className="px-4 py-3 bg-slate-50 flex items-center justify-around">
                    {day.photos?.map((photo, photoIdx) => (
                      <div key={photoIdx} className="text-3xl">{photo}</div>
                    ))}
                  </div>

                  {/* 途经点 */}
                  <div className="p-4">
                    <h5 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                      <Compass size={16} className="text-emerald-600" />
                      途经点位
                    </h5>
                    <div className="space-y-3 relative">
                      {/* 连接线 */}
                      <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-500"></div>
                      
                      {day.waypoints?.map((point, pointIdx) => (
                        <div key={pointIdx} className="flex gap-3 relative">
                          <div className="relative z-10 flex-shrink-0">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                              pointIdx === 0 
                                ? 'bg-green-500 text-white'
                                : pointIdx === day.waypoints.length - 1
                                ? 'bg-red-500 text-white'
                                : 'bg-blue-500 text-white'
                            }`}>
                              {pointIdx + 1}
                            </div>
                          </div>
                          <div className="flex-1 bg-slate-50 rounded-xl p-3 mb-2">
                            <div className="flex items-start justify-between mb-1">
                              <h6 className="font-bold text-slate-800 text-sm">{point.name}</h6>
                              <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                {point.altitude}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 mb-2 text-xs text-slate-500">
                              <span className="flex items-center gap-1">
                                ⏰ {point.time}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600">{point.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* 注意事项 */}
                    {day.notes && day.notes.length > 0 && (
                      <div className="mt-4 bg-amber-50 rounded-xl p-3 border border-amber-200">
                        <h6 className="font-bold text-amber-800 mb-2 flex items-center gap-1 text-sm">
                          ⚠️ 注意事项
                        </h6>
                        <ul className="space-y-1">
                          {day.notes.map((note, noteIdx) => (
                            <li key={noteIdx} className="text-xs text-amber-700 flex items-start gap-2">
                              <span className="text-amber-500 mt-0.5">•</span>
                              <span>{note}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* 整体建议 */}
              <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl shadow-lg p-5 text-white">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                  💪 行程建议
                </h4>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2">
                    <span>🎒</span>
                    <span>合理分配体力，不要在前半程消耗过多</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span>💧</span>
                    <span>每天至少带2L水，山顶补给点较少</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span>📱</span>
                    <span>提前下载离线地图，山上信号不稳定</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span>⛺</span>
                    <span>旺季建议提前预订山顶住宿或租赁帐篷</span>
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 装备清单 */}
          {detailTab === 'equipment' && (
            <div className="space-y-3">
              {selectedRoute.equipmentList?.map((category, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-sm p-5">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <Backpack size={16} className="text-emerald-600" />
                    {category.category}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg">
                        <input type="checkbox" className="w-4 h-4 text-emerald-600 rounded" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl shadow-sm p-5 border border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-500 text-white p-2 rounded-lg">
                    💡
                  </div>
                  <div>
                    <div className="font-bold text-blue-800 mb-1">装备建议</div>
                    <p className="text-sm text-blue-700">根据季节和天气调整装备，建议提前检查所有装备是否完好。新手建议跟随有经验的领队。</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 底部操作栏 */}
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-200 px-5 py-4 flex items-center gap-3">
          <div className="flex items-center gap-3">
            <button className="flex flex-col items-center gap-1 text-slate-600 active:scale-95 transition-all">
              <Heart size={22} />
              <span className="text-xs">{selectedRoute.likes}</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-slate-600 active:scale-95 transition-all">
              <MessageCircle size={22} />
              <span className="text-xs">评论</span>
            </button>
          </div>
          <button className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-3 rounded-xl font-semibold shadow-lg active:scale-95 transition-all">
            发起组队
          </button>
        </div>
      </div>
    );
  }

  // 路线页面
  if (currentPage === 'routes') {
    const filterOptions = [
      { value: 'all', label: '全部' },
      { value: 'easy', label: '简单', color: 'text-green-600' },
      { value: 'medium', label: '中等', color: 'text-orange-600' },
      { value: 'hard', label: '高难度', color: 'text-red-600' }
    ];

    const filteredRoutes = routeFilter === 'all' 
      ? routes 
      : routes.filter(route => route.difficultyLevel === routeFilter);

    return (
      <div className="w-full max-w-md mx-auto min-h-screen bg-slate-50">
        {/* 顶部栏 */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 pt-10 pb-6">
          <div className="flex items-center justify-between mb-5">
            <h1 className="text-xl font-bold">徒步路线</h1>
            <div className="flex items-center gap-2">
              <button className="bg-white/20 backdrop-blur-sm p-2 rounded-lg active:scale-95 transition-all">
                <MapPin size={20} />
              </button>
            </div>
          </div>

          {/* 搜索栏 */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center">
            <input
              type="text"
              placeholder="搜索目的地、路线名称..."
              className="flex-1 bg-transparent placeholder-white/70 outline-none text-white text-sm"
            />
            <Compass size={18} className="text-white/70" />
          </div>
        </div>

        {/* 筛选标签 */}
        <div className="px-5 py-4 bg-white shadow-sm">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setRouteFilter(option.value)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all active:scale-95 ${
                  routeFilter === option.value
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* 路线统计 */}
        <div className="px-5 py-3 flex items-center justify-between">
          <span className="text-sm text-slate-600">
            共找到 <span className="font-bold text-emerald-600">{filteredRoutes.length}</span> 条路线
          </span>
          <button className="flex items-center gap-1 text-sm text-slate-600 active:scale-95 transition-all">
            <TrendingUp size={14} />
            <span>热度排序</span>
          </button>
        </div>

        {/* 路线列表 */}
        <div className="px-5 pb-20 space-y-3">
          {filteredRoutes.map((route) => (
            <div key={route.id} className="bg-white rounded-2xl shadow-lg overflow-hidden active:scale-95 transition-all">
              {/* 路线图片区 */}
              <div className="relative h-40 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center text-7xl">
                {route.image}
                <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                  <MapPin size={12} />
                  {route.location}
                </div>
                <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg">
                  {route.season}
                </div>
                <div className={`absolute bottom-3 left-3 text-xs px-2.5 py-1 rounded-full font-medium ${
                  route.difficultyLevel === 'easy' 
                    ? 'bg-green-500 text-white'
                    : route.difficultyLevel === 'medium'
                    ? 'bg-orange-500 text-white'
                    : 'bg-red-500 text-white'
                }`}>
                  {route.difficulty}
                </div>
              </div>

              {/* 路线信息 */}
              <div className="p-4">
                <h3 className="font-bold text-slate-800 text-base mb-3">{route.title}</h3>
                
                {/* 关键数据 */}
                <div className="grid grid-cols-3 gap-3 mb-3 pb-3 border-b border-slate-100">
                  <div className="text-center">
                    <div className="text-xs text-slate-500 mb-0.5">时长</div>
                    <div className="text-sm font-bold text-slate-800">{route.days}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-500 mb-0.5">距离</div>
                    <div className="text-sm font-bold text-slate-800">{route.distance}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-slate-500 mb-0.5">最高海拔</div>
                    <div className="text-sm font-bold text-slate-800">{route.altitude}</div>
                  </div>
                </div>

                {/* 作者和互动 */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span>{route.avatar}</span>
                    <span>{route.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1 text-slate-400 active:scale-95 transition-all">
                      <Heart size={16} />
                      <span className="text-xs">{route.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 text-slate-400 active:scale-95 transition-all">
                      <Share2 size={16} />
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedRoute(route);
                        setCurrentPage('routeDetail');
                      }}
                      className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium shadow-md active:scale-95 transition-all"
                    >
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部导航 */}
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-200 px-5 py-3 flex items-center justify-around safe-bottom">
          {[
            { icon: Mountain, label: '首页', page: 'home' },
            { icon: MapPin, label: '路线', page: 'routes', active: true },
            { icon: Plus, label: '' },
            { icon: MessageCircle, label: '社区' },
            { icon: Users, label: '我的' }
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => item.page && setCurrentPage(item.page)}
              className={`flex flex-col items-center gap-0.5 active:scale-95 transition-all ${
                index === 2 ? '-mt-6' : ''
              }`}
            >
              {index === 2 ? (
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3.5 rounded-full shadow-xl">
                  <item.icon size={24} className="text-white" />
                </div>
              ) : (
                <>
                  <item.icon
                    size={22}
                    className={item.active ? 'text-emerald-600' : 'text-slate-400'}
                  />
                  <span
                    className={`text-xs ${
                      item.active ? 'text-emerald-600 font-medium' : 'text-slate-400'
                    }`}
                  >
                    {item.label}
                  </span>
                </>
              )}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 首页
  return (
    <div className="w-full max-w-md mx-auto min-h-screen bg-slate-50">
      {/* 顶部栏 */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 pt-10 pb-6 rounded-b-3xl shadow-xl">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-xl font-bold">徒步探险</h1>
            <p className="text-emerald-100 text-xs mt-0.5">发现更多精彩路线</p>
          </div>
          <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-full">
            <Compass size={20} />
          </div>
        </div>

        {/* 搜索栏 */}
        <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center">
          <input
            type="text"
            placeholder="搜索路线、装备、攻略..."
            className="flex-1 bg-transparent placeholder-white/70 outline-none text-white text-sm"
          />
          <MapPin size={18} className="text-white/70" />
        </div>
      </div>

      {/* 快捷入口 */}
      <div className="grid grid-cols-4 gap-3 px-5 -mt-5">
        {[
          { icon: MapPin, label: '路线', color: 'from-blue-500 to-cyan-500', action: () => setCurrentPage('routes') },
          { icon: Backpack, label: '装备', color: 'from-orange-500 to-amber-500' },
          { icon: Users, label: '组队', color: 'from-purple-500 to-pink-500' },
          { icon: TrendingUp, label: '排行', color: 'from-red-500 to-rose-500' }
        ].map((item, index) => (
          <div 
            key={index} 
            onClick={item.action}
            className="bg-white rounded-xl p-3 shadow-lg text-center active:scale-95 transition-all cursor-pointer"
          >
            <div className={`bg-gradient-to-br ${item.color} w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-1.5`}>
              <item.icon size={20} className="text-white" />
            </div>
            <span className="text-xs text-slate-600 font-medium">{item.label}</span>
          </div>
        ))}
      </div>

      {/* 组队邀请 */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-slate-800">组队邀请</h2>
          <button className="text-emerald-600 text-sm font-medium flex items-center active:scale-95 transition-all">
            发起组队 <Plus size={14} className="ml-0.5" />
          </button>
        </div>

        <div className="space-y-3">
          {teams.map((team) => (
            <div key={team.id} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg p-4 border border-slate-100 active:scale-95 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-800 text-base mb-1">{team.route}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <span>{team.avatar}</span>
                      <span>{team.leader}</span>
                    </span>
                    <span className="text-slate-400">·</span>
                    <span>{team.date}</span>
                  </div>
                </div>
                <div className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">
                  {team.duration}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">{team.difficulty}</span>
                {team.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(team.current)].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full border-2 border-white -ml-1 first:ml-0 flex items-center justify-center text-xs">
                        👤
                      </div>
                    ))}
                    {[...Array(Math.min(3, team.total - team.current))].map((_, i) => (
                      <div key={`empty-${i}`} className="w-6 h-6 bg-slate-200 rounded-full border-2 border-white -ml-1 flex items-center justify-center text-xs text-slate-400">
                        +
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">
                    <span className="font-semibold text-emerald-600">{team.current}</span>/{team.total}人
                  </span>
                </div>
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium shadow-md active:scale-95 transition-all">
                  加入
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 热门路线 */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-slate-800">热门路线</h2>
          <button className="text-emerald-600 text-sm font-medium flex items-center active:scale-95 transition-all">
            更多 <ChevronRight size={14} />
          </button>
        </div>

        <div className="space-y-3">
          {routes.slice(0, 2).map((route) => (
            <div key={route.id} className="bg-white rounded-2xl shadow-lg overflow-hidden active:scale-95 transition-all">
              <div className="flex">
                <div className="w-28 h-28 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-5xl flex-shrink-0">
                  {route.image}
                </div>
                <div className="flex-1 p-3 min-w-0">
                  <h3 className="font-bold text-slate-800 mb-1.5 text-sm truncate">{route.title}</h3>
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">{route.difficulty}</span>
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">{route.days}</span>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">{route.distance}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-slate-600">
                      <span>{route.avatar}</span>
                      <span className="truncate">{route.author}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="flex items-center gap-0.5">
                        <Heart size={12} /> {route.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 组队邀请精选 */}
      <div className="px-5 mt-6">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-slate-800">组队邀请</h2>
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">HOT</span>
          </div>
          <button className="text-emerald-600 text-sm font-medium flex items-center active:scale-95 transition-all">
            更多 <ChevronRight size={14} />
          </button>
        </div>

        <div className="space-y-3">
          {teams.map((team) => (
            <div key={team.id} className="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg p-4 border border-slate-100 active:scale-95 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-800 text-base mb-1">{team.route}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="flex items-center gap-1">
                      <span>{team.avatar}</span>
                      <span>{team.leader}</span>
                    </span>
                    <span className="text-slate-400">·</span>
                    <span>{team.date}</span>
                  </div>
                </div>
                <div className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium flex-shrink-0">
                  {team.duration}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">{team.difficulty}</span>
                {team.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(team.current)].map((_, i) => (
                      <div key={i} className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full border-2 border-white -ml-1 first:ml-0 flex items-center justify-center text-xs">
                        👤
                      </div>
                    ))}
                    {[...Array(Math.min(3, team.total - team.current))].map((_, i) => (
                      <div key={`empty-${i}`} className="w-6 h-6 bg-slate-200 rounded-full border-2 border-white -ml-1 flex items-center justify-center text-xs text-slate-400">
                        +
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">
                    <span className="font-semibold text-emerald-600">{team.current}</span>/{team.total}人
                  </span>
                </div>
                <button className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium shadow-md active:scale-95 transition-all">
                  加入
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 装备推荐 */}
      <div className="px-5 mt-6 pb-20">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold text-slate-800">装备推荐</h2>
          <button className="text-emerald-600 text-sm font-medium flex items-center active:scale-95 transition-all">
            更多 <ChevronRight size={14} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {equipment.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden active:scale-95 transition-all">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 h-24 flex items-center justify-center text-4xl">
                {item.image}
              </div>
              <div className="p-2.5">
                <div className="text-xs text-slate-500 mb-0.5">{item.category}</div>
                <h4 className="font-semibold text-xs text-slate-800 mb-1.5 line-clamp-2 leading-tight">{item.name}</h4>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-600 font-bold text-sm">{item.price}</span>
                  <div className="flex items-center gap-0.5 text-xs text-amber-500">
                    <span>⭐</span>
                    <span>{item.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部导航 */}
      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-200 px-5 py-3 flex items-center justify-around safe-bottom">
        {[
          { icon: Mountain, label: '首页', active: true },
          { icon: MapPin, label: '路线' },
          { icon: Plus, label: '' },
          { icon: MessageCircle, label: '社区' },
          { icon: Users, label: '我的' }
        ].map((item, index) => (
          <button
            key={index}
            className={`flex flex-col items-center gap-0.5 active:scale-95 transition-all ${
              index === 2 ? '-mt-6' : ''
            }`}
          >
            {index === 2 ? (
              <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3.5 rounded-full shadow-xl">
                <item.icon size={24} className="text-white" />
              </div>
            ) : (
              <>
                <item.icon
                  size={22}
                  className={item.active ? 'text-emerald-600' : 'text-slate-400'}
                />
                <span
                  className={`text-xs ${
                    item.active ? 'text-emerald-600 font-medium' : 'text-slate-400'
                  }`}
                >
                  {item.label}
                </span>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HikingMiniApp;