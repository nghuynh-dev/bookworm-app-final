import Repository from './repository'

class BookService {
    async getBookBanner() {
        const endpoint = 'books/filter?sort=sale&show=10'
        const response = await Repository.get(endpoint)
        return response
    }
    async getBookRecommend() {
        const endpoint = 'books/filter?sort=recommend&show=8'
        const response = await Repository.get(endpoint)
        return response
    }
    async getBookPopular() {
        const endpoint = 'books/filter?sort=popular&show=8'
        const response = await Repository.get(endpoint)
        return response
    }

}
export default new BookService()

