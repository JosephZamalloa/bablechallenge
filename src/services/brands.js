const brandService={
    fetchBrand: async()=>{
        try {
            const request =await fetch(
                'http://localhost:1337/api/brands?populate=*'
            )
            const data=await request.json()
            return data
            
        } catch (error) {
            console.log('error')
        }
    }
}
export default brandService