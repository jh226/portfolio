import React from 'react';
import './Credentials.css';

const leftCategories = [
	{
		category: '학력',
		color: '#FFD700',
		items: [
			{ date: '2020.03 - 2024.08', title: '우송대학교 졸업', detail: 'IT융합학부 스마트 IT보안학과 | 대전광역시' },
			{ date: '2017.03 - 2020.02', title: '범서고등학교 졸업', detail: '인문계 | 울산광역시' },
		],
	},
	{
		category: '어학',
		color: '#A8D8EA',
		items: [
			{ date: '2025.01.22', title: 'TOEIC Speaking : Intermediate High', detail: '150점' },
		],
	},
	{
		category: '자격증',
		color: '#C3B1E1',
		items: [
			{ date: '2025.06.28', title: 'AICE Associate', detail: '(주)케이티, (주)한국경제신문' },
			{ date: '2025.06.13', title: '데이터 분석 준전문가(ADsP)', detail: '한국데이터산업진흥원' },
			{ date: '2024.09.20', title: 'SQL개발자(SQLD)', detail: '한국데이터산업진흥원' },
			{ date: '2024.06.18', title: '정보처리기사', detail: '한국산업인력공단' },
		],
	},
];

const rightCategories = [
	{
		category: '교육이수',
		color: '#FDCFB3',
		items: [
			{ date: '2024.09 - 2025.02', title: 'KT AIVLE School (AI Track)', detail: '840시간 | KT, 고용노동부', role: '데이터 분석, 머신러닝 & 딥러닝' },
			{ date: '2024.03 - 2024.09', title: '지능형 로봇 서비스 개발을 위한 SW개발자 양성 과정', detail: '960시간 | 우송대학교', role: '아두이노, Java Spring' },
			{ date: '2023.03 - 2023.08', title: 'Windows Developer 고급 과정', detail: '720시간 | 비트교육센터', role: '윈도우 프로그래밍, C#, .NET, 안드로이드 프로그래밍' },
		],
	},
	{
		category: '수상',
		color: '#B5EAD7',
		items: [
			{
				date: '2024.08.23',
				title: '공로상',
				detail: '훈격 : 우송대학교 총장',
				org: '우송대학교',
			},
			{
				date: '2024.08.16',
				title: '우수상',
				detail: '훈격 : 정보통신기획평가원장 홍진배',
				org: '채용연계형SW 사업우수성과공유회 컨퍼런스',
				role: '프론트 및 백엔드 개발 - Python',
			},
			{
				date: '2024.06.18',
				title: '단정상 (2위)',
				detail: '훈격 : 우송대학교 총장',
				org: '2024 캡스톤 디자인 경진대회',
				role: '프론트 및 백엔드 개발 - Node.js, React',
			},
			// {
			// 	date: '2021.08.30',
			// 	title: '인증서 수상',
			// 	detail: '훈격 : 부총리 겸 교육부장관 유은혜',
			// 	org: '2021 학생창업유망팀 300 경진대회',
			// 	role: '싱글보드 개발 및 데이터 개발 - 아두이노',
			// },
		],
	},
];

function TimelineItems({ items, color }) {
	return (
		<div className="cred-timeline">
			{items.map((item, i) => (
				<div className="cred-item" key={i}>
					<div className="cred-dot" style={{ background: color }} />
					{item.date && <span className="cred-date" style={{ background: color, color: '#333' }}>{item.date}</span>}
					{item.org && <span className="cred-org">{item.org}</span>}
					<div className="cred-content">
						<strong>{item.title}</strong>
						{item.detail && <p>{item.detail}</p>}
						{item.role && <p className="cred-role">{item.role}</p>}
					</div>
				</div>
			))}
		</div>
	);
}

function CategoryBlock({ category, color, items, grid }) {
	if (grid) {
		const mid = Math.ceil(items.length / 2);
		const left = items.slice(0, mid);
		const right = items.slice(mid);
		return (
			<div className="cred-category">
				<h3 className="cred-category-title" style={{ background: `${color}33` }}>{category}</h3>
				<div className="cred-grid">
					<TimelineItems items={left} color={color} />
					<TimelineItems items={right} color={color} />
				</div>
			</div>
		);
	}
	return (
		<div className="cred-category">
			<h3 className="cred-category-title" style={{ background: `${color}33` }}>{category}</h3>
			<TimelineItems items={items} color={color} />
		</div>
	);
}

function Credentials() {
	return (
		<section id="credentials" className="credentials-section">
			<div className="credentials-container">
				<h1 className="credentials-title">이력</h1>
				<div className="credentials-columns">
					<div className="credentials-col">
						{leftCategories.map((cat) => (
							<CategoryBlock key={cat.category} {...cat} />
						))}
					</div>
					<div className="credentials-col">
						{rightCategories.map((cat) => (
							<CategoryBlock key={cat.category} {...cat} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Credentials;
