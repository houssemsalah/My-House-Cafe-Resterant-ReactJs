import { createSlice } from "@reduxjs/toolkit";

const initialState ={
 itemList: [
   {id:Math.floor(100000 + Math.random() * 900000),type:'pizza' ,title:'Pizza Nepture',price:'7500' ,description:'bsghfs hhhs hhdshz gvccx vgds dgshd'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'pizza' ,title:'Pizza 4 Saison ',price:'9000' ,description:'gcjhkgjkgjk'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'pizza' ,title:'Pizza My House',price:'10000' ,description:'jtkrvcs;ygyecy'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'pizza' ,title:'Pizza Costarican',price:'5000' ,description:'mpiuljk;mojl,ioih'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'pizza', title:'Pizza Italien',price:'4500' ,description:'zaewdqqeazwaezqd'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'pizza' ,title:'Pizza Tunisien',price:'8000' ,description:'rtvgvyetree'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'pizza' ,title:'Pizza Escalope',price:'9500' ,description:'fgggcjhkfdsvsdqgjkgjk'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'pizza' ,title:'Pizza Hot',price:'12000' ,description:'gcjhkgjkgjk'},

   {id:Math.floor(100000 + Math.random() * 900000),type:'drink',title:'Café Express',price:'2500' ,description:'poiuytrez'}, 
   {id:Math.floor(100000 + Math.random() * 900000),type:'drink',title:'Café Direct',price:'4000' ,description:'saazejr ikujhygbvfdc'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'drink',title:'Café American',price:'3500' ,description:'oiuynb i,ujyhbtgvfcd'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'drink',title:'pizza',price:'7000' ,description:'viykuj,n grevfzg fezv'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'drink' ,title:'Tea',price:'5000' ,description:'gcjhkgjkgjk'},

   {id:Math.floor(100000 + Math.random() * 900000),type:'drink' ,title:'Gazouz',price:'2500' ,description:'nbvcxw< lkjhgfds uytrez'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'drink' ,title:'Eau',price:'2000' ,description:'momlikujyh btgrfced eccdxzs'},

   {id:Math.floor(100000 + Math.random() * 900000),type:'sandwiche',title:'escalope',price:'5000' ,description:'fdhqcjhk yfskssxz<z<g jkgjk'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'sandwiche' ,title:'Chawerma',price:'6000' ,description:'zeqtgkitg jrysjd jr rsj'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'sandwiche' ,title:'Kebda',price:'4000' ,description:'gtehs cjheeqyekg jkgjk'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'sandwiche' ,title:'Omelette',price:'3500' ,description:'HGDDgcjh rzqhrzH kgjkgjk'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'sandwiche' ,title:'Thon',price:'4000' ,description:'gcjRE QHSGST hkgjkgjk'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'sandwiche' ,title:'Salami',price:'4500' ,description:'ZERGq fen tdhwndtwn'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'sandwiche' ,title:'Mixte',price:'5000' ,description:'zegshq trjwrq hgwebt'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'sandwiche' ,title:'Thon',price:'7500' ,description:'gcjhkgjkgjk'},

   {id:Math.floor(100000 + Math.random() * 900000),type:'plat' ,title:'Ma9arouna',price:'10000' ,description:'dshge rehes bbhthstntr'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'plat' ,title:'Couscous',price:'9000' ,description:'tdnfd dtwnrywfn tnrdwh'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'plat' ,title:'Rouz jerbi',price:'1200' ,description:'gct rhjshtfnsny  jhkgjkgjk'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'plat' ,title:'Kefteji',price:'7000' ,description:'tehdsw grews hreh'},
   {id:Math.floor(100000 + Math.random() * 900000),type:'plat' ,title:'Djej Mechwi',price:'16000' ,description:'breqyr nyxnx htdw '},
   {id:Math.floor(100000 + Math.random() * 900000),type:'plat' ,title:'Escalope',price:'9000' ,description:'hdtwbn ug,;tu,gd; '},
   {id:Math.floor(100000 + Math.random() * 900000),type:'plat' ,title:'Mixte',price:'1400' ,description:'txjtdxxjjyf '},
   {id:Math.floor(100000 + Math.random() * 900000),type:'plat' ,title:'Thon',price:'6000' ,description:'gcjhkgx bhted, jkgjk'},


   ]
};

export const itemReducer = createSlice({
  name: "itemlist",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addObject: (state, action) => {
      state.itemList.push(action.payload);
    },
    //remove todos
    removeObject: (state, action) => {
      state.itemList = state.itemList.filter((item) => item.id != action.payload);
    },
    //update todos
    updateObject: (state, action) => {
      let i = state.itemList.findIndex((el)=>el.id==action.payload.id)
      state.itemList[i]={...action.payload.newItem,id:action.payload.id}
    },
   
}});

export const {
  addObject,
  removeObject,
  updateObject,
 
} = itemReducer.actions;
export default itemReducer.reducer;
