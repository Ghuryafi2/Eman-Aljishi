import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

export default function ArtworkPage({
  params,
}: {
  params: { albumId: string; itemId: string };
}) {
  const album = albums.find((album) => album.id === params.albumId);

  if (!album) {
    notFound();
  }

  const artwork = album.items.find((item) => item.id === params.itemId);

  if (!artwork) {
    notFound();
  }

  const currentIndex = album.items.findIndex(
    (item) => item.id === params.itemId
  );
  const prevItem = currentIndex > 0 ? album.items[currentIndex - 1] : null;
  const nextItem =
    currentIndex < album.items.length - 1
      ? album.items[currentIndex + 1]
      : null;

  return (
    <div className="container py-12 md:py-16 lg:py-24 bg-white">
      <div className="mb-8">
        <Link href={`/albums/${params.albumId}`}>
          <button className="btn-outline-taupe px-4 py-2 rounded flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to {album.title}
          </button>
        </Link>
      </div>
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image
            src={artwork.image || "/placeholder.svg"}
            alt={artwork.title}
            width={1200}
            height={900}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold heading-taupe">
              {artwork.title}
            </h1>
            <p className="text-mauve">{artwork.year}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-taupe">Medium</h2>
            <p className="text-taupe">{artwork.medium}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-taupe">Dimensions</h2>
            <p className="text-taupe">{artwork.dimensions}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-taupe">
              About this piece
            </h2>
            <p className="text-taupe">{artwork.description}</p>
            <p className="text-taupe">{artwork.fullDescription}</p>
          </div>
          <div className="pt-6 flex justify-between">
            {prevItem ? (
              <Link href={`/albums/${params.albumId}/${prevItem.id}`}>
                <button className="btn-outline-taupe px-4 py-2 rounded flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Previous
                </button>
              </Link>
            ) : (
              <div></div>
            )}
            {nextItem && (
              <Link href={`/albums/${params.albumId}/${nextItem.id}`}>
                <button className="btn-outline-taupe px-4 py-2 rounded flex items-center">
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const albums = [
  {
    id: "contradictory",
    title: "Contradictory",
    description:
      "A collection of digital and traditional illustrations exploring fantasy themes, character designs, and narrative scenes. Each piece tells a story and invites viewers into imaginative worlds.",
    items: [
      {
        id: "forest-guardian",
        title: "Forest Guardian",
        description:
          "A mystical forest guardian protecting ancient trees. This piece explores the relationship between nature spirits and their environments.",
        fullDescription:
          "This illustration depicts a forest guardian entity, a spiritual protector of an ancient woodland. The character embodies the life force of the forest, with elements of both human and plant forms integrated into their design. The piece was inspired by folklore about forest spirits and environmental themes of protection and stewardship.",
        process:
          "I began with character sketches exploring different ways to blend human and plant elements. The final design incorporates flowing organic shapes with more structured human features. I used a limited color palette dominated by greens and earth tones to emphasize the connection to nature, with selective highlights to draw attention to the magical aspects of the character.",
        image: "/tana.jpeg?height=1200&width=900",
        medium: "Digital Painting",
        year: "2023",
      },
      {
        id: "city-of-dreams",
        title: "City of Dreams",
        description:
          "An imaginary cityscape floating among clouds, representing aspirations and the collective unconscious.",
        image: "/contradictory_2.jpeg?height=1200&width=900",
        medium: "Watercolor and Ink",
        year: "2022",
      },
      {
        id: "traveler",
        title: "The Traveler",
        description:
          "A wandering character journeying through strange lands, inspired by classic hero's journey narratives.",
        image: "/placeholder.svg?height=1200&width=900",
        medium: "Digital Illustration",
        year: "2023",
      },
      {
        id: "ancient-library",
        title: "The Ancient Library",
        description:
          "Interior scene of a vast magical library with impossible architecture and floating books.",
        image: "/placeholder.svg?height=1200&width=900",
        medium: "Digital Painting",
        year: "2022",
      },
      {
        id: "seasons-change",
        title: "Seasons Change",
        description:
          "A character depicted through four seasonal transformations, representing personal growth and change.",
        image: "/placeholder.svg?height=1200&width=900",
        medium: "Mixed Media",
        year: "2021",
      },
      {
        id: "dream-weaver",
        title: "Dream Weaver",
        description:
          "A mythical figure who creates dreams and nightmares, surrounded by symbolic imagery.",
        image: "/placeholder.svg?height=1200&width=900",
        medium: "Digital Illustration",
        year: "2023",
      },
    ],
  },
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
        image: "/labbaik/labbaik_1.jpg?height=1200&width=900",
        medium: "Pencil on Paper",
        year: "2023",
      },
      {
        id: "urban-sketches",
        title: "Urban Sketches",
        description:
          "On-location drawings of city scenes, capturing architecture and daily life.",
        image: "/labbaik/labbaik_2.jpg?height=1200&width=900",
        medium: "Ink and Watercolor",
        year: "2022",
      },
      {
        id: "character-concepts",
        title: "Character Concepts",
        description:
          "Exploratory sketches developing character designs for a narrative project.",
        image: "/labbaik/labbaik_3.jpg?height=1200&width=900",
        medium: "Digital Sketches",
        year: "2023",
      },
      {
        id: "nature-studies",
        title: "Nature Studies",
        description:
          "Detailed observations of plants, trees, and natural elements.",
        image: "/labbaik/labbaik_4.jpg?height=1200&width=900",
        medium: "Pencil and Colored Pencil",
        year: "2022",
      },
      {
        id: "composition-experiments",
        title: "Composition Experiments",
        description:
          "Abstract studies exploring balance, rhythm, and visual flow.",
        image: "/labbaik/labbaik_5.jpg?height=1200&width=900",
        medium: "Mixed Media",
        year: "2021",
      },
      {
        id: "urban-sketches",
        title: "Urban Sketches",
        description:
          "On-location drawings of city scenes, capturing architecture and daily life.",
        image: "/labbaik/labbaik_6.jpg?height=1200&width=900",
        medium: "Ink and Watercolor",
        year: "2022",
      },
      {
        id: "character-concepts",
        title: "Character Concepts",
        description:
          "Exploratory sketches developing character designs for a narrative project.",
        image: "/labbaik/labbaik_7.jpg?height=1200&width=900",
        medium: "Digital Sketches",
        year: "2023",
      },
      {
        id: "nature-studies",
        title: "Nature Studies",
        description:
          "Detailed observations of plants, trees, and natural elements.",
        image: "/labbaik/labbaik_8.jpg?height=1200&width=900",
        medium: "Pencil and Colored Pencil",
        year: "2022",
      },
      {
        id: "composition-experiments",
        title: "Composition Experiments",
        description:
          "Abstract studies exploring balance, rhythm, and visual flow.",
        image: "/labbaik/labbaik_9.jpg?height=1200&width=900",
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
        image: "/two_languages/two_languages_4.jpeg?height=600&width=800",
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
      "Preliminary works, quick studies, and artistic explorations that capture moments of inspiration and technical practice.",
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
        title: "Al-Quddus",
        description:
          "Al-Quddus is one of the names of God in square Kufi script with decorations and lines",
        image: "/kufi_murabae/kufi_murabae_1.jpg?height=600&width=800",
        medium: "Acrylic colors, on canvas",
        dimensions: "40 x 40 cm",
        year: "2023",
      },
      {
        id: "kufi_murabae_2",
        title: "Al-Quddus",
        description:
          "Al-Quddus is one of the names of God in square Kufi script with decorations and lines",
        image: "/kufi_murabae/kufi_murabae_2.jpg?height=600&width=800",
        medium: "Acrylic colors, on canvas",
        dimensions: "40 x 40 cm",
        year: "2023",
      },
      {
        id: "kufi_murabae_3",
        title: "Al-Quddus",
        description:
          "Al-Quddus is one of the names of God in square Kufi script with decorations and lines",
        image: "/kufi_murabae/kufi_murabae_3.jpg?height=600&width=800",
        medium: "Acrylic colors, on canvas",
        dimensions: "40 x 40 cm",
        year: "2023",
      },
      {
        id: "kufi_murabae_4",
        title: "Al-Quddus",
        description:
          "Al-Quddus is one of the names of God in square Kufi script with decorations and lines",
        image: "/kufi_murabae/kufi_murabae_4.jpg?height=600&width=800",
        medium: "Acrylic colors, on canvas",
        dimensions: "40 x 40 cm",
        year: "2023",
      },
      {
        id: "kufi_murabae_5",
        title: "Al-Quddus",
        description:
          "Al-Quddus is one of the names of God in square Kufi script with decorations and lines",
        image: "/kufi_murabae/kufi_murabae_5.jpg?height=600&width=800",
        medium: "Acrylic colors, on canvas",
        dimensions: "40 x 40 cm",
        year: "2023",
      },
    ],
  },
];
