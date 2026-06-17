const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
    const contactForm = document.getElementById("contactForm");
    const formNote = document.getElementById("formNote");
    const yearEl = document.getElementById("year");

    yearEl.textContent = new Date().getFullYear();

    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
      });
    });

    // Formspree handles form submissions automatically.
// After creating your Formspree form, replace:
// REPLACE_WITH_YOUR_FORM_ID
// in index.html with your actual form ID.

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));


const translations = {
  "brand": {
    "en": "Jocelyn<span>Ramirez</span>",
    "es": "Jocelyn<span>Ramirez</span>"
  },
  "heroEyebrow": {
    "en": "Technology + psychology + human-centered design",
    "es": "Tecnología + psicología + diseño centrado en las personas"
  },
  "heroTitle": {
    "en": "Building <span class=\"highlight\">calm, thoughtful digital experiences</span> that help people feel understood.",
    "es": "Creo <span class=\"highlight\">experiencias digitales tranquilas y pensadas</span> para que las personas se sientan entendidas."
  },
  "heroP1": {
    "en": "I'm Jocelyn, a Computer Science and Psychology student who believes technology should feel human. I combine attention to detail, empathy, and thoughtful design to create experiences that genuinely help people.",
    "es": "Soy Jocelyn, estudiante de Ciencias de la Computación y Psicología. Creo que la tecnología también debe sentirse humana. Combino atención al detalle, empatía y diseño con intención para crear experiencias que de verdad ayuden a las personas."
  },
  "heroP2": {
    "en": "I care about clarity, accessibility, and making people's ideas feel real. Whether I'm building a mental health platform or a small business website, my goal is to create something that feels trustworthy, intentional, and uniquely personal.",
    "es": "Me importa que todo sea claro, accesible y que las ideas de las personas se vuelvan algo real. Ya sea una página de salud mental o un sitio para un negocio pequeño, mi meta es crear algo confiable, con propósito y muy personal."
  },
  "viewWork": {
    "en": "View My Work",
    "es": "Ver mis proyectos"
  },
  "startProject": {
    "en": "Start a Project",
    "es": "Empezar un proyecto"
  },
  "servicesEyebrow": {
    "en": "Services",
    "es": "Servicios"
  },
  "servicesTitle": {
    "en": "Design that adapts to the brand instead of repeating the same formula.",
    "es": "Diseño que se adapta a cada idea, no algo copiado y pegado."
  },
  "servicesP": {
    "en": "I create websites, landing pages, and interactive experiences with a focus on visual identity, front-end development, and a more memorable feel than generic templates.",
    "es": "Creo páginas web, landing pages y experiencias interactivas con enfoque en identidad visual, desarrollo front-end y un estilo más memorable que una plantilla genérica."
  },
  "customWebsites": {
    "en": "Custom Websites",
    "es": "Páginas web personalizadas"
  },
  "customWebsitesP": {
    "en": "Websites designed around the mood, message, and personality of the brand rather than a one-style-fits-all approach.",
    "es": "Sitios diseñados según el estilo, mensaje y personalidad de cada marca, no con una fórmula igual para todos."
  },
  "landingPages": {
    "en": "Landing Pages",
    "es": "Landing pages"
  },
  "landingPagesP": {
    "en": "Strong one-page experiences for products, concepts, launches, or businesses that need a clear online presence.",
    "es": "Páginas de una sola vista para productos, ideas, lanzamientos o negocios que necesitan una presencia clara en línea."
  },
  "visualDirection": {
    "en": "Visual Direction",
    "es": "Dirección visual"
  },
  "visualDirectionP": {
    "en": "From soft and elegant to bright and playful, I shape the look of a project based on what fits it best.",
    "es": "Desde algo suave y elegante hasta algo colorido y divertido, adapto el estilo a lo que mejor le queda al proyecto."
  },
  "responsiveFrontend": {
    "en": "Responsive Frontend",
    "es": "Front-end responsivo"
  },
  "responsiveFrontendP": {
    "en": "Clean builds that work across mobile, tablet, and desktop without losing the feel of the design.",
    "es": "Construcciones limpias que funcionan en celular, tablet y computadora sin perder el estilo del diseño."
  },
  "uiux": {
    "en": "UI / UX Prototyping",
    "es": "Prototipos UI / UX"
  },
  "uiuxP": {
    "en": "Figma layouts and prototypes to plan structure, content flow, and user experience before development.",
    "es": "Diseños y prototipos en Figma para planear estructura, flujo de contenido y experiencia de usuario antes de programar."
  },
  "interactiveIdeas": {
    "en": "Interactive Ideas",
    "es": "Ideas interactivas"
  },
  "interactiveIdeasP": {
    "en": "Projects with motion, playfulness, or custom interactions that help the website feel alive and memorable.",
    "es": "Proyectos con movimiento, juego o interacciones personalizadas para que la página se sienta viva y memorable."
  },
  "selectedWork": {
    "en": "Selected work",
    "es": "Proyectos"
  },
  "workTitle": {
    "en": "Projects that show my range: calm resources, playful interactions, and ideas made real.",
    "es": "Proyectos que muestran mi rango: recursos tranquilos, interacciones divertidas e ideas hechas realidad."
  },
  "workP": {
    "en": "These projects show the way I think: I like noticing small details, building with purpose, and making websites feel personal instead of copy-paste.",
    "es": "Estos proyectos muestran cómo pienso: me gusta fijarme en los detalles, construir con propósito y hacer páginas que se sientan personales, no copiadas."
  },
  "mentalTitle": {
    "en": "Mental Health App Website",
    "es": "Página de salud mental"
  },
  "mentalP": {
    "en": "A bilingual mental health resource website designed with calming visuals, clear navigation, and a supportive tone. <strong>This project connects my interest in psychology and computer science.</strong>",
    "es": "Un sitio bilingüe de recursos de salud mental con visuales tranquilos, navegación clara y un tono de apoyo. <strong>Este proyecto conecta mi interés por la psicología y la computación.</strong>"
  },
  "prototypeTitle": {
    "en": "Mental Health App Figma Prototype",
    "es": "Prototipo Figma de salud mental"
  },
  "prototypeP": {
    "en": "A UI/UX prototype exploring screen layouts, flow, and interface decisions before development.",
    "es": "Un prototipo UI/UX para explorar pantallas, flujo y decisiones de interfaz antes de programar."
  },
  "christmasTitle": {
    "en": "Christmas Cards Website",
    "es": "Página de cartas navideñas"
  },
  "christmasP": {
    "en": "A bright holiday website with bilingual elements, festive visuals, and a playful layout. This project shows that I can build websites with emotion, theme, and personality.",
    "es": "Una página navideña con elementos bilingües, visuales festivos y un diseño divertido. Este proyecto muestra que puedo crear páginas con emoción, tema y personalidad."
  },
  "memoryTitle": {
    "en": "Memoria: Visual Memory Game",
    "es": "Memoria: juego visual"
  },
  "memoryP": {
    "en": "A Spanish memory-card game using JavaScript logic, randomized cards, a timer, and move counter. It shows my ability to build playful interactions, not just static pages.",
    "es": "Un juego de memoria en español usando lógica de JavaScript, cartas aleatorias, cronómetro y contador de movimientos. Muestra que puedo crear interacciones divertidas, no solo páginas estáticas."
  },
  "friendsTitle": {
    "en": "Friends Game Website",
    "es": "Página de amistad con juegos"
  },
  "friendsP": {
    "en": "A playful friend-themed website with a custom concept, language options, and a game-like feeling. It shows how I turn personal ideas into interactive digital experiences.",
    "es": "Una página divertida sobre amistad con concepto personalizado, opción de idioma y estilo de juego. Muestra cómo convierto ideas personales en experiencias digitales interactivas."
  },
  "puzzleTitle": {
    "en": "Las Gallinas Puzzle Game",
    "es": "Rompecabezas de LasGallinasDeCaro"
  },
  "puzzleP": {
    "en": "A custom image puzzle game with a bold red game-board style. This project shows JavaScript interaction, visual problem-solving, and my interest in making websites feel playful and personal.",
    "es": "Un rompecabezas personalizado con un tablero rojo llamativo. Este proyecto muestra interacción con JavaScript, resolución visual y mi interés por hacer páginas divertidas y personales."
  },
  "liveDemo": {
    "en": "Live Demo",
    "es": "Ver demo"
  },
  "codeSoon": {
    "en": "Code Coming Soon",
    "es": "Código próximamente"
  },
  "approachEyebrow": {
    "en": "Design approach",
    "es": "Mi forma de diseñar"
  },
  "approachSmallTitle": {
    "en": "Different is the point.",
    "es": "La diferencia es el punto."
  },
  "approachSmallP": {
    "en": "Not every project should look polished in the same way. The visual style should match the personality behind it.",
    "es": "No todos los proyectos deben verse pulidos de la misma manera. El estilo visual debe reflejar la personalidad que hay detrás."
  },
  "approachTitle": {
    "en": "I like websites with range, not copy-paste style.",
    "es": "Me gustan las páginas con personalidad, no estilo copiado."
  },
  "approachP1": {
    "en": "Some projects should feel elegant and restrained. Others should feel playful, expressive, or unexpected. I enjoy adapting the visual direction to fit the idea instead of forcing every project into the same style.",
    "es": "Algunos proyectos deben sentirse elegantes y tranquilos. Otros deben sentirse divertidos, expresivos o inesperados. Me gusta adaptar la dirección visual a la idea, no forzar todo al mismo estilo."
  },
  "approachP2": {
    "en": "That means I can work across different moods - traditional, classy, soft, bold, weird, cheerful, or refined - while still keeping the website clean, usable, and intentional.",
    "es": "Eso significa que puedo trabajar con diferentes estilos: tradicional, elegante, suave, llamativo, raro, alegre o refinado, pero manteniendo la página clara, usable y con intención."
  },
  "tailored": {
    "en": "Tailored visual identity",
    "es": "Identidad visual personalizada"
  },
  "tailoredP": {
    "en": "Each project should reflect its own mood, audience, and purpose rather than looking like a template.",
    "es": "Cada proyecto debe reflejar su propio ambiente, audiencia y propósito en vez de parecer plantilla."
  },
  "creativeUsable": {
    "en": "Creative but usable",
    "es": "Creativo pero fácil de usar"
  },
  "creativeUsableP": {
    "en": "Even expressive design still needs clear layout, readable structure, and thoughtful user flow.",
    "es": "Aunque un diseño sea expresivo, necesita estructura clara, lectura fácil y buen flujo para el usuario."
  },
  "range": {
    "en": "Range in style",
    "es": "Rango de estilos"
  },
  "rangeP": {
    "en": "I enjoy moving between soft, polished, playful, classy, and more experimental aesthetics.",
    "es": "Me gusta moverme entre estilos suaves, pulidos, divertidos, elegantes y más experimentales."
  },
  "codeDesign": {
    "en": "Code + design together",
    "es": "Código + diseño juntos"
  },
  "codeDesignP": {
    "en": "Because I think in both design and development, I can shape ideas with both aesthetics and function in mind.",
    "es": "Como pienso en diseño y desarrollo, puedo crear ideas considerando tanto la estética como la función."
  },
  "aboutEyebrow": {
    "en": "About",
    "es": "Sobre mí"
  },
  "aboutTitle": {
    "en": "A designer and developer who likes character, clarity, and creative direction.",
    "es": "Una diseñadora y desarrolladora que valora la claridad, el carácter y la dirección creativa."
  },
  "aboutP1": {
    "en": "I'm a web designer and developer with experience creating landing pages, interactive front-end projects, and UI concepts. I enjoy building websites that feel visually intentional and full of personality, while still being easy to use.",
    "es": "Soy diseñadora y desarrolladora web con experiencia creando landing pages, proyectos front-end interactivos y conceptos de UI. Me gusta construir páginas que se sientan intencionales, con personalidad y fáciles de usar."
  },
  "aboutP2": {
    "en": "I'm especially interested in working with local restaurants, small businesses, and creative projects that want something more distinctive than a generic website.",
    "es": "Me interesa especialmente trabajar con restaurantes locales, negocios pequeños y proyectos creativos que quieran algo más único que una página genérica."
  },
  "processEyebrow": {
    "en": "Process",
    "es": "Proceso"
  },
  "processTitle": {
    "en": "A simple process that leaves room for creativity.",
    "es": "Un proceso simple que deja espacio para la creatividad."
  },
  "processP": {
    "en": "Good design can still be organized. I keep the process clear so the final result feels intentional, not random.",
    "es": "Un buen diseño también puede ser organizado. Mantengo el proceso claro para que el resultado final se sienta intencional, no improvisado."
  },
  "discover": {
    "en": "Discover",
    "es": "Conocer"
  },
  "discoverP": {
    "en": "I learn about the idea, audience, goals, and visual direction the project should carry.",
    "es": "Conozco la idea, la audiencia, las metas y el estilo visual que debe tener el proyecto."
  },
  "shape": {
    "en": "Shape the direction",
    "es": "Dar forma a la dirección"
  },
  "shapeP": {
    "en": "I explore layout, mood, color, and structure so the website starts to feel distinct and intentional.",
    "es": "Exploro el diseño, ambiente, color y estructura para que la página empiece a sentirse única y con intención."
  },
  "build": {
    "en": "Build the experience",
    "es": "Construir la experiencia"
  },
  "buildP": {
    "en": "I develop the website with responsive front-end code and details that keep the design feeling polished.",
    "es": "Desarrollo la página con código front-end responsivo y detalles que mantienen el diseño pulido."
  },
  "refine": {
    "en": "Refine and launch",
    "es": "Pulir y lanzar"
  },
  "refineP": {
    "en": "I review the details, improve the flow, and prepare the final version for launch.",
    "es": "Reviso los detalles, mejoro el flujo y preparo la versión final para lanzarla."
  },
  "contactEyebrow": {
    "en": "Contact",
    "es": "Contacto"
  },
  "contactTitle": {
    "en": "Have an idea you want to make real?",
    "es": "¿Tienes una idea que quieres hacer realidad?"
  },
  "contactP": {
    "en": "If you want a website that feels personal, clear, and made with care, I’d love to help shape the idea into something real.",
    "es": "Si quieres una página que se sienta personal, clara y hecha con cuidado, me encantaría ayudarte a convertir esa idea en algo real."
  },
  "location": {
    "en": "<strong>Location:</strong> San Diego, CA",
    "es": "<strong>Ubicación:</strong> San Diego, CA"
  },
  "focus": {
    "en": "<strong>Focus:</strong> Web design, front-end development, and mental-health tech",
    "es": "<strong>Enfoque:</strong> Diseño web, desarrollo front-end y tecnología para salud mental"
  },
  "sendIdea": {
    "en": "Send Idea",
    "es": "Enviar idea"
  },
  "formNote": {
    "en": "Messages will be sent to Jocelyn through the contact form.",
    "es": "Los mensajes se mandarán a Jocelyn por este formulario."
  },
  "footer": {
    "en": "Jocelyn Ramirez. Built with observation, honesty, and care.",
    "es": "Jocelyn Ramirez. Hecho con observación, honestidad y cuidado."
  },
  "navCta": {
    "en": "Get in Touch",
    "es": "Contáctame"
  },
  "navServices": {
    "en": "Services",
    "es": "Servicios"
  },
  "navWork": {
    "en": "Work",
    "es": "Proyectos"
  },
  "navApproach": {
    "en": "Approach",
    "es": "Enfoque"
  },
  "navAbout": {
    "en": "About",
    "es": "Sobre mí"
  },
  "navContact": {
    "en": "Contact",
    "es": "Contacto"
  }
};

