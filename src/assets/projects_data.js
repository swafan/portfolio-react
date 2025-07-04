import barter_cover_img from '../assets/barter_cover_img_page-0001.jpg'
import futures_cover_img from '../assets/futures_cover_img.jpg'
import barter_visual_language from '../assets/barter_visual_language.png'
import barter_bmc from '../assets/barter_bmc.jpg'
import futures_explanation from '../assets/futures_explanation.jpg'

const projects_data = [
  {
    // Project card details
    project_cover_img: barter_cover_img,
    project_name: "Barter Edtech App Launch",
    project_role: "Co-founder, Product & Marketing Lead",
    project_status: "MVP launched · Paused Post-COVID",
    project_tagline: "We built a student language app from scratch. Here’s what worked—and what didn’t.",
    project_technologies: "Figma",
    // Project expanded details
    project_expanded_idea: "A peer-learning platform for students to practice languages through real conversation. Think Tinder meets tandem exchange—fast onboarding, academic framing, meaningful dialogue.",
    project_expanded_role: "I co-founded and led product marketing and design coordination. I worked closely with designers and developers to ship the MVP and shape our visual identity.",
    project_expanded_approach1: "Design / Product: I focused on defining a visual language that felt warm, playful, and credible. Typography, palette, and layout choices reinforced a tone of student-driven collaboration.",
    project_expanded_approach2: "Marketing: We ran direct outreach across six universities, partnering with student clubs and language departments. Our most engaged cohort came from a Brown University professor who promoted us to her language class.",
    project_expanded_outcome: "We launched a polished MVP with working onboarding and early matching logic. Organic traction was strong, but as in-person routines resumed post-COVID, usage slowed. The project is now paused—but the process shaped how I think about product, language, and UX.",
    project_expanded_img_1: barter_cover_img,
    project_expanded_img_1_caption: "The Barter app landing page and introduction to the app.",
    project_expanded_img_2: barter_visual_language,
    project_expanded_img_2_caption: "Early visual language designs on Figma, designed to be warm and playful.",
    project_expanded_img_3: barter_bmc,
    project_expanded_img_3_caption: "Initial business model ideas, timelines, and launch."

  },
  {
   // Project card details
    project_cover_img: futures_cover_img,
    project_name: "Index Futures Forecaster",
    project_role: "Developer",
    project_status: "Deployed. Refined and live in use after handoff",
    project_tagline: "Learned Python and ML on the job. Built a futures predictor that traders still use.",
    project_technologies: "Python, VBA, Bloomberg API",
    // Project expanded details
    project_expanded_idea: "Forecast directional movement (up/down/flat) of Southeast Asian index futures using “underutilized” trading signals (beyond volatility and momentum) to help traders make real-time hedging decisions.",
    project_expanded_role: "During a summer internship on an equities desk, I built the working prototype from scratch—my first time using Python or machine learning. I also handled Excel/VBA integration for trader handoff.",
    project_expanded_approach1: "Spent evenings and weekends self-teaching Python and ML. Parsed 20+ years of millisecond-level Bloomberg data. The model hit ~80% accuracy on historical data—likely overfit, but directionally robust.",
    project_expanded_outcome: "The model was later refined and used by the head trader in live decisions. Proprietary constraints prevent sharing code or demos—but it remains one of my most direct applications of data science in practice.",
    project_expanded_img_1: futures_cover_img,
    project_expanded_img_1_caption: "Proprietary constraints prevent sharing code or demos.",
    project_expanded_img_2: futures_explanation,
    project_expanded_img_2_caption: "Model takes in region-specific indicators, standard market signals, and other proprietary signals.",

  }
  // {
  //   project_name: "Daytrading Bot",
  //   project_role: "Developer",
  //   project_status: "In development · Paper trading phase to test performance",
  //   project_tagline: "A Python bot trading US and Asian stocks on my personal accounts on the back of my professional salestrading/markets background.",
  //   project_technologies: "Python, IBKR API",
  //   project_expanded_idea: "Build a trading bot that leverages my market knowledge and trading experience to execute trades on my behalf.",
  //   project_expanded_role: "As the sole developer, I am responsible for the entire development process, from ideation to strategy generation to development to testing.",
  //   project_expanded_approach1: "Day trading is notoriously difficult. Machines are also notoriously bad at it. I'm trying to build a bot that trades like how I would trade, but allows me time to focus on other things.",
  //   project_expanded_approach2: "The most important thing is failsafes. I've implemented several layers of risk management for every functionality of the bot: for example, I run multiple calculations simultaneously on position sizing, stop losses, and market events.",
  //   project_expanded_outcome: "Two basic strategies have been created, which is currently in the paper trading phase, where I use IBKR's testing environment to simulate trades without risking real money. This allows me to test its performance and make improvements before going live.",
  // }
]

export default projects_data;