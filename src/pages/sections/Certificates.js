import { useState } from 'react';
import './Certificates.css';

const topNotes = [
	{
		title: '🎥 탐지탐지',
		color: '#FFF9C4',
		rotate: '-2deg',
		desc: '이상행동 탐지 CCTV 크로스 플랫폼 앱',
		period: '2023.06 ~ 2023.08',
		org: 'Windows Developer 고급과정',
		role: '풀스택 개발',
		stack: 'JavaScript, React, Electron, Mediasoup, WebRTC, MySQL',
		github: 'github.com/jh226/CCTV_Detect',
		details: [
			'일렉트론을 활용한 크로스 플랫폼 애플리케이션 개발',
			'Mediasoup SFU를 이용한 비디오 스트리밍 기능 구현',
			'소켓 통신을 통한 실시간 데이터 전송 설정',
		],
		devDesc: [
			'SFU 방식을 사용하여 효율적인 대역폭 활용과 낮은 지연 시간을 고려한 실시간 영상 스트리밍을 구현했습니다.',
			'선택적 포워딩 방식으로 효율적인 데이터 전송을 했으며, 이러한 과정을 통해 안정적인 스트리밍을 제공할 수 있었습니다.',
			'일렉트론으로 구현하여 크로스 플랫폼 지원 목적에 디자인 및 운영체제에서 동일한 코드베이스로 멀티플랫폼을 배포할 수 있었고, React를 활용하여 빠른 UI 개발이 가능했습니다.',
		],
	},
	{
		title: '⛱️ 스마트 그늘막',
		color: '#C8E6C9',
		rotate: '1.5deg',
		desc: 'IoT기반 스마트 그늘막 통합 관리 시스템',
		period: '2024.03 ~ 2024.09',
		org: '캡스톤 디자인 / 산학협력',
		role: '백엔드 및 IoT 개발',
		stack: 'Python, Node.js, Express, React, D3.js, MQTT, Raspberry Pi, MySQL',
		github: 'github.com/jh226/Capstone',
		details: [
			'Node.js 및 Express.js를 사용한 RESTful API 설계',
			'MQTT를 이용한 데이터 송수신 및 제어',
			'실시간 데이터 저장 및 시각화 (D3.js)',
			'관한 기반 제어 시스템 구현',
		],
		devDesc: [
			'MQTT를 활용하여 서버(Express.js)와 통신을 하여 데이터를 전송했습니다.',
			'수집된 데이터를 웹 애플리케이션에서 시각화하기 위한 D3.js를 활용하여 차트를 생성했으며, 이를 통해 데이터의 변화를 직관적으로 이해할 수 있도록 했습니다.',
			'차양막과 LED를 제어하기 위한 기능을 구현하여, 현장의 상황에 맞게 즉각적인 조치를 취할 수 있도록 했습니다.',
			'지도 API를 활용하여 스마트 그늘막의 위치를 표시하고, 클릭 시 해당 그늘막의 실시간 온습도, 차양막 상태 등의 정보를 제공했습니다.',
		],
	},
];

const bottomNotes = [
	{
		title: '📺 MOZIT',
		color: '#BBDEFB',
		rotate: '-1deg',
		desc: '유해요소 및 개인정보 모자이크 서비스',
		period: '2024.12 ~ 2025.01',
		org: 'KT AIVLE School',
		role: '백엔드 개발',
		stack: 'Java, Spring Boot, Spring Security, React, WebSocket, JWT, MySQL',
		github: 'github.com/jh226/kt-mozit',
		details: [
			'Spring Security와 JWT를 활용한 인증 및 인가 구현',
			'백엔드, 프론트엔드 간의 API 연결',
			'WebSocket을 이용한 실시간 스트리밍 통신 설정',
		],
		devDesc: [
			'Spring Security를 이용하여 사용자 인증 과정에 보안을 한층 높였으며, 민감정보를 Bcrypt 기반으로 암호화하여 안전하게 저장했습니다.',
			'해킹 위험을 방지하기 위해 HTTP Only 쿠키에 리프레시 토큰을 저장하는 등 보안에 많은 노력을 기울였습니다.',
			'실시간 스트리밍을 위해 WebSocket을 이용하여 FastAPI 서버와 프레임 단위로 데이터를 주고받았으며, 양방향 통신을 통해 지연 시간을 최소화할 수 있었습니다.',
		],
	},
	{
		title: '💼 인턴',
		color: '#E1BEE7',
		rotate: '2deg',
		desc: 'DLP 솔루션 유지보수 및 테스트 자동화 도구 개발',
		period: '2025.05 ~ 2026.05',
		org: '지란지교데이터',
		role: '서버솔루션 유지보수 및 QA 자동화',
		stack: 'Spring Boot, MyBatis, Python, Playwright',
		github: '',
		details: [
			'DLP 보안 솔루션 기능 개발 및 유지보수 (Java/Spring 기반)',
			'신규 기능/UI 개선/기능 수정 등 약 80건의 이슈 처리 및 QC대응',
			'Playwright 기반 웹 테스트 자동화 도구 개발 (Python, PyInstaller로 실행 파일 패키징)',
		],
		devDesc: [],
	},
];

