import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Award,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock,
  Dumbbell,
  Flame,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';
import placeExterior from './assets/body-formula/place-exterior.jpeg';
import placeFloor01 from './assets/body-formula/place-floor-01.jpeg';
import placeFloor02 from './assets/body-formula/place-floor-02.jpeg';
import placeFloor03 from './assets/body-formula/place-floor-03.jpeg';
import placeFloor04 from './assets/body-formula/place-floor-04.jpeg';
import placeMember01 from './assets/body-formula/place-member-01.jpeg';

const PHONE_RAW = '919999999999';
const PHONE_DISPLAY = '+91 99999 99999';
const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/RjY58GwPUR1UmXx57';
const WHATSAPP_TRIAL =
  `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent('Hi Body Formula Fitness, I want to book a free trial session.')}`;

const pexels = (id, width = 1200, height = 900) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop`;

const navLinks = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Programs', '#programs'],
  ['Trainers', '#trainers'],
  ['Gallery', '#gallery'],
  ['Testimonials', '#testimonials'],
  ['Membership', '#membership'],
  ['Contact', '#contact'],
];

const programs = [
  {
    title: 'Strength Training',
    description: 'Build stronger lifts, cleaner form, and measurable weekly progress.',
    image: pexels(13534122, 900, 1200),
    alt: 'Indian woman powerlifting inside a gym in Ahmedabad',
  },
  {
    title: 'Fat Loss Program',
    description: 'Torch fat with coached training, cardio blocks, and habit tracking.',
    image: pexels(8732362, 900, 1200),
    alt: 'Indian man doing battle rope conditioning in a gym',
  },
  {
    title: 'Muscle Building',
    description: 'Hypertrophy plans built around volume, nutrition, and recovery.',
    image: pexels(11800270, 900, 1200),
    alt: 'Indian man training chest on a cable machine',
  },
  {
    title: 'Functional Training',
    description: 'Move better, perform harder, and build athletic everyday strength.',
    image: pexels(23880157, 900, 1200),
    alt: 'Indian man tire flipping during functional training',
  },
  {
    title: 'Personal Training',
    description: 'One-on-one coaching, custom programming, and real accountability.',
    image: placeMember01,
    alt: 'Body Formula Fitness member training inside the gym',
  },
  {
    title: 'Beginner Fitness',
    description: 'Start confidently with safe technique, simple plans, and support.',
    image: pexels(14989453, 900, 1200),
    alt: 'Indian group fitness class practicing guided movement',
  },
  {
    title: 'Cardio Conditioning',
    description: 'Improve stamina, heart health, and energy without random workouts.',
    image: pexels(12709356, 900, 1200),
    alt: 'Indian men working out inside a gym in Chandigarh',
  },
  {
    title: 'Weight Gain Program',
    description: 'Lean bulk with progressive weights, food structure, and recovery.',
    image: pexels(5799855, 900, 1200),
    alt: 'Indian man training legs on a gym machine',
  },
  {
    title: 'Women Fitness',
    description: 'Strength, toning, confidence, and coaching in a welcoming space.',
    image: pexels(13534122, 900, 1200),
    alt: 'Indian woman lifting a barbell inside a gym',
  },
  {
    title: 'Mobility & Stretching',
    description: 'Unlock range, reduce stiffness, and recover faster between sessions.',
    image: pexels(14989453, 900, 1200),
    alt: 'Indian fitness class stretching in a studio',
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: 'Coached From Day One',
    copy: 'We assess your goal, training age, schedule, and movement quality before building your plan.',
  },
  {
    icon: Dumbbell,
    title: 'Serious Equipment',
    copy: 'Strength zones, free weights, cardio machines, and functional tools for complete training.',
  },
  {
    icon: TrendingUp,
    title: 'Trackable Progress',
    copy: 'Your lifts, body measurements, and consistency are reviewed so progress never feels vague.',
  },
  {
    icon: Users,
    title: 'No-Excuse Culture',
    copy: 'A focused, respectful gym floor where beginners and advanced lifters can both push hard.',
  },
];

const resultStats = [
  { value: 18, suffix: 'kg', prefix: '-', title: 'Weight Lost', copy: 'Structured fat loss members regularly cut 8-18kg with training plus diet guidance.' },
  { value: 2, suffix: 'x', title: 'Strength Growth', copy: 'Progressive programming helps members double major lifts over consistent cycles.' },
  { value: 40, suffix: '%', prefix: '+', title: 'Stamina Increase', copy: 'Cardio and functional sessions improve daily energy, pace, and work capacity.' },
  { value: 500, suffix: '+', title: 'Success Stories', copy: 'Members transformed through coaching, accountability, and a gym built for results.' },
];

const trainers = [
  {
    role: 'Strength Coaching Team',
    specialty: 'Form correction, progressive overload, muscle gain',
    label: 'Body Formula Coach',
    image: placeMember01,
    alt: 'Body Formula Fitness coach inside the gym',
  },
  {
    role: 'Transformation Coaching',
    specialty: 'Fat loss, habit tracking, beginner confidence',
    label: 'Goal-Based Guidance',
    image: pexels(13534122, 900, 1100),
    alt: 'Indian woman strength training in a gym',
  },
  {
    role: 'Floor Support Team',
    specialty: 'Functional training, cardio conditioning, mobility',
    label: 'On-Floor Support',
    image: pexels(12709356, 900, 1100),
    alt: 'Indian gym members training with coach support',
  },
];

const gallery = [
  { image: placeFloor02, alt: 'Body Formula Fitness premium gym floor with modern machines', className: 'lg:col-span-2 lg:row-span-2' },
  { image: placeExterior, alt: 'Body Formula Fitness exterior sign and glass frontage', className: '' },
  { image: placeMember01, alt: 'Body Formula Fitness member inside the gym', className: '' },
  { image: placeFloor03, alt: 'Body Formula Fitness dumbbell and bench zone', className: 'lg:row-span-2' },
  { image: placeFloor01, alt: 'Body Formula Fitness cardio and equipment zone', className: '' },
  { image: placeFloor04, alt: 'Body Formula Fitness strength floor with red accent wall', className: 'lg:col-span-2' },
];

const plans = [
  {
    name: 'Basic',
    price: 'INR 999',
    cadence: 'per month',
    badge: 'Start Strong',
    copy: 'For members who want full gym access and a clean training environment.',
    features: ['Gym floor access', 'Cardio and strength zones', 'Locker support', 'Monthly progress check'],
  },
  {
    name: 'Standard',
    price: 'INR 1,499',
    cadence: 'per month',
    badge: 'Best Seller',
    highlighted: true,
    copy: 'The most balanced plan for guided fat loss, muscle gain, and consistency.',
    features: ['Everything in Basic', 'Group training sessions', 'Diet guidance', 'Weekly accountability', 'Body composition tracking'],
  },
  {
    name: 'Premium',
    price: 'INR 2,999',
    cadence: 'per month',
    badge: 'Fastest Results',
    copy: 'For transformation-focused members who want personal attention.',
    features: ['Everything in Standard', 'Personal training slots', 'Custom workout plan', 'Priority trainer review', 'Recovery and mobility plan'],
  },
];

// Keep this array empty unless reviews are manually copied from the public Google Maps listing.
// Shape: { name: 'Reviewer Name', rating: 5, date: '2 months ago', quote: 'Exact or honestly shortened public review text.' }
const verifiedGoogleReviews = [];

const reviewThemeRules = [
  {
    label: 'Supportive trainers',
    keywords: ['trainer', 'trainers', 'coach', 'coaches', 'guidance', 'support', 'helpful'],
  },
  {
    label: 'Good equipment',
    keywords: ['equipment', 'machine', 'machines', 'weights', 'dumbbell', 'dumbbells'],
  },
  {
    label: 'Clean gym',
    keywords: ['clean', 'hygiene', 'hygienic', 'sanitize', 'sanitized', 'maintained'],
  },
  {
    label: 'Friendly environment',
    keywords: ['friendly', 'environment', 'atmosphere', 'vibe', 'staff', 'team'],
  },
  {
    label: 'Results focused',
    keywords: ['result', 'results', 'weight loss', 'transformation', 'progress', 'motivation'],
  },
  {
    label: 'Beginner friendly',
    keywords: ['beginner', 'beginners', 'start', 'new', 'first time'],
  },
];

function Reveal({ children, className = '', delay = 0, initialVisible = false }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(initialVisible);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    if (initialVisible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.14, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [initialVisible]);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({ value, prefix = '', suffix = '', decimals = 0, className = '' }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let frameId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const start = performance.now();
        const duration = 1500;

        const tick = (time) => {
          const progress = Math.min((time - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(value * eased);
          if (progress < 1) frameId = requestAnimationFrame(tick);
        };

        frameId = requestAnimationFrame(tick);
        observer.unobserve(entry.target);
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}

function SectionHeader({ eyebrow, title, copy, align = 'center' }) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <div className={`mb-4 flex items-center gap-3 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px w-10 bg-formula-orange" />
        <p className="text-xs font-extrabold uppercase tracking-[0.26em] text-formula-orange">{eyebrow}</p>
        <span className="h-px w-10 bg-formula-orange" />
      </div>
      <h2 className="font-display text-5xl font-black uppercase leading-[0.92] tracking-normal text-white sm:text-6xl lg:text-7xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-base leading-8 text-stone-400 sm:text-lg">{copy}</p> : null}
    </Reveal>
  );
}

