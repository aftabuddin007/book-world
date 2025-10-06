const getStoredBook = ()=>{
    const storedBookSTR=localStorage.getItem('readList');
    if(storedBookSTR){
        const storedBookDta = JSON.parse(storedBookSTR)
        return storedBookDta
    }else{
        return []
    }


}
const addToStoreDB = (id)=>{
const storedBookDta = getStoredBook();
if(storedBookDta.includes(id)){
    alert('already exist the book')
}else{
    storedBookDta.push(id);
const data =JSON.stringify(storedBookDta)
localStorage.setItem("readList",data)
}


}
export {addToStoreDB,getStoredBook}