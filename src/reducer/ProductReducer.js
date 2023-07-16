
const ProductReducer=(state,action)=>{
    switch(action.type){
      case "API_LOADING":
        return{
            ...state,
            isLoading:true,
        }
        
        case 'MY_API_DATA':

        const brandData=action.payload.filter((element)=>{
            return element.brand==="Boot";
        })
            return{
            ...state,
            isLoading:false,
            products:action.payload,
            brandProducts:brandData,
           

            }
            case 'API_ERROR':
                return{
                    ...state,
                    isLoading:false,
                    isError:true,
                }
        
      default :
      return state;
      
    
    }
   
}
export default ProductReducer