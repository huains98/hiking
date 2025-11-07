<script setup lang="ts">
import { Backpack, Compass, MapPin, TrendingUp, Users, Plus, ChevronRight, Heart } from 'lucide-vue-next'
import { ref } from 'vue';

const menuItems = ref([
    { icon: MapPin, label: '路线', color: 'from-blue-500 to-cyan-500', action: () => { } },
    { icon: Backpack, label: '装备', color: 'from-orange-500 to-amber-500' },
    { icon: Users, label: '组队', color: 'from-purple-500 to-pink-500' },
    { icon: TrendingUp, label: '排行', color: 'from-red-500 to-rose-500' }
])

const teams = ref([
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
])

const routes = ref([
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
])

const equipment = ref([
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
])
</script>

<template>
    <div class="w-full mx-auto min-h-screen bg-slate-50">
        <!-- 顶部 -->
        <div class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 pt-10 pb-6 rounded-b-3xl shadow-xl">
            <div class="flex items-center justify-between mb-5">
                <div>
                    <h1 class="text-xl font-bold">徒步探险</h1>
                    <p class="text-emerald-100 text-xs mt-0.5">发现更多精彩路线</p>
                </div>
                <div class="bg-white/20 backdrop-blur-sm p-2.5 rounded-full">
                    <Compass :size="20" />
                </div>
            </div>

            <!-- {/* 搜索栏 */} -->
            <div class="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center">
                <input type="text" placeholder="搜索路线、装备、攻略..."
                    class="flex-1 bg-transparent placeholder-white/70 outline-none text-white text-sm" />
                <MapPin :size="18" class="text-white/70" />
            </div>
        </div>
        <!-- 快捷入口 -->
        <div class="grid grid-cols-4 gap-3 px-5 -mt-5">
            <div v-for="(item, index) in menuItems" :key="index" @click="item.action"
                class="bg-white rounded-xl p-3 shadow-lg text-center active:scale-95 transition-all cursor-pointer">
                <div :class="`bg-gradient-to-br ${item.color} w-10 h-10 rounded-lg flex items-center justify-center
                    mx-auto mb-1.5`">
                    <component :is="item.icon" :size="20" class="text-white" />
                </div>
                <span class="text-xs text-slate-600 font-medium">{{ item.label }}</span>
            </div>
        </div>
        <!-- 组队邀请 -->
        <div class="px-5 mt-6">
            <div class="flex items-center justify-between mb-3">
                <h2 class="text-lg font-bold text-slate-800">组队邀请</h2>
                <button class="text-emerald-600 text-sm font-medium flex items-center active:scale-95 transition-all">
                    发起组队
                    <Plus :size="14" class="ml-0.5" />
                </button>
            </div>

            <div class="space-y-3">
                <div v-for="team in teams" :key="team.id"
                    class="bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg p-4 border border-slate-100 active:scale-95 transition-all">
                    <div class="flex items-start justify-between mb-3">
                        <div class="flex-1">
                            <h3 class="font-bold text-slate-800 text-base mb-1">{{ team.route }}</h3>
                            <div class="flex items-center gap-2 text-xs text-slate-600">
                                <span class="flex items-center gap-1">
                                    <span>{{ team.avatar }}</span>
                                    <span>{{ team.leader }}</span>
                                </span>
                                <span class="text-slate-400">·</span>
                                <span>{{ team.date }}</span>
                            </div>
                        </div>
                        <div class="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">
                            {{ team.duration }}
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-1.5 mb-3">
                        <span class="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">{{ team.difficulty
                        }}</span>
                        <span v-for="(tag, idx) in team.tags" :key="idx"
                            class="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{{ tag }}</span>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <div class="flex items-center">

                                <div v-for="(_, i) in [...Array(team.current)]" :key="i"
                                    class="w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full border-2 border-white -ml-1 first:ml-0 flex items-center justify-center text-xs">
                                    👤
                                </div>


                                <div v-for="(_, i) in [...Array(Math.min(3, team.total - team.current))]"
                                    :key="`empty-${i}`"
                                    class="w-6 h-6 bg-slate-200 rounded-full border-2 border-white -ml-1 flex items-center justify-center text-xs text-slate-400">
                                    +
                                </div>

                            </div>
                            <span class="text-sm text-slate-600">
                                <span class="font-semibold text-emerald-600">{{ team.current }}</span>/{{ team.total }}人
                            </span>
                        </div>
                        <button
                            class="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium shadow-md active:scale-95 transition-all">
                            加入
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- 热门路线 -->
        <div class="px-5 mt-6">
            <div class="flex items-center justify-between mb-3">
                <h2 class="text-lg font-bold text-slate-800">热门路线</h2>
                <button class="text-emerald-600 text-sm font-medium flex items-center active:scale-95 transition-all">
                    更多
                    <ChevronRight :size="14" />
                </button>
            </div>

            <div class="space-y-3">
                <div v-for="route in routes.slice(0, 3)" :key="route.id"
                    class="bg-white rounded-2xl shadow-lg overflow-hidden active:scale-95 transition-all">
                    <div class="flex">
                        <div
                            class="w-28 h-28 bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-5xl flex-shrink-0">
                            {{ route.image }}
                        </div>
                        <div class="flex-1 p-3 min-w-0">
                            <h3 class="font-bold text-slate-800 mb-1.5 text-sm truncate">{{ route.title }}</h3>
                            <div class="flex flex-wrap gap-1.5 mb-2">
                                <span class="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">{{
                                    route.difficulty }}</span>
                                <span class="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">{{ route.days
                                    }}</span>
                                <span class="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full">{{
                                    route.distance }}</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1.5 text-xs text-slate-600">
                                    <span>{{ route.avatar }}</span>
                                    <span class="truncate">{{ route.author }}</span>
                                </div>
                                <div class="flex items-center gap-2 text-xs text-slate-400">
                                    <span class="flex items-center gap-0.5">
                                        <Heart :size="12" /> {{ route.likes }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 装备推荐 -->
        <div class="px-5 mt-6 pb-20">
            <div class="flex items-center justify-between mb-3">
                <h2 class="text-lg font-bold text-slate-800">装备推荐</h2>
                <button class="text-emerald-600 text-sm font-medium flex items-center active:scale-95 transition-all">
                    更多
                    <ChevronRight :size="14" />
                </button>
            </div>

            <div class="grid grid-cols-3 gap-2.5">
                <div v-for="item in equipment" :key="item.id"
                    class="bg-white rounded-xl shadow-lg overflow-hidden active:scale-95 transition-all">
                    <div
                        class="bg-gradient-to-br from-slate-100 to-slate-200 h-24 flex items-center justify-center text-4xl">
                        {{ item.image }}
                    </div>
                    <div class="p-2.5">
                        <div class="text-xs text-slate-500 mb-0.5">{{ item.category }}</div>
                        <h4 class="font-semibold text-xs text-slate-800 mb-1.5 line-clamp-2 leading-tight">
                            {{ item.name }}</h4>
                        <div class="flex items-center justify-between">
                            <span class="text-emerald-600 font-bold text-sm">{{ item.price }}</span>
                            <div class="flex items-center gap-0.5 text-xs text-amber-500">
                                <span>⭐</span>
                                <span>{{ item.rating }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>