const placeholderTranslations = {
  "namePlaceholder": {
    "en": "Your name",
    "es": "Tu nombre"
  },
  "emailPlaceholder": {
    "en": "Your email",
    "es": "Tu correo"
  },
  "projectPlaceholder": {
    "en": "Project or business name",
    "es": "Nombre del proyecto o negocio"
  },
  "messagePlaceholder": {
    "en": "Tell me about the dream, feeling, or idea you want this website to bring to life",
    "es": "Cuéntame sobre el sueño, sensación o idea que quieres que esta página haga realidad"
  }
};

const languageToggle = document.getElementById("languageToggle");
const mobileLanguageToggle = document.getElementById("mobileLanguageToggle");

function setLanguage(language) {
  document.documentElement.lang = language;
  localStorage.setItem("portfolioLanguage", language);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[key]) {
      element.innerHTML = translations[key][language];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (placeholderTranslations[key]) {
      element.setAttribute("placeholder", placeholderTranslations[key][language]);
    }
  });

  if (languageToggle) {
    languageToggle.textContent = language === "en" ? "Español" : "English";
    languageToggle.setAttribute(
      "aria-label",
      language === "en" ? "Switch to Spanish" : "Cambiar a inglés"
    );
  }
}
if (mobileLanguageToggle) {
  mobileLanguageToggle.textContent = language === "en" ? "Español" : "English";
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("portfolioLanguage") || "en";
    setLanguage(currentLanguage === "en" ? "es" : "en");
  });
}

