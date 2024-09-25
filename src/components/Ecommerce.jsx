import {useState,useEffect} from 'react'

function Ecommerce() {
    let [posts,setPosts]=useState([]);
    let [items,Setitems]=useState(0)

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(postsList=>setPosts(postsList))
        .catch(err=>console.log(err))
    },[])
    

    function addedToCart(){
       Setitems(items+1) 
    }

  return (
    <div>
           <header className='header fs-1  mt-3 bg-dark text-light p-4 bg-opacity-75'>E-Commerce Platform</header>
           <h1 className='text-primary'>Products ... </h1>
           <div className="row ">
           {
            posts.map(post=>
            (
            <div className="m-5 card w-25 text-center bg-dark bg-opacity-25 text-dark border-success "  key={post.id}>
                <div className='card-body '>
                    <h2 className='card-header'>{post.id}</h2>
                    <h2 className='card-title text-center pt-3'>{post.title}</h2>
                    <h3 className='pt-3'>{post.price}</h3>
                    
                    <img src={post.image} className='w-25 rounded pt-3' alt="" />
                    <h4 className='fs-2 pt-3'>{post.category}</h4>
                    <h2>Rating : {post.rating.rate}</h2>
                    <h2 className='card-footer'>Price : {post.rating.count}</h2>
                    <button className="btn-success btn-lg btn" onClick={addedToCart}>Add to Cart</button>
                </div>
            </div>

            )
            
            )
           }
           <h1 className='fs-1 bg-danger'>Items in the Cart  are : </h1>
           <h1 className='text-dark'>{items}</h1>

           </div>
           
           
           
    </div>
  )
}

export default Ecommerce