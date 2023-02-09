const categoryService={
    fetchCategory: async()=>{
        try {
            const request =await fetch(
                'http://localhost:1337/api/categories'
            )
            const data=await request.json()
            return data
            
        } catch (error) {
            console.log('error')
        }
    }
}
export default categoryService