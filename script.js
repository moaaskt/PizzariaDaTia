let somMussa = 0;
let somaMista = 0;
let somaCala = 0;
let somaBacon= 0;
let somaPortu = 0;
let somaVege = 0;
let somaFrang =0;
let vendaMussa = 0.00;
let vendaMista = 0.00;
let vendaCala = 0.00;
let vendabacon = 0.00;
let vendaPortu = 0.00;
let vendaVege = 0.00;
let vendaFran = 0.00;


let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('expor');

btnVendas.addEventListener('click',venda,false);
btnEstorno.addEventListener('click',estorno,false);
btnPlanilha.addEventListener('click',panilha,false);


function venda(e){
if(document.getElementById('mussarela').checked){
  somMussa = somMussa + 1;
  vendaMussa = vendaMussa + 18.99;
  if(somMussa <0){
    somMussa = 0;
    vendaMussa = 0.00;
  }
  document.getElementById('resultadoMussa').innerHTML = somMussa;
  document.getElementById('vendaMussa').innerHTML = vendaMussa.toFixed(2);


}else if (document.getElementById('mista').checked){
  somaMista = somaMista + 1;
  vendaMista = vendaMista + 22.99;
  if(somaMista <0){
    somaMista = 0;
    vendaMista = 0.00;
  }
  document.getElementById('resultadoMista').innerHTML = somaMista;
  document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);



}else if (document.getElementById('calabresa').checked){
  somaCala = somaCala + 1;
  vendaCala = vendaCala + 25.99;
  if(somaCala <0){}


  document.getElementById('resultadoCala').innerHTML = somaCala;
  document.getElementById('vendaCala').innerHTML = vendaCala.toFixed(2);



}else if(document.getElementById('bacon').checked){
  somaBacon = somaBacon +1;
  vendabacon = vendabacon + 21.99;
  document.getElementById('resultadoBacon').innerHTML = somaBacon;
  document.getElementById('vendabacon').innerHTML = vendabacon.toFixed(2);



}else if(document.getElementById('portuguesa').checked){
  somaPortu = somaPortu +1;
  vendaPortu = vendaPortu + 32.00;
  document.getElementById('resultadoPortu').innerHTML = somaPortu;
  document.getElementById('vendaPortu').innerHTML = vendaPortu.toFixed(2);
  


}else if(document.getElementById('vegetariana').checked){
  somaVege = somaVege + 1;
  vendaVege = vendaVege + 42.00;
  document.getElementById('resultadoVege').innerHTML = somaVege;
  document.getElementById('vendaVege').innerHTML = vendaVege.toFixed(2);



}else if(document.getElementById('francatu').checked){
  somaFrang = somaFrang + 1;
  vendaFran = vendaFran + 32.00;
  document.getElementById('resultadoFran').innerHTML = somaFrang;
  document.getElementById('vendaFran').innerHTML = vendaFran.toFixed(2);

};
};

function reset(e){
  document.getElementById('resultadoFran').innerHTML = "";
  document.getElementById('vendaFran').innerHTML = "";

  document.getElementById('resultadoVege').innerHTML = "";
  document.getElementById('vendaVege').innerHTML = "";
  
  document.getElementById('resultadoPortu').innerHTML = "";
  document.getElementById('vendaPortu').innerHTML = "";
  
  document.getElementById('resultadoBacon').innerHTML = "";
  document.getElementById('vendabacon').innerHTML = "";
  
  
  document.getElementById('resultadoCala').innerHTML = "";
  document.getElementById('vendaCala').innerHTML = "";
  

  document.getElementById('resultadoMista').innerHTML = "";
  document.getElementById('vendaMista').innerHTML = "";
  
  
  document.getElementById('resultadoMussa').innerHTML = "";
  document.getElementById('vendaMussa').innerHTML = "";


}

function estorn(e){
  if(document.getElementById('mussarela').checked){
    somMussa = somMussa - 1;
    vendaMussa = vendaMussa - 18.99;
    if(somMussa <0){
      somMussa = 0;
      vendaMussa = 0.00;
    }
    document.getElementById('resultadoMussa').innerHTML = somMussa;
    document.getElementById('vendaMussa').innerHTML = vendaMussa.toFixed(2);


   }else if (document.getElementById('mista').checked){
    somaMista = somaMista - 1;
    vendaMista = vendaMista - 22.99;
    if(somaMista <0){
      somaMista = 0;
      vendaMista = 0.00;
    }
    document.getElementById('resultadoMista').innerHTML = somaMista;
    document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);

  }else if (document.getElementById('calabresa').checked){
    somaCala = somaCala - 1;
    vendaCala = vendaCala - 25.99;
    if(somaCala <0){}
  
  
    document.getElementById('resultadoCala').innerHTML = somaCala;
    document.getElementById('vendaCala').innerHTML = vendaCala.toFixed(2);
  
  
  }else if(document.getElementById('bacon').checked){
    somaBacon = somaBacon - 1;
    vendabacon = vendabacon - 21.99;
    document.getElementById('resultadoBacon').innerHTML = somaBacon;
    document.getElementById('vendabacon').innerHTML = vendabacon.toFixed(2);
  
  }else if(document.getElementById('portuguesa').checked){
    somaPortu = somaPortu -1;
    vendaPortu = vendaPortu - 32.00;
    document.getElementById('resultadoPortu').innerHTML = somaPortu;
    document.getElementById('vendaPortu').innerHTML = vendaPortu.toFixed(2);
    
  
  
  }else if(document.getElementById('vegetariana').checked){
    somaVege = somaVege - 1;
    vendaVege = vendaVege - 42.00;
    document.getElementById('resultadoVege').innerHTML = somaVege;
    document.getElementById('vendaVege').innerHTML = vendaVege.toFixed(2);
  
  
  
  }else if(document.getElementById('francatu').checked){
    somaFrang = somaFrang - 1;
    vendaFran = vendaFran - 32.00;
    document.getElementById('resultadoFran').innerHTML = somaFrang;
    document.getElementById('vendaFran').innerHTML = vendaFran.toFixed(2);
  
  };
}

function panilha(){
  TableToExcel.convert(document.getElementById('table'));
};