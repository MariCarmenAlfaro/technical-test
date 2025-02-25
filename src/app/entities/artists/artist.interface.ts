import { StringDecoder } from "node:string_decoder";

export interface ArtistEntity{
    id: StringDecoder;           
    name: string;         
    birthdate: string;    
    bornCity: string;      
    img: string;        
    rating: number;    
    songs: number[];
}