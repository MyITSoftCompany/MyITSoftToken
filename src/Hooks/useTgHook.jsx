const useTgHook = () => {
    const tg = window.Telegram.WebApp

    const onClose = () =>{
        tg.close()
      }
      
    const onToggleButton = () =>{
        if(tg.MainButton.isVisivle){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    }
    alert(tg.initDataUnsafe?.user)
    return{
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
    
}
export default useTgHook;