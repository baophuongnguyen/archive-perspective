// --- INTRO & SIGNIFICANCE ---
import bookCover from './assets/intro/Bong_Lau_Thoi_Hoa_Lua_cover.jpg';
import veteransGroup from './assets/intro/regiment-38-group.jpg';
import grandpaAnnotated from './assets/intro/regiment-38-group-funny.jpg'
import USbookCover from './assets/intro/chaplain_webb_diary_cover.png';

// --- METHODOLOGY ---
import scanningStation from './assets/methodology/My_diy_scanning_station.jpg';
import scanningIllustration from './assets/methodology/person-scanning-a-book-using-their-phone.avif';
import VoyantToolsInterface from './assets/methodology/Voyant_tools_interface.png';
import VietOCRdemonstration from './assets/methodology/Viet_ocr_demonstration.png';
import VietOCRpoem from './assets/methodology/Viet_OCR_poem.png';
import IntegrityProtocol from './assets/methodology/Integrity_Protocols.png';

// --- ANALYSIS (VIETNAM CORPUS) ---
import vnDongChiContext from './assets/analysis/VN_đồng_chí_in_context.png';
import vnQueContext from './assets/analysis/BLTHL_concept_of_que.png';
import vnRelationalIdentity from './assets/analysis/BLTHL_relational_identity.png';
import vnLifeGoalEvidence from './assets/analysis/BLTHL_relational_identity_2.png';
import vnIdentityWe from './assets/analysis/VN_identity_we.png';
import vnComradesCount from './assets/analysis/VN_referring_to_comrades_count.png';
import vnFreqTable from './assets/analysis/VN_perspective_word_frequency.png';

// --- ANALYSIS (US CORPUS) ---
import usEmotionsChart from './assets/analysis/BLTHL_the_concept_of_que.png'; // Note: The file name seems to be a mixup, but the chart is for US emotions
import usPhysicalityContext from './assets/analysis/US_phisicality_and_body.png';

// --- REFLECTION ---
import geminiAwardPhoto from './assets/gemini-award.png';
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Heart,
  Database, 
  PersonStanding,
  User, 
  Users,
  Quote,
  CheckCircle2,
  AlertCircle,
  History,
  Menu,
  X,
  ArrowRight,
  FileText,
  Book,
  Search,
  Layers,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';

const SectionHeading = ({ children, subtitle, light = false }) => (
  <div className="mb-12">
    <h2 className={`text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight ${light ? 'text-stone-100' : 'text-stone-900'}`}>
      {children}
    </h2>
    {subtitle && <p className={`text-lg max-w-3xl font-light ${light ? 'text-stone-400' : 'text-stone-600'}`}>{subtitle}</p>}
    <div className={`h-1.5 w-24 mt-6 ${light ? 'bg-stone-500' : 'bg-stone-800'}`}></div>
  </div>
);
const SignificanceSection = () => (
  <div className="mt-16 pt-12 border-t border-stone-200">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h3 className="text-sm font-black uppercase tracking-widest text-emerald-800 flex items-center gap-2">
          <Heart className="w-4 h-4" /> Personal Significance
        </h3>
        
        {/* Added the book cover next to the title */}
        <div className="flex items-center gap-4 bg-white p-3 rounded border border-stone-100 shadow-sm">
          <img src={bookCover} alt="Book Cover" className="w-12 h-16 object-cover rounded shadow-sm" />
          <div>
            <p className="font-serif text-lg italic text-stone-800 leading-snug">
              "Bông Lau Thời Hoa Lửa"
            </p>
            <p className="text-[10px] uppercase tracking-tighter text-stone-400 font-bold">Original Archive</p>
          </div>
        </div>

        <p className="text-stone-600 text-sm leading-relaxed">
          This project carries deep personal weight, this is the memoir of a team member's grandfather 
          and his comrades in Regiment 38.

          Regiment 38 was a legendary artillery unit in the Vietnam War, particularly in the battle of Quang Tri citadel (yes, the one in Mua Do movie). 
          Phuong's grandfather, a soldier in this regiment, often recounted stories of brotherhood and resilience that shaped her understanding 
          of identity and sacrifice. By digitizing this memoir, we not only honor their legacy but also provide a window into the collective 
          experience of war, contrasting it with the individualistic narratives found in American diaries. 
          This project is a tribute to their memory and a testament to the power of language in shaping our understanding of history.
        </p>
      </div>

      <div className="bg-stone-100 p-2 rounded-lg shadow-inner relative group cursor-pointer">
        {/* CHANGED THIS: Now uses the 'veteransGroup' nickname instead of the URL */}
        <img 
          src={veteransGroup} 
          alt="Veterans of Regiment 38" 
          className="rounded shadow-md grayscale transition-opacity duration-700 opacity-100 group-hover:opacity-10"
        />
        <div className="absolute inset-2 flex items-center justify-center transition-opacity duration-700 opacity-0 group-hover:opacity-100">
        <img
            src={grandpaAnnotated} 
            alt="Grandfather Highlighted" 
            className="rounded shadow-xl transform scale-95 group-hover:scale-200 transition-transform duration-700"
          />
        </div>
        <p className="text-[10px] big-stone-400 mt-3 uppercase text-center font-bold tracking-widest">
          The Veterans of Regiment 38
        </p>
        <p className="text-[10px] text-stone-400 mt-3 uppercase text-center font-bold tracking-widest">
          GUESS WHO IS MY GRANDPA, HOVER TO SEE THE ANSWER!
        </p>
      </div>
    </div>
  </div>
);

