import "./App.css";

// Substitua esta URL quando o link oficial da comunidade mudar.
const WHATSAPP_GROUP_URL =
	"https://chat.whatsapp.com/EdhN147xlcQFfURCc0Vg6p";

const audience = [
	{
		icon: "01",
		title: "Estudantes de tecnologia",
		text: "Engenharia de Software, Ciência da Computação, Sistemas de Informação, Análise e Desenvolvimento de Sistemas e áreas relacionadas.",
	},
	{
		icon: "02",
		title: "Devs em início de carreira",
		text: "Pessoas aprendendo programação, construindo portfólio ou buscando o primeiro desafio profissional.",
	},
	{
		icon: "03",
		title: "Entusiastas e profissionais",
		text: "Quem acompanha tecnologia, quer trocar experiências e evoluir junto com a comunidade.",
	},
];

const topics = [
	["</>", "Programação", "Dúvidas, boas práticas, linguagens e desenvolvimento de software."],
	["{ }", "Engenharia de software", "Arquitetura de software, qualidade, padrões, testes e decisões técnicas."],
	["↗", "Carreira e mercado tech", "Estudos, processos seletivos, networking e evolução profissional."],
	["git", "Projetos e portfólio", "Ideias, GitHub, projetos reais e feedback construtivo."],
	["API", "Backend, frontend e full stack", "APIs, interfaces, bancos de dados e aplicações modernas."],
	["AI", "IA e automação", "Ferramentas, agentes, novas tecnologias e aplicações práticas."],
	["☁", "DevOps, cloud e infraestrutura", "Deploy, containers, CI/CD, observabilidade e nuvem."],
	["+", "Materiais e oportunidades", "Conteúdos úteis, eventos, vagas e iniciativas da comunidade."],
];

const rules = [
	["Respeito sempre", "Debates saudáveis, sem ataques ou discriminação."],
	["Conhecimento aberto", "Pergunte, compartilhe e ajude quando puder."],
	["Tecnologia no centro", "Conversas focadas em aprendizado, projetos e carreira."],
	["Zero spam", "Nada de correntes, autopromoção excessiva ou conteúdo irrelevante."],
];

const faqs = [
	{
		question: "O que é a comunidade Engenharia de Software?",
		answer:
			"É uma comunidade brasileira no WhatsApp para estudantes, desenvolvedores e entusiastas trocarem conhecimento sobre programação, engenharia de software, carreira tech e novas tecnologias.",
	},
	{
		question: "Quem pode entrar no grupo?",
		answer:
			"Qualquer pessoa interessada em tecnologia pode participar, independentemente do curso, nível de experiência ou área de atuação.",
	},
	{
		question: "O grupo é gratuito?",
		answer:
			"Sim. A participação na comunidade Engenharia de Software é gratuita.",
	},
	{
		question: "Quais assuntos são discutidos?",
		answer:
			"Programação, desenvolvimento de software, frontend, backend, arquitetura, inteligência artificial, DevOps, cloud, dados, produtos digitais, carreira e mercado de tecnologia.",
	},
	{
		question: "O grupo é apenas para estudantes de Engenharia de Software?",
		answer:
			"Não. O grupo também recebe estudantes de outras áreas, desenvolvedores iniciantes, profissionais e qualquer pessoa que queira aprender e contribuir.",
	},
	{
		question: "Como entrar no grupo de WhatsApp?",
		answer:
			"Use um dos botões “Entrar no grupo do WhatsApp” desta página. O link abrirá o WhatsApp para você confirmar sua entrada na comunidade.",
	},
	{
		question: "Por que participar da comunidade?",
		answer:
			"Para tirar dúvidas, compartilhar experiências, descobrir materiais e oportunidades, receber feedback sobre projetos e fazer networking com outras pessoas interessadas em desenvolvimento de software e carreira em tecnologia.",
	},
];

