export const formatDate = (date: Date): string => {
    return date.toISOString();
};

export const validatePostMessage = (message: string): boolean => {
    return message.length > 0 && message.length <= 280;
};