'use client';


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
            <div
              className="aspect-[4/3] w-full overflow-hidden relative group"
              onContextMenu={(e) => e.preventDefault()}
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 pointer-events-none select-none"
                draggable={false}
              />
              <div
                className="absolute inset-0 z-10"
                onContextMenu={(e) => e.preventDefault()}
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
      "From this blessed land of peace and mercy, inspired by the spiritual depth of Hajj and the divine call, I created a visual language that reflects the soul’s connection with God. Through the beauty of calligraphy and modern art.",
    items: [
      {
        id: "door-of-the-kaaba",
        title: "Door of the Kaaba",
        description:
          "A series of intimate visual studies capturing the sacred geometry, texture, and spiritual gravity of the Door of the Kaaba.",
        image: "/labbaik/labbaik_1.jpg?height=1200&width=900",
        medium: "Acrylic colors, pastes, inks, gesso, photo, paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2020",
      },
      {
        id: "sujud",
        title: "Sujud",
        description:
          "A series of expressive sketches capturing the stillness, humility, and spiritual depth of Sujud.",
        image: "/labbaik/labbaik_2.jpg?height=1200&width=900",
        medium: "Acrylic colors, pastes, inks, gesso, photo, paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2020",
      },
      {
        id: "alrawda-alsharifa",
        title: "Alrawda Alsharifa",
        description:
          "A series of serene compositions reflecting the tranquility, reverence, and sacred light within Al-Rawda Al-Sharifa.",
        image: "/labbaik/labbaik_3.jpg?height=1200&width=900",
        medium: "Acrylic colors, pastes, inks, gesso, photo, paper on canvas",
        dimensions: "80 x 80 cm",
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
        dimensions: "40 x 80 cm",
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
        dimensions: "40 x 80 cm",
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
        dimensions: "40 x 80 cm",
        year: "2020",
      },
      {
        id: "almasjid-alnabawi",
        title: "Almasjid Alnabawi",
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
        dimensions: "70 x 50 cm",
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
        dimensions: "70 x 50 cm",
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
        dimensions: "50 x 70 cm",
        year: "2020",
      },
      {
        id: "somow",
        title: "Somow",
        description:
          "A collection of sketches reflecting the grandeur and elevation of spirit, captured in the essence of Somow.",
        image: "/labbaik/labbaik_11.jpg?height=600&width=800",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        dimensions: "50 x 70 cm",
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
        dimensions: "100 x 100 cm",
        year: "2022",
      },
      {
        id: "nawafidh_1",
        title: "Nawafidh 1",
        description:
          "A collection of light-filled studies exploring the intricate beauty and divine illumination through Nawafidh 1 of Al-Masjid Al-Nabawi.",
        image: "/labbaik/labbaik_13.jpg?height=600&width=800",
        medium:
          "Acrylic colors, pastes, inks, gesso, photo, colag, paper on canvas",
        dimensions: "100 x 70 cm",
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
        dimensions: "100 x 70 cm",
        year: "2021",
      },
    ],
  },
  {
    id: "al_aquas",
    title: "Al Aquas",
    description:
      "A collection of sacred art capturing the beauty and spirituality of Al-Masjid an-Nabawi and Masjid al-Haram.",
    items: [
      {
        id: "al_aquas_1",
        title: "Al Aquas 1",
        description: "",
        image: "/al_aquas/al_aquas_1.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "70 x 42 cm",
        year: "2023",
      },

      {
        id: "al_aquas_2",
        title: "Al Aquas 2",
        description: "",
        image: "/al_aquas/al_aquas_2.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "70 x 42 cm",
        year: "2023",
      },

      {
        id: "al_aquas_3",
        title: "Al Aquas 3",
        description: "",
        image: "/al_aquas/al_aquas_3.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "70 x 42 cm",
        year: "2023",
      },

      {
        id: "al_aquas_4",
        title: "Al Aquas 4",
        description: "",
        image: "/al_aquas/al_aquas_4.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "70 x 42 cm",
        year: "2023",
      },

      {
        id: "al_aquas_5",
        title: "Al Aquas 5",
        description: "",
        image: "/al_aquas/al_aquas_5.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "70 x 42 cm",
        year: "2023",
      },

      {
        id: "al_aquas_6",
        title: "Al Aquas 6",
        description: "",
        image: "/al_aquas/al_aquas_6.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "70 x 42 cm",
        year: "2023",
      },

      {
        id: "al_aquas_7",
        title: "Al Aquas 7",
        description: "",
        image: "/al_aquas/al_aquas_7.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "70 x 42 cm",
        year: "2023",
      },

      {
        id: "al_aquas_8",
        title: "Al Aquas 8",
        description: "",
        image: "/al_aquas/al_aquas_8.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "70 x 42 cm",
        year: "2023",
      },

      {
        id: "al_aquas_9",
        title: "Al Aquas 9",
        description: "",
        image: "/al_aquas/al_aquas_9.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "90 x 40 cm",
        year: "2023",
      },
      {
        id: "al_aquas_10",
        title: "Al Aquas 10",
        description: "",
        image: "/al_aquas/al_aquas_10.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "90 x 40 cm",
        year: "2023",
      },

      {
        id: "al_aquas_11",
        title: "Al Aquas 11",
        description: "",
        image: "/al_aquas/al_aquas_11.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "90 x 40 cm",
        year: "2023",
      },

      {
        id: "al_aquas_12",
        title: "Al Aquas 12",
        description: "",
        image: "/al_aquas/al_aquas_12.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "70 x 42 cm",
        year: "2023",
      },

      {
        id: "al_aquas_13",
        title: "Al Aquas 13",
        description: "",
        image: "/al_aquas/al_aquas_13.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "70 x 42 cm",
        year: "2023",
      },
      {
        id: "al_aquas_14",
        title: "Al Aquas 14",
        description: "",
        image: "/al_aquas/al_aquas_14.png?height=600&width=800",
        medium: "Acrylic colors, inks, photograph, collage on wood.",
        dimensions: "70 x 42 cm",
        year: "2023",
      },
    ],
  },
  {
    id: "two_languages",
    title: "Two languages",
    description: "",
    items: [
      {
        id: "two_languages_1",
        title: "Forest Guardian",
        description: "",
        image: "/two_languages/two_languages_1.jpg?height=600&width=800",
        medium: "Digital Painting",
        year: "2023",
      },
      {
        id: "two_languages_2",
        title: "City of Dreams",
        description: "",
        image: "/two_languages/two_languages_2.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, inks, wood, paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2018",
      },
      {
        id: "two_languages_3",
        title: "Harf Alsiyn",
        description: "",
        image: "/two_languages/two_languages_3.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, inks, wood, paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2018",
      },
      {
        id: "two_languages_4",
        title: "Harf Alsiyn",
        description: "",
        image: "/two_languages/two_languages_4.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, inks, wood, paper on canvas",
        dimensions: "90 x 90 cm",
        year: "2018",
      },
      {
        id: "two_languages_5",
        title: "The Ancient Library",
        description: "",
        image: "/two_languages/two_languages_5.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, inks, wood, paper on canvas",
        dimensions: "90 x 90 cm",
        year: "2018",
      },
    ],
  },
  {
    id: "hurufiat",
    title: "Hurufiat",
    description:
      "A vibrant blend of Arabic calligraphy and abstract art, evoking spirituality and cultural depth.",
    items: [
      {
        id: "hurufiaat_1",
        title: "Mooj",
        description: "",
        image: "/hurufiaat/hurufiaat_1.jpg?height=600&width=800",
        medium: "Acrylic colors , pastes , fabrics , inks , paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2023",
      },
      {
        id: "hurufiaat_2",
        title: "Washraqt Alard",
        description: "",
        image: "/hurufiaat/hurufiaat_2.jpg?height=600&width=800",
        medium: "Acrylic colors , pastes , fabrics , inks , paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2024",
      },

      {
        id: "hurufiaat_3",
        title: "Azharat",
        description: "",
        medium: "Acrylic colors , pastes , fabrics , inks , paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2023",
      },
      {
        id: "hurufiaat_4",
        title: "Asala",
        description: "",
        image: "/hurufiaat/hurufiaat_4.jpg?height=600&width=800",
        medium: "Acrylic colors , inks , fabrics , collage , paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2023",
      },
      {
        id: "hurufiaat_5",
        title: "Tanagom",
        description: "",
        image: "/hurufiaat/hurufiaat_5.jpg?height=600&width=800",
        medium: "Acrylic colors , pastes , fabrics , inks , paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2023",
      },
      {
        id: "hurufiaat_6",
        title: "Shorooq",
        description: "",
        image: "/hurufiaat/hurufiaat_6.jpg?height=600&width=800",
        medium: "Acrylic colors , pastes , fabrics , inks , paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2023",
      },
      {
        id: "hurufiaat_7",
        title: "Huruf Min Nur",
        description: "",
        image: "/hurufiaat/hurufiaat_7.jpg?height=600&width=800",
        medium: "Acrylic colors , inks , fabrics , collage , paper on canvas",
        dimensions: "100 x 100 cm",
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
        description: "",
        image: "/noqta/noqta_1.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_3",
        title: "Figure Studies",
        description: "",
        image: "/noqta/noqta_3.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_4",
        title: "Figure Studies",
        description: "",
        image: "/noqta/noqta_4.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_5",
        title: "Figure Studies",
        description: "",
        image: "/noqta/noqta_5.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_6",
        title: "Figure Studies",
        description: "",
        image: "/noqta/noqta_6.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_7",
        title: "Figure Studies",
        description: "",
        image: "/noqta/noqta_7.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_8",
        title: "Figure Studies",
        description: "",
        image: "/noqta/noqta_8.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_9",
        title: "Figure Studies",
        description: "",
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
        description: "",
        image: "/noqta/noqta_11.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_12",
        title: "Figure Studies",
        description: "",
        image: "/noqta/noqta_12.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "noqta_13",
        title: "Figure Studies",
        description: "",
        image: "/noqta/noqta_13.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
    ],
  },
  {
    id: "tanaqud",
    title: "Iltiqa",
    description:
      "A fusion of Arabic calligraphy and contrast, this collection explores divine names and spiritual themes through light, darkness, and gold.",
    items: [
      {
        id: "tanaqud_1",
        title: "Ya Rab",
        description:
          "The letters in Thuluth script are interwoven with the phrase Enter it in peace & safe in addition to the word Ya Rab written in square Kufic script, all set in a black-and-white space. Light and darkness intertwine, with the addition of gold leaf. ",
        image: "/tanaqud/tanaqud_1.jpg?height=600&width=800",
        medium: "Acrylic , gold paper , pastes on canvas ",
        dimensions: "150 x 150 cm",
        year: "2023",
      },
      {
        id: "tanaqud_2",
        title: "Al-Rahman",
        description:
          "Letters in Thuluth script interwined with word Al-Rahman in square Kufic script in black and white space.",
        image: "/tanaqud/tanaqud_2.jpg?height=600&width=800",
        medium: "Acrylic , gold paper , pastes on canvas",
        dimensions: "150 x 150 cm",
        year: "2023",
      },
      {
        id: "tanaqud_3",
        title: "Al-Salam",
        description:
          "Intertwined letters with the word Peace in a black-and-white space, intertwined with light and darkness, and the words are adorned with gold leaf. There is no importance to peace in life.",
        image: "/tanaqud/tanaqud_3.jpg?height=600&width=800",
        medium: "Acrylic , gold paper , pastes on canvas",
        dimensions: "150 x 150 cm",
        year: "2023",
      },
      {
        id: "tanaqud_4",
        title: "Al-Rahman Al-Raheem",
        description:
          "The word Al-Rahman Al-Raheem interwoven with Thuluth script letters set against a black and white space.",
        image: "/tanaqud/tanaqud_4.jpg?height=600&width=800",
        medium: "Acrylic colors , gold paper , pastes on canvas",
        dimensions: "120 x 100 cm",
        year: "2023",
      },
      {
        id: "tanaqud_5",
        title: "Enshitar",
        description:
          "Thuluth script letters square Kufic script, set in a black-and-white space. Light and darkness flow through the composition, with the words adorned in gold leaf.",
        image: "/tanaqud/tanaqud_5.jpg?height=600&width=800",
        medium: "Acrylic colors , gold paper , pastes on canvas",
        dimensions: "120 x 100 cm",
        year: "2023",
      },
      {
        id: "tanaqud_6",
        title: "Al-Kareem",
        description:
          "Arabic letters in Thuluth script interwoven with the word Al-Kareem in square Kufic script, set in a black-and-white space. It is permeated by light and darkness, with the words adorned with gold leaf. ",
        image: "/tanaqud/tanaqud_6.jpg?height=600&width=800",
        medium: "Acrylic , gold paper , pastes on canvas",
        dimensions: "150 x 100 cm",
        year: "2023",
      },
      {
        id: "tanaqud_7",
        title: "Howa",
        description:
          "Arabic letters in Diwani script intertwined with the word Peace in Kufic square script, set against a black-and-white backdrop. Light and darkness intertwine, with areas pulsating with color, texture, and interwoven lines.",
        image: "/tanaqud/tanaqud_7.jpg?height=600&width=800",
        medium: "Acrylic , gold paper , pastes on canvas",
        dimensions: "150 x 100 cm",
        year: "2023",
      },
      {
        id: "tanaqud_8",
        title: "Madinah",
        description:
          "Interwoven Diwani script letters and words with the word Al-Salam in square kufic script, set against a black and white space, where light and darkness interwine.",
        image: "/tanaqud/tanaqud_8.jpg?height=600&width=800",
        medium: "Acrylic colors , pastes on canvas",
        dimensions: "50 x 50 cm",
        year: "2023",
      },
      {
        id: "tanaqud_9",
        title: "Jedar",
        description:
          "Arabic letters in Diwani script intertwined with the word Peace in Kufic square script, set against a black-and-white backdrop. Light and darkness intertwine, with areas pulsating with color, texture, and interwoven lines.",
        image: "/tanaqud/tanaqud_9.jpg?height=600&width=800",
        medium: "Acrylic colors , pastes on canvas",
        dimensions: "50 x 50 cm",
        year: "2023",
      },
      {
        id: "tanaqud_10",
        title: "Warqyat",
        description:
          "Scattered paper scraps with Diwani script, square Kufic script and freehand calligraphy and Arabic words.",
        image: "/tanaqud/tanaqud_10.jpg?height=600&width=800",
        medium: "Acrylic colors , pastes on canvas",
        dimensions: "70 x 40 cm",
        year: "2023",
      },
      {
        id: "tanaqud_11",
        title: "Tshabok",
        description:
          "Thuluth script letters with the word Al-Salam in Square Kufic script, set in a black-and-white space. Light and darkness flow through the composition, with the words adorned in gold leaf.",
        image: "/tanaqud/tanaqud_11.jpg?height=600&width=800",
        medium: "Acrylic colors , pastes on canvas",
        dimensions: "70 x 40 cm",
        year: "2023",
      },
      {
        id: "tanaqud_12",
        title: "Khotot & Kalimat",
        description:
          "interwoven Arabic Thuluth script letters with Al-Basmala in square Kufic script, set against a black and white space, where light and darkness interwine.",
        image: "/tanaqud/tanaqud_12.jpg?height=600&width=800",
        medium: "Acrylic colors , pastes on canvas",
        dimensions: "70 x 40 cm",
        year: "2023",
      },
    ],
  },
  {
    id: "kufi_muraba",
    title: "Kufi Muraba",
    description:
      "A collection of digital and traditional illustrations exploring fantasy themes, character designs, and narrative scenes. Each piece tells a story and invites viewers into imaginative worlds.",
    items: [
      {
        id: "kufi_murabae-1",
        title: "Basmalah 1-1",
        description: "",
        image: "/kufi_murabae/kufi_murabae-1.jpg?height=600&width=800",
        medium: "Acrylic colors on canvas",
        dimensions: "40 x 40 cm",
        year: "2025",
      },

      {
        id: "kufi_murabae-2",
        title: "Basmalah 1-2",
        description: "",
        image: "/kufi_murabae/kufi_murabae-2.jpg?height=600&width=800",
        medium: "Acrylic colors on canvas",
        dimensions: "40 x 40 cm",
        year: "2025",
      },

      {
        id: "kufi_murabae-3",
        title: "Basmalah 1-3",
        description: "",
        image: "/kufi_murabae/kufi_murabae-3.jpg?height=600&width=800",
        medium: "Acrylic colors on canvas",
        dimensions: "40 x 40 cm",
        year: "2025",
      },

      {
        id: "kufi_murabae-4",
        title: "Basmalah 1-4",
        description: "",
        image: "/kufi_murabae/kufi_murabae-4.jpg?height=600&width=800",
        medium: "Acrylic colors on canvas",
        dimensions: "40 x 40 cm",
        year: "2025",
      },

      {
        id: "kufi_murabae-5",
        title: "Basmalah 2-1",
        description: "",
        image: "/kufi_murabae/kufi_murabae-5.jpg?height=600&width=800",
        medium: "Acrylic colors on canvas",
        dimensions: "90 x 90 cm",
        year: "2025",
      },

      {
        id: "kufi_murabae-6",
        title: "Basmalah 2-2",
        description: "",
        image: "/kufi_murabae/kufi_murabae-6.jpg?height=600&width=800",
        medium: "Acrylic colors on canvas",
        dimensions: "40 x 40 cm",
        year: "2020",
      },

      {
        id: "kufi_murabae-7",
        title: "Basmalah 2-3",
        description: "",
        image: "/kufi_murabae/kufi_murabae-7.jpg?height=600&width=800",
        medium: "Acrylic colors on canvas",
        dimensions: "40 x 40 cm",
        year: "2020",
      },

      {
        id: "kufi_murabae-8",
        title: "Basmalah 2-4",
        description: "",
        image: "/kufi_murabae/kufi_murabae-8.jpg?height=600&width=800",
        medium: "Acrylic colors on canvas",
        dimensions: "40 x 40 cm",
        year: "2020",
      },

      {
        id: "kufi_murabae-9",
        title: "Basmalah 2-5",
        description: "",
        image: "/kufi_murabae/kufi_murabae-9.jpg?height=600&width=800",
        medium: "Acrylic colors on canvas",
        dimensions: "40 x 40 cm",
        year: "2020",
      },
      {
        id: "kufi_murabae-10",
        title: "Basmalah 2-6",
        description: "",
        image: "/kufi_murabae/kufi_murabae-10.jpg?height=600&width=800",
        medium: "Acrylic colors on canvas",
        dimensions: "40 x 40 cm",
        year: "2020",
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
        description: "",
        image: "/watercolor/watercolor-1.jpg?height=600&width=800",
        medium: "water color in paper",
        dimensions: "30 x 25 cm",
        year: "2020",
      },

      {
        id: "watercolor-2",
        title: "Watercolor-2",
        description: "",
        image: "/watercolor/watercolor-2.jpg?height=600&width=800",
        medium: "water color in paper",
        dimensions: "30 x 25 cm",
        year: "2020",
      },

      {
        id: "watercolor-3",
        title: "Watercolor-3",
        description: "",
        image: "/watercolor/watercolor-3.jpg?height=600&width=800",
        medium: "water color in paper",
        dimensions: "30 x 25 cm",
        year: "2020",
      },

      {
        id: "watercolor-4",
        title: "Watercolor-4",
        description: "",
        image: "/watercolor/watercolor-4.jpg?height=600&width=800",
        medium: "water color in paper",
        dimensions: "30 x 25 cm",
        year: "2020",
      },

      {
        id: "watercolor-5",
        title: "Watercolor-5",
        description: "",
        image: "/watercolor/watercolor-5.jpg?height=600&width=800",
        medium: "water color in paper",
        dimensions: "30 x 25 cm",
        year: "2018",
      },

      {
        id: "watercolor-6",
        title: "Watercolor-6",
        description: "",
        image: "/watercolor/watercolor-6.jpg?height=600&width=800",
        medium: "water color in paper",
        dimensions: "30 x 25 cm",
        year: "2018",
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
        description: "",
        image: "/tafasil/tafasil-1.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood, inks, collage, paper on canvas",
        dimensions: "150 x 100 cm",
        year: "2018",
      },

      {
        id: "tafasil-2",
        title: "Tafasil-2",
        description: "",
        image: "/tafasil/tafasil-2.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood, inks, collage, paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2018",
      },

      {
        id: "tafasil-3",
        title: "Tafasil-3",
        description: "",
        image: "/tafasil/tafasil-3.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood, inks, collage, paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2018",
      },

      {
        id: "tafasil-4",
        title: "Tafasil-4",
        description: "",
        image: "/tafasil/tafasil-4.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood, inks, collage, paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2018",
      },

      {
        id: "tafasil-5",
        title: "Tafasil-5",
        description: "",
        image: "/tafasil/tafasil-5.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood, inks, collage, paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2018",
      },

      {
        id: "tafasil-6",
        title: "Tafasil-6",
        description: "",
        image: "/tafasil/tafasil-6.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, inks, collage, paper on canvas",
        dimensions: "40 x 220 cm",
        year: "2018",
      },

      {
        id: "tafasil-7",
        title: "Tafasil-7",
        description: "",
        image: "/tafasil/tafasil-7.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, inks, collage, paper on canvas",
        dimensions: "40 x 220 cm",
        year: "2018",
      },

      {
        id: "tafasil-8",
        title: "Tafasil-8",
        description: "",
        image: "/tafasil/tafasil-8.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood, inks, collage, paper on canvas",
        dimensions: "100 x 100 cm",
        year: "2018",
      },

      {
        id: "tafasil-9",
        title: "Tafasil-9",
        description: "",
        image: "/tafasil/tafasil-9.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood, inks, collage, paper on canvas",
        dimensions: "70 x 170 cm",
        year: "2018",
      },

      {
        id: "tafasil-10",
        title: "Tafasil-10",
        description: "",
        image: "/tafasil/tafasil-10.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood, inks, collage, paper on canvas",
        dimensions: "70 x 170 cm",
        year: "2018",
      },

      {
        id: "tafasil-11",
        title: "Tafasil-11",
        description: "",
        image: "/tafasil/tafasil-11.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood, inks, collage, paper on canvas",
        dimensions: "50 x 50 cm",
        year: "2018",
      },

      {
        id: "tafasil-12",
        title: "Tafasil-12",
        description: "",
        image: "/tafasil/tafasil-12.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood, inks, collage, paper on canvas",
        dimensions: "50 x 50 cm",
        year: "2018",
      },

      {
        id: "tafasil-13",
        title: "Tafasil-13",
        description: "",
        image: "/tafasil/tafasil-13.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, inks, collage, paper on canvas",
        dimensions: "70 x 70 cm",
        year: "2018",
      },

      {
        id: "tafasil-14",
        title: "Tafasil-14",
        description: "",
        image: "/tafasil/tafasil-14.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, inks, collage, paper on canvas",
        dimensions: "70 x 70 cm",
        year: "2018",
      },
    ],
  },
  {
    id: "rua'a",
    title: "Rua'a",
    description:
      "A collection of digital and traditional illustrations exploring fantasy themes, character designs, and narrative scenes. Each piece tells a story and invites viewers into imaginative worlds.",
    items: [
      {
        id: "rua'a-1",
        title: "Rua'a-1",
        description: "",
        image: "/rua/rua-1.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood on canvas",
        dimensions: "30 x 25 cm",
        year: "2010",
      },

      {
        id: "rua'a-2",
        title: "Rua'a-2",
        description: "",
        image: "/rua/rua-2.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood on canvas",
        dimensions: "30 x 25 cm",
        year: "2010",
      },

      {
        id: "rua'a-3",
        title: "Rua'a-3",
        description: "",
        image: "/rua/rua-3.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood on canvas",
        dimensions: "30 x 25 cm",
        year: "2010",
      },

      {
        id: "rua'a-4",
        title: "Rua'a-4",
        description: "",
        image: "/rua/rua-4.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood on canvas",
        dimensions: "30 x 25 cm",
        year: "2010",
      },

      {
        id: "rua'a-5",
        title: "Rua'a-5",
        description: "",
        image: "/rua/rua-5.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood on canvas",
        dimensions: "30 x 25 cm",
        year: "2010",
      },

      {
        id: "rua'a-6",
        title: "Rua'a-6",
        description: "",
        image: "/rua/rua-6.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood on canvas",
        dimensions: "30 x 25 cm",
        year: "2010",
      },

      {
        id: "rua'a-7",
        title: "Rua'a-7",
        description: "",
        image: "/rua/rua-7.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood on canvas",
        dimensions: "30 x 25 cm",
        year: "2010",
      },

      {
        id: "rua'a-8",
        title: "Rua'a-8",
        description: "",
        image: "/rua/rua-8.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, wood on canvas",
        dimensions: "30 x 25 cm",
        year: "2010",
      },
    ],
  },
  {
    id: "mahawir",
    title: "Mahawir",
    description:
      "A collection of digital and traditional illustrations exploring fantasy themes, character designs, and narrative scenes. Each piece tells a story and invites viewers into imaginative worlds.",
    items: [
      {
        id: "muhawir-1",
        title: "Bawabat Alrooh",
        description: "",
        image: "/muhawir/muhawir-1.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, fabrics on canvas",
        dimensions: "70 x 60 cm",
        year: "2022",
      },

      {
        id: "muhawir-2",
        title: "Aqwas Alnoor",
        description: "",
        image: "/muhawir/muhawir-2.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, fabrics on canvas",
        dimensions: "150 x 100 cm",
        year: "2022",
      },

      {
        id: "muhawir-3",
        title: "Bayn Al'aqwas",
        description: "",
        image: "/muhawir/muhawir-3.jpg?height=600&width=800",
        medium: "Acrylic colors, pastes, fabrics on canvas",
        dimensions: "120 x 120 cm",
        year: "2022",
      },
    ],
  },
  {
    id: "collage",
    title: "Collage",
    description:
      "A collection of digital and traditional illustrations exploring fantasy themes, character designs, and narrative scenes. Each piece tells a story and invites viewers into imaginative worlds.",
    items: [
      {
        id: "collage-1",
        title: "Collage-1",
        description: "",
        image: "/collage/collage-1.jpg?height=600&width=800",
        medium: "Acrylic colors, inks, colag on pape",
        dimensions: "40 x 40 cm",
        year: "2021",
      },

      {
        id: "collage-2",
        title: "Collage-2",
        description: "",
        image: "/collage/collage-2.jpg?height=600&width=800",
        medium: "Acrylic colors, inks, colag on pape",
        dimensions: "40 x 40 cm",
        year: "2021",
      },

      {
        id: "collage-3",
        title: "Collage-3",
        description: "",
        image: "/collage/collage-3.jpg?height=600&width=800",
        medium: "Acrylic colors, inks, colag on pape",
        dimensions: "40 x 40 cm",
        year: "2021",
      },

      {
        id: "collage-4",
        title: "Collage-4",
        description: "",
        image: "/collage/collage-4.jpg?height=600&width=800",
        medium: "Acrylic colors, inks, colag on pape",
        dimensions: "40 x 40 cm",
        year: "2021",
      },

      {
        id: "collage-5",
        title: "Collage-5",
        description: "",
        image: "/collage/collage-5.jpg?height=600&width=800",
        medium: "Acrylic colors, inks, colag on pape",
        dimensions: "40 x 40 cm",
        year: "2021",
      },

      {
        id: "collage-6",
        title: "Collage-6",
        description: "",
        image: "/collage/collage-6.jpg?height=600&width=800",
        medium: "Acrylic colors, inks, colag on pape",
        dimensions: "40 x 40 cm",
        year: "2021",
      },

      {
        id: "collage-7",
        title: "Collage-7",
        description: "",
        image: "/collage/collage-7.jpg?height=600&width=800",
        medium: "Acrylic colors, inks, colag on pape",
        dimensions: "40 x 40 cm",
        year: "2021",
      },

      {
        id: "collage-8",
        title: "Collage-8",
        description: "",
        image: "/collage/collage-8.jpg?height=600&width=800",
        medium: "Acrylic colors, inks, colag on pape",
        dimensions: "40 x 40 cm",
        year: "2021",
      },
    ],
  },
];