if (mobileLanguageToggle) {
  mobileLanguageToggle.addEventListener("click", () => {
    const currentLanguage = localStorage.getItem("portfolioLanguage") || "en";
    setLanguage(currentLanguage === "en" ? "es" : "en");

    if (navLinks) {
      navLinks.classList.remove("open");
    }
  });
}

setLanguage(localStorage.getItem("portfolioLanguage") || "en");


// Final bilingual copy fixes: full Mexican Spanish translation pass
translations["heroTitleNew"] = {"en": "Thoughtful websites built with clarity, care, and character.", "es": "Páginas web creadas con claridad, dedicación y personalidad."};
translations["heroP1New"] = {"en": "I design and build websites by listening closely, noticing the small details, and turning someone's idea into something they can actually feel proud of.", "es": "Diseño y desarrollo páginas web escuchando con atención, cuidando los pequeños detalles y convirtiendo las ideas de las personas en algo de lo que realmente puedan sentirse orgullosas."};
translations["heroP2New"] = {"en": "My style is creative, honest, and values-driven. I care about clear communication, accessibility, and making a website feel like the person or dream behind it.", "es": "Mi estilo es creativo, auténtico y guiado por valores. Me importa la comunicación clara, la accesibilidad y que cada página refleje a la persona o el sueño que hay detrás."};
translations["seeWhatIBuild"] = {"en": "See What I Build", "es": "Ver lo que creo"};
translations["bringIdea"] = {"en": "Bring an Idea to Life", "es": "Hacer realidad una idea"};
translations["detailsMatter"] = {"en": "Details matter. Dreams matter too.", "es": "Los detalles importan. Los sueños también."};
translations["detailsMatterP"] = {"en": "I build around the person, the purpose, and the feeling the project needs to give.", "es": "Construyo cada proyecto pensando en la persona, el propósito y la sensación que quiere transmitir."};
translations["servicesTitleNew"] = {"en": "Design that starts with listening, not copying.", "es": "El diseño empieza escuchando, no copiando."};
translations["servicesPNew"] = {"en": "I create websites, landing pages, and interactive front-end projects that feel personal, usable, and intentional. I like making ideas look real.", "es": "Creo páginas web, landing pages y proyectos front-end interactivos que se sienten personales, útiles y hechos con intención. Me gusta convertir las ideas en algo real."};
translations["mentalPNew"] = {"en": "A landing page for a mental health app idea, designed with calming visuals, simple structure, and an approachable tone inspired by psychology.", "es": "Una landing page para una aplicación de salud mental, diseñada con visuales tranquilos, una estructura sencilla y un tono cercano inspirado en la psicología."};
translations["christmasPNew"] = {"en": "A themed web project showing creative styling, playful details, and the ability to build a specific mood from scratch.", "es": "Un proyecto temático que muestra diseño creativo, detalles divertidos y la capacidad de crear una experiencia visual desde cero."};
translations["memoryPNew"] = {"en": "An interactive browser game that shows JavaScript logic, memory-based interaction, and playful user experience design.", "es": "Un juego interactivo para navegador que demuestra lógica en JavaScript, interacción basada en la memoria y una experiencia de usuario divertida."};
translations["friendsPNew"] = {"en": "A personal, expressive website built around friendship, games, and shared interests, showing how a site can feel custom and human.", "es": "Una página personal y expresiva inspirada en la amistad, los juegos y los intereses compartidos, mostrando cómo un sitio puede sentirse humano y único."};
translations["approachSmallTitleNew"] = {"en": "Being intentional is the point.", "es": "Diseñar con intención es lo más importante."};
translations["approachSmallPNew"] = {"en": "Every project has a different personality. My job is to notice it, protect it, and translate it into a website.", "es": "Cada proyecto tiene una personalidad diferente. Mi trabajo es descubrirla, respetarla y convertirla en una página web."};
translations["approachTitleNew"] = {"en": "I notice what makes an idea special, then build around that.", "es": "Identifico lo que hace especial una idea y construyo a partir de eso."};
translations["approachP1New"] = {"en": "I am observant by nature, so I pay attention to the tiny details: the words someone uses, the mood they want, the audience they care about, and the parts of the idea that matter most.", "es": "Soy observadora por naturaleza, así que pongo atención a los pequeños detalles: las palabras que usan las personas, el ambiente que buscan transmitir, la audiencia a la que quieren llegar y las partes de la idea que más importan."};
translations["approachP2New"] = {"en": "I am also values-driven. I care about honesty, consistency, accessibility, and doing work that actually helps someone bring their dream closer to reality.", "es": "También me guío por mis valores. Me importa la honestidad, la consistencia, la accesibilidad y hacer un trabajo que realmente ayude a las personas a acercarse a sus sueños."};
translations["deepObservationP"] = {"en": "I listen closely and notice details that help the website feel specific instead of generic.", "es": "Escucho con atención y noto detalles que ayudan a que la página se sienta específica, no genérica."};
translations["creativeClearP"] = {"en": "I like unique design, but I still keep the layout readable, organized, and easy to use.", "es": "Me gusta el diseño único, pero mantengo la estructura clara, organizada y fácil de usar."};
translations["strongValuesP"] = {"en": "I care about honest communication, reliability, and doing work that feels meaningful, not rushed.", "es": "Me importa la comunicación honesta, la responsabilidad y hacer un trabajo con significado, no algo hecho a la carrera."};
translations["codeEmpathyP"] = {"en": "Because I study computer science and psychology, I think about both how a site works and how it feels to use.", "es": "Como estudio computación y psicología, pienso tanto en cómo funciona una página como en cómo se siente usarla."};
translations["aboutTitleNew"] = {"en": "A designer and developer who brings detail, empathy, and structure into creative work.", "es": "Una diseñadora y desarrolladora que aporta detalle, empatía y estructura al trabajo creativo."};
translations["aboutP1New"] = {"en": "I'm Jocelyn, a computer science and psychology student who enjoys creating landing pages, interactive front-end projects, and UI concepts. My neurodivergent perspective helps me notice patterns, details, and inconsistencies that other people might miss.", "es": "Soy Jocelyn, estudiante de Ciencias de la Computación y Psicología. Me gusta crear landing pages, proyectos front-end interactivos y conceptos de interfaz. Mi perspectiva neurodivergente me ayuda a notar patrones, detalles e inconsistencias que otras personas podrían pasar por alto."};
translations["aboutP2New"] = {"en": "I care about building websites that feel personal and honest. I like helping people take an idea that only exists in their head and turn it into something real, polished, and meaningful.", "es": "Me importa crear páginas web que se sientan personales y auténticas. Me gusta ayudar a las personas a convertir una idea que solo existe en su mente en algo real, bien hecho y significativo."};
translations["processTitleNew"] = {"en": "A simple process built around trust and clarity.", "es": "Un proceso simple basado en la confianza y la claridad."};
translations["processPNew"] = {"en": "I work best when the process is clear. Structure helps creativity feel safe, focused, and easier to bring to life.", "es": "Trabajo mejor cuando el proceso es claro. La estructura ayuda a que la creatividad se sienta segura, enfocada y más fácil de hacer realidad."};
translations["step1PNew"] = {"en": "I listen to the idea, the goals, the audience, and the emotional direction the website should carry.", "es": "Escucho la idea, las metas, la audiencia y la dirección emocional que debe transmitir la página."};
translations["step2PNew"] = {"en": "I explore layout, mood, colors, words, and structure so the project starts to feel like itself.", "es": "Exploro el diseño, el ambiente, los colores, las palabras y la estructura para que el proyecto empiece a sentirse propio."};
translations["step3PNew"] = {"en": "I build the website with responsive front-end code, thoughtful spacing, and details that make it feel polished.", "es": "Construyo la página con código front-end responsivo, buen espaciado y detalles que la hacen sentirse pulida."};
translations["step4PNew"] = {"en": "I review details carefully, improve the flow, and prepare the final version so it feels complete and trustworthy.", "es": "Reviso los detalles con cuidado, mejoro el flujo y preparo la versión final para que se sienta completa y confiable."};
translations["contactPNew"] = {"en": "If you want a website that feels personal, clear, and made with care, I'd love to help shape the idea into something real.", "es": "Si quieres una página que se sienta personal, clara y hecha con cuidado, me encantaría ayudarte a convertir esa idea en algo real."};
translations["heroTitle"] = {"en": "Thoughtful websites built with clarity, care, and character.", "es": "Páginas web creadas con claridad, dedicación y personalidad."};
translations["heroTitlePart1"] = {
  en: "Thoughtful websites built with",
  es: "Páginas web creadas con"
};

