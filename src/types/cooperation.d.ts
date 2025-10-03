export type CooperationItem = {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    highlights: {
        text: string;
        className?: string;
    }[];
};