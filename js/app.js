//Me aseguro que la pagina haya sido cargada
document.addEventListener('DOMContentLoaded',function(){

    //selecciono datos
    const inputEmail = document.querySelector('#email');
    const inputLabel = document.querySelector('#asunto');
    const inputMsg = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //asigno eventos

    inputEmail.addEventListener('blur',validate_data);
    inputLabel.addEventListener('blur',validate_data);
    inputMsg.addEventListener('blur',validate_data);

    function validate_data(e){
        const evento = e.target.value; 
        if(evento.trim() === ''){  //Le aplico trim para quitar espacios en blanco al inicio y al final
            show_error();
        }else{
            valid_data(evento);
        }
    }

    function show_error(){
        console.log('Error');
        //genero el HTML del error
        const warning_msg = document.createElement('p');
        warning_msg.textContent = 'Campo Vacio .... '
        warning_msg.classList.add('bg-red-600','text-white','p-2','text-center'); //agrego una clase de tailwind
        
        
        console.log(warning_msg);

        //Inyecto HTML
        formulario.appendChild(warning_msg);//agrega un hijo al final
        
        
        //con innerHTML
        //formulario.innerHTML = warning_msg.innerHTML; //reemplaza todo el contenido por el html generado

    }

    function valid_data(evt){
        console.log(evt);
    }




    ///Verifico que el campo no esté vacio
/*     inputEmail.addEventListener('blur',print_data);
    inputLabel.addEventListener('blur',print_data);
    inputMsg.addEventListener('blur',print_data);

    function print_data(e){
        const evento = e.target.value; 
        console.log(evento.length);
        if(evento.trim() === ''){  //Le aplico trim para quitar espacios en blanco al inicio y al final
            console.log('Campo Vacio');
        }else{
            console.log('desde el if');
            console.log(evento.trim().length);
            console.log(evento);
        }
    } */


//Solo reutilizamos la funcion
/*     inputEmail.addEventListener('blur',print_data);
    inputLabel.addEventListener('blur',print_data);
    inputMsg.addEventListener('blur',print_data);

    function print_data(e){
        console.log('Desde funcion');
        console.log(e.target.value)
    } */

   ///Mucho codigo repetido que se elimina utilizando funciones  
/*     inputEmail.addEventListener('blur',function(e){
        console.log("input_Email");
        console.log(e.target.value);
    });
    inputLabel.addEventListener('blur',function(e){
        console.log("input_Label");
        console.log(e.target.value);
    });
    inputMsg.addEventListener('blur',function(e){
        console.log("input_Msg");
        console.log(e.target.value);
    }); */
    // Llamada en tiempo real de lo ingresado al campo
/*     inputEmail.addEventListener('input',function(e){
        console.log("INPUT EVENT");
        console.log(e.target.value);
        console.log(e);
    }); */

});

