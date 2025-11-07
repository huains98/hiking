<script setup lang="ts">
import { MapPin, MessageCircle, Mountain, Plus, Users } from 'lucide-vue-next'
import { reactive } from 'vue';
import { useRouter } from 'vue-router'


const tabbarItems = reactive([
    { icon: Mountain, label: '首页', active: true, path: '/' },
    { icon: MapPin, label: '路线', active: false, path: '/course' },
    { icon: Plus, label: '', active: false, path: '/create' },
    { icon: MessageCircle, label: '社区', active: false, path: '/community' },
    { icon: Users, label: '我的', active: false, path: '/profile' },
])

const router = useRouter()

const toTab = (item: any) => {
    tabbarItems.forEach(item => item.active = false)
    item.active = true
    router.push(item.path)
}

</script>

<template>
    <div class="h-100vh w-100vw grid cols-1 rows-[1fr_64px]">
        <RouterView />
        <div
            className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t border-slate-200 px-5 py-3 flex items-center justify-around safe-bottom">
            <button
                v-for="(item, index) in tabbarItems"
                :key="index"
                :class="`flex flex-col items-center gap-0.5 active:scale-95 transition-all ${
                index===2 ? '-mt-6' : '' }`"
                @click="toTab(item)"
            >
                <template v-if="index === 2">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3.5 rounded-full shadow-xl">
                        <component :is="item.icon" :size="24" className="text-white" />
                    </div>
                </template>
                <template v-else>
                    <component :is="item.icon" :size="22" :class="item.active ? 'text-emerald-600' : 'text-slate-400'" />
                    <span :class="`text-xs ${ item.active ? 'text-emerald-600 font-medium' : 'text-slate-400' }`">
                        {{ item.label }}
                    </span>
                </template>
            </button>
        </div>
    </div>
</template>