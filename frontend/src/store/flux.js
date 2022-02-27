export const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      character: [],
      planets:[],
      vehicles:[],
      favoriteList:[],
      bio:[]


      //Crear variable para planetas y para vehiculos LISTO
    },
    actions: {
      fetchCharacter: () => {
        fetch("https://swapi.dev/api/people", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        })
          .then((resp) => resp.json())
          .then((response) => setStore({ character: response.results }));
      },
      fetchPlanets: () => {
        fetch("https://swapi.dev/api/planets",{
          method: "GET",
          headers: {"Content-type": "application/json"},
        })
          .then((resp)=>resp.json())
          .then((response)=> setStore({planets: response.results}))
      },
      fetchVehicles:() => {
        fetch("https://swapi.dev/api/vehicles", {
          method: "GET",
          headers: {"Content-type": "application/json"},
        })
          .then((resp)=>resp.json())
          .then((response)=>setStore({vehicles:response.results}))
      },
      addFavorite:(item)=>{
        //consultar sobre guardar getStore y getAction en variables
        const store = getStore();
        /* const actions = getActions(); */
        setStore({favoriteList:[...store.favoriteList,item]})
        console.log(store.favoriteList)
      },
      deleteFavorite:(i)=>{
        const store = getStore();
        const newList = store.favoriteList.filter((item,index)=>index !==i)
        setStore({favoriteList:newList})
        
      },
      fetchSingleCharacter:(item)=>{
        //console.log(item)
        const actions = getActions()
        fetch(item,{
          method: "GET",
          headers:{"Content-type":"application/json"},
        })
          .then((resp)=>resp.json())
          .then((response)=>{actions.setterList(response)})
        
        const store = getStore()
        console.log(store.bio)
      },
      fetchSinglePlanet:(item)=>{
        //console.log(item)
        const actions = getActions()
        fetch(item,{
          method: "GET",
          headers:{"Content-type":"application/json"},
        })
          .then((resp)=>resp.json())
          .then((response)=>{actions.setterList(response)})
        
        const store = getStore()
        console.log(store.bio)
      },
      fetchSingleVehicle:(item)=>{
        //console.log(item)
        const actions = getActions()
        fetch(item,{
          method: "GET",
          headers:{"Content-type":"application/json"},
        })
          .then((resp)=>resp.json())
          .then((response)=>{actions.setterList(response)})
        
        const store = getStore()
        console.log(store.bio)
      },
      setterList:(response)=>{
        const store = getStore()
        setStore({bio:response})
        console.log(store.bio)

      }      
    //Realizar un fetch para planetas y para vehiculos LISTO
    },
  };
};