translations["heroTitlePart2"] = {
  en: " clarity, care, and character.",
es: " claridad, dedicación y personalidad."};
translations["heroP1"] = {"en": "I design and build websites by listening closely, noticing the small details, and turning someone's idea into something they can actually feel proud of.", "es": "Diseño y desarrollo páginas web escuchando con atención, cuidando los pequeños detalles y convirtiendo las ideas de las personas en algo de lo que realmente puedan sentirse orgullosas."};
translations["heroP2"] = {"en": "My style is creative, honest, and values-driven. I care about clear communication, accessibility, and making a website feel like the person or dream behind it.", "es": "Mi estilo es creativo, auténtico y guiado por valores. Me importa la comunicación clara, la accesibilidad y que cada página refleje a la persona o el sueño que hay detrás."};
translations["viewWork"] = {"en": "See What I Build", "es": "Ver lo que creo"};
translations["startProject"] = {"en": "Bring an Idea to Life", "es": "Hacer realidad una idea"};
translations["servicesTitle"] = {"en": "Design that starts with listening, not copying.", "es": "El diseño empieza escuchando, no copiando."};
translations["servicesP"] = {"en": "I create websites, landing pages, and interactive front-end projects that feel personal, usable, and intentional. I like making ideas look real.", "es": "Creo páginas web, landing pages y proyectos front-end interactivos que se sienten personales, útiles y hechos con intención. Me gusta convertir las ideas en algo real."};
translations["mentalP"] = {"en": "A landing page for a mental health app idea, designed with calming visuals, simple structure, and an approachable tone inspired by psychology.", "es": "Una landing page para una aplicación de salud mental, diseñada con visuales tranquilos, una estructura sencilla y un tono cercano inspirado en la psicología."};
translations["christmasP"] = {"en": "A themed web project showing creative styling, playful details, and the ability to build a specific mood from scratch.", "es": "Un proyecto temático que muestra diseño creativo, detalles divertidos y la capacidad de crear una experiencia visual desde cero."};
translations["memoryP"] = {"en": "An interactive browser game that shows JavaScript logic, memory-based interaction, and playful user experience design.", "es": "Un juego interactivo para navegador que demuestra lógica en JavaScript, interacción basada en la memoria y una experiencia de usuario divertida."};
translations["friendsP"] = {"en": "A personal, expressive website built around friendship, games, and shared interests, showing how a site can feel custom and human.", "es": "Una página personal y expresiva inspirada en la amistad, los juegos y los intereses compartidos, mostrando cómo un sitio puede sentirse humano y único."};
translations["approachSmallTitle"] = {"en": "Being intentional is the point.", "es": "Diseñar con intención es lo más importante."};
translations["approachSmallP"] = {"en": "Every project has a different personality. My job is to notice it, protect it, and translate it into a website.", "es": "Cada proyecto tiene una personalidad diferente. Mi trabajo es descubrirla, respetarla y convertirla en una página web."};
translations["approachTitle"] = {"en": "I notice what makes an idea special, then build around that.", "es": "Identifico lo que hace especial una idea y construyo a partir de eso."};
translations["approachP1"] = {"en": "I am observant by nature, so I pay attention to the tiny details: the words someone uses, the mood they want, the audience they care about, and the parts of the idea that matter most.", "es": "Soy observadora por naturaleza, así que pongo atención a los pequeños detalles: las palabras que usan las personas, el ambiente que buscan transmitir, la audiencia a la que quieren llegar y las partes de la idea que más importan."};
translations["approachP2"] = {"en": "I am also values-driven. I care about honesty, consistency, accessibility, and doing work that actually helps someone bring their dream closer to reality.", "es": "También me guío por mis valores. Me importa la honestidad, la consistencia, la accesibilidad y hacer un trabajo que realmente ayude a las personas a acercarse a sus sueños."};
translations["aboutTitle"] = {"en": "A designer and developer who brings detail, empathy, and structure into creative work.", "es": "Una diseñadora y desarrolladora que aporta detalle, empatía y estructura al trabajo creativo."};
translations["aboutP1"] = {"en": "I'm Jocelyn, a computer science and psychology student who enjoys creating landing pages, interactive front-end projects, and UI concepts. My neurodivergent perspective helps me notice patterns, details, and inconsistencies that other people might miss.", "es": "Soy Jocelyn, estudiante de Ciencias de la Computación y Psicología. Me gusta crear landing pages, proyectos front-end interactivos y conceptos de interfaz. Mi perspectiva neurodivergente me ayuda a notar patrones, detalles e inconsistencias que otras personas podrían pasar por alto."};
translations["aboutP2"] = {"en": "I care about building websites that feel personal and honest. I like helping people take an idea that only exists in their head and turn it into something real, polished, and meaningful.", "es": "Me importa crear páginas web que se sientan personales y auténticas. Me gusta ayudar a las personas a convertir una idea que solo existe en su mente en algo real, bien hecho y significativo."};
translations["processTitle"] = {"en": "A simple process built around trust and clarity.", "es": "Un proceso simple basado en la confianza y la claridad."};
translations["processP"] = {"en": "I work best when the process is clear. Structure helps creativity feel safe, focused, and easier to bring to life.", "es": "Trabajo mejor cuando el proceso es claro. La estructura ayuda a que la creatividad se sienta segura, enfocada y más fácil de hacer realidad."};
translations["contactP"] = {"en": "If you want a website that feels personal, clear, and made with care, I'd love to help shape the idea into something real.", "es": "Si quieres una página que se sienta personal, clara y hecha con cuidado, me encantaría ayudarte a convertir esa idea en algo real."};

