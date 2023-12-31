import {init_tome, type Tome} from '$lib/tome.js';
import Pending_Animation from '$routes/library/Pending_Animation/+page.svelte';
import Pending_Button from '$routes/library/Pending_Button/+page.svelte';
import Package_Summary from '$routes/library/Package_Summary/+page.svelte';
import Package_Detail from '$routes/library/Package_Detail/+page.svelte';
import Teleport from '$routes/library/Teleport/+page.svelte';
import Alert from '$routes/library/Alert/+page.svelte';
// import Library from '$routes/library/Library/+page.svelte';
// import menu_item from '$routes/library/menu_item/+page.svelte';
import Redirect from '$routes/library/Redirect/+page.svelte';
import Hue_Input from '$routes/library/Hue_Input/+page.svelte';
import Breadcrumb from '$routes/library/Breadcrumb/+page.svelte';
import Card from '$routes/library/Card/+page.svelte';

export const tomes: Tome[] = [
	// TODO maybe? or do styles like this belong elsewhere?
	// {
	// 	name: 'menu item',
	// 	slug: 'menu_item',
	// 	pathname: '',
	// 	category: 'styles',
	// 	component: menu_item,
	// 	related: [],
	// },
	{
		name: 'Alert',
		slug: 'Alert',
		pathname: '',
		category: 'components',
		component: Alert,
		related: ['Card'],
	},
	{
		name: 'Breadcrumb',
		slug: 'Breadcrumb',
		pathname: '',
		category: 'components',
		component: Breadcrumb,
		related: ['Redirect'],
	},
	{
		name: 'Card',
		slug: 'Card',
		pathname: '',
		category: 'components',
		component: Card,
		related: ['Alert'],
	},
	{
		name: 'Hue_Input',
		slug: 'Hue_Input',
		pathname: '',
		category: 'components',
		component: Hue_Input,
		related: [], // TODO externals?
	},
	// TODO implement
	// {
	// 	name: 'Library',
	// 	slug: 'Library',
	// 	pathname: '',
	// 	category: 'components',
	// 	component: Library,
	// 	related: [],
	// },
	{
		name: 'Package_Detail',
		slug: 'Package_Detail',
		pathname: '',
		category: 'components',
		component: Package_Detail,
		related: ['Package_Summary'],
	},
	{
		name: 'Package_Summary',
		slug: 'Package_Summary',
		pathname: '',
		category: 'components',
		component: Package_Summary,
		related: ['Package_Detail'],
	},
	{
		name: 'Pending_Animation',
		slug: 'Pending_Animation',
		pathname: '',
		category: 'components',
		component: Pending_Animation,
		related: ['Pending_Button'],
	},
	{
		name: 'Pending_Button',
		slug: 'Pending_Button',
		pathname: '',
		category: 'components',
		component: Pending_Button,
		related: ['Pending_Animation'],
	},
	{
		name: 'Redirect',
		slug: 'Redirect',
		pathname: '',
		category: 'components',
		component: Redirect,
		related: ['Breadcrumb'],
	},
	{
		name: 'Teleport',
		slug: 'Teleport',
		pathname: '',
		category: 'components',
		component: Teleport,
		related: [], // TODO external `Dialog`
	},
];

for (const t of tomes) init_tome(t);
