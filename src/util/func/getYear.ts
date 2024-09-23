export default function getYear(date: string): number | string {
	return new Date(date).getFullYear();
}
