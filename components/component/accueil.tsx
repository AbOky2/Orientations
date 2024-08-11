/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/CjODd6QMRgu
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export function Accueil() {
  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <header className="bg-background border-b px-4 md:px-6 flex items-center justify-between h-16 shrink-0">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <FrameIcon className="w-6 h-6" />
          <span>Orientation Bacheliers</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Accueil
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Filières
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Métiers
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Conseils
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="sm" className="md:hidden">
          <MenuIcon className="w-5 h-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      <main className="flex-1 grid gap-8 p-4 md:p-6">
        <section className="max-w-4xl mx-auto grid gap-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Orientation Bacheliers</h1>
            <p className="text-muted-foreground">Découvrez les filières et métiers qui vous correspondent.</p>
          </div>
          <Card className="bg-background p-6 grid gap-6">
            <div className="grid gap-2">
              <Label htmlFor="serie">Série du baccalauréat</Label>
              <Select id="serie">
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre série" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">Littéraire (L)</SelectItem>
                  <SelectItem value="S">Scientifique (S)</SelectItem>
                  <SelectItem value="ES">Économique et Social (ES)</SelectItem>
                  <SelectItem value="STMG">Sciences et Technologies du Management et de la Gestion (STMG)</SelectItem>
                  <SelectItem value="ST2S">Sciences et Technologies de la Santé et du Social (ST2S)</SelectItem>
                  <SelectItem value="STI2D">
                    Sciences et Technologies de l&apos;Industrie et du Développement Durable (STI2D)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button size="lg" className="bg-[#FEB415]">Découvrir les débouchés</Button>          </Card>
        </section>
        <section className="max-w-4xl mx-auto grid gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Votre série : Scientifique (S)</h2>
            <p className="text-muted-foreground">
              Voici les principales filières et métiers accessibles avec un bac S.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-background p-4 grid gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Informatique</h3>
                <p className="text-muted-foreground">
                  Développeur, Ingénieur informatique, Data Scientist, Cybersécurité
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRightIcon className="w-5 h-5" />
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  En savoir plus
                </Link>
              </div>
            </Card>
            <Card className="bg-background p-4 grid gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Aéronautique</h3>
                <p className="text-muted-foreground">
                  Pilote, Ingénieur aéronautique, Contrôleur aérien, Technicien de maintenance
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRightIcon className="w-5 h-5" />
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  En savoir plus
                </Link>
              </div>
            </Card>
            <Card className="bg-background p-4 grid gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Médecine</h3>
                <p className="text-muted-foreground">Médecin, Pharmacien, Infirmier, Chercheur en biologie</p>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRightIcon className="w-5 h-5" />
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  En savoir plus
                </Link>
              </div>
            </Card>
            <Card className="bg-background p-4 grid gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Ingénierie</h3>
                <p className="text-muted-foreground">
                  Ingénieur civil, Ingénieur mécanique, Ingénieur électrique, Ingénieur environnement
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRightIcon className="w-5 h-5" />
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  En savoir plus
                </Link>
              </div>
            </Card>
            <Card className="bg-background p-4 grid gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Recherche</h3>
                <p className="text-muted-foreground">
                  Chercheur en physique, Chercheur en chimie, Chercheur en mathématiques
                </p>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRightIcon className="w-5 h-5" />
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  En savoir plus
                </Link>
              </div>
            </Card>
            <Card className="bg-background p-4 grid gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Environnement</h3>
                <p className="text-muted-foreground">Ingénieur environnement, Géologue, Météorologue, Écologue</p>
              </div>
              <div className="flex items-center gap-2">
                <ChevronRightIcon className="w-5 h-5" />
                <Link href="#" className="font-medium hover:underline" prefetch={false}>
                  En savoir plus
                </Link>
              </div>
            </Card>
          </div>
        </section>
        <section className="max-w-4xl mx-auto grid gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Filière Médecine</h2>
            <p className="text-muted-foreground">Voici les principales informations sur la filière médecine.</p>
          </div>
          <Card className="bg-background p-6 grid gap-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Matières clés</h3>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>Biologie</li>
                  <li>Mathématiques</li>
                  <li>Chimie</li>
                  <li>Physique</li>
                </ul>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Débouchés</h3>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>Médecin généraliste</li>
                  <li>Médecin spécialiste (chirurgie, cardiologie, pédiatrie, etc.)</li>
                  <li>Pharmacien</li>
                  <li>Chercheur en biologie</li>
                  <li>Infirmier</li>
                </ul>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Conseils</h3>
                <p className="text-muted-foreground">
                  Pour réussir dans la filière médecine, il est important de travailler régulièrement les matières
                  scientifiques comme la biologie, les mathématiques et la chimie. Préparez-vous également aux concours
                  d&apos;entrée en médecine et en pharmacie.
                </p>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Compétences requises</h3>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>Excellentes capacités d&apos;analyse et de synthèse</li>
                  <li>Rigueur et sens de l&apos;organisation</li>
                  <li>Empathie et communication</li>
                  <li>Capacité à travailler sous pression</li>
                  <li>Curiosité intellectuelle</li>
                </ul>
              </div>
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Formations</h3>
                <ul className="grid gap-2 text-muted-foreground">
                  <li>Licence de Sciences de la Vie</li>
                  <li>Études de médecine (7 ans)</li>
                  <li>Études de pharmacie (6 ans)</li>
                  <li>Études d'infirmier (3 ans)</li>
                </ul>
              </div>
            </div>
            <Button size="lg" className="bg-[#FEB415]">Découvrir les formations</Button>
          </Card>
        </section>
        <section className="max-w-4xl mx-auto grid gap-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Besoin d&apos;aide pour votre orientation ?</h2>
            <p className="text-muted-foreground">
              Discutez avec notre assistant virtuel pour trouver la filière qui vous correspond.
            </p>
          </div>
          <Card className="bg-background p-6 grid gap-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <h3 className="text-xl font-bold">Votre assistant virtuel</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-8 h-8 border">
                      <AvatarImage src="/placeholder-user.jpg" alt="Image" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <div className="font-bold">Orientation Assistant</div>
                      <div className="prose text-muted-foreground">
                        <p>
                          Bonjour ! Je suis là pour vous aider à trouver la filière qui vous correspond le mieux.
                          N&apos;hésitez pas à me poser vos questions, je ferai de mon mieux pour vous guider.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Textarea
                    placeholder="Posez votre question ici..."
                    name="message"
                    id="message"
                    rows={1}
                    className="min-h-[48px] rounded-2xl resize-none p-4 border border-neutral-400 shadow-sm pr-16"
                  />
                  <Button type="submit" size="icon" className="w-8 h-8 bg-[#FEB415]">
                    <ArrowUpIcon className="w-4 h-4 " />
                    <span className="sr-only">Envoyer</span>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>
      <footer className="bg-background border-t px-4 md:px-6 py-4 flex items-center justify-between">
        <p className="text-xs text-muted-foreground">&copy; 2024 Orientation Bacheliers. Tous droits réservés.</p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-xs hover:underline" prefetch={false}>
            Mentions légales
          </Link>
          <Link href="#" className="text-xs hover:underline" prefetch={false}>
            Politique de confidentialité
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ArrowUpIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12 7-7 7 7" />
      <path d="M12 19V5" />
    </svg>
  )
}


function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FrameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="22" x2="2" y1="6" y2="6" />
      <line x1="22" x2="2" y1="18" y2="18" />
      <line x1="6" x2="6" y1="2" y2="22" />
      <line x1="18" x2="18" y1="2" y2="22" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}
