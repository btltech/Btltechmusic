export async function onRequestGet() {
  const channelLiveUrl = "https://www.youtube.com/@btltechmusic/live";
  const fallbackVideoId = "9ycXtdvhGio";

  try {
    const response = await fetch(channelLiveUrl, {
      headers: {
        "User-Agent": "facebookexternalhit/1.1",
        "Accept-Language": "en-GB,en;q=0.9"
      },
      cf: {
        cacheTtl: 180,
        cacheEverything: true
      }
    });

    const html = await response.text();
    const ogUrlMatch = html.match(/<meta\s+property="og:url"\s+content="https:\/\/www\.youtube\.com\/watch\?v=([A-Za-z0-9_-]{11})"/i);
    const isLiveNowMatch = html.match(/"isLiveNow":(true|false)/);
    const videoId = ogUrlMatch ? ogUrlMatch[1] : fallbackVideoId;
    const isLiveNow = isLiveNowMatch ? isLiveNowMatch[1] === "true" : Boolean(ogUrlMatch);

    return new Response(
      JSON.stringify({
        videoId,
        isLiveNow,
        channelLiveUrl,
        watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
        embedUrl: `https://www.youtube.com/embed/${videoId}`
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "public, max-age=180"
        }
      }
    );
  } catch {
    return new Response(
      JSON.stringify({
        videoId: fallbackVideoId,
        isLiveNow: true,
        channelLiveUrl,
        watchUrl: channelLiveUrl,
        embedUrl: `https://www.youtube.com/embed/${fallbackVideoId}`
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Cache-Control": "public, max-age=60"
        }
      }
    );
  }
}
