import type { IconName } from "lucide-react/dynamic";

type ButtonVariants = 'primary' | 'secondary' | 'accent' | 'ghost' | 'link' | 'outline' | 'danger' | 'success' | 'warning';
type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface BaseProps {
    children: React.ReactNode;
    variant?: ButtonVariants;
    size?: ButtonSizes;
    loadingMessage?: string;
    className?: string;
    iconName?: IconName;
    iconPosition?: 'left' | 'right';
    fullWidth?: boolean;
}

interface Button extends BaseProps {
    href?: never;
}

interface Link extends BaseProps {
    href: string;
    disabled?: never;
    loading?: never;
    onClick?: never;
}

export type ButtonProps = Button | Link;
