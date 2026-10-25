// 작품 속 계정 전환용 설정입니다. 실제 보안 인증/기밀 저장 기능은 아닙니다.
// ID와 접근 코드는 아래에서 변경하세요. 화면에는 계정 목록을 표시하지 않습니다.
window.GUIDE_ACCOUNTS = {
 assistant: {id:'AS-001',code:'WELCOME01',label:'조교',english:'ASSISTANT',level:'01',department:'육성지원부',badge:'신규 입사',initial:'A',profileImage:'assets/profile-placeholder.svg',
 title:'당신의 첫 근무를<br>함께 시작합니다<span>.</span>',description:'작은 관찰과 세심한 지원이 후보생의 하루를 지킵니다.<br>업무를 시작하기 전, 오늘의 안내를 확인해 주세요.',eyebrow:'A NEW DAY AT GUIDE',assignment:'담당 팀 배정 대기',assignmentNote:'배정이 완료되면 후보생 기본 정보와 지원 일정이 표시됩니다.',clearance:'조교 · 기본 업무 열람',scope:'배정된 업무와 공개된 운영 지침을<br>확인할 수 있습니다.',checkTitle:'첫 근무 준비',checks:['조교 업무 지침 확인','근무 동선 및 시설 위치 확인','보고 체계와 연락 부서 확인'],scheduleTitle:'첫날 일정',scheduleTag:'입사 안내 일정',schedule:[['09:00','신규 직원 오리엔테이션','행정동 · 안내 데스크','30분'],['10:00','시설 및 안전 동선 안내','교육동 · 공용 구역','60분'],['13:00','훈련 지원 업무 참관','훈련실 · 담당 교관 동행','90분'],['16:00','업무 인계 및 질의','육성지원부 · 조교실','30분']],documents:['GA-001','GA-002','GA-003','GA-004','GA-005']},
 instructor: {id:'IN-001',code:'FIELD01',label:'교관',english:'INSTRUCTOR',level:'02',department:'교육운영부',badge:'교육 담당',initial:'I',
 // [교관 프로필 이미지 교체 위치] assets 폴더에 이미지를 넣고 아래 경로만 변경하세요.
 // 예: profileImage:'assets/instructor-profile.png'
 profileImage:'assets/profile-placeholder.svg',
 title:'오늘의 훈련을<br>안전하게 이끕니다<span>.</span>',description:'후보생의 상태를 확인하고 교육의 흐름을 조율합니다.<br>훈련에 앞서 운영 지침과 점검 사항을 확인해 주세요.',eyebrow:'TRAINING & SUPERVISION',assignment:'훈련 운영 계정',assignmentNote:'교육 일정과 현장 운영 지침을 열람할 수 있습니다.',clearance:'교관 · 교육 운영 열람',scope:'훈련 운영과 평가에 필요한<br>업무 문서를 확인할 수 있습니다.',checkTitle:'훈련 전 점검',checks:['훈련 계획과 준비 항목 확인','시설 및 장비 점검 확인','조교 업무 분담 확인'],scheduleTitle:'교육 운영 일정',scheduleTag:'기본 근무 일정',schedule:[['09:00','훈련 계획 확인','교육운영부 · 교관실','30분'],['10:00','시설 및 장비 점검','교육동 · 훈련 구역','30분'],['13:00','훈련 지도 및 현장 관찰','교육동 · 훈련실','90분'],['16:00','평가 기록 및 인계','교육운영부 · 교관실','30분']],documents:['GI-001','GI-002','GI-003','GA-002','GA-004']},
 researcher: {id:'RE-001',code:'RECORD01',label:'연구원',english:'RESEARCHER',level:'03',department:'연구지원부',badge:'연구 담당',initial:'R',
 // [연구원 프로필 이미지 교체 위치] assets 폴더에 이미지를 넣고 아래 경로만 변경하세요.
 // 예: profileImage:'assets/researcher-profile.png'
 profileImage:'assets/profile-placeholder.svg',
 title:'관찰을 기록하고,<br>변화를 확인합니다<span>.</span>',description:'정확한 기록은 신뢰할 수 있는 연구의 시작입니다.<br>자료 취급 절차와 관찰 기록 지침을 확인해 주세요.',eyebrow:'OBSERVATION & RECORDS',assignment:'연구 기록 계정',assignmentNote:'연구 업무 지침과 기록 관리 절차를 열람할 수 있습니다.',clearance:'연구원 · 연구 업무 열람',scope:'승인된 연구 지침과 기록 관리<br>문서를 확인할 수 있습니다.',checkTitle:'연구 업무 준비',checks:['관찰 기록 양식 확인','측정 장비 점검 확인','자료 인계 절차 확인'],scheduleTitle:'연구 업무 일정',scheduleTag:'기본 근무 일정',schedule:[['09:00','기록 및 인계 사항 확인','연구지원부 · 기록실','30분'],['10:00','측정 장비 점검','연구동 · 측정실','60분'],['13:00','관찰 자료 정리','연구지원부 · 분석실','90분'],['16:00','기록 검토 및 인계','연구지원부 · 기록실','30분']],documents:['GR-001','GR-002','GR-003']}
};
