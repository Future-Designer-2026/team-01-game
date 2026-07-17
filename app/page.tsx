export default function Home() {
  return (
    <main className="game-shell">
      <iframe
        className="game-frame"
        src="/game/index.html"
        title="情绪森林儿童情绪管理游戏"
        allow="autoplay"
      />
    </main>
  );
}
