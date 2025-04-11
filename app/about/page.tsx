import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mb-8">
        <Link href="/">
          <button className="btn-outline-taupe px-4 py-2 rounded flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </button>
        </Link>
      </div>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            About the Artist
          </h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Eman Al-Jishi is a pioneering Saudi visual artist from Qatif, born
              in 1978, known for her innovative contributions to contemporary
              Saudi art. Although she holds a degree in geography, she is a
              self-taught artist who studied Arabic calligraphy and trained at
              Central Saint Martins in London. Her work blends traditional
              Arabic elements, especially calligraphy, with modern artistic
              expression and themes of beauty, culture, and spirituality.
            </p>
            <p>
              In addition to being an artist, Eman has worked as a beauty expert
              and trainer, integrating her understanding of aesthetics into her
              artwork. She has held nine solo exhibitions, showcased her work
              internationally in places like Rome, Sweden, and London, and
              created public murals, including ones in Dammam and Al-Ula
              Airport.
            </p>
            <p>
              Eman has won several awards, including the Iqtnaa Award and the
              International Burdah Award. Her mission is to elevate artistic
              appreciation in society and to celebrate Saudi and Arab identity
              through accessible, meaningful art. She views art as a universal
              language that connects people across cultures and backgrounds.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">Education</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                Bachelor’s degree in Geography - College of Arts, Imam Abdul
                Rahman bin Faisal University, 2002
              </li>
            </ul>
          </div>
          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">Personal Exhibitions</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>(Labbaik Exhibition), Tajreed Art Gallery, Riyadh, 2022</li>
              <li>
                (Noqta Exhibition), Turath Al-Sahraa Gallery, Al-Khobar, 2017
              </li>
              <li>
                (Afaq Hurufiyya Exhibition), Dama Art Gallery, Jeddah, 2011
              </li>
              <li>(Book Fair), Saudi Embassy in London, London, 2011</li>
              <li>
                (Roaa Exhibition), Social Services Center Hall, Qatif, 2010
              </li>
              <li>(Solo Exhibition), Shada Gallery, Riyadh, 2006</li>
              <li>(Solo Exhibition), Fouad Center Gallery, Al-Khobar, 2006</li>
              <li>
                (The First Personal Exhibition), Social Service Center Hall,
                Qatif, 2005
              </li>
            </ul>
          </div>
          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">
              Double and Quadruple Exhibitions
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>Mahawar Exhibition, Alawi Al-Khabbaz Gallery, Qatif, 2022</li>
              <li>
                Bilateral exhibition (Two languages), Aur Hall, Malmo - Sweden,
                2018
              </li>
              <li>
                Bilateral exhibition (Two languages), Konsthall Betel Museum,
                Malmo – Sweden, 2018
              </li>
              <li>
                Quadruple exhibition (Details), Nesma Gallery, Jeddah, 2018
              </li>
              <li>
                Quadruple exhibition of Saudi female artists, Kuwait Visual Arts
                Society, 2013
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <div className="overflow-hidden rounded-lg">
            <Image
              src="/Eman_Photo.svg?height=800&width=600"
              alt="Artist portrait"
              width={800}
              height={600}
              className="hidden md:block w-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Artist Statement</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My artistic practice explores the intersection of imagination
                and reality, creating visual narratives that invite viewers to
                question their perceptions and engage with alternative
                possibilities.
              </p>
              <p>
                Through my work, I seek to create immersive experiences that
                bridge the gap between the tangible world and the realm of
                dreams, memories, and emotions. Each piece begins with a concept
                or feeling that gradually takes form through experimentation and
                intuition.
              </p>
              <p>
                I am particularly interested in the relationship between human
                experience and the natural world, often incorporating elements
                of both in surreal or fantastical compositions. My written works
                complement this visual exploration, sometimes providing context
                or alternative perspectives on the same themes.
              </p>
              <p>
                Ultimately, my goal is to create work that resonates on an
                emotional level while encouraging intellectual curiosity and
                imaginative thinking. I believe that art has the power to
                transform how we see ourselves and our world, opening doors to
                new understanding and connection.
              </p>
            </div>
          </div>
          <div className="mt-8 space-y-4">
            <h2 className="text-2xl font-bold">Awards</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                Third place award in the letters category, International Burdah
                Competition, United Arab Emirates, 2017
              </li>
              <li>
                Second Place Acquisition Award, Small Business Marketplace
                Competition, 2013
              </li>
              <li>
                Acquisition Award, Saudi Contemporary Art Competition (22), 2012
              </li>
              <li>
                Acquisition Award, Contemporary Islamic Art Competition, 2011
              </li>
              <li>
                Third Place Award, Small Business Collectibles Competition, 2011
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