function WhatsAppIcon() {
	return (
		<svg viewBox="0 0 24 24" aria-hidden="true">
			<path
				fill="currentColor"
				d="M16.75 13.96c-.25-.13-1.47-.73-1.7-.81-.23-.09-.39-.13-.56.12-.16.25-.64.81-.78.98-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.66.31-.23.25-.87.85-.87 2.07 0 1.23.89 2.41 1.02 2.58.12.17 1.75 2.67 4.24 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.17-.48-.29Z"
			/>
			<path
				fill="currentColor"
				d="M20.52 3.45A11.82 11.82 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.09.55 4.13 1.59 5.93L.12 24l6.33-1.66a11.87 11.87 0 0 0 5.65 1.44h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.18-1.23-6.18-3.47-8.45ZM12.1 21.77a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.76.99 1-3.66-.24-.38a9.86 9.86 0 0 1-1.51-5.25c0-5.46 4.44-9.89 9.9-9.89a9.8 9.8 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7.01c0 5.45-4.44 9.88-9.9 9.88Z"
			/>
		</svg>
	);
}

function ArrowIcon() {
	return (
		<svg viewBox="0 0 20 20" aria-hidden="true">
			<path d="M4 10h12M11 5l5 5-5 5" />
		</svg>
	);
}

function Header() {
	return (
		<header className="site-header">
			<div className="container header-inner">
				<a className="brand" href="#inicio" aria-label="Engenharia de Software — início">
					<span className="brand-mark" aria-hidden="true">
						<span>&lt;/&gt;</span>
					</span>
					<span>Engenharia<span className="brand-muted">.software</span></span>
				</a>
				<nav aria-label="Navegação principal">
					<a href="#comunidade">Comunidade</a>
					<a href="#assuntos">Assuntos</a>
					<a href="#faq">FAQ</a>
				</nav>
				<a
					className="button button-small"
					href={WHATSAPP_GROUP_URL}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Entrar no grupo Engenharia de Software no WhatsApp"
				>
					<WhatsAppIcon />
					<span>Entrar no grupo</span>
				</a>
			</div>
		</header>
	);
}

function HeroSection() {
	return (
		<section className="hero" id="inicio" aria-labelledby="hero-title">
			<div className="hero-grid" aria-hidden="true" />
			<div className="hero-glow hero-glow-one" aria-hidden="true" />
			<div className="hero-glow hero-glow-two" aria-hidden="true" />
			<div className="container hero-layout">
				<div className="hero-copy">
					<div className="eyebrow">
						<span className="status-dot" />
						Comunidade brasileira aberta
					</div>
					<h1 id="hero-title">
						Comunidade de Engenharia de Software para quem{" "}
						<span>vive tecnologia.</span>
					</h1>
					<p className="hero-lead">
						Participe de um grupo de estudantes, desenvolvedores e
						entusiastas para trocar conhecimento sobre programação, carreira
						tech, arquitetura, IA, DevOps, projetos reais e mercado de
						tecnologia.
					</p>
					<div className="hero-actions">
						<a
							className="button button-primary"
							href={WHATSAPP_GROUP_URL}
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Entrar agora no grupo Engenharia de Software no WhatsApp"
						>
							<WhatsAppIcon />
							Entrar no grupo do WhatsApp
							<ArrowIcon />
						</a>
						<a className="button button-ghost" href="#comunidade">
							Conhecer a comunidade
						</a>
					</div>
					<ul className="hero-trust" aria-label="Características da comunidade">
						<li><span>✓</span> Gratuita</li>
						<li><span>✓</span> Aberta a todos os níveis</li>
						<li><span>✓</span> Foco em tecnologia</li>
					</ul>
				</div>
				<div className="hero-visual" aria-label="Representação de uma comunidade de tecnologia conectada">
					<div className="terminal">
						<div className="terminal-bar">
							<div className="terminal-dots" aria-hidden="true">
								<span /><span /><span />
							</div>
							<span>community.ts</span>
							<span className="terminal-status">● online</span>
						</div>
						<div className="terminal-code" aria-hidden="true">
							<p><span className="line-number">01</span><span className="purple">const</span> community = {"{"}</p>
							<p><span className="line-number">02</span>&nbsp;&nbsp;name: <span className="green">"Engenharia de Software"</span>,</p>
							<p><span className="line-number">03</span>&nbsp;&nbsp;members: [</p>
							<p><span className="line-number">04</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"estudantes"</span>, <span className="green">"devs"</span>, <span className="green">"você"</span></p>
							<p><span className="line-number">05</span>&nbsp;&nbsp;],</p>
							<p><span className="line-number">06</span>&nbsp;&nbsp;purpose: <span className="green">"aprender_juntos"</span>,</p>
							<p><span className="line-number">07</span>&nbsp;&nbsp;status: <span className="green">"aberta"</span></p>
							<p><span className="line-number">08</span>{"}"};</p>
							<p className="terminal-run"><span className="line-number">09</span><span className="blue">community</span>.<span className="yellow">connect</span>(<span className="green">"WhatsApp"</span>);<span className="cursor" /></p>
						</div>
					</div>
					<div className="floating-tag tag-code"><span>&lt;/&gt;</span> Código</div>
					<div className="floating-tag tag-ai"><span>✦</span> IA</div>
					<div className="floating-tag tag-cloud"><span>☁</span> Cloud</div>
					<div className="connection-line line-one" aria-hidden="true" />
					<div className="connection-line line-two" aria-hidden="true" />
				</div>
			</div>
		</section>
	);
}

