const initialState = {
    user: [],
    
    
  };
  
  const twitter =  (state = initialState, action) => {
    
      switch(action.type) {
        // Aca va tu codigo;
        
        case 'GAMES_ALL':
          return {
            ...state,
            games:action.payload.data,
            page: action.payload.page || 1
  
          };
  
       
  
            default:
              return state;
          
      }; 
    };
  
  export default twitter;
  