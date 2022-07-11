import Repository from './repository'
import {getBookById} from "../actions";

class ShopService{
    async getType(){
        const endpoint = 'books/type'
        const response = await Repository.get(endpoint)
        return response
    }
    async getBookDefault(query_string){
        const endpoint = `books/filter?${query_string}`
        const response = await Repository.get(endpoint)
        return response
    }
    async getBookById(id){
        const endpoint = `reviews/${id}`
        const response = await Repository.get(endpoint)
        return response
    }
}
export default new ShopService()
