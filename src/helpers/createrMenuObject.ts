type MenuOptions = '' | 'all'|'dog'|'cat'|'fish';
export const createrMenuObject = (activeMenu:MenuOptions) =>{
    let returnObeject ={
        all:false,
        dog:false,
        cat:false,
        fish:false

    };

    if(activeMenu !== ''){
        returnObeject[activeMenu] = true;
    }

    return returnObeject;
}