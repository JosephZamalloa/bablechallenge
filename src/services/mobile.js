const mobileService={
    fetchMobile: async()=>{
        try {
            const request =await fetch(
                'http://localhost:1337/api/products?populate=*'
            )
            const data=await request.json()
            return data
            
        } catch (error) {
            console.log('error')
        }
    }
}
export default mobileService