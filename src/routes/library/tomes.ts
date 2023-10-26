import {init_tome, type Tome} from '$lib/tome.js';
import PendingAnimation from '$routes/library/PendingAnimation/+page.svelte';
import PendingButton from '$routes/library/PendingButton/+page.svelte';
import PackageSummary from '$routes/library/PackageSummary/+page.svelte';
import PackageDetail from '$routes/library/PackageDetail/+page.svelte';
import Teleport from '$routes/library/Teleport/+page.svelte';
import Alert from '$routes/library/Alert/+page.svelte';
// import Library from '$routes/library/Library/+page.svelte';
// import menu_item from '$routes/library/menu_item/+page.svelte';
import Redirect from '$routes/library/Redirect/+page.svelte';
import HueInput from '$routes/library/HueInput/+page.svelte';
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
		name: 'HueInput',
		slug: 'HueInput',
		pathname: '',
		category: 'components',
		component: HueInput,
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
		name: 'PackageDetail',
		slug: 'PackageDetail',
		pathname: '',
		category: 'components',
		component: PackageDetail,
		related: ['PackageSummary'],
	},
	{
		name: 'PackageSummary',
		slug: 'PackageSummary',
		pathname: '',
		category: 'components',
		component: PackageSummary,
		related: ['PackageDetail'],
	},
	{
		name: 'PendingAnimation',
		slug: 'PendingAnimation',
		pathname: '',
		category: 'components',
		component: PendingAnimation,
		related: ['PendingButton'],
	},
	{
		name: 'PendingButton',
		slug: 'PendingButton',
		pathname: '',
		category: 'components',
		component: PendingButton,
		related: ['PendingAnimation'],
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
