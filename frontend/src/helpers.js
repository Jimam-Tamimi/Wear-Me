import axios from "axios"

export const getProductDetails = (productSlug) => new Promise( async (resolve, reject)  => {
    try{
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}shop/api/products/${productSlug}/`);

        resolve(res)
    }
    catch(err){
        reject(err)
    }
});

