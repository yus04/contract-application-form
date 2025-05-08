# ────────────────────────────
# 1. build stage
# ────────────────────────────
FROM node:18-alpine AS builder

WORKDIR /app

# 依存関係ファイルだけを先にコピーしてキャッシュを最大化
COPY package.json package-lock.json* pnpm-lock.yaml* yarn.lock* ./

# 必要ライブラリをインストール
RUN npm ci

# 残りのソースをコピーしてビルド
COPY . .
RUN npm run build


# ────────────────────────────
# 2. runtime stage
# ────────────────────────────
FROM nginx:1.25-alpine AS runner

# ビルド成果物を Nginx の公開ディレクトリへコピー
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
