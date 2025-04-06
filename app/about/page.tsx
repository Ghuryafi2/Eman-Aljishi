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
              Eman Al-Jishi is a pioneering Saudi visual artist, recognized for
              her innovative contributions to contemporary Saudi art. Born in
              1978 in Qatif, a culturally rich city in the eastern region of
              Saudi Arabia, Eman grew up in a family steeped in artistic
              traditions. Her upbringing surrounded by artists, poets, and
              writers greatly influenced her artistic path. Despite having a
              degree in geography, Eman did not pursue formal academic training
              in the arts. Instead, she became a self-taught artist, acquiring
              artistic knowledge through various workshops and courses, both in
              Saudi Arabia and abroad. Notably, she studied Arabic calligraphy,
              including the Thuluth, Diwani, and Kufi styles, and further honed
              her skills at the Central Saint Martins University of Arts in
              London in 2014.
            </p>
            <p>
              In addition to her art, Eman has worked as a beauty expert and
              trainer, running her own center for many years. Her passion for
              beauty and the art of enhancing women’s features has also
              influenced her artistic work, where she combines fine art with
              beauty expertise. This unique blend of artistic training and
              professional experience reflects her belief in the transformative
              power of art to elevate beauty in all forms.
            </p>
            <p>
              Eman’s works are deeply inspired by the local environment,
              cultural heritage, and contemporary Arabic calligraphy. Her art
              explores these themes through a spiritual and aesthetic lens,
              blending traditional elements with modern artistic expressions.
              She has participated in numerous art exhibitions both locally and
              internationally, showcasing her work across a range of mediums.
              Eman has held nine solo exhibitions, including the Labbaik
              exhibition at Tajreed Gallery in Riyadh (2022), Noqta at Turath
              El-Sehraa in Al-Khobar (2017), and Affaq Hurufiyya at Dama Art in
              Jeddah (2011). Her work was also featured at the Saudi Embassy in
              London in 2010, where she held a personal exhibition titled Ruaa.
            </p>
            <p>
              In addition to her local exhibitions, Eman has represented Saudi
              Arabia on several prestigious international platforms. Notably,
              she participated in the Saudi Cultural Days in Rome, Italy, in
              2013 and exhibited her works at the Konsthall-Betel Museum in
              Sweden. Her murals have become prominent landmarks in her home
              country, including a mural on the Dammam Corniche as part of the
              Flash of Inscriptions initiative by the Eastern Province
              Municipality. Her artworks also adorn the corridors of Al-Ula
              Airport, adding a unique artistic touch to the public spaces.
            </p>
            <p>
              Eman’s art has earned her several prestigious awards, both locally
              and internationally. She was awarded the Iqtnaa Award in the
              Contemporary Islamic Art Competition in 2011 and 2012 and received
              third place in the International Burdah Award for calligraphy in
              2017, held in the UAE. These accolades reflect the recognition of
              her innovative work and her dedication to advancing the field of
              Arabic calligraphy and Islamic art.
            </p>
            <p>
              Throughout her career, Eman has worked tirelessly to raise the
              artistic taste of society and to promote Saudi and Arab identity
              through her art. She aims to make her work accessible to all,
              conveying messages and values in a simple yet profound way that
              resonates with a wide audience. Her art often reflects global
              events and human emotions, using a contemporary style to bridge
              the gap between the local and the global. For Eman, art is a
              universal language that transcends boundaries of gender, race, or
              color, and is a right for everyone to experience.
            </p>
            <p>
              Eman Al-Jishi’s journey as an artist is marked by a relentless
              pursuit of beauty and a commitment to exploring the depth of Saudi
              and Arab culture through her visual language. Her work continues
              to inspire audiences, both in Saudi Arabia and abroad, and she
              remains a prominent figure in the contemporary art scene.
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
