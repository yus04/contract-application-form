# contract-application-form
契約申込書を提出用フォームのサンプルです。
React で実装された SPA になります。

## セットアップ手順
Docker イメージの作成
```
docker build . -t app
```

Docker コンテナの起動
```
docker run -p 3000:80 app
```

`http://localhost:3000` にアクセスする
