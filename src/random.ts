export default class Random {
    static getRandomElement<T>(array: T[]): T {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    static getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static getRandomBoolean(): boolean {
        return Math.random() < 0.5;
    }

    static getRandomElements<T>(array: T[], count: number): T[] {
        const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
        return shuffledArray.slice(0, count);
    }
}