const StickyPopup = ({ note, page, setPage, onLeave }) => {
	const totalPages = note.devDesc && note.devDesc.length > 0 ? 2 : 1;

	return (
		<div className="sticky-popup" onMouseLeave={onLeave}>
			{page === 0 && (
				<>
					<strong>{note.title}</strong>
					<p className="sticky-popup-desc">{note.desc}</p>
					<div className="sticky-popup-section">
						<span className="sticky-popup-label">주요 개발 사항</span>
						<ul>
							{note.details.map((d, i) => (
								<li key={i}>{d}</li>
							))}
						</ul>
					</div>
					{note.stack && (
						<div className="sticky-popup-section">
							<span className="sticky-popup-label">기술 스택</span>
							<div className="sticky-popup-tags">
								{note.stack.split(', ').map((t, i) => (
									<span key={i} className="sticky-tag">{t}</span>
								))}
							</div>
						</div>
					)}
				</>
			)}
			{page === 1 && (
				<>
					<strong>{note.title}</strong>
					<p className="sticky-popup-desc">{note.desc}</p>
					<div className="sticky-popup-section">
						<span className="sticky-popup-label">개발 설명</span>
						<ul>
							{note.devDesc.map((d, i) => (
								<li key={i}>{d}</li>
							))}
						</ul>
					</div>
				</>
			)}
			{note.github && (
				<div className="sticky-popup-github">
					<a href={`https://${note.github}`} target="_blank" rel="noreferrer">
						🔗 {note.github}
					</a>
				</div>
			)}
			{totalPages > 1 && (
				<div className="sticky-popup-nav">
					<button
						className={page === 0 ? 'active' : ''}
						onClick={() => setPage(0)}
					/>
					<button
						className={page === 1 ? 'active' : ''}
						onClick={() => setPage(1)}
					/>
				</div>
			)}
		</div>
	);
};

const StickyNote = ({ note, isActive, popupPage, setPopupPage, onHover, onLeave }) => (
	<div
		className="sticky-note"
		style={{
			backgroundColor: note.color,
			transform: `rotate(${note.rotate})`,
		}}
		onMouseEnter={onHover}
		onMouseLeave={onLeave}
	>
		<div className="sticky-tape" />
		<h2>{note.title}</h2>
		<p className="sticky-desc">{note.desc}</p>
		{note.period && <span className="sticky-period">{note.period}</span>}
		{note.org && <span className="sticky-org">{note.org}</span>}
		{note.role && (
			<div className="sticky-detail">
				<span className="sticky-label">역할</span> {note.role}
			</div>
		)}
		{note.stack && (
			<div className="sticky-detail">
				<span className="sticky-label">기술</span> {note.stack}
			</div>
		)}
		{note.github && (
			<div className="sticky-github">
				<a href={`https://${note.github}`} target="_blank" rel="noreferrer">
					{note.github}
				</a>
			</div>
		)}

		{isActive && note.details && note.details.length > 0 && (
			<StickyPopup
				note={note}
				page={popupPage}
				setPage={setPopupPage}
				onLeave={onLeave}
			/>
		)}
	</div>
);

const Certificates = () => {
	const [activeIndex, setActiveIndex] = useState(null);
	const [popupPage, setPopupPage] = useState(0);

	const handleHover = (key) => {
		setActiveIndex(key);
		setPopupPage(0);
	};

	return (
		<section id="certificates" className="certificates-section">
			<div className="sticky-board">
				<div className="sticky-row-2">
					{topNotes.map((note, i) => (
						<StickyNote
							key={i}
							note={note}
							isActive={activeIndex === `top-${i}`}
							popupPage={popupPage}
							setPopupPage={setPopupPage}
							onHover={() => handleHover(`top-${i}`)}
							onLeave={() => setActiveIndex(null)}
						/>
					))}
				</div>
				<div className="sticky-row-2">
					{bottomNotes.map((note, i) => (
						<StickyNote
							key={i}
							note={note}
							isActive={activeIndex === `bottom-${i}`}
							popupPage={popupPage}
							setPopupPage={setPopupPage}
							onHover={() => handleHover(`bottom-${i}`)}
							onLeave={() => setActiveIndex(null)}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Certificates;
