
import vueIcon from '../../assets/images/skills/vue.png';
import tsIcon from '../../assets/images/skills/ts.png';
import dotnetIcon from '../../assets/images/skills/dotnet.png';
import reactIcon from '../../assets/images/skills/react.png';
import jsIcon from '../../assets/images/skills/js.png';
import csharpIcon from '../../assets/images/skills/csharp.png';
import phpIcon from '../../assets/images/skills/php.png';
import laravelIcon from '../../assets/images/skills/laravel.png';
import wordIcon from '../../assets/images/skills/wordpress.png';
import pythonIcon from '../../assets/images/skills/python.png';
import djangoIcon from '../../assets/images/skills/dj.png';
import awsIcon from '../../assets/images/skills/aws.png';

import solidIcon from '../../assets/images/skills/solid.png';
import solanaIcon from '../../assets/images/skills/solana.png';
import web3 from '../../assets/images/skills/web3.png';

import javaIcon from '../../assets/images/skills/java.png';
import flutterIcon from '../../assets/images/skills/flutter.png';
import ionicIcon from '../../assets/images/skills/ionic.png';

export const skillCat = {
	web: {
		categoryName: 'Web Dev',
		percentage: 50,
		skillList: [
			{ name: 'C#', xp: '3 YRS', icon: csharpIcon },
			{ name: 'NET', xp: '2 YRS', icon: dotnetIcon },
			{ name: 'Node', xp: '4 YRS', icon: jsIcon },
			{ name: 'REACT', xp: '2 YRS', icon: reactIcon },
			{ name: 'VUE', xp: '2 YRS', icon: vueIcon },
			{ name: 'TypeScript', xp: '2 YRS', icon: tsIcon },
			{ name: 'PHP', xp: '3 YRS', icon: phpIcon },
			{ name: 'Laravel', xp: '2 YRS', icon: laravelIcon },
			{ name: 'WordPress', xp: '2 YRS', icon: wordIcon },
			{ name: 'Python', xp: '2 YRS', icon: pythonIcon },
			{ name: 'Django', xp: '2 YRS', icon: djangoIcon },
			{ name: 'AWS', xp: '2 YRS', icon: awsIcon },
		],
	},
	game: {
		categoryName: 'BlockChain',
		percentage: 20,
		skillList: [
			{ name: 'Solidity', xp: '5 YRS', icon: solidIcon },
			{ name: 'Solana', xp: '3 YRS', icon: solanaIcon },
			{ name: 'Web3', xp: '3 YRS', icon: web3 },
		],
	},
	design: {
		categoryName: 'Design',
		percentage: 30,
		skillList: [
			{ name: 'Java', xp: '15 YRS', icon: javaIcon },
			{ name: 'Flutter', xp: '1 YR', icon: flutterIcon },
			{ name: 'React Native', xp: '1 YR', icon: reactIcon },
			{ name: 'Ionic', xp: '1 YR', icon: ionicIcon },
		],
	},
	soft: {
		categoryName: ['Creative', 'Perseverant', 'Patient', 'Enthusiastic', 'Hardworking', 'Amusing'],
		percentage: 100,
	},
};