function CommunitySection() {
	return (
		<section className="section community-section" id="comunidade" aria-labelledby="community-title">
			<div className="container split-layout">
				<div>
					<p className="section-kicker">Sobre a comunidade</p>
					<h2 id="community-title">
						Um espaço para aprender, compartilhar e <span>evoluir em conjunto.</span>
					</h2>
				</div>
				<div className="community-copy">
					<p>
						A <strong>comunidade Engenharia de Software</strong> é um espaço
						brasileiro para troca de experiências, dúvidas, materiais,
						oportunidades e discussões técnicas entre pessoas da área de
						tecnologia.
					</p>
					<p>
						Nosso grupo de engenharia de software aproxima estudantes de
						tecnologia, pessoas aprendendo programação e profissionais que
						querem conversar sobre desenvolvimento de software, projetos e
						carreira em tecnologia — sem barreiras de experiência.
					</p>
					<p>
						É também uma comunidade de tecnologia para quem procura um grupo
						de programação no WhatsApp, quer tirar dúvidas, fortalecer o
						portfólio e fazer networking com pessoas que compartilham os
						mesmos interesses.
					</p>
					<div className="quote-card">
						<span className="quote-mark" aria-hidden="true">“</span>
						<p>Boas ideias crescem quando conhecimento vira conversa.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

function AudienceSection() {
	return (
		<section className="section audience-section" aria-labelledby="audience-title">
			<div className="container">
				<div className="section-heading centered">
					<p className="section-kicker">Para quem é</p>
					<h2 id="audience-title">Se tecnologia move você, <span>seu lugar é aqui.</span></h2>
					<p>Não importa onde você começou. Importa querer aprender e contribuir.</p>
				</div>
				<div className="audience-grid">
					{audience.map((item) => (
						<article className="audience-card" key={item.title}>
							<span className="card-number">{item.icon}</span>
							<div className="audience-icon" aria-hidden="true">
								{item.icon === "01" ? "⌘" : item.icon === "02" ? "⌨" : "◎"}
							</div>
							<h3>{item.title}</h3>
							<p>{item.text}</p>
							<span className="card-line" />
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function TopicsSection() {
	return (
		<section className="section topics-section" id="assuntos" aria-labelledby="topics-title">
			<div className="container">
				<div className="topics-heading">
					<div>
						<p className="section-kicker">O que você encontra</p>
						<h2 id="topics-title">Conversas que saem do feed e <span>viram aprendizado.</span></h2>
					</div>
					<p>
						Do primeiro “Hello, World!” às decisões de arquitetura:
						espaço para perguntar, responder e construir repertório.
					</p>
				</div>
				<div className="topics-grid">
					{topics.map(([icon, title, text]) => (
						<article className="topic-card" key={title}>
							<div className="topic-icon" aria-hidden="true">{icon}</div>
							<div>
								<h3>{title}</h3>
								<p>{text}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function RulesSection() {
	return (
		<section className="section rules-section" aria-labelledby="rules-title">
			<div className="container rules-layout">
				<div className="rules-copy">
					<p className="section-kicker">Nossa cultura</p>
					<h2 id="rules-title">Colaboração no código. <span>Respeito na conversa.</span></h2>
					<p>
						Comunidade forte não nasce só de temas bons. Nasce de pessoas
						dispostas a criar um ambiente seguro, útil e acolhedor.
					</p>
					<div className="culture-code" aria-hidden="true">
						<span>community.config</span>
						<code>respect: true;<br />spam: false;<br />help_each_other: always;</code>
					</div>
				</div>
				<div className="rules-list">
					{rules.map(([title, text], index) => (
						<article className="rule-item" key={title}>
							<span className="rule-check" aria-hidden="true">✓</span>
							<div>
								<h3>{title}</h3>
								<p>{text}</p>
							</div>
							<span className="rule-index" aria-hidden="true">0{index + 1}</span>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}

function FAQSection() {
	return (
		<section className="section faq-section" id="faq" aria-labelledby="faq-title">
			<div className="container faq-layout">
				<div className="faq-intro">
					<p className="section-kicker">Perguntas frequentes</p>
					<h2 id="faq-title">Antes de entrar, <span>tire suas dúvidas.</span></h2>
					<p>Ainda ficou alguma pergunta? Entre no grupo e fale com a comunidade.</p>
					<a
						className="text-link"
						href={WHATSAPP_GROUP_URL}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Abrir grupo Engenharia de Software no WhatsApp"
					>
						Abrir WhatsApp <ArrowIcon />
					</a>
				</div>
				<div className="faq-list">
					{faqs.map((faq, index) => (
						<details key={faq.question} open={index === 0}>
							<summary>
								<span>{faq.question}</span>
								<span className="faq-toggle" aria-hidden="true" />
							</summary>
							<p>{faq.answer}</p>
						</details>
					))}
				</div>
			</div>
		</section>
	);
}

function FinalCTA() {
	return (
		<section className="final-cta" aria-labelledby="cta-title">
			<div className="cta-grid" aria-hidden="true" />
			<div className="cta-glow" aria-hidden="true" />
			<div className="container cta-content">
				<div className="eyebrow"><span className="status-dot" /> Conexão começa aqui</div>
				<h2 id="cta-title">Entre para a comunidade <span>Engenharia de Software.</span></h2>
				<p>
					Conecte-se com estudantes, desenvolvedores e pessoas que estão
					construindo o futuro com tecnologia.
				</p>
				<a
					className="button button-primary button-large"
					href={WHATSAPP_GROUP_URL}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Entrar no grupo da comunidade Engenharia de Software no WhatsApp"
				>
					<WhatsAppIcon />
					Entrar no grupo do WhatsApp
					<ArrowIcon />
				</a>
				<span className="cta-note">Gratuito · Aberto · Feito para quem quer evoluir</span>
			</div>
		</section>
	);
}

function Footer() {
	return (
		<footer className="site-footer">
			<div className="container footer-main">
				<div>
					<a className="brand" href="#inicio" aria-label="Engenharia de Software — voltar ao início">
						<span className="brand-mark" aria-hidden="true"><span>&lt;/&gt;</span></span>
						<span>Engenharia<span className="brand-muted">.software</span></span>
					</a>
					<p>Comunidade brasileira para estudantes, desenvolvedores e entusiastas de tecnologia.</p>
				</div>
				<div className="footer-links">
					<a href="#comunidade">Sobre</a>
					<a href="#assuntos">Assuntos</a>
					<a href="#faq">Perguntas frequentes</a>
					<a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer">
						Entrar no grupo ↗
					</a>
				</div>
			</div>
			<div className="container footer-bottom">
				<span>© {new Date().getFullYear()} Engenharia de Software</span>
				<a href="https://engsoftware.ailton.dev.br">engsoftware.ailton.dev.br</a>
			</div>
		</footer>
	);
}

function App() {
	return (
		<>
			<a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
			<Header />
			<main id="conteudo">
				<HeroSection />
				<CommunitySection />
				<AudienceSection />
				<TopicsSection />
				<RulesSection />
				<FAQSection />
				<FinalCTA />
			</main>
			<Footer />
		</>
	);
}

export default App;
