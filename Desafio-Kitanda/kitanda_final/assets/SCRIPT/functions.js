  

    function listaDinamica(relaçãoProdutos, ulId){
        const recebeLista = document.querySelector(`#${ulId}`);

        for( let lisProd of relaçãoProdutos){
            const filhoLi = document.createElement('li');
            
            for(let listDin in lisProd){
                
                if ( listDin == 'preco'){
                    recebeLista.appendChild(filhoLi).setAttribute('data-preco', lisProd[listDin]);                   
                }
                else{
                    recebeLista.appendChild(filhoLi).textContent = `${lisProd[listDin]}`;                  
                }               
            }    
        }       
    };    
   
    function selecaoItensCesta(ulIdProd, ulcestaId, idTotal){

        const lista = document.querySelectorAll(`#${ulIdProd} > li`);
        const cestaCli = document.querySelector(`#${ulcestaId}`);
        const total = document.querySelector(`#${idTotal}`);

        let soma = 0;

        for(let produto of lista){            
            const filhoLi = document.createElement('li');

            let i = 1;

            produto.addEventListener('click',function(){
                
                if(i==1){
                    soma += Number(produto.dataset.preco);
                    total.value = soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

                    if ( produto == 'preco'){
                     }
                 else{
                    cestaCli.appendChild(filhoLi).textContent = produto.innerHTML;                  
                    }
                i++;
                }else{
                     alert(`O item "${produto.innerHTML}" já está na sua cesta`);
                }               
            });
        }
    };
    export{selecaoItensCesta, listaDinamica};