// Re-apply the saved language after loading all copy fixes.
setLanguage(localStorage.getItem("portfolioLanguage") || "en");


// Strong bilingual cleanup: translates remaining plain text labels too.
const directTextTranslations = {
  "Detail-oriented": "Detallista",
  "Values-driven": "Guiada por valores",
  "People-first": "Centrada en las personas",
  "Accessible": "Accesible",
  "Observant": "Observadora",
  "Honest": "Honesta",
  "Creative": "Creativa",
  "Intentional": "Intencional",
  "Human": "Humana",
  "Responsive": "Responsiva",
  "Dream-to-Website Builds": "De sueño a página web",
  "Websites shaped around the client's idea, values, personality, and the feeling they want people to remember.": "Páginas creadas alrededor de la idea, los valores, la personalidad y la sensación que la persona quiere que otros recuerden.",
  "Clear Landing Pages": "Landing pages claras",
  "Focused one-page websites for products, services, ideas, or small businesses that need to explain themselves fast.": "Páginas de una sola vista para productos, servicios, ideas o negocios pequeños que necesitan explicarse rápido.",
  "Visual Personality": "Personalidad visual",
  "From calm and soft to bold and playful, I choose visuals based on the project instead of forcing one style.": "Desde algo tranquilo y suave hasta algo llamativo y divertido, elijo los visuales según el proyecto en vez de forzar un solo estilo.",
  "Responsive Front-End Code": "Código front-end responsivo",
  "Clean HTML, CSS, and JavaScript that works across screen sizes without losing the personality of the design.": "HTML, CSS y JavaScript limpios que funcionan en diferentes tamaños de pantalla sin perder la personalidad del diseño.",
  "People-First UI / UX": "UI / UX centrado en personas",
  "Layouts and prototypes that think about how real people move through a page, not just how it looks.": "Diseños y prototipos pensados en cómo personas reales navegan una página, no solo en cómo se ve.",
  "Interactive Details": "Detalles interactivos",
  "Small interactions, motion, and JavaScript details that make the site feel more alive without overwhelming people.": "Pequeñas interacciones, movimiento y detalles en JavaScript que hacen que el sitio se sienta más vivo sin abrumar.",
  "Projects that connect code, creativity, and care.": "Proyectos que conectan código, creatividad y cuidado.",
  "This section highlights my range: calm mental-health design, creative concepts, and interactive JavaScript projects.": "Esta sección muestra mi rango: diseño tranquilo para salud mental, conceptos creativos y proyectos interactivos con JavaScript.",
  "Landing Page": "Landing Page",
  "Creative Styling": "Estilo creativo",
  "Game Logic": "Lógica de juego",
  "Interaction": "Interacción",
  "Custom Concept": "Concepto personalizado",
  "Puzzle Logic": "Lógica de rompecabezas",
  "Deep observation": "Observación profunda",
  "Creative but clear": "Creativa pero clara",
  "Strong values": "Valores firmes",
  "Code + empathy together": "Código + empatía juntos",
  "Your name": "Tu nombre",
  "Your email": "Tu correo",
  "Project or business name": "Nombre del proyecto o negocio",
  "Send Idea": "Enviar idea",
  "Email:": "Correo:"
};