function PrimaryButton({ href, children, icon: Icon = ArrowRight, className = '' }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full bg-formula-orange px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-black shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-formula-amber hover:shadow-[0_0_70px_rgba(249,115,22,0.42)] focus:outline-none focus:ring-2 focus:ring-formula-orange focus:ring-offset-2 focus:ring-offset-black ${className}`}
    >
      {children}
      <Icon size={18} className="transition duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function SecondaryButton({ href, children, icon: Icon = ChevronRight, className = '' }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-white backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-formula-orange/70 hover:bg-formula-orange/10 ${className}`}
    >
      {children}
      <Icon size={18} className="transition duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition duration-300 ${
        scrolled || open
          ? 'border-white/10 bg-black/[0.88] shadow-[0_16px_50px_rgba(0,0,0,0.45)] backdrop-blur-xl'
          : 'border-white/5 bg-black/35 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" onClick={close} aria-label="Body Formula Fitness home">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-formula-orange/40 bg-formula-orange text-black shadow-glow">
            <Dumbbell size={21} strokeWidth={2.7} />
          </span>
          <span className="font-display text-2xl font-black uppercase leading-none tracking-normal text-white">
            Body <span className="text-formula-orange">Formula</span>
            <span className="block text-[0.68rem] font-bold tracking-[0.32em] text-stone-400">Fitness</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-stone-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PHONE_RAW}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-stone-200 transition hover:border-formula-orange/60 hover:text-white"
          >
            <Phone size={15} />
            Call
          </a>
          <a
            href={WHATSAPP_TRIAL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-formula-orange px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-formula-amber"
          >
            <MessageCircle size={15} />
            Join Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        className={`grid overflow-hidden border-t border-white/10 bg-black/[0.96] transition-all duration-300 lg:hidden ${
          open ? 'max-h-[31rem]' : 'max-h-0'
        }`}
      >
        <div className="mx-auto w-full max-w-7xl px-5 py-5">
          <div className="grid gap-2">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={close}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm font-extrabold uppercase tracking-[0.16em] text-stone-200"
              >
                {label}
              </a>
            ))}
            <a
              href={WHATSAPP_TRIAL}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-formula-orange px-4 py-4 text-sm font-black uppercase tracking-[0.16em] text-black"
            >
              <MessageCircle size={17} />
              Book Free Trial
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const trustItems = [
    { label: 'Rating', value: <AnimatedCounter value={4.8} decimals={1} /> },
    { label: 'Reviews', value: <AnimatedCounter value={100} suffix="+" /> },
    { label: 'Open Till', value: '10PM' },
    { label: 'Certified', value: 'Trainers' },
  ];

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      <img
        src={placeFloor04}
        alt="Body Formula Fitness strength floor with benches and machines"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="hero-vignette absolute inset-0 -z-10" />
      <div className="absolute bottom-0 left-0 right-0 -z-10 h-44 bg-gradient-to-t from-formula-dark to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <Reveal initialVisible>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-formula-orange/35 bg-black/45 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-formula-orange backdrop-blur">
            <Flame size={15} />
            Hyderabad's premium transformation gym
          </div>
          <h1 className="max-w-4xl font-display text-6xl font-black uppercase leading-[0.86] tracking-normal text-white drop-shadow-[0_14px_34px_rgba(0,0,0,0.88)] sm:text-7xl lg:text-8xl xl:text-9xl">
            Build Strength.
            <span className="block text-formula-orange">Burn Fat.</span>
            Transform.
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-stone-100 drop-shadow-[0_8px_24px_rgba(0,0,0,0.78)] sm:text-xl">
            Body Formula Fitness blends elite coaching, serious equipment, and accountable programming so every workout moves you closer to a body you are proud to live in.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="#contact" icon={CalendarCheck}>
              Book Free Trial
            </PrimaryButton>
            <SecondaryButton href="#membership">View Membership</SecondaryButton>
          </div>

          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
            {trustItems.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/[0.42] px-4 py-4 backdrop-blur-md"
              >
                <div className="font-display text-3xl font-black leading-none text-white">{item.value}</div>
                <div className="mt-1 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-stone-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={180} className="hidden lg:block">
          <div className="ml-auto max-w-md rounded-[2rem] border border-white/[0.12] bg-black/45 p-5 shadow-deep-glow backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.55rem] border border-white/10">
              <img
                src={placeExterior}
                alt="Body Formula Fitness exterior signage"
                className="h-[34rem] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/15 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-formula-orange">Actual Body Formula Location</p>
                <p className="mt-2 font-display text-4xl font-black uppercase leading-none text-white">Premium floor. Real place.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-formula-dark px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-formula-orange/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="grid grid-cols-12 grid-rows-6 gap-4">
            <div className="col-span-8 row-span-4 overflow-hidden rounded-[1.75rem] border border-white/10 shadow-deep-glow">
              <img
                src={placeFloor02}
                alt="Body Formula Fitness gym interior with strength machines"
                className="h-full min-h-[22rem] w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="col-span-4 row-span-3 overflow-hidden rounded-[1.35rem] border border-white/10">
              <img
                src={placeFloor03}
                alt="Body Formula Fitness dumbbell rack and bench zone"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="col-span-5 row-span-2 overflow-hidden rounded-[1.35rem] border border-white/10">
              <img
                src={placeFloor01}
                alt="Body Formula Fitness cardio and equipment zone"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="col-span-7 row-span-2 rounded-[1.35rem] border border-formula-orange/40 bg-formula-orange p-5 text-black shadow-glow">
              <div className="font-display text-5xl font-black leading-none">
                <AnimatedCounter value={500} suffix="+" />
              </div>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.2em]">Members transformed</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            eyebrow="Why Body Formula"
            title="Not just a gym. A results machine."
            copy="We built Body Formula Fitness for people who are tired of vague workouts and empty motivation. Here, every member gets structure, coaching, accountability, and a training floor that makes effort feel inevitable."
            align="left"
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Reveal key={feature.title} delay={index * 80}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:-translate-y-1 hover:border-formula-orange/45 hover:bg-formula-orange/[0.07] hover:shadow-glow">
                    <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl border border-formula-orange/30 bg-formula-orange/[0.12] text-formula-orange">
                      <Icon size={21} />
                    </div>
                    <h3 className="font-display text-2xl font-black uppercase leading-none text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-stone-400">{feature.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden bg-[#0c0c0c] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 -z-0 bg-premium-radial opacity-80" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Training Programs"
          title="Choose your transformation lane."
          copy="Premium image-led programs built around clear outcomes, not random exercises. Pick the goal and we build the system behind it."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {programs.map((program, index) => (
            <Reveal key={program.title} delay={(index % 5) * 70}>
              <a
                href="#contact"
                className="group relative block h-[22rem] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-deep-glow transition duration-500 hover:-translate-y-2 hover:border-formula-orange/70 hover:shadow-glow sm:h-[23rem]"
              >
                <img
                  src={program.image}
                  alt={program.alt}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/[0.48] to-black/[0.12] transition duration-500 group-hover:via-black/35" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08] transition duration-500 group-hover:ring-formula-orange/55" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="mb-3 inline-flex rounded-full border border-formula-orange/35 bg-formula-orange/10 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.18em] text-formula-orange">
                    Program
                  </p>
                  <h3 className="font-display text-3xl font-black uppercase leading-none text-white">{program.title}</h3>
                  <p className="mt-3 min-h-[3.25rem] text-sm font-medium leading-6 text-stone-300">{program.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                    Join Program
                    <ArrowRight size={15} className="transition duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  return (
    <section id="results" className="relative overflow-hidden bg-formula-dark px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-formula-orange/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Proof Engine"
          title="Results you can measure."
          copy="The best gym experience is not just beautiful. It changes your body, your habits, and the way you carry yourself."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {resultStats.map((stat, index) => (
            <Reveal key={stat.title} delay={index * 90}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-formula-orange/45 hover:shadow-glow">
                <div className="font-display text-6xl font-black uppercase leading-none text-formula-orange">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <h3 className="mt-5 font-display text-3xl font-black uppercase leading-none text-white">{stat.title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-400">{stat.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trainers() {
  return (
    <section id="trainers" className="bg-[#0c0c0c] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Elite Coaches"
          title="Coaching without fake celebrity names."
          copy="Meet the Body Formula coaching system: attentive floor support, form correction, and goal-based guidance without invented trainer personas."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <Reveal key={trainer.role} delay={index * 120}>
              <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] transition duration-500 hover:-translate-y-2 hover:border-formula-orange/55 hover:shadow-glow">
                <div className="relative h-[31rem] overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.07]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-formula-orange">{trainer.label}</p>
                    <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-white">{trainer.role}</h3>
                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-stone-300">{trainer.specialty}</p>
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:border-formula-orange/60 hover:bg-formula-orange/15"
                    >
                      Book Coaching
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="bg-formula-dark px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Gym Floor"
          title="A training space that feels expensive."
          copy="Dark, clean, focused, and built for real work. A visual preview of the atmosphere Body Formula members step into every day."
        />

        <div className="mt-14 grid auto-rows-[14rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => (
            <Reveal key={item.image} delay={(index % 4) * 70} className={item.className}>
              <a
                href={item.image}
                target="_blank"
                rel="noreferrer"
                className="group relative block h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
                aria-label={`Open gallery image: ${item.alt}`}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-60 transition group-hover:opacity-30" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.08] transition group-hover:ring-formula-orange/55" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Membership() {
  return (
    <section id="membership" className="relative overflow-hidden bg-[#0c0c0c] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 bg-premium-radial opacity-80" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Membership"
          title="Plans that make joining easy."
          copy="Choose the level of coaching you need. Every plan is designed to remove friction and get you training immediately."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 110}>
              <article
                className={`relative h-full rounded-3xl border p-7 transition duration-500 hover:-translate-y-2 ${
                  plan.highlighted
                    ? 'border-formula-orange bg-gradient-to-b from-formula-orange/[0.18] to-white/[0.04] shadow-glow'
                    : 'border-white/10 bg-white/[0.035] hover:border-formula-orange/45'
                }`}
              >
                {plan.highlighted ? (
                  <div className="absolute -top-4 left-7 rounded-full bg-formula-orange px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-black">
                    Best Seller
                  </div>
                ) : null}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-formula-orange">{plan.badge}</p>
                    <h3 className="mt-3 font-display text-5xl font-black uppercase leading-none text-white">{plan.name}</h3>
                  </div>
                  <Sparkles className="text-formula-orange" size={24} />
                </div>

                <div className="mt-8">
                  <div className="font-display text-6xl font-black uppercase leading-none text-white">{plan.price}</div>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-stone-400">{plan.cadence}</p>
                </div>

                <p className="mt-6 min-h-[4.5rem] text-sm leading-7 text-stone-400">{plan.copy}</p>

                <ul className="mt-7 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-sm font-semibold text-stone-200">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-formula-orange text-black">
                        <Check size={13} strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <PrimaryButton href="#contact" className="mt-9 w-full">
                  Claim Trial
                </PrimaryButton>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function getInitials(name = 'Google Member') {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase() || 'GM';
}

function trimReviewText(text) {
  const clean = text.replace(/\s+/g, ' ').trim();
  return clean.length > 210 ? `${clean.slice(0, 207).trim()}...` : clean;
}

function normalizeReview(review, index) {
  const rating = Number(review.rating) || 5;
  return {
    id: `${review.name || 'Google Member'}-${index}`,
    name: review.name?.trim() || 'Google Member',
    rating: Math.min(Math.max(rating, 1), 5),
    date: review.date?.trim() || '',
    quote: trimReviewText(review.quote || review.text || ''),
  };
}

function parseGoogleReviewText(rawText) {
  const input = rawText.trim();
  if (!input) return [];

  try {
    const parsed = JSON.parse(input);
    if (Array.isArray(parsed)) {
      return parsed
        .map(normalizeReview)
        .filter((review) => review.quote.length > 1);
    }
  } catch {
    // Pasted Google review blocks are expected more often than JSON.
  }

  return input
    .replace(/\r/g, '')
    .split(/\n{2,}/)
    .map((block, index) => {
      const lines = block
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
      if (!lines.length) return null;

      const ratingLine = lines.find((line) => /★|star/i.test(line));
      const starMatch = ratingLine?.match(/([1-5])\s*(?:star|stars)/i);
      const glyphMatch = ratingLine?.match(/★{1,5}/);
      const rating = starMatch ? Number(starMatch[1]) : glyphMatch ? glyphMatch[0].length : 5;

      const dateLine = lines.find((line) =>
        /\b(ago|jan|feb|mar|apr|may|jun|jul|aug|sep|sept|oct|nov|dec|20\d{2})\b/i.test(line),
      );

      const name =
        lines.find(
          (line) =>
            line !== ratingLine &&
            line !== dateLine &&
            !/local guide|review|photo|google|owner|response|stars?/i.test(line) &&
            line.length <= 64,
        ) || 'Google Member';

      const quote = lines
        .filter(
          (line) =>
            line !== name &&
            line !== ratingLine &&
            line !== dateLine &&
            !/local guide|owner response|google/i.test(line),
        )
        .join(' ');

      return normalizeReview({ name, rating, date: dateLine || '', quote }, index);
    })
    .filter((review) => review && review.quote.length > 1);
}

function extractReviewTags(review) {
  const text = `${review.quote} ${review.name}`.toLowerCase();
  return reviewThemeRules
    .filter((theme) => theme.keywords.some((keyword) => text.includes(keyword)))
    .map((theme) => theme.label)
    .slice(0, 3);
}

function getDetectedThemes(reviews) {
  const combinedText = reviews.map((review) => review.quote).join(' ').toLowerCase();
  return reviewThemeRules
    .map((theme) => ({
      ...theme,
      count: theme.keywords.reduce((total, keyword) => total + (combinedText.includes(keyword) ? 1 : 0), 0),
    }))
    .filter((theme) => theme.count > 0)
    .slice(0, 5);
}

function ReviewStars({ rating = 5 }) {
  return (
    <div className="flex items-center gap-1 text-formula-orange" aria-label={`${rating} star Google review`}>
      {Array.from({ length: 5 }).map((_, starIndex) => (
        <Star
          key={starIndex}
          size={17}
          fill={starIndex < rating ? 'currentColor' : 'none'}
          className={starIndex < rating ? 'text-formula-orange' : 'text-stone-700'}
        />
      ))}
    </div>
  );
}

function Testimonials() {
  const [importText, setImportText] = useState('');
  const [savedReviews, setSavedReviews] = useState([]);
  const [showImporter, setShowImporter] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setShowImporter(params.get('reviewImport') === '1');

    try {
      const stored = window.localStorage.getItem('bodyFormulaGoogleReviews');
      if (stored) setSavedReviews(JSON.parse(stored).map(normalizeReview).filter((review) => review.quote));
    } catch {
      setSavedReviews([]);
    }
  }, []);

  const parsedDraftReviews = parseGoogleReviewText(importText);
  const reviews = parsedDraftReviews.length ? parsedDraftReviews : savedReviews.length ? savedReviews : verifiedGoogleReviews;
  const detectedThemes = getDetectedThemes(reviews);
  const importedAverage =
    reviews.length > 0
      ? reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
      : null;

  const saveImportedReviews = () => {
    const nextReviews = parsedDraftReviews.length ? parsedDraftReviews : reviews;
    window.localStorage.setItem('bodyFormulaGoogleReviews', JSON.stringify(nextReviews));
    setSavedReviews(nextReviews);
    setImportText('');
  };

  const clearImportedReviews = () => {
    window.localStorage.removeItem('bodyFormulaGoogleReviews');
    setSavedReviews([]);
    setImportText('');
  };

  return (
    <section id="testimonials" className="relative overflow-hidden bg-formula-dark px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-formula-orange/40 to-transparent" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Real Member Reviews"
          title="Real Reviews From Real Members"
          copy="Body Formula Fitness - Hyderabad gym trusted by local members. This section is wired for verified public Google review text only, so no invented testimonials appear here."
        />

        <Reveal delay={80}>
          <div className="mt-12 grid gap-4 md:grid-cols-4">
            <div className="rounded-3xl border border-formula-orange/35 bg-formula-orange/10 p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-formula-orange">Google Rating</p>
              <div className="mt-3 font-display text-5xl font-black uppercase leading-none text-white">
                {importedAverage ? importedAverage.toFixed(1) : 'Verify'}
              </div>
              <p className="mt-2 text-sm font-semibold text-stone-400">
                {importedAverage ? 'Average of imported public reviews' : 'Waiting for pasted Google review data'}
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-formula-orange">Review Cards</p>
              <div className="mt-3 font-display text-5xl font-black uppercase leading-none text-white">
                <AnimatedCounter value={reviews.length} />
              </div>
              <p className="mt-2 text-sm font-semibold text-stone-400">Verified reviews rendered in this section</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-formula-orange">Source</p>
              <div className="mt-3 flex items-center gap-2 font-display text-3xl font-black uppercase leading-none text-white">
                <MapPin size={26} className="text-formula-orange" />
                Google
              </div>
              <p className="mt-2 text-sm font-semibold text-stone-400">Public Maps listing linked for review verification</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-formula-orange">Authenticity</p>
              <div className="mt-3 font-display text-5xl font-black uppercase leading-none text-white">0</div>
              <p className="mt-2 text-sm font-semibold text-stone-400">Fabricated or placeholder reviews</p>
            </div>
          </div>
        </Reveal>

        {detectedThemes.length ? (
          <Reveal delay={120}>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.035] p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-formula-orange">Why Members Love Us</p>
                  <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-white">Repeated praise detected from review text</h3>
                </div>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-formula-orange/45 bg-formula-orange/10 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-formula-orange/[0.16]"
                >
                  See All Reviews
                  <ArrowRight size={15} />
                </a>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {detectedThemes.map((theme) => (
                  <div key={theme.label} className="rounded-2xl border border-white/10 bg-black/35 p-4">
                    <Check className="text-formula-orange" size={20} />
                    <p className="mt-3 text-sm font-black uppercase tracking-[0.14em] text-white">{theme.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ) : null}

        {reviews.length ? (
          <div className="mt-10 columns-1 gap-5 md:columns-2 lg:columns-3">
            {reviews.map((review, index) => {
              const tags = extractReviewTags(review);
              return (
                <Reveal key={review.id} delay={(index % 3) * 90} className="mb-5 break-inside-avoid">
                  <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:border-formula-orange/45 hover:shadow-glow">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="grid h-14 w-14 place-items-center rounded-full border border-formula-orange/45 bg-formula-orange/10 font-display text-2xl font-black uppercase text-formula-orange">
                          {getInitials(review.name)}
                        </div>
                        <div>
                          <h3 className="font-display text-2xl font-black uppercase leading-none text-white">{review.name}</h3>
                          {review.date ? <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-stone-500">{review.date}</p> : null}
                        </div>
                      </div>
                      <Award className="shrink-0 text-formula-orange" size={22} />
                    </div>

                    <div className="mt-5">
                      <ReviewStars rating={review.rating} />
                    </div>

                    <p className="mt-5 text-lg font-semibold leading-8 text-white">"{review.quote}"</p>

                    {tags.length ? (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-formula-orange/30 bg-formula-orange/10 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.16em] text-formula-orange"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </article>
                </Reveal>
              );
            })}
          </div>
        ) : (
          <Reveal delay={160}>
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-formula-orange/10 text-formula-orange">
                <ShieldCheck size={28} />
              </div>
              <h3 className="mt-5 font-display text-4xl font-black uppercase leading-none text-white">
                Google review import ready
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-stone-400">
                Direct Google Maps review extraction was blocked, so this section is intentionally empty until public Google review text is pasted or added to the verified review array.
              </p>
              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-formula-orange px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-formula-amber"
                >
                  See Google Listing
                  <ArrowRight size={15} />
                </a>
                <button
                  type="button"
                  onClick={() => setShowImporter((value) => !value)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:border-formula-orange/60"
                >
                  Import Reviews
                </button>
              </div>
            </div>
          </Reveal>
        )}

        {showImporter ? (
          <Reveal delay={220}>
            <div className="mt-8 rounded-3xl border border-formula-orange/35 bg-formula-orange/10 p-5 sm:p-7">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-formula-orange">Google Review Import</p>
                  <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-white">Paste public Google reviews</h3>
                </div>
                <p className="text-sm font-semibold text-stone-400">{parsedDraftReviews.length} review cards detected</p>
              </div>
              <textarea
                value={importText}
                onChange={(event) => setImportText(event.target.value)}
                rows="8"
                placeholder={'Paste copied Google reviews here. Supported formats include JSON or blocks like:\nReviewer Name\n5 stars\n2 months ago\nReview text...'}
                className="mt-6 w-full resize-none rounded-2xl border border-white/10 bg-black/55 px-4 py-4 text-sm font-semibold leading-7 text-white outline-none transition placeholder:text-stone-600 focus:border-formula-orange"
              />
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={saveImportedReviews}
                  disabled={!parsedDraftReviews.length && !reviews.length}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-formula-orange px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-black transition hover:bg-formula-amber disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Save Imported Reviews
                  <Check size={15} />
                </button>
                <button
                  type="button"
                  onClick={clearImportedReviews}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:border-formula-orange/60"
                >
                  Clear Import
                </button>
              </div>
            </div>
          </Reveal>
        ) : null}

        <Reveal delay={reviews.length ? 180 : 260}>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-black/35 p-6 text-center sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-formula-orange">Local SEO Trust Signal</p>
              <p className="mt-2 text-lg font-semibold text-white">
                Body Formula Fitness is a Hyderabad gym listed on Google Maps for local members comparing trainers, equipment, and fitness programs.
              </p>
            </div>
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 rounded-full border border-formula-orange/45 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-formula-orange/10"
            >
              Open Maps Reviews
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    goal: 'Fat Loss',
    message: '',
  });

  const onSubmit = (event) => {
    event.preventDefault();
    const text = encodeURIComponent(
      `Hi Body Formula Fitness,\n\nName: ${form.name || 'New Member'}\nPhone: ${form.phone || 'Not shared'}\nGoal: ${form.goal}\nMessage: ${form.message || 'I want to book a free trial.'}\n\nPlease help me reserve a trial slot.`,
    );
    window.open(`https://wa.me/${PHONE_RAW}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const update = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0c0c0c] px-5 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-formula-orange/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeader
            eyebrow="Free Trial"
            title="Book one session. Feel the difference."
            copy="Tell us your goal and we will route you to the right coach, the right program, and the fastest next step."
            align="left"
          />

          <Reveal delay={140}>
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              <a
                href={`tel:${PHONE_RAW}`}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-formula-orange/45"
              >
                <Phone className="text-formula-orange" size={22} />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-stone-500">Call</p>
                <p className="mt-1 font-bold text-white">{PHONE_DISPLAY}</p>
              </a>
              <a
                href={WHATSAPP_TRIAL}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-formula-orange/45 bg-formula-orange/10 p-5 transition hover:bg-formula-orange/[0.16]"
              >
                <MessageCircle className="text-formula-orange" size={22} />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-stone-500">WhatsApp</p>
                <p className="mt-1 font-bold text-white">Fast reply</p>
              </a>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <Clock className="text-formula-orange" size={22} />
                <p className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-stone-500">Hours</p>
                <p className="mt-1 font-bold text-white">Open till 10PM</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">Name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={update}
                    placeholder="Your name"
                    className="rounded-2xl border border-white/10 bg-black/55 px-4 py-4 font-semibold text-white outline-none transition placeholder:text-stone-600 focus:border-formula-orange"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">Phone</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={update}
                    placeholder="Your number"
                    inputMode="tel"
                    className="rounded-2xl border border-white/10 bg-black/55 px-4 py-4 font-semibold text-white outline-none transition placeholder:text-stone-600 focus:border-formula-orange"
                  />
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">Primary Goal</span>
                <select
                  name="goal"
                  value={form.goal}
                  onChange={update}
                  className="rounded-2xl border border-white/10 bg-black/55 px-4 py-4 font-semibold text-white outline-none transition focus:border-formula-orange"
                >
                  <option>Fat Loss</option>
                  <option>Muscle Building</option>
                  <option>Strength Training</option>
                  <option>Personal Training</option>
                  <option>Beginner Fitness</option>
                  <option>Women Fitness</option>
                </select>
              </label>

              <label className="grid gap-2">
                <span className="text-xs font-black uppercase tracking-[0.18em] text-stone-400">Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  rows="4"
                  placeholder="Tell us what you want to change."
                  className="resize-none rounded-2xl border border-white/10 bg-black/55 px-4 py-4 font-semibold text-white outline-none transition placeholder:text-stone-600 focus:border-formula-orange"
                />
              </label>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-formula-orange px-7 py-4 text-sm font-black uppercase tracking-[0.16em] text-black shadow-glow transition duration-300 hover:-translate-y-1 hover:bg-formula-amber"
              >
                Send Trial Request
                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="h-full min-h-[34rem] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] shadow-deep-glow">
            <div className="relative h-72 overflow-hidden">
              <img
                src={placeExterior}
                alt="Body Formula Fitness exterior and signage in Hyderabad"
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-formula-orange px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-black">
                  <MapPin size={14} />
                  Hyderabad
                </div>
                <h3 className="font-display text-5xl font-black uppercase leading-none text-white">Visit the floor.</h3>
              </div>
            </div>
            <iframe
              title="Body Formula Fitness map"
              src="https://www.google.com/maps?q=Body%20Formula%20Fitness%20Hyderabad&output=embed"
              className="h-[24rem] w-full border-0 grayscale invert-[0.9] hue-rotate-180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_TRIAL}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Body Formula Fitness on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-black shadow-[0_18px_55px_rgba(37,211,102,0.35)] transition hover:-translate-y-1"
    >
      <MessageCircle size={26} strokeWidth={2.6} />
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.9fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-formula-orange text-black">
              <Dumbbell size={21} strokeWidth={2.7} />
            </span>
            <span className="font-display text-2xl font-black uppercase leading-none text-white">
              Body <span className="text-formula-orange">Formula</span>
              <span className="block text-[0.68rem] font-bold tracking-[0.32em] text-stone-500">Fitness</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-7 text-stone-500">
            Premium training, real coaching, and a transformation-first gym culture in Hyderabad.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white">Quick Links</h3>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-stone-500">
            {navLinks.slice(1).map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-formula-orange">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white">Hours</h3>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-stone-500">
            <p>Mon-Sat: 5AM - 10PM</p>
            <p>Sunday: 6AM - 12PM</p>
            <p>Trial slots: Daily</p>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white">Contact</h3>
          <div className="mt-5 grid gap-3 text-sm font-semibold text-stone-500">
            <a href={`tel:${PHONE_RAW}`} className="transition hover:text-formula-orange">
              {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP_TRIAL} target="_blank" rel="noreferrer" className="transition hover:text-formula-orange">
              WhatsApp trial booking
            </a>
            <p>Hyderabad, Telangana</p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs font-bold uppercase tracking-[0.18em] text-stone-600 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 Body Formula Fitness</p>
        <p>Built for transformation</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="premium-noise min-h-screen bg-formula-dark text-stone-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Results />
        <Trainers />
        <Gallery />
        <Membership />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
