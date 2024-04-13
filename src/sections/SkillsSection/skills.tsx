import { AiOutlineExperiment } from 'react-icons/ai';
import { DiScrum } from 'react-icons/di';
import {
  FaAngular,
  FaBookReader,
  FaCrown,
  FaCss3,
  FaFigma,
  FaFolderOpen,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaLanguage,
  FaLinux,
  FaNodeJs,
  FaPassport,
  FaPeopleArrows,
  FaReact,
  FaSass,
  FaServer,
  FaSlack,
  FaThumbsUp,
} from 'react-icons/fa';
import { FaPeopleCarryBox, FaPersonRays } from 'react-icons/fa6';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { MdConveyorBelt, MdDesignServices, MdHttp } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import {
  SiAdobexd,
  SiConfluence,
  SiDigitalocean,
  SiElasticsearch,
  SiExpress,
  SiGnubash,
  SiJavascript,
  SiJest,
  SiJira,
  SiMacos,
  SiMaterialdesign,
  SiMicrosoftoffice,
  SiMongodb,
  SiNestjs,
  SiNotion,
  SiNx,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiTypescript,
  SiVisualstudiocode,
  SiWindows,
} from 'react-icons/si';
import { TiDocumentText } from 'react-icons/ti';

import { Skill } from '../../types/Skill';