const altTextTranslations = {
  "mentalAlt": {
    "en": "Mental Health App Website screenshot",
    "es": "Captura de pantalla de la página de salud mental"
  },
  "christmasAlt": {
    "en": "Christmas Cards Website screenshot",
    "es": "Captura de pantalla de la página de cartas navideñas"
  },
  "memoryAlt": {
    "en": "Memory Game screenshot",
    "es": "Captura de pantalla del juego de memoria"
  },
  "friendsAlt": {
    "en": "Friends Game Website screenshot",
    "es": "Captura de pantalla de la página de amistad con juegos"
  },
  "puzzleAlt": {
    "en": "Las Gallinas puzzle game screenshot",
    "es": "Captura de pantalla del rompecabezas de LasGallinasDeCaro"
  }
};

function translateLooseText(language) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) {
    nodes.push(walker.currentNode);
  }

  nodes.forEach((node) => {
    const original = node.textContent;
    const trimmed = original.trim();

    if (!trimmed) return;

    // Store the first English version so switching back to English works.
    if (!node.parentElement.dataset.originalText && directTextTranslations[trimmed]) {
      node.parentElement.dataset.originalText = trimmed;
    }

    const englishText = node.parentElement.dataset.originalText || trimmed;

    if (language === "es" && directTextTranslations[englishText]) {
      node.textContent = original.replace(trimmed, directTextTranslations[englishText]);
    }

    if (language === "en" && node.parentElement.dataset.originalText) {
      node.textContent = original.replace(trimmed, node.parentElement.dataset.originalText);
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const key = element.getAttribute("data-i18n-alt");
    if (altTextTranslations[key]) {
      element.setAttribute("alt", altTextTranslations[key][language]);
    }
  });
}

// Wrap the original setLanguage so it also translates text without data-i18n.
if (typeof setLanguage === "function" && !window.__jocelynFullFixApplied) {
  const originalSetLanguage = setLanguage;
  setLanguage = function(language) {
    originalSetLanguage(language);
    translateLooseText(language);
  };
  window.__jocelynFullFixApplied = true;
  setLanguage(localStorage.getItem("portfolioLanguage") || "en");
}