const App = () => {
  const [activePerspective, setActivePerspective] = useState('vietnam');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeInsight, setActiveInsight] = useState('noise');
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const insights = {
    digitization: {
      title: "Physical Digitization",
      content: "Scanning ~200 pages required balancing speed with quality. We found that AI-assisted tools like CamScanner outperformed basic scanners (like Microsoft 365 scan function) by auto-aligning pages and removing 'finger obstructions.' Most importantly, scan quality peaked when using a dark, flat background (a tablet cover) and soft window lighting to eliminate glare.",
      icon: <Search className="w-5 h-5" />, // This uses the Search icon from your imports
      image: scanningIllustration // This is the new image you imported for the scanning process
    },
    noise: {
      title: "OCR Noise & Diacritics",
      content: "The primary data source consisted of scanned Vietnamese books where image quality led to significant noise in the raw VietOCR output (VietOCR is the only no-paywall, work with Vietnamese, and can do batch OCR, so we didn't have another choice). Diacritics were frequently misinterpreted or omitted, necessitating a post-OCR correction process with strict reference to the original scans.",
      icon: <AlertCircle className="w-5 h-5" />,
      image: VietOCRdemonstration
    },
    segments: {
      title: "Broken Segmentation",
      content: "Memoirs frequently include poem sections. OCR tools struggled with line segmentation in these areas, often breaking words across line breaks or merging verses into single blocks. Manual intervention was required to maintain the linguistic integrity of these sections.",
      icon: <Layers className="w-5 h-5" />,
      image: VietOCRpoem
    },
    integrity: {
      title: "Integrity Protocols",
      content: "To prevent AI hallucinations, we utilized strict verification constraints. Illegible text was never inferred; instead, we used standardized tags: [UNCLEAR], [MISSING], or [AMBIGUOUS]. This ensures the dataset remains a transparent and auditable record.",
      icon: <ShieldCheck className="w-5 h-5" />,
      image: IntegrityProtocol
    }
  };

  const detailedData = {
    vietnam: {
      source: "Bông Lau Thời Hoa Lửa (Memoir)",
      corpusInfo: "29,202 total words | 3,380 unique word forms",
      stats: [
        { label: "Đồng chí (Comrade)", value: 173 },
        { label: "Chúng tôi (Collective We)", value: 138 },
        { label: "Ta (Self/Collective)", value: 118 },
        { label: "Bảo vệ (Protect)", value: 30 },
        { label: "Hy sinh (Sacrifice)", value: 25 },
        { label: "Anh em (Brothers/Kinship)", value: 23 },
        { label: "Đồng đội (Teammates)", value: 22 },
      ],
      qualitative: [
        { title: "Relational Identity", 
          text: "Identity is constructed as collective and relational. The soldier is defined through belonging to a unit (Trung đoàn 38) or force. The 'I' is largely non-psychological, functioning as a component of shared history.", 
          evidence: vnRelationalIdentity
        },
        { title: "The Concept of 'Quê'", 
          text: "Soldiers mention their homeland when talking about the endpoint of the war or identifying a soldier by their homeland. It represents a shared origin and a motivation for communal protection rather than an isolated personal longing.", 
          evidence: vnQueContext
        },
        { title: "Life Goals & Protection", text: "Fighting for the nation ('đất nước') was the soldiers' life goal. For the soldiers, their nation is sacred and is what they are BORN to protect.", evidence: vnLifeGoalEvidence }
      ]
    },
    us: {
      source: "Chaplain Webb & Earl Pike (Diaries)",
      corpusInfo: "Webb: 22,187 words | Pike: Short Diary (386 'I' count)",
      stats: [
        { label: "I (First Person Singular)", value: 1832 },
        { label: "Me / My (Personal)", value: 541 },
        { label: "We (Action-based)", value: 451 },
        { label: "Men (External Grouping)", value: 127 },
        { label: "Home", value: 63 },
        { label: "Family / You", value: 48 },
      ],
      qualitative: [
        { title: "The Introspective 'I'", text: "The 'I' dominates the corpus. The diaries function as a private sanctuary for processing fear and loneliness. Phrases like 'I felt', 'I remember', and 'I know' are everywhere throughout the Webb diary.", evidence: usEmotionsChart },
        { title: "Physicality & Body", text: "There is a frequent focus on the physical self ('my body', 'my feet'). Identity is grounded in the individual's sensory experience of the war rather than a unit's collective progress.",evidence: usPhysicalityContext },
        { title: "Personal Purpose", text: "The search for purpose is framed through the lens of individual faith and personal family. Webb notes: 'This is not for publication... it is for family. This is for you!'", evidence: null }
      ]
    }
  };

  const navLinks = [
    { name: 'Introduction', href: '#intro' },
    { name: 'Methodology', href: '#methodology' },
    { name: 'Analysis', href: '#analysis' },
    { name: 'Conclusion', href: '#conclusion' },
    { name: 'Reflection', href: '#reflection' }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF9] text-stone-900 font-sans selection:bg-stone-200 leading-relaxed scroll-smooth">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-12 py-5 flex justify-between items-center ${scrolled ? 'bg-[#FDFCF9]/95 backdrop-blur-md border-b border-stone-200' : 'bg-transparent'}`}>
        <div className="flex items-center gap-3">
          <History className="w-6 h-6 text-stone-800" />
          <span className="font-serif font-black tracking-tighter text-xl uppercase">An Analysis of Wartime Identity</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[11px] font-bold uppercase tracking-[0.2em] text-stone-500">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-stone-900 transition-colors relative group">
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-stone-900 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Hero Section */}
      <header id="intro" className="relative pt-40 pb-24 px-6 md:px-12 border-b border-stone-100 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-7xl relative z-10"> {/* Widened this slightly to fit the books */}
            <div className="inline-block px-3 py-1 bg-stone-100 text-[10px] font-black uppercase tracking-[0.3em] text-stone-500 mb-8 rounded">
              Digital Arts - Mini Research Project 2026
            </div>
            
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* LEFT COLUMN: Your Title and Text (Span 8 out of 12) */}
              <div className="lg:col-span-8">
                <h1 className="text-5xl md:text-8xl font-serif font-extrabold leading-[0.95] mb-10 tracking-tighter">
                  Identity, Voice, <br />
                  <span className="text-stone-400 italic font-medium">& Perspective</span>
                </h1>
                
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <p className="text-xl md:text-2xl text-stone-800 font-serif leading-relaxed">
                      A comparative computational analysis of wartime archives, exploring how language shapes the collective vs. individual experience of conflict.
                    </p>
                    <div className="flex items-center gap-4 py-6 border-y border-stone-100">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-stone-900 flex items-center justify-center text-white font-serif italic text-xl shadow-lg">H</div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-1">The Hypothesis</p>
                        <p className="text-sm font-medium text-stone-700 leading-snug">Vietnamese writings prioritize collective duty; US diaries foreground individual psychological survival.</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-stone-500 text-sm space-y-4">
                    <p>
                      This project adopts a structured data processing pipeline to transform unstructured scanned Vietnamese text into analyzable data. By comparing <b>Bông Lau Thời Hoa Lửa</b> with <b>A Chaplain's Diary of Vietnam</b>, we - Bao Phuong and Hoang Nhi - map the cultural divide between the "Collective We" and the "Individual I."
                    </p>
                    <p>
                      Our methodology bridges the gap between raw OCR extraction and semantic tokenization, providing a data-driven window into divergent wartime identities.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: The Book Stack */}
              <div className="lg:col-span-4 relative h-[500px] hidden lg:flex items-center justify-center">
                
                {/* US Book Cover (The back one) */}
                <div className="absolute top-10 right-10 w-48 h-72 z-10 transition-all duration-700 
                                hover:z-50 hover:scale-110 hover:rotate-0 hover:translate-x-[-20px] cursor-help group/us">
                  <div className="relative w-full h-full shadow-2xl rounded-sm transform -rotate-6 border-l-4 border-slate-400 overflow-hidden transition-transform duration-700 group-hover/us:rotate-0">
                    
                    {/* The Image */}
                    <img 
                      src={USbookCover} 
                      alt="Chaplain's Diary Cover" 
                      className="w-full h-full object-cover" 
                    />
                    
                    {/* The Hover Title - Now matching the Vietnam style at the bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover/us:opacity-100 transition-opacity flex flex-col justify-end p-5">
                      <p className="text-white text-[9px] font-black uppercase tracking-[0.2em] mb-1">The Individual "I"</p>
                      <p className="text-white text-base font-serif italic leading-tight">Chaplain’s Diary & Earl Pike</p>
                    </div>
                  </div>
                </div>

                {/* Vietnam Book Cover (The front one) */}
                <div className="absolute bottom-10 left-5 w-56 h-80 z-20 transition-all duration-700 
                                hover:z-50 hover:scale-110 hover:rotate-0 hover:translate-x-12 cursor-help group/vn">
                  <div className="relative w-full h-full shadow-[20px_20px_50px_rgba(0,0,0,0.3)] rounded-sm transform rotate-3 border-l-8 border-emerald-900 overflow-hidden transition-transform duration-700 group-hover/vn:rotate-0">
                    <img src={bookCover} alt="Bong Lau Cover" className="w-full h-full object-cover" />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 to-transparent opacity-0 group-hover/vn:opacity-100 transition-opacity flex flex-col justify-end p-6">
                        <p className="text-white text-[9px] font-black uppercase tracking-[0.2em] mb-1">The Collective "We"</p>
                        <p className="text-white text-lg font-serif italic leading-tight">Bông Lau Thời Hoa Lửa</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <SignificanceSection />
          </div>
        </div>
      </header>

      {/* Methodology Section - Full Text Integration */}
      <section id="methodology" className="py-32 bg-stone-900 text-stone-100 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeading light subtitle="A multi-stage pipeline designed for linguistic integrity and diacritic accuracy.">
            Methodology: The Processing Pipeline
          </SectionHeading>

          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              
              <div className="relative pl-12 border-l border-stone-800">
                <span className="absolute -left-[1.1rem] top-0 w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs font-bold text-stone-500 border border-stone-700">1</span>
                <h3 className="text-xl font-serif font-bold mb-4">Stage I: Extraction & Cleaning</h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">
                  The two corpora presented distinct digitization challenges. While the Chaplain's diary was already in the text format, the Vietnamese memoir was a physical book requiring high-quality scanning to preserve diacritics and need for OCR processing to convert images into editable text.
                </p>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">
                  We discovered that standard scanning tools lacked the <b>AI-assisted alignment</b> needed for speed. By switching to advanced mobile scanning and creating a <b>controlled lighting environment</b> (no need for fancy stuff, my diy scanning station is literally using a tablet cover as a dark backdrop and soft window light), we achieved the high-contrast scans necessary for OCR accuracy in only 2 hours (We have estimated that if use standard tools, it would take at least 8 hours to finish the scanning of the whole book <b>~200 pages</b>). Because the document is image-based, an initial <b>Optical Character Recognition (OCR)</b> process using <b>VietOCR</b> was required. 
                </p>
                <div className="mt-8 border-2 border-dashed border-stone-700 p-2 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                  <img src={scanningStation} alt="Scanning Station" className="rounded" />
                  <p className="text-[10px] text-center mt-2 text-stone-500 uppercase tracking-widest">Initial Digitization: The DIY Scanning Process</p>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed">
                  However, raw output contained significant noise: incorrect diacritics, broken words from line segmentation (the text contains poetry), and missing segments from scan quality. We implemented a post-OCR correction process using an <b>AI-assisted approach with strict verification constraints</b>, ensuring no fabrication of content through the use of [UNCLEAR] tags.
                </p>
              </div>

              <div className="relative pl-12 border-l border-stone-800">
                <span className="absolute -left-[1.1rem] top-0 w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs font-bold text-stone-500 border border-stone-700">2</span>
                <h3 className="text-xl font-serif font-bold mb-4">Stage II: Semantic Tokenization</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  Following correction, the text underwent <b>semantic tokenization</b>. Vietnamese is a monosyllabic language where meaning resides in multi-syllable compound words. Standard Voyant analysis treats syllables independently (e.g., "chiến" and "đấu"), distorting results. 
                </p>
                <p className="text-stone-400 text-sm leading-relaxed mt-4">
                  We used an underscore-binding protocol (e.g., <code>chiến_đấu</code>) to ensure our calculations reflected true conceptual frequency. This allowed for an accurate comparison with the English corpus.
                </p>
              </div>
              {/* Technical Contrast Box */}
              <div className="bg-stone-800/50 p-8 rounded-xl border border-stone-700">
                <h4 className="text-sm font-bold uppercase tracking-widest text-emerald-400 mb-6 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Technical Accuracy Verification
                </h4>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <p className="text-[10px] font-bold uppercase text-stone-500">Cleaning Process</p>
                    <div className="p-4 bg-stone-900 rounded font-mono text-[15px] text-red-400/70 border border-red-900/30">
                     CORRECTING PROCESS: Ông Nghĩa chỉ xe pháo tự_hành mang biển US (AZMY – ARMY) 12Z446 mà bảo_tàng_đang trưng_bày, (khăng – khẳng) định: “Đây chính là “vua_chiến_trường” mà tôi đã lái ra từ căn_cứ (341. – 241.) Khẩu pháo đã (dược – được) Bảo_tàng trưng_(Dây – bày) nhiều lắm, nhưng ai là người lái, ai là người đã “(băt sông – bắt_sống)” nó (thị – thì) không (thây nhắc dê. Kiện – thấy nhắc đến.)
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-[10px] font-bold uppercase text-stone-500">Processed Segment</p>
                    <div className="p-4 bg-stone-900 rounded font-mono text-[15px] text-emerald-400 border border-emerald-900/30">
                     CLEAN FINAL: Ông Nghĩa chỉ xe pháo tự_hành mang biển US ARMY 12Z446 mà bảo_tàng đang trưng_bày, khẳng_định: “Đây chính là “vua chiến_trường” mà tôi đã lái ra từ căn_cứ 241. Khẩu pháo đã được Bảo_tàng trưng_bày nhiều lắm, nhưng ai là người lái, ai là người đã “bắt_sống” nó thì không thấy nhắc đến."
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative pl-12 border-l border-stone-800">
                <span className="absolute -left-[1.1rem] top-0 w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-xs font-bold text-stone-500 border border-stone-700">3</span>
                <h3 className="text-xl font-serif font-bold mb-4">Stage III: Comparative Analysis</h3>
                <p className="text-stone-400 text-sm leading-relaxed">
                  The final data was processed through <b>Voyant Tools</b> and AI-assisted sentiment clustering to identify three core thematic markers: <b>First-Person Agency</b> (I vs. We), <b>Relational Identity</b> (Family vs. Unit), and <b>Emotional Expression</b> (Individual Trauma vs. Shared Memory).
                </p>
                <div className="mt-8 border-2 border-dashed border-stone-700 p-2 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                  <img src={VoyantToolsInterface} alt="Voyant Tools Interface" className="rounded" />
                  <p className="text-[10px] text-center mt-2 text-stone-500 uppercase tracking-widest"> Analyzation Process:: Voyant tools</p>
                </div>                
              </div>
            </div>

            <div className="space-y-8">
              {/* Interactive Insight Tool */}
              <div className="sticky top-32 bg-stone-800 p-6 rounded-xl border border-stone-700 shadow-2xl">
                <div className="flex items-center gap-3 border-b border-stone-700 pb-4 mb-6">
                  <div className="p-2 bg-emerald-500/20 rounded">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-stone-100">Research Insights</h4>
                    <p className="text-[10px] text-stone-500">OCR & Data Integrity</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 mb-6">
                  {Object.keys(insights).map((key) => (
                    <button 
                      key={key}
                      onClick={() => setActiveInsight(key)}
                      className={`text-[10px] font-bold uppercase tracking-widest text-left p-3 rounded-lg transition-all flex items-center gap-3 ${activeInsight === key ? 'bg-emerald-600 text-white shadow-lg' : 'bg-stone-700/50 text-stone-400 hover:bg-stone-700'}`}
                    >
                      {insights[key].icon}
                      {insights[key].title}
                    </button>
                  ))}
                </div>

                <div className="bg-stone-900/50 p-4 rounded-lg border border-stone-700 animate-in fade-in duration-300">
                  <p className="text-xs text-stone-300 leading-relaxed italic">
                    {insights[activeInsight].content}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-700 text-center">
                  <p className="text-[9px] font-bold uppercase tracking-widest text-stone-500 mb-4">Illustration</p>
                  
                  {/* 1. The Container */}
                  <div className="aspect-square bg-stone-900 border border-stone-700 rounded-lg flex items-center justify-center group relative shadow-2xl">
                    
                    {/* 2. The Instruction (Hidden on hover) */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity pointer-events-none">
                      <span className="text-[9px] text-stone-400 bg-stone-900/80 px-2 py-1 rounded border border-stone-700 uppercase tracking-tighter">
                        Hover to Expand
                      </span>
                    </div>

                    {/* 3. The Image that jumps to the center */}
                    <img 
                      src={insights[activeInsight].image} 
                      alt="Research Evidence" 
                      className="w-full h-full object-contain rounded-lg transition-all duration-500 
                                /* These lines handle the jump to the center of the screen */
                                group-hover:fixed 
                                group-hover:top-1/2 
                                group-hover:left-1/2 
                                group-hover:-translate-x-1/2 
                                group-hover:-translate-y-1/2 
                                group-hover:w-[80vw] 
                                group-hover:h-[80vh] 
                                group-hover:z-[100] 
                                group-hover:bg-stone-900/95 
                                group-hover:p-8 
                                group-hover:shadow-[0_0_50px_rgba(0,0,0,0.8)]
                                cursor-zoom-out"
                    />
                  </div>
                  
                  <p className="mt-4 text-[10px] text-stone-600 italic">
                    *Data captured from Voyant Tools & VietOCR processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Section - Full Content Integration */}
      <section id="analysis" className="py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <SectionHeading subtitle="Findings on collective belonging, relational identity, and the divergent 'Voices' of the war.">
            Analysis: Discursive Identities
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8 mb-24">
            <div className="bg-[#F5F2EA] p-8 rounded-2xl border border-stone-200">
              <div className="flex items-center gap-3 mb-6">
                <Book className="w-5 h-5 text-emerald-800" />
                <h4 className="text-sm font-black uppercase tracking-widest text-stone-900">Bông Lau Thời Hoa Lửa - 29,202 words</h4>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed italic">
                The book is a collection of memoirs written by many Vietnamese veterans during the war. “Bông Lau Thời Hoa Lửa” captures the harsh battlefields, the comradeship, and the sacrifice. Through the book, unity, patriotism, and the hope for independence of the soldiers is portrayed most clearly.
              </p>
            </div>
            <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
              <div className="flex items-center gap-3 mb-6">
                <Book className="w-5 h-5 text-slate-800" />
                <h4 className="text-sm font-black uppercase tracking-widest text-stone-900">A Chaplain’s Diary - 22,187 words</h4>
              </div>
              <p className="text-stone-700 text-sm leading-relaxed italic">
                A diary that reveals the emotional spheres of war, documented by Chaplain Webb. Through the experiences, he portrayed the psychological warfare every soldier must encounter, in which humanity is challenged through chaos and the complexity of war.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <div className="bg-white border border-stone-200 p-8 shadow-xl rounded-xl sticky top-32">
                <div className="flex gap-2 mb-10 p-1 bg-stone-50 rounded-lg border border-stone-100">
                  <button onClick={() => setActivePerspective('vietnam')} className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-md ${activePerspective === 'vietnam' ? 'bg-stone-900 text-white shadow-lg' : 'text-stone-400 hover:text-stone-600'}`}>Vietnam</button>
                  <button onClick={() => setActivePerspective('us')} className={`flex-1 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-md ${activePerspective === 'us' ? 'bg-stone-900 text-white shadow-lg' : 'text-stone-400 hover:text-stone-600'}`}>United States</button>
                </div>

                <div className="space-y-6">
                  <h4 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest border-b border-stone-100 pb-3">Voyant Corpus Trends</h4>
                  {detailedData[activePerspective].stats.map((stat, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[11px] font-bold mb-2">
                        <span className="text-stone-700">{stat.label}</span>
                        <span className="text-stone-400 font-mono tracking-tighter">{stat.value}</span>
                      </div>
                      <div className="h-1 bg-stone-100 rounded-full overflow-hidden">
                        <div className={`h-full transition-all duration-1000 ${activePerspective === 'vietnam' ? 'bg-emerald-700' : 'bg-slate-700'}`} style={{ width: `${Math.min((stat.value / 1832) * 100 + 4, 100)}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-20">
              <div className="prose prose-stone max-w-none">
                <h3 className="text-4xl font-serif font-bold mb-10 tracking-tight italic">Voice & Emotional Clustering</h3>
                <h4 className="text-stone-600 text-1x1 font-serif font-bold mb-6"> Please hover over the insights below to see the evidence we found in the original texts!</h4>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                   {detailedData[activePerspective].qualitative.map((item, i) => (
                    <div key={i} className="group/item relative mb-8">
                      <h4 className="font-bold text-xs uppercase tracking-widest mb-4 flex items-center justify-between text-stone-400">
                        <span className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" /> {item.title}
                        </span>
                        
                        {/* 1. Button is now always visible (opacity-100) but faint until hovered */}
                        {item.evidence && (
                          <span className="text-[9px] bg-stone-100 px-2 py-1 rounded text-stone-400 border border-stone-200 group-hover/item:text-emerald-700 group-hover/item:border-emerald-200 transition-colors cursor-help uppercase font-black">
                            View Evidence
                          </span>
                        )}
                      </h4>

                      <div className="relative">
                        <p className="text-stone-600 text-[15px] leading-relaxed">
                          {item.text}
                        </p>

                        {/* 2. The Pop-up Image with a Backdrop */}
                        {item.evidence && (
                          <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none opacity-0 group-hover/item:opacity-100 transition-opacity duration-500">
                            
                            {/* This is the dark "Blur" that covers the background */}
                            <div className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"></div>
                            
                            {/* The Image itself */}
                            <div className="relative max-w-5xl w-[85vw] p-4 bg-stone-900 rounded-2xl border border-stone-700 shadow-[0_0_100px_rgba(0,0,0,0.9)]">
                              <img 
                                src={item.evidence} 
                                alt="Research Evidence" 
                                className="w-full h-auto rounded-lg shadow-2xl"
                              />
                              <p className="text-white/50 text-[10px] mt-4 text-center uppercase tracking-[0.3em] font-bold">
                                  {item.title} — Primary Source Evidence
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-20 bg-stone-50 p-12 border border-stone-200 rounded-2xl relative overflow-hidden">
                  <Quote className="absolute -top-4 -right-4 w-32 h-32 text-stone-200/50" />
                  <h4 className="text-2xl font-serif font-bold mb-6">Conclusion on Narrative Tone</h4>
                  <div className="space-y-6 text-stone-700 relative z-10 leading-relaxed text-[16px]">
                    <p>
                      The <b>US Voice</b> is psychological and introspective, using the diary as a space for processing trauma. Phrases like "I felt" and "I remember" are ubiquitous, grounded in the physical self.
                    </p>
                    <p>
                      The <b>Vietnamese Voice</b> is restrained and objective. Emotions are secondary to the lens of the collective, which is the shared grief of a unit or the joy of a communal victory. The "I" is secondary, reflecting a narrative of shared memory over individual trauma.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conclusion - Full Original Quote */}
      <section id="conclusion" className="py-40 bg-[#F5F2EA] px-6 md:px-12 border-y border-stone-200">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading subtitle="The result of a detail, rigorous, tiresome, day and night analysis (Yes, we want you to acknowledge our marvelous dedication 😎) of a data-driven window into wartime identity.">
            Synthesis: What can we conclude about Discursive Cultures?
          </SectionHeading>
          
          <div className="space-y-12 text-xl md:text-2xl font-serif text-stone-800 leading-tight italic">
            <p>
              The study confirms that these linguistic patterns are not accidental but are reflective of <b>discursive cultures</b>. The Vietnamese soldier writes as a component of a 'collective we,' moving toward a shared historical inevitability (independence).
            </p>
            <p>
              Vietnamese soldiers often describe their experiences as part of a collective “we,” emphasizing shared purpose and a sense of fighting for the sake of the nation. In contrast, American soldiers tend to write from an individual “I,” focusing on personal thoughts and emotions, with a longing for their sweet home. By maintaining a strict, <b>clearly outlined processing line</b> - from scanning, to OCR, to OCR correction and to underscored tokenization, this research ensures that these semantic nuances are  <b>preserved and be heard</b>.
            </p>
          </div>

          <div className="mt-24 flex items-center justify-center gap-12 md:gap-24 opacity-60">
             <div className="text-center group">
               <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"><Users className="w-10 h-10 text-emerald-800" /></div>
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800">The Collective "We"</p>
             </div>
             <div className="text-center group">
               <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6"><User className="w-10 h-10 text-slate-800" /></div>
               <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-800">The Individual "I"</p>
             </div>
          </div>
        </div>
      </section>
      {/* Full Reflection Section */}
      <section id="reflection" className="py-32 px-6 md:px-12 bg-white border-t border-stone-100">
        <div className="max-w-5xl mx-auto">
          <SectionHeading subtitle="Reflecting on the journey, our limitations, and the people who made this project possible.">
            Final Reflection
          </SectionHeading>

          {/* 1. Acknowledgement */}
          <div className="mb-24">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-800 mb-12 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Acknowledgement & Gratitude
            </h3>
            
            <div className="grid md:grid-cols-3 gap-12 items-start">
              {/* Left: Your detailed gratitude text */}
              <div className="md:col-span-2 prose prose-stone max-w-none text-stone-700 leading-relaxed space-y-6 text-[16px]">
                <p>
                  We are grateful for the people and AI that have helped us to complete this mini project. First, we would like to thank <b>Prof. Daniel Ruelle</b> for this opportunity to practice working on a digital humanities project. Thanks to the tools introduced by him, this project has been more complete and manageable.
                </p>
                <p>
                  We are grateful to <b>Bảo Phương’s grandfather</b> for preserving “Bông Lau Thời Hoa Lửa” - a treasured collection of Vietnamese soldiers’ memoirs - and allowing us to digitize it. The stories inside moved us deeply and are our motivations to preserve the beauty of the Vietnamese language and identity through this project. We must also express our thanks to <b>US veterans</b> for their diaries and memoirs of the Vietnam War, which provide a vivid look into various aspects of their souls.
                </p>
                <p>
                  Finally, we must mention <b>GenAI</b> (specifically Gemini) for allowing us to do the analysis and create this website from scratch. With GenAI, things have been much less complicated, and we did not feel so lost.
                </p>
              </div>

              {/* Right: The Static Image with Subtitle */}
              <div className="bg-stone-50 p-3 rounded-2xl border border-stone-100 shadow-inner flex flex-col items-center">
                <img 
                  src={geminiAwardPhoto} 
                  alt="Stickman awards Gemini" 
                  className="rounded-xl shadow-md grayscale hover:grayscale-0 transition-all duration-500 w-full h-auto object-cover aspect-[4/3]"
                />
                <div className="mt-4 p-3 bg-emerald-950 rounded-lg text-center w-full">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400">Award for deployment support</p>
                  <p className="text-xs text-white font-medium mt-1">"We thank Gemini for helping us, as complete beginners, deploy such marvelous work."</p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Limitations */}
          <div className="mb-24 p-10 bg-stone-50 rounded-3xl border border-stone-100">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-800 mb-8 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Limitations & what we could have done better
            </h3>
            <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-6 text-[15px]">
              <p>
                Though we read multiple documents written by soldiers and veterans from Vietnam and the US for the analysis, we could not compile all the data into the website that displays our results. We decided not to follow the initial plan of presenting patterns across the materials, one of the reasons is that Voyant tool visualization is only available for one corpus at a time, and provides instant, ready-to-go graphs. This has resulted in many of the stats not being on the website; however, the analysis is the outcome of several books, memoirs, and diaries read. Only shared patterns were picked out to be presented.
              </p>
              <p>
                Even though we are aware of the fact that this is a mini project, we wish to have the time to improve on several things. First, we would work on a <b>bigger database</b> to have a better representation of data. For two weeks, we have only been finding digitized documents in online archives besides doing OCR on “Bông Lau Thời Hoa Lửa” for our analysis, which was difficult and time-consuming due to a limited number of complete and readable documents, especially those in Vietnamese. 
              </p>
              <p>
                Second, we would like to <b>OCR many memoirs and diaries written by the Vietnamese grandparents</b> (e.g. Hoang Nhi’s grandpa kept his handwritten diary from 1975 during the war that we read for reference). We could only afford to OCR and clean one 200-page Vietnamese memoir with the time allowed, and therefore wish to digitize more of these authentic writings of the older generation. 
              </p>
              <p>
                Third, even though we have explored many tools, such as Transkribus, Adobe Scan, FPT, Google Cloud... we unfortunately could not find a better one than <b>VietOCR</b> in terms of batch processing power and no pay wall. Given more time, we would further explore possible options for better work and reduce the cleaning burden, optimizing our workflow essentially.
              </p>
            </div>
          </div>

          {/* 3. References */}
          <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-stone-100">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-8">Books & Diaries Reference</h4>
              <div className="space-y-6 text-xs text-stone-500 font-serif leading-relaxed">
                <p>Dewhurst, R. (n.d.). <a href="https://www.huskyhistory.com/uploads/8/0/0/2/8002320/dear_america_transcript.pdf" target="_blank" className="underline hover:text-emerald-800">Dear America: Letters Home from Vietnam.</a></p>
                <p>Ngo, L., Truong, Q. <a href="https://apps.dtic.mil/sti/tr/pdf/ADA324505.pdf" target="_blank" className="underline hover:text-emerald-800">The Easter Offensive of 1972.</a></p>
                <p>O'brien, T. <a href="https://culliton.org/uploads/3/4/4/2/34421062/the_things_they_carried_a_work_of_fiction_obrien_.pdf" target="_blank" className="underline hover:text-emerald-800">The Things They Carried.</a></p>
                <p>Pike, E. (1995). <a href="https://www.thesunmagazine.org/articles/25208-a-vietnam-diary" target="_blank" className="underline hover:text-emerald-800">A Vietnam Diary. The Sun Magazine.</a></p>
                <p>Webb, W. (1968). <a href="https://currahee.org/about_CHAPLAIN.Webb_diary.pdf" target="_blank" className="underline hover:text-emerald-800">C U R R A H E E: A CHAPLAIN’S DIARY OF VIET NAM.</a></p>
                <p className="text-stone-800 font-bold italic">Trung đoàn 38 Pháo Binh Bông Lau. (2012). Bông Lau Thời Hoa Lửa. Nhà Xuất Bản Văn Hóa Dân Tộc Hà Nội.</p>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 mb-8">GenAI Chat Logs</h4>
              <p className="text-[11px] text-stone-500 mb-6 italic">This project is done with the assistance of AI in text refinement, data organization, and website development.</p>
              <div className="space-y-3">
                {[
                  { label: "Cleaning OCR texts", url: "https://gemini.google.com/share/3bc26486f5ef" },
                  { label: "Compound Word Tokenization", url: "https://gemini.google.com/share/8231a0e77b5b" },
                  { label: "Summarizing Materials", url: "https://chatgpt.com/share/69d11782-3928-8321-8a02-b2aa966e2771" },
                  { label: "Finding US Memoirs", url: "https://chatgpt.com/share/69d1185e-f140-8320-9646-e699e599f607" }
                ].map((log) => (
                  <a key={log.label} href={log.url} target="_blank" className="flex justify-between items-center p-3 bg-white border border-stone-100 rounded-lg text-[10px] font-bold uppercase tracking-widest text-stone-600 hover:border-emerald-200 hover:bg-emerald-50 transition-all">
                    {log.label} <ArrowRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-stone-100">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-800 mb-4">Preserving Identity</h4>
                 <p className="text-xs text-stone-500 italic">"Our objective was to bridge the gap between image-based history and machine-readable data without losing the soul of the original accounts."</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-stone-900 text-stone-500 py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-xs">
              <div className="flex items-center gap-3 mb-6">
                <History className="w-6 h-6 text-stone-200" />
                <span className="font-serif font-black tracking-tighter text-xl uppercase text-stone-100 italic">Archive Perspective</span>
              </div>
              <p className="text-[10px] opacity-60 uppercase tracking-[0.2em] font-bold leading-relaxed">
                A Digital Humanities Research Project by <br/> 
                <span className="text-stone-300">Bao Phuong & Hoang Nhi</span>
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-[10px] font-bold uppercase tracking-widest">
              <div>
                <p className="text-stone-300 mb-6 border-b border-stone-800 pb-2">Navigation</p>
                <ul className="space-y-3 opacity-60">
                  <li><a href="#intro" className="hover:text-white transition-colors">Introduction</a></li>
                  <li><a href="#methodology" className="hover:text-white transition-colors">Methodology</a></li>
                  <li><a href="#analysis" className="hover:text-white transition-colors">Analysis</a></li>
                  <li><a href="#reflection" className="hover:text-white transition-colors">Reflection</a></li>
                </ul>
              </div>
              <div>
                <p className="text-stone-300 mb-6 border-b border-stone-800 pb-2">Primary Corpus</p>
                <ul className="space-y-3 opacity-60 italic">
                  <li>Bông Lau Thời Hoa Lửa</li>
                  <li>Chaplain Webb Diaries</li>
                  <li>Earl Pike Collection</li>
                </ul>
              </div>
              <div>
                <p className="text-stone-300 mb-6 border-b border-stone-800 pb-2">Institution</p>
                <ul className="space-y-3 opacity-60">
                  <li>VinUniversity</li>
                  <li>Digital Arts 2026</li>
                  <li>Prof. Daniel Ruelle</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[9px] uppercase tracking-[0.5em] opacity-40">Digital Arts Portfolio © 2026</p>
            <div className="flex gap-6 opacity-40">
               <Heart className="w-3 h-3" />
               <Sparkles className="w-3 h-3" />
               <ShieldCheck className="w-3 h-3" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;