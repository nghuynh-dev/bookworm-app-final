import Repository from './repository'

class CartService{
    async postCartToDb(data){
        const endpoint = 'orders'
        const response = await Repository.post(endpoint, data)
        return response
    }
}
export default new CartService()
