import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-rose flex items-center justify-center">
        <Navbar />
        <div className="w-full h-full ">
          <img src="/Eman_Photo.png" alt="Eman" />
        </div>
      </div>

      <section className="py-16 md:py-24 section-cream">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 heading-taupe">
              About My Work
            </h2>
            <p className="text-taupe mb-8">
              Saudi visual artist in the field of visual arts. She began her
              artistic career in 1994. She is one of the pioneers of
              contemporary Saudi art. In her work, she is interested in the
              local environment, cultural heritage, contemporary Arabic
              calligraphy, and decoration, in a journey that contains a
              spiritual and aesthetic dimension within its recesses.
            </p>
            <Link href="/about">
              <button className="btn-outline-taupe px-4 py-2 rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-12 text-center heading-taupe">
            Featured Works
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {featuredAlbums.map((album) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-taupe/90 to-transparent p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-white">
                    {album.title}
                  </h3>
                  <p className="text-sm text-white/90">{album.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/albums">
              <button className="btn-outline-taupe px-4 py-2 rounded">
                View All Works
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const featuredAlbums = [
  {
    id: "tanaqud",
    title: "Iiltiqa",
    description:
      "Calligraphy meets light and dark in a spiritual journey through divine names.",
    coverImage: "/tanaqud/tanaqud_1.jpg?height=600&width=800",
    itemCount: 12,
  },
  {
    id: "labbaik",
    title: "Labbaik",
    description:
      "Preliminary works and explorations, capturing the spiritual journey.",
    coverImage: "/labbaik/labbaik_1.jpg?height=600&width=800",
    itemCount: 14,
  },
  {
    id: "hurufiaat",
    title: "Hurufiaat",
    description: "A vibrant blend of Arabic calligraphy and abstract art, evoking spirituality and cultural depth.",
    coverImage: "/hurufiaat/hurufiaat_1.jpg?height=600&width=800",
    itemCount: 7,
  },
  {
    id: "kufi_murabae",
    title: "Kufi Murabae",
    description: "Acrylic and oil paintings on various subjects",
    coverImage: "/kufi_murabae/kufi_murabae-1.jpg?height=600&width=800",
    itemCount: 10 ,
  },
];
