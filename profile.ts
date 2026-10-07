// All site content lives here. Edit this file to change any text on the site.
// Rule of thumb: each fact appears in exactly one place, so a recruiter never
// reads the same achievement twice.

export const personal = {
  name: 'Sarthak Gandhi',
  program: 'MBA candidate, IPMX 19, IIM Lucknow',
  intro:
    'I spent five years at TresVista advising private equity funds, hedge funds and family offices across the US, UK, Middle East and Asia, rising from campus analyst to the Associate who owned the client and led the team. At IIM Lucknow I am adding the strategy and leadership layer for roles in consulting, corporate strategy, transformation and client leadership in financial services.',
  location: 'Noida, Delhi NCR',
  email: 'sarthakgandhi20@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sarthak-gandhi-702b17152/',
  linkedinLabel: 'linkedin.com/in/sarthak-gandhi-702b17152',
  resumeFile: '/Sarthak_Gandhi_Resume.pdf',
}

// Scale and quality signals. Money outcomes live in the engagements, not here.
export const figures = [
  { value: '5 years', label: 'at TresVista, Analyst to Associate' },
  { value: '8,500+', label: 'professional network on LinkedIn' },
  { value: '800+', label: 'client projects delivered' },
  { value: '4.8/5', label: 'average client feedback' },
  { value: '0%', label: 'client attrition on accounts I delivered' },
  { value: '6', label: 'markets served: US, UK, Middle East, Hong Kong, Singapore, India' },
]

export const strengths = [
  {
    title: 'An investor’s view of the numbers',
    body: 'Valuation, LBO and DCF models, quality of earnings diligence, fundraising and portfolio monitoring, learned on live mandates for funds that were putting real capital to work.',
  },
  {
    title: 'Client ownership that grows accounts',
    body: 'Primary contact for CIOs, CFOs, CEOs and founders. I scope new work, cross sell, run pre-sales conversations and spot an at risk account before it leaves.',
  },
  {
    title: 'Leadership that scales the work',
    body: 'I build and train teams, run programs end to end and redesign how recurring work gets done, so teams deliver faster without losing quality.',
  },
]

export const roles = [
  {
    title: 'Financial and management consulting',
    why: 'Structured problem solving on live client mandates, with depth in banking, funds and private markets.',
  },
  {
    title: 'Corporate strategy and CEO office',
    why: 'Board materials, capital allocation analysis and cross functional execution for leadership teams.',
  },
  {
    title: 'Business transformation',
    why: 'Moved clients onto new planning, portfolio and CRM systems and rebuilt recurring workflows around automation and AI.',
  },
  {
    title: 'Relationship and wealth banking',
    why: 'Grew and retained institutional accounts, worked with family office and HNI investors, and started out in mutual fund distribution.',
  },
  {
    title: 'Strategic finance and corporate development',
    why: 'M&A modelling, diligence and investor reporting for PE backed businesses.',
  },
]

export type Lens = 'Client and sales' | 'Consulting and strategy' | 'Transformation' | 'Finance and investing'
export const lenses: Lens[] = ['Client and sales', 'Consulting and strategy', 'Transformation', 'Finance and investing']

export interface Engagement {
  title: string
  client: string
  result: string
  situation: string
  action: string
  outcome: string
  lenses: Lens[]
}

