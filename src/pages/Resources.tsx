import { useParams, Link } from "react-router-dom";
import { Code, ExternalLink } from "lucide-react";
import { resourceData } from "../data/resourceData";

interface VideoResource {
  title: string;
  url: string;
  thumbnail: string;
  note: string;
}

interface CodingPlatform {
  name: string;
  url: string;
  logo: string;
  color: string;
}

const Resources = () => {
  const { topic } = useParams();
  console.log(topic)
  const data = topic ? resourceData[topic as keyof typeof resourceData] : null;

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-muted-foreground">
          🚧 Resources not found for <b>{topic}</b>
        </p>
      </div>
    );
  }

  const { videoResources, codingPlatforms } = data;

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Video Resources */}
          <section className="rounded-lg border border-border bg-card/50 p-6 mb-6">
            <h2 className="text-xl font-heading font-bold mb-4 text-neon-cyan tracking-wide border-b border-border pb-2">
              VIDEO RESOURCES
            </h2>
            <div className="space-y-4">
              {videoResources.map((video: VideoResource, idx: number) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-3 rounded border border-border hover:border-neon-cyan transition-colors bg-card/80"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-32 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <a
                      href={video.url}
                      target="_blank"
                      className="font-semibold hover:underline"
                    >
                      {video.title}
                    </a>
                    <div className="mt-2 flex items-center gap-1 text-xs text-neon-cyan font-semibold">
                      <Code className="w-4 h-4" />
                      <span className="italic text-muted-foreground">
                        {video.note}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Coding Platforms */}
          <section className="rounded-lg border border-border bg-card/50 p-6">
            <h2 className="text-xl font-heading font-bold mb-4 text-neon-cyan tracking-wide border-b border-border pb-2">
              CODING PLATFORMS
            </h2>
            <div className="flex flex-wrap items-center justify-around gap-6 py-4">
              {codingPlatforms.map((platform: CodingPlatform, idx: number) => (
                <a
                  key={idx}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-2xl font-bold ${platform.color}`}
                >
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="h-10 w-10 object-contain"
                  />
                  {platform.name}
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Resources;
