import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function AlbumsPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24 bg-white">
      <div className="mb-8">
        <Link href="/">
          <button className="btn-outline-taupe px-4 py-2 rounded flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </button>
        </Link>
      </div>
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl heading-taupe">
          Portfolio
        </h1>
        <p className="mx-auto max-w-[700px] text-taupe md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Explore my work organized into thematic collections.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 py-12 max-w-5xl mx-auto">
        {albums.map((album) => (
          <Link
            key={album.id}
            href={`/albums/${album.id}`}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl aspect-[4/3]"
          >
            <Image
              src={album.coverImage || "/placeholder.svg"}
              alt={album.title}
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-taupe/90 via-taupe/40 to-transparent p-6 flex flex-col justify-end">
              <h2 className="text-xl font-bold text-white">{album.title}</h2>
              <p className="text-sm text-white/90">{album.description}</p>
              <p className="mt-2 text-xs text-white/80">
                {album.itemCount} items
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const albums = [
  {
    id: "tanaqud",
    title: "Iiltiqa",
    description: "Acrylic and oil paintings on various subjects",
    coverImage: "/tanaqud/tanaqud_1.jpg?height=600&width=800",
    itemCount: 12,
  },
  {
    id: "labbaik",
    title: "Labbaik",
    description: "Preliminary works and explorations, capturing the spiritual journey.",
    coverImage: "/labbaik/labbaik_1.jpg?height=600&width=800",
    itemCount: 14,
  },
  {
    id: "hurufiaat",
    title: "Hurufiaat",
    description: "Experimental works combining different techniques",
    coverImage: "/hurufiaat/hurufiaat_1.jpg?height=600&width=800",
    itemCount: 7,
  },
  {
    id: "kufi_murabae",
    title: "Kufi Murabae",
    description: "Acrylic and oil paintings on various subjects",
    coverImage: "/kufi_murabae/kufi_murabae_1.jpg?height=600&width=800",
    itemCount: 5,
  },
  {
    id: "al_aquas",
    title: "Al Aquas",
    description: "Short stories and poetry complementing visual art",
    coverImage: "/al_aquas/al_aquas_1.png?height=600&width=800",
    itemCount: 13,
  },
  {
    id: "two_languages",
    title: "Two languages",
    description: "Acrylic and oil paintings on various subjects",
    coverImage: "/two_languages/two_languages_1.jpg?height=600&width=800",
    itemCount: 4,
  },

  {
    id: "noqta",
    title: "Noqta",
    description: "Acrylic and oil paintings on various subjects",
    coverImage: "/noqta/noqta_1.jpg?height=600&width=800",
    itemCount: 13,
  },
];
