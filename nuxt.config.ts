// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],

  // 使用静态生成模式，避免 better-sqlite3 在 Vercel 上的兼容性问题
  nitro: {
    preset: 'vercel-static'
  }
})
