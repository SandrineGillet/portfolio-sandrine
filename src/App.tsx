import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Menu, X, Play, Calendar, ArrowLeft, ArrowRight, Music, Mic2, Radio, Building2, Video, Mic, Check, Truck } from 'lucide-react';
import { WaveformPlayer } from './components/WaveformPlayer';
import { CompactAudioPlayer } from './components/CompactAudioPlayer';

type Page = 'bio' | 'productions' | 'portraits' | 'unite-mobile' | 'actualites' | 'contact';
type ProductionId = 'podcasts-culturels' | 'emissions-speciales' | 'info-locale' | 'podcasts-inst';

const ARTICLES = [
  {
    title: "L'IA au service du journalisme : menace ou opportunité ?",
    date: "12 Avril 2024",
    category: "Réflexion",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    excerpt: "L’intelligence artificielle s’est imposée en quelques années dans les pratiques journalistiques. Discrètement d’abord, massivement aujourd’hui.",
    audioUrl: "/sons/journalisme-ia.mp3",
    content: `
      <p class="mb-8 text-xl font-normal text-ink first-letter:text-5xl first-letter:font-display first-letter:mr-3 first-letter:float-left">
        L’intelligence artificielle s’est imposée en quelques années dans les pratiques journalistiques. Discrètement d’abord, massivement aujourd’hui.
      </p>
      <p class="mb-12">
        Rédaction assistée, analyse de données, génération de contenus : elle s’inscrit désormais dans l’ensemble du flux éditorial. Mais derrière l’efficacité promise, une question demeure : l’IA améliore-t-elle le journalisme… ou en fragilise-t-elle les fondements ?
      </p>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Une transformation déjà à l’œuvre</h4>
        <p class="mb-6">
          Loin d’être une projection, l’intelligence artificielle est déjà utilisée dans de nombreuses rédactions. Automatisation de dépêches, traitement de bases de données, aide à la rédaction ou à la traduction : ces outils permettent d’accélérer la production et d’absorber des volumes d’information de plus en plus importants.
        </p>
        <p>
          Ils interviennent à chaque étape : veille, traitement, écriture, diffusion. Ce basculement ne relève plus de l’expérimentation. Il redéfinit concrètement les pratiques.
        </p>
      </div>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Un levier puissant pour le travail journalistique</h4>
        <p class="mb-6">
          Sur le terrain, les apports sont réels. L’IA permet d’abord de traiter des masses de données impossibles à analyser manuellement. Elle facilite aussi la production de contenus factuels répétitifs, libérant du temps pour des formats plus exigeants.
        </p>
        <p>
          Elle devient également un outil d’appui dans la vérification de l’information, en aidant à repérer incohérences ou signaux faibles. Enfin, elle accélère la diffusion : adaptation multi-formats, traduction, déclinaison sur différents supports. Autant d’usages qui, bien maîtrisés, renforcent les capacités du journaliste.
        </p>
      </div>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Une évolution du rôle du journaliste</h4>
        <p>
          Face à ces outils, le métier évolue. Le journaliste ne disparaît pas. Il se repositionne. Moins centré sur la production brute, il devient davantage garant de la fiabilité, structurant du récit, responsable du sens. L’outil produit. Le journaliste décide.
        </p>
      </div>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Des risques à ne pas sous-estimer</h4>
        <p class="mb-6">
          Cette transformation s’accompagne toutefois de dérives possibles. La première concerne la désinformation. L’IA permet aujourd’hui de produire des contenus faux mais crédibles à grande échelle, rendant le travail de vérification plus complexe que jamais.
        </p>
        <p>
          La seconde touche à la confiance. Plus les contenus automatisés se développent, plus le public questionne leur origine et leur fiabilité. Enfin, un risque plus discret existe : celui d’une standardisation des contenus. À force d’utiliser les mêmes outils, les productions peuvent perdre en singularité et en regard.
        </p>
      </div>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Ce que l’usage sur le terrain révèle</h4>
        <p>
          L’intégration de l’IA dans les pratiques montre un double mouvement. D’un côté, les utilisateurs gagnent en efficacité, en structuration, en rapidité. De l’autre, une vigilance accrue devient nécessaire pour maintenir la qualité éditoriale. Car si l’outil propose, il ne remplace ni le discernement, ni l’angle, ni l’intention journalistique. C’est précisément à cet endroit que se joue aujourd’hui la valeur du métier.
        </p>
      </div>

      <div class="mb-12">
        <div class="bg-ink text-paper p-10 space-y-6 border-l-4 border-accent">
          <h4 class="text-2xl font-sans font-bold text-accent">Conclusion</h4>
          <p class="text-lg italic leading-relaxed">
            L’intelligence artificielle n’est ni une menace absolue, ni une solution miracle. Elle agit comme un accélérateur. Elle permet d’aller plus vite, plus loin, sur certains aspects. Mais elle impose en retour une exigence renforcée : celle de garder la maîtrise du regard, du sens et de la responsabilité éditoriale. Dans ce contexte, le rôle du journaliste ne disparaît pas. Il devient plus essentiel que jamais.
          </p>
        </div>
      </div>

      <div class="pt-12 border-t border-ink/10">
        <p class="text-[10px] uppercase tracking-widest font-bold text-ink/40 mb-6">Sources</p>
        <ul class="text-xs space-y-2 text-ink/60 italic grid md:grid-cols-2 gap-x-12">
          <li>Reuters Institute, cité par Aivancity, Quand l’intelligence artificielle fait la une (2025)</li>
          <li>AFDAS / ARCOM, Impact de l’IA sur le journalisme audiovisuel (2024-2025)</li>
          <li>KPMG & Université de Melbourne, Trust in AI Report (2025)</li>
          <li>Baromètre du numérique, Société Numérique (France, 2024)</li>
          <li>Le Monde, Les transformations du travail liées à l’IA (2025)</li>
          <li>Le Monde, Désinformation et intelligence artificielle (2025)</li>
          <li>UNESCO, Journalisme et intelligence artificielle (2025)</li>
        </ul>
      </div>
    `
  },
  {
    title: "Nouveau studio mobile : l'excellence partout",
    date: "05 Avril 2024",
    category: "Équipement",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800",
    excerpt: "Présentation de ma nouvelle configuration technique pour vos enregistrements sur site. Plus de mobilité, sans compromis sur le son.",
    audioUrl: "/sons/studio-mobile.mp3",
    content: `
      <p class="mb-8 text-xl font-normal text-ink first-letter:text-5xl first-letter:font-display first-letter:mr-3 first-letter:float-left">
        Accompagner un témoignage, enregistrer une parole, capter un moment juste. Sur le terrain, la qualité technique ne devrait jamais être un compromis.
      </p>
      <p class="mb-12">
        C’est pour répondre à cette exigence que j’ai fait l’acquisition d’un studio mobile professionnel, conçu pour garantir une qualité sonore optimale, quel que soit le lieu d’enregistrement.
      </p>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Un dispositif pensé pour le terrain</h4>
        <p class="mb-6">
          Ce studio mobile repose sur une configuration fiable et éprouvée : table de mixage Yamaha MG X12, microphones Shure SM58, reconnus pour la précision et la chaleur de la voix, casques de monitoring pour un contrôle en temps réel.
        </p>
        <p>
          L’équipement est entièrement transportable et installé directement sur site. L’ensemble permet de recréer, en conditions mobiles, les standards d’un studio fixe.
        </p>
      </div>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Enregistrer là où tout se joue</h4>
        <p class="mb-6">
          Sortir du studio, ce n’est pas seulement une contrainte technique. C’est un choix éditorial. Intervenir sur le lieu d’activité, dans un environnement familier, permet souvent une parole plus fluide, une posture plus naturelle et un récit plus incarné.
        </p>
        <p>
          Le dispositif technique s’efface. Ce qui reste, c’est la voix.
        </p>
      </div>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Une qualité au service du contenu</h4>
        <p class="mb-6">
          L’objectif n’est pas seulement d’obtenir un “bon son”. Il s’agit de produire des contenus exploitables, diffusables, crédibles. Ce studio mobile me permet de réaliser des interviews professionnelles sur site, des portraits audio ou vidéo, des formats éditoriaux pour les réseaux ou les plateformes.
        </p>
        <p>
          Avec une exigence constante : respecter la parole enregistrée et la mettre en valeur.
        </p>
      </div>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">S’adapter sans dégrader</h4>
        <p>
          Chaque contexte est différent : entreprise, événement, institution, terrain sensible. Le studio mobile permet de s’adapter à ces environnements sans sacrifier la qualité technique, la clarté du message, ni la rigueur journalistique.
        </p>
      </div>

      <div class="mb-12">
        <div class="bg-ink text-paper p-10 space-y-6 border-l-4 border-accent">
          <h4 class="text-2xl font-sans font-bold text-accent">Conclusion</h4>
          <p class="text-lg italic leading-relaxed">
            Se déplacer, oui. Compromettre la qualité, non. Ce studio mobile s’inscrit dans une démarche simple : aller au plus près des personnes et des histoires, tout en garantissant un rendu professionnel.
          </p>
        </div>
      </div>
    `
  },
  {
    title: "Portrait d'autorité : pourquoi l'audio change la donne",
    date: "28 Mars 2024",
    category: "Conseil",
    image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800",
    excerpt: "Comment la voix permet de créer un lien de confiance immédiat avec votre audience là où l'écrit reste parfois trop froid.",
    audioUrl: "/sons/portrait-autorite.mp3",
    content: `
      <p class="mb-8 text-xl font-normal text-ink first-letter:text-5xl first-letter:font-display first-letter:mr-3 first-letter:float-left">
        Créer du lien, capter l’attention, installer une présence. Dans un environnement saturé d’images et de contenus écrits, la voix s’impose comme un levier singulier. Moins spectaculaire, mais souvent plus engageante. Moins visible, mais plus intime.
      </p>
      <p class="mb-12">
        La voix n'est pas qu'un simple support d'information, c'est un vecteur d'émotion pure qui permet de toucher l'auditeur au cœur de son quotidien, créant une connexion que l'image seule peine parfois à établir.
      </p>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">La voix, un accès direct à la personne</h4>
        <p class="mb-6">
          L’écrit informe. La vidéo montre. La voix, elle, fait ressentir. Elle donne accès à ce que les autres formats captent difficilement : les hésitations, les silences, le rythme, l’intention.
        </p>
        <p>
          Autant d’éléments qui construisent une perception plus fine, plus humaine de l'interlocuteur.
        </p>
      </div>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Un lien de confiance immédiat</h4>
        <p class="mb-6">
          Dans un portrait, tout repose sur la crédibilité. La voix permet d’installer rapidement ce lien. Elle engage l’auditeur autrement : plus lentement, mais plus profondément.
        </p>
        <p>
          Elle crée une proximité qui ne passe pas par la performance, mais par la présence authentique.
        </p>
      </div>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Dire ce qui ne se dit pas ailleurs</h4>
        <p class="mb-6">
          L’audio favorise une forme de parole différente. Sans caméra, sans mise en scène visuelle, les personnes se livrent souvent autrement. Le discours devient plus libre, plus nuancé, parfois plus sincère.
        </p>
        <p>
          C’est là que le portrait prend toute sa valeur : non pas dans ce qui est attendu, mais dans ce qui émerge naturellement du dialogue.
        </p>
      </div>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Un format adapté aux usages actuels</h4>
        <p class="mb-6">
          L’audio s’intègre naturellement dans les rythmes du quotidien : en déplacement, en travaillant, en parallèle d’autres activités. Il ne demande pas une attention exclusive.
        </p>
        <p>
          Mais lorsqu’il capte l’attention, il la retient durablement.
        </p>
      </div>

      <div class="mb-12">
        <h4 class="text-2xl font-sans font-bold text-ink mb-6 border-b border-accent/20 pb-2">Un outil de positionnement</h4>
        <p class="mb-6">
          Le portrait audio ne se limite pas à raconter un parcours. Il permet de structurer une prise de parole, d’incarner une expertise et de donner de la profondeur à un message.
        </p>
        <p>
          Il transforme une simple présence en ligne en une voix identifiable et mémorable.
        </p>
      </div>

      <div class="mb-12">
        <div class="bg-ink text-paper p-10 space-y-6 border-l-4 border-accent">
          <h4 class="text-2xl font-sans font-bold text-accent">Conclusion</h4>
          <p class="text-lg italic leading-relaxed">
            Dans un paysage saturé de contenus visuels, l’audio ne cherche pas à rivaliser. Il propose autre chose. Un espace plus lent. Plus attentif. Plus incarné. Et souvent, plus mémorable.
          </p>
        </div>
      </div>
    `
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('bio');
  const [selectedProduction, setSelectedProduction] = useState<ProductionId | null>(null);
  const [selectedSeriesIndex, setSelectedSeriesIndex] = useState<number>(0);
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [productionViewMode, setProductionViewMode] = useState<'intro' | 'episodes'>('intro');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top on page change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navItems = [
    { id: 'bio', label: 'Bio' },
    { id: 'productions', label: 'Productions' },
    { id: 'portraits', label: 'Portraits' },
    { id: 'unite-mobile', label: 'Votre Projet' },
    { id: 'actualites', label: 'Actualités' },
    { id: 'contact', label: 'Contact' },
  ];

  const productions = [
    {
      id: 'emissions-speciales' as ProductionId,
      title: 'Émissions Spéciales',
      description: "Formats longs, dossiers de fond et documentaires radio. Le temps long pour comprendre.",
      image: '/images/EmissionSpéciale.png',
      icon: <Radio className="w-5 h-5" />,
      series: [
        { 
          title: "Dignité et fin de vie : Le combat de Frédérique Muller", 
          description: "Témoignage poignant de Frédérique Muller, infirmière à la retraite atteinte de la maladie de Charcot. Avant son départ en Belgique, elle livre un dernier combat pour interpeller le gouvernement sur le débat du suicide assisté et le renforcement de la loi Leonetti. Un entretien rare sur le choix du moment et la dignité.", 
          image: '/images/frederique-muller.png',
          episodes: [
            {
              title: "Entretien Témoignage",
              desc: "Frédérique Muller raconte les difficultés pour choisir le moment de son départ et pouvoir le faire dignement.",
              duration: "28:45",
              audioUrl: "/sons/frederique-muller-2.mp3"
            }
          ]
        },
        { 
          title: "Les jeunes et le droit de vote : Un projet PJJ", 
          description: "Dans le cadre d'un partenariat avec la Protection Judiciaire de la Jeunesse (PJJ), cette émission explore le rapport des jeunes au droit de vote et à l'engagement citoyen. Avec Justine Houdelette, éducatrice spécialisée à la PJJ, nous décryptons les enjeux de cette participation démocratique.", 
          image: '/images/pjj-vote.png',
          episodes: [
            {
              title: "Émission Spéciale — Droit de vote",
              desc: "Débat et témoignages sur l'usage du droit de vote par les jeunes suivis par la PJJ.",
              duration: "32:15",
              audioUrl: "/sons/pjj-vote.mp3"
            }
          ]
        },
        { 
          title: "Sécurité Routière : Analyse des chiffres de la mortalité", 
          description: "Émission d'actualité enregistrée en partenariat avec la Prévention Routière. Avec Denis Jonet, chargé de communication, nous analysons les derniers chiffres de la mortalité routière annoncés par le ministère de l'Intérieur et décryptons leur évolution.", 
          image: '/images/prevention-routiere.png',
          episodes: [
            {
              title: "Entretien avec Denis Jonet",
              desc: "Analyse des statistiques et enjeux de la sécurité routière aujourd'hui.",
              duration: "24:30",
              audioUrl: "/sons/prevention-routiere.mp3"
            }
          ]
        }
      ]
    },
    {
      id: 'info-locale' as ProductionId,
      title: 'Information Locale',
      description: "Le pouls des territoires. Reportages de proximité et actualité au plus près des citoyens.",
      image: '/images/ActusLocales.png',
      icon: <Mic2 className="w-5 h-5" />,
      series: [
        {
          title: "À l'ombre des magnolias : Fatima Djemaï",
          description: "Interview prise sur le vif de Fatima Djemaï, présidente de l'association 'À l'ombre des magnolias'. Cette structure regroupe des femmes issues des quartiers prioritaires de Châlons-en-Champagne et d'ailleurs. Elle nous présente l'événement phare de l'année pour l'association.",
          image: '/images/ombre-magnolias.png',
          episodes: [
            {
              title: "Entretien avec Fatima Djemaï",
              desc: "Reportage en extérieur sur l'engagement des femmes de l'association et leurs projets annuels.",
              duration: "15:40",
              audioUrl: "/sons/ombre-magnolias.mp3"
            }
          ]
        },
        {
          title: "Mission Locale : Accompagner la jeunesse",
          description: "Entretien avec Karine Paroissien, directrice de la Mission Locale de Châlons-en-Champagne. Elle revient sur les missions fondamentales de la structure et présente les différents ateliers d'insertion proposés pour accompagner les jeunes vers l'autonomie.",
          image: '/images/mission-locale.png',
          episodes: [
            {
              title: "Interview de Karine Paroissien",
              desc: "Focus sur les dispositifs d'accompagnement et les ateliers d'insertion de la Mission Locale.",
              duration: "18:20",
              audioUrl: "/sons/mission-locale.mp3"
            }
          ]
        },
        {
          title: "Elite 2.0 : Un nouveau centre de formation",
          description: "Entretien avec Samira Hayane, directrice du centre de formation Elite 2.0. Elle nous présente cette nouvelle structure implantée sur notre territoire et détaille les différentes formations proposées pour accompagner les parcours professionnels.",
          image: '/images/elite-2-0.png',
          episodes: [
            {
              title: "Interview de Samira Hayane",
              desc: "Présentation de la structure Elite 2.0 et de son catalogue de formations.",
              duration: "14:50",
              audioUrl: "/sons/elite-2-0.mp3"
            }
          ]
        }
      ]
    },
    {
      id: 'podcasts-inst' as ProductionId,
      title: 'Podcasts',
      description: "Projets audio sur mesure réalisés pour des institutions et des publics spécifiques. Le son au service de l'engagement.",
      image: '/images/PodcastInstitution.png',
      icon: <Building2 className="w-5 h-5" />,
      series: [
        {
          title: 'Génération en Tension',
          description: "Génération en tension donne la parole aux jeunes d’aujourd’hui, souvent cités mais rarement écoutés. Entre santé mentale fragilisée et pressions, ils racontent leurs réalités et leur courage discret. Une génération en tension n’est pas une génération perdue. Crédit musical : Ron Gelinas — Over The Horizon (youtu.be/IHi4nQLvVTY)",
          image: '/images/generation-tension.png',
          episodes: [
            { 
              title: "# 1 Maude", 
              desc: "Maude témoigne de sa précarité économique dans ce premier épisode. Ancienne Hôtesse de l’air, elle travaille à temps partiel subi.\n\nDans la deuxième partie de l’épisode, nous entendrons Cheyenne Duversin, Psychologue clinicienne pour éclairer ce que vivent tant de jeunes comme Maude, coincé·es entre ambition, réalité et épuisement.", 
              duration: "12:45", 
              audioUrl: "/sons/generation-tension-ep1.mp3" 
            },
            { 
              title: "# 2 Alexandre", 
              desc: "Dans ce deuxième épisode, nous allons explorer comment la précarité socio-économique impacte la santé mentale d’Alexandre, en mission de service civique, et comment ce dispositif peut représenter à la fois une opportunité et une forme de vulnérabilité. Emmanuelle Thill, conseillère Mission Locale spécialisée dans la santé mentale, nous livrera son point de vue sur la situation d’Alexandre qu’elle suit de mois en mois.", 
              duration: "14:20", 
              audioUrl: "/sons/generation-tension-ep2.mp3" 
            },
            { 
              title: "# 3 Jody", 
              desc: "Nous explorons dans ce dernier épisode, les effets psychiques d’une transition de genre dans un contexte social encore discriminant. Et nous mettons en lumière les besoins spécifiques des jeunes en quête d’identité, souvent confrontés à l’isolement, au rejet ou à l’incompréhension.\n\nJody, 21 ans, en étude supérieure de design, en transition de genre, témoigne de ses difficultés au quotidien, et Jonathan Mauduit, responsable d'une association qui accompagne des jeunes LGBT nous livrera son regard sur le parcours de Jody.", 
              duration: "11:15", 
              audioUrl: "/sons/generation-tension-ep3.mp3" 
            }
          ]
        },
        {
          title: 'Résonance Transmission',
          description: "La Cytamphology est à l'honneur dans cet épisode de Résonance transmission. Mathématicien et chercheur, Jean-Paul Geoffroy s'est intéressé dès l'enfance à l'énergie des plantes. Son épouse, Simone Geoffroy, nous raconte cette vie de passion et de science, tout en cherchant un repreneur pour son laboratoire de recherches.",
          image: '/images/resonance-transmission.png',
          episodes: [
            {
              title: "La Cytamphology",
              desc: "Découvrez l'histoire de Jean-Paul Geoffroy et de la Cytamphology, une science à la croisée de la physique quantique et de la biologie végétale.",
              duration: "18:30",
              audioUrl: "/sons/cytamphology.mp3"
            }
          ]
        }
      ]
    },
    {
      id: 'podcasts-culturels' as ProductionId,
      title: 'Podcasts Culturels',
      description: "L'art et la création sous le prisme du son. Entretiens et récits dédiés à la culture.",
      image: '/images/PodcastCulturel.png',
      icon: <Music className="w-5 h-5" />,
      series: [
        {
          title: 'Les Chroniques de Ridley',
          author: 'Zoey Linwood',
          description: "En 2066, dans une Londres dystopique, Ridley Walcott et quatre jeunes adultes affrontent un test décisif imposé par une société totalitaire. Ils découvrent peu à peu les sombres mensonges d'un système qui ne tolère aucune rébellion.",
          image: '/images/chroniques-ridley.png',
          episodes: [
            { 
              title: "Interview de Zoey Linwood", 
              desc: "Présentation de la trilogie dystopique 'Les Chroniques de Ridley'.", 
              duration: "15:30", 
              audioUrl: "/sons/chroniques-riley.mp3" 
            }
          ]
        },
        {
          title: 'Le Livre de la semaine',
          author: 'Avec Véronique Porcel',
          description: "Chronique hebdomadaire enregistrée durant plusieurs années pour RMN. Un rendez-vous littéraire pour découvrir des œuvres marquantes avec le regard de Véronique Porcel, enseignante et lectrice éclairée.",
          image: '/images/guerriers-hiver.png',
          episodes: [
            { 
              title: "Les guerriers de l'hiver", 
              desc: "Chronique consacrée au livre d'Olivier Norek paru chez Michel Laffont.", 
              duration: "08:45", 
              audioUrl: "/sons/guerriers-hiver.mp3" 
            }
          ]
        },
        {
          title: 'Festival Machabulles',
          author: 'Laurent Sellier (Bords Deux Scènes)',
          description: "Exemple de Phoner enregistré avec Laurent Sellier, directeur de l'établissement public Bords Deux Scènes à Vitry-le-François, présentant le festival jeune public Machabulles. Interview enregistrée en différé pour RMN.",
          image: '/images/machabulles.png',
          episodes: [
            { 
              title: "Présentation du Festival", 
              desc: "Entretien avec Laurent Sellier sur la programmation et les enjeux du festival.", 
              duration: "10:15", 
              audioUrl: "/sons/machabulles.mp3" 
            }
          ]
        }
      ]
    }
  ];

  const currentProductionData = productions.find(p => p.id === selectedProduction);
  const currentSeries = currentProductionData?.series ? (currentProductionData.series[selectedSeriesIndex] as any) : null;
  const currentEpisodes = currentSeries ? currentSeries.episodes : ((currentProductionData as any)?.content || []);
  const currentImage = currentSeries ? currentSeries.image : ((currentProductionData as any)?.headerImage || currentProductionData?.image || '');
  const currentTitle = currentSeries ? currentSeries.title : (currentProductionData?.title || '');
  const currentAuthor = currentSeries?.author || '';
  const currentDescription = currentSeries ? currentSeries.description : (currentProductionData?.description || '');

  return (
    <div className={`min-h-screen transition-colors duration-500 selection:bg-ink selection:text-paper ${
      currentPage === 'contact' ? 'bg-white text-black' : 'bg-paper text-ink'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-500 ${
        currentPage === 'contact' ? 'bg-black border-white/10' : 'bg-paper/80 border-ink/5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`text-2xl font-display tracking-tighter uppercase ${
              currentPage === 'contact' ? 'text-white' : 'text-ink'
            }`}
          >
            SANDRINE GILLET
          </motion.div>

          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id as Page);
                  if (item.id === 'productions') {
                    setSelectedProduction(null);
                    setProductionViewMode('intro');
                  }
                }}
                className={`text-[10px] lg:text-xs uppercase tracking-[0.2em] font-semibold transition-colors whitespace-nowrap ${
                  currentPage === item.id 
                    ? (currentPage === 'contact' ? 'text-white border-b border-white' : 'text-ink border-b border-ink')
                    : (currentPage === 'contact' ? 'text-white/40 hover:text-white/60' : 'text-ink/40 hover:text-ink/60')
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className={`md:hidden ${currentPage === 'contact' ? 'text-white' : 'text-ink'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-40 bg-paper/40 backdrop-blur-sm md:hidden"
            />
            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-xs z-50 bg-paper p-8 flex flex-col md:hidden border-r border-ink/10 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-display tracking-tighter uppercase">MENU</span>
                <button onClick={() => setIsMenuOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="flex-1 flex flex-col gap-4 overflow-y-auto no-scrollbar">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id as Page);
                      if (item.id === 'productions') {
                        setSelectedProduction(null);
                        setProductionViewMode('intro');
                      }
                      if (item.id === 'actualites') {
                        setSelectedArticle(null);
                      }
                      setIsMenuOpen(false);
                    }}
                    className={`text-2xl font-serif italic text-left transition-all py-2 ${
                      currentPage === item.id 
                        ? 'text-ink pl-4 border-l-2 border-ink' 
                        : 'text-ink/40 hover:text-ink/60'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-auto pt-10 border-t border-ink/5 space-y-6">
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/sandrine-gillet-06278129b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-paper transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:contact@sandrinegillet.com"
                    className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center hover:bg-ink hover:text-paper transition-all"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
                <div className="space-y-2">
                  <a href="tel:0687043522" className="flex items-center gap-3 text-sm font-medium hover:text-ink/60 transition-colors">
                    <Phone className="w-4 h-4 opacity-40" />
                    06 87 04 35 22
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {currentPage === 'bio' && (
            <motion.section
              key="bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              {/* Hero Section with Title Overlay (Portrait Optimized) */}
              <div className="relative aspect-[3/4] md:aspect-auto md:h-[85vh] w-full overflow-hidden group">
                <img 
                  src="/Portrait Sandrine.png" 
                  alt="Sandrine Gillet - Journaliste & Intervenante" 
                  className="w-full h-full object-cover object-[center_30%] bw-filter opacity-90 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-paper/20 flex items-center justify-center text-center p-6">
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-7xl font-display leading-[0.85] tracking-tighter text-white drop-shadow-2xl translate-x-8 translate-y-16 md:translate-x-48 md:translate-y-32 uppercase"
                  >
                    Journaliste <br /> & Intervenante
                  </motion.h1>
                </div>
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 text-[10px] uppercase tracking-[0.5em] font-bold animate-bounce">
                  Découvrir
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  <div className="space-y-6 text-lg leading-relaxed text-ink/80 font-light text-justify hyphens-auto">
                    <p>
                      Journaliste radio depuis deux décennies, diplômée de l’ESJ Paris, ma carrière s’est construite au rythme du micro et de l’actualité. Des studios de rédaction aux reportages de terrain, j'ai consacré ces 20 dernières années à donner la parole, à décrypter l’information et à sculpter le paysage sonore.
                    </p>
                    <p>
                      Entrepreneure, Journaliste & Intervenante, j’ai fondé ma propre structure de création sonore pour explorer de nouveaux formats. Mon approche allie la rigueur de l’information locale à la profondeur des podcasts culturels et institutionnels. Parallèlement à ma pratique, je transmets aujourd'hui mon expertise aux futurs professionnels au sein de l'IUT de Châlons-en-Champagne.
                    </p>
                    <p className="font-serif italic text-2xl text-ink mt-8">
                      "Transformer chaque témoignage en une expérience immersive."
                    </p>
                    <p>
                      Bienvenue dans mon univers sonore.
                    </p>
                  </div>
                </div>
                
                <div className="relative group max-w-md mx-auto lg:mx-0">
                  <div className="aspect-square overflow-hidden border border-white/20 shadow-2xl relative">
                    <iframe 
                      src="https://www.youtube.com/embed/1g1e37FLcUs" 
                      title="Présentation Sandrine Gillet"
                      className="w-full h-full object-cover bw-filter"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 border-r-2 border-b-2 border-ink/10 pointer-events-none" />
                  <div className="absolute -top-8 -left-8 w-40 h-40 border-l-2 border-t-2 border-ink/10 pointer-events-none" />
                  <div className="mt-12 text-[10px] uppercase tracking-widest text-ink/40 font-semibold">
                    Frame 1:1 — Présentation Vidéo
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {currentPage === 'productions' && !selectedProduction && (
            <motion.section
              key="productions-list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-display mb-4 uppercase">Productions</h2>
                <p className="text-ink/60 uppercase tracking-widest text-xs font-semibold">
                  Archives sonores & Créations originales
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {productions.map((prod, index) => (
                  <motion.div 
                    key={prod.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group cursor-pointer space-y-6"
                    onClick={() => {
                      setSelectedProduction(prod.id);
                      setProductionViewMode('intro');
                    }}
                  >
                    <div className="aspect-square overflow-hidden border-2 border-white shadow-md relative">
                      <img 
                        src={prod.image} 
                        alt={prod.title} 
                        className="w-full h-full object-cover bw-filter group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-paper/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-ink text-paper px-6 py-3 rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-3">
                          Découvrir <ArrowLeft className="w-4 h-4 rotate-180" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-ink/40">
                        {prod.icon}
                        <span className="text-[10px] uppercase tracking-widest font-bold">Catégorie</span>
                      </div>
                      <h3 className="text-2xl font-display uppercase tracking-tight transition-all">{prod.title}</h3>
                      <p className="text-ink/70 leading-relaxed font-light">
                        {prod.description}
                      </p>
                      <button className="text-[10px] uppercase tracking-widest font-bold border-b border-ink/20 pb-1 group-hover:border-ink transition-colors">
                        Voir les productions
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {currentPage === 'productions' && selectedProduction && currentProductionData && (
            <motion.section
              key="production-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => {
                    if (productionViewMode === 'episodes') {
                      setProductionViewMode('intro');
                    } else {
                      setSelectedProduction(null);
                    }
                  }}
                  className="flex items-center gap-3 text-ink/60 hover:text-ink transition-colors group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span className="text-xs uppercase tracking-widest font-bold">
                    {productionViewMode === 'episodes' ? 'Retour à la présentation' : 'Retour aux productions'}
                  </span>
                </button>
              </div>

              <AnimatePresence mode="wait">
                {productionViewMode === 'intro' ? (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="max-w-5xl mx-auto space-y-24"
                  >
                    {(currentProductionData?.series || [{ 
                      title: currentProductionData?.title, 
                      description: currentProductionData?.description, 
                      image: currentProductionData?.image 
                    }]).map((series, idx) => (
                      <div key={idx} className="flex flex-col md:flex-row gap-12 items-start group">
                        <div className="w-full md:w-72 aspect-square flex-shrink-0 overflow-hidden border border-white/20 shadow-xl relative">
                          <img 
                            src={series.image} 
                            alt={series.title} 
                            className="w-full h-full object-cover bw-filter group-hover:scale-105 transition-transform duration-1000"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-ink/5 group-hover:bg-transparent transition-colors" />
                        </div>
                        
                        <div className="flex-grow space-y-6">
                          <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-display leading-tight uppercase tracking-tight">
                              {series.title}
                            </h2>
                            {series.author && (
                              <p className="text-xs uppercase tracking-[0.2em] font-bold text-ink/60 border-b border-accent/30 pb-1 inline-block">
                                {series.author}
                              </p>
                            )}
                          </div>
                          
                          <div className="h-px w-12 bg-ink/10" />
                          
                          <p className="text-base text-ink/80 font-light leading-relaxed whitespace-pre-line">
                            {series.description}
                          </p>
                          
                          <div className="pt-4">
                            <button 
                              onClick={() => {
                                setSelectedSeriesIndex(idx);
                                setProductionViewMode('episodes');
                              }}
                              className="flex items-center gap-6 bg-ink text-paper px-8 py-4 rounded-full hover:bg-accent hover:text-white transition-all group/btn shadow-lg"
                            >
                              <Play className="w-4 h-4 fill-current" />
                              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Accéder aux épisodes</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="episodes"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="max-w-5xl mx-auto space-y-12"
                  >
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-end border-b border-ink/10 pb-12">
                      <div className="w-48 h-48 flex-shrink-0 border-4 border-white shadow-lg overflow-hidden">
                        <img 
                          src={currentImage} 
                          alt={currentTitle} 
                          className="w-full h-full object-cover bw-filter"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="text-center md:text-left space-y-4">
                        <h3 className="text-xs uppercase tracking-[0.5em] font-bold text-ink/40">Lecture en cours</h3>
                        <h2 className="text-2xl md:text-3xl font-display uppercase leading-tight">
                          {currentTitle}
                          {currentAuthor && (
                            <span className="block text-xs md:text-sm font-sans font-normal tracking-widest text-ink/60 mt-1">
                              {currentAuthor}
                            </span>
                          )}
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {currentEpisodes.map((item, i) => (
                        <motion.div 
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="group p-8 border border-ink/5 hover:border-ink/20 bg-white shadow-sm hover:shadow-md transition-all text-paper"
                        >
                          <div className="flex justify-between items-start mb-6">
                            <div className="space-y-2">
                              <div className="flex items-center gap-3">
                                <h4 className="text-xl font-display uppercase tracking-tight text-paper">{item.title}</h4>
                              </div>
                              <p className="text-base text-paper/80 font-light leading-relaxed whitespace-pre-line">{item.desc}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                              <span className="text-[10px] font-mono opacity-40 text-paper">{item.duration}</span>
                              <div className="w-8 h-px bg-paper/10" />
                            </div>
                          </div>
                          <WaveformPlayer 
                            title={`Épisode — ${item.title}`} 
                            audioUrl={item.audioUrl} 
                          />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          )}

          {currentPage === 'portraits' && (
            <motion.section
              key="portraits"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-24"
            >
              <div className="max-w-4xl space-y-8">
                <div className="space-y-6">
                  <p className="text-ink/40 uppercase tracking-[0.3em] text-[10px] font-bold">Portraits & Visibilité</p>
                  <div className="space-y-10">
                    <h2 className="text-4xl md:text-6xl font-display leading-tight uppercase text-ink">
                      Je ne fais pas des interviews. <br />
                      <span>
                        Je transforme votre parole en <span className="text-accent">visibilité</span> et en crédibilité.
                      </span>
                    </h2>
                    <p className="text-ink text-lg md:text-xl font-light tracking-wide">
                      Des portraits qui révèlent ce qui fait votre différence — et donnent envie de vous choisir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-12">
                {[
                  {
                    title: "Margaux Klein — Construire un business visible et assumé",
                    desc: (
                      <div className="space-y-4">
                        <p>
                          Un échange sans filtre sur le personal branding, le courage de prendre position, et la manière de rendre son activité visible — même quand on est artisan.
                        </p>
                        <p>
                          Ici, Margaux ne parle pas théorie. Elle montre concrètement comment une boulangère peut exister en ligne… et être choisie.
                        </p>
                        <p className="text-ink italic border-l border-accent/50 pl-4 py-1">
                          Une parole claire, incarnée, qui donne envie d’écouter… et d’adhérer.
                        </p>
                      </div>
                    ),
                    videoPlaceholder: "https://img.youtube.com/vi/dSq7e7gRDq0/maxresdefault.jpg",
                    videoUrl: "https://www.youtube.com/embed/dSq7e7gRDq0",
                    isColor: true,
                    duration: "03:45"
                  },
                  {
                    title: "Magaly Zarka — ATTIRER ET MOBILISER AUTOUR D’UN ÉVÉNEMENT",
                    desc: (
                      <div className="space-y-4">
                        <p>
                          Mettre en lumière un événement, c’est bien plus que l’annoncer.
                        </p>
                        <p>
                          Avec Magaly Zarka, l’objectif était de rendre visible l’intention derrière Run Your World : un rendez-vous fort pour des entrepreneuses prêtes à s’affirmer.
                        </p>
                        <p className="text-ink italic border-l border-accent/50 pl-4 py-1">
                          Une parole claire et incarnée, au service de l’attractivité de l’événement.
                        </p>
                      </div>
                    ),
                    videoPlaceholder: "https://img.youtube.com/vi/RHX9R902cPI/maxresdefault.jpg",
                    videoUrl: "https://www.youtube.com/embed/RHX9R902cPI",
                    isColor: true,
                    duration: "04:20"
                  },
                  {
                    title: "Simone Geoffroy — Rendre accessible un projet scientifique complexe",
                    desc: (
                      <div className="space-y-4">
                        <p>
                          Comment rendre visible un projet scientifique de haut niveau auprès d’un repreneur potentiel ?
                        </p>
                        <p>
                          Dans ce reportage avec Simone Geoffroy, il s’agissait de traduire un univers complexe en un message clair, compréhensible et attractif.
                        </p>
                        <p className="text-ink italic border-l border-accent/50 pl-4 py-1">
                          Une parole structurée, au service d’un enjeu concret : transmettre et faire perdurer.
                        </p>
                      </div>
                    ),
                    videoPlaceholder: "https://img.youtube.com/vi/cGFkaWGal5E/maxresdefault.jpg",
                    videoUrl: "https://www.youtube.com/embed/cGFkaWGal5E",
                    isColor: true,
                    duration: "05:10"
                  }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="group space-y-6"
                  >
                    <div 
                      className="block aspect-video relative overflow-hidden border border-ink/10 bg-ink/5 group-hover:border-ink/30 transition-all"
                    >
                      <iframe 
                        src={(item as any).videoUrl} 
                        title={typeof item.title === 'string' ? item.title : 'Portrait Vidéo'}
                        className={`w-full h-full object-cover ${(item as any).isColor ? 'soft-color' : 'bw-filter'}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      {/* Overlay pour simuler le logo YouTube noir - Taille augmentée pour couvrir le rouge */}
                      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                        <div className="w-[72px] h-[50px] bg-black rounded-[12px] flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.8)] group-hover:scale-110 transition-transform duration-300">
                          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-display uppercase tracking-tight">{item.title}</h3>
                      <div className="text-sm text-ink/70 font-light leading-relaxed">
                        {item.desc}
                      </div>
                      <div className="pt-2">
                        <div className="h-px w-12 bg-ink/20 group-hover:w-full transition-all duration-500" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl mx-auto text-center space-y-10 pt-12"
              >
                <div className="w-16 h-px bg-white/40 mx-auto" />
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-display uppercase tracking-tight">Et maintenant ?</h3>
                  <div className="space-y-2 text-ink/70 font-light">
                    <p>Vous avez une expertise, une histoire, un projet.</p>
                    <p>Mais aujourd’hui, votre message n’est pas encore entendu comme il devrait l’être.</p>
                    <p className="text-ink font-normal">Je vous aide à le rendre clair, incarné… et <span className="text-accent">visible</span>.</p>
                  </div>
                </div>

                <div className="space-y-8">
                  <p className="text-ink font-bold text-lg">
                    En 20 minutes, vous repartez avec une vision claire.
                  </p>
                  <div className="space-y-3 flex flex-col items-center">
                    <motion.a
                      href="https://calendly.com/bibgillet/rdv-offert"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E31E24] to-[#991b1b] text-white px-10 py-5 rounded-full font-display uppercase tracking-widest text-sm hover:scale-105 transition-all shadow-xl shadow-red-500/20 grain-effect"
                    >
                      Réserver un échange
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                    <p className="text-xs text-ink/60 uppercase tracking-[0.15em] font-semibold">
                      Échange offert — 20 minutes pour clarifier votre message et vos enjeux.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.section>
          )}

          {currentPage === 'unite-mobile' && (
            <motion.div
              key="unite-mobile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16 pb-32"
            >
              {/* 1. HERO - Épuré */}
              <section className="min-h-[60vh] flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 space-y-8 text-left">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-display uppercase leading-[0.9]"
                  >
                    Votre parole <br />
                    <span className="text-white">a de la valeur.</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-ink/60 max-w-xl font-light leading-relaxed"
                  >
                    Je vous aide à transformer votre parcours ou vos projets en un message clair, structuré et impactant.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="pt-4"
                  >
                    <a 
                      href="https://calendly.com/bibgillet/rdv-offert"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-[#E31E24] to-[#991b1b] text-white px-10 py-5 rounded-full text-sm uppercase tracking-[0.2em] font-bold hover:scale-105 transition-all shadow-xl shadow-red-500/20 grain-effect inline-block"
                    >
                      Clarifions votre message
                    </a>
                  </motion.div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="flex-1 w-full max-w-md mx-auto"
                >
                  <div className="aspect-[3/4] overflow-hidden border border-white/10 shadow-2xl relative group">
                    <img 
                      src="/images/bib-gillet-portrait.jpeg" 
                      alt="Bib Gillet" 
                      className="w-full h-full object-cover bw-filter group-hover:scale-105 transition-transform duration-1000"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>
              </section>

              {/* 2. L'OFFRE ESSENTIELLE - Plus de blanc */}
              <section className="py-24 border-y border-white/5">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                  <h2 className="text-3xl md:text-5xl font-display uppercase">Le Portrait d’Autorité</h2>
                  <div className="grid md:grid-cols-2 gap-12 text-left">
                    <div className="space-y-4">
                      <p className="text-ink font-bold uppercase tracking-widest text-[10px] border-b border-accent/40 pb-1 inline-block">Le concept</p>
                      <p className="text-lg font-light leading-relaxed text-ink/80">
                        Un dispositif éditorial (audio ou vidéo) qui extrait la substance de votre parcours pour en faire un outil de communication puissant.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <p className="text-ink font-bold uppercase tracking-widest text-[10px] border-b border-accent/40 pb-1 inline-block">Le résultat</p>
                      <p className="text-lg font-light leading-relaxed text-ink/80">
                        Un message limpide, une posture renforcée et des contenus prêts à diffuser pour asseoir votre expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 3. EXPERTISES - Plus éditorial */}
              <section className="space-y-20">
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-5xl font-display uppercase">Expertises & Impacts</h2>
                  <p className="text-ink/40 uppercase tracking-widest text-xs">Quatre territoires, une même exigence de sens.</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    { 
                      target: "Entrepreneurs", 
                      impact: "Asseoir votre autorité",
                      desc: "Transformer votre expertise en un récit stratégique qui inspire confiance et crédibilité auprès de vos clients et partenaires." 
                    },
                    { 
                      target: "Institutions", 
                      impact: "Incarner vos missions",
                      desc: "Donner une voix humaine à vos projets d'intérêt général pour renforcer le lien avec vos administrés et partenaires." 
                    },
                    { 
                      target: "Structures Sociales", 
                      impact: "Libérer le potentiel",
                      desc: "Utiliser le média radio comme outil d'insertion pour restaurer l'estime de soi et maîtriser l'art de la parole." 
                    },
                    { 
                      target: "Événements", 
                      impact: "Capturer l'essentiel",
                      desc: "Animer vos débats et capturer l'intelligence collective sur le vif pour prolonger l'impact de vos rencontres." 
                    }
                  ].map((item, i) => (
                    <div key={i} className="group p-10 bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all duration-500 space-y-6">
                      <div className="flex justify-between items-start">
                        <h4 className="text-2xl font-display uppercase text-white group-hover:text-accent transition-colors">{item.target}</h4>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 border-b border-accent/50 pb-0.5">{item.impact}</span>
                      </div>
                      <div className="h-px w-8 bg-white/10 group-hover:w-full transition-all duration-700" />
                      <p className="text-ink/60 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 4. LE STUDIO NOMADE - Plus pro, moins "camion" */}
              <section className="max-w-5xl mx-auto">
                <div className="relative p-12 md:p-16 overflow-hidden border border-white/10 bg-paper group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                  
                  <div className="relative flex flex-col md:flex-row gap-12 items-center">
                    <div className="w-24 h-24 flex-shrink-0 border border-white/10 flex items-center justify-center rounded-full group-hover:border-accent/50 transition-colors duration-500">
                      <Mic className="w-10 h-10 text-accent" />
                    </div>
                    <div className="space-y-4 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-display uppercase tracking-tight">Le Studio Nomade : L'Excellence sur site</h3>
                      <p className="text-lg text-ink/70 font-light leading-relaxed max-w-2xl">
                        Je déplace mon expertise et mon matériel professionnel directement dans votre environnement. 
                        <span className="text-white"> Capturer l'authenticité du terrain </span> sans jamais sacrifier la pureté du son studio. 
                        Une souplesse totale pour vos projets les plus ambitieux.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. CTA FINAL - Épuré */}
              <section className="py-24 text-center space-y-12">
                <div className="space-y-4">
                  <h2 className="text-4xl md:text-6xl font-display uppercase">On en parle ?</h2>
                  <p className="text-xl text-ink/50 font-light">
                    20 minutes pour clarifier vos besoins et envisager votre projet.
                  </p>
                </div>
                <a 
                  href="https://calendly.com/bibgillet/rdv-offert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-[#E31E24] to-[#991b1b] text-white px-12 py-6 rounded-full text-sm uppercase tracking-[0.3em] font-bold hover:scale-105 transition-all shadow-2xl shadow-red-500/30 scale-110 grain-effect"
                >
                  Je réserve mon appel
                </a>
              </section>
            </motion.div>
          )}

          {currentPage === 'actualites' && (
            <motion.section
              key="actualites"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              <AnimatePresence mode="wait">
                {selectedArticle ? (
                  <motion.div
                    key="article-detail"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="max-w-4xl mx-auto space-y-12"
                  >
                    <button 
                      onClick={() => setSelectedArticle(null)}
                      className="flex items-center gap-2 text-ink/40 hover:text-accent transition-colors uppercase tracking-widest text-[10px] font-bold group"
                    >
                      <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                      Retour aux actualités
                    </button>

                    <div className="grid md:grid-cols-12 gap-16 items-start">
                      {/* Sidebar Sticky */}
                      <aside className="md:col-span-4 space-y-8 md:sticky md:top-32">
                        <div className="space-y-6">
                          <div className="aspect-[4/5] overflow-hidden border border-ink/10 shadow-2xl relative group">
                            <img 
                              src={selectedArticle.image} 
                              alt={selectedArticle.title} 
                              className="w-full h-full object-cover bw-filter transition-transform duration-700 group-hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-paper/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>
                          
                          <div className="space-y-4">
                            <div className="flex items-center gap-3 text-ink">
                              <div className="w-8 h-px bg-accent" />
                              <span className="text-[10px] uppercase tracking-widest font-bold border-b border-accent/40 pb-0.5">{selectedArticle.category}</span>
                            </div>
                            <p className="text-ink/40 uppercase tracking-widest text-[10px] font-bold">{selectedArticle.date}</p>
                          </div>

                          {selectedArticle.audioUrl && (
                            <div className="pt-4 border-t border-white/5">
                              <CompactAudioPlayer 
                                audioUrl={selectedArticle.audioUrl} 
                                label="Version audio intégrale"
                              />
                            </div>
                          )}
                        </div>

                        <div className="hidden md:block pt-8 space-y-4">
                          <p className="text-[10px] uppercase tracking-widest font-bold text-ink/30">Partager</p>
                          <div className="flex gap-4">
                            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                              <Linkedin size={14} />
                            </button>
                            <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-accent hover:text-accent transition-colors">
                              <Mail size={14} />
                            </button>
                          </div>
                        </div>
                      </aside>

                      {/* Article Content */}
                      <div className="md:col-span-8 space-y-12">
                        <h2 className="text-4xl md:text-6xl font-display uppercase leading-[0.9] tracking-tighter">
                          {selectedArticle.title}
                        </h2>
                        
                        <div 
                          className="prose prose-invert max-w-none text-ink/80 font-light leading-relaxed text-lg space-y-8"
                          dangerouslySetInnerHTML={{ __html: selectedArticle.content || selectedArticle.excerpt }}
                        />
                      </div>
                    </div>

                    <div className="pt-12 border-t border-ink/10">
                      <button 
                        onClick={() => setSelectedArticle(null)}
                        className="flex items-center gap-2 text-ink/40 hover:text-accent transition-colors uppercase tracking-widest text-[10px] font-bold group"
                      >
                        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                        Retour aux actualités
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="article-list"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-16"
                  >
                    <div className="max-w-2xl">
                      <h2 className="text-4xl md:text-5xl font-display mb-4 uppercase">Actualités</h2>
                      <p className="text-ink/60 uppercase tracking-widest text-[10px] font-bold border-b border-accent/30 pb-1 inline-block">
                        Réflexions, coulisses & nouveautés
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
                      {ARTICLES.map((post, i) => (
                        <motion.article 
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          onClick={() => setSelectedArticle(post)}
                          className={`group cursor-pointer space-y-6 ${i === 0 ? 'md:col-span-2' : ''}`}
                        >
                          <div className={`overflow-hidden border border-ink/10 relative ${i === 0 ? 'aspect-[21/9]' : 'aspect-video'}`}>
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover bw-filter group-hover:scale-105 transition-transform duration-1000"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                              <div className="w-16 h-16 rounded-full border border-white/50 flex items-center justify-center backdrop-blur-sm">
                                <Play className="w-6 h-6 text-white fill-white ml-1" />
                              </div>
                            </div>
                            <div className="absolute top-6 left-6 bg-accent text-white text-[10px] uppercase tracking-widest font-bold px-4 py-1.5 shadow-lg">
                              {post.category}
                            </div>
                          </div>
                          <div className={`space-y-4 ${i === 0 ? 'max-w-3xl' : ''}`}>
                            <div className="space-y-3">
                              <p className="text-[10px] uppercase tracking-widest text-ink/40 font-bold">{post.date}</p>
                              <h3 className={`${i === 0 ? 'text-4xl md:text-5xl' : 'text-2xl'} font-display uppercase leading-[0.95]`}>
                                <span className="relative inline-block">
                                  {post.title}
                                  <div className="absolute -bottom-2 left-0 w-0 h-1 bg-accent transition-all duration-500 group-hover:w-full" />
                                </span>
                              </h3>
                              <p className={`text-ink/60 font-light leading-relaxed ${i === 0 ? 'text-xl' : 'line-clamp-2'}`}>
                                {post.excerpt}
                              </p>
                            </div>
                            
                            <div className="pt-4">
                              <button 
                                className="text-[10px] uppercase tracking-widest font-bold border-b border-ink/20 pb-1 group-hover:border-accent transition-colors flex items-center gap-2"
                              >
                                Découvrir l'article
                                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                              </button>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>

                    <div className="pt-20 border-t border-ink/10 text-center">
                      <p className="text-ink/40 italic font-serif">Plus d'articles à venir prochainement...</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.section>
          )}

          {currentPage === 'contact' && (
            <motion.section
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="min-h-[60vh] flex flex-col justify-center text-black"
            >
              <div className="grid lg:grid-cols-2 gap-20">
                <div className="space-y-12">
                  <h2 className="text-4xl md:text-5xl font-display leading-none tracking-tighter text-black uppercase">
                    Parlons <br /> de votre projet
                  </h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-black/40 font-bold">Localisation</div>
                        <div className="text-xl">Châlons-en-Champagne</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-black/40 font-bold">Téléphone</div>
                        <div className="text-xl">06 87 04 35 22</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-black/40 font-bold">Email</div>
                        <a href="mailto:contact@sandrinegillet.com" className="text-xl hover:underline underline-offset-4">
                          contact@sandrinegillet.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 group cursor-pointer">
                      <div className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-black/40 font-bold">LinkedIn</div>
                        <a 
                          href="https://www.linkedin.com/in/sandrine-gillet-06278129b/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xl hover:underline underline-offset-4"
                        >
                          Sandrine Gillet
                        </a>
                      </div>
                    </div>

                    <div className="pt-6">
                      <a 
                        href="https://calendly.com/bibgillet/rdv-offert"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full hover:scale-105 transition-transform font-semibold tracking-wider text-sm uppercase"
                      >
                        <Calendar className="w-5 h-5" />
                        Prendre rendez-vous
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-black p-12 text-white flex flex-col justify-between border border-black">
                  <div className="space-y-6">
                    <p className="text-3xl font-serif italic leading-snug">
                      "Le son est un vecteur d'émotion unique. Chaque territoire, chaque institution a une voix qui mérite d'être sculptée."
                    </p>
                  </div>
                  <div className="mt-12">
                    <div className="h-px bg-white/20 w-full mb-6" />
                    <div className="flex justify-between items-end">
                      <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-50">
                        © 2026 Sandrine Gillet
                      </div>
                      <div className="font-serif italic text-sm">
                        Journaliste & Créatrice Sonore
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>

      {/* Footer Decoration */}
      <footer className={`mt-20 border-t transition-colors duration-500 py-12 px-6 ${
        currentPage === 'contact' ? 'bg-black border-white/10 text-white' : 'bg-paper border-ink/5 text-ink'
      }`}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 items-start">
          <div className="space-y-4">
            <div className="text-2xl font-display tracking-tighter uppercase">SANDRINE GILLET</div>
            <p className="text-xs opacity-60 font-light leading-relaxed max-w-xs">
              Journaliste & Créatrice Sonore. Expertise en journalisme radio, podcasts institutionnels et portraits d'autorité.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Mentions Légales</h4>
            <div className="text-[10px] space-y-2 opacity-60 font-medium leading-relaxed">
              <p>Podcast & Co — Entreprise Individuelle</p>
              <p>SIRET : 98522615800014</p>
              <p>Siège social : Châlons-en-Champagne, France</p>
              <p>Hébergement : Google Cloud Run</p>
            </div>
          </div>

          <div className="space-y-4 md:text-right">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">Contact</h4>
            <div className="text-[10px] space-y-2 opacity-60 font-medium tracking-widest">
              <p>contact@sandrinegillet.com</p>
              <p>06 87 04 35 22</p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-current/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[8px] uppercase tracking-[0.5em] font-bold opacity-30">
            © 2026 Podcast & Co — Tous droits réservés
          </div>
          <div className="text-[8px] uppercase tracking-[0.5em] font-bold opacity-30">
            Esthétique Fine Arts — Portfolio Journaliste
          </div>
        </div>
      </footer>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
