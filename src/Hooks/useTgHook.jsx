const tg = window.Telegram.WebApp

const useTgHook = () => {

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
    return{
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}
export default useTgHook;