# 🚀 Vercel 部署指南

## 📋 部署前準備

### ✅ 已完成的配置
- [x] `vercel.json` 配置文件已創建
- [x] `vite.config.js` 已優化
- [x] 項目構建測試通過
- [x] 路由重寫規則已設置

## 🔧 部署步驟

### 1. 訪問 Vercel
- 前往 [vercel.com](https://vercel.com)
- 使用 GitHub 帳號登入

### 2. 導入項目
- 點擊 "New Project"
- 選擇 "Import Git Repository"
- 找到 `cih-lian-liao/funzy-mart` 倉庫
- 點擊 "Import"

### 3. 配置項目設置
```
Framework Preset: Vite
Root Directory: my-app
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### 4. 環境變量
- 無需設置環境變量（純前端項目）

### 5. 部署
- 點擊 "Deploy"
- 等待構建完成（約 1-2 分鐘）

## 🌐 部署後設置

### 自定義域名（可選）
1. 在 Vercel Dashboard 中選擇項目
2. 進入 "Settings" > "Domains"
3. 添加自定義域名

### 自動部署
- ✅ 每次 push 到 main 分支會自動部署
- ✅ Pull Request 會創建預覽部署
- ✅ 支持分支預覽

## 📊 性能優化

### 已配置的優化
- ✅ 代碼分割（vendor, router chunks）
- ✅ 資源緩存（1年）
- ✅ Gzip 壓縮
- ✅ CDN 分發

### 構建結果
```
dist/index.html                   0.61 kB │ gzip:  0.34 kB
dist/assets/index-BFrQLocb.css   45.71 kB │ gzip:  8.00 kB
dist/assets/vendor-DJG_os-6.js   11.83 kB │ gzip:  4.00 kB
dist/assets/router-BCpTxYu3.js   31.65 kB │ gzip: 11.74 kB
dist/assets/index-CgUijzCj.js   239.00 kB │ gzip: 70.62 kB
```

## 🔍 部署後檢查

### 功能測試
- [ ] 首頁正常加載
- [ ] 產品目錄頁面正常
- [ ] 產品詳情頁面正常
- [ ] 購物車功能正常
- [ ] 結帳流程正常
- [ ] 響應式設計正常
- [ ] 所有路由正常

### 性能測試
- [ ] 頁面加載速度 < 3秒
- [ ] 移動端體驗良好
- [ ] 圖片加載正常
- [ ] CSS 樣式正確

## 🛠️ 故障排除

### 常見問題
1. **路由 404 錯誤**
   - 檢查 `vercel.json` 中的 rewrites 規則
   
2. **資源加載失敗**
   - 檢查 `vite.config.js` 中的 base 路徑
   
3. **構建失敗**
   - 檢查 Node.js 版本（需要 18+）
   - 檢查依賴安裝

### 聯繫支持
- Vercel 文檔：https://vercel.com/docs
- GitHub Issues：https://github.com/cih-lian-liao/funzy-mart/issues

## 📈 監控和分析

### Vercel Analytics
- 自動啟用（免費）
- 頁面訪問統計
- 性能監控
- 錯誤追蹤

### 自定義分析
- Google Analytics（可選）
- 熱圖分析（可選）

---

**部署完成後，您的網站將在 `https://funzy-mart-xxx.vercel.app` 上運行！** 🎉
