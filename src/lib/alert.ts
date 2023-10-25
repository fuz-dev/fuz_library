// TODO move to module context

export type AlertStatus = 'inform' | 'help' | 'error';

export interface AlertStatusOptions {
	color: string;
	icon: string | null;
}

export const alert_status_options: Record<AlertStatus, AlertStatusOptions> = {
	inform: {color: 'var(--text_2)', icon: '🗨️'},
	help: {color: 'var(--color_2)', icon: '👉'},
	error: {color: 'var(--color_5)', icon: '✋'},
};
