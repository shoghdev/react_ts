import { useFetch } from "../usefetch"

function Child2(){
    const {loading,result,error} = useFetch("https://fakestoreapi.com/products")
    return <>
        <h1>Child2</h1>
        {loading && <p>loading...</p>}
        {result && <p>{result.length}</p>}
        {error && <p>error</p>}
    </>
}

export default Child2