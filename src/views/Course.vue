<script lang="ts" setup>
import { computed, ref } from 'vue';
import { MapPin, Compass, TrendingUp, Heart, Share2 } from 'lucide-vue-next'

const filterOptions = ref([
    { value: 'all', label: '全部' },
    { value: 'easy', label: '简单', color: 'text-green-600' },
    { value: 'medium', label: '中等', color: 'text-orange-600' },
    { value: 'hard', label: '高难度', color: 'text-red-600' }
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

const routeFilter = ref<'all' | 'easy' | 'medium' | 'hard'>('all')
const filteredRoutes = computed(() => {
    return routeFilter.value === 'all'
        ? routes.value
        : routes.value.filter(route => route.difficultyLevel === routeFilter.value)
})

const setRouteFilter = (filter: any) => {
    routeFilter.value = filter
}
</script>

<template>
    <div class="w-full max-w-md mx-auto min-h-screen bg-slate-50">
        <!-- {/* 顶部栏 */} -->
        <div class="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-5 pt-10 pb-6">
            <div class="flex items-center justify-between mb-5">
                <h1 class="text-xl font-bold">徒步路线</h1>
                <div class="flex items-center gap-2">
                    <button class="bg-white/20 backdrop-blur-sm p-2 rounded-lg active:scale-95 transition-all">
                        <MapPin :size="20" />
                    </button>
                </div>
            </div>

            <!-- {/* 搜索栏 */} -->
            <div class="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center">
                <input type="text" placeholder="搜索目的地、路线名称..."
                    class="flex-1 bg-transparent placeholder-white/70 outline-none text-white text-sm" />
                <Compass :size="18" class="text-white/70" />
            </div>
        </div>

        <!-- {/* 筛选标签 */} -->
        <div class="px-5 py-4 bg-white shadow-sm">
            <div class="flex items-center gap-2 overflow-x-auto scrollbar-hide">

                <button v-for="option in filterOptions" :key="option.value" @click="() => setRouteFilter(option.value)"
                    :class="`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all active:scale-95 ${routeFilter === option.value
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-600'
                        }`">
                    {{ option.label }}
                </button>

            </div>
        </div>

        <!-- {/* 路线统计 */} -->
        <div class="px-5 py-3 flex items-center justify-between">
            <span class="text-sm text-slate-600">
                共找到 <span class="font-bold text-emerald-600">{{ filteredRoutes.length }}</span> 条路线
            </span>
            <button class="flex items-center gap-1 text-sm text-slate-600 active:scale-95 transition-all">
                <TrendingUp :size="14" />
                <span>热度排序</span>
            </button>
        </div>

        <!-- {/* 路线列表 */} -->
        <div class="px-5 pb-20 space-y-3">

            <div v-for="route in filteredRoutes" :key="route.id"
                class="bg-white rounded-2xl shadow-lg overflow-hidden active:scale-95 transition-all">
                <!-- {/* 路线图片区 */} -->
                <div
                    class="relative h-40 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 flex items-center justify-center text-7xl">
                    {{ route.image }}
                    <div
                        class="absolute top-3 left-3 bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                        <MapPin :size="12" />
                        {{ route.location }}
                    </div>
                    <div
                        class="absolute top-3 right-3 bg-black/30 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-lg">
                        {{ route.season }}
                    </div>
                    <div :class="`absolute bottom-3 left-3 text-xs px-2.5 py-1 rounded-full font-medium ${route.difficultyLevel === 'easy' ? 'bg-green-500 text-white' : route.difficultyLevel === 'medium'
                        ? 'bg-orange-500 text-white' : 'bg-red-500 text-white'}`">
                        {{ route.difficulty }}
                    </div>
                </div>

                <!-- {/* 路线信息 */} -->
                <div class="p-4">
                    <h3 class="font-bold text-slate-800 text-base mb-3">{{ route.title }}</h3>
                    <!-- {/* 关键数据 */} -->
                    <div class="grid grid-cols-3 gap-3 mb-3 pb-3 border-b border-slate-100">
                        <div class="text-center">
                            <div class="text-xs text-slate-500 mb-0.5">时长</div>
                            <div class="text-sm font-bold text-slate-800">{{ route.days }}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-xs text-slate-500 mb-0.5">距离</div>
                            <div class="text-sm font-bold text-slate-800">{{ route.distance }}</div>
                        </div>
                        <div class="text-center">
                            <div class="text-xs text-slate-500 mb-0.5">最高海拔</div>
                            <div class="text-sm font-bold text-slate-800">{{ route.altitude }}</div>
                        </div>
                    </div>

                    <!-- {/* 作者和互动 */} -->
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2 text-sm text-slate-600">
                            <span>{{ route.avatar }}</span>
                            <span>{{ route.author }}</span>
                        </div>
                        <div class="flex items-center gap-3">
                            <button class="flex items-center gap-1 text-slate-400 active:scale-95 transition-all">
                                <Heart :size="16" />
                                <span class="text-xs">{{ route.likes }}</span>
                            </button>
                            <button class="flex items-center gap-1 text-slate-400 active:scale-95 transition-all">
                                <Share2 :size="16" />
                            </button>
                            <button @click="$router.push('/w/courseDetail')" class="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-1.5 rounded-lg
                                text-xs font-medium shadow-md active:scale-95 transition-all">
                                查看详情
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>