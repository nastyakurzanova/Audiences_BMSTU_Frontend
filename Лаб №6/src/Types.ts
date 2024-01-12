import {AxiosResponse} from "axios";

export interface Audiences {
    id: number,
    name: string,
    info: string,
    price: number,
    image: string,
    corpus: string,
    status: number
}


export type Response = Promise<AxiosResponse> | any










// export interface Spare {
// 	id: number,
// 	name: string,
// 	description: string,
// 	image: string,
// 	status: number,
// 	price: number,
// 	weight: number,
// 	condition: number,
// 	rating: number
// }