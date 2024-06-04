const tg = window.Telegram.WebApp

export function useTgHook(tg){

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