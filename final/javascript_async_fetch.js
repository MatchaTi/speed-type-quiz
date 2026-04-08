async function fetchArticles() {
  const response = await fetch("/api/articles");
  if (!response.ok) throw new Error("gagal ambil artikel");

  const articles = await response.json();
  articles.slice(0, 5).forEach((article, idx) => {
    console.log(`[${idx + 1}] ${article.title} oleh ${article.author}`);
  });
}

fetchArticles();