export const engagements: Engagement[] = [
  {
    title: 'Growing two institutional accounts',
    client: 'A US private equity fund and a BlackRock owned infrastructure fund',
    result: '3 new contracts, about $230K a year',
    situation: 'Each client paid for a set number of dedicated analysts, and both had needs beyond the original scope.',
    action:
      'Tracked how each client’s business was changing, scoped new work for the PE fund and cross sold a CFO services role to the infrastructure fund. Separately, I led pre-sales for a UK PE prospect directly with its founder.',
    outcome:
      'Took the PE fund from 1 to 3 contracts and the infrastructure fund from 2 to 3, adding about $230K in annual contract value. The UK prospect signed on as a client.',
    lenses: ['Client and sales', 'Consulting and strategy'],
  },
  {
    title: 'Keeping clients through distress',
    client: 'Two distressed investment clients',
    result: 'About $160K of revenue protected',
    situation: 'Two clients came under financial pressure and were likely to cut back or end their support.',
    action:
      'Built an expected attrition tracker, acted on the early warning signs, and supported the turnaround of a distressed behavioural health business inside one of the portfolios.',
    outcome:
      'Both clients stayed, protecting about $160K in revenue. The behavioural health turnaround helped raise $100M in additional funds.',
    lenses: ['Client and sales', 'Consulting and strategy'],
  },
  {
    title: 'Fundraising for a global placement agent',
    client: 'A UK based fund placement agent',
    result: '$1B+ raised across 50+ funds',
    situation: 'The agent raised capital for PE, hedge and ESG funds from institutional, family office and HNI investors.',
    action:
      'Built LP targeting by ticket size, sector and geography, ran the investor CRM and monthly meeting analysis, prepared pitchbooks, PPMs, DDQs and CIMs, and joined GP and LP meetings.',
    outcome: 'Supported fundraising for 50+ funds that raised more than $1B over about four years.',
    lenses: ['Finance and investing', 'Client and sales'],
  },
  {
    title: 'Underwriting a dental roll up',
    client: 'A PE backed US dental support organisation',
    result: '20+ acquisitions modelled',
    situation: 'The platform was growing through a steady stream of practice acquisitions that each needed underwriting.',
    action:
      'Built deal models for each acquisition, analysed general ledger data for practices in diligence, and prepared LBO and DCF valuations, quality of earnings work, synergy and downside cases and IC notes.',
    outcome: 'Modelled 20+ acquisitions and diligenced 20+ practices for the fund’s investment committee.',
    lenses: ['Finance and investing', 'Consulting and strategy'],
  },
  {
    title: 'Partner to a hedge fund CIO',
    client: 'A US hedge fund with about $80M AUM in equity and credit',
    result: 'Reporting time cut by 60%+',
    situation: 'The CIO relied on one dedicated analyst for research, trade ideas and investor reporting.',
    action:
      'Worked as the sole analyst to the CIO, proposed buy and sell actions and drafted the quarterly investor letter for three years. Moved the fund’s portfolio and investment data onto Addepar with automatically updating S&P 500 benchmarks.',
    outcome: 'Reporting time fell by more than 60%.',
    lenses: ['Finance and investing', 'Transformation'],
  },
  {
    title: 'Modernising finance workflows',
    client: 'CFO teams and investment firms',
    result: '40% less reporting time',
    situation: 'Recurring planning, reporting and CRM work ran on older tools and manual steps.',
    action:
      'Supported a US mobility company’s CFO through the move to Workday Adaptive Planning, migrated a client’s CRM from Dynamo to DealCloud, built Power BI utilisation dashboards, and wrote the templates and manuals used to train Model ML, an AI firm working with TresVista, on recurring workflows.',
    outcome:
      'Cut the mobility company’s reporting time by 40% and saved clients 20+ hours a month through dashboards. The AI workflows are expected to cut task time by 60 to 80%.',
    lenses: ['Transformation', 'Consulting and strategy'],
  },
]

export interface CareerStep {
  dates: string
  role: string
  org: string
  place: string
  note: string
}

// Most recent first.
export const career: CareerStep[] = [
  {
    dates: '2026 to present',
    role: 'Placement Coordinator, IPMX 19 Placement Committee',
    org: 'IIM Lucknow',
    place: 'Noida',
    note: 'Recruiter acquisition and retention for a cohort of 108 experienced professionals.',
  },
  {
    dates: 'Jan 2023 to Aug 2025',
    role: 'Associate',
    org: 'TresVista Financial Services',
    place: 'Gurugram',
    note: 'Primary contact for 5 institutional clients and lead of a 5 analyst team. Shining Star award for best Associate.',
  },
  {
    dates: 'Jan 2022 to Dec 2022',
    role: 'Senior Analyst',
    org: 'TresVista Financial Services',
    place: 'Mumbai',
    note: 'Promoted early after a 5 out of 5 performance rating.',
  },
  {
    dates: 'Aug 2020 to Dec 2021',
    role: 'Analyst',
    org: 'TresVista Financial Services',
    place: 'Mumbai',
    note: 'Campus hire from Symbiosis. Shining Star award for best Analyst.',
  },
  {
    dates: '2017 to 2019',
    role: 'Sales and distribution internships',
    org: 'Karvy Stock Broking, Slicepay, Market Expertise',
    place: '',
    note: 'Onboarded 10+ independent financial advisors to grow mutual fund distribution after ICICI Prudential MF training, drove credit card sign ups as a campus manager, and cold called prospects across the US, UK and Gulf.',
  },
]

