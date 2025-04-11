import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function AlbumPage({ params }: { params: { albumId: string } }) {
  const album = albums.find((album) => album.id === params.albumId);

  if (!album) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-16 lg:py-24 bg-white">
      <div className="mb-8 flex justify-between items-center">
        <Link href="/albums">
          <button className="btn-outline-taupe px-4 py-2 rounded flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Albums
          </button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl heading-taupe">
          {album.title}
        </h1>
      </div>
      <p className="max-w-[700px] text-taupe md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-12">
        {album.description}
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {album.items.map((item) => (
          <Link
            key={item.id}
            href={`/albums/${params.albumId}/${item.id}`}
            className="group flex flex-col overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl bg-white"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col flex-grow p-4 border-t border-cream">
              <h2 className="text-xl font-semibold text-taupe">{item.title}</h2>
              <p className="mt-1 text-sm text-mauve line-clamp-2">
                {item.description}
              </p>
              <div className="flex-grow" />
              <p className="text-xs text-rose">
                {item.medium} • {item.year}
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
    id: "labbaik",
    title: "Labbaik",
    description:
      "A spiritual journey through sacred moments of devotion, capturing the divine essence of faith, light, and grace. An invitation to immerse in the beauty and serenity of the holy sanctuary.",
    items: [
      {
        id: "door-of-the-kaaba",
        title: "Door of the Kaaba",
        description:
          "A series of intimate visual studies capturing the sacred geometry, texture, and spiritual gravity of the Door of the Kaaba.",
        image: "/labbaik/labbaik_1.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, inks, gesso, photo, paper on canvas",
        year: "2020",
      },
      {
        id: "sujud",
        title: "Sujud",
        description:
          "A series of expressive sketches capturing the stillness, humility, and spiritual depth of Sujud.",
        image: "/labbaik/labbaik_2.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, inks, gesso, photo, paper on canvas",
        year: "2020",
      },
      {
        id: "alrawdat-alsharifa",
        title: "Alrawdat Alsharifa",
        description:
          "A series of serene compositions reflecting the tranquility, reverence, and sacred light within Al-Rawda Al-Sharifa.",
        image: "/labbaik/labbaik_3.jpg?height=1200&width=900",
        medium: "Acrylic colors, pastes, inks, gesso, photo, paper on canvas",
        year: "2020",
      },
      {
        id: "husn-alkhatima",
        title: "Husn Alkhatima",
        description:
          "A visual meditation on farewell, hope, and divine mercy — a journey toward Husn Al-Khatima.",
        image: "/labbaik/labbaik_4.jpg?height=1200&width=900",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        year: "2020",
      },
      {
        id: "hamam-alharam",
        title: "Hamam Alharam",
        description:
          "Gentle studies of Hamam Al-Haram in motion — symbols of peace, presence, and timeless belonging within the sacred sanctuary.",
        image: "/labbaik/labbaik_5.jpg?height=600&width=800",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        year: "2020",
      },
      {
        id: "ta'ammul",
        title: "Ta'ammul",
        description:
          "Ta'ammul before the Kaaba — a quiet exploration of presence, surrender, and the stillness between heartbeats.",
        image: "/labbaik/labbaik_6.jpg?height=600&width=800",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        year: "2020",
      },
      {
        id: "almasjid-alnabawiu",
        title: "Almasjid Alnabawiu",
        description:
          "A series of contemplative impressions capturing the light, rhythm, and sacred serenity of Al-Masjid Al-Nabawi.",
        image: "/labbaik/labbaik_7.jpg?height=1200&width=900",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        dimensions: "80 x 80 cm",
        year: "2020",
      },
      {
        id: "tilawa",
        title: "Tilawa",
        description:
          "A series of graceful studies of tilawa — capturing the flow, reverence, and divine connection within the sacred recitation of the Qur’an.",
        image: "/labbaik/labbaik_8.jpg?height=600&width=800",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        year: "2020",
      },
      {
        id: "altawaf",
        title: "Altawaf",
        description:
          "A collection of fluid sketches capturing the unity, devotion, and spiritual rhythm of Al-Tawaf around the Kaaba.",
        image: "/labbaik/labbaik_9.jpg?height=1200&width=900",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        year: "2020",
      },
      {
        id: "mizab-alrahma",
        title: "Mizab Alrahma",
        description:
          "A series of delicate studies focusing on the flow of blessings, captured in the divine grace of Mizab Al-Rahma.",
        image: "/labbaik/labbaik_10.jpg?height=600&width=800",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        year: "2020",
      },
      {
        id: "sumuu",
        title: "Sumuu",
        description:
          "A collection of sketches reflecting the grandeur and elevation of spirit, captured in the essence of Sumuu.",
        image: "/labbaik/labbaik_11.jpg?height=600&width=800",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        year: "2020",
      },
      {
        id: "alqubat-alkhadra'",
        title: "Alqubat Alkhadra'",
        description:
          "A series of serene studies capturing the elegance and spiritual significance of Al-Qubba Al-Khadra, a beacon of tranquility within Al-Masjid Al-Nabawi.",
        image: "/labbaik/labbaik_12.jpg?height=600&width=800",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        year: "2020",
      },
      {
        id: "nawafidh_1",
        title: "Nawafidh 1",
        description:
          "A collection of light-filled studies exploring the intricate beauty and divine illumination through Nawafidh 1 of Al-Masjid Al-Nabawi.",
        image: "/labbaik/labbaik_13.jpg?height=600&width=800",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        year: "2021",
      },
      {
        id: "nawafidh_2",
        title: "Nawafidh 2",
        description:
          "A collection of light-filled studies exploring the intricate beauty and divine illumination through Nawafidh 2 of Al-Masjid Al-Nabawi.",
        image: "/labbaik/labbaik_14.jpg?height=600&width=800",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        year: "2021",
      },
    ],
  },
  {
    id: "al_aquas",
    title: "Al Aquas",
    description:
      "Short stories, poems, and narrative pieces that complement my visual art or stand as independent creative expressions.",
    items: [
      {
        id: "al_aquas_1",
        title: "Whispers of the Forest",
        description:
          "A short story about a child who discovers they can hear the voices of trees and plants.",
        image: "/al_aquas/al_aquas_1.png?height=600&width=800",
        medium: "Short Story with Illustrations",
        year: "2023",
      },
      {
        id: "al_aquas_2",
        title: "City Poems",
        description:
          "A collection of poetry exploring urban life, technology, and human connection.",
        image: "/al_aquas/al_aquas_2.png?height=600&width=800",
        medium: "Poetry with Visual Elements",
        year: "2022",
      },
      {
        id: "al_aquas_3",
        title: "The Clockmaker's Daughter",
        description:
          "A fantasy novella about a mechanical girl searching for her creator.",
        image: "/al_aquas/al_aquas_3.png?height=600&width=800",
        medium: "Illustrated Novella",
        year: "2021",
      },
      {
        id: "al_aquas_4",
        title: "Dreams Journal",
        description:
          "A visual journal combining dream recordings with interpretive illustrations.",
        image: "/al_aquas/al_aquas_4.png?height=600&width=800",
        medium: "Mixed Media Journal",
        year: "2023",
      },
      {
        id: "al_aquas_5",
        title: "Whispers of the Forest",
        description:
          "A short story about a child who discovers they can hear the voices of trees and plants.",
        image: "/al_aquas/al_aquas_5.png?height=600&width=800",
        medium: "Short Story with Illustrations",
        year: "2023",
      },
      {
        id: "al_aquas_6",
        title: "City Poems",
        description:
          "A collection of poetry exploring urban life, technology, and human connection.",
        image: "/al_aquas/al_aquas_6.png?height=600&width=800",
        medium: "Poetry with Visual Elements",
        year: "2022",
      },
      {
        id: "al_aquas_7",
        title: "The Clockmaker's Daughter",
        description:
          "A fantasy novella about a mechanical girl searching for her creator.",
        image: "/al_aquas/al_aquas_7.png?height=600&width=800",
        medium: "Illustrated Novella",
        year: "2021",
      },
      {
        id: "al_aquas_8",
        title: "Dreams Journal",
        description:
          "A visual journal combining dream recordings with interpretive illustrations.",
        image: "/al_aquas/al_aquas_8.png?height=600&width=800",
        medium: "Mixed Media Journal",
        year: "2023",
      },
      {
        id: "al_aquas_9",
        title: "Whispers of the Forest",
        description:
          "A short story about a child who discovers they can hear the voices of trees and plants.",
        image: "/al_aquas/al_aquas_9.png?height=600&width=800",
        medium: "Short Story with Illustrations",
        year: "2023",
      },
      {
        id: "al_aquas_10",
        title: "City Poems",
        description:
          "A collection of poetry exploring urban life, technology, and human connection.",
        image: "/al_aquas/al_aquas_10.png?height=600&width=800",
        medium: "Poetry with Visual Elements",
        year: "2022",
      },
      {
        id: "al_aquas_11",
        title: "The Clockmaker's Daughter",
        description:
          "A fantasy novella about a mechanical girl searching for her creator.",
        image: "/al_aquas/al_aquas_11.png?height=600&width=800",
        medium: "Illustrated Novella",
        year: "2021",
      },
      {
        id: "al_aquas_12",
        title: "The Clockmaker's Daughter",
        description:
          "A fantasy novella about a mechanical girl searching for her creator.",
        image: "/al_aquas/al_aquas_12.png?height=600&width=800",
        medium: "Illustrated Novella",
        year: "2021",
      },
      {
        id: "al_aquas_13",
        title: "The Clockmaker's Daughter",
        description:
          "A fantasy novella about a mechanical girl searching for her creator.",
        image: "/al_aquas/al_aquas_13.png?height=600&width=800",
        medium: "Illustrated Novella",
        year: "2021",
      },
    ],
  },
  {
    id: "two_languages",
    title: "Two languages",
    description:
      "A collection of digital and traditional illustrations exploring fantasy themes, character designs, and narrative scenes. Each piece tells a story and invites viewers into imaginative worlds.",
    items: [
      {
        id: "two_languages_1",
        title: "Forest Guardian",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/two_languages/two_languages_1.jpg?height=600&width=800",
        medium: "Digital Painting",
        year: "2023",
      },
      {
        id: "two_languages_2",
        title: "City of Dreams",
        description:
          "An imaginary cityscape floating among clouds, representing aspirations and the collective unconscious.",
        image: "/two_languages/two_languages_2.jpg?height=600&width=800",
        medium: "Watercolor and Ink",
        year: "2022",
      },
      {
        id: "two_languages_3",
        title: "The Traveler",
        description:
          "A wandering character journeying through strange lands, inspired by classic hero's journey narratives.",
        image: "/two_languages/two_languages_3.jpg?height=600&width=800",
        medium: "Digital Illustration",
        year: "2023",
      },
      {
        id: "two_languages_4",
        title: "The Ancient Library",
        description:
          "Interior scene of a vast magical library with impossible architecture and floating books.",
        image: "/two_languages/two_languages_4.jpg?height=600&width=800",
        medium: "Digital Painting",
        year: "2022",
      },
    ],
  },
  {
    id: "hurufiaat",
    title: "Hurufiaat",
    description:
      "Preliminary works, quick studies, and artistic explorations that capture moments of inspiration and technical practice.",
    items: [
      {
        id: "hurufiaat_1",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/hurufiaat/hurufiaat_1.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "hurufiaat_2",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/hurufiaat/hurufiaat_2.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "hurufiaat_3",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/hurufiaat/hurufiaat_3.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "hurufiaat_4",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/hurufiaat/hurufiaat_4.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "hurufiaat_5",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/hurufiaat/hurufiaat_5.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "hurufiaat_6",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/hurufiaat/hurufiaat_6.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "hurufiaat_7",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/hurufiaat/hurufiaat_7.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
    ],
  },
  {
    id: "noqta",
    title: "Noqta",
    description:
      "Preliminary works, quick studies, and artistic explorations that capture moments of inspiration and technical practice.",
    items: [
      {
        id: "noqta_1",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_1.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_3",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_3.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_4",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_4.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_5",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_5.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_6",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_6.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_7",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_7.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_8",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_8.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_9",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_9.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_10",
        title: "Figure Studies",
        description:
          "A series ofquick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_10.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_11",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_11.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_12",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_12.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_13",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/noqta/noqta_13.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
    ],
  },
  {
    id: "tanaqud",
    title: "Iiltiqa",

    items: [
      {
        id: "tanaqud_1",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_1.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_2",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_2.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_3",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_3.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_4",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_4.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_5",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_5.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_6",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_6.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_7",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_7.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_8",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_8.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_9",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_9.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_10",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_10.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_11",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_11.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_12",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_12.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_13",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_13.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_14",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_14.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_15",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_15.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_16",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_16.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_17",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_17.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_18",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_18.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_19",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_19.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_20",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_20.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "tanaqud_21",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/tanaqud/tanaqud_21.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
    ],
  },
  {
    id: "kufi_murabae",
    title: "Kufi Murabae",
    description:
      "A collection of digital and traditional illustrations exploring fantasy themes, character designs, and narrative scenes. Each piece tells a story and invites viewers into imaginative worlds.",
    items: [
      {
        id: "kufi_murabae_1",
        title: "Forest Guardian",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/kufi_murabae/kufi_murabae_1.jpg?height=600&width=800",
        medium: "Digital Painting",
        year: "2023",
      },
      {
        id: "kufi_murabae_2",
        title: "City of Dreams",
        description:
          "An imaginary cityscape floating among clouds, representing aspirations and the collective unconscious.",
        image: "/kufi_murabae/kufi_murabae_2.jpg?height=600&width=800",
        medium: "Watercolor and Ink",
        year: "2022",
      },
      {
        id: "kufi_murabae_3",
        title: "The Traveler",
        description:
          "A wandering character journeying through strange lands, inspired by classic hero's journey narratives.",
        image: "/kufi_murabae/kufi_murabae_3.jpg?height=600&width=800",
        medium: "Digital Illustration",
        year: "2023",
      },
      {
        id: "kufi_murabae_4",
        title: "The Ancient Library",
        description:
          "Interior scene of a vast magical library with impossible architecture and floating books.",
        image: "/kufi_murabae/kufi_murabae_4.jpg?height=600&width=800",
        medium: "Digital Painting",
        year: "2022",
      },
      {
        id: "kufi_murabae_5",
        title: "Seasons Change",
        description:
          "A character depicted through four seasonal transformations, representing personal growth and change.",
        image: "/kufi_murabae/kufi_murabae_5.jpg?height=600&width=800",
        medium: "Mixed Media",
        year: "2021",
      },
    ],
  },
  {
    id: "watercolor",
    title: "Watercolor",
    description:
      "A collection of digital and traditional illustrations exploring fantasy themes, character designs, and narrative scenes. Each piece tells a story and invites viewers into imaginative worlds.",
    items: [
      {
        id: "watercolor-1",
        title: "Watercolor-1",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-1.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-10",
        title: "Watercolor-10",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-10.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-11",
        title: "Watercolor-11",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-11.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-12",
        title: "Watercolor-12",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-12.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-13",
        title: "Watercolor-13",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-13.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-14",
        title: "Watercolor-14",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-14.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-15",
        title: "Watercolor-15",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-15.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-16",
        title: "Watercolor-16",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-16.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-17",
        title: "Watercolor-17",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-17.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-18",
        title: "Watercolor-18",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-18.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-19",
        title: "Watercolor-19",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-19.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-2",
        title: "Watercolor-2",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-2.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-20",
        title: "Watercolor-20",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-20.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-21",
        title: "Watercolor-21",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-21.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-22",
        title: "Watercolor-22",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-22.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-23",
        title: "Watercolor-23",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-23.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-24",
        title: "Watercolor-24",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-24.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-25",
        title: "Watercolor-25",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-25.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-26",
        title: "Watercolor-26",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-26.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-27",
        title: "Watercolor-27",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-27.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-28",
        title: "Watercolor-28",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-28.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-29",
        title: "Watercolor-29",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-29.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-3",
        title: "Watercolor-3",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-3.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-4",
        title: "Watercolor-4",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-4.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-5",
        title: "Watercolor-5",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-5.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-6",
        title: "Watercolor-6",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-6.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-7",
        title: "Watercolor-7",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-7.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-8",
        title: "Watercolor-8",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-8.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },

      {
        id: "watercolor-9",
        title: "Watercolor-9",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/watercolor/watercolor-9.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2020",
      },
    ],
  },
  {
    id: "tafasil",
    title: "Tafasil",
    description:
      "A collection of digital and traditional illustrations exploring fantasy themes, character designs, and narrative scenes. Each piece tells a story and invites viewers into imaginative worlds.",
    items: [
      {
        id: "tafasil-1",
        title: "Tafasil-1",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-1.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-10",
        title: "Tafasil-10",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-10.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-11",
        title: "Tafasil-11",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-11.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-12",
        title: "Tafasil-12",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-12.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-13",
        title: "Tafasil-13",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-13.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-14",
        title: "Tafasil-14",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-14.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-2",
        title: "Tafasil-2",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-2.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-3",
        title: "Tafasil-3",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-3.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-4",
        title: "Tafasil-4",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-4.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-5",
        title: "Tafasil-5",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-5.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-6",
        title: "Tafasil-6",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-6.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-7",
        title: "Tafasil-7",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-7.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-8",
        title: "Tafasil-8",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-8.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "tafasil-9",
        title: "Tafasil-9",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tafasil/tafasil-9.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },
    ],
  },
  {
    id: "rua",
    title: "Rua",
    description:
      "A collection of digital and traditional illustrations exploring fantasy themes, character designs, and narrative scenes. Each piece tells a story and invites viewers into imaginative worlds.",
    items: [
      {
        id: "rua-1",
        title: "Rua-1",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-1.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-10",
        title: "Rua-10",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-10.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-11",
        title: "Rua-11",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-11.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-12",
        title: "Rua-12",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-12.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-13",
        title: "Rua-13",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-13.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-14",
        title: "Rua-14",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-14.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-15",
        title: "Rua-15",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-15.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-16",
        title: "Rua-16",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-16.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-17",
        title: "Rua-17",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-17.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-18",
        title: "Rua-18",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-18.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-19",
        title: "Rua-19",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-19.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-2",
        title: "Rua-2",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-2.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-20",
        title: "Rua-20",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-20.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-21",
        title: "Rua-21",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-21.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-22",
        title: "Rua-22",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-22.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-23",
        title: "Rua-23",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-23.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-24",
        title: "Rua-24",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-24.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-25",
        title: "Rua-25",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-25.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-26",
        title: "Rua-26",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-26.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-27",
        title: "Rua-27",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-27.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-28",
        title: "Rua-28",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-28.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-29",
        title: "Rua-29",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-29.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-3",
        title: "Rua-3",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-3.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-30",
        title: "Rua-30",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-30.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-4",
        title: "Rua-4",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-4.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-5",
        title: "Rua-5",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-5.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-6",
        title: "Rua-6",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-6.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-7",
        title: "Rua-7",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-7.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-8",
        title: "Rua-8",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-8.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },

      {
        id: "rua-9",
        title: "Rua-9",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/rua/rua-9.jpg?height=600&width=800",
        medium: "Digital Painting",
        dimensions: "60 x 80 cm",
        year: "2018",
      },
    ],
  },
];
