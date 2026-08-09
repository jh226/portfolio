import { useState } from 'react';
import './AboutMe.css';

const START_YEAR = 2020;
const END_YEAR = 2027;
const TOTAL = END_YEAR - START_YEAR;

const timelineData = [
	{
		label: '🎓 범서고 졸업',
		row: 0,
		start: 2020,
		end: 2020.17,
		color: '#00B3FF',
		title: '범서고등학교 졸업',
		date: '2017.03 ~ 2020.02',
		detail: ['소재지: 울산', '계열: 인문계열'],
	},
	{
		label: '🏫 우송대학교',
		row: 1,
		start: 2020.25,
		end: 2024.67,
		color: '#FFA726',
		title: '우송대학교 졸업',
		date: '2020.03 ~ 2024.08',
		detail: ['학과: 스마트IT보안학과', '학점: 4.32/4.5'],
	},
	{
		label: '🏆 창업유망팀 300',
		row: 3,
		start: 2021.58,
		end: 2021.75,
		color: '#AB47BC',
		title: '학생창업유망팀 300 경진대회',
		date: '2021.08',
		detail: ['수여기관: 한국연구재단', '수상: 인증서', '역할: 싱글보드 개발', '상세: 아두이노 센서 기반 하트비트 수신 및 블루투스 연동'],
	},
	{
		label: '🇨🇦 워킹홀리데이',
		row: 2,
		start: 2022.25,
		end: 2023.05,
		color: '#80E961',
		title: '캐나다 워킹홀리데이',
		date: '2022.03 ~ 2023.02',
		detail: ['국가: 캐나다 밴쿠버', '기간: 약 11개월', '경험: 현지 레스토랑 및 브런치 카페 근무'],
	},
	{
		label: '📚 Windows Dev',
		row: 2,
		start: 2023.17,
		end: 2023.67,
		color: '#FF0097',
		title: 'Windows Developer 고급과정',
		date: '2023.03 ~ 2023.08',
		detail: ['교육기관: 비트교육센터', '교육시간: 720시간', '기술스택: C#, Java, Win32 API, MFC, ASP.NET, WPF'],
	},
	{
		label: '📚 로봇 SW',
		row: 3,
		start: 2024.17,
		end: 2024.67,
		color: '#5C6BC0',
		title: '지능형 로봇 SW개발자 양성 과정',
		date: '2024.03 ~ 2024.09',
		detail: ['교육기관: 우송대학교', '교육시간: 960시간', '기술스택: C, Python, Arduino, Raspberry Pi'],
	},
	{
		label: '📚 AIVLE',
		row: 3,
		start: 2024.75,
		end: 2025.17,
		color: '#EF5350',
		title: 'KT AIVLE SCHOOL',
		date: '2024.09 ~ 2025.02',
		detail: ['교육기관: 고용노동부', '교육시간: 840시간', '기술스택: Python, AI, 머신러닝, 딥러닝, 클라우드'],
	},
	{
		label: '🏆 SW 컨퍼런스',
		row: 4,
		start: 2024.58,
		end: 2024.75,
		color: '#FFB300',
		title: '채용연계형 SW 사업우수성과공유회 컨퍼런스',
		date: '2024.08.16',
		detail: ['수여기관: 과학기술정보통신부, 정보통신기획평가원', '수상: 우수상', '프로젝트: 도파민 중독 해소를 위한 스마트 루틴 관리 헬스케어 웹 서비스 "해방"', '기술스택: HTML/CSS/JS, Python(Flask), Firebase, Raspberry Pi'],
	},
	{
		label: '🏆 소방 빅데이터',
		row: 4,
		start: 2024.83,
		end: 2025.0,
		color: '#FF7043',
		title: '소방안전 빅데이터 활용 및 아이디어 경진대회',
		date: '2024.11.11',
		detail: ['수여기관: 소방청장', '수상: 입선', '프로젝트: 소방 데이터를 활용한 긴급대응시간 및 구조시간 예측', '기술스택: Python, Scikit-learn, XGBoost, LightGBM, LSTM'],
	},
	{
		label: '💼 지란지교데이터',
		row: 5,
		start: 2025.38,
		end: 2026.42,
		color: '#26A69A',
		title: '지란지교데이터 인턴',
		date: '2025.05 ~ 2026.05',
		detail: ['부서: 1연구소 서버솔루션', '담당: DLP솔루션 유지보수 및 테스팅', '기술스택: Spring Boot, MyBatis, Python'],
	},
];

const years = [];
for (let y = START_YEAR; y <= END_YEAR; y++) years.push(y);

const AboutMe = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	return (
		<section id="aboutMe" className="aboutMe-section">
			<div className="timeline">
				<h1>타임라인</h1>
				<div className="gantt">
					<div className="gantt-axis">
						{years.map((y) => (
							<span
								key={y}
								className="gantt-year"
								style={{ left: `${((y - START_YEAR) / TOTAL) * 100}%` }}
							>
								{String(y).slice(2)}
							</span>
						))}
					</div>
					<div className="gantt-grid">
						{years.map((y) => (
							<div
								key={y}
								className="gantt-gridline"
								style={{ left: `${((y - START_YEAR) / TOTAL) * 100}%` }}
							/>
						))}
					</div>
					<div className="gantt-rows">
						{timelineData.map((item, i) => {
							const left = ((item.start - START_YEAR) / TOTAL) * 100;
							const width = ((item.end - item.start) / TOTAL) * 100;
							const barCenter = left + width / 2;
							const popupAlign = barCenter < 25 ? 'left' : barCenter > 75 ? 'right' : 'center';
							const popupDirection = item.row >= 4 ? 'above' : 'below';
							return (
								<div
									key={i}
									className={`gantt-bar ${activeIndex === i ? 'active' : ''}`}
									style={{
										left: `${left}%`,
										width: `${Math.max(width, 1.5)}%`,
										top: `${item.row * 32}px`,
										background: activeIndex === i ? item.color : `${item.color}55`,
									}}
									onMouseEnter={() => setActiveIndex(i)}
									onMouseLeave={() => setActiveIndex(null)}
								>
									<span className="gantt-bar-label">{item.label}</span>
									{activeIndex === i && (
										<div className={`gantt-popup popup-${popupAlign} popup-${popupDirection}`}>
											<strong>{item.title}</strong>
											<span className="gantt-popup-date">{item.date}</span>
											{item.detail.map((line, j) => (
												<p key={j}>{line}</p>
											))}
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;