export interface LeadershipGroup {
  where: string
  items: { title: string; body: string }[]
}

export const leadership: LeadershipGroup[] = [
  {
    where: 'TresVista',
    items: [
      {
        title: 'Opened the Delhi office',
        body: 'As part of the seed team, onboarded 5 new clients with a new team and manager and kept every one of them through the trial period.',
      },
      {
        title: 'Developed analysts',
        body: 'Ran 100+ hours of knowledge transfer for 10+ incoming analysts, all of whom cleared probation, and conducted hiring interviews.',
      },
      {
        title: 'Built the culture',
        body: 'Created InvestoMania, a stock pitch competition that drew 200+ employees, and helped run TresVista Day for three years.',
      },
    ],
  },
  {
    where: 'IIM Lucknow',
    items: [
      {
        title: 'Project Sangam, recruiter outreach',
        body: 'Reached 200+ firms and secured about 30 recruiter meetings. Built the committee’s recruitment CRM, a points based contact sourcing drive across the cohort, and tailored pitch decks for recruiters.',
      },
      {
        title: 'UDYAM 2026',
        body: 'Co-organised four industry panels and wrote the moderator briefings and speaker communications.',
      },
    ],
  },
  {
    where: 'Symbiosis, Pune',
    items: [
      {
        title: 'Raised money for student ventures',
        body: 'As VP Finance of Enactus, built projections and pitches that funded 4 social ventures. As Head of Finance and Sponsorship for Conoscenza, secured ₹20K+ from 10+ sponsors. Founding Head of the Investment Board.',
      },
    ],
  },
]

export const mbaWork = [
  {
    title: 'Vodafone Idea transformation study',
    course: 'Management of Change and Transformation',
    body: 'Group study of Vi as a company going through a major transformation. In progress.',
  },
  {
    title: 'Eternal (Zomato) strategy',
    course: 'Strategic Management',
    body: 'Wrote the strategy formulation and implementation sections of the group report and deck.',
  },
  {
    title: 'boAt Lifestyle positioning',
    course: 'Strategic Management',
    body: 'Owned the competitor benchmarking and positioning analysis against Noise, Boult and other rivals.',
  },
  {
    title: 'GE Vernova T&D India',
    course: 'Financial Management',
    body: 'Individual financial analysis model of the listed business.',
  },
  {
    title: 'This website and Franchise CFO',
    course: 'Agentic AI',
    body: 'Built this site with AI tools, GitHub and Vercel. Designed Franchise CFO, a T20 auction and team finance game, and am building it as a browser game.',
  },
]

export const recognition = [
  '1st of 26 teams, Pansari Group case competition, with an inventory optimisation and SKU grading framework',
  '1st place, football competition, IIM Lucknow',
  '1st place, chess, Conoscenza, Symbiosis',
  'Three published papers: GoDigit risk management (Hiralis, 2019), Infosys international business practices (Asian Journal of Management, 2019), COVID 19 impact on Indian sectors (AIJR, 2020)',
]

export const education = [
  { program: 'MBA, IPMX 19', org: 'IIM Lucknow, Noida campus', dates: '2026 to 2027', note: '' },
  {
    program: 'BBA, Accounting and Finance',
    org: 'Symbiosis Centre for Management Studies, Pune',
    dates: '2017 to 2020',
    note: 'CGPA 7.6/10',
  },
]
