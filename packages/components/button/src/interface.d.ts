import type { ButtonHTMLAttributes } from 'vue';

export type ButtonSizeType = '' | 'large' | 'default' | 'small';

export type ButtonType = '' | 'default' | 'primary' | 'success' | 'info' | 'danger' | 'warning' | 'error';

export type ButtonNativeType = NonNullable<ButtonHTMLAttributes['type']>;