export const skills: Skill[] = [
  {
    title: 'HTML',
    category: 'Software Development',
    skillLevelPercent: 90,
    description: 'It is HTML. What do you expect?',
    projects: [],
    tags: ['frontend', 'styling', 'design', 'web', 'language'],
    icon: <FaHtml5 className='h-10 w-10' />,
  },
  {
    title: 'CSS',
    category: 'Software Development',
    skillLevelPercent: 75,
    description: 'Hey ChatGPT, how can I access my database in CSS?',
    projects: [],
    tags: ['frontend', 'web', 'styling', 'design', 'language'],
    icon: <FaCss3 className='h-10 w-10' />,
  },
  {
    title: 'JavaScript',
    category: 'Software Development',
    skillLevelPercent: 95,
    description:
      'Any application that can be written in JavaScript, will eventually be written in JavaScript.',
    projects: [],
    tags: [
      'frontend',
      'backend',
      'web',
      'native',
      '[object Object]',
      'language',
    ],
    icon: <SiJavascript className='h-10 w-10' />,
  },
  {
    title: 'SASS/SCSS/LESS',
    category: 'Software Development',
    skillLevelPercent: 65,
    description: 'Imagine CSS but with superpowers.',
    projects: [],
    tags: ['frontend', 'web', 'styling', 'design', 'language'],
    icon: <FaSass className='h-10 w-10' />,
  },
  {
    title: 'Tailwind CSS',
    category: 'Software Development',
    skillLevelPercent: 45,
    description: 'Oh you want classes? Here are some classes.',
    projects: [],
    tags: ['frontend', 'web', 'styling', 'design', 'framework'],
    icon: <SiTailwindcss className='h-10 w-10' />,
  },
  {
    title: 'Node.js',
    category: 'Software Development',
    skillLevelPercent: 95,
    description: 'Run JavaScript ANYWHERE!',
    projects: [],
    tags: ['frontend', 'backend', 'web', 'native', 'runtime'],
    icon: <FaNodeJs className='h-10 w-10' />,
  },
  {
    title: 'TypeScript',
    category: 'Software Development',
    skillLevelPercent: 95,
    description: 'The better JavaScript.',
    projects: [],
    tags: ['frontend', 'backend', 'web', 'native', 'language'],
    icon: <SiTypescript className='h-10 w-10' />,
  },
  {
    title: 'Angular',
    category: 'Software Development',
    skillLevelPercent: 10,
    description: 'Is AngularJS still a thing?',
    projects: [],
    tags: ['frontend', 'web', 'framework'],
    icon: <FaAngular className='h-10 w-10' />,
  },
  {
    title: 'React',
    category: 'Software Development',
    skillLevelPercent: 70,
    description: 'This is a framework, right? Right?',
    projects: [],
    tags: ['frontend', 'web', 'library'],
    icon: <FaReact className='h-10 w-10' />,
  },
  {
    title: 'React Native',
    category: 'Software Development',
    skillLevelPercent: 60,
    description: 'React to go.',
    projects: [],
    tags: ['frontend', 'native', 'ios', 'android'],
    icon: <IoPhonePortraitOutline className='h-10 w-10' />,
  },
  {
    title: 'Express.js',
    category: 'Software Development',
    skillLevelPercent: 20,
    description: 'Easy peasy API.',
    projects: [],
    tags: ['backend', 'http', 'api', 'framework'],
    icon: <SiExpress className='h-10 w-10' />,
  },
  {
    title: 'Nest.js',
    category: 'Software Development',
    skillLevelPercent: 85,
    description: 'If Angular and Express had a cat together.',
    projects: [],
    tags: ['backend', 'http', 'api', 'framework'],
    icon: <SiNestjs className='h-10 w-10' />,
  },
  {
    title: 'RxJS',
    category: 'Software Development',
    skillLevelPercent: 15,
    description: "Don't blink or you'll miss it.",
    projects: [],
    tags: ['library', 'frontend', 'backend'],
    icon: <MdConveyorBelt className='h-10 w-10' />,
  },
  {
    title: 'Jest',
    category: 'Software Development',
    skillLevelPercent: 50,
    description: "It's a test. It's a jest.",
    projects: [],
    tags: ['testing', 'frontend', 'backend'],
    icon: <SiJest className='h-10 w-10' />,
  },
  {
    title: 'MongoDB',
    category: 'Software Development',
    skillLevelPercent: 70,
    description: 'Humongous amounts of documents.',
    projects: [],
    tags: ['database', 'nosql', 'backend'],
    icon: <SiMongodb className='h-10 w-10' />,
  },
  {
    title: 'Elasticsearch',
    category: 'Software Development',
    skillLevelPercent: 20,
    description: 'Search for the needle in the haystack.',
    projects: [],
    tags: ['database', 'searchengine'],
    icon: <SiElasticsearch className='h-10 w-10' />,
  },
  {
    title: 'SQL',
    category: 'Software Development',
    skillLevelPercent: 5,
    description: 'WHY IS THE SYNTAX SCREAMING AT ME?',
    projects: [],
    tags: ['database', 'relational', 'backend'],
    icon: <SiPostgresql className='h-10 w-10' />,
  },
  {
    title: 'Redis',
    category: 'Software Development',
    skillLevelPercent: 10,
    description: 'Cache me if you can.',
    projects: [],
    tags: ['database', 'backend'],
    icon: <SiRedis className='h-10 w-10' />,
  },
  {
    title: 'Nx',
    category: 'Software Development',
    skillLevelPercent: 85,
    description: 'Monorepo magic.',
    projects: [],
    tags: ['repository', 'frontend', 'backend'],
    icon: <SiNx className='h-10 w-10' />,
  },
  {
    title: 'VS Code',
    category: 'Software Development',
    skillLevelPercent: 100,
    description: 'Why use anything else?',
    projects: [],
    tags: ['editor', 'tool'],
    icon: <SiVisualstudiocode className='h-10 w-10' />,
  },
  {
    title: 'Bash',
    category: 'Software Development',
    skillLevelPercent: 75,
    description: 'The first step to automation.',
    projects: [],
    tags: ['language'],
    icon: <SiGnubash className='h-10 w-10' />,
  },
  {
    title: 'git',
    category: 'Software Development',
    skillLevelPercent: 80,
    description: 'Git gud. Blame others.',
    projects: [],
    tags: ['tool', 'versioning', 'collaboration', 'repository'],
    icon: <FaGitAlt className='h-10 w-10' />,
  },
  {
    title: 'Code Review',
    category: 'Software Development',
    skillLevelPercent: 80,
    description: 'You misspelled a comment. Rejected.',
    projects: [],
    tags: ['tool', 'versioning', 'collaboration', 'repository'],
    icon: <FaThumbsUp className='h-10 w-10' />,
  },
  {
    title: 'UI/UX Design',
    category: 'Design',
    skillLevelPercent: 85,
    description: 'Make it pretty. Make it work.',
    projects: [],
    tags: ['user', 'creativity'],
    icon: <MdDesignServices className='h-10 w-10' />,
  },
  {
    title: 'Material Design',
    category: 'Design',
    skillLevelPercent: 90,
    description: 'Google made it. It must be good.',
    projects: [],
    tags: ['ui', 'designlanguage'],
    icon: <SiMaterialdesign className='h-10 w-10' />,
  },
  {
    title: 'Figma',
    category: 'Design',
    skillLevelPercent: 95,
    description: 'Time to make some mockups.',
    projects: [],
    tags: ['ui', 'design', 'tool'],
    icon: <FaFigma className='h-10 w-10' />,
  },
  {
    title: 'Adobe XD',
    category: 'Design',
    skillLevelPercent: 30,
    description: "Just because Adobe made it, doesn't mean it is good.",
    projects: [],
    tags: ['ui', 'design', 'tool'],
    icon: <SiAdobexd className='h-10 w-10' />,
  },
  {
    title: 'GitHub',
    category: 'Infrastructure',
    skillLevelPercent: 90,
    description: 'It feels like home.',
    projects: [],
    tags: ['versioning', 'collaboration', 'tool', 'repository', 'hosting'],
    icon: <FaGithub className='h-10 w-10' />,
  },
  {
    title: 'Keycloak',
    category: 'Infrastructure',
    skillLevelPercent: 15,
    description: 'I forgot my password.',
    projects: [],
    tags: ['usermanagement', 'authentication'],
    icon: <FaPassport className='h-10 w-10' />,
  },
  {
    title: 'Alfresco',
    category: 'Infrastructure',
    skillLevelPercent: 50,
    description: 'Where did I put that file?',
    projects: [],
    tags: ['cms', 'filestorage'],
    icon: <FaFolderOpen className='h-10 w-10' />,
  },
  {
    title: 'DigitalOcean',
    category: 'Infrastructure',
    skillLevelPercent: 80,
    description: 'An ocean is just a lot of droplets.',
    projects: [],
    tags: ['hosting', 'cloud'],
    icon: <SiDigitalocean className='h-10 w-10' />,
  },
  {
    title: 'REST API',
    category: 'Additional Skills',
    skillLevelPercent: 70,
    description: 'GET, POST, PUT, DELETE. Repeat.',
    projects: [],
    tags: ['standard', 'communication', 'http'],
    icon: <MdHttp className='h-10 w-10' />,
  },
  {
    title: 'WebSockets',
    category: 'Additional Skills',
    skillLevelPercent: 45,
    description: 'They left you on read.',
    projects: [],
    tags: ['standard', 'communication'],
    icon: <FaPeopleArrows className='h-10 w-10' />,
  },
  {
    title: 'SSE',
    category: 'Additional Skills',
    skillLevelPercent: 50,
    description: 'Be quiet, the server is talking!',
    projects: [],
    tags: ['standard', 'communication'],
    icon: <FaServer className='h-10 w-10' />,
  },
  {
    title: 'MacOS',
    category: 'Additional Skills',
    skillLevelPercent: 100,
    description: 'Amazing hardware, good software.',
    projects: [],
    tags: ['os', 'tool'],
    icon: <SiMacos className='h-10 w-10' />,
  },
  {
    title: 'Linus',
    category: 'Additional Skills',
    skillLevelPercent: 85,
    description: 'The penguin is my friend.',
    projects: [],
    tags: ['os', 'tool'],
    icon: <FaLinux className='h-10 w-10' />,
  },
  {
    title: 'Windows',
    category: 'Additional Skills',
    skillLevelPercent: 95,
    description: 'Only good for gaming. And even then...',
    projects: [],
    tags: ['os', 'tool'],
    icon: <SiWindows className='h-10 w-10' />,
  },
  {
    title: 'Microsoft Office',
    category: 'Additional Skills',
    skillLevelPercent: 100,
    description: "Who doesn't know how to use Office?",
    projects: [],
    tags: ['tool', 'productivity'],
    icon: <SiMicrosoftoffice className='h-10 w-10' />,
  },
  {
    title: 'LaTeX',
    category: 'Additional Skills',
    skillLevelPercent: 100,
    description: 'Like Word, but without Microsoft. Also not at all like Word.',
    projects: [],
    tags: ['tool', 'productivity'],
    icon: <TiDocumentText className='h-10 w-10' />,
  },
  {
    title: 'Scrum',
    category: 'Additional Skills',
    skillLevelPercent: 85,
    description: 'Stand up, sit down, have meetings, repeat.',
    projects: [],
    tags: ['methodology', 'agile'],
    icon: <DiScrum className='h-10 w-10' />,
  },
  {
    title: 'Jira',
    category: 'Additional Skills',
    skillLevelPercent: 90,
    description: 'Did you check the backlog?',
    projects: [],
    tags: ['agile', 'tool'],
    icon: <SiJira className='h-10 w-10' />,
  },
  {
    title: 'Confluence',
    category: 'Additional Skills',
    skillLevelPercent: 95,
    description: 'Where is the documentation?',
    projects: [],
    tags: ['tool', 'productivity'],
    icon: <SiConfluence className='h-10 w-10' />,
  },
  {
    title: 'Notion',
    category: 'Additional Skills',
    skillLevelPercent: 90,
    description: "It's just a note-taking app.",
    projects: [],
    tags: ['tool', 'productivity'],
    icon: <SiNotion className='h-10 w-10' />,
  },
  {
    title: 'Slack',
    category: 'Additional Skills',
    skillLevelPercent: 50,
    description: 'How nerds communicate. And everyone else too, I guess.',
    projects: [],
    tags: ['tool', 'productivity', 'communication'],
    icon: <FaSlack className='h-10 w-10' />,
  },
  {
    title: 'Teamwork',
    category: 'Soft Skills',
    description: 'Let us work together to achieve greatness.',
    tags: [
      'team',
      'productivity',
      'communication',
      'collaboration',
      'personality',
    ],
    icon: <FaPeopleCarryBox className='h-10 w-10' />,
  },
  {
    title: 'Communication',
    category: 'Soft Skills',
    description: 'Let me tell you a story.',
    tags: [
      'team',
      'productivity',
      'communication',
      'collaboration',
      'personality',
    ],
    icon: <RiTeamFill className='h-10 w-10' />,
  },
  {
    title: 'Problem Solving',
    category: 'Soft Skills',
    description: 'I have a problem. I think about it. I solve it.',
    tags: ['productivity', 'personality'],
    icon: <AiOutlineExperiment className='h-10 w-10' />,
  },
  {
    title: 'Responsibility',
    category: 'Soft Skills',
    description: 'You can count on me.',
    tags: ['productivity', 'personality', 'team'],
    icon: <FaCrown className='h-10 w-10' />,
  },
  {
    title: 'Independency',
    category: 'Soft Skills',
    description: 'Time to get in the zone.',
    tags: ['productivity', 'personality', 'team'],
    icon: <FaPersonRays className='h-10 w-10' />,
  },
  {
    title: 'Learning Skills',
    category: 'Soft Skills',
    description: 'I am a sponge. I soak up knowledge.',
    tags: ['productivity', 'personality'],
    icon: <FaBookReader className='h-10 w-10' />,
  },
  {
    title: 'German',
    category: 'Soft Skills',
    description: 'Born in Hannover, raised in Schleswig-Holstein.',
    tags: ['personality', 'language', 'communication'],
    icon: <FaLanguage className='h-10 w-10' />,
  },
  {
    title: 'English',
    category: 'Soft Skills',
    description:
      'The language of the internet, memes and software development.',
    tags: ['personality', 'language', 'communication'],
    icon: <FaLanguage className='h-10 w-10' />,
  },
];