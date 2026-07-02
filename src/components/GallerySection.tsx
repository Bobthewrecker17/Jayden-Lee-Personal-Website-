import { useState } from "react";
import { useScrollFade } from "@/hooks/use-scroll-fade";
import { homepageActivities } from "@/data/homepageMedia";
import { X } from "lucide-react";

const distributeColumns = <T,>(items: T[], numCols: number): T[][] => {
  const cols: T[][] = Array.from({ length: numCols }, () => []);
  items.forEach((item, i) => cols[i % numCols].push(item));
  return cols;
};

interface GalleryPhoto {
  src: string;
  caption?: string;
}

const galleryPhotos: GalleryPhoto[] =
  homepageActivities
    .find((activity) => activity.title === "Photo Gallery")
    ?.media.filter((item) => {
      if (item.type !== "image") {
        return false;
      }

      // Skip the empty duplicate; keep the .JPG version with the actual image data.
      if (item.originalName === "IMG_2970.jpeg") {
        return false;
      }

      return true;
    })
    .map((item) => ({
      src: item.src,
      caption: item.alt,
    })) ?? [];

const GallerySection = () => {
  const ref = useScrollFade<HTMLDivElement>();
  const [lightbox, setLightbox] = useState<GalleryPhoto | null>(null);
  const columns = distributeColumns(galleryPhotos, 3);

  return (
    <section className="pt-28 pb-16 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="flex gap-4">
          {columns.map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4 flex-1">
              {col.map((photo) => (
                <div
                  key={photo.src}
                  className="cursor-pointer group relative overflow-hidden"
                  onClick={() => setLightbox(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-auto transition-opacity duration-300 group-hover:opacity-90"
                  />
                  {photo.caption && (
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-all duration-300 flex items-end">
                      <p className="text-white text-xs tracking-wide font-light px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        {photo.caption}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightbox(null)}
            >
              <X className="w-7 h-7" />
            </button>
            <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={lightbox.src}
                alt={lightbox.caption}
                className="w-full max-h-[80vh] object-contain"
              />
              {lightbox.caption && (
                <p className="text-white/60 text-sm font-light tracking-wide text-center mt-4">
                  {lightbox.caption}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
