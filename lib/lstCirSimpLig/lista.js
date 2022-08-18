class Nodo{

    info=0;
    liga=null;
}
export class ListaCircular{
  
   INICIO=null;
   canvas2=null;

   constructor(canvas) {
    this.canvas2 = this.responsive(canvas);
   }///////////////////////////////////////////
   isVacio(){
        if(this.INICIO==null)
            return true;
        else 
            return false;
   }///////////////////////////////////////////
   buscar(DATO){
        var encontrado=false;
        var	tmp=this.INICIO;
        
        if(tmp==null){
            return encontrado;
        }
        else{
            var tmp2=tmp;
            while(tmp2.liga!=tmp){
                if(tmp2.info==DATO){
                    encontrado=true;
                    break;
                }
                tmp2=tmp2.liga;
            }
            if(tmp2.info==DATO){
                encontrado=true;
            }
            return encontrado;
        }
   }///////////////////////////////////////////
   inserta_inicio(DATO){
        var P=this.INICIO;
        var Q=new Nodo();
        if(this.INICIO==null){//vacio
            Q.info=DATO;
            Q.liga=Q;
            P=Q;
        } 
        else{//no vacio
            Q.info=DATO;
            var F=P;
            while(F.liga!=P){
                F=F.liga;
            }
            F.liga=Q;
            Q.liga=P;
            P=Q;
        }
        
        this.INICIO=P;
   }///////////////////////////////////////////
   inserta_final(DATO){
        var P=this.INICIO;
        var Q=new Nodo();
        var T=P;
        while(T.liga!=P){
            T=T.liga; 
        }
        Q.info=DATO;
        T.liga=Q;
        Q.liga=P;

        this.INICIO=P;
    }/////////////////////////////////////////////
    inserta_antes_x(DATO,X){
        var P=this.INICIO;
        
        var Q=P;
        var BAND=1;
        var T;
        while ( Q.info!=X && BAND==1 ){
            if(Q.liga!=P){
                T=Q;
                Q=Q.liga;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var X1=new Nodo();
            X1.info=DATO;
            if(P==Q){
                var U=P;
                while(U.liga!=P){//llegar al ultimo;
                    
                    U=U.liga;
                }
                X1.liga=P;
                P=X1;
                U.liga=P;
            }
            else{
                T.liga=X1;
                X1.liga=Q;
            }
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
    }/////////////////////////////////////////////
    inserta_despues_x(DATO,X){
        var P= this.INICIO;
        var Q=P;
        var BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=P){
                Q=Q.liga;
            }
            else {
                BAND=0;
            } 
        }
        if (BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.liga=Q.liga;
            Q.liga=T;
        }
        else {
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
       this.INICIO =P;
    }///////////////////////////////////////////
    eliminar_inicio(){
        var P= this.INICIO;
        var Q=P;
        var T=P.liga;
        while(Q.liga!=P){
            Q=Q.liga;
        }
        if(Q==P){
            T=null;
        }
        else{
            Q.liga=T;
        }
        this.INICIO = T;
    }///////////////////////////////////////////// 
    eliminar_ultimo(){
        var P=this.INICIO;
        var Q=P;
        var T=new Nodo();
        while(Q.liga!=P){
            T=Q;
            Q=Q.liga;
        }
        if(Q==P){
            P=null;
        }
        else{
            T.liga=P;
        }
        this.INICIO=P
    }///////////////////////////////////////////
    eliminar_x (X) {
        var P=this.INICIO;
        var Q=P;
        var T;
        var BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=P) {
                T = Q;
                Q = Q.liga;
            } else {
                BAND = 0;
            }
        }
        if (BAND == 0) {
             throw new Error("El elemento con informacion X no se encuentra en la lista");
        } else {
            if(Q == P) {
                while(Q.liga!=P){
                    Q=Q.liga;
                }
                if(Q==P){
                    T=null;
                }
                else{
                    T=P.liga;
                    Q.liga=T;
                }
                this.INICIO=T;
            } else {
                T.liga = Q.liga;
                this.INICIO=P;
            }
        }
    }///////////////////////////////////////////
    eliminar_antes_x(X){
        var P=this.INICIO;
        
        var Q=P;
        var T=P;
        var BAND=1;
        if(P.info==X){
            while(Q.liga!=P){
                T=Q;
                Q=Q.liga;
            }
            if(Q==P){
                throw new Error("EL NODO SE APUNTA ASÍ MISMO");
                //P=null;        //Si se desea eliminarlo
            }
            else{
                T.liga=P;
            }

            this.INICIO=P;
        }
        else{
            var R;
            while(Q.info!=X && BAND==1){
                if(Q.liga!=P){
                    R=T;
                    T=Q;
                    Q=Q.liga;
                } else  BAND=0;
            }
            if(BAND==0){
                throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
            } 
            else{
                if(P.liga==Q){
                    T=P.liga;
                    while(Q.liga!=P){
                        Q=Q.liga;
                    }
                    Q.liga=T;
                    this.INICIO=T;
                } else{
                    R.liga=Q;
                    this.INICIO=P;
                } 
            } 
        }
    }///////////////////////////////////////////
    eliminar_despues_x(X){
        var P=this.INICIO;
        var Q=P;
        var BAND=1;
        while(Q.info!=X && BAND==1){
            if(Q.liga!=P){
                Q=Q.liga;
            } else  BAND=0;
        }
        if(BAND==0){
            throw new Error("EL ELEMENTO NO SE ENCUENTRA EN LA LISTA");
        } 
        else {
            var T;
            if(Q.liga==P){
                T=P.liga;
                while(Q.liga!=P){
                    Q=Q.liga;
                }
                if(Q==P){
                    throw new Error("EL NODO SE APUNTA ASÍ MISMO");
                    //P=null;        //Si se desea eliminarlo
                }
                else{
                    Q.liga=T;
                }
                this.INICIO=T;
            } else {
                T=Q.liga;
                Q.liga=T.liga;
                this.INICIO =P;
            }
        }
    } /////////////////////////////////////////////
    dibujarNodosLog(){
        var	tmp=this.INICIO;
        var cad="";
        
        if(tmp!=null){
            var tmp2=tmp;
            if(tmp2.liga==tmp){//1
                cad+=tmp2.info+"::";
                cad+=tmp2.liga.info;
            }
            else{//2 o +
                while(tmp2.liga!=tmp){
                    cad+=tmp2.info+"::";
                    tmp2=tmp2.liga;
                }
                cad+=tmp2.info+"::";
                cad+=tmp2.liga.info;
            }
        }
        
        console.log(cad);
    }/////////////////////////////////////////////
    dibujarNodos(valor){

        var canvas2=this.canvas2;
        var ctx = canvas2.getContext('2d');
        var	tmp=this.INICIO;

        var x=0;
        var y=0;
        var ctd=0;
        
        ctx.clearRect(0, 0, canvas2.width, canvas2.height);//limpia el canva 

        var nodo=null;
        var tmp2=tmp;

        if(tmp!=null){
            if(tmp2.liga==tmp){//Flecha apuntando al inicio
                if(valor != undefined && tmp2.info==valor){
                    //Dibujar rectangulo
                    ctx.beginPath();
                    ctx.fillStyle = "rgb(147, 156, 158)";
                    ctx.fillRect (x,y, 55,30);
                    
                    nodo={};
                    nodo.x=x;
                    nodo.y=y;
                    nodo.width=55;
                    nodo.height=30;
                    nodo.info=tmp2.info;
    
                }
                else{
                    //Dibujar rectangulo
                    ctx.beginPath();
                    ctx.fillStyle = "rgb(81, 215, 245)";
                    ctx.fillRect (x,y, 55,30);
                }    
            }
            else{
                while(tmp2.liga!=tmp){
                    if(valor != undefined && tmp2.info==valor){
                        //Dibujar rectangulo
                        ctx.beginPath();
                        ctx.fillStyle = "rgb(147, 156, 158)";
                        ctx.fillRect (x,y, 55,30);
                        
                        nodo={};
                        nodo.x=x;
                        nodo.y=y;
                        nodo.width=55;
                        nodo.height=30;
                        nodo.info=tmp2.info;
        
                    }
                    else{
                        //Dibujar rectangulo
                        ctx.beginPath();
                        ctx.fillStyle = "rgb(81, 215, 245)"; 
                        ctx.fillRect (x,y, 55,30);
                    }    
        
                    //texto
                    ctx.fillStyle="black";
                    ctx.font = '20px Arial';
                    ctx.fillText(tmp2.info,x+20,y+20);
                    ctx.closePath();
                    
                    if(x>canvas2.width-150){//Flecha de una fila a otra
                        //Dibujar flecha
                        //linea de la flecha
                        ctx.beginPath();
                        ctx.moveTo(x+55,y+15);//linea derecha
                        ctx.lineTo(x+55+20,y+15);
                        ctx.moveTo(x+55+20,y+15);//linea abajo
                        ctx.lineTo(x+55+20,y+50);
                        ctx.moveTo(x+55+20,y+50);//linea izquerda
                        ctx.lineTo(110,y+50);
                        ctx.moveTo(110,y+50);//linea abajo
                        ctx.lineTo(110,y+75);
                        ctx.closePath();
                        ctx.stroke();
                        //cabeza de la flecha
                        ctx.beginPath();
                        ctx.fillStyle="black";
                        ctx.moveTo(105,y+70);
                        ctx.lineTo(110,y+75);
                        ctx.lineTo(115,y+70);
                        ctx.closePath();
                        ctx.fill();
                    }else{
                        if(tmp2.liga!=tmp){
                            //Dibujar flecha
                            //linea de la flecha
                            ctx.beginPath();
                            ctx.moveTo(x+55,y+15);
                            ctx.lineTo(x+55+20,y+15);
                            ctx.closePath();
                            ctx.stroke();
                            //cabeza de la flecha
                            ctx.beginPath();
                            ctx.fillStyle="black";
                            ctx.moveTo(x+55+20,y+10);
                            ctx.lineTo(x+55+20+5,y+15);
                            ctx.lineTo(x+55+20,y+20);
                            ctx.closePath();
                            ctx.fill();
                        } 
                    }

                    tmp2=tmp2.liga;
                    
                    if(x>canvas2.width-150){//Para una nueva fila
                        ctd=1;
                        x=80;
                        y=y+75;
                    }
                    else{
                        x=80*++ctd;
                    }
                }
                if(valor != undefined && tmp2.info==valor){
                    //Dibujar rectangulo
                    ctx.beginPath();
                    ctx.fillStyle = "rgb(147, 156, 158)";//VERDE
                    ctx.fillRect (x,y, 55,30);
                    
                    nodo={};
                    nodo.x=x;
                    nodo.y=y;
                    nodo.width=55;
                    nodo.height=30;
                    nodo.info=tmp2.info;
    
                }
                else{
                    //Dibujar rectangulo
                    ctx.beginPath();
                    ctx.fillStyle = "rgb(81, 215, 245)";  //VERDE OSCURO
                    ctx.fillRect (x,y, 55,30);
                }
            }
            //texto
            ctx.fillStyle="black";
            ctx.font = '20px Arial';
            ctx.fillText(tmp2.info,x+20,y+20);
            ctx.closePath();
            
            //Flecha apuntando al inicio
            //Dibujar flecha
            //linea de la flecha
            ctx.beginPath();
            ctx.moveTo(x+55,y+15);//linea derecha
            ctx.lineTo(x+55+20,y+15);
            ctx.moveTo(x+75,y+15);//linea abajo
            ctx.lineTo(x+75,y+50);
            ctx.moveTo(x+75,y+50);//linea izquerda
            ctx.lineTo(30,y+50);
            ctx.moveTo(30,y+50);//linea arriba
            ctx.lineTo(30,30);
            ctx.closePath();
            ctx.stroke();
            //cabeza de la flecha
            ctx.beginPath();
            ctx.fillStyle="black";
            ctx.moveTo(25,35);
            ctx.lineTo(30,30);
            ctx.lineTo(35,35);
            ctx.closePath();
            ctx.fill();

            if(nodo!=null){

                setTimeout(function(){

                    ctx.beginPath();
                    ctx.fillStyle = "rgb(81, 215, 245)";
                    ctx.fillRect (nodo.x,nodo.y,nodo.width,nodo.height);
        
                    //texto
                    ctx.fillStyle="white";
                    ctx.font = '20px Arial';
                    ctx.fillText(nodo.info,nodo.x+20,nodo.y+20);
                    ctx.closePath();

                },2000);
            
            }
        }
        
    }/////////////////////////////////////////////
    responsive(canvas){
        
        if(window.innerWidth>800){//escritorio
            canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
            canvas.height = window.innerHeight*0.22; 
        }
        else{//mobiles
             canvas.width  = window.innerWidth*1;  // set the resolution to fill the page
             
             if(window.innerHeight<350){
                canvas.height = window.innerHeight*0.2; 
             }
             else{
                canvas.height = window.innerHeight*0.1; 
             }
        }
        
        return canvas;
    }///////////////////////////////////////////////////////////////
}