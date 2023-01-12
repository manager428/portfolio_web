import webLink from '../../assets/images/links/globe2.svg';
import ytLink from '../../assets/images/links/youtube.svg';

import webRealEstate from '../../assets/images/projects/web_real_estate.png';
import webHospital from '../../assets/images/projects/web_hospital.png';
import webTravel from '../../assets/images/projects/web_travel.png';
import webGame from '../../assets/images/projects/web_game.png';
import webChat from '../../assets/images/projects/web_chat.png';
import webSocial from '../../assets/images/projects/web_social.png';
import webBlr from '../../assets/images/projects/web_blr.png';
import webFamily from '../../assets/images/projects/web_family.png';
import webEcommerce from '../../assets/images/projects/web_ecommerce.png';

import blockDefira from '../../assets/images/projects/block_defira.png';
import blockCoffee from '../../assets/images/projects/block_coffee.png';
import blockMyria from '../../assets/images/projects/block_myria.png';
import blockMon from '../../assets/images/projects/block_mon.png';
import blockAffyn from '../../assets/images/projects/block_affyn.png';
import blockSqu from '../../assets/images/projects/block_squ.png';

import moEsport from '../../assets/images/projects/mo_esport.png';
import moIon from '../../assets/images/projects/mo_ion.png';

export const web = [
	{
		name: 'Real Estate',
		date: '2022-05-08',
		cover: webRealEstate,
		links: [{ icon: webLink, link: 'https://www.casamona.com/' }],
	},
	{
		name: 'Hospital',
		date: '2022-04-30',
		cover: webHospital,
		links: [{ icon: webLink, link: 'https://www.childrenscolorado.org/' }],
	},
	{
		name: 'Travel',
		date: '2022-03-20',
		cover: webTravel,
		links: [{ icon: webLink, link: 'https://www.egypttoursplus.com/' }]
	},
	{
		name: 'Game',
		date: '2022-03-06',
		cover: webGame,
		links: [{ icon: webLink, link: 'https://app.novos.gg' }],
	},
	{
		name: 'Chatting',
		date: '2021-10-21',
		cover: webChat,
		links: [
			{ icon: webLink, link: 'https://zulip.com/' },
		],
	},
	{
		name: 'Social',
		date: '2021-11-16',
		cover: webSocial,
		links: [{ icon: webLink, link: 'https://musicengine.top/' }],
	},
	{
		name: 'Video Chatting',
		date: '2022-03-20',
		cover: webBlr,
		links: [
			{ icon: webLink, link: 'https://bublr.co/' },
		],
	},
	{
		name: 'Family',
		date: '2022-03-20',
		cover: webFamily,
		links: [
			{ icon: webLink, link: 'https://www.matterfamilyoffice.com/' },
		],
	},
	{
		name: 'Ecommerce',
		date: '2022-03-20',
		cover: webEcommerce,
		links: [
			{ icon: webLink, link: 'https://www.shein.com/' },
		],
	},
];

export const blockchain = [
	{
		name: 'Defira',
		date: '2022-04-03',
		cover: blockDefira,
		links: [{ icon: webLink, link: 'https://app.defira.com/' }],
	},
	{
		name: 'Coffee War',
		date: '2022-03-13',
		cover: blockCoffee,
		links: [{ icon: webLink, link: 'http://coffeewarsnft.com/' }],
	},
	{
		name: 'Myria',
		date: '2020-04-20',
		cover: blockMyria,
		links: [{ icon: webLink, link: 'https://myria.com/' }],
	},
	{
		name: 'Monstainfinite',
		date: '2018-05-12',
		cover: blockMon,
		links: [{ icon: webLink, link: 'https://monstainfinite.com/' }],
	},
	{
		name: 'Affyn',
		date: '2018-07-17',
		cover: blockAffyn,
		links: [{ icon: webLink, link: 'https://www.affyn.com/' }],
	},
	{
		name: 'Squadhelp',
		date: '2018-07-17',
		cover: blockSqu,
		links: [{ icon: webLink, link: 'https://www.squadhelp.com/' }],
	},
];

export const mobile = [
	{
		name: 'SA Esportes',
		date: '2019-05-21',
		cover: moEsport,
		links: [{ icon: ytLink, link: 'https://m.apkpure.com/sa-esportes/com.mitsoftwares.newappbancaapostas' }],
	},
	{
		name: 'IONITY',
		date: '2018-12-20',
		cover: moIon,
		links: [{ icon: ytLink, link: 'https://apps.apple.com/us/app/ionity/id1551448692' }],
	},
];
