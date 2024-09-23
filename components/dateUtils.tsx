export const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

export const calculateDaysToExpiry = (dateString: string) => {
    const expiryDate = new Date(dateString);
    const today = new Date();
    const timeDiff = expiryDate.getTime() - today.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
};