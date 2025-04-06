import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

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
            className="group overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl bg-white"
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
            <div className="p-4 border-t border-cream">
              <h2 className="text-xl font-semibold text-taupe">{item.title}</h2>
              <p className="mt-1 text-sm text-mauve line-clamp-2">
                {item.description}
              </p>
              <p className="mt-2 text-xs text-rose">
                {item.medium} • {item.year}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Footer />

    </div>
  );
}

const albums = [
  {
    id: "labbaik",
    title: "Labbaik",
    description:
      "Preliminary works, quick studies, and artistic explorations that capture moments of inspiration and technical practice.",
    items: [
      {
        id: "figure-studies",
        title: "Figure Studies",
        description:
          "A series of quick gesture drawings exploring human form and movement.",
        image: "/labbaik/labbaik_1.jpg?height=600&width=800",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "urban-sketches",
        title: "Urban Sketches",
        description:
          "On-location drawings of city scenes, capturing architecture and daily life.",
        image: "/labbaik/labbaik_2.jpg?height=600&width=800",
        medium: "Ink and Watercolor",
        year: "2022",
      },
      {
        id: "character-concepts",
        title: "Character Concepts",
        description:
          "Exploratory sketches developing character designs for a narrative project.",
        image: "/labbaik/labbaik_3.jpg?height=600&width=800",
        medium: "Digital Sketches",
        year: "2023",
      },
      {
        id: "nature-studies",
        title: "Nature Studies",
        description:
          "Detailed observations of plants, trees, and natural elements.",
        image: "/labbaik/labbaik_4.jpg?height=600&width=800",
        medium: "Pencil and Colored Pencil",
        year: "2022",
      },
      {
        id: "composition-experiments",
        title: "Composition Experiments",
        description:
          "Abstract studies exploring balance, rhythm, and visual flow.",
        image: "/labbaik/labbaik_5.jpg?height=600&width=800",
        medium: "Mixed Media",
        year: "2021",
      },
      {
        id: "urban-sketches",
        title: "Urban Sketches",
        description:
          "On-location drawings of city scenes, capturing architecture and daily life.",
        image: "/labbaik/labbaik_6.jpg?height=600&width=800",
        medium: "Ink and Watercolor",
        year: "2022",
      },
      {
        id: "character-concepts",
        title: "Character Concepts",
        description:
          "Exploratory sketches developing character designs for a narrative project.",
        image: "/labbaik/labbaik_7.jpg?height=600&width=800",
        medium: "Digital Sketches",
        year: "2023",
      },
      {
        id: "nature-studies",
        title: "Nature Studies",
        description:
          "Detailed observations of plants, trees, and natural elements.",
        image: "/labbaik/labbaik_8.jpg?height=600&width=800",
        medium: "Pencil and Colored Pencil",
        year: "2022",
      },
      {
        id: "composition-experiments",
        title: "Composition Experiments",
        description:
          "Abstract studies exploring balance, rhythm, and visual flow.",
        image: "/labbaik/labbaik_9.jpg?height=600&width=800",
        medium: "Mixed Media",
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
    title: "Bayn al-Zill wa al-Nur",
    description:
      "A collection of digital and traditional illustrations exploring fantasy themes, character designs, and narrative scenes. Each piece tells a story and invites viewers into imaginative worlds.",
    items: [
      {
        id: "tanaqud_1",
        title: "Forest Guardian",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tanaqud/tanaqud_1.jpg?height=600&width=800",
        medium: "Digital Painting",
        year: "2023",
      },
      {
        id: "tanaqud_2",
        title: "City of Dreams",
        description:
          "An imaginary cityscape floating among clouds, representing aspirations and the collective unconscious.",
        image: "/tanaqud/tanaqud_2.jpg?height=600&width=800",
        medium: "Watercolor and Ink",
        year: "2022",
      },
      {
        id: "tanaqud_3",
        title: "The Traveler",
        description:
          "A wandering character journeying through strange lands, inspired by classic hero's journey narratives.",
        image: "/tanaqud/tanaqud_3.jpg?height=600&width=800",
        medium: "Digital Illustration",
        year: "2023",
      },
      {
        id: "tanaqud_4",
        title: "The Ancient Library",
        description:
          "Interior scene of a vast magical library with impossible architecture and floating books.",
        image: "/tanaqud/tanaqud_4.jpg?height=600&width=800",
        medium: "Digital Painting",
        year: "2022",
      },
      {
        id: "tanaqud_5",
        title: "Seasons Change",
        description:
          "A character depicted through four seasonal transformations, representing personal growth and change.",
        image: "/tanaqud/tanaqud_5.jpg?height=600&width=800",
        medium: "Mixed Media",
        year: "2021",
      },
      {
        id: "tanaqud_6",
        title: "Dream Weaver",
        description:
          "A mythical figure who creates dreams and nightmares, surrounded by symbolic imagery.",
        image: "/tanaqud/tanaqud_6.jpg?height=600&width=800",
        medium: "Digital Illustration",
        year: "2023",
      },
      {
        id: "tanaqud_7",
        title: "Forest Guardian",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        image: "/tanaqud/tanaqud_7.jpg?height=600&width=800",
        medium: "Digital Painting",
        year: "2023",
      },
      {
        id: "tanaqud_8",
        title: "City of Dreams",
        description:
          "An imaginary cityscape floating among clouds, representing aspirations and the collective unconscious.",
        image: "/tanaqud/tanaqud_8.jpg?height=600&width=800",
        medium: "Watercolor and Ink",
        year: "2022",
      },
      {
        id: "tanaqud_9",
        title: "The Traveler",
        description:
          "A wandering character journeying through strange lands, inspired by classic hero's journey narratives.",
        image: "/tanaqud/tanaqud_9.jpg?height=600&width=800",
        medium: "Digital Illustration",
        year: "2023",
      },
      {
        id: "tanaqud_10",
        title: "The Ancient Library",
        description:
          "Interior scene of a vast magical library with impossible architecture and floating books.",
        image: "/tanaqud/tanaqud_10.jpg?height=600&width=800",
        medium: "Digital Painting",
        year: "2022",
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
    ]
  }
];
