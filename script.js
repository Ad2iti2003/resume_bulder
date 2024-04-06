function workexperience(){
    let worexp = document.getElementById('wexp');
    let expr = document.createElement('textarea');
    expr.classList.add('form-control');
    expr.classList.add('border-2');
    expr.classList.add('border-grey-600');
    expr.setAttribute('rows', 2);
    expr.setAttribute('placeholder', 'enter here');
    worexp.parentNode.insertBefore(expr, worexp); 
}

