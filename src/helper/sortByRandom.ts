import { IMovie } from "src/interfaces/app.interface";

export const sortByRandom = (arr: IMovie[]): IMovie[] => {
    return arr.sort((a: IMovie, b: IMovie): number => Math.random() - 0.5)
}