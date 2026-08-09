import { useState, useEffect } from 'react';
import mimoticon from '../../assets/mimoticon.png';
import './Home.css';

const TITLE = '안녕하세요! 개발자 이지현입니다.';

const stacks = [
	{ name: 'Java', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
	{ name: 'Spring Boot', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
	{ name: 'Python', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
{ name: 'Node.js', category: 'Backend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
	{ name: 'JavaScript', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
	{ name: 'React', category: 'Frontend', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
	{ name: 'MySQL', category: 'Database', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
	{ name: 'Git', category: 'Tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
	{ name: 'Jira', category: 'Tool', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
];

const Home = () => {
	const [displayText, setDisplayText] = useState('');
	const [typing, setTyping] = useState(false);
	useEffect(() => {
		const handleSection = (e) => {
			if (e.detail === 'home') {
				setDisplayText('');
				setTyping(true);
				let i = 0;
				const timer = setInterval(() => {
					i++;
					setDisplayText(TITLE.slice(0, i));
					if (i >= TITLE.length) {
						clearInterval(timer);
					}
				}, 80);
			}
		};
		window.addEventListener('sectionChange', handleSection);
		return () => window.removeEventListener('sectionChange', handleSection);
	}, []);

	return (
		<section id="home" className="home-section">
			<div className="intro-container">
				<div className="intro-top">
					<div className="intro-image-wrapper">
						<img src={mimoticon} alt="미모티콘" className="intro-image" />
					</div>
					<div className="intro-text">
						<h2>
							{displayText}
							{typing && <span className="typing-cursor">|</span>}
						</h2>
						<p>
							새로운 기술과 어려운 문제에 주저하지 않고 <mark>도전</mark>하며,<br />
							맡은 일은 끝까지 고민하고 <mark>완성도</mark>를 높이는 개발자입니다.<br /><br />
							캐나다 워킹홀리데이부터 다양한 프로젝트와 교육과정,<br />
							지란지교데이터 인턴 경험까지 새로운 환경에서 <mark>끊임없이 배우고</mark>,<br />
							배운 것을 직접 구현하며 <mark>성장</mark>해왔습니다.<br /><br />
							작은 루틴을 꾸준히 쌓아 큰 변화를 만들어가듯,<br />
							<mark>더 나은 서비스</mark>를 만드는 개발자가 되겠습니다.
						</p>
					</div>
				</div>
				<div className="intro-bottom">
					<div className="intro-links">
						<a href="https://github.com/jh226" target="_blank" rel="noreferrer" className="intro-link" title="GitHub">
							<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
						</a>
						<a href="mailto:leejh020206@gmail.com" className="intro-link" title="Email">
							<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
						</a>
					</div>
					<div className="intro-divider" />
					<div className="intro-stacks">
						{stacks.map((s, i) => (
							<div key={i} className="stack-chip" data-category={s.category}>
								<img src={s.icon} alt={s.name} className="stack-icon" />
								<span>{s.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